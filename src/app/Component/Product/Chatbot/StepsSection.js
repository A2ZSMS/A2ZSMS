"use client";

import Link from "next/link";
import styles from "./Chatbot.module.css";

const stepsData = [
  {
    id: "01",
    title: "Create Your Workspace",
    description:
      "Sign in to A2Z SMS and set up a new chatbot workspace in minutes.",
  },
  {
    id: "02",
    title: "Connect WhatsApp Business",
    description:
      "Link your WhatsApp Business account and submit details for verification.",
  },
  {
    id: "03",
    title: "Add Your Number and Templates",
    description:
      "Register a sending number and get your message templates approved fast.",
  },
  {
    id: "04",
    title: "Design, Train, Launch",
    description:
      "Build flows, train the bot, and go live with analytics on day one.",
  },
];

const StepsSection = () => {
  return (
    // <section className={styles.section}>
    <section className={`${styles.section} bg-light`}>
      <div className="container aos">
        <div className="row align-items-start gy-4">
          <div className="col-lg-5" data-aos="fade-right">
            <h2 className={styles.sectionTitle}>
              Four Simple Steps to Launch Your WhatsApp Chatbot
            </h2>
            <p className={styles.sectionLead}>
              Launch quickly with A2Z SMS and automate WhatsApp conversations
              without writing code.
            </p>
            <div className={styles.ctaRow}>
              <Link href="/try-for-free" className={styles.primaryBtn}>
                Get Started FREE <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-7" data-aos="fade-left">
            <div className={styles.stepsList}>
              {stepsData.map((step) => (
                <div key={step.id} className={styles.stepItem}>
                  <div className={styles.stepIndex}>{step.id}</div>
                  <div>
                    <h4 className={styles.stepTitle}>{step.title}</h4>
                    <p className={styles.stepText}>{step.description}</p>
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

export default StepsSection;
