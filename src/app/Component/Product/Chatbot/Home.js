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

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <section className={styles.hero}>
      <div className="container aos">
        <div className="row align-items-center gy-4 aos">
          <div className="col-lg-6" data-aos="fade-right">
            <span className={styles.heroBadge}>
              <i className="bi bi-patch-check-fill"></i>
              Official WhatsApp Business API access
            </span>
            <h1 className={styles.heroTitle}>
              Build a WhatsApp Chatbot That Converts Conversations into Revenue
            </h1>
            <p className={styles.heroText}>
              Give customers instant answers, capture qualified leads, and keep
              support running 24/7. A2Z SMS helps you automate marketing, sales,
              and service with one powerful WhatsApp chatbot.
            </p>
            <div className={styles.heroCtas}>
              <Link href="/try-for-free" className={styles.primaryBtn}>
                Start for Free <i className="bi bi-arrow-right"></i>
              </Link>
              <Link href="/request-demo" className={styles.secondaryBtn}>
                Watch the Demo <i className="bi bi-play-circle"></i>
              </Link>
            </div>
            <p className={styles.heroNote}>
              Free forever plan. No card needed.
            </p>
          </div>

          <div className="col-lg-6" data-aos="fade-left">
            <div className={styles.heroMedia}>
              <div className={styles.heroFrame}>
                <img
                  src="/image/product/chatbot_1.png"
                  alt="WhatsApp chatbot interface"
                />
              </div>
              <div className={`${styles.heroBubble} ${styles.heroBubbleTop}`}>
                Lead capture on autopilot
              </div>
              <div
                className={`${styles.heroBubble} ${styles.heroBubbleBottom}`}
              >
                Cart recovery prompts
              </div>
              <div className={styles.heroStamp}>
                <i className="bi bi-whatsapp"></i>
                Verified sender
              </div>
            </div>
          </div>
        </div>

        <div className={styles.trustRow} data-aos="fade-up">
          <p className={styles.trustLabel}>
            Trusted by <span className={styles.trustCount}>50,000+</span> Global
            Brands
          </p>
          <div className={styles.trustGrid}>
            {trustLogos.map((logo) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                className={styles.trustLogo}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
