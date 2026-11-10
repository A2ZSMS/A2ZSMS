"use client";

/*
 * Google Ads landing page: /bulk-sms-service/
 *
 * Goal: more form leads. The website form (SharedLeadForm) is the main lead source;
 * a Call button is the only secondary action. No WhatsApp, no prices, no popups.
 *
 * The form itself (fields, validation, TeleCRM/Make webhook, thank-you redirect) lives in
 * SharedLeadForm. This page turns off its countdown, urgency strip and message box
 * through props, and styles it through the .form* classes in BulkSmsLanding.module.css.
 */

import { useState, useEffect } from "react";
import styles from "./BulkSmsLanding.module.css";
import SharedLeadForm from "../SharedLeadForm/SharedLeadForm";

const PHONE_HREF = "tel:+918431086185";
const PHONE_DISPLAY = "+91 84310 86185";

// Number of businesses served (same figure used across the site). Change here only.
const CLIENT_COUNT = "1000+";

// Google Ads conversion for taps on "Call". Paste the real value when it is created in
// Google Ads, e.g. "AW-17957140915/AbCdEfGhIjk". While empty, a "call_click" event is still
// pushed to the dataLayer (usable as a GTM trigger) and the call opens normally.
const ADS_CALL_CONVERSION = "";

// Hide the site-wide top bar, header and footer on this landing page. Done in CSS that is
// part of the static HTML (not in JS after load) so the page does not jump (CLS).
const HIDE_SITE_CHROME =
  ".header-top-bg,nav.navbar,footer.site-footer{display:none!important}" +
  // the sticky bar's "Get Quote" already takes visitors back up on phones
  "@media(max-width:767.98px){.button-bottom{display:none!important}}";

/* ═══════════════════════════════════════════════════
   CALL TRACKING — fire the conversion, then dial.
   300 ms fallback so the call always opens even if the
   tag never answers.
   ═══════════════════════════════════════════════════ */
const handleCallClick = (e) => {
  const href = e.currentTarget.getAttribute("href");
  if (typeof window === "undefined" || !href) return;
  e.preventDefault();

  let opened = false;
  const openDialer = () => {
    if (opened) return;
    opened = true;
    window.location.href = href;
  };

  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "call_click", lead_page: "bulk-sms-service" });
    if (ADS_CALL_CONVERSION && typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: ADS_CALL_CONVERSION,
        event_callback: openDialer,
      });
      setTimeout(openDialer, 300);
      return;
    }
  } catch (_) {
    /* never block the call */
  }
  openDialer();
};

const CallLink = ({ className, children }) => (
  <a href={PHONE_HREF} className={className} onClick={handleCallClick}>
    {children}
  </a>
);

/* ═══════════════════════════════════════════════════
   LEAD FORM (unchanged component, new labels)
   ═══════════════════════════════════════════════════ */
const SMS_SERVICES = [
  { value: "Promotional SMS", label: "Promotional SMS" },
  { value: "Transactional SMS", label: "Transactional SMS" },
  { value: "OTP SMS", label: "OTP SMS" },
  { value: "Bulk SMS API", label: "Bulk SMS API" },
  { value: "Other", label: "Other" },
];

// Rendered directly under the submit button (order set in CSS).
const FORM_NOTE = [
  { icon: "bi-telephone-fill", label: "Our team will call you within 30 minutes" },
];

const LeadForm = ({ formId = "get-started" }) => (
  <SharedLeadForm
    styles={styles}
    thankYouUrl="/bulk-sms-service/thank-you/"
    serviceOptions={SMS_SERVICES}
    trustItems={FORM_NOTE}
    pageId="bulk-sms-landing"
    formId={formId}
    submitLabel="Get Free Demo & Quote"
    formTitle="Get a free demo & quote"
    formSubtitle="Takes 20 seconds · No credit card"
    showCountdown={false}
    showUrgency={false}
    showMessage={false}
    errorContact="Please call us at +91 84310 86185 or try again."
  />
);

const QuoteButton = ({ light = false }) => (
  <a href="#get-started" className={light ? styles.ctaBtnLight : styles.ctaBtn}>
    Get Free Demo &amp; Quote <i className="bi bi-arrow-right"></i>
  </a>
);

/* ═══════════════════════════════════════════════════
   TOP BAR
   ═══════════════════════════════════════════════════ */
const TopBar = () => (
  <header className={styles.topBar}>
    <div className={`container ${styles.topBarInner}`}>
      <a href="/" className={styles.topBarLogo} aria-label="A2ZSMS home">
        <img
          src="/image/logo1-240.webp"
          alt="A2ZSMS"
          width={54}
          height={40}
        />
      </a>
      <CallLink className={styles.topBarCall}>
        <i className="bi bi-telephone-fill"></i>
        <span className={styles.topBarCallNum}>{PHONE_DISPLAY}</span>
        <span className={styles.topBarCallShort}>Call</span>
      </CallLink>
    </div>
  </header>
);

/* ═══════════════════════════════════════════════════
   HERO — headline + form on the first mobile screen
   ═══════════════════════════════════════════════════ */
const BADGES = [
  { icon: "bi-patch-check-fill", label: "DLT Registered" },
  { icon: "bi-send-fill", label: "99% Delivery Rate" },
  { icon: "bi-geo-alt-fill", label: "Bengaluru-based support" },
];

const CLIENTS = [
  { src: "/image/clients/yamaha.webp", alt: "Yamaha" },
  { src: "/image/clients/nitte.webp", alt: "NITTE Institute of Communication" },
  { src: "/image/clients/motherhood.webp", alt: "Motherhood Hospital" },
  { src: "/image/clients/iskcon.webp", alt: "ISKCON" },
  { src: "/image/clients/naidu-mobiles.webp", alt: "Naidu Mobiles" },
  { src: "/image/clients/sai-shishir-tours.webp", alt: "Sai Shishir Tours" },
  { src: "/image/clients/groavy.webp", alt: "Groavy" },
];

const Hero = () => (
  <section className={styles.hero}>
    <div className="container">
      <div className={styles.heroGrid}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>Bulk SMS Service Provider in India</h1>
          <p className={styles.heroSub}>
            DLT-registered · OTP, promotional &amp; transactional SMS · API + easy
            panel · Fast delivery
          </p>
          <div className={styles.heroBtns}>
            <CallLink className={styles.callBtn}>
              <i className="bi bi-telephone-fill"></i> Call Now
            </CallLink>
            <a href="#get-started" className={styles.heroQuoteLink}>
              Get Free Demo &amp; Quote <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>

        <div className={styles.heroForm}>
          <LeadForm />
        </div>

        <div className={styles.heroTrust}>
          <ul className={styles.badges}>
            {BADGES.map((b) => (
              <li key={b.label} className={styles.badge}>
                <i className={`bi ${b.icon}`}></i>
                {b.label}
              </li>
            ))}
          </ul>
          <p className={styles.trustedBy}>
            Trusted by <strong>{CLIENT_COUNT} businesses</strong> across India
          </p>
          <div className={styles.logos}>
            {CLIENTS.map((c) => (
              <img
                key={c.src}
                src={c.src}
                alt={c.alt}
                width={96}
                height={48}
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════
   CONTENT SECTIONS
   ═══════════════════════════════════════════════════ */
const STEPS = [
  {
    icon: "bi-pencil-square",
    title: "Share your requirement",
    text: "Fill the form or call us. Tell us what you want to send and to how many people.",
  },
  {
    icon: "bi-patch-check-fill",
    title: "We set up DLT and sender ID",
    text: "Our team files your DLT entity, sender ID and message templates for you.",
  },
  {
    icon: "bi-rocket-takeoff-fill",
    title: "Start sending SMS",
    text: "Send from our easy panel or connect your app with the API, and track every delivery.",
  },
];

const HowItWorks = () => (
  <section className={styles.section}>
    <div className="container">
      <h2 className={styles.sectionTitle}>How it works</h2>
      <ol className={styles.steps}>
        {STEPS.map((s, i) => (
          <li key={s.title} className={styles.step}>
            <span className={styles.stepNum}>{i + 1}</span>
            <div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardText}>{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

const INDUSTRIES = [
  { icon: "bi-mortarboard-fill", title: "Schools & colleges", text: "Attendance, fee reminders, exam and result alerts." },
  { icon: "bi-hospital-fill", title: "Hospitals & clinics", text: "Appointment reminders, reports ready, follow-ups." },
  { icon: "bi-house-door-fill", title: "Real estate", text: "Project launches, site-visit reminders, lead follow-ups." },
  { icon: "bi-cart-check-fill", title: "E-commerce", text: "Order, shipping and delivery updates, offers." },
  { icon: "bi-bank2", title: "Banks & NBFCs", text: "Transaction alerts, EMI reminders, loan updates." },
  { icon: "bi-phone-fill", title: "Apps (OTP)", text: "Login, sign-up and payment OTPs on a priority route." },
];

const WhoWeServe = () => (
  <section className={styles.sectionAlt}>
    <div className="container">
      <h2 className={styles.sectionTitle}>Who we serve</h2>
      <div className={styles.grid3}>
        {INDUSTRIES.map((x) => (
          <div key={x.title} className={styles.card}>
            <i className={`bi ${x.icon} ${styles.cardIcon}`}></i>
            <div>
              <h3 className={styles.cardTitle}>{x.title}</h3>
              <p className={styles.cardText}>{x.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.ctaRow}>
        <QuoteButton />
      </div>
    </div>
  </section>
);

const REASONS = [
  { icon: "bi-lightning-charge-fill", title: "Fast OTP delivery", text: "OTP and alert SMS go on a priority transactional route." },
  { icon: "bi-code-slash", title: "API + SMPP", text: "REST API and SMPP for your app, website or CRM." },
  { icon: "bi-bar-chart-line-fill", title: "Delivery reports", text: "Live, number-wise delivery reports for every campaign." },
  { icon: "bi-headset", title: "Dedicated support", text: "A Bengaluru-based team that helps you from DLT to first send." },
];

const WhyUs = () => (
  <section className={styles.section}>
    <div className="container">
      <h2 className={styles.sectionTitle}>Why A2ZSMS</h2>
      <div className={styles.grid4}>
        {REASONS.map((x) => (
          <div key={x.title} className={styles.card}>
            <i className={`bi ${x.icon} ${styles.cardIcon}`}></i>
            <div>
              <h3 className={styles.cardTitle}>{x.title}</h3>
              <p className={styles.cardText}>{x.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Real customer reviews only: { text, name, company, city }. The section is hidden
// while this list is empty.
const REVIEWS = [];

const Reviews = () =>
  REVIEWS.length === 0 ? null : (
    <section className={styles.sectionAlt}>
      <div className="container">
        <h2 className={styles.sectionTitle}>What our customers say</h2>
        <div className={styles.grid3}>
          {REVIEWS.map((r) => (
            <figure key={r.name} className={styles.review}>
              <div className={styles.stars} aria-label="5 out of 5">
                ★★★★★
              </div>
              <blockquote className={styles.cardText}>&ldquo;{r.text}&rdquo;</blockquote>
              <figcaption className={styles.reviewBy}>
                <strong>{r.name}</strong>, {r.company}, {r.city}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );

const FAQS = [
  {
    q: "What is DLT?",
    a: "DLT (Distributed Ledger Technology) registration is mandatory in India under TRAI rules for every business that sends commercial SMS. Your company, sender ID and message templates are registered on an operator's DLT portal. We do this registration for you.",
  },
  {
    q: "How fast is setup?",
    a: "Your SMS panel account can be ready within 24 hours. DLT entity, sender ID and template approvals are done by the operators and usually take a few working days. We file everything and follow up for you.",
  },
  {
    q: "Do you provide an API?",
    a: "Yes. We provide an HTTP/REST API and SMPP, with documentation and developer support, so you can send SMS from your website, app, CRM or software.",
  },
  {
    q: "Is OTP delivery instant?",
    a: "OTP SMS are sent on a priority transactional route and normally reach the phone within a few seconds, 24×7.",
  },
  {
    q: "Do you give a free demo?",
    a: "Yes. Fill the form and our team will call you, show you the panel and the API, and share a quote for your volume. There is no charge for the demo.",
  },
];

const Faq = () => {
  const [open, setOpen] = useState(0);
  return (
    <section className={styles.sectionAlt}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Frequently asked questions</h2>
        <div className={styles.faqList}>
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className={`${styles.faqItem} ${isOpen ? styles.faqOpen : ""}`}>
                <button
                  type="button"
                  className={styles.faqQ}
                  aria-expanded={isOpen}
                  aria-controls={`faq-a-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span>{f.q}</span>
                  <i className={`bi ${isOpen ? "bi-dash" : "bi-plus"}`}></i>
                </button>
                <div id={`faq-a-${i}`} className={styles.faqA} hidden={!isOpen}>
                  <p>{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const BottomForm = () => (
  <section className={styles.bottomForm}>
    <div className="container">
      <div className={styles.bottomGrid}>
        <div>
          <h2 className={styles.bottomTitle}>Get a free demo &amp; quote</h2>
          <p className={styles.bottomText}>
            Tell us what you need. Our team will call you within 30 minutes, show you
            the panel and share a quote for your volume.
          </p>
          <ul className={styles.bottomList}>
            <li><i className="bi bi-check-circle-fill"></i> DLT registration handled for you</li>
            <li><i className="bi bi-check-circle-fill"></i> OTP, promotional &amp; transactional SMS</li>
            <li><i className="bi bi-check-circle-fill"></i> Easy panel, API and SMPP</li>
          </ul>
          <CallLink className={styles.bottomCall}>
            <i className="bi bi-telephone-fill"></i> Prefer to talk? Call {PHONE_DISPLAY}
          </CallLink>
        </div>
        <LeadForm formId="get-started-bottom" />
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════
   STICKY MOBILE BAR — Call | Get Quote
   ═══════════════════════════════════════════════════ */
const MobileBar = () => (
  <div className={styles.mobileBar}>
    <CallLink className={styles.mobileBarCall}>
      <i className="bi bi-telephone-fill"></i> Call
    </CallLink>
    <a href="#get-started" className={styles.mobileBarQuote}>
      Get Quote <i className="bi bi-arrow-right"></i>
    </a>
  </div>
);

const LandingFooter = () => (
  <footer className={styles.landingFooter}>
    <a href="/privacy/">Privacy Policy</a>
    <span aria-hidden="true">·</span>
    <a href="/terms/">Terms &amp; Conditions</a>
  </footer>
);

/* ═══════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════ */
const BulkSmsLanding = () => {
  // Keep the site-wide chat button clear of the sticky mobile bar.
  useEffect(() => {
    const btn = document.querySelector('button[aria-label="Open chat"]');
    if (!btn) return;
    const mq = window.matchMedia("(max-width: 767.98px)");
    const place = () => {
      btn.style.bottom = mq.matches ? "76px" : "20px";
    };
    place();
    mq.addEventListener("change", place);
    return () => {
      mq.removeEventListener("change", place);
      btn.style.bottom = "20px";
    };
  }, []);

  return (
    <>
      <style>{HIDE_SITE_CHROME}</style>
      <div className={styles.page}>
        <TopBar />
        <main>
          <Hero />
          <HowItWorks />
          <WhoWeServe />
          <WhyUs />
          <Reviews />
          <Faq />
          <BottomForm />
        </main>
        <LandingFooter />
        <MobileBar />
      </div>
    </>
  );
};

export default BulkSmsLanding;
