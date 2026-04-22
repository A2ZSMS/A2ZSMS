"use client";

import { useState, useEffect, useRef, memo } from "react";
import styles from "./RcsLanding.module.css";
import SharedLeadForm from "../SharedLeadForm/SharedLeadForm";


const WA_NUMBER = "919740274595";
const WA_MSG = encodeURIComponent("Hi, I am interested in RCS Messaging Service");
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`;

const socialProofPeople = [
  { name: "Priya Sharma", city: "Mumbai", time: "2 min ago" },
  { name: "Rahul Nair", city: "Bangalore", time: "5 min ago" },
  { name: "Sneha Reddy", city: "Hyderabad", time: "8 min ago" },
  { name: "Amit Joshi", city: "Delhi", time: "12 min ago" },
  { name: "Kavya Menon", city: "Chennai", time: "15 min ago" },
];

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
const TICKER_MESSAGES_RCS = [
  "⚡ 35% Higher Engagement vs Plain SMS — Switch to RCS Today!",
  "🏆 Trusted by 500+ Businesses Across India — Verified Google RCS Partner",
];

const AnnouncementTicker = memo(() => {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % TICKER_MESSAGES_RCS.length), 3500);
    return () => clearInterval(t);
  }, []);
  return (
    <div className={styles.ticker}>
      <span className={styles.tickerText}>{TICKER_MESSAGES_RCS[idx]}</span>
      <a href="#get-started" className={styles.tickerCta}>Claim Offer →</a>
    </div>
  );
});

/* ═══════════════════════════════════════════════════
   SOCIAL PROOF BUBBLE
   ═══════════════════════════════════════════════════ */
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
    <div className={`${styles.socialBubble} ${visible ? styles.socialBubbleVisible : styles.socialBubbleHidden}`}>
      <span className={styles.socialBubbleDot}></span>
      <span><strong>{p.name}</strong> from {p.city} just got a free RCS demo · {p.time}</span>
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
      <span className={styles.floatingBarText}>🎯 Get free RCS demo — only 4 spots left today</span>

      <a href="#get-started" className={styles.floatingBarCta}>Get Free Demo</a>
    </div>
  );
});

/* ═══════════════════════════════════════════════════
   PRICING TEASER STRIP
   ═══════════════════════════════════════════════════ */
const PricingTeaserStrip = memo(() => (
  <div className={styles.pricingTeaser}>
    <div className={styles.pricingTeaserInner}>
      <div className={styles.pricingTeaserItem}>
        <i className="bi bi-tag-fill"></i>
        <span>RCS Setup from <strong>₹3,999</strong></span>
      </div>
      <div className={styles.pricingTeaserDivider}></div>
      <div className={styles.pricingTeaserItem}>
        <i className="bi bi-gift-fill"></i>
        <span><strong>1 Month</strong> platform free</span>
      </div>
      <div className={styles.pricingTeaserDivider}></div>
      <div className={styles.pricingTeaserItem}>
        <i className="bi bi-shield-fill-check"></i>
        <span>Cancel <strong>anytime</strong></span>
      </div>
      <div className={styles.pricingTeaserDivider}></div>
      <div className={styles.pricingTeaserItem}>
        <i className="bi bi-patch-check-fill"></i>
        <span><strong>Google</strong> RCS Partner</span>
      </div>
      <a href="#get-started" className={styles.pricingTeaserCta}>
        Get Free Demo <i className="bi bi-arrow-right ms-1"></i>
      </a>
    </div>
  </div>
));

/* ═══════════════════════════════════════════════════
   AS SEEN ON STRIP
   ═══════════════════════════════════════════════════ */
const AsSeenOnStrip = memo(() => (
  <div className={styles.asSeenOn}>
    <div className={styles.asSeenOnInner}>
      <span className={styles.asSeenOnLabel}>Rated & Reviewed On</span>
      <div className={styles.asSeenOnLogos}>
        <div className={styles.asSeenOnLogo}>
          <i className="bi bi-google"></i>
          <span>Google</span>
          <span className={styles.asSeenOnRating}>★ 4.9</span>
        </div>
        <div className={styles.asSeenOnDivider}></div>
        <div className={styles.asSeenOnLogo}>
          <i className="bi bi-star-fill"></i>
          <span>Trustpilot</span>
          <span className={styles.asSeenOnRating}>★ 4.8</span>
        </div>
        <div className={styles.asSeenOnDivider}></div>
        <div className={styles.asSeenOnLogo}>
          <i className="bi bi-award-fill"></i>
          <span>Capterra</span>
          <span className={styles.asSeenOnRating}>★ 4.7</span>
        </div>
      </div>
    </div>
  </div>
));

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
      <div className="container d-flex align-items-center justify-content-between">
        <a href="/" className={styles.miniNavLogo}>
          <img src="/image/logo.png" alt="A2ZSMS" />
        </a>
        <div className="d-flex align-items-center gap-3">
          <div className={styles.miniNavSpotsWrap}>
            <span className={styles.miniNavSpotsDot}></span>
            <span className="d-none d-sm-inline">Only 4 spots left</span>
          </div>
          {/* <a href="tel:+918431086185" className={styles.miniNavPhone}>
            <i className="bi bi-telephone-fill"></i>
            <span className="d-none d-md-inline">+91 84310 86185</span>
          </a> */}
          <a href="#get-started" className={styles.miniNavCta}>
            Get Free Demo <i className="bi bi-arrow-right ms-1"></i>
          </a>
        </div>
      </div>
    </nav>
  );
});

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
  <section className={`${styles.hero} aos`}>
    <div className={styles.heroMesh1}></div>
    <div className={styles.heroMesh2}></div>
    <div className={styles.heroMesh3}></div>
    <div className="container position-relative">
      <div className="row align-items-center gy-5">
        <div className="col-lg-6" data-aos="fade-right">
          {/* Urgency top bar */}
          <div className={styles.heroTopBar}>
            <i className="bi bi-lightning-charge-fill"></i>
          </div>

          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot}></span>
            India&apos;s #1 RCS Messaging Platform
          </div>

          <h1 className={styles.heroTitle}>
            Stop Sending Plain SMS That Gets Ignored.{" "}
            <span className={styles.heroGradient}>
              Switch to RCS — Rich, Verified &amp; Unopenable
            </span>
          </h1>

          <p className={styles.heroText}>
            Your customers ignore boring plain-text SMS. RCS delivers branded
            messages with images, carousels, quick-reply buttons and verified
            sender ID — straight to their default messages app. No app download
            needed.
          </p>

          <div className={styles.heroChecks}>
            {[
              "35% higher engagement than plain SMS",
              "Verified business sender — zero spoofing",
              "Rich cards, carousels & interactive buttons",
              "Works on 2B+ devices — no app install needed",
            ].map((item) => (
              <div key={item} className={styles.heroCheckItem}>
                <i className="bi bi-check-circle-fill"></i>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="d-flex flex-wrap gap-3 mt-4">
            <a href="#get-started" className={styles.primaryBtn}>
              Claim Free Demo &amp; Pricing{" "}
              <i className="bi bi-arrow-right ms-1"></i>
            </a>
            {/* <a href="tel:+918431086185" className={styles.heroCallBtn}>
              <i className="bi bi-telephone-fill"></i> Call Now
            </a> */}
          </div>

          <p className={styles.heroGuarantee}>
            <i className="bi bi-shield-fill-check"></i> No credit card required
            · Free consultation · Reply within 2 hours
          </p>

          <SocialProofBubble />

          <div className={styles.heroStats}>
            <HeroStatItem end={500} suffix="+" label="Businesses" />
            <div className={styles.heroStatDivider}></div>
            <HeroStatItem end={35} suffix="%" label="More Engagement" />
            <div className={styles.heroStatDivider}></div>
            <HeroStatItem end={98} suffix="%" label="Delivery Rate" />
          </div>
        </div>

        <div className="col-lg-6" data-aos="fade-left">
          <div className={styles.heroImageWrap}>
            <div className={styles.heroImageGlow}></div>
            <img
              src="/image/product/google-ads-rcs.png"
              alt="RCS Messaging Service Dashboard"
              className={styles.heroImage}
              width={560}
              height={480}
              loading="eager"
              decoding="async"
              onError={(e) => {
                e.target.src = "/image/product/whatsapp.png";
              }}
            />
            <a
              href="#get-started"
              className={styles.heroPlayBtn}
              aria-label="Get started"
            >
              <i className="bi bi-play-fill"></i>
            </a>
            <div className={styles.heroFloat1}>
              <i className="bi bi-patch-check-fill"></i>
              <span>Verified Sender</span>
            </div>
            <div className={styles.heroFloat2}>
              <i className="bi bi-graph-up-arrow"></i>
              <span>35% Higher CTR</span>
            </div>
            <div className={styles.heroFloat3}>
              <i className="bi bi-images"></i>
              <span>Rich Media</span>
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
const MarqueeTrustBar = memo(() => (
  <div className={`${styles.marqueeSection} aos`} data-aos="fade-up">
    <div className="container">
      <span className={styles.marqueeLabel}>
        Trusted by <strong>500+</strong> Businesses Across India
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
    icon: "bi-envelope-slash",
    title: "Plain SMS Gets Ignored",
    text: "Generic plain-text SMS has <20% click-through. Customers don't trust unknown numbers — they delete without reading.",
    stat: "<20%",
    statLabel: "Click Rate",
  },
  {
    icon: "bi-shield-exclamation",
    title: "No Sender Verification",
    text: "Unverified SMS numbers lead to spoofing, spam, and customers blocking your messages permanently.",
    stat: "67%",
    statLabel: "Marked as Spam",
  },
  {
    icon: "bi-slash-circle-fill",
    title: "No Rich Media in SMS",
    text: "Plain SMS can't show product images, videos, or interactive buttons. You lose every visual upsell opportunity.",
    stat: "3×",
    statLabel: "Missed Engagement",
  },
];

const solutions = [
  {
    icon: "bi-stars",
    title: "Rich Visual Messages",
    text: "Send carousels, product images, video previews, and PDF files directly in the message. Engage like never before.",
    stat: "35%",
    statLabel: "Higher Engagement",
  },
  {
    icon: "bi-patch-check-fill",
    title: "Verified Business Sender",
    text: "Your brand logo, name, and verified badge appear on every message. Zero spoofing — 100% customer trust.",
    stat: "100%",
    statLabel: "Verified",
  },
  {
    icon: "bi-hand-index-thumb-fill",
    title: "Interactive Buttons & CTAs",
    text: "Add quick-reply buttons, URL buttons, call buttons, and location sharing — drive action right inside the message.",
    stat: "5×",
    statLabel: "More Clicks",
  },
];

const ProblemSolution = memo(() => (
  <section className={`${styles.sectionAlt} aos`}>
    <div className="container">
      <div className="text-center mb-5" data-aos="fade-up">
        <span className={styles.sectionBadge}>Why Switch to RCS?</span>
        <h2 className={styles.sectionTitle}>The Problem &amp; Our Solution</h2>
        <p
          className={`${styles.sectionLead} mx-auto`}
          style={{ maxWidth: 600 }}
        >
          Plain SMS is dying. RCS is the next generation of business messaging
          — richer, verified, and 35% more engaging.
        </p>
      </div>

      <div className="row g-4 mb-2">
        <div className="col-12">
          <h6 className="text-uppercase fw-bold text-danger small mb-3">
            <i className="bi bi-x-circle-fill me-2"></i>Problems with Plain SMS
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
          <h6 className="text-uppercase fw-bold small mb-3" style={{ color: "var(--rcs-accent)" }}>
            <i className="bi bi-check-circle-fill me-2"></i>RCS Solution
          </h6>
        </div>
        {solutions.map((s, i) => (
          <div
            className="col-md-4"
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            <div className={`${styles.compCard} ${styles.compCardPurple}`}>
              <div className={`${styles.compIcon} ${styles.compIconPurple}`}>
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
   FEATURES — Tab Switcher (RCS Messaging + AI Chatbot)
   ═══════════════════════════════════════════════════ */
const rcsFeatures = [
  {
    icon: "bi-images",
    color: "#7c3aed",
    title: "Rich Media Cards",
    text: "Send product images, carousels, video previews and PDF brochures directly in the message thread.",
  },
  {
    icon: "bi-patch-check-fill",
    color: "#0072ff",
    title: "Verified Sender ID",
    text: "Brand logo, name, and blue verified badge on every message — customers instantly recognise and trust you.",
  },
  {
    icon: "bi-hand-index-thumb-fill",
    color: "#059669",
    title: "Interactive Buttons",
    text: "Quick reply, URL, call, and location-sharing buttons — turn every message into a two-way conversation.",
  },
  {
    icon: "bi-graph-up-arrow",
    color: "#f59e0b",
    title: "Read Receipts & Analytics",
    text: "Know exactly who opened, clicked, and replied. Optimise every campaign with real-time dashboards.",
  },
  {
    icon: "bi-phone-fill",
    color: "#ef4444",
    title: "No App Download",
    text: "RCS works inside the default Messages app on Android. 2 billion+ devices supported — zero friction for users.",
  },
  {
    icon: "bi-plug-fill",
    color: "#0ea5e9",
    title: "API Integration",
    text: "Connect with your CRM, e-commerce store, or any business tool via our developer-friendly REST API.",
  },
];

const chatbotFeatures = [
  {
    icon: "bi-stars",
    color: "#7c3aed",
    title: "AI-Powered RCS Chatbot",
    text: "Natural language chatbot inside RCS threads — answer queries, collect leads and book appointments 24/7.",
  },
  {
    icon: "bi-megaphone",
    color: "#0072ff",
    title: "Drip Campaign Automation",
    text: "Segment audiences and send timed RCS message sequences with rich visuals and personalised content.",
  },
  {
    icon: "bi-bag-check",
    color: "#059669",
    title: "Product Catalog in Chat",
    text: "Showcase products with image carousels, price tags, and buy buttons — turn chats into a storefront.",
  },
  {
    icon: "bi-headset",
    color: "#f59e0b",
    title: "24/7 Automated Support",
    text: "Resolve FAQs, track orders, and route complex queries to human agents — all within RCS.",
  },
  {
    icon: "bi-calendar-check",
    color: "#ef4444",
    title: "Appointment Booking",
    text: "Capture bookings, send rich reminders with map buttons, and reduce no-shows by up to 60%.",
  },
  {
    icon: "bi-diagram-3-fill",
    color: "#0ea5e9",
    title: "No-Code Flow Builder",
    text: "Build RCS conversation flows with a drag-and-drop visual editor. No coding skills required.",
  },
];

const FeaturesSection = ({ activeTab, setActiveTab }) => (
  <section className={`${styles.section} aos`}>
    <div className="container">
      <div className="text-center mb-5" data-aos="fade-up">
        <span className={styles.sectionBadge}>Features</span>
        <h2 className={styles.sectionTitle}>
          Everything You Need to Win with RCS
        </h2>
        <p
          className={`${styles.sectionLead} mx-auto`}
          style={{ maxWidth: 600 }}
        >
          From rich media messaging to AI chatbot automation — one platform for
          complete RCS success.
        </p>
        <div className={styles.tabSwitcher}>
          <button
            className={`${styles.tabBtn} ${activeTab === "rcs" ? styles.tabBtnActive : ""}`}
            onClick={() => setActiveTab("rcs")}
          >
            <i className="bi bi-chat-square-dots-fill me-2"></i>RCS Messaging
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
                activeTab === "rcs"
                  ? "/image/product/RCS1.png"
                  : "/image/product/RCS1.png"
              }
              alt={
                activeTab === "rcs"
                  ? "RCS Messaging Features"
                  : "AI Chatbot Features"
              }
              className={styles.featureSectionImage}
              width={480}
              height={400}
              loading="lazy"
              decoding="async"
              onError={(e) => {
                e.target.src = "/image/product/whatsapp.png";
              }}
            />
          </div>
        </div>
        <div className="col-lg-7" data-aos="fade-left">
          <div className="row g-3">
            {(activeTab === "rcs" ? rcsFeatures : chatbotFeatures).map(
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
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════
   HOW IT WORKS
   ═══════════════════════════════════════════════════ */
const steps = [
  {
    icon: "bi-pencil-square",
    title: "Sign Up",
    desc: "Fill the form or call us — our RCS expert contacts you within 2 hours.",
  },
  {
    icon: "bi-patch-check-fill",
    title: "Get Verified",
    desc: "We register your brand, verify your sender ID and design your rich message templates.",
  },
  {
    icon: "bi-plug-fill",
    title: "Integrate",
    desc: "Connect your CRM, e-commerce or any business tool with our REST API.",
  },
  {
    icon: "bi-rocket-takeoff-fill",
    title: "Go Live!",
    desc: "Launch RCS campaigns and watch engagement soar 35% above plain SMS.",
  },
];

const HowItWorks = memo(() => (
  <section className={`${styles.sectionDark} aos`}>
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
));

/* ═══════════════════════════════════════════════════
   USE CASES
   ═══════════════════════════════════════════════════ */
const useCases = [
  {
    icon: "bi-cart-check-fill",
    color: "#7c3aed",
    bg: "#f3e8ff",
    title: "E-Commerce & Retail",
    text: "Product carousels, abandoned cart recovery, order tracking, and promotional offers with images.",
    metric: "85%",
    metricLabel: "Engagement Rate",
  },
  {
    icon: "bi-bank2",
    color: "#0072ff",
    bg: "#e0f0ff",
    title: "Banking & Finance",
    text: "Transaction alerts, loan offers, KYC reminders, and verified OTPs — all in rich branded messages.",
    metric: "99.8%",
    metricLabel: "Secure Delivery",
  },
  {
    icon: "bi-hospital-fill",
    color: "#ef4444",
    bg: "#fee2e2",
    title: "Healthcare",
    text: "Appointment reminders with map buttons, health tips, lab report links, and patient follow-ups.",
    metric: "70%",
    metricLabel: "Fewer No-Shows",
  },
  {
    icon: "bi-mortarboard-fill",
    color: "#059669",
    bg: "#d1fae5",
    title: "Education",
    text: "Admission alerts with rich brochures, fee reminders, class schedules, and event invites.",
    metric: "60%",
    metricLabel: "Higher Response",
  },
  {
    icon: "bi-airplane-fill",
    color: "#f59e0b",
    bg: "#fef3c7",
    title: "Travel & Hospitality",
    text: "Booking confirmations with hotel images, check-in reminders, and upsell carousels.",
    metric: "92%",
    metricLabel: "Satisfaction Score",
  },
  {
    icon: "bi-bag-fill",
    color: "#0ea5e9",
    bg: "#e0f7fe",
    title: "Food & Delivery",
    text: "Order status updates, loyalty offers with food images, and repeat-order quick-reply buttons.",
    metric: "60%",
    metricLabel: "Repeat Orders",
  },
];

const UseCasesSection = memo(() => (
  <section className={`${styles.section} aos`}>
    <div className="container">
      <div className="text-center mb-5" data-aos="fade-up">
        <span className={styles.sectionBadge}>Use Cases</span>
        <h2 className={styles.sectionTitle}>Built for Every Industry</h2>
        <p
          className={`${styles.sectionLead} mx-auto`}
          style={{ maxWidth: 600 }}
        >
          RCS messaging works across industries to deliver richer, verified
          messages that convert better than plain SMS.
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
));

/* ═══════════════════════════════════════════════════
   RCS vs SMS COMPARISON
   ═══════════════════════════════════════════════════ */
const comparisons = [
  { feature: "Rich Media (Images, Video)", sms: false, rcs: true },
  { feature: "Verified Sender Badge", sms: false, rcs: true },
  { feature: "Interactive Buttons & CTAs", sms: false, rcs: true },
  { feature: "Read Receipts", sms: false, rcs: true },
  { feature: "Brand Logo in Message", sms: false, rcs: true },
  { feature: "Two-Way Conversation", sms: false, rcs: true },
  { feature: "App Download Required", sms: false, rcs: false },
  { feature: "Average Open Rate", sms: "20%", rcs: "98%" },
  { feature: "Click-Through Rate", sms: "2%", rcs: "35%" },
];

const ComparisonSection = memo(() => (
  <section className={`${styles.sectionAlt} aos`}>
    <div className="container">
      <div className="text-center mb-5" data-aos="fade-up">
        <span className={styles.sectionBadge}>RCS vs SMS</span>
        <h2 className={styles.sectionTitle}>
          Why RCS Beats Plain SMS Every Time
        </h2>
        <p className={`${styles.sectionLead} mx-auto`} style={{ maxWidth: 580 }}>
          See exactly what you&apos;ve been missing by staying on plain SMS.
        </p>
      </div>
      <div className="row justify-content-center" data-aos="fade-up">
        <div className="col-lg-9">
          <div className={styles.compareTable}>
            <div className={styles.compareHeader}>
              <div className={styles.compareFeatureCol}>Feature</div>
              <div className={`${styles.compareCol} ${styles.compareSmsCol}`}>
                <i className="bi bi-chat-left-text me-2"></i>Plain SMS
              </div>
              <div className={`${styles.compareCol} ${styles.compareRcsCol}`}>
                <i className="bi bi-chat-square-dots-fill me-2"></i>RCS
              </div>
            </div>
            {comparisons.map((row, i) => (
              <div key={i} className={`${styles.compareRow} ${i % 2 === 0 ? styles.compareRowAlt : ""}`}>
                <div className={styles.compareFeatureCol}>{row.feature}</div>
                <div className={styles.compareCol}>
                  {typeof row.sms === "boolean" ? (
                    <i className={`bi ${row.sms ? "bi-check-circle-fill text-success" : "bi-x-circle-fill text-danger"}`}></i>
                  ) : (
                    <span className={styles.compareStatBad}>{row.sms}</span>
                  )}
                </div>
                <div className={styles.compareCol}>
                  {typeof row.rcs === "boolean" ? (
                    <i className={`bi ${row.rcs ? "bi-check-circle-fill" : "bi-x-circle-fill text-danger"}`} style={{ color: row.rcs ? "var(--rcs-accent)" : undefined }}></i>
                  ) : (
                    <span className={styles.compareStatGood}>{row.rcs}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
));

/* ═══════════════════════════════════════════════════
   TESTIMONIALS
   ═══════════════════════════════════════════════════ */
const testimonials = [
  {
    text: "We switched from plain SMS to RCS with A2ZSMS and our click-through rate jumped from 3% to 38% in the first month. The verified sender badge alone built instant trust with our customers.",
    name: "Rohit Verma",
    role: "Marketing Head, QuickMart",
    initials: "RV",
  },
  {
    text: "RCS appointment reminders with maps and confirm/cancel buttons reduced our no-shows by 65%. Patients love the rich experience and our clinic revenue has gone up 28%.",
    name: "Dr. Sneha Patel",
    role: "Director, CarePlus Clinics",
    initials: "SP",
  },
  {
    text: "Our loan offer campaigns on RCS got 4x more applications than plain SMS. The image carousels showcasing EMI plans really converted. A2ZSMS support team is excellent.",
    name: "Kiran Mehta",
    role: "VP Marketing, QuickLoan Finance",
    initials: "KM",
  },
];

const TestimonialsSection = memo(() => (
  <section className={`${styles.section} aos`}>
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
));

/* ═══════════════════════════════════════════════════
   FAQ
   ═══════════════════════════════════════════════════ */
const faqItems = [
  {
    q: "What is RCS Messaging?",
    a: "RCS (Rich Communication Services) is the next generation of SMS. It delivers rich, branded messages with images, carousels, interactive buttons, and verified sender identity — all inside the user's default Messages app. No extra app download needed.",
  },
  {
    q: "How is RCS different from plain SMS?",
    a: "Plain SMS is text-only, unverified, and has ~2% click-through. RCS supports rich media, verified sender badges, read receipts, interactive buttons, and achieves 35%+ CTR. It's like WhatsApp — but built into the default message app.",
  },
  {
    q: "Which devices support RCS?",
    a: "RCS works on 2 billion+ Android devices worldwide with Google Messages as the default SMS app. iPhones also support RCS natively from iOS 18. If a device doesn't support RCS, the message falls back to standard SMS automatically.",
  },
  {
    q: "How long does RCS setup take?",
    a: "We typically complete brand verification and RCS setup within 3–5 business days. This includes brand profile registration, sender verification, and template design. Our team handles everything end-to-end.",
  },
  {
    q: "Do customers need to install an app to receive RCS?",
    a: "No. That's one of RCS's biggest advantages. Messages arrive in the device's default Messages app — zero friction, zero app download. This gives you a massive reach advantage over app-based channels.",
  },
  {
    q: "Can I send promotional messages via RCS?",
    a: "Yes. RCS supports marketing campaigns, product carousels, promotional offers, and re-engagement messages — all with rich visuals and interactive CTAs that drive 5× more clicks than plain SMS.",
  },
  {
    q: "What kind of support do you provide?",
    a: "We provide dedicated account management, 24/7 technical support via WhatsApp, email and phone, plus help with campaign design, template creation, and API integration.",
  },
  {
    q: "What are the pricing details?",
    a: "Pricing depends on message volume and features required. We offer Starter, Business, and Enterprise plans. Contact us for a customised quote — our team will match a plan to your exact business needs.",
  },
];

const FaqSection = ({ openIndex, setOpenIndex }) => (
  <section className={`${styles.sectionAlt} aos`}>
    <div className="container">
      <div className="text-center mb-5" data-aos="fade-up">
        <span className={styles.sectionBadge}>FAQ</span>
        <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
        <p
          className={`${styles.sectionLead} mx-auto`}
          style={{ maxWidth: 600 }}
        >
          Everything you need to know about RCS Messaging.
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
   RCS SERVICE OPTIONS (passed to SharedLeadForm)
   ═══════════════════════════════════════════════════ */
const RCS_SERVICES = [
  { value: "RCS Messaging",       label: "RCS Bulk Messaging" },
  { value: "RCS Chatbot",         label: "RCS AI Chatbot" },
  { value: "RCS + Chatbot Combo", label: "RCS + Chatbot Combo" },
  { value: "RCS API Integration", label: "RCS API Integration" },
  { value: "Other",               label: "Other" },
];
const RCS_TRUST = [
  { icon: "bi-shield-lock-fill", label: "256-bit SSL" },
  { icon: "bi-patch-check-fill", label: "Google RCS Partner" },
  { icon: "bi-clock-fill",       label: "Reply in 2 hrs" },
];

// Thin wrapper — FormCtaSection uses <LeadForm /> unchanged
const LeadForm = () => (
  <SharedLeadForm
    styles={styles}
    thankYouUrl="/rcs-service-landing/thank-you/"
    serviceOptions={RCS_SERVICES}
    trustItems={RCS_TRUST}
    pageId="rcs-service-landing"
    formId="get-started"
    urgencyText="Only 4 free setup spots left this month"
    submitLabel="Get My Free Demo & Pricing"
  />
);

/* ═══════════════════════════════════════════════════
   FORM + CTA SECTION
   ═══════════════════════════════════════════════════ */
const FormCtaSection = () => (
  <section className={`${styles.formSection} aos`} id="get-started-section">
    <div className={styles.urgencyBanner}>
      <i className="bi bi-lightning-charge-fill"></i>
      <span>
        <strong>Limited Offer:</strong> Free RCS Setup + 1 Month Platform Free
        — Only for new sign-ups this month
      </span>
      <i className="bi bi-lightning-charge-fill"></i>
    </div>

    <div className="container">
      <div className="row g-5 align-items-start">
        <div className="col-lg-5" data-aos="fade-right">
          <span className={styles.sectionBadge}>Get Started Free</span>
          <h2 className={styles.sectionTitle}>
            Your Competitors Are Sending Rich RCS.{" "}
            <span style={{ color: "var(--rcs-accent)" }}>Are You Still on Plain SMS?</span>
          </h2>
          <p className={styles.sectionLead}>
            Every day you stick to plain SMS, you lose clicks, trust, and sales.{" "}
            <strong>500+ businesses</strong> across India already use A2ZSMS RCS
            to deliver verified, rich, engaging messages that convert 35% better.
          </p>

          {/* Live notification strip */}
          <div className={styles.liveNotifStrip}>
            <span className={styles.liveNotifDot}></span>
            <span className={styles.liveNotifText}>
              <strong>Arun from Hyderabad</strong> just signed up 4 minutes ago
            </span>
          </div>

          {/* Spots warning */}
          <div className={styles.spotsWarning}>
            <i className="bi bi-exclamation-triangle-fill"></i>
            <span>
              <strong>Only 4 free setup spots</strong> remaining this month.
              Free Setup + 1 Month Platform Free — expires when spots fill.
            </span>
          </div>

          {/* Social proof */}
          <div className={styles.socialProofStrip}>
            <div className={styles.socialProofAvatars}>
              {["AK", "SM", "RV", "NP"].map((init, i) => (
                <div key={i} className={styles.socialProofAvatar}>
                  {init}
                </div>
              ))}
            </div>
            <span className={styles.socialProofText}>
              <strong>15 businesses</strong> signed up this week
            </span>
          </div>

          <ul className="list-unstyled mt-4">
            {[
              {
                icon: "bi-gift-fill",
                text: "Free setup + 1 month platform free",
                highlight: true,
              },
              { icon: "bi-clock-fill", text: "Go live in 3–5 business days" },
              {
                icon: "bi-person-check-fill",
                text: "Dedicated account manager assigned",
              },
              {
                icon: "bi-shield-fill-check",
                text: "No hidden charges — transparent pricing",
              },
              {
                icon: "bi-x-circle-fill",
                text: "Cancel anytime — zero lock-in",
              },
              {
                icon: "bi-patch-check-fill",
                text: "Verified Google RCS Business Messaging partner",
              },
            ].map((item, i) => (
              <li
                key={i}
                className="d-flex align-items-center gap-2 mb-3"
                style={{
                  fontSize: 15,
                  fontWeight: item.highlight ? 700 : 500,
                  color: item.highlight ? "var(--rcs-accent-dark)" : "inherit",
                }}
              >
                <i
                  className={`bi ${item.icon}`}
                  style={{ color: "var(--rcs-accent)", fontSize: 17 }}
                ></i>
                {item.text}
                {item.highlight && (
                  <span
                    style={{
                      fontSize: 11,
                      background: "#ede9fe",
                      color: "#6d28d9",
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

          <div className={styles.formTrustLogos}>
            <div className={styles.formTrustLogo}>
              <i className="bi bi-shield-lock-fill"></i>
              <span>SSL Secured</span>
            </div>
            <div className={styles.formTrustLogo}>
              <i className="bi bi-patch-check-fill"></i>
              <span>Google Partner</span>
            </div>
            <div className={styles.formTrustLogo}>
              <i className="bi bi-star-fill"></i>
              <span>4.9/5 Rated</span>
            </div>
          </div>

          {/* <div className="d-flex flex-wrap gap-3 mt-4">
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
          </div> */}
        </div>

        <div className="col-lg-7" data-aos="fade-left">
          <LeadForm />
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════
   FINAL CTA
   ═══════════════════════════════════════════════════ */
const RCS_CTA_PARTICLES = Array.from({ length: 6 }, (_, i) => `${i * 0.8}s`);

const FinalCTA = memo(() => (
  <section className={`${styles.ctaSection} aos`}>
    <div className={styles.ctaParticles}>
      {RCS_CTA_PARTICLES.map((delay, i) => (
        <span
          key={i}
          className={styles.ctaParticle}
          style={{ animationDelay: delay }}
        ></span>
      ))}
    </div>
    <div className="container position-relative" data-aos="zoom-in">
      <div className={styles.ctaOfferBadge}>
        <i className="bi bi-lightning-charge-fill"></i>
        Limited Offer: Free RCS Setup + 1 Month Platform Free — 4 Spots Left
      </div>
      <h2 className={styles.sectionTitleLight}>
        Every Day on Plain SMS, Your Competitors Win More Customers
      </h2>
      <p
        className={styles.sectionLeadLight}
        style={{ maxWidth: 580, margin: "14px auto 36px" }}
      >
        They send rich, verified RCS messages with product images and one-tap
        CTAs. You send plain texts. Don&rsquo;t let another campaign go to
        waste — upgrade to RCS today.
      </p>
      <div className="d-flex flex-wrap gap-3 justify-content-center">
        <a href="#get-started" className={styles.primaryBtn}>
          Claim Free RCS Demo Now <i className="bi bi-arrow-right ms-1"></i>
        </a>
        {/* <a href="tel:+918431086185" className={styles.ctaCallBtn}>
          <i className="bi bi-telephone-fill"></i> Call Us Now
        </a> */}
      </div>
    </div>
  </section>
));

/* ═══════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════ */
const RcsLanding = () => {
  const [activeFeatureTab, setActiveFeatureTab] = useState("rcs");
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
    <>
      <AnnouncementTicker />
      <div className={styles.page}>
        <StickyMiniNav />
        <HeroSection />
        <PricingTeaserStrip />
        {/* <MarqueeTrustBar /> */}
        {/* <AsSeenOnStrip /> */}
        <ProblemSolution />
        <FeaturesSection
          activeTab={activeFeatureTab}
          setActiveTab={setActiveFeatureTab}
        />
        <HowItWorks />
        <UseCasesSection />
        <ComparisonSection />
        <TestimonialsSection />
        <FaqSection openIndex={openFaqIndex} setOpenIndex={setOpenFaqIndex} />
        <FormCtaSection />
        <FinalCTA />
        <FloatingStickyBar />
      </div>
    </>
  );
};

export default RcsLanding;
