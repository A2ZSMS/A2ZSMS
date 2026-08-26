"use client";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import styles from "./Chatbot.module.css";
import Link from "next/link";

const trustLogos = [
  { src: "/image/brand/google.png", alt: "Google" },
  { src: "/image/brand/booking.png", alt: "Booking" },
  { src: "/image/brand/airtable.png", alt: "Airtable" },
  { src: "/image/brand/hellosign.png", alt: "HelloSign" },
  { src: "/image/brand/capterra.png", alt: "Capterra" },
  { src: "/image/brand/wpbeginner.png", alt: "WPBeginner" },
];

const heroStats = [
  { value: "50K+", label: "Businesses" },
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "Support" },
];

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.heroGlow}></div>
      <div className="container position-relative aos">
        <div className="row align-items-center gy-5 aos">
          <div className="col-lg-6" data-aos="fade-right">
            <div className={styles.heroBadge}>
              <span className={styles.heroBadgeDot}></span>
              Official WhatsApp Business API Partner
            </div>

            <h1 className={styles.heroTitle}>
              Build a WhatsApp Chatbot That Converts
              <span className={styles.heroTitleGradient}> Conversations into Revenue</span>
            </h1>

            <p className={styles.heroText}>
              Give customers instant answers, capture qualified leads, and keep
              support running 24/7. A2Z SMS helps you automate marketing, sales,
              and service with one powerful WhatsApp chatbot.
            </p>

            <div className="d-flex flex-wrap gap-3 mt-4 mb-4">
              <Link href="/try-for-free" className={styles.primaryBtn}>
                Start for Free <i className="bi bi-arrow-right ms-1"></i>
              </Link>
              <Link href="/request-demo" className={styles.secondaryBtn}>
                <i className="bi bi-play-circle me-1"></i> Watch Demo
              </Link>
            </div>

            <div className={styles.heroMeta}>
              <i className="bi bi-shield-check"></i>
              <span>Free forever plan &middot; No credit card required</span>
            </div>

            <div className={styles.heroStatsRow}>
              {heroStats.map((s, i) => (
                <div key={s.label} className={styles.heroStat}>
                  <span className={styles.heroStatValue}>{s.value}</span>
                  <span className={styles.heroStatLabel}>{s.label}</span>
                  {i < heroStats.length - 1 && <div className={styles.heroStatDivider}></div>}
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-left">
            <div className={styles.heroImageWrap}>
              <div className={styles.heroImageGlow}></div>
              <img
                src="/image/product/chatbot_1.png"
                alt="WhatsApp chatbot interface"
                className={styles.heroImage}
              />
              <div className={styles.heroFloat1}>
                <i className="bi bi-robot"></i>
                <span>AI-Powered</span>
              </div>
              <div className={styles.heroFloat2}>
                <i className="bi bi-graph-up-arrow"></i>
                <span>3x Conversions</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.trustBar} data-aos="fade-up">
          <span className={styles.trustText}>
            Trusted by <strong>50,000+</strong> Global Brands
          </span>
          <div className={styles.trustLogos}>
            {trustLogos.map((logo) => (
              <img key={logo.alt} src={logo.src} alt={logo.alt} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
