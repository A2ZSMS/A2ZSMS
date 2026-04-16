"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./WhatsappApiService.module.css";
import SharedLeadForm from "../SharedLeadForm/SharedLeadForm";

const WA_NUMBER = "919740274595";
const WA_MSG = encodeURIComponent("Hi");
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
const AnnouncementTicker = () => {
  const messages = [
    "🔥 Limited Offer: Free WhatsApp API Setup + 1 Month Platform Free — Only 3 spots left!",
    "⚡ 98% open rate on WhatsApp — 5× better than SMS or email",
    "🏆 Trusted by 500+ businesses across India — Official Meta Partner!",
  ];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % messages.length), 3500);
    return () => clearInterval(t);
  }, []);
  return (
    <div className={styles.ticker}>
      <span className={styles.tickerText}>{messages[idx]}</span>
      <a href="#get-started" className={styles.tickerCta}>
        Claim Offer →
      </a>
    </div>
  );
};

/* ═══════════════════════════════════════════════════
   SOCIAL PROOF BUBBLE
   ═══════════════════════════════════════════════════ */
const socialProofPeople = [
  { name: "Priya", city: "Mumbai", time: "3 min ago" },
  { name: "Rahul", city: "Bangalore", time: "7 min ago" },
  { name: "Sneha", city: "Chennai", time: "11 min ago" },
  { name: "Amit", city: "Delhi", time: "15 min ago" },
];
const SocialProofBubble = () => {
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
};

/* ═══════════════════════════════════════════════════
   FLOATING STICKY BAR
   ═══════════════════════════════════════════════════ */
const FloatingStickyBar = () => {
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
        🎯 Get free WhatsApp API demo — only 3 spots left today
      </span>
      <a href="#get-started" className={styles.floatingBarCta}>
        Get Free Demo
      </a>
    </div>
  );
};

/* ═══════════════════════════════════════════════════
   PRICING TEASER STRIP
   ═══════════════════════════════════════════════════ */
const PricingTeaserStrip = () => (
  <div className={styles.pricingTeaser}>
    <div className="container">
      <div className={styles.pricingTeaserInner}>
        <div className={styles.pricingTeaserItem}>
          <i className="bi bi-tag-fill"></i>
          <span>
            Setup from <strong>₹2,999</strong> only
          </span>
        </div>
        <div className={styles.pricingTeaserDivider}></div>
        <div className={styles.pricingTeaserItem}>
          <i className="bi bi-check-circle-fill"></i>
          <span>
            <strong>1 month platform</strong> free
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
          <i className="bi bi-patch-check-fill"></i>
          <span>
            <strong>Official Meta</strong> partner
          </span>
        </div>
        <a href="#get-started" className={styles.pricingTeaserCta}>
          See Pricing
        </a>
      </div>
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════
   AS SEEN ON STRIP
   ═══════════════════════════════════════════════════ */
const AsSeenOnStrip = () => (
  <div className={styles.asSeenOn}>
    <div className="container">
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
              className="bi bi-shield-check-fill"
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
);

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
          <div className={styles.miniNavSpotsWrap}>
            <span className={styles.miniNavSpotsDot}></span>
            <span className="d-none d-sm-inline">Only 3 spots left</span>
          </div>
          <a href="#get-started" className={styles.miniNavCta}>
            Get Free Demo <i className="bi bi-arrow-right ms-1"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

/* ═══════════════════════════════════════════════════
   HERO IMAGE
   ═══════════════════════════════════════════════════ */
const HeroVideoPlayer = () => (
  <div className={styles.heroImageWrap}>
    <div className={styles.heroImageGlow}></div>
    <img
      src="/image/product/whatsapp.png"
      alt="WhatsApp Business API Platform by A2ZSMS"
      className={styles.heroImage}
      width={560}
      height={480}
      loading="eager"
      decoding="async"
    />
    <a
      href="#get-started"
      className={styles.heroPlayBtn}
      aria-label="Get started with WhatsApp API"
    >
      <i className="bi bi-arrow-right-circle-fill"></i>
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
);

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
          {/* Logo */}
          <div className={styles.heroLogoWrap}>
            <img
              src="/image/logo.png"
              alt="A2ZSMS"
              className={styles.heroLogo}
            />
          </div>

          {/* Urgency top bar */}
          <div className={styles.heroTopBar}>
            <i className="bi bi-lightning-charge-fill"></i>
            <span>
              <strong>Limited Offer:</strong> Free Setup + 1 Month Platform
              Free — only <strong>3 spots left</strong>
            </span>
          </div>

          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot}></span>
            Official WhatsApp Business API Partner
          </div>

          <h1 className={styles.heroTitle}>
            Official WhatsApp Business API Provider —{" "}
            <span className={styles.heroGradient}>
              Automate Sales &amp; Support Instantly
            </span>
          </h1>

          <p className={styles.heroText}>Stop losing leads to slow replies.</p>

          <p className={styles.heroSubText}>
            Get Official WhatsApp Business API with AI Chatbot, Multi-Agent
            Support, and CRM Integration — all in one platform.
          </p>

          <div className={styles.heroChecks}>
            {[
              "98% open rates with WhatsApp Business API",
              "Automate replies, OTPs & follow-ups 24/7",
              "Get Official Green Tick Verification",
              "Send compliant bulk broadcasts",
              "Seamless CRM integration",
            ].map((item) => (
              <div key={item} className={styles.heroCheckItem}>
                <i className="bi bi-check-circle-fill"></i>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <p className={styles.heroGuarantee}>
            <i className="bi bi-shield-check-fill"></i> No credit card required
            · Free consultation · Reply within 2 hours
          </p>

          <SocialProofBubble />

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
          <LeadForm />
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════
   MARQUEE TRUST BAR
   ═══════════════════════════════════════════════════ */
const MarqueeTrustBar = () => (
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
  <section className={`${styles.sectionAlt} aos`}>
    <div className="container">
      <div className="text-center mb-5" data-aos="fade-up">
        <span className={styles.sectionBadge}>Why Switch?</span>
        <h2 className={styles.sectionTitle}>The Problem &amp; Our Solution</h2>
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
   COMPARISON TABLE — Standard WA vs A2ZSMS API
   ═══════════════════════════════════════════════════ */
const comparisonRows = [
  ["Bulk Messaging", "❌ Not Allowed", "✅ Unlimited Scale"],
  ["Automation & Chatbot", "❌ Manual Only", "✅ Full AI Automation"],
  ["Green Tick Verified", "❌ Not Available", "✅ Meta Verified"],
  ["CRM / ERP Integration", "❌ No Integration", "✅ 80+ Tools"],
  ["Multi-Agent Support", "❌ Single Device", "✅ Unlimited Agents"],
  ["Analytics & Reports", "❌ Basic Stats", "✅ Real-Time Dashboard"],
  ["Meta-Approved Templates", "❌ No Templates", "✅ Full Library"],
  ["Ban Risk", "🔴 High Risk", "✅ Zero Risk"],
  ["Official Meta Support", "❌ No Priority", "✅ Dedicated Support"],
];

const ComparisonTableSection = () => (
  <section className={`${styles.section} aos`}>
    <div className="container">
      <div className="text-center mb-5" data-aos="fade-up">
        <span className={styles.sectionBadge}>Why Upgrade?</span>
        <h2 className={styles.sectionTitle}>
          Standard WhatsApp vs. A2ZSMS API
        </h2>
        <p
          className={`${styles.sectionLead} mx-auto`}
          style={{ maxWidth: 620 }}
        >
          The WhatsApp Business App is built for small shops. The API is built
          for scaling. Here&apos;s the difference.
        </p>
      </div>
      <div className={styles.compTableWrap} data-aos="fade-up">
        <table className={styles.compTable}>
          <thead>
            <tr>
              <th className={styles.compTableThFeature}>Feature</th>
              <th className={styles.compTableThStandard}>
                <i className="bi bi-whatsapp me-2"></i>Standard WhatsApp
              </th>
              <th className={styles.compTableThApi}>
                <i className="bi bi-patch-check-fill me-2"></i>A2ZSMS API
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map(([feature, standard, api], i) => (
              <tr
                key={i}
                className={i % 2 === 0 ? styles.compTableRowEven : ""}
              >
                <td className={styles.compTableFeatureCell}>{feature}</td>
                <td className={styles.compTableStandardCell}>{standard}</td>
                <td className={styles.compTableApiCell}>{api}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-center mt-5" data-aos="fade-up">
        <a href="#get-started" className={styles.primaryBtn}>
          Switch to A2ZSMS API <i className="bi bi-arrow-right ms-1"></i>
        </a>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════
   VIDEO DEMO SECTION
   ═══════════════════════════════════════════════════ */
const VideoSection = () => (
  <section className={`${styles.sectionDark} aos`}>
    <div className="container">
      <div className="text-center mb-5" data-aos="fade-up">
        <span className={styles.sectionBadgeLight}>See It In Action</span>
        <h2 className={styles.sectionTitleLight}>
          Watch How WhatsApp API Works in 60 Seconds
        </h2>
        <p className={styles.sectionLeadLight}>
          See exactly how A2ZSMS automates your business communication — from
          setup to your first message.
        </p>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-8" data-aos="fade-up">
          <HeroVideoPlayer />
        </div>
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
  <section className={`${styles.section} aos`}>
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
              width={480}
              height={400}
              loading="lazy"
              decoding="async"
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
              ),
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
  <section className={`${styles.section} aos`}>
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
  <section className={`${styles.sectionAlt} aos`}>
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
  <section className={`${styles.sectionAlt} aos`}>
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
const WA_SERVICES = [
  { value: "WhatsApp API",        label: "WhatsApp Business API" },
  { value: "WhatsApp Chatbot",    label: "WhatsApp Chatbot" },
  { value: "API + Chatbot Combo", label: "API + Chatbot Combo" },
  { value: "Bulk Messaging",      label: "Bulk Messaging Only" },
  { value: "Other",               label: "Other" },
];
const WA_TRUST = [
  { icon: "bi-shield-lock-fill", label: "256-bit SSL" },
  { icon: "bi-patch-check-fill", label: "Meta Partner" },
  { icon: "bi-clock-fill",       label: "Reply in 2 hrs" },
];

const LeadForm = ({ formId = "get-started" }) => (
  <SharedLeadForm
    styles={styles}
    thankYouUrl="/whatsapp-api-service/thank-you/"
    serviceOptions={WA_SERVICES}
    trustItems={WA_TRUST}
    pageId="whatsapp-api-landing"
    formId={formId}
    urgencyText="Only 3 free setup spots left this month"
    submitLabel="Get My Free Demo & Pricing"
  />
);

/* ═══════════════════════════════════════════════════
   FORM + CTA SECTION
   ═══════════════════════════════════════════════════ */
const FormCtaSection = () => (
  <section className={`${styles.formSection} aos`} id="get-started-section">
    {/* Section-level urgency banner */}
    <div className={styles.urgencyBanner}>
      <i className="bi bi-lightning-charge-fill"></i>
      <span>
        <strong>Limited Offer:</strong> Free Setup + 1 Month Platform Free —
        Only for new sign-ups this month
      </span>
      <i className="bi bi-lightning-charge-fill"></i>
    </div>

    <div className="container">
      <div className="row g-5 align-items-start">
        {/* Left — benefits */}
        <div className="col-lg-5" data-aos="fade-right">
          <span className={styles.sectionBadge}>Get Started Free</span>
          <h2 className={styles.sectionTitle}>
            Your Competitors Are Already on WhatsApp.{" "}
            <span style={{ color: "var(--wa-accent)" }}>Are You?</span>
          </h2>
          <p className={styles.sectionLead}>
            Every day you wait, a competitor steals your customer on WhatsApp.{" "}
            <strong>500+ businesses</strong> across India already use A2ZSMS to
            send instant messages, automate support, and close deals 24/7.
          </p>

          {/* Live notification strip */}
          <div className={styles.liveNotifStrip}>
            <span className={styles.liveNotifDot}></span>
            <span className={styles.liveNotifText}>
              <strong>Priya from Mumbai</strong> just signed up 6 minutes ago
            </span>
          </div>

          {/* Spots warning */}
          <div className={styles.spotsWarning}>
            <i className="bi bi-exclamation-triangle-fill"></i>
            <span>
              <strong>Only 3 free setup spots</strong> remaining this month.
              Free Setup + 1 Month Platform Free — expires when spots fill.
            </span>
          </div>

          {/* Social proof live strip */}
          <div className={styles.socialProofStrip}>
            <div className={styles.socialProofAvatars}>
              {["RS", "PK", "AM", "DV"].map((init, i) => (
                <div key={i} className={styles.socialProofAvatar}>
                  {init}
                </div>
              ))}
            </div>
            <span className={styles.socialProofText}>
              <strong>18 businesses</strong> signed up this week
            </span>
          </div>

          <ul className="list-unstyled mt-4">
            {[
              {
                icon: "bi-gift-fill",
                text: "Free setup + 1 month platform free",
                highlight: true,
              },
              { icon: "bi-clock-fill", text: "Go live in 24–48 hours" },
              {
                icon: "bi-person-check-fill",
                text: "Dedicated account manager assigned",
              },
              {
                icon: "bi-shield-check-fill",
                text: "No hidden charges — transparent pricing",
              },
              {
                icon: "bi-x-circle-fill",
                text: "Cancel anytime — zero lock-in",
              },
              {
                icon: "bi-patch-check-fill",
                text: "Official Meta Business API partner",
              },
            ].map((item, i) => (
              <li
                key={i}
                className="d-flex align-items-center gap-2 mb-3"
                style={{
                  fontSize: 15,
                  fontWeight: item.highlight ? 700 : 500,
                  color: item.highlight ? "#1da851" : "inherit",
                }}
              >
                <i
                  className={`bi ${item.icon}`}
                  style={{
                    color: item.highlight ? "#25d366" : "#25d366",
                    fontSize: 17,
                  }}
                ></i>
                {item.text}
                {item.highlight && (
                  <span
                    style={{
                      fontSize: 11,
                      background: "#dcfce7",
                      color: "#15803d",
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

          {/* Trust logos row */}
          <div className={styles.formTrustLogos}>
            <div className={styles.formTrustLogo}>
              <i className="bi bi-shield-lock-fill"></i>
              <span>SSL Secured</span>
            </div>
            <div className={styles.formTrustLogo}>
              <i className="bi bi-patch-check-fill"></i>
              <span>Meta Partner</span>
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
          </div>
        </div>

        {/* Right — form */}
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
const FinalCTA = () => (
  <section className={`${styles.ctaSection} aos`}>
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
        Limited Offer: Free Setup + 1 Month Platform Free — 3 Spots Left
      </div>
      <h2 className={styles.sectionTitleLight}>
        Every Second You Wait, a Customer Buys from Your Competitor
      </h2>
      <p
        className={styles.sectionLeadLight}
        style={{ maxWidth: 580, margin: "14px auto 36px" }}
      >
        Your competitors are already replying instantly on WhatsApp, closing
        deals while you&rsquo;re still sending emails. Don&rsquo;t lose another
        customer — get WhatsApp API + AI Chatbot today.
      </p>
      <div className="d-flex flex-wrap gap-3 justify-content-center">
        <a href="#get-started" className={styles.primaryBtn}>
          Claim Free Demo Now <i className="bi bi-arrow-right ms-1"></i>
        </a>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════
   LANDING PAGE FOOTER (Privacy / Terms)
   ═══════════════════════════════════════════════════ */
const LandingPageFooter = () => (
  <footer className={styles.landingFooter}>
    <nav className={styles.landingFooterLinks} aria-label="Legal links">
      <a href="/privacy/">Privacy Policy</a>
      <span className={styles.landingFooterDot}>·</span>
      <a href="/terms/">Terms &amp; Conditions</a>
    </nav>
  </footer>
);

/* ═══════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════ */
const WhatsappApiService = () => {
  const [activeFeatureTab, setActiveFeatureTab] = useState("api");
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
        {/* <MarqueeTrustBar /> */}
        <AsSeenOnStrip />
        <ProblemSolution />
        <ComparisonTableSection />
        <FeaturesSection
          activeTab={activeFeatureTab}
          setActiveTab={setActiveFeatureTab}
        />
        <HowItWorks />
        {/* <VideoSection /> */}
        <UseCasesSection />
        <IntegrationSection />
        <TestimonialsSection />
        <FaqSection openIndex={openFaqIndex} setOpenIndex={setOpenFaqIndex} />
        <FormCtaSection />
      </div>
      <LandingPageFooter />
    </>
  );
};


export default WhatsappApiService;
