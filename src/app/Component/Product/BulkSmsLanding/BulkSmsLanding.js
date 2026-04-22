"use client";

import { useState, useEffect, useRef, memo } from "react";
import styles from "./BulkSmsLanding.module.css";
import SharedLeadForm from "../SharedLeadForm/SharedLeadForm";

const WA_NUMBER = "919740274595";
const WA_MSG = encodeURIComponent("Hi, I am interested in Bulk SMS Service");
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`;

const trustLogos = [
  { src: "/image/brand/google.png", alt: "Google" },
  { src: "/image/brand/booking.png", alt: "Booking" },
  { src: "/image/brand/capterra.png", alt: "Capterra" },
  { src: "/image/brand/airtable.png", alt: "Airtable" },
  { src: "/image/brand/hellosign.png", alt: "HelloSign" },
  { src: "/image/brand/wpbeginner.png", alt: "WPBeginner" },
];

/* ═══════════════════════════════════════════════════
   ANIMATED COUNTER HOOK
   ═══════════════════════════════════════════════════ */
const useCountUp = (end, duration = 2000, isDecimal = false) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const numEnd = parseFloat(end);
          const animate = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(
              isDecimal
                ? parseFloat((eased * numEnd).toFixed(1))
                : Math.floor(eased * numEnd),
            );
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, isDecimal]);

  return { count, ref };
};

/* ═══════════════════════════════════════════════════
   ANNOUNCEMENT TICKER
   ═══════════════════════════════════════════════════ */
const TICKER_MESSAGES_SMS = [
  "🔥 Limited Offer: DLT Registration at just ₹5,000 + Free Sender ID — Only 5 spots left!",
  "⚡ OTP delivered in under 3 seconds — 99.9% delivery rate guaranteed",
  "🏆 Trusted by 1000+ businesses across India — Join them today!",
];

const AnnouncementTicker = memo(() => {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % TICKER_MESSAGES_SMS.length), 3500);
    return () => clearInterval(t);
  }, []);
  return (
    <div className={styles.ticker}>
      <span className={styles.tickerText}>{TICKER_MESSAGES_SMS[idx]}</span>
      <a href="#get-started" className={styles.tickerCta}>
        Claim Offer →
      </a>
    </div>
  );
});

/* ═══════════════════════════════════════════════════
   SOCIAL PROOF BUBBLE
   ═══════════════════════════════════════════════════ */
const socialProofPeople = [
  { name: "Ravi", city: "Bangalore", time: "2 min ago" },
  { name: "Priya", city: "Mumbai", time: "5 min ago" },
  { name: "Amit", city: "Delhi", time: "9 min ago" },
  { name: "Sneha", city: "Hyderabad", time: "12 min ago" },
];

const SocialProofBubble = memo(() => {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);
  const intervalRef = useRef(null);
  const timeoutRef  = useRef(null);
  const mountedRef  = useRef(true);
  useEffect(() => {
    mountedRef.current = true;
    intervalRef.current = setInterval(() => {
      if (!mountedRef.current) return;
      setVisible(false);
      timeoutRef.current = setTimeout(() => {
        if (!mountedRef.current) return;
        setIdx((i) => (i + 1) % socialProofPeople.length);
        setVisible(true);
      }, 400);
    }, 4000);
    return () => {
      mountedRef.current = false;
      clearInterval(intervalRef.current);
      clearTimeout(timeoutRef.current);
    };
  }, []);
  const p = socialProofPeople[idx];
  return (
    <div
      className={`${styles.socialBubble} ${visible ? styles.socialBubbleVisible : styles.socialBubbleHidden}`}
    >
      <span className={styles.socialBubbleDot}></span>
      <span>
        <strong>{p.name}</strong> from {p.city} just got a free demo · {p.time}
      </span>
    </div>
  );
});

/* ═══════════════════════════════════════════════════
   FLOATING STICKY BAR
   ═══════════════════════════════════════════════════ */
const FloatingStickyBar = memo(() => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setShow(window.scrollY > 400);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  if (!show) return null;
  return (
    <div className={styles.floatingBar}>
      <span className={styles.floatingBarText}>
        🎯 Get free Bulk SMS demo — 5 spots left today
      </span>
      {/* <a href="tel:+918431086185" className={styles.floatingBarCall}>
        <i className="bi bi-telephone-fill"></i> Call Now
      </a> */}
      <a href="#get-started" className={styles.floatingBarCta}>
        Get Free Demo
      </a>
    </div>
  );
});

/* ═══════════════════════════════════════════════════
   STICKY MINI NAV
   ═══════════════════════════════════════════════════ */
const StickyMiniNav = memo(() => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.miniNav} ${scrolled ? styles.miniNavScrolled : ""}`}
    >
      <div className="container d-flex align-items-center justify-content-between aos">
        <a href="/" className={styles.miniNavLogo}>
          <img src="/image/logo1.png" alt="A2ZSMS" />
        </a>
        <div className="d-flex align-items-center gap-3">
          <div className={styles.miniNavSpotsWrap}>
            <span className={styles.miniNavSpotsDot}></span>
            <span
              className="d-none d-sm-inline"
              style={{ fontSize: 12, color: "#dc2626", fontWeight: 600 }}
            >
              Only 5 spots left
            </span>
          </div>
          <a href="#get-started" className={styles.miniNavCta}>
            Get Free Demo <i className="bi bi-arrow-right ms-1"></i>
          </a>
        </div>
      </div>
    </nav>
  );
});

/* ═══════════════════════════════════════════════════
   PRICING TEASER STRIP
   ═══════════════════════════════════════════════════ */
const PricingTeaserStrip = memo(() => (
  <div className={styles.pricingTeaser}>
    <div className="container aos">
      <div className={styles.pricingTeaserInner}>
        <div className={styles.pricingTeaserItem}>
          <i className="bi bi-tag-fill"></i>
          <span>
            Starting at <strong>₹799/month</strong>
          </span>
        </div>
        <div className={styles.pricingTeaserDivider}></div>
        <div className={styles.pricingTeaserItem}>
          <i className="bi bi-check-circle-fill"></i>
          <span>
            <strong>No setup fee</strong>
          </span>
        </div>
        <div className={styles.pricingTeaserDivider}></div>
        <div className={styles.pricingTeaserItem}>
          <i className="bi bi-x-circle-fill"></i>
          <span>
            <strong>Cancel anytime</strong>
          </span>
        </div>
        <div className={styles.pricingTeaserDivider}></div>
        <div className={styles.pricingTeaserItem}>
          <i className="bi bi-gift-fill"></i>
          <span>
            Free <strong>1000 SMS credits</strong> on signup
          </span>
        </div>
        <a href="#get-started" className={styles.pricingTeaserCta}>
          See Pricing
        </a>
      </div>
    </div>
  </div>
));

/* ═══════════════════════════════════════════════════
   AS SEEN ON STRIP
   ═══════════════════════════════════════════════════ */
const AsSeenOnStrip = memo(() => (
  <div className={styles.asSeenOn}>
    <div className="container aos">
      <div className={styles.asSeenOnInner}>
        <span className={styles.asSeenOnLabel}>As seen on</span>
        <div className={styles.asSeenOnLogos}>
          <div className={styles.asSeenOnLogo}>
            <i className="bi bi-google" style={{ color: "#4285F4" }}></i>
            <span>
              <strong>Google</strong> Reviews
            </span>
            <span className={styles.asSeenOnRating}>★ 4.9/5</span>
          </div>
          <div className={styles.asSeenOnDivider}></div>
          <div className={styles.asSeenOnLogo}>
            <i className="bi bi-star-fill" style={{ color: "#00b67a" }}></i>
            <span>
              <strong>Trustpilot</strong>
            </span>
            <span className={styles.asSeenOnRating}>★ 4.8/5</span>
          </div>
          <div className={styles.asSeenOnDivider}></div>
          <div className={styles.asSeenOnLogo}>
            <i
              className="bi bi-shield-fill-check"
              style={{ color: "#ff6d42" }}
            ></i>
            <span>
              <strong>Capterra</strong>
            </span>
            <span className={styles.asSeenOnRating}>★ 4.7/5</span>
          </div>
        </div>
      </div>
    </div>
  </div>
));

/* ═══════════════════════════════════════════════════
   LEAD FORM
   ═══════════════════════════════════════════════════ */
const SMS_SERVICES = [
  { value: "Promotional SMS",   label: "Promotional SMS" },
  { value: "Transactional SMS", label: "Transactional SMS" },
  { value: "OTP SMS",           label: "OTP SMS" },
  { value: "Bulk SMS API",      label: "Bulk SMS API" },
  { value: "Other",             label: "Other" },
];
const SMS_TRUST = [
  { icon: "bi-shield-lock-fill", label: "256-bit SSL" },
  { icon: "bi-patch-check-fill", label: "TRAI Compliant" },
  { icon: "bi-clock-fill",       label: "Reply in 2 hrs" },
];

const LeadForm = ({ formId = "get-started" }) => (
  <SharedLeadForm
    styles={styles}
    thankYouUrl="/bulk-sms-service/thank-you/"
    serviceOptions={SMS_SERVICES}
    trustItems={SMS_TRUST}
    pageId="bulk-sms-landing"
    formId={formId}
    urgencyText="Only 5 DLT registration spots left this month"
    submitLabel="Get My Free Setup"
  />
);

/* ═══════════════════════════════════════════════════
   HERO — Left: text+stats | Right: LeadForm
   ═══════════════════════════════════════════════════ */
const HeroStatItem = ({ end, suffix, label, isDecimal }) => {
  const { count, ref } = useCountUp(end, 2000, isDecimal);
  return (
    <div className={styles.heroStat} ref={ref}>
      <span className={styles.heroStatValue}>
        {isDecimal ? count.toFixed(1) : count}
        {suffix}
      </span>
      <span className={styles.heroStatLabel}>{label}</span>
    </div>
  );
};

const HeroSection = () => (
  <section className={styles.hero}>
    <div className={styles.heroMesh1}></div>
    <div className={styles.heroMesh2}></div>
    <div className={styles.heroMesh3}></div>

    <div className="container position-relative aos">
      <div className="row align-items-center gy-5 aos">
        {/* LEFT — text */}
        <div className="col-lg-6" data-aos="fade-right">
          {/* Logo */}
          <div className={styles.heroLogoWrap}>
            <img
              src="/image/logo.png"
              alt="A2ZSMS"
              className={styles.heroLogo}
            />
          </div>

          {/* Urgency top bar */}
          {/* <div className={styles.heroTopBar}>
            <i className="bi bi-fire" style={{ color: "#f97316" }}></i>
            <span>
              <strong>Limited Offer:</strong> DLT Registration only ₹5,000 + Free
              Sender ID — only{" "}
              <strong style={{ color: "#dc2626" }}>5 spots left</strong> this
              month
            </span>
            <i className="bi bi-fire" style={{ color: "#f97316" }}></i>
          </div> */}

          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot}></span>
            #1 Rated Bulk SMS Provider in India &mdash; 1000+ Businesses Trust
            Us
          </div>

          <h1 className={styles.heroTitle}>
            Bulk SMS Service Provider in India{" "}
            <span className={styles.heroGradient}>
              – Fast & Reliable SMS Gateway
            </span>
          </h1>

          <p className={styles.heroText}>
            Send OTP, Promotional & Transactional SMS instantly using our
            reliable Bulk SMS Service platform. High-speed SMS delivery with
            99.9% delivery rate, real-time reports, and an easy dashboard. No
            technical skills required to start sending bulk messages.
          </p>

          <div className={styles.heroChecks}>
            {[
              {
                text: "99.9% delivery rate — every single time",
                highlight: false,
              },
              { text: "OTP delivered in under 3 seconds", highlight: true },
              { text: "Promotional SMS with 98% open rate", highlight: false },
              {
                text: "DLT registration at just ₹5,000 — we handle everything",
                highlight: false,
              },
            ].map((item) => (
              <div key={item.text} className={styles.heroCheckItem}>
                <i className="bi bi-check-circle-fill"></i>
                <span
                  style={
                    item.highlight ? { fontWeight: 700, color: "#0d6efd" } : {}
                  }
                >
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          <div className={styles.heroGuarantee}>
            <i className="bi bi-shield-fill-check"></i>
            <span>
              No commitment · Free setup consultation · Response in 2 hrs
            </span>
          </div>

          <SocialProofBubble />

          <div className={styles.heroStats}>
            <HeroStatItem end={1000} suffix="+" label="Businesses" />
            <div className={styles.heroStatDivider}></div>
            <HeroStatItem
              end={99.9}
              suffix="%"
              label="Delivery Rate"
              isDecimal={true}
            />
            <div className={styles.heroStatDivider}></div>
            <HeroStatItem end={24} suffix="/7" label="Support" />
          </div>
        </div>

        {/* RIGHT — Lead Form */}
        <div className="col-lg-6" data-aos="fade-left">
          <LeadForm />
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════
   MARQUEE TRUST BAR
   ═══════════════════════════════════════════════════ */
const MarqueeTrustBar = memo(() => (
  <div className={styles.marqueeSection}>
    <div className="container aos">
      <span className={styles.marqueeLabel}>
        Trusted by <strong>1000+</strong> Businesses Across India
      </span>
    </div>
    <div className={styles.marqueeTrack}>
      <div className={styles.marqueeContent}>
        {[...trustLogos, ...trustLogos, ...trustLogos].map((logo, i) => (
          <img
            key={`${logo.alt}-${i}`}
            src={logo.src}
            alt={logo.alt}
            className={styles.marqueeLogo}
            width={80}
            height={32}
            loading="lazy"
            decoding="async"
          />
        ))}
      </div>
    </div>
  </div>
));

/* ═══════════════════════════════════════════════════
   PROBLEM → SOLUTION
   ═══════════════════════════════════════════════════ */
const problems = [
  {
    icon: "bi-envelope-x",
    title: "Low Email Open Rates",
    text: "Emails land in spam and get ignored. Your marketing budget is wasted on messages nobody reads.",
    stat: "<20%",
    statLabel: "Email Open Rate",
  },
  {
    icon: "bi-hourglass-split",
    title: "Slow Customer Communication",
    text: "Delayed notifications mean frustrated customers. Manual messaging wastes your team's valuable time every day.",
    stat: "3hrs",
    statLabel: "Avg Delay",
  },
  {
    icon: "bi-x-circle",
    title: "Missed Sales Opportunities",
    text: "Without timely promotions and alerts, customers buy from competitors. You lose revenue every single day.",
    stat: "35%",
    statLabel: "Leads Lost",
  },
];

const solutions = [
  {
    icon: "bi-graph-up-arrow",
    title: "98% SMS Open Rate",
    text: "SMS messages are read within 3 minutes of delivery. Reach your audience instantly where they always look — their phone.",
    stat: "98%",
    statLabel: "Open Rate",
  },
  {
    icon: "bi-lightning-fill",
    title: "Instant Bulk Delivery",
    text: "Send millions of SMS within seconds. Automated campaigns, OTPs, and alerts delivered at lightning speed.",
    stat: "< 3sec",
    statLabel: "Delivery Time",
  },
  {
    icon: "bi-bullseye",
    title: "Targeted SMS Campaigns",
    text: "Segment your audience and send personalized messages that convert. Boost sales with the right message at the right time.",
    stat: "3x",
    statLabel: "More Conversions",
  },
];

const ProblemSolution = memo(() => (
  <section className={styles.sectionAlt}>
    <div className="container aos">
      <div className="text-center mb-5" data-aos="fade-up">
        <span className={styles.sectionBadge}>Why Switch to Bulk SMS?</span>
        <h2 className={styles.sectionTitle}>The Problem &amp; Our Solution</h2>
        <p
          className={`${styles.sectionLead} mx-auto`}
          style={{ maxWidth: 600 }}
        >
          Stop losing customers to slow communication. Switch to Bulk SMS and
          see instant results.
        </p>
      </div>

      <div className="row g-4 mb-2 aos">
        <div className="col-12">
          <h6 className="text-uppercase fw-bold text-danger small mb-3">
            <i className="bi bi-x-circle-fill me-2"></i>Common Problems
          </h6>
        </div>
        {problems.map((p, i) => (
          <div
            className="col-md-4"
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            <div className={`${styles.compCard} ${styles.compCardRed}`}>
              <div className={`${styles.compIcon} ${styles.compIconRed}`}>
                <i className={`bi ${p.icon}`}></i>
              </div>
              <h5 className={styles.compCardTitle}>{p.title}</h5>
              <p className={styles.compCardText}>{p.text}</p>
              <div className={styles.compStat}>
                <span className={styles.compStatValue}>{p.stat}</span>
                <span className={styles.compStatLabel}>{p.statLabel}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.psArrow} data-aos="fade-up">
        <div className={styles.psArrowLine}></div>
        <div className={styles.psArrowIcon}>
          <i className="bi bi-arrow-down-circle-fill"></i>
        </div>
        <div className={styles.psArrowLine}></div>
      </div>

      <div className="row g-4 mt-2 aos">
        <div className="col-12">
          <h6 className="text-uppercase fw-bold text-success small mb-3">
            <i className="bi bi-check-circle-fill me-2"></i>Our Solution
          </h6>
        </div>
        {solutions.map((s, i) => (
          <div
            className="col-md-4"
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            <div className={`${styles.compCard} ${styles.compCardBlue}`}>
              <div className={`${styles.compIcon} ${styles.compIconBlue}`}>
                <i className={`bi ${s.icon}`}></i>
              </div>
              <h5 className={styles.compCardTitle}>{s.title}</h5>
              <p className={styles.compCardText}>{s.text}</p>
              <div className={styles.compStat}>
                <span className={styles.compStatValue}>{s.stat}</span>
                <span className={styles.compStatLabel}>{s.statLabel}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
));

/* ═══════════════════════════════════════════════════
   COMPARISON TABLE — Email / Calls vs A2ZSMS Bulk SMS
   ═══════════════════════════════════════════════════ */
const comparisonRows = [
  ["Open Rate", "❌ <20% (Email)", "✅ 98% Guaranteed"],
  ["Delivery Speed", "❌ Hours / Days", "✅ Under 3 Seconds"],
  ["OTP Authentication", "❌ Unreliable Email OTP", "✅ 99.9% SMS Delivery"],
  ["DLT Compliance", "❌ DIY, Complex Setup", "✅ Fully Managed by Us"],
  ["Mass Reach", "❌ Spam Filters Block", "✅ Millions in Minutes"],
  ["Branded Sender ID", "❌ Not Possible", "✅ Custom 6-Char ID"],
  ["API Integration", "❌ No Integration", "✅ Developer REST API"],
  ["Real-Time Analytics", "❌ No Tracking", "✅ Live Dashboard"],
  ["Ban / Block Risk", "🔴 High Risk", "✅ TRAI Compliant — Zero Risk"],
  ["Dedicated Support", "❌ No Priority", "✅ 24/7 Account Manager"],
];

const ComparisonTableSection = memo(() => (
  <section className={styles.section}>
    <div className="container aos">
      <div className="text-center mb-5" data-aos="fade-up">
        <span className={styles.sectionBadge}>Why Upgrade?</span>
        <h2 className={styles.sectionTitle}>
          Email &amp; Cold Calls vs. A2ZSMS Bulk SMS
        </h2>
        <p
          className={`${styles.sectionLead} mx-auto`}
          style={{ maxWidth: 620 }}
        >
          Traditional outreach is slow, unreliable, and costly. Bulk SMS is
          built for scale — here&apos;s the difference.
        </p>
      </div>
      <div className={styles.compTableWrap} data-aos="fade-up">
        <table className={styles.compTable}>
          <thead>
            <tr>
              <th className={styles.compTableThFeature}>Feature</th>
              <th className={styles.compTableThOld}>
                <i className="bi bi-envelope me-2"></i>Email / Cold Calls
              </th>
              <th className={styles.compTableThNew}>
                <i className="bi bi-chat-dots-fill me-2"></i>A2ZSMS Bulk SMS
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map(([feature, old, newVal], i) => (
              <tr
                key={i}
                className={i % 2 === 0 ? styles.compTableRowEven : ""}
              >
                <td className={styles.compTableFeatureCell}>{feature}</td>
                <td className={styles.compTableOldCell}>{old}</td>
                <td className={styles.compTableNewCell}>{newVal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-center mt-5" data-aos="fade-up">
        <a href="#get-started" className={styles.primaryBtn}>
          Switch to A2ZSMS Bulk SMS <i className="bi bi-arrow-right ms-1"></i>
        </a>
      </div>
    </div>
  </section>
));

/* ═══════════════════════════════════════════════════
   FEATURES — Tab Switcher
   ═══════════════════════════════════════════════════ */
const promotionalFeatures = [
  {
    icon: "bi-megaphone-fill",
    color: "#0d6efd",
    title: "Mass Promotional Campaigns",
    text: "Send offers, discounts, and product launches to thousands of customers simultaneously. Maximise reach and ROI.",
  },
  {
    icon: "bi-calendar-event-fill",
    color: "#6366f1",
    title: "Scheduled Campaigns",
    text: "Plan your campaigns in advance. Schedule SMS delivery at the perfect time for maximum engagement.",
  },
  {
    icon: "bi-people-fill",
    color: "#0ea5e9",
    title: "Audience Segmentation",
    text: "Target specific customer groups based on demographics, location, and behaviour for higher conversions.",
  },
  {
    icon: "bi-bar-chart-fill",
    color: "#8b5cf6",
    title: "Real-Time Analytics",
    text: "Track delivery, open, and conversion rates. Optimise campaigns with data-driven insights.",
  },
  {
    icon: "bi-link-45deg",
    color: "#f59e0b",
    title: "URL Shortener & Tracking",
    text: "Embed trackable short links in your SMS to measure clicks and drive traffic to your website.",
  },
  {
    icon: "bi-person-fill-check",
    color: "#10b981",
    title: "DLT Template Management",
    text: "Fully DLT compliant promotional SMS. We manage template registration and approval for you.",
  },
];

const transactionalFeatures = [
  {
    icon: "bi-lock-fill",
    color: "#0d6efd",
    title: "Instant OTP Delivery",
    text: "Deliver one-time passwords in under 3 seconds. Secure 2FA authentication for banks, e-commerce, and apps.",
  },
  {
    icon: "bi-receipt",
    color: "#6366f1",
    title: "Order & Transaction Alerts",
    text: "Automated SMS for order confirmations, payment receipts, delivery updates, and shipping notifications.",
  },
  {
    icon: "bi-bell-fill",
    color: "#0ea5e9",
    title: "Account & Security Alerts",
    text: "Login notifications, password resets, balance alerts, and suspicious activity warnings sent instantly.",
  },
  {
    icon: "bi-calendar-check-fill",
    color: "#8b5cf6",
    title: "Appointment Reminders",
    text: "Automated reminders for bookings, appointments, and events to reduce no-shows by 60%.",
  },
  {
    icon: "bi-gear-fill",
    color: "#f59e0b",
    title: "API Integration",
    text: "Seamlessly integrate with your app, CRM, or website using our developer-friendly REST API.",
  },
  {
    icon: "bi-clock-history",
    color: "#10b981",
    title: "24/7 Automated Delivery",
    text: "Transactional SMS run on autopilot. No manual intervention — messages sent the moment an event triggers.",
  },
];

const FeaturesSection = ({ activeTab, setActiveTab }) => (
  <section className={styles.sectionAlt}>
    <div className="container aos">
      <div className="text-center mb-5" data-aos="fade-up">
        <span className={styles.sectionBadge}>Features</span>
        <h2 className={styles.sectionTitle}>
          Everything You Need to Scale with Bulk SMS
        </h2>
        <p
          className={`${styles.sectionLead} mx-auto`}
          style={{ maxWidth: 600 }}
        >
          From promotional campaigns to mission-critical OTPs — one platform for
          all your SMS needs.
        </p>
        <div className={styles.tabSwitcher}>
          <button
            className={`${styles.tabBtn} ${activeTab === "promotional" ? styles.tabBtnActive : ""}`}
            onClick={() => setActiveTab("promotional")}
          >
            <i className="bi bi-megaphone me-2"></i>Promotional SMS
          </button>
          <button
            className={`${styles.tabBtn} ${activeTab === "transactional" ? styles.tabBtnActive : ""}`}
            onClick={() => setActiveTab("transactional")}
          >
            <i className="bi bi-shield-lock me-2"></i>Transactional SMS
          </button>
        </div>
      </div>

      <div className="row align-items-center gy-5 aos">
        <div className="col-lg-5" data-aos="fade-right">
          <div className={styles.featureImageWrap}>
            <div className={styles.heroImageGlow}></div>
            <img
              src={
                activeTab === "promotional"
                  ? "/image/product/promotional.png"
                  : "/image/product/transactional.png"
              }
              alt={
                activeTab === "promotional"
                  ? "Promotional SMS Features"
                  : "Transactional SMS Features"
              }
              className={styles.featureSectionImage}
              width={480}
              height={400}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        <div className="col-lg-7" data-aos="fade-left">
          <div className="row g-3 aos">
            {(activeTab === "promotional"
              ? promotionalFeatures
              : transactionalFeatures
            ).map((f, i) => (
              <div className="col-md-6" key={`${activeTab}-${i}`}>
                <div className={styles.glassFeatureCard}>
                  <div
                    className={styles.featureIcon}
                    style={{
                      background: `${f.color}14`,
                      color: f.color,
                    }}
                  >
                    <i className={`bi ${f.icon}`}></i>
                  </div>
                  <div>
                    <h6 className={styles.featureTitle}>{f.title}</h6>
                    <p className={styles.featureText}>{f.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════
   HOW IT WORKS — Dark Timeline
   ═══════════════════════════════════════════════════ */
const steps = [
  {
    icon: "bi-pencil-square",
    title: "Sign Up",
    desc: "Fill the form or call us to get started with your Bulk SMS account.",
  },
  {
    icon: "bi-patch-check-fill",
    title: "DLT Registration",
    desc: "We handle your DLT registration and template approval on your behalf.",
  },
  {
    icon: "bi-upload",
    title: "Upload Contacts",
    desc: "Upload your contact list and set up your SMS campaigns in minutes.",
  },
  {
    icon: "bi-rocket-takeoff-fill",
    title: "Go Live!",
    desc: "Start sending bulk SMS and track real-time delivery reports.",
  },
];

const HowItWorks = memo(() => (
  <section className={styles.sectionDark}>
    <div className="container aos">
      <div className="text-center mb-5" data-aos="fade-up">
        <span className={styles.sectionBadgeLight}>Simple Process</span>
        <h2 className={styles.sectionTitleLight}>
          Get Started in 4 Easy Steps
        </h2>
        <p className={styles.sectionLeadLight}>
          We handle the setup so you can focus on growing your business.
        </p>
      </div>
      <div className={styles.stepsGrid}>
        {steps.map((s, i) => (
          <div
            key={i}
            className={styles.stepBlock}
            data-aos="fade-up"
            data-aos-delay={i * 120}
          >
            <div className={styles.stepDot}>
              <span className={styles.stepDotGlow}></span>
              {i + 1}
            </div>
            <div className={styles.stepContent}>
              <div className={styles.stepIcon}>
                <i className={`bi ${s.icon}`}></i>
              </div>
              <h5 className={styles.stepTitle}>{s.title}</h5>
              <p className={styles.stepDesc}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-5" data-aos="fade-up">
        <a href="#get-started" className={styles.primaryBtnLight}>
          Start Your Journey <i className="bi bi-arrow-right ms-1"></i>
        </a>
      </div>
    </div>
  </section>
));

/* ═══════════════════════════════════════════════════
   USE CASES
   ═══════════════════════════════════════════════════ */
const useCases = [
  {
    icon: "bi-cart-check-fill",
    color: "#0d6efd",
    bg: "#eff6ff",
    title: "E-Commerce",
    text: "Order confirmations, shipping updates, abandoned cart alerts & promotional offers.",
    metric: "3x",
    metricLabel: "More Sales",
  },
  {
    icon: "bi-mortarboard-fill",
    color: "#8b5cf6",
    bg: "#f5f3ff",
    title: "Education",
    text: "Admission alerts, fee reminders, exam schedules & result notifications.",
    metric: "60%",
    metricLabel: "Less No-Shows",
  },
  {
    icon: "bi-hospital-fill",
    color: "#ef4444",
    bg: "#fee2e2",
    title: "Healthcare",
    text: "Appointment reminders, lab report alerts, prescription refills & patient follow-ups.",
    metric: "45%",
    metricLabel: "Faster Response",
  },
  {
    icon: "bi-bank2",
    color: "#10b981",
    bg: "#d1fae5",
    title: "Banking & Finance",
    text: "OTP delivery, transaction alerts, loan EMI reminders & account security messages.",
    metric: "99.9%",
    metricLabel: "Delivery Rate",
  },
  {
    icon: "bi-house-door-fill",
    color: "#f59e0b",
    bg: "#fef3c7",
    title: "Real Estate",
    text: "Property listing alerts, site visit confirmations, lead follow-ups & payment reminders.",
    metric: "2x",
    metricLabel: "More Visits",
  },
  {
    icon: "bi-truck",
    color: "#0ea5e9",
    bg: "#e0f2fe",
    title: "Logistics",
    text: "Live tracking updates, delivery confirmations, pickup alerts & driver coordination.",
    metric: "80%",
    metricLabel: "Auto-Handled",
  },
];

const UseCasesSection = memo(() => (
  <section className={styles.section}>
    <div className="container aos">
      <div className="text-center mb-5" data-aos="fade-up">
        <span className={styles.sectionBadge}>Use Cases</span>
        <h2 className={styles.sectionTitle}>Built for Every Industry</h2>
        <p
          className={`${styles.sectionLead} mx-auto`}
          style={{ maxWidth: 600 }}
        >
          Our Bulk SMS Service Provider platform supports businesses across
          multiple industries by enabling instant customer communication.
        </p>
      </div>
      <div className="row g-4 aos">
        {useCases.map((uc, i) => (
          <div
            className="col-md-6 col-lg-4"
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 80}
          >
            <div className={styles.ucCard}>
              <div
                className={styles.ucIcon}
                style={{ background: uc.bg, color: uc.color }}
              >
                <i className={`bi ${uc.icon}`}></i>
              </div>
              <h5 className={styles.ucTitle}>{uc.title}</h5>
              <p className={styles.ucText}>{uc.text}</p>
              <div className={styles.ucMetric}>
                <span
                  className={styles.ucMetricValue}
                  style={{ color: uc.color }}
                >
                  {uc.metric}
                </span>
                <span className={styles.ucMetricLabel}>{uc.metricLabel}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
));

/* ═══════════════════════════════════════════════════
   INTEGRATION PARTNERS
   ═══════════════════════════════════════════════════ */
const integrationLogos = [
  { icon: "bi-cloud-fill", name: "Salesforce", color: "#00A1E0" },
  { icon: "bi-graph-up", name: "HubSpot", color: "#FF7A59" },
  { icon: "bi-bag-fill", name: "Shopify", color: "#96BF48" },
  { icon: "bi-credit-card-fill", name: "Razorpay", color: "#3395FF" },
  { icon: "bi-lightning-fill", name: "Zapier", color: "#FF4A00" },
  { icon: "bi-briefcase-fill", name: "Zoho", color: "#E42527" },
  { icon: "bi-wordpress", name: "WordPress", color: "#21759B" },
  { icon: "bi-code-slash", name: "REST API", color: "#6366f1" },
];

const IntegrationSection = memo(() => (
  <section className={styles.sectionAlt}>
    <div className="container aos">
      <div className="text-center mb-5" data-aos="fade-up">
        <span className={styles.sectionBadge}>Integrations</span>
        <h2 className={styles.sectionTitle}>Works With Your Favorite Tools</h2>
        <p
          className={`${styles.sectionLead} mx-auto`}
          style={{ maxWidth: 600 }}
        >
          Connect Bulk SMS with 80+ CRMs, e-commerce platforms, and business
          tools via our powerful API.
        </p>
      </div>
      <div className={styles.integGrid} data-aos="fade-up">
        {integrationLogos.map((item, i) => (
          <div key={i} className={styles.integCard}>
            <div
              className={styles.integIcon}
              style={{ background: `${item.color}14`, color: item.color }}
            >
              <i className={`bi ${item.icon}`}></i>
            </div>
            <span className={styles.integName}>{item.name}</span>
          </div>
        ))}
      </div>
      <p
        className="text-center mt-4"
        style={{ color: "var(--sms-muted)", fontSize: 14 }}
      >
        + 80 more integrations available
      </p>
    </div>
  </section>
));

/* ═══════════════════════════════════════════════════
   TESTIMONIALS
   ═══════════════════════════════════════════════════ */
const testimonials = [
  {
    text: "A2ZSMS Bulk SMS transformed our customer communication. We saw a 3x increase in sales from our promotional campaigns. Setup was quick and support is always available!",
    name: "Vikram Mehta",
    role: "CEO, FashionMart India",
    initials: "VM",
  },
  {
    text: "We use A2ZSMS for OTP delivery and it's blazing fast — under 3 seconds every time. Our customers never face delays during login or payment. Highly reliable!",
    name: "Sneha Iyer",
    role: "CTO, PaySwift Fintech",
    initials: "SI",
  },
  {
    text: "Appointment reminders via Bulk SMS reduced our no-shows by 55%. The delivery rate is 99%+ and the DLT compliance support saved us a lot of headache.",
    name: "Dr. Arun Nair",
    role: "Director, MediCare Clinics",
    initials: "AN",
  },
];

const TestimonialsSection = memo(() => (
  <section className={styles.section}>
    <div className="container aos">
      <div className="text-center mb-5" data-aos="fade-up">
        <span className={styles.sectionBadge}>Testimonials</span>
        <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
      </div>
      <div className="row g-4 aos">
        {testimonials.map((t, i) => (
          <div
            className="col-md-4"
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialQuoteMark}>
                <i className="bi bi-quote"></i>
              </div>
              <div className={styles.testimonialStars}>
                {[...Array(5)].map((_, j) => (
                  <i className="bi bi-star-fill" key={j}></i>
                ))}
              </div>
              <p className={styles.testimonialText}>&ldquo;{t.text}&rdquo;</p>
              <div className="d-flex align-items-center gap-3">
                <div className={styles.testimonialAvatar}>{t.initials}</div>
                <div>
                  <p className={styles.testimonialName}>{t.name}</p>
                  <p className={styles.testimonialRole}>{t.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
));

/* ═══════════════════════════════════════════════════
   FAQ ACCORDION
   ═══════════════════════════════════════════════════ */
const faqItems = [
  {
    q: "What is Bulk SMS?",
    a: "Bulk SMS is a service that allows businesses to send large volumes of text messages to multiple recipients simultaneously. It is used for OTP delivery, promotional campaigns, transactional alerts, appointment reminders, and more.",
  },
  {
    q: "What is the difference between Promotional and Transactional SMS?",
    a: "Promotional SMS is used for marketing campaigns, offers, and discounts — sent only to opted-in customers during allowed hours. Transactional SMS is for critical, time-sensitive information like OTPs, account alerts, and order updates — sent 24/7 to all numbers.",
  },
  {
    q: "What is DLT registration and do I need it?",
    a: "DLT (Distributed Ledger Technology) registration is mandatory in India as per TRAI regulations for all businesses sending commercial SMS. We handle your DLT registration and template approval, so you don't need to worry about compliance.",
  },
  {
    q: "How quickly are SMS messages delivered?",
    a: "Transactional SMS (OTPs, alerts) are delivered within 3 seconds. Promotional SMS campaigns are typically delivered within a few minutes, depending on volume. We guarantee 99.9% delivery rate.",
  },
  {
    q: "Can I schedule SMS campaigns in advance?",
    a: "Yes! Our platform allows you to schedule promotional SMS campaigns for any future date and time. You can also set up automated recurring campaigns for regular communications.",
  },
  {
    q: "Do you provide a sender ID?",
    a: "Yes. We provide a DLT-registered 6-character alphabetical sender ID that reflects your brand name (e.g., MYSHOP, BANKXYZ). This builds trust and improves message open rates.",
  },
  {
    q: "Is there an API for integration?",
    a: "Yes, we provide a powerful REST API that you can integrate with your website, app, CRM, or any business software. Detailed API documentation and developer support are included.",
  },
  {
    q: "What are the pricing plans?",
    a: "Our pricing is credit-based. You buy SMS credits and use them as needed. We offer flexible plans for startups and enterprises. Contact us for custom pricing based on your monthly volume.",
  },
];

const FaqSection = ({ openIndex, setOpenIndex }) => (
  <section className={styles.sectionAlt}>
    <div className="container aos">
      <div className="text-center mb-5" data-aos="fade-up">
        <span className={styles.sectionBadge}>FAQ</span>
        <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
        <p
          className={`${styles.sectionLead} mx-auto`}
          style={{ maxWidth: 600 }}
        >
          Everything you need to know about Bulk SMS services.
        </p>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          {faqItems.map((faq, i) => (
            <div
              key={i}
              className={`${styles.faqItem} ${openIndex === i ? styles.faqItemOpen : ""}`}
              data-aos="fade-up"
              data-aos-delay={i * 50}
            >
              <button
                className={styles.faqQuestion}
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              >
                <span>{faq.q}</span>
                <i
                  className={`bi ${openIndex === i ? "bi-dash" : "bi-plus"}`}
                ></i>
              </button>
              <div className={styles.faqAnswer}>
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════
   FORM + CTA SECTION
   ═══════════════════════════════════════════════════ */
const FormCtaSection = () => (
  <section className={styles.formSection} id="get-started-section">
    <div className={styles.urgencyBanner}>
      <i className="bi bi-lightning-charge-fill"></i>
      <span>
        <strong>Limited Offer:</strong> DLT Registration at just ₹5,000 + Free
        Branded Sender ID + Free 1000 SMS Credits — Only for new sign-ups
      </span>
      <i className="bi bi-lightning-charge-fill"></i>
    </div>

    <div className="container aos">
      <div className="row g-5 align-items-start aos">
        <div className="col-lg-5" data-aos="fade-right">
          <span className={styles.sectionBadge}>
            🎯 Exclusive Offer — Limited Spots
          </span>
          <h2 className={styles.sectionTitle}>
            Your Competitors Are Already Using Bulk SMS. Are You?
          </h2>
          <p className={styles.sectionLead}>
            Every day without Bulk SMS is revenue you&apos;re leaving on the
            table. <strong>1000+ businesses</strong> in India already send
            instant OTPs, promotional offers &amp; alerts with A2ZSMS — and
            they&apos;re converting more customers than ever.
          </p>

          {/* Live notification strip */}
          <div className={styles.liveNotifStrip}>
            <span className={styles.liveNotifDot}></span>
            <span className={styles.liveNotifText}>
              <strong>Ravi from Bangalore</strong> just signed up 8 minutes ago
            </span>
          </div>

          <div className={styles.socialProofStrip}>
            <div className={styles.socialProofAvatars}>
              {["VM", "SI", "AN", "RK"].map((init, i) => (
                <div key={i} className={styles.socialProofAvatar}>
                  {init}
                </div>
              ))}
            </div>
            <span className={styles.socialProofText}>
              <strong>23 businesses</strong> signed up this week
            </span>
          </div>

          <ul className="list-unstyled mt-4">
            {[
              {
                icon: "bi-gift-fill",
                text: "Free 1000 SMS credits on signup",
                highlight: true,
              },
              {
                icon: "bi-patch-check-fill",
                text: "DLT registration at just ₹5,000 — we handle it all",
                highlight: true,
              },
              { icon: "bi-clock-fill", text: "Account live within 24 hours" },
              {
                icon: "bi-person-check-fill",
                text: "Dedicated account manager assigned to you",
              },
              {
                icon: "bi-shield-fill-check",
                text: "No hidden charges — pay only for what you send",
              },
              {
                icon: "bi-x-circle-fill",
                text: "No lock-in contract — cancel anytime",
              },
            ].map((item, i) => (
              <li
                key={i}
                className="d-flex align-items-center gap-2 mb-3"
                style={{
                  fontSize: 15,
                  fontWeight: item.highlight ? 700 : 500,
                  color: item.highlight ? "#1d4ed8" : "inherit",
                }}
              >
                <i
                  className={`bi ${item.icon}`}
                  style={{ color: "#0d6efd", fontSize: 17 }}
                ></i>
                {item.text}
                {item.highlight && (
                  <span
                    style={{
                      fontSize: 11,
                      background: "#dbeafe",
                      color: "#1d4ed8",
                      padding: "2px 8px",
                      borderRadius: 999,
                      fontWeight: 700,
                      marginLeft: 4,
                    }}
                  >
                    FREE
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Urgency countdown message */}
          <div className={styles.spotsWarning}>
            <i className="bi bi-exclamation-circle-fill"></i>
            <span>
              Only <strong style={{ color: "#dc2626" }}>5 slots left</strong> at
              the ₹5,000 DLT registration price this month. Once filled, regular
              pricing applies.
            </span>
          </div>

          <div className={styles.formTrustLogos}>
            <div className={styles.formTrustLogo}>
              <i className="bi bi-shield-lock-fill"></i>
              <span>SSL Secured</span>
            </div>
            <div className={styles.formTrustLogo}>
              <i className="bi bi-patch-check-fill"></i>
              <span>TRAI Compliant</span>
            </div>
            <div className={styles.formTrustLogo}>
              <i className="bi bi-star-fill"></i>
              <span>4.9/5 Rated</span>
            </div>
          </div>

          <div className="d-flex flex-wrap gap-3 mt-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappBtn}
            >
              <i className="bi bi-whatsapp"></i> Chat on WhatsApp
            </a>
            <a href="tel:+918431086185" className={styles.secondaryBtn}>
              <i className="bi bi-telephone-fill"></i> Call Now
            </a>
          </div>
        </div>

        <div className="col-lg-7" data-aos="fade-left">
          <LeadForm formId="get-started-bottom" />
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════
   FINAL CTA (Dark)
   ═══════════════════════════════════════════════════ */
const CTA_PARTICLES = Array.from({ length: 6 }, (_, i) => `${i * 0.8}s`);

const FinalCTA = memo(() => (
  <section className={styles.ctaSection}>
    <div className={styles.ctaParticles}>
      {CTA_PARTICLES.map((delay, i) => (
        <span
          key={i}
          className={styles.ctaParticle}
          style={{ animationDelay: delay }}
        ></span>
      ))}
    </div>
    <div className="container position-relative aos" data-aos="zoom-in">
      <div className={styles.ctaOfferBadge}>
        <i className="bi bi-lightning-charge-fill"></i>
        Limited Offer · DLT Registration at ₹5,000 · Only 5 Spots Left
      </div>
      <h2 className={styles.sectionTitleLight}>
        Every Second You Wait, a Customer Buys from Your Competitor
      </h2>
      <p
        className={styles.sectionLeadLight}
        style={{ maxWidth: 580, margin: "14px auto 12px" }}
      >
        Businesses using Bulk SMS see{" "}
        <strong style={{ color: "#93c5fd" }}>3× more conversions</strong> than
        those relying on email alone. Don&rsquo;t let another day pass without
        reaching your customers where they actually look — their phone.
      </p>
      <p
        className={styles.sectionLeadLight}
        style={{
          maxWidth: 500,
          margin: "0 auto 36px",
          fontSize: "0.9rem",
          opacity: 0.7,
        }}
      >
        Free setup · No hidden fees · Account live in 24 hours
      </p>
      <div className="d-flex flex-wrap gap-3 justify-content-center">
        <a href="#get-started" className={styles.primaryBtn}>
          Claim My Free Setup Now <i className="bi bi-arrow-right ms-1"></i>
        </a>
      </div>
      <p
        style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, marginTop: 20 }}
      >
        🔒 No credit card required &nbsp;·&nbsp; 100% free consultation
      </p>
    </div>
  </section>
));

/* ═══════════════════════════════════════════════════
   LANDING PAGE FOOTER (Privacy / Terms)
   ═══════════════════════════════════════════════════ */
const LandingPageFooter = memo(() => (
  <footer className={styles.landingFooter}>
    <nav className={styles.landingFooterLinks} aria-label="Legal links">
      <a href="/privacy/">Privacy Policy</a>
      <span className={styles.landingFooterDot}>·</span>
      <a href="/terms/">Terms &amp; Conditions</a>
    </nav>
  </footer>
));

/* ═══════════════════════════════════════════════════
   SERVICES OVERVIEW SECTION
   ═══════════════════════════════════════════════════ */
const services = [
  {
    icon: "bi-chat-dots-fill",
    color1: "#0d6efd",
    color2: "#6366f1",
    bg: "#eff6ff",
    iconColor: "#0d6efd",
    title: "Bulk SMS Service",
    text: "Send thousands of messages instantly to your customers using our powerful Bulk SMS messaging platform. Perfect for marketing campaigns, alerts and notifications.",
    listLabel: "Best for",
    items: [
      "Marketing campaigns",
      "Alerts and notifications",
      "Customer engagement",
      "Mass communication",
    ],
  },
  {
    icon: "bi-megaphone-fill",
    color1: "#f59e0b",
    color2: "#f97316",
    bg: "#fef3c7",
    iconColor: "#f59e0b",
    title: "Promotional SMS",
    text: "Promotional SMS helps businesses promote offers, discounts and announcements directly to customers. Reach thousands of users within seconds.",
    listLabel: "Best for",
    items: [
      "Marketing campaigns",
      "Sales promotions",
      "Festival offers",
      "Product launches",
    ],
  },
  {
    icon: "bi-shield-lock-fill",
    color1: "#10b981",
    color2: "#0ea5e9",
    bg: "#d1fae5",
    iconColor: "#10b981",
    title: "Transactional SMS",
    text: "Transactional SMS is used for sending important service messages that customers must receive instantly.",
    listLabel: "Examples",
    items: [
      "Order confirmations",
      "Payment alerts",
      "Delivery updates",
      "Account notifications",
    ],
  },
  {
    icon: "bi-lock-fill",
    color1: "#8b5cf6",
    color2: "#6366f1",
    bg: "#f5f3ff",
    iconColor: "#8b5cf6",
    title: "OTP SMS Service",
    text: "Our OTP SMS Service Provider platform ensures secure and instant OTP delivery for mobile apps and websites.",
    listLabel: "Best for",
    items: [
      "Login verification",
      "Banking authentication",
      "E-commerce verification",
      "App registration",
    ],
  },
];

const ServicesOverviewSection = memo(() => (
  <section className={styles.servicesSection}>
    <div className="container">
      <div className="text-center" data-aos="fade-up">
        <span className={styles.sectionBadge}>Our Services</span>
        <h2 className={styles.sectionTitle}>
          Bulk SMS Services for Every Business Need
        </h2>
        <p
          className={`${styles.sectionLead} mx-auto`}
          style={{ maxWidth: 600 }}
        >
          From promotional campaigns to critical OTPs — we have the right SMS
          solution for every use case.
        </p>
      </div>

      <div className={styles.servicesGrid}>
        {services.map((svc, i) => (
          <div
            key={i}
            className={styles.serviceCard}
            style={{ "--sc-color1": svc.color1, "--sc-color2": svc.color2 }}
            data-aos="fade-up"
            data-aos-delay={i * 80}
          >
            <div
              className={styles.serviceIconWrap}
              style={{ background: svc.bg, color: svc.iconColor }}
            >
              <i className={`bi ${svc.icon}`}></i>
            </div>
            <h3 className={styles.serviceCardTitle}>{svc.title}</h3>
            <p className={styles.serviceCardText}>{svc.text}</p>
            <div>
              <p className={styles.serviceListLabel}>{svc.listLabel}</p>
              <ul className={styles.serviceList}>
                {svc.items.map((item) => (
                  <li key={item} style={{ color: svc.iconColor }}>
                    <span style={{ color: "var(--sms-body)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
));

/* ═══════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════ */
const BulkSmsLanding = () => {
  const [activeFeatureTab, setActiveFeatureTab] = useState("promotional");
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  useEffect(() => {
    const nav = document.querySelector("nav.navbar");
    const footer = document.querySelector("footer.site-footer");
    if (nav) nav.style.display = "none";
    if (footer) footer.style.display = "none";
    return () => {
      if (nav) nav.style.display = "";
      if (footer) footer.style.display = "";
    };
  }, []);

  return (
    <>
      <div className="d-none d-md-block">
        <AnnouncementTicker />
      </div>
      <div className={styles.page}>
        <StickyMiniNav />
        <HeroSection />
        <PricingTeaserStrip />
        <ServicesOverviewSection />
        {/* <MarqueeTrustBar /> */}
        {/* <AsSeenOnStrip /> */}
        <ProblemSolution />
        <ComparisonTableSection />
        <FeaturesSection
          activeTab={activeFeatureTab}
          setActiveTab={setActiveFeatureTab}
        />
        <HowItWorks />
        <UseCasesSection />
        <IntegrationSection />
        <TestimonialsSection />
        <FaqSection openIndex={openFaqIndex} setOpenIndex={setOpenFaqIndex} />
        <FormCtaSection />
        <FinalCTA />
        <FloatingStickyBar />
      </div>
      <LandingPageFooter />
    </>
  );
};

export default BulkSmsLanding;
