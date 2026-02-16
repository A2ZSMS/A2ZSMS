"use client";

import Link from "next/link";
import styles from "./Chatbot.module.css";

const featureItems = [
  {
    icon: "bi-megaphone",
    title: "Campaign Automation",
    description:
      "Segment your audience and launch drip or broadcast campaigns with smart scheduling.",
    color: "#25D366",
  },
  {
    icon: "bi-bag-check",
    title: "Product Discovery",
    description:
      "Show catalogs, share product cards, and guide shoppers to checkout inside WhatsApp.",
    color: "#128C7E",
  },
  {
    icon: "bi-headset",
    title: "Always-On Support",
    description:
      "Resolve FAQs instantly and route complex issues to human agents with context.",
    color: "#075E54",
  },
  {
    icon: "bi-calendar-check",
    title: "Appointment Booking",
    description:
      "Capture leads, confirm bookings, and send reminders without manual follow-up.",
    color: "#1fbf66",
  },
  {
    icon: "bi-stars",
    title: "AI-Powered Replies",
    description:
      "Deliver natural conversations with AI that improves after every interaction.",
    color: "#0ea5e9",
  },
  {
    icon: "bi-plug",
    title: "80+ Integrations",
    description:
      "Connect CRMs, payment gateways, and marketing tools to automate workflows.",
    color: "#8b5cf6",
  },
];

const Features = () => {
  return (
    <section className={styles.section}>
      <div className="container aos">
        <div className="row align-items-center gy-5 aos">
          <div className="col-lg-5" data-aos="fade-right">
            <span className={styles.sectionBadge}>Features</span>
            <h2 className={styles.sectionTitle}>
              One WhatsApp Chatbot for Marketing, Selling, Support & More
            </h2>
            <p className={styles.sectionLead}>
              Drive faster conversions, happier customers, and stronger retention
              with one unified WhatsApp chatbot experience.
            </p>
            <Link href="/request-demo" className={`mt-4 ${styles.primaryBtn}`}>
              Schedule a Demo <i className="bi bi-arrow-right ms-1"></i>
            </Link>
          </div>

          <div className="col-lg-7" data-aos="fade-left">
            <div className="row g-3">
              {featureItems.map((item, index) => (
                <div key={item.title} className="col-md-6">
                  <div className={styles.featureCard}>
                    <div
                      className={styles.featureIconWrap}
                      style={{ background: `${item.color}14`, color: item.color }}
                    >
                      <i className={`bi ${item.icon}`}></i>
                    </div>
                    <div>
                      <h6 className={styles.featureCardTitle}>{item.title}</h6>
                      <p className={styles.featureCardText}>{item.description}</p>
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
};

export default Features;
