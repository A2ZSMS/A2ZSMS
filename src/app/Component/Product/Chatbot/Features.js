"use client";

import Link from "next/link";
import styles from "./Chatbot.module.css";

const featureItems = [
  {
    title: "Campaign Automation",
    description:
      "Segment your audience and launch drip or broadcast campaigns with smart scheduling.",
  },
  {
    title: "Product Discovery",
    description:
      "Show catalogs, share product cards, and guide shoppers to checkout inside WhatsApp.",
  },
  {
    title: "Always-On Support",
    description:
      "Resolve FAQs instantly and route complex issues to human agents with context.",
  },
  {
    title: "Appointment Booking",
    description:
      "Capture leads, confirm bookings, and send reminders without manual follow-up.",
  },
  {
    title: "AI-Powered Replies",
    description:
      "Deliver natural conversations with AI that improves after every interaction.",
  },
  {
    title: "Extend With 80+ Integrations",
    description:
      "Connect CRMs, payment gateways, and marketing tools to automate workflows.",
  },
];

const Features = () => {
  return (
    <section className={styles.section}>
      <div className="container aos">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className={styles.sectionTitle}>
            One WhatsApp Chatbot for Marketing, Selling, Support, and More
          </h2>
          <p className={styles.sectionLead}>
            Drive faster conversions, happier customers, and stronger retention
            with one unified WhatsApp chatbot experience.
          </p>
        </div>

        <div className="row align-items-center gy-4 aos">
          <div className="col-lg-5" data-aos="fade-right">
            <div className={styles.detailsList}>
              {featureItems.map((item, index) => (
                <details
                  key={item.title}
                  className={styles.detailItem}
                  open={index === 0}
                >
                  <summary>{item.title}</summary>
                  <p className={styles.detailText}>{item.description}</p>
                </details>
              ))}
            </div>
            <div className={styles.ctaRow}>
              <Link href="/request-demo" className={styles.primaryBtn}>
                Schedule a demo <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>

          <div className="col-lg-7" data-aos="fade-left">
            <div className={styles.mediaCard}>
              <img
                src="/image/product/chatbot_3.jpg"
                alt="WhatsApp chatbot showcase"
              />
              <div className={styles.mediaOverlay}>
                Built for marketing, selling, and support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
