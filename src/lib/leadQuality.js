// ─────────────────────────────────────────────────────────────
// A2ZSMS Lead Quality Filter + Scorer
// Shared by all 5 form components. Pure JS, no side effects.
//
// checkLead({name, email, phone, company, message, service, formFillMs, honeypot})
//   → {
//       block:      true if the submit should be stopped
//       hardBlock:  true if a rule made it a definite reject (fake phone, no consent, honeypot…)
//       silent:     true if we should drop silently (honeypot / bot-fast fill) — no error to user
//       score:      0–100 quality score (100 = clean, 0 = spam)
//       tags:       ["high-quality" | "review" | "blocked", ...] — for TeleCRM Tag field
//       flagReason: comma-joined list of scoring reductions (for TeleCRM Subject)
//       errors:     {name?, email?, phone?, message?, general?} to show under fields
//     }
// ─────────────────────────────────────────────────────────────

const DISPOSABLE_EMAIL_DOMAINS = new Set([
  "mailinator.com","tempmail.com","10minutemail.com","guerrillamail.com",
  "yopmail.com","trashmail.com","fakeinbox.com","throwawaymail.com",
  "getnada.com","maildrop.cc","sharklasers.com","discard.email",
  "tempinbox.com","mintemail.com","spam4.me","mohmal.com","dispostable.com",
  "tempmailo.com","emailondeck.com","mailnesia.com","tempr.email",
]);

const ROLE_EMAIL_PREFIXES = new Set([
  "admin","administrator","test","noreply","no-reply","webmaster",
  "postmaster","root","abuse","spam","demo",
]);

const FAKE_NAME_BLOCKLIST = new Set([
  "test","asdf","abc","abcd","qwerty","admin","user","name","demo",
  "xxx","aaa","anonymous","noname","fake","null","undefined",
]);

const FAKE_PHONE_BLOCKLIST = new Set([
  "9999999999","8888888888","7777777777","6666666666","1234567890",
  "9876543210","0000000000","1111111111","9090909090","9123456789",
]);

const FAKE_COMPANY_BLOCKLIST = new Set([
  "test","personal","self","-","na","n/a","none","abc","xxx",
  "company","my company","test company","private","individual",
]);

// CPaaS-specific spam: "unban WhatsApp", "recover account", etc.
// These are the wrong service — refer users to WhatsApp support instead.
const WRONG_SERVICE_KEYWORDS = [
  "whatsapp unban","unban","unblock my","hack whatsapp","hack account",
  "recover account","recover whatsapp","recover my number","otp bypass",
  "spy whatsapp","fake otp","receive otp","verification code","forgot password",
  "reset password","banned account","account ban","suspend","suspended",
];

// Job seekers — refer to careers, not sales
const JOB_SEEKER_KEYWORDS = [
  "looking for job","looking for a job","need job","need a job","hiring",
  "resume","my cv","internship","opportunity","apply for","career",
  "vacancy","position","employment","fresher","experienced professional",
];

// Ultra-short greetings — no signal
const GREETING_ONLY = new Set([
  "hi","hello","hey","test","test message","hi hi","hello hello","hlo",
  "hii","hiii","heyy","yo","sup","ping","xxx","???","..",
]);

const NAME_RE = /^[A-Za-z][A-Za-z .'-]{1,59}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MOBILE_RE = /^[6-9]\d{9}$/;
const URL_IN_TEXT = /(https?:\/\/|www\.[a-z0-9])/i;
const NON_LATIN = /[Ѐ-ӿ一-鿿぀-ヿ؀-ۿ]/;

function sanitizePhone(raw) {
  let p = String(raw || "").replace(/\D/g, "");
  if (p.length === 13 && p.startsWith("091")) p = p.slice(3);
  if (p.length === 12 && p.startsWith("91"))  p = p.slice(2);
  if (p.length === 11 && p.startsWith("0"))   p = p.slice(1);
  return p;
}

export function checkLead(input = {}) {
  const {
    name, email, phone, company, message,
    formFillMs, honeypot,
  } = input;

  const errors = {};
  const reasons = [];
  const tags = [];
  let score = 100;
  let hardBlock = false;

  // Honeypot filled → bot. Silent drop.
  if (honeypot) {
    return {
      block: true, hardBlock: true, silent: true,
      score: 0, tags: ["blocked", "honeypot"], flagReason: "honeypot", errors: {},
    };
  }

  // Form-fill time: < 2s = bot, > 20min = stale tab
  if (typeof formFillMs === "number") {
    if (formFillMs < 2000) {
      return {
        block: true, hardBlock: true, silent: true,
        score: 0, tags: ["blocked", "too-fast"], flagReason: "form-filled-too-fast", errors: {},
      };
    }
    if (formFillMs > 20 * 60 * 1000) {
      score -= 15;
      reasons.push("stale-form");
    }
  }

  // ── Name ─────────────────────────────────────────────────
  const n = String(name || "").trim();
  const nLower = n.toLowerCase();
  if (!n) {
    errors.name = "Name is required";
    hardBlock = true;
  } else if (n.length < 3) {
    errors.name = "At least 3 characters";
    hardBlock = true;
  } else if (!NAME_RE.test(n)) {
    errors.name = "Letters and spaces only";
    hardBlock = true;
  } else if (FAKE_NAME_BLOCKLIST.has(nLower)) {
    errors.name = "Please enter your real name";
    hardBlock = true;
  } else if (/(.)\1{4,}/.test(n)) {
    errors.name = "Please enter your real name";
    hardBlock = true;
  } else if (/\d/.test(n)) {
    // Name has digits — suspicious but not hard block
    score -= 30;
    reasons.push("name-has-digits");
  }

  // ── Email (skipped if not provided — widget has no email field) ──
  const e = String(email || "").trim().toLowerCase();
  if (e) {
    if (!EMAIL_RE.test(e)) {
      errors.email = "Please enter a valid email";
      hardBlock = true;
    } else {
      const [prefix, domain] = e.split("@");
      if (DISPOSABLE_EMAIL_DOMAINS.has(domain)) {
        score -= 40;
        reasons.push("disposable-email");
      } else if (ROLE_EMAIL_PREFIXES.has(prefix)) {
        score -= 30;
        reasons.push("role-email");
      } else if (prefix.length < 2) {
        errors.email = "Please enter a valid email";
        hardBlock = true;
      }
    }
  }

  // ── Phone ────────────────────────────────────────────────
  const p = sanitizePhone(phone);
  if (!p) {
    errors.phone = "Phone number is required";
    hardBlock = true;
  } else if (!MOBILE_RE.test(p)) {
    errors.phone = "Enter a valid 10-digit Indian mobile";
    hardBlock = true;
  } else if (FAKE_PHONE_BLOCKLIST.has(p)) {
    errors.phone = "Please enter a real mobile number";
    hardBlock = true;
  } else if (/(.)\1{6,}/.test(p)) {
    score -= 30;
    reasons.push("phone-repeated-digits");
  }

  // ── Company (optional in some forms) ─────────────────────
  const c = String(company || "").trim();
  if (c) {
    const cLower = c.toLowerCase();
    if (FAKE_COMPANY_BLOCKLIST.has(cLower)) {
      score -= 25;
      reasons.push("fake-company");
    } else if (/^\d+$/.test(c)) {
      score -= 25;
      reasons.push("company-only-digits");
    } else if (nLower && cLower === nLower) {
      score -= 20;
      reasons.push("company-same-as-name");
    } else if (URL_IN_TEXT.test(c)) {
      score -= 30;
      reasons.push("company-has-url");
    }
  }

  // ── Message (optional) ───────────────────────────────────
  const m = String(message || "").trim();
  if (m) {
    const mLower = m.toLowerCase();

    // Wrong-service (WhatsApp unban / recover / hack) — hard block with helpful redirect
    if (WRONG_SERVICE_KEYWORDS.some(k => mLower.includes(k))) {
      errors.message = "We do not offer WhatsApp unban / account recovery. Please contact WhatsApp Support directly.";
      hardBlock = true;
    }
    // Job seekers — hard block with helpful redirect
    else if (JOB_SEEKER_KEYWORDS.some(k => mLower.includes(k))) {
      errors.message = "For careers, please email careers@a2zsms.in directly.";
      hardBlock = true;
    }
    // Greeting-only or very short
    else if (m.length <= 10 || GREETING_ONLY.has(mLower)) {
      score -= 20;
      reasons.push("greeting-only-message");
    }
    // URL/backlink spam in message
    else if (URL_IN_TEXT.test(m)) {
      score -= 30;
      reasons.push("message-has-url");
    }
    // Non-Latin script (we don't serve those languages)
    else if (NON_LATIN.test(m)) {
      score -= 25;
      reasons.push("non-latin-message");
    }
  }

  // ── Compute final action ─────────────────────────────────
  score = Math.max(0, Math.min(100, score));

  const block = hardBlock || score < 30;
  const flagged = !block && score < 60;

  if (block) tags.push("blocked");
  else if (flagged) tags.push("review");
  else tags.push("high-quality");

  // For flagged/review leads, add specific reason tag for TeleCRM filtering
  if (flagged) {
    if (reasons.includes("disposable-email")) tags.push("disposable-email");
    if (reasons.includes("stale-form")) tags.push("stale-form");
    if (reasons.includes("greeting-only-message")) tags.push("short-message");
  }

  return {
    block,
    hardBlock,
    silent: false,
    score,
    tags,
    flagReason: reasons.join(", "),
    errors,
    reasons,
  };
}

export { sanitizePhone };
