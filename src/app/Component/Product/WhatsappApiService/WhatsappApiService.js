"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./WhatsappApiService.module.css";
import PopupForm from "../PopUp";
import { gtag_report_conversion } from "../../../GoogleTracking";

const WA_NUMBER = "917975099999";
const WA_MSG = encodeURIComponent(
  "Hi, I am interested in WhatsApp API service"
);
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
                : Math.floor(eased * numEnd)
            );
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, isDecimal]);

  return { count, ref };
};

/* ═══════════════════════════════════════════════════
   STICKY MINI NAV
   ═══════════════════════════════════════════════════ */
const StickyMiniNav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.miniNav} ${scrolled ? styles.miniNavScrolled : ""}`}
    >
      <div className="container d-flex align-items-center justify-content-between">
        <a href="/" className={styles.miniNavLogo}>
          <img src="/image/logo.png" alt="A2ZSMS" />
        </a>
        <div className="d-flex align-items-center gap-3">
          <a href="tel:+918431086185" className={styles.miniNavPhone}>
            <i className="bi bi-telephone-fill"></i>
            <span className="d-none d-md-inline">+91 84310 86185</span>
          </a>
          <a href="#get-started" className={styles.miniNavCta}>
            Get Started <i className="bi bi-arrow-right ms-1"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

/* ═══════════════════════════════════════════════════
   HERO
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
    <div className="container position-relative">
      <div className="row align-items-center gy-5">
        <div className="col-lg-6" data-aos="fade-right">
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot}></span>
            Official WhatsApp Business API Partner
          </div>

          <h1 className={styles.heroTitle}>
            Send Bulk WhatsApp Messages Instantly with{" "}
            <span className={styles.heroGradient}>Official API</span>
          </h1>

          <p className={styles.heroText}>
            Boost Sales, Automate Notifications &amp; Reach Customers Directly
            on WhatsApp. Get WhatsApp API + AI Chatbot &mdash; everything you
            need to grow your business.
          </p>

          <div className={styles.heroChecks}>
            {[
              "Bulk messaging with 98% open rate",
              "AI-Powered chatbot for 24/7 support",
              "Automate orders, OTPs & notifications",
              "Green tick verified business profile",
            ].map((item) => (
              <div key={item} className={styles.heroCheckItem}>
                <i className="bi bi-check-circle-fill"></i>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="d-flex flex-wrap gap-3 mt-4">
            <a href="#get-started" className={styles.primaryBtn}>
              Get WhatsApp API Now <i className="bi bi-arrow-right ms-1"></i>
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappBtn}
            >
              <i className="bi bi-whatsapp"></i> Chat on WhatsApp
            </a>
          </div>

          <div className={styles.heroStats}>
            <HeroStatItem end={500} suffix="+" label="Businesses" />
            <div className={styles.heroStatDivider}></div>
            <HeroStatItem
              end={99.9}
              suffix="%"
              label="Uptime"
              isDecimal={true}
            />
            <div className={styles.heroStatDivider}></div>
            <HeroStatItem end={24} suffix="/7" label="Support" />
          </div>
        </div>

        <div className="col-lg-6" data-aos="fade-left">
          <div className={styles.heroImageWrap}>
            <div className={styles.heroImageGlow}></div>
            <img
              src="/image/product/whatsapp.png"
              alt="WhatsApp API Service Dashboard"
              className={styles.heroImage}
            />
            <a href="#get-started" className={styles.heroPlayBtn} aria-label="Get started">
              <i className="bi bi-play-fill"></i>
            </a>
            <div className={styles.heroFloat1}>
              <i className="bi bi-whatsapp"></i>
              <span>98% Open Rate</span>
            </div>
            <div className={styles.heroFloat2}>
              <i className="bi bi-robot"></i>
              <span>AI Chatbot</span>
            </div>
            <div className={styles.heroFloat3}>
              <i className="bi bi-patch-check-fill"></i>
              <span>Meta Verified</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════
   MARQUEE TRUST BAR
   ═══════════════════════════════════════════════════ */
const MarqueeTrustBar = () => (
  <div className={styles.marqueeSection} data-aos="fade-up">
    <div className="container">
      <span className={styles.marqueeLabel}>
        Trusted by <strong>500+</strong> Businesses Across India
      </span>
    </div>
    <div className={styles.marqueeTrack}>
      <div className={styles.marqueeContent}>
        {[...trustLogos, ...trustLogos, ...trustLogos].map((logo, i) => (
          <img
            key={i}
            src={logo.src}
            alt={logo.alt}
            className={styles.marqueeLogo}
          />
        ))}
      </div>
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════
   PROBLEM → SOLUTION
   ═══════════════════════════════════════════════════ */
const problems = [
  {
    icon: "bi-emoji-frown",
    title: "Low SMS & Email Open Rates",
    text: "Traditional SMS gets <20% opens, emails land in spam. Your marketing budget is wasted.",
    stat: "<20%",
    statLabel: "Open Rate",
  },
  {
    icon: "bi-clock-history",
    title: "Manual Follow-ups Waste Time",
    text: "Your team spends hours manually following up with leads instead of closing deals.",
    stat: "3hrs",
    statLabel: "Avg Response",
  },
  {
    icon: "bi-moon",
    title: "No Support After Hours",
    text: "Customers leave when they don't get instant replies. You lose leads every night.",
    stat: "40%",
    statLabel: "Leads Lost",
  },
];

const solutions = [
  {
    icon: "bi-graph-up-arrow",
    title: "98% Open Rate on WhatsApp",
    text: "Messages read within minutes. Rich media — images, videos, buttons for higher engagement.",
    stat: "98%",
    statLabel: "Open Rate",
  },
  {
    icon: "bi-gear-wide-connected",
    title: "Automated Workflows & Drips",
    text: "Set up auto-replies, drip campaigns, and triggers that engage leads on autopilot.",
    stat: "Instant",
    statLabel: "Response",
  },
  {
    icon: "bi-robot",
    title: "AI Chatbot Works 24/7",
    text: "Intelligent chatbot handles queries, captures leads, and books appointments around the clock.",
    stat: "24/7",
    statLabel: "Coverage",
  },
];

const ProblemSolution = () => (
  <section className={styles.sectionAlt}>
    <div className="container">
      <div className="text-center mb-5" data-aos="fade-up">
        <span className={styles.sectionBadge}>Why Switch?</span>
        <h2 className={styles.sectionTitle}>
          The Problem &amp; Our Solution
        </h2>
        <p
          className={`${styles.sectionLead} mx-auto`}
          style={{ maxWidth: 600 }}
        >
          Stop struggling with outdated channels. Switch to WhatsApp API +
          Chatbot and see instant results.
        </p>
      </div>

      <div className="row g-4 mb-2">
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

      <div className="row g-4 mt-2">
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
            <div className={`${styles.compCard} ${styles.compCardGreen}`}>
              <div className={`${styles.compIcon} ${styles.compIconGreen}`}>
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
);

/* ═══════════════════════════════════════════════════
   FEATURES — Tab Switcher (API + Chatbot merged)
   ═══════════════════════════════════════════════════ */
const apiAdvantages = [
  {
    icon: "bi-send-fill",
    color: "#25d366",
    title: "Bulk Messaging at Scale",
    text: "Send thousands of personalized WhatsApp messages with 98% open rate. Reach customers where they are most active.",
  },
  {
    icon: "bi-bell-fill",
    color: "#128c7e",
    title: "Automated Notifications",
    text: "Order updates, payment reminders, OTPs, and alerts — sent automatically without any manual work.",
  },
  {
    icon: "bi-shield-lock-fill",
    color: "#075e54",
    title: "Green Tick Verified Profile",
    text: "Get official Meta verification with a green tick badge that builds instant customer trust.",
  },
  {
    icon: "bi-plug-fill",
    color: "#0ea5e9",
    title: "Easy API Integration",
    text: "Connect WhatsApp with your CRM, ERP, or any business tool in minutes using our developer-friendly API.",
  },
  {
    icon: "bi-graph-up-arrow",
    color: "#8b5cf6",
    title: "Real-Time Analytics",
    text: "Track delivery, read rates, and campaign performance with powerful real-time dashboards.",
  },
  {
    icon: "bi-images",
    color: "#f59e0b",
    title: "Rich Media Templates",
    text: "Send images, videos, PDFs, carousels, and interactive buttons — boost engagement 3x over plain text.",
  },
];

const chatbotAdvantages = [
  {
    icon: "bi-stars",
    color: "#25d366",
    title: "AI-Powered Replies",
    text: "Natural conversations with AI that improves after every interaction. Handle 80% queries without humans.",
  },
  {
    icon: "bi-megaphone",
    color: "#128c7e",
    title: "Campaign Automation",
    text: "Segment your audience and launch drip or broadcast campaigns with smart scheduling.",
  },
  {
    icon: "bi-bag-check",
    color: "#075e54",
    title: "Product Discovery",
    text: "Show catalogs, share product cards, and guide shoppers to checkout inside WhatsApp.",
  },
  {
    icon: "bi-headset",
    color: "#0ea5e9",
    title: "Always-On Support",
    text: "Resolve FAQs instantly and route complex issues to human agents with full context.",
  },
  {
    icon: "bi-calendar-check",
    color: "#8b5cf6",
    title: "Appointment Booking",
    text: "Capture leads, confirm bookings, and send reminders — no manual follow-up needed.",
  },
  {
    icon: "bi-diagram-3-fill",
    color: "#f59e0b",
    title: "No-Code Flow Builder",
    text: "Build complex conversation flows with our drag-and-drop visual builder. Zero coding needed.",
  },
];

const FeaturesSection = ({ activeTab, setActiveTab }) => (
  <section className={styles.section}>
    <div className="container">
      <div className="text-center mb-5" data-aos="fade-up">
        <span className={styles.sectionBadge}>Features</span>
        <h2 className={styles.sectionTitle}>
          Everything You Need to Scale on WhatsApp
        </h2>
        <p
          className={`${styles.sectionLead} mx-auto`}
          style={{ maxWidth: 600 }}
        >
          From bulk messaging to AI chatbot automation — one platform for
          complete WhatsApp success.
        </p>
        <div className={styles.tabSwitcher}>
          <button
            className={`${styles.tabBtn} ${activeTab === "api" ? styles.tabBtnActive : ""}`}
            onClick={() => setActiveTab("api")}
          >
            <i className="bi bi-whatsapp me-2"></i>WhatsApp API
          </button>
          <button
            className={`${styles.tabBtn} ${activeTab === "chatbot" ? styles.tabBtnActive : ""}`}
            onClick={() => setActiveTab("chatbot")}
          >
            <i className="bi bi-robot me-2"></i>AI Chatbot
          </button>
        </div>
      </div>

      <div className="row align-items-center gy-5">
        <div className="col-lg-5" data-aos="fade-right">
          <div className={styles.featureImageWrap}>
            <div className={styles.heroImageGlow}></div>
            <img
              src={
                activeTab === "api"
                  ? "/image/product/whatsapp1.png"
                  : "/image/product/chatbot_2.png"
              }
              alt={
                activeTab === "api"
                  ? "WhatsApp API Features"
                  : "AI Chatbot Features"
              }
              className={styles.featureSectionImage}
            />
          </div>
        </div>
        <div className="col-lg-7" data-aos="fade-left">
          <div className="row g-3">
            {(activeTab === "api" ? apiAdvantages : chatbotAdvantages).map(
              (f, i) => (
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
              )
            )}
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
    desc: "Fill the form or chat with us on WhatsApp to get started.",
  },
  {
    icon: "bi-patch-check-fill",
    title: "Get Verified",
    desc: "We set up your official WhatsApp Business API + Green Tick.",
  },
  {
    icon: "bi-plug-fill",
    title: "Integrate",
    desc: "Connect with your CRM, website, or systems using our API.",
  },
  {
    icon: "bi-rocket-takeoff-fill",
    title: "Go Live!",
    desc: "Start sending bulk messages, automate chatbot & grow.",
  },
];

const HowItWorks = () => (
  <section className={styles.sectionDark}>
    <div className="container">
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
);

/* ═══════════════════════════════════════════════════
   USE CASES
   ═══════════════════════════════════════════════════ */
const useCases = [
  {
    icon: "bi-cart-check-fill",
    color: "#25d366",
    bg: "#e6f7ed",
    title: "E-Commerce",
    text: "Order updates, abandoned cart recovery, product catalogs & promotional offers.",
    metric: "3x",
    metricLabel: "More Sales",
  },
  {
    icon: "bi-mortarboard-fill",
    color: "#0ea5e9",
    bg: "#e0f2fe",
    title: "Education",
    text: "Admission alerts, fee reminders, class schedules & student engagement.",
    metric: "60%",
    metricLabel: "Less No-Shows",
  },
  {
    icon: "bi-hospital-fill",
    color: "#ef4444",
    bg: "#fee2e2",
    title: "Healthcare",
    text: "Appointment reminders, lab reports, prescription alerts & patient follow-ups.",
    metric: "45%",
    metricLabel: "Faster Response",
  },
  {
    icon: "bi-bank2",
    color: "#8b5cf6",
    bg: "#ede9fe",
    title: "Banking & Finance",
    text: "Transaction alerts, OTP verification, loan updates & customer onboarding.",
    metric: "99%",
    metricLabel: "Delivery Rate",
  },
  {
    icon: "bi-house-door-fill",
    color: "#f59e0b",
    bg: "#fef3c7",
    title: "Real Estate",
    text: "Property listings, site visit scheduling, lead nurturing & document sharing.",
    metric: "2x",
    metricLabel: "More Visits",
  },
  {
    icon: "bi-truck",
    color: "#128c7e",
    bg: "#d1fae5",
    title: "Logistics",
    text: "Live delivery tracking, dispatch notifications & driver coordination.",
    metric: "80%",
    metricLabel: "Auto-Handled",
  },
];

const UseCasesSection = () => (
  <section className={styles.section}>
    <div className="container">
      <div className="text-center mb-5" data-aos="fade-up">
        <span className={styles.sectionBadge}>Use Cases</span>
        <h2 className={styles.sectionTitle}>Built for Every Industry</h2>
        <p
          className={`${styles.sectionLead} mx-auto`}
          style={{ maxWidth: 600 }}
        >
          WhatsApp API + Chatbot works across industries to automate
          communication and boost conversions.
        </p>
      </div>
      <div className="row g-4">
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
);

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
  { icon: "bi-code-slash", name: "REST API", color: "#61DAFB" },
];

const IntegrationSection = () => (
  <section className={styles.sectionAlt}>
    <div className="container">
      <div className="text-center mb-5" data-aos="fade-up">
        <span className={styles.sectionBadge}>Integrations</span>
        <h2 className={styles.sectionTitle}>Works With Your Favorite Tools</h2>
        <p
          className={`${styles.sectionLead} mx-auto`}
          style={{ maxWidth: 600 }}
        >
          Connect WhatsApp API with 80+ CRMs, e-commerce platforms, and business
          tools.
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
        style={{ color: "var(--wa-muted)", fontSize: 14 }}
      >
        + 80 more integrations available
      </p>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════
   TESTIMONIALS
   ═══════════════════════════════════════════════════ */
const testimonials = [
  {
    text: "A2ZSMS WhatsApp API transformed our customer communication. We saw a 3x increase in engagement within the first month. The setup was seamless and support is outstanding!",
    name: "Rahul Sharma",
    role: "CEO, ShopEase Retail",
    initials: "RS",
  },
  {
    text: "We automated our appointment reminders and reduced no-shows by 60%. The chatbot handles queries even when we are closed. Truly a game-changer for our clinic.",
    name: "Dr. Priya Nair",
    role: "Director, HealthFirst Clinic",
    initials: "PN",
  },
  {
    text: "Bulk messaging with the official API means no bans. Our delivery rate is 99%+ and the analytics dashboard helps us optimize every campaign. Highly recommend!",
    name: "Amit Patel",
    role: "Marketing Head, EduConnect",
    initials: "AP",
  },
];

const TestimonialsSection = () => (
  <section className={styles.section}>
    <div className="container">
      <div className="text-center mb-5" data-aos="fade-up">
        <span className={styles.sectionBadge}>Testimonials</span>
        <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
      </div>
      <div className="row g-4">
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
);

/* ═══════════════════════════════════════════════════
   FAQ ACCORDION
   ═══════════════════════════════════════════════════ */
const faqItems = [
  {
    q: "What is WhatsApp Business API?",
    a: "WhatsApp Business API is the official enterprise solution from Meta that allows businesses to send bulk messages, automate notifications, and integrate WhatsApp with their CRM and business tools. Unlike the WhatsApp Business App, the API supports high-volume messaging and team collaboration.",
  },
  {
    q: "How is this different from the WhatsApp Business App?",
    a: "The WhatsApp Business App is designed for small businesses with limited messaging needs. The API is built for scale — it supports bulk messaging, chatbot automation, multi-agent support, CRM integration, and official green tick verification.",
  },
  {
    q: "How long does the setup take?",
    a: "We typically complete the setup within 24-48 hours. This includes Meta Business verification, phone number registration, and template approval. Our team handles the entire process for you.",
  },
  {
    q: "Can I send promotional messages via WhatsApp API?",
    a: "Yes, the API supports marketing template messages including promotional offers, product launches, and re-engagement campaigns. All templates must be approved by Meta before sending.",
  },
  {
    q: "Is there a limit on the number of messages I can send?",
    a: "WhatsApp API uses a tier-based system. You start at 1,000 unique contacts per day and can scale up to unlimited messaging as your quality rating improves. We help you scale quickly.",
  },
  {
    q: "Do I need a new phone number?",
    a: "You can use your existing business number or we can provide a new one. The number must not be currently registered with WhatsApp or WhatsApp Business App.",
  },
  {
    q: "What kind of support do you provide?",
    a: "We provide dedicated account management, 24/7 technical support via WhatsApp, email and phone. We also help with template creation, campaign strategy, and API integration.",
  },
  {
    q: "What are the pricing details?",
    a: "Our pricing starts with a one-time setup fee and a monthly platform fee. Per-message charges follow Meta\u2019s conversation-based pricing. Contact us for a customized quote based on your volume.",
  },
];

const FaqSection = ({ openIndex, setOpenIndex }) => (
  <section className={styles.sectionAlt}>
    <div className="container">
      <div className="text-center mb-5" data-aos="fade-up">
        <span className={styles.sectionBadge}>FAQ</span>
        <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
        <p
          className={`${styles.sectionLead} mx-auto`}
          style={{ maxWidth: 600 }}
        >
          Everything you need to know about WhatsApp API &amp; Chatbot.
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
   LEAD FORM
   ═══════════════════════════════════════════════════ */
const LeadForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Enter a valid email";
    if (!form.phone.trim()) errs.phone = "Phone number is required";
    else if (!/^\d{10,15}$/.test(form.phone.trim()))
      errs.phone = "Enter valid phone (min 10 digits)";
    if (!form.service) errs.service = "Please select a service";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone")
      setForm((p) => ({ ...p, [name]: value.replace(/\D/g, "") }));
    else setForm((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    try {
      const timestamp = new Date().toISOString();
      await Promise.all([
        fetch(
          "https://hook.eu2.make.com/mmfvqeha16nyft89xe7eo54kzxcdwab6",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: form.name,
              email: form.email,
              phone: form.phone,
              company: form.company,
              service: form.service,
              message: form.message,
              timestamp,
            }),
          }
        ),
        fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            phone: form.phone,
            company: form.company,
            service: form.service,
            message: form.message,
            access_key: "f51b2c3b-8f16-4d07-b40d-ec3d342fa530",
          }),
        }),
      ]);
      // Fire Google Ads conversion tracking
      gtag_report_conversion();

      setSubmitted(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    } catch (err) {
      console.error("Submission error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.formCard} id="get-started">
      {submitted ? (
        <div className={styles.formSuccess}>
          <div className={styles.formSuccessIcon}>
            <i className="bi bi-check-lg"></i>
          </div>
          <h4 className="fw-bold mb-2">Thank You!</h4>
          <p className="text-muted mb-3">
            We will contact you within 24 hours.
          </p>
          <button
            className={styles.primaryBtn}
            onClick={() => setSubmitted(false)}
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <>
          <div className={styles.formResponseTime}>
            <span className={styles.formResponseDot}></span>
            Average response time: <strong>under 2 hours</strong>
          </div>
          <h4 className={styles.formTitle}>Get WhatsApp API Access</h4>
          <p className={styles.formSub}>
            Fill the form &amp; our team will contact you within 24 hours.
          </p>
          <form onSubmit={handleSubmit} noValidate>
            <div className="row g-3">
              <div className="col-12">
                <label className={styles.formLabel}>
                  Full Name <span className={styles.formRequired}>*</span>
                </label>
                <div className={styles.formInputWrap}>
                  <i
                    className={`bi bi-person ${styles.formInputIcon}`}
                  ></i>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Full Name"
                    className={`${styles.formInput} ${errors.name ? styles.formInputError : ""}`}
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                {errors.name && (
                  <p className={styles.formError}>{errors.name}</p>
                )}
              </div>
              <div className="col-md-6">
                <label className={styles.formLabel}>
                  Email <span className={styles.formRequired}>*</span>
                </label>
                <div className={styles.formInputWrap}>
                  <i
                    className={`bi bi-envelope ${styles.formInputIcon}`}
                  ></i>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    className={`${styles.formInput} ${errors.email ? styles.formInputError : ""}`}
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                {errors.email && (
                  <p className={styles.formError}>{errors.email}</p>
                )}
              </div>
              <div className="col-md-6">
                <label className={styles.formLabel}>
                  Phone <span className={styles.formRequired}>*</span>
                </label>
                <div className={styles.formInputWrap}>
                  <i
                    className={`bi bi-telephone ${styles.formInputIcon}`}
                  ></i>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="10-digit mobile number"
                    className={`${styles.formInput} ${errors.phone ? styles.formInputError : ""}`}
                    value={form.phone}
                    onChange={handleChange}
                    maxLength={15}
                  />
                </div>
                {errors.phone && (
                  <p className={styles.formError}>{errors.phone}</p>
                )}
              </div>
              <div className="col-md-6">
                <label className={styles.formLabel}>Company Name</label>
                <div className={styles.formInputWrap}>
                  <i
                    className={`bi bi-building ${styles.formInputIcon}`}
                  ></i>
                  <input
                    type="text"
                    name="company"
                    placeholder="Your Company"
                    className={styles.formInput}
                    value={form.company}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label className={styles.formLabel}>
                  Service <span className={styles.formRequired}>*</span>
                </label>
                <div className={styles.formInputWrap}>
                  <i
                    className={`bi bi-grid ${styles.formInputIcon}`}
                  ></i>
                  <select
                    name="service"
                    className={`${styles.formInput} ${errors.service ? styles.formInputError : ""}`}
                    value={form.service}
                    onChange={handleChange}
                    style={{ cursor: "pointer", appearance: "auto" }}
                  >
                    <option value="">Select a service</option>
                    <option value="WhatsApp API">WhatsApp Business API</option>
                    <option value="WhatsApp Chatbot">WhatsApp Chatbot</option>
                    <option value="API + Chatbot Combo">
                      API + Chatbot Combo
                    </option>
                    <option value="Bulk Messaging">Bulk Messaging Only</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                {errors.service && (
                  <p className={styles.formError}>{errors.service}</p>
                )}
              </div>
              <div className="col-12">
                <label className={styles.formLabel}>Your Requirement</label>
                <textarea
                  name="message"
                  rows="3"
                  placeholder="Tell us about your requirements..."
                  className={`${styles.formInput} ${styles.formTextarea}`}
                  value={form.message}
                  onChange={handleChange}
                  style={{ paddingLeft: 14 }}
                ></textarea>
              </div>
              <div className="col-12">
                <button
                  type="submit"
                  className={styles.formSubmit}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                      ></span>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Get Free Consultation{" "}
                      <i className="bi bi-arrow-right ms-1"></i>
                    </>
                  )}
                </button>
                <div className={styles.formTrust}>
                  <div className={styles.formTrustItem}>
                    <i className="bi bi-shield-lock-fill"></i>
                    <span>256-bit SSL</span>
                  </div>
                  <div className={styles.formTrustItem}>
                    <i className="bi bi-patch-check-fill"></i>
                    <span>Meta Partner</span>
                  </div>
                  <div className={styles.formTrustItem}>
                    <i className="bi bi-clock-fill"></i>
                    <span>Reply in 2 hrs</span>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

/* ═══════════════════════════════════════════════════
   FORM + CTA SECTION
   ═══════════════════════════════════════════════════ */
const FormCtaSection = () => (
  <section className={styles.section} id="get-started-section">
    <div className="container">
      <div className="row g-5 align-items-start">
        <div className="col-lg-5" data-aos="fade-right">
          <span className={styles.sectionBadge}>Get Started</span>
          <h2 className={styles.sectionTitle}>
            Ready to Grow Your Business on WhatsApp?
          </h2>
          <p className={styles.sectionLead}>
            Join 500+ businesses already using A2ZSMS WhatsApp API &amp; Chatbot
            to boost sales, automate support, and engage customers like never
            before.
          </p>
          <ul className="list-unstyled mt-4">
            {[
              "Free consultation & demo",
              "Setup within 24\u201348 hours",
              "Dedicated account manager",
              "No hidden charges \u2014 transparent pricing",
              "Cancel anytime \u2014 no lock-in",
            ].map((item, i) => (
              <li
                key={i}
                className="d-flex align-items-center gap-2 mb-3"
                style={{ fontSize: 15 }}
              >
                <i
                  className="bi bi-check-circle-fill"
                  style={{ color: "#25d366" }}
                ></i>
                {item}
              </li>
            ))}
          </ul>
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
              <i className="bi bi-telephone-fill"></i> Call Us
            </a>
          </div>
        </div>
        <div className="col-lg-7" data-aos="fade-left">
          <LeadForm />
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════
   FINAL CTA (Dark)
   ═══════════════════════════════════════════════════ */
const FinalCTA = () => (
  <section className={styles.ctaSection}>
    <div className={styles.ctaParticles}>
      {[...Array(6)].map((_, i) => (
        <span
          key={i}
          className={styles.ctaParticle}
          style={{ animationDelay: `${i * 0.8}s` }}
        ></span>
      ))}
    </div>
    <div className="container position-relative" data-aos="zoom-in">
      <div className={styles.ctaOfferBadge}>
        <i className="bi bi-lightning-charge-fill"></i>
        Limited Time: Free Setup + 1 Month Platform Free
      </div>
      <h2 className={styles.sectionTitleLight}>
        Start with WhatsApp API + Chatbot Today
      </h2>
      <p
        className={styles.sectionLeadLight}
        style={{ maxWidth: 550, margin: "14px auto 36px" }}
      >
        Don&rsquo;t miss out. Get official WhatsApp API + AI Chatbot and start
        converting conversations into revenue.
      </p>
      <div className="d-flex flex-wrap gap-3 justify-content-center">
        <a href="#get-started" className={styles.primaryBtn}>
          Get Started Now <i className="bi bi-arrow-right ms-1"></i>
        </a>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.outlineBtnLight}
        >
          <i className="bi bi-whatsapp"></i> Chat on WhatsApp
        </a>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════ */
const WhatsappApiService = () => {
  const [activeFeatureTab, setActiveFeatureTab] = useState("api");
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  useEffect(() => {
    const nav = document.querySelector("nav.navbar");
    const footer = document.querySelector("footer");
    if (nav) nav.style.display = "none";
    if (footer) footer.style.display = "none";
    return () => {
      if (nav) nav.style.display = "";
      if (footer) footer.style.display = "";
    };
  }, []);

  return (
    <div className={styles.page}>
      <StickyMiniNav />
      <HeroSection />
      <MarqueeTrustBar />
      <ProblemSolution />
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

      {/* Floating WhatsApp Button */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.floatingWa}
        aria-label="Chat on WhatsApp"
      >
        <i className="bi bi-whatsapp"></i>
      </a>

      {/* PopupForm (8s delay) */}
      <PopupForm />
    </div>
  );
};

export default WhatsappApiService;
