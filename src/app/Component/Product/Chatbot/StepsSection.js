"use client";

import Link from "next/link";
import styles from "./Chatbot.module.css";

const stepsData = [
  {
    id: "01",
    icon: "bi-person-plus",
    title: "Create Your Workspace",
    description:
      "Sign in to A2Z SMS and set up a new chatbot workspace in minutes.",
  },
  {
    id: "02",
    icon: "bi-whatsapp",
    title: "Connect WhatsApp Business",
    description:
      "Link your WhatsApp Business account and submit details for verification.",
  },
  {
    id: "03",
    icon: "bi-file-earmark-check",
    title: "Add Number & Templates",
    description:
      "Register a sending number and get your message templates approved fast.",
  },
  {
    id: "04",
    icon: "bi-rocket-takeoff",
    title: "Design, Train & Launch",
    description:
      "Build flows, train the bot, and go live with analytics on day one.",
  },
];

const StepsSection = () => {
  return (
    <section className={styles.sectionDark}>
      <div className="container aos">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className={styles.sectionBadgeLight}>How It Works</span>
          <h2 className={styles.sectionTitleLight}>
            Launch Your WhatsApp Chatbot in 4 Steps
          </h2>
          <p className={styles.sectionLeadLight}>
            Get started in minutes. No coding required.
          </p>
        </div>

        <div className={styles.stepsTimeline} data-aos="fade-up">
          {stepsData.map((step, index) => (
            <div key={step.id} className={styles.stepBlock}>
              <div className={styles.stepDot}>
                <span>{step.id}</span>
              </div>
              {index < stepsData.length - 1 && <div className={styles.stepLine}></div>}
              <div className={styles.stepContent}>
                <div className={styles.stepIcon}>
                  <i className={`bi ${step.icon}`}></i>
                </div>
                <h5 className={styles.stepTitle}>{step.title}</h5>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5" data-aos="fade-up">
          <Link href="/try-for-free" className={styles.primaryBtnLight}>
            Get Started FREE <i className="bi bi-arrow-right ms-1"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
