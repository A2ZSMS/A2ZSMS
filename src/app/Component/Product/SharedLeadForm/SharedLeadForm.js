"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { gtag_report_conversion } from "../../../GoogleTracking";
import { sendToTeleCRM } from "@/lib/telecrm";

// ── Blocklists (also enforced server-side in Make.com scenario) ──────────────
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
  // NOTE: "info", "support", "help", "user" removed — common in Indian B2B
]);
const FAKE_NAME_BLOCKLIST = new Set([
  "test","asdf","abc","abcd","qwerty","admin","user","name","demo",
  "xxx","aaa","anonymous","noname","fake","null","undefined",
]);
const FAKE_PHONE_BLOCKLIST = new Set([
  "9999999999","8888888888","7777777777","6666666666","1234567890",
  "9876543210","0000000000","1111111111","9090909090","9123456789",
]);
const NAME_RE   = /^[A-Za-z][A-Za-z .'-]{1,59}$/;
const EMAIL_RE  = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
const MOBILE_RE = /^[6-9]\d{9}$/;

// ── All constants BEFORE any function that references them ────────────────────
const MAKE_URL      = "https://hook.eu1.make.com/hjr28ubvji8cy5vxmtccwam3w0bnho70";
const W3F_KEY       = "f51b2c3b-8f16-4d07-b40d-ec3d342fa530";
const MIN_MS        = 800;             // minimum fill time — allows browser autofill
const FETCH_TIMEOUT = 7000;            // 7s per endpoint attempt

// ── Fetch with timeout to avoid hanging submissions ───────────────────────────
const fetchWithTimeout = (url, options, ms = FETCH_TIMEOUT) => {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), ms);
  return fetch(url, { ...options, signal: controller.signal })
    .finally(() => clearTimeout(timer));
};

// ── Tiny countdown timer (1-per-form, isolated state) ────────────────────────
const CountdownTimer = ({ styles }) => {
  const [time, setTime] = useState({ h: 23, m: 47, s: 12 });
  useEffect(() => {
    const t = setInterval(() => {
      setTime((p) => {
        let { h, m, s } = p;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 23; m = 59; s = 59; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);
  const pad = (n) => String(n).padStart(2, "0");
  return (
    <div className={styles.countdown}>
      <i className="bi bi-clock-fill"></i>
      <span>Offer expires in</span>
      <span className={styles.countdownTime}>
        {pad(time.h)}:{pad(time.m)}:{pad(time.s)}
      </span>
    </div>
  );
};

/**
 * SharedLeadForm
 *
 * Props:
 *   styles         {object}   CSS module from the parent landing page
 *   thankYouUrl    {string}   Redirect after successful submit
 *   serviceOptions {string[]} Values shown in the service <select>
 *   pageId         {string}   Identifier sent to Make.com (e.g. "rcs-landing")
 *   formId         {string}   id attr on the card wrapper (default: "get-started")
 *   urgencyText    {string}   Optional urgency strip text
 *   submitLabel    {string}   Submit button label
 *   trustItems     {object[]} Array of { icon, label } for the trust strip
 */
const SharedLeadForm = ({
  styles,
  thankYouUrl,
  serviceOptions = [],
  pageId = "landing",
  formId = "get-started",
  urgencyText = "Only 4 free setup spots left this month",
  submitLabel = "Get My Free Demo & Pricing",
  trustItems = [
    { icon: "bi-shield-lock-fill", label: "256-bit SSL" },
    { icon: "bi-patch-check-fill", label: "Google Partner" },
    { icon: "bi-clock-fill",       label: "Reply in 2 hrs" },
  ],
}) => {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "",
    service: "", message: "",
    website_url: "", // honeypot — never shown to users
  });
  const [errors,      setErrors]      = useState({});
  const [loading,     setLoading]     = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [agreed,      setAgreed]      = useState(false);
  const [agreeError,  setAgreeError]  = useState("");

  const router        = useRouter();
  const mountTime     = useRef(Date.now());
  const utmRef        = useRef({});
  const isSubmitting  = useRef(false); // mutex — blocks double-clicks at ref level

  // Capture UTM / gclid / referrer once on mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    const p = new URLSearchParams(window.location.search);
    utmRef.current = {
      gclid:        p.get("gclid")        || "",
      utm_source:   p.get("utm_source")   || "",
      utm_medium:   p.get("utm_medium")   || "",
      utm_campaign: p.get("utm_campaign") || "",
      utm_term:     p.get("utm_term")     || "",
      utm_content:  p.get("utm_content")  || "",
      referrer:     document.referrer      || "",
    };
  }, []);

  // ── Validation ──────────────────────────────────────────────────────────────
  const validate = () => {
    const errs = {};

    const name = form.name.trim();
    if (!name)                              errs.name = "Name is required";
    else if (name.length < 3)              errs.name = "At least 3 characters";
    else if (!NAME_RE.test(name))          errs.name = "Letters and spaces only";
    else if (FAKE_NAME_BLOCKLIST.has(name.toLowerCase())) errs.name = "Enter your real name";
    else if (/(.)\1{4,}/.test(name))       errs.name = "Enter your real name";

    const email = form.email.trim().toLowerCase();
    if (!email)                            errs.email = "Email is required";
    else if (!EMAIL_RE.test(email))        errs.email = "Enter a valid email";
    else {
      const [prefix, domain] = email.split("@");
      if (DISPOSABLE_EMAIL_DOMAINS.has(domain)) errs.email = "Disposable emails not allowed";
      else if (ROLE_EMAIL_PREFIXES.has(prefix)) errs.email = "Use a personal or business email";
      else if (prefix.length < 2)               errs.email = "Enter a valid email";
    }

    const phone = form.phone.trim();
    if (!phone)                            errs.phone = "Phone number is required";
    else if (!MOBILE_RE.test(phone))       errs.phone = "Enter a valid 10-digit Indian mobile";
    else if (FAKE_PHONE_BLOCKLIST.has(phone)) errs.phone = "Enter a real mobile number";
    else if (/(.)\1{6,}/.test(phone))      errs.phone = "Enter a real mobile number";

    const company = form.company.trim();
    if (!company)                          errs.company = "Company name is required";
    else if (company.length < 2)           errs.company = "At least 2 characters";

    if (!form.service)                     errs.service = "Please select a service";

    return errs;
  };


  // ── Handlers ────────────────────────────────────────────────────────────────
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({
      ...p,
      [name]: name === "phone" ? value.replace(/\D/g, "").slice(0, 10) : value,
    }));
    if (errors[name])  setErrors((p) => ({ ...p, [name]: "" }));
    if (submitError)   setSubmitError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ── Block double-clicks immediately at ref level (before any state update) ──
    if (isSubmitting.current) return;
    isSubmitting.current = true;
    setLoading(true); // disable button UI instantly on every click attempt

    setSubmitError("");
    setAgreeError("");

    // Honeypot — silent drop, reset lock
    if (form.website_url) {
      isSubmitting.current = false;
      setLoading(false);
      return;
    }

    // Time-trap — silent drop, reset lock
    const formMs = Date.now() - mountTime.current;
    if (formMs < MIN_MS) {
      isSubmitting.current = false;
      setLoading(false);
      return;
    }

    // Privacy checkbox
    if (!agreed) {
      setAgreeError("Please accept the privacy policy and terms to continue.");
      isSubmitting.current = false;
      setLoading(false);
      return;
    }

    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      isSubmitting.current = false;
      setLoading(false);
      return;
    }

    const cleanEmail = form.email.trim().toLowerCase();
    const cleanPhone = form.phone.trim();

    const payload = {
      name:             form.name.trim(),
      email:            cleanEmail,
      phone:            cleanPhone,
      company:          form.company.trim().slice(0, 100),
      service:          form.service,
      message:          form.message.trim().slice(0, 1000),
      page:             pageId,
      formFillSeconds:  Math.round(formMs / 1000),
      userAgent:        typeof navigator !== "undefined" ? navigator.userAgent : "",
      language:         typeof navigator !== "undefined" ? navigator.language  : "",
      screen:           typeof window !== "undefined"
                          ? `${window.screen.width}x${window.screen.height}` : "",
      timezone:         typeof Intl !== "undefined"
                          ? Intl.DateTimeFormat().resolvedOptions().timeZone : "",
      timestamp:        new Date().toISOString(),
      privacyAccepted:  true,
      ...utmRef.current,
    };

    // ── Send to Make.com (with 1 auto-retry) ────────────────────────────────
    const tryMake = async () => {
      const opts = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      };
      try {
        const res = await fetchWithTimeout(MAKE_URL, opts, 7000);
        if (res.ok) return true;
      } catch (_) {}
      // Retry once after 1s pause
      await new Promise((r) => setTimeout(r, 1000));
      try {
        const res = await fetchWithTimeout(MAKE_URL, opts, 7000);
        if (res.ok) return true;
      } catch (_) {}
      return false;
    };

    // ── Send to Web3Forms (with 1 auto-retry) ────────────────────────────────
    const tryW3F = async () => {
      const opts = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          access_key: W3F_KEY,
          subject: `New Lead — ${payload.name} [${pageId}]`,
        }),
      };
      try {
        const res = await fetchWithTimeout("https://api.web3forms.com/submit", opts);
        if (res.ok) return true;
      } catch (_) {}
      // Retry once after 1s pause
      await new Promise((r) => setTimeout(r, 1000));
      try {
        const res = await fetchWithTimeout("https://api.web3forms.com/submit", opts);
        if (res.ok) return true;
      } catch (_) {}
      return false;
    };

    try {
      // Fire TeleCRM immediately — not conditional on other APIs succeeding
      sendToTeleCRM(form.name, form.phone, form.email, pageId).catch(() => {});

      // Fire both simultaneously — every submission goes to both
      const [makeOk, w3fOk] = await Promise.all([tryMake(), tryW3F()]);

      console.info(`[Form] Make.com=${makeOk} | Web3Forms=${w3fOk} | pageId=${pageId}`);

      if (!makeOk && !w3fOk) {
        setSubmitError(
          "Submission failed. Please WhatsApp us directly at +91 84310 86185 or try again.",
        );
        setLoading(false);
        isSubmitting.current = false; // unlock so user can retry
        return;
      }

      gtag_report_conversion();
      // isSubmitting stays true — page is redirecting, no need to unlock
      router.push(thankYouUrl);
    } catch (err) {
      console.error("[Form] Unexpected error:", err);
      setSubmitError("Network error — please check your connection and retry.");
      setLoading(false);
      isSubmitting.current = false; // unlock so user can retry
    }
  };

  // ── Render ──────────────────────────────────────────────────────────────────
  return (
    <div className={styles.formCard} id={formId}>
      <CountdownTimer styles={styles} />

      {/* Urgency strip */}
      <div className={styles.formUrgencyStrip}>
        <span className={styles.formUrgencyDot}></span>
        <span>
          <strong>{urgencyText}</strong> — grab yours before they&apos;re gone
        </span>
        <span style={{ marginLeft: 6 }}>🔥</span>
      </div>

      <div className={styles.formResponseTime}>
        <span className={styles.formResponseDot}></span>
        Average response time: <strong>under 2 hours</strong>
      </div>

      <h4 className={styles.formTitle}>Claim Your Free Demo &amp; Pricing</h4>
      <p className={styles.formSub}>
        Takes 30 seconds · No credit card · Our expert calls you back
      </p>

      <form onSubmit={handleSubmit} noValidate>
        {/* Honeypot — hidden from real users */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute", left: "-9999px",
            top: "auto", width: 1, height: 1, overflow: "hidden",
          }}
        >
          <label htmlFor={`hp_${formId}`}>Website</label>
          <input
            type="text"
            id={`hp_${formId}`}
            name="website_url"
            tabIndex={-1}
            autoComplete="new-password"
            value={form.website_url}
            onChange={handleChange}
            readOnly
            onFocus={(e) => e.target.removeAttribute("readOnly")}
          />
        </div>

        {/* Error banner */}
        {submitError && (
          <div
            role="alert"
            style={{
              background: "#fee2e2", color: "#991b1b",
              border: "1px solid #fecaca", padding: "10px 14px",
              borderRadius: 8, marginBottom: 14,
              fontSize: 14, fontWeight: 600,
            }}
          >
            <i className="bi bi-exclamation-triangle-fill me-2"></i>
            {submitError}
          </div>
        )}

        <div className="row g-3">
          {/* Full Name */}
          <div className="col-12">
            <label className={styles.formLabel} htmlFor={`name_${formId}`}>
              Full Name <span className={styles.formRequired}>*</span>
            </label>
            <div className={styles.formInputWrap}>
              <i className={`bi bi-person ${styles.formInputIcon}`}></i>
              <input
                type="text"
                id={`name_${formId}`}
                name="name"
                placeholder="Your Full Name"
                className={`${styles.formInput} ${errors.name ? styles.formInputError : ""}`}
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
                maxLength={60}
              />
            </div>
            {errors.name && <p className={styles.formError}>{errors.name}</p>}
          </div>

          {/* Email */}
          <div className="col-md-6">
            <label className={styles.formLabel} htmlFor={`email_${formId}`}>
              Email <span className={styles.formRequired}>*</span>
            </label>
            <div className={styles.formInputWrap}>
              <i className={`bi bi-envelope ${styles.formInputIcon}`}></i>
              <input
                type="email"
                id={`email_${formId}`}
                name="email"
                placeholder="you@company.com"
                className={`${styles.formInput} ${errors.email ? styles.formInputError : ""}`}
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
                inputMode="email"
                maxLength={120}
              />
            </div>
            {errors.email && <p className={styles.formError}>{errors.email}</p>}
          </div>

          {/* Phone */}
          <div className="col-md-6">
            <label className={styles.formLabel} htmlFor={`phone_${formId}`}>
              Phone <span className={styles.formRequired}>*</span>
            </label>
            <div className={styles.formInputWrap}>
              <i className={`bi bi-telephone ${styles.formInputIcon}`}></i>
              <input
                type="tel"
                id={`phone_${formId}`}
                name="phone"
                placeholder="10-digit Indian mobile"
                className={`${styles.formInput} ${errors.phone ? styles.formInputError : ""}`}
                value={form.phone}
                onChange={handleChange}
                autoComplete="tel-national"
                inputMode="numeric"
                pattern="[6-9][0-9]{9}"
                maxLength={10}
              />
            </div>
            {errors.phone && <p className={styles.formError}>{errors.phone}</p>}
          </div>

          {/* Company */}
          <div className="col-md-6">
            <label className={styles.formLabel} htmlFor={`company_${formId}`}>
              Company Name <span className={styles.formRequired}>*</span>
            </label>
            <div className={styles.formInputWrap}>
              <i className={`bi bi-building ${styles.formInputIcon}`}></i>
              <input
                type="text"
                id={`company_${formId}`}
                name="company"
                placeholder="Your Company Name"
                className={`${styles.formInput} ${errors.company ? styles.formInputError : ""}`}
                value={form.company}
                onChange={handleChange}
                autoComplete="organization"
                maxLength={100}
              />
            </div>
            {errors.company && <p className={styles.formError}>{errors.company}</p>}
          </div>

          {/* Service */}
          <div className="col-md-6">
            <label className={styles.formLabel} htmlFor={`service_${formId}`}>
              Service <span className={styles.formRequired}>*</span>
            </label>
            <div className={styles.formInputWrap}>
              <i className={`bi bi-grid ${styles.formInputIcon}`}></i>
              <select
                id={`service_${formId}`}
                name="service"
                className={`${styles.formInput} ${errors.service ? styles.formInputError : ""}`}
                value={form.service}
                onChange={handleChange}
                style={{ cursor: "pointer", appearance: "auto" }}
              >
                <option value="">Select a service</option>
                {serviceOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
            {errors.service && <p className={styles.formError}>{errors.service}</p>}
          </div>

          {/* Message */}
          <div className="col-12">
            <label className={styles.formLabel} htmlFor={`message_${formId}`}>
              Your Requirement
            </label>
            <textarea
              id={`message_${formId}`}
              name="message"
              rows="3"
              placeholder="Tell us about your requirements..."
              className={`${styles.formInput} ${styles.formTextarea}`}
              value={form.message}
              onChange={handleChange}
              style={{ paddingLeft: 14 }}
              maxLength={1000}
            />
          </div>

          {/* Privacy & Terms checkbox */}
          <div className="col-12">
            <label
              htmlFor={`consent_${formId}`}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 10,
                cursor: "pointer",
                fontSize: 13,
                color: agreeError ? "#dc2626" : "#555",
                lineHeight: 1.5,
                userSelect: "none",
              }}
            >
              <input
                type="checkbox"
                id={`consent_${formId}`}
                checked={agreed}
                onChange={(e) => {
                  setAgreed(e.target.checked);
                  if (e.target.checked) setAgreeError("");
                }}
                style={{
                  width: 16,
                  height: 16,
                  marginTop: 2,
                  flexShrink: 0,
                  accentColor: "#7c3aed",
                  cursor: "pointer",
                }}
              />
              <span>
                I accept the{" "}
                <a
                  href="/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#7c3aed", fontWeight: 600 }}
                >
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  href="/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#7c3aed", fontWeight: 600 }}
                >
                  Terms of Service
                </a>
                , and agree to be contacted by A2ZSMS regarding my enquiry.
                <span style={{ color: "#dc2626", marginLeft: 3 }}>*</span>
              </span>
            </label>
            {agreeError && (
              <p
                style={{
                  color: "#dc2626",
                  fontSize: 12,
                  marginTop: 4,
                  marginBottom: 0,
                  fontWeight: 600,
                }}
              >
                <i className="bi bi-exclamation-circle-fill me-1"></i>
                {agreeError}
              </p>
            )}
          </div>

          {/* Submit */}
          <div className="col-12">
            <button
              type="submit"
              className={styles.formSubmit}
              disabled={loading}
              style={loading ? {
                opacity: 0.75,
                cursor: "not-allowed",
                pointerEvents: "none",
              } : {}}
            >
              {loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  />
                  Please wait…
                </>
              ) : (
                <>
                  {submitLabel}{" "}
                  <i className="bi bi-arrow-right ms-1"></i>
                </>
              )}
            </button>

            <p className={styles.formPrivacyNote}>
              <i className="bi bi-lock-fill"></i> We never share your details.
              Your information is 100% secure.
            </p>

            <div className={styles.formTrust}>
              {trustItems.map((item) => (
                <div key={item.label} className={styles.formTrustItem}>
                  <i className={`bi ${item.icon}`}></i>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SharedLeadForm;
