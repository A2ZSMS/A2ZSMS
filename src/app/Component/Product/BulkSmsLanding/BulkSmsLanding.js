"use client";

/*
 * Google Ads landing page: /bulk-sms-service/
 *
 * Goal: turn ad clicks into form leads. Clarity (Nov 2026) showed visitors scroll ~40% and stay
 * ~30 seconds, so the first screen carries everything: a headline that matches the search keyword,
 * a "get today's price" offer (prices are given on request, not shown), trust points and the form.
 * Below it: pricing cards, how it works, panel preview, FAQ and a second form. One goal only:
 * the form or the Call button. No popups.
 *
 * The form itself (fields, validation, TeleCRM/Make webhook, thank-you redirect) lives in
 * SharedLeadForm. This page turns off its countdown, urgency strip and message box
 * through props, and styles it through the .form* classes in BulkSmsLanding.module.css.
 */

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./BulkSmsLanding.module.css";
import SharedLeadForm from "../SharedLeadForm/SharedLeadForm";

// Hide the site-wide top bar, header and footer on this landing page. Done in CSS that is
// part of the static HTML (not in JS after load) so the page does not jump (CLS).
const HIDE_SITE_CHROME =
  ".header-top-bg,nav.navbar,footer.site-footer{display:none!important}" +
  // the sticky bar's "Book Free Demo" already takes visitors back up on phones
  "@media(max-width:767.98px){.button-bottom{display:none!important}}";

/* ═══════════════════════════════════════════════════
   LEAD FORM (unchanged component, page-specific labels)
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
  {
    icon: "bi-telephone-fill",
    label: "Our team calls you back with your price",
  },
];

const LeadForm = ({ formId = "get-started" }) => (
  <SharedLeadForm
    styles={styles}
    thankYouUrl="/bulk-sms-service/thank-you/"
    serviceOptions={SMS_SERVICES}
    trustItems={FORM_NOTE}
    pageId="bulk-sms-landing"
    formId={formId}
    submitLabel="Get My Price"
    formTitle="Get today’s SMS price."
    formSubtitle="Tell us what you need. Our team calls you back with your price. A free demo is included."
    showCountdown={false}
    showUrgency={false}
    showMessage={false}
    privacyFooter="DLT registered · Bengaluru, Karnataka"
    errorContact="Please call us at +91 84310 86185 or try again."
    requireEmail={false}
  />
);

const DemoButton = ({ light = false }) => (
  <a href="#get-started" className={light ? styles.ctaBtnLight : styles.ctaBtn}>
    Get My Price <i className="bi bi-arrow-right"></i>
  </a>
);

/* ═══════════════════════════════════════════════════
   TOP BAR
   ═══════════════════════════════════════════════════ */
const TopBar = () => (
  <header className={styles.topBar}>
    <div className={`container ${styles.topBarInner}`}>
      <div className={styles.topBarLogo}>
        <img src="/image/logo1-240.webp" alt="A2ZSMS" width={84} height={62} />
        <span>
          Business messaging.
          <br />
          <strong>Better connected.</strong>
        </span>
      </div>
      <div className={styles.headerActions}>
        <span className={styles.headerDemoNote}>
          <i className="bi bi-tag" /> Free quote · Free demo
        </span>
        <a className={styles.headerDemo} href="#get-started">
          Get Price <i className="bi bi-arrow-up-right" />
        </a>
      </div>
    </div>
  </header>
);

/* ═══════════════════════════════════════════════════
   HERO — value proposition + existing enquiry form
   ═══════════════════════════════════════════════════ */
const CLIENTS = [
  { src: "/image/clients/yamaha.webp", alt: "Yamaha" },
  { src: "/image/clients/nitte.webp", alt: "NITTE Institute of Communication" },
  { src: "/image/clients/motherhood.webp", alt: "Motherhood Hospital" },
  { src: "/image/clients/iskcon.webp", alt: "ISKCON" },
  { src: "/image/clients/naidu-mobiles.webp", alt: "Naidu Mobiles" },
  { src: "/image/clients/sai-shishir-tours.webp", alt: "Sai Shishir Tours" },
  { src: "/image/clients/groavy.webp", alt: "Groavy" },
];

// Headline that matches what the visitor searched for (utm_term from the Google Ads link,
// or the first-touch attribution saved by src/app/layout.js). The default is in the static
// HTML; the swap happens once after load and keeps the same two-line shape.
const HEADLINES = [
  { test: /otp|verification|2fa|two factor/i, line1: "OTP SMS Service.", line2: "Fast and", em: "reliable." },
  { test: /gateway|api|smpp|integration/i, line1: "SMS Gateway & API.", line2: "Panel, API and", em: "SMPP." },
  { test: /transactional/i, line1: "Transactional SMS.", line2: "Alerts that", em: "arrive on time." },
  { test: /promotional|marketing|campaign/i, line1: "Promotional SMS.", line2: "Reach customers", em: "in seconds." },
  { test: /sender|send/i, line1: "Bulk SMS Sender.", line2: "Made for", em: "your business." },
];
const DEFAULT_HEADLINE = { line1: "Bulk SMS Service.", line2: "Made for", em: "your business." };

const useSearchHeadline = () => {
  const [h, setH] = useState(DEFAULT_HEADLINE);
  useEffect(() => {
    try {
      let term = new URLSearchParams(window.location.search).get("utm_term") || "";
      if (!term) {
        const saved = JSON.parse(sessionStorage.getItem("a2z_attribution") || "{}");
        term = saved.utm_term || "";
      }
      const match = HEADLINES.find((x) => x.test.test(term));
      if (match) setH(match);
    } catch (_) {}
  }, []);
  return h;
};

const Hero = () => {
  const h = useSearchHeadline();
  return (
  <section className={styles.hero}>
    <div className="container">
      <div className={styles.heroGrid}>
        <div className={styles.heroText}>
          <span className={styles.eyebrow}>
            <span /> BULK SMS SERVICE PROVIDER · INDIA
          </span>
          <h1 className={styles.heroTitle}>
            {h.line1}
            <br />
            {h.line2} <em>{h.em}</em>
          </h1>
          <p className={styles.heroPrice}>
            <i className="bi bi-tag-fill" />
            <span>
              Get today’s SMS price for your volume,{" "}
              <strong>free and with no obligation.</strong>
            </span>
          </p>
          <p className={styles.heroSub}>
            Promotional, transactional and OTP SMS from one platform. Use our
            own panel, API or SMPP, with DLT setup help from our team.
          </p>
          <ul className={styles.heroTrust}>
            <li>
              <i className="bi bi-check-circle-fill" /> DLT registration help
            </li>
            <li>
              <i className="bi bi-check-circle-fill" /> Own panel, API &amp; SMPP
            </li>
            <li>
              <i className="bi bi-check-circle-fill" /> Bengaluru support team
            </li>
          </ul>
          <a href="#panel-walkthrough" className={styles.heroVideoLink}>
            <i className="bi bi-bar-chart-line-fill" /> See the SMS panel{" "}
            <span>quick overview</span>
            <i className="bi bi-arrow-right" />
          </a>
        </div>
        <div className={styles.heroPhoto}>
          <img
            src="/image/bulk-sms-landing/business-messaging-v2-800.webp"
            srcSet="/image/bulk-sms-landing/business-messaging-v2-480.webp 480w, /image/bulk-sms-landing/business-messaging-v2-800.webp 800w"
            sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 991px) calc(100vw - 453px), (max-width: 1199px) calc(100vw - 510px), (max-width: 1319px) calc(100vw - 568px), 752px"
            alt="Illustrative photograph of an Indian business owner working with a laptop and smartphone"
            width={800}
            height={533}
            loading="eager"
            fetchPriority="high"
          />
          <div className={styles.photoCaption}>
            <span>
              <i className="bi bi-chat-dots-fill" />
            </span>
            <div>
              <strong>Everyday business. Better connected.</strong>
              <small>From your first customer to your next campaign.</small>
            </div>
          </div>
        </div>
        <div className={styles.heroForm}>
          <div className={styles.formRibbon}>
            <span>
              <i className="bi bi-tag" /> FREE PRICE QUOTE
            </span>
            <strong>NO OBLIGATION</strong>
          </div>
          <LeadForm />
          <div className={styles.demoAgenda}>
            <span>WHAT YOU GET</span>
            <p>
              <i className="bi bi-check2" /> Your SMS price for your volume
            </p>
            <p>
              <i className="bi bi-check2" /> Help with DLT registration
            </p>
            <p>
              <i className="bi bi-check2" /> A free demo of the SMS panel
            </p>
          </div>
        </div>
      </div>
      <div className={styles.heroFoot}>
        <span>
          <i className="bi bi-grid-1x2-fill" /> Our own SMS &amp; SMPP panels
        </span>
        <span>
          <i className="bi bi-cloud-check-fill" /> AWS-hosted infrastructure
        </span>
        <span>
          <i className="bi bi-headset" /> Bengaluru-based support
        </span>
      </div>
    </div>
  </section>
  );
};

const CustomerStrip = () => (
  <section className={styles.customerStrip} aria-label="Our customers">
    <div className={`container ${styles.customerInner}`}>
      <p>
        Connecting businesses
        <br />
        <strong>across industries.</strong>
      </p>
      <div className={styles.logos}>
        {CLIENTS.slice(0, 5).map((c) => (
          <img
            key={c.src}
            src={c.src}
            alt={c.alt}
            width={120}
            height={56}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  </section>
);

const PLANS = [
  {
    icon: "bi-megaphone-fill",
    title: "Promotional SMS",
    use: "Offers, sales and announcements to your customers.",
    points: ["Sent to non-DND numbers", "Campaign scheduling", "Delivery reports"],
  },
  {
    icon: "bi-bell-fill",
    title: "Transactional SMS",
    use: "Order updates, alerts and reminders, 24×7.",
    points: ["Delivered to DND numbers", "Your own sender ID", "API & SMPP"],
  },
  {
    icon: "bi-shield-lock-fill",
    title: "OTP SMS",
    use: "Login and verification codes for apps and websites.",
    points: ["Fast delivery route", "API integration help", "DLT template setup"],
  },
];

const Pricing = () => (
  <section className={styles.section} aria-labelledby="pricing-title">
    <div className="container">
      <span className={styles.eyebrow}>SIMPLE PRICING</span>
      <h2 id="pricing-title" className={styles.sectionTitle}>
        Pay for what you send. Higher volume, lower rate.
      </h2>
      <div className={styles.priceGrid}>
        {PLANS.map((p) => (
          <div key={p.title} className={styles.priceCard}>
            <i className={`bi ${p.icon} ${styles.priceIcon}`} />
            <h3 className={styles.cardTitle}>{p.title}</h3>
            <p className={styles.cardText}>{p.use}</p>
            <p className={styles.priceTag}>
              Price on request <small>· based on your volume</small>
            </p>
            <ul className={styles.priceList}>
              {p.points.map((x) => (
                <li key={x}>
                  <i className="bi bi-check2" /> {x}
                </li>
              ))}
            </ul>
            <a href="#get-started" className={styles.ctaBtn}>
              Get exact price <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const PANEL_FEATURES = [
  {
    title: "Meet Nexus",
    time: 0,
    stamp: "0:00",
    detail: "A quick introduction to the SMS platform.",
  },
  {
    title: "Schedule messages",
    time: 15,
    stamp: "0:15",
    detail: "Personalise messages and set recipient-specific send times.",
  },
  {
    title: "Track delivery",
    time: 22,
    stamp: "0:22",
    detail: "See messaging activity, delivery reports and error breakdowns.",
  },
  {
    title: "Export reports",
    time: 31,
    stamp: "0:31",
    detail: "Review per-user reports and export to Excel.",
  },
];

// The 45-second video (3.7 MB) was replaced by a single still image (11–25 KB).
const PanelWalkthrough = () => {
  return (
    <section id="panel-walkthrough" className={styles.walkthroughSection}>
      <div className="container">
        <div className={styles.sectionIntro}>
          <div>
            <span className={styles.eyebrow}>
              SEE THE WORKFLOW. UNDERSTAND THE PLATFORM.
            </span>
            <h2 className={styles.sectionTitle}>
              Meet your SMS panel.
              <br />
              Everything in one place.
            </h2>
          </div>
          <p>
            See how Nexus brings message scheduling, delivery analytics and
            reports together, then explore your requirements with our team in
            a free 10-minute demo.
          </p>
        </div>
        <div className={styles.walkthroughLayout}>
          <figure className={styles.walkthroughPlayer}>
            <div className={styles.playerHeader}>
              <span>
                <i className="bi bi-bar-chart-line-fill" /> Nexus SMS panel overview
              </span>
              <span>SCHEDULING · ANALYTICS · REPORTS</span>
            </div>
            <img
              className={styles.panelImage}
              src="/image/bulk-sms-landing/sms-panel-overview-1200.webp"
              srcSet="/image/bulk-sms-landing/sms-panel-overview-640.webp 640w, /image/bulk-sms-landing/sms-panel-overview-1200.webp 1200w"
              sizes="(max-width: 991px) calc(100vw - 40px), 760px"
              alt="Delivery analytics in the Nexus SMS panel"
              width={1200}
              height={675}
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              Nexus by Ojiva AI. Figures shown are examples.
            </figcaption>
          </figure>
          <div
            className={styles.walkthroughChapters}
            aria-label="Platform highlights"
          >
            <span className={styles.chapterLabel}>INSIDE THE PLATFORM</span>
            {PANEL_FEATURES.map((item, index) => (
              <div className={styles.overviewFeature} key={item.title}>
                <span className={styles.chapterStamp}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>
                  <strong>{item.title}</strong>
                  <small>{item.detail}</small>
                </span>
                <i className="bi bi-check2" />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.walkthroughCta}>
          <div>
            <strong>Want to see how this fits your business?</strong>
            <span>
              We’ll walk you through your campaign, OTP or integration
              requirement.
            </span>
          </div>
          <DemoButton />
        </div>
      </div>
    </section>
  );
};

const STEPS = [
  {
    icon: "bi-pencil-square",
    title: "Share your requirement",
    text: "Fill in the form or call us. Tell us the SMS type and roughly how many messages you send.",
  },
  {
    icon: "bi-patch-check-fill",
    title: "Get your price and DLT help",
    text: "Our team calls you back with your price and helps with DLT registration, sender ID and templates.",
  },
  {
    icon: "bi-rocket-takeoff-fill",
    title: "Start sending",
    text: "Send from our panel, or connect through API or SMPP. A free demo of the panel is included.",
  },
];

const HowItWorks = () => (
  <section className={styles.section}>
    <div className="container">
      <span className={styles.eyebrow}>HOW IT WORKS</span>
      <h2 className={styles.sectionTitle}>
        From enquiry to sending SMS in three steps.
      </h2>
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

const FAQS = [
  {
    q: "How much does bulk SMS cost?",
    a: "The price per SMS depends on the type (promotional, transactional or OTP) and how many messages you send each month. Higher volume means a lower rate. Fill in the form and our team calls you back with your exact price.",
  },
  {
    q: "What is DLT?",
    a: "DLT (Distributed Ledger Technology) registration is mandatory in India under TRAI rules for every business that sends commercial SMS. Your company, sender ID and message templates are registered on an operator's DLT portal. We do this registration for you.",
  },
  {
    q: "How fast is setup?",
    a: "Setup depends on your requirements and the readiness of your DLT registration, sender ID and message templates. Our team explains the onboarding steps when they call you.",
  },
  {
    q: "Do you provide an API?",
    a: "Yes. We provide an HTTP/REST API and SMPP, with documentation and developer support, so you can send SMS from your website, app, CRM or software.",
  },
  {
    q: "Can I use SMS for OTPs?",
    a: "Yes. We support OTP messaging for application workflows. Share your integration and delivery requirements in the form and our team will advise you.",
  },
  {
    q: "Do you give a free demo?",
    a: "Yes. When our team calls you with your price, they can also show you the SMS panel in a free 10-minute demo.",
  },
];

const Faq = () => {
  const [open, setOpen] = useState(0);
  return (
    <section className={styles.sectionAlt}>
      <div className="container">
        <span className={styles.eyebrow}>
          A LITTLE CLARITY BEFORE YOU START
        </span>
        <h2 className={styles.sectionTitle}>Good questions. Clear answers.</h2>
        <div className={styles.faqList}>
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`${styles.faqItem} ${isOpen ? styles.faqOpen : ""}`}
              >
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
          <h2 className={styles.bottomTitle}>
            Get your SMS price today.
          </h2>
          <p className={styles.bottomText}>
            Tell us what you need and our team calls you back with your price.
            It’s free, with no obligation, and a demo of the panel is included.
          </p>
          <ul className={styles.bottomList}>
            <li>
              <i className="bi bi-check-circle-fill"></i> Guidance on DLT and
              onboarding
            </li>
            <li>
              <i className="bi bi-check-circle-fill"></i> OTP, promotional &amp;
              transactional SMS
            </li>
            <li>
              <i className="bi bi-check-circle-fill"></i> Easy panel, API and
              SMPP
            </li>
          </ul>
          <p className={styles.demoFollowup}>
            Submit your details and our team will call you back with your
            price.
          </p>
        </div>
        <LeadForm formId="get-started-bottom" />
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════
   STICKY MOBILE BAR — Call / Get My Price
   ═══════════════════════════════════════════════════ */
// Google Ads conversion for taps on "Call". Paste the real value when it exists in
// Google Ads, e.g. "AW-17957140915/AbCdEfGhIjk". While empty, a "call_click" event is
// still pushed to the dataLayer (usable as a GTM trigger) and the call opens normally.
const ADS_CALL_CONVERSION = "AW-17957140915/FXvGCJz36b0dELPz0PJC"; // "Call tap - Bulk SMS landing" (Secondary), created 2026-11-23

// Record the tap, then dial. 300 ms fallback so the call always opens.
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

const MobileBar = () => (
  <div className={styles.mobileBar}>
    <a
      href="tel:+918431086185"
      className={styles.mobileBarCall}
      onClick={handleCallClick}
    >
      <i className="bi bi-telephone-fill"></i> Call
    </a>
    <a href="#get-started" className={styles.mobileBarQuote}>
      Get My Price <i className="bi bi-arrow-right"></i>
    </a>
  </div>
);

const LandingFooter = () => (
  <footer className={styles.landingFooter}>
    <div className={`container ${styles.landingFooterInner}`}>
      <div className={styles.footerCompany}>
        <strong>A2ZSMS</strong>
        <address>
          G Block, Groavy Buildcon, 183, 2nd Floor, North Dasarahalli Main Rd,
          opposite Reliance Trends, Sahakar Nagar, Byatarayanapura, Bengaluru,
          Karnataka 560092, India.
        </address>
      </div>
      <nav className={styles.footerLinks} aria-label="Landing page footer">
        <Link href="/privacy/" prefetch={false}>
          Privacy Policy
        </Link>
        <Link href="/terms/" prefetch={false}>
          Terms
        </Link>
      </nav>
    </div>
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
          <CustomerStrip />
          <Pricing />
          <HowItWorks />
          <PanelWalkthrough />
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
