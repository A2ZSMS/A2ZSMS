"use client";

/*
 * Google Ads landing page: /bulk-sms-service/
 *
 * Goal: more form leads through a free 10-minute guided demo. The website form (SharedLeadForm) is the main lead source;
 * all enquiry CTAs lead to the form. No public call buttons, prices or popups.
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
    label: "Our team will contact you to arrange your demo",
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
    submitLabel="Book Free Demo"
    formTitle="Let’s show you how it works."
    formSubtitle="Book a free 10-minute demo of our SMS platform."
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
    Book Free Demo <i className="bi bi-arrow-right"></i>
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
          <i className="bi bi-clock" /> Free 10-minute demo
        </span>
        <a className={styles.headerDemo} href="#get-started">
          Book a Free Demo <i className="bi bi-arrow-up-right" />
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

const Hero = () => (
  <section className={styles.hero}>
    <div className="container">
      <div className={styles.heroGrid}>
        <div className={styles.heroText}>
          <span className={styles.eyebrow}>
            <span /> BULK SMS SERVICE PROVIDER · INDIA
          </span>
          <h1 className={styles.heroTitle}>
            Bulk SMS Service.
            <br />
            Made for <em>your business.</em>
          </h1>
          <p className={styles.heroSub}>
            Send offers, order updates and OTPs from one SMS platform. Use our
            own panel, connect through API or SMPP, and get support from our
            team. A bulk SMS sender and SMS gateway built for Indian businesses,
            with DLT setup support.
          </p>
          <div className={styles.heroPills}>
            <span>Promotional SMS</span>
            <span>Transactional SMS</span>
            <span>OTP &amp; verification</span>
          </div>
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
              <i className="bi bi-camera-video" /> FREE GUIDED DEMO
            </span>
            <strong>10 MINUTES</strong>
          </div>
          <LeadForm />
          <div className={styles.demoAgenda}>
            <span>YOUR DEMO, MADE USEFUL</span>
            <p>
              <i className="bi bi-check2" /> See the SMS panel in action
            </p>
            <p>
              <i className="bi bi-check2" /> Discuss your SMS or SMPP
              requirement
            </p>
            <p>
              <i className="bi bi-check2" /> Get guidance on your next steps
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

const Platform = () => (
  <section className={styles.platformSection}>
    <div className="container">
      <div className={styles.sectionIntro}>
        <div>
          <span className={styles.eyebrow}>
            ONE PLATFORM. THREE WAYS TO CONNECT.
          </span>
          <h2 className={styles.sectionTitle}>
            Your panel.
            <br />
            Your way to send SMS.
          </h2>
        </div>
        <p>
          Run campaigns from a panel or connect SMS to the tools your business
          already uses. We’ll walk you through the right approach in your demo.
        </p>
      </div>
      <div className={styles.platformGrid}>
        <article className={styles.platformFeature}>
          <span className={styles.featureNumber}>01 / SMS PANEL</span>
          <i className="bi bi-window-desktop" />
          <h3>
            A workspace for
            <br />
            your campaigns.
          </h3>
          <p>
            Upload recipient lists, select approved templates, preview your
            message and send now or schedule for later. Review delivery activity
            and export reports from the panel.
          </p>
          <a href="#get-started">
            Explore in your demo <i className="bi bi-arrow-up-right" />
          </a>
        </article>
        <article className={styles.platformFeature}>
          <span className={styles.featureNumber}>02 / SMS API</span>
          <i className="bi bi-code-slash" />
          <h3>
            Make messaging part
            <br />
            of your application.
          </h3>
          <p>
            Connect SMS to your website, app or CRM through our API. Talk
            through your OTP and customer notification requirements with our
            team.
          </p>
          <a href="#get-started">
            Discuss your integration <i className="bi bi-arrow-up-right" />
          </a>
        </article>
        <article className={styles.platformFeature}>
          <span className={styles.featureNumber}>03 / SMPP PLATFORM</span>
          <i className="bi bi-hdd-network" />
          <h3>
            Connect your
            <br />
            messaging systems.
          </h3>
          <p>
            Have an SMPP requirement? See our SMPP panel and discuss
            connectivity, your messaging workflow and onboarding with our team.
          </p>
          <a href="#get-started">
            Talk about SMPP <i className="bi bi-arrow-up-right" />
          </a>
        </article>
      </div>
    </div>
  </section>
);

// Fill these three slots only with real testimonials. Incomplete slots stay hidden.
const CUSTOMER_TESTIMONIALS = [
  { quote: "", name: "", designation: "", company: "" },
  { quote: "", name: "", designation: "", company: "" },
  { quote: "", name: "", designation: "", company: "" },
];

const Testimonials = () => {
  const testimonials = CUSTOMER_TESTIMONIALS.filter((item) =>
    [item.quote, item.name, item.designation, item.company].every((value) =>
      value.trim(),
    ),
  );
  if (testimonials.length === 0) return null;
  return (
    <section
      className={styles.testimonialsSection}
      aria-labelledby="customer-review-title"
    >
      <div className="container">
        <div className={styles.testimonialsHeading}>
          <div>
            <span className={styles.eyebrow}>FROM OUR CUSTOMERS</span>
            <h2 id="customer-review-title" className={styles.sectionTitle}>
              What our customers say.
            </h2>
          </div>
        </div>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((item, index) => (
            <figure
              className={styles.testimonialCard}
              key={`${item.name}-${index}`}
            >
              <blockquote>“{item.quote}”</blockquote>
              <figcaption>
                <span>
                  <strong>{item.name}</strong>
                  <small>
                    {item.designation} · {item.company}
                  </small>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

const Infrastructure = () => (
  <section className={styles.infrastructure}>
    <div className={`container ${styles.infrastructureGrid}`}>
      <figure className={styles.serverPhoto}>
        <img
          src="/image/bulk-sms-landing/messaging-infrastructure-v2-1000.webp"
          srcSet="/image/bulk-sms-landing/messaging-infrastructure-v2-640.webp 640w, /image/bulk-sms-landing/messaging-infrastructure-v2-1000.webp 1000w"
          sizes="(max-width: 991px) calc(100vw - 40px), 560px"
          alt="Illustrative photograph of server racks in a modern data centre"
          width={1000}
          height={667}
          loading="lazy"
          decoding="async"
        />
        <figcaption>
          <i className="bi bi-cloud-check-fill" /> AWS-HOSTED PLATFORM{" "}
          <span>Illustrative infrastructure image</span>
        </figcaption>
      </figure>
      <div className={styles.infrastructureCopy}>
        <span className={styles.eyebrow}>
          OUR TECHNOLOGY. YOUR CONNECTIONS.
        </span>
        <h2 className={styles.sectionTitle}>
          The platform behind
          <br />
          your business messages.
        </h2>
        <p>
          We operate our own SMS and SMPP panels on AWS infrastructure. Your
          team gets a way to manage campaigns, connect applications and review
          message delivery.
        </p>
        <div className={styles.infraFacts}>
          <div>
            <i className="bi bi-window-desktop" />
            <span>
              <strong>Our own SMS &amp; SMPP panels</strong>
              <small>
                Explore the platform with the team that supports it.
              </small>
            </span>
          </div>
          <div>
            <i className="bi bi-code-slash" />
            <span>
              <strong>Connect with API or SMPP</strong>
              <small>
                Discuss the right integration for your existing systems.
              </small>
            </span>
          </div>
          <div>
            <i className="bi bi-headset" />
            <span>
              <strong>People to help you get started</strong>
              <small>Guidance on requirements, DLT and onboarding.</small>
            </span>
          </div>
        </div>
        <a href="#get-started" className={styles.textLink}>
          Meet your messaging platform <i className="bi bi-arrow-up-right" />
        </a>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════
   CONTENT SECTIONS
   ═══════════════════════════════════════════════════ */
const MESSAGE_TYPES = [
  {
    label: "Promotional SMS",
    icon: "bi-megaphone",
    title: "Turn an offer into a reason to return.",
    text: "Keep your audience in the loop with relevant offers, new launches and upcoming events.",
    tags: "RETAIL OFFERS / NEW ARRIVALS / EVENTS",
    message:
      "Something new for your weekend. Explore our latest collection in store this Saturday. Visit us to find your next favourite.",
    sender: "YOUR BRAND",
  },
  {
    label: "Transactional SMS",
    icon: "bi-receipt",
    title: "Keep customers informed at every step.",
    text: "Share useful updates when customers place an order, make a payment or need to know what happens next.",
    tags: "ORDER UPDATES / PAYMENT ALERTS / NOTIFICATIONS",
    message:
      "Your order #4821 is confirmed. We’ll notify you when it is dispatched. Thank you for shopping with us.",
    sender: "YOUR BUSINESS",
  },
  {
    label: "OTP & verification",
    icon: "bi-shield-check",
    title: "A small message. An essential moment.",
    text: "Connect verification messages to your sign-up, login and transaction workflows through your application.",
    tags: "SIGN-UP / LOGIN / VERIFICATION",
    message:
      "Your verification code is 482916. Use this code to complete your sign-in. Please do not share it with anyone.",
    sender: "YOUR APP",
  },
];

const MessageExamples = () => {
  const [active, setActive] = useState(0);
  const message = MESSAGE_TYPES[active];
  return (
    <section className={styles.messageSection}>
      <div className="container">
        <div className={styles.centerIntro}>
          <span className={styles.eyebrow}>EVERY MESSAGE HAS A JOB TO DO</span>
          <h2 className={styles.sectionTitle}>
            The right message.
            <br />
            At the right moment.
          </h2>
          <p>
            From a timely offer to an essential update. Find the SMS service
            that fits.
          </p>
        </div>
        <div
          className={styles.messageTabs}
          role="tablist"
          aria-label="SMS message types"
        >
          {MESSAGE_TYPES.map((item, i) => (
            <button
              key={item.label}
              id={`sms-tab-${i}`}
              role="tab"
              aria-selected={active === i}
              aria-controls="sms-example"
              tabIndex={active === i ? 0 : -1}
              className={active === i ? styles.messageTabActive : ""}
              onClick={() => setActive(i)}
              onKeyDown={(event) => {
                const next =
                  event.key === "ArrowRight"
                    ? (i + 1) % MESSAGE_TYPES.length
                    : event.key === "ArrowLeft"
                      ? (i + MESSAGE_TYPES.length - 1) % MESSAGE_TYPES.length
                      : event.key === "Home"
                        ? 0
                        : event.key === "End"
                          ? MESSAGE_TYPES.length - 1
                          : null;
                if (next !== null) {
                  event.preventDefault();
                  setActive(next);
                  document.getElementById(`sms-tab-${next}`)?.focus();
                }
              }}
            >
              <i className={`bi ${item.icon}`} />
              {item.label}
            </button>
          ))}
        </div>
        <div
          className={styles.messagePanel}
          id="sms-example"
          role="tabpanel"
          aria-labelledby={`sms-tab-${active}`}
        >
          <div className={styles.messageCopy}>
            <span className={styles.featureNumber}>{message.tags}</span>
            <h3>{message.title}</h3>
            <p>{message.text}</p>
            <a className={styles.textLink} href="#get-started">
              Let’s discuss your use case <i className="bi bi-arrow-up-right" />
            </a>
          </div>
          <div className={styles.phonePreview}>
            <div className={styles.phoneTop}>
              <span />
              <i className="bi bi-reception-4" />
            </div>
            <div className={styles.phoneSender}>
              <span>
                <i className="bi bi-chat-dots" />
              </span>
              <strong>{message.sender}</strong>
              <small>SMS message</small>
            </div>
            <span className={styles.messageTime}>Today, 10:30 AM</span>
            <div className={styles.messageBubble}>{message.message}</div>
            <p>Illustrative message</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const STEPS = [
  {
    icon: "bi-pencil-square",
    title: "Explore the SMS panel",
    text: "See how the panel works, from preparing a message to reviewing delivery reports.",
  },
  {
    icon: "bi-patch-check-fill",
    title: "Discuss your use case",
    text: "Tell us about your campaigns, customer updates or OTP workflow. We’ll talk through the suitable service.",
  },
  {
    icon: "bi-rocket-takeoff-fill",
    title: "Understand your next steps",
    text: "Ask about API or SMPP connectivity, DLT requirements and the support available for getting started.",
  },
];

const HowItWorks = () => (
  <section className={styles.section}>
    <div className="container">
      <span className={styles.eyebrow}>KNOW WHAT YOU’RE BOOKING</span>
      <h2 className={styles.sectionTitle}>
        A useful demo. In just 10 minutes.
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
    q: "What is DLT?",
    a: "DLT (Distributed Ledger Technology) registration is mandatory in India under TRAI rules for every business that sends commercial SMS. Your company, sender ID and message templates are registered on an operator's DLT portal. We do this registration for you.",
  },
  {
    q: "How fast is setup?",
    a: "Setup depends on your requirements and the readiness of your DLT registration, sender ID and message templates. Our team will explain the onboarding steps during your demo.",
  },
  {
    q: "Do you provide an API?",
    a: "Yes. We provide an HTTP/REST API and SMPP, with documentation and developer support, so you can send SMS from your website, app, CRM or software.",
  },
  {
    q: "Can I use SMS for OTPs?",
    a: "Yes. We support OTP messaging for application workflows. Discuss your integration and delivery requirements with our team during the demo.",
  },
  {
    q: "Do you give a free demo?",
    a: "Yes. Fill in the form to arrange a free 10-minute guided demonstration. Our team will show you the platform and discuss your requirements.",
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
            Your next customer connection starts here.
          </h2>
          <p className={styles.bottomText}>
            Spend 10 minutes with our team. See the platform, ask your questions
            and discover how it fits your business. The guided demo is free.
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
            Submit your details and our team will contact you to arrange your
            demo.
          </p>
        </div>
        <LeadForm formId="get-started-bottom" />
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════
   STICKY MOBILE BAR — Book Free Demo
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
      Book Free Demo <i className="bi bi-arrow-right"></i>
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
        <Link href="/contact/" prefetch={false}>
          Contact
        </Link>
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
          <PanelWalkthrough />
          <MessageExamples />
          <Platform />
          <Infrastructure />
          <HowItWorks />
          <Testimonials />
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
