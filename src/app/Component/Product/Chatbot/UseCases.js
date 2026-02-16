"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Chatbot.module.css";

const industrySections = [
  {
    id: "marketing",
    tab: "Marketing",
    icon: "bi-megaphone",
    title: "Manage Marketing Needs Using Your Chatbot for WhatsApp",
    description:
      "Turn your WhatsApp chatbot into a growth engine. Nurture leads with automated campaigns and win loyalty effortlessly.",
    image: "/image/product/chatbot_market.png",
    items: [
      {
        icon: "bi-funnel",
        title: "Drip Campaigns",
        description: "Automate sequences to nurture prospects at every stage.",
      },
      {
        icon: "bi-send",
        title: "Bulk Message Campaigns",
        description:
          "Send segmented promotions to large audiences at the perfect time.",
      },
      {
        icon: "bi-person-check",
        title: "Lead Generation",
        description:
          "Capture, qualify, and route leads directly to your sales team.",
      },
      {
        icon: "bi-layout-text-window",
        title: "Multiple Widgets",
        description:
          "Add WhatsApp buttons, widgets, QR codes, and links to drive signups.",
      },
      {
        icon: "bi-plug",
        title: "Marketing Tools",
        description:
          "Connect CRM and analytics tools for seamless reporting and sync.",
      },
    ],
  },
  {
    id: "realestate",
    tab: "Real Estate",
    icon: "bi-building",
    title: "Close High-Value Real Estate Deals With WhatsApp",
    description:
      "Let clients contact you instantly to schedule consultations or property viewings.",
    image: "/image/product/chatbot_realestate.png",
    items: [
      {
        icon: "bi-search",
        title: "Property Search",
        description:
          "Share listings based on budgets, locations, and preferences.",
      },
      {
        icon: "bi-bell",
        title: "Deal Alerts",
        description:
          "Send alerts about price drops, new launches, and open houses.",
      },
      {
        icon: "bi-calendar-event",
        title: "Property Viewing",
        description:
          "Schedule visits automatically with confirmation reminders.",
      },
      {
        icon: "bi-calculator",
        title: "Valuation",
        description: "Offer quick estimates and capture seller requirements.",
      },
      {
        icon: "bi-database",
        title: "CRM Integration",
        description: "Sync leads and conversations with your real estate CRM.",
      },
      {
        icon: "bi-chat-dots",
        title: "Live Chat",
        description:
          "Escalate high-intent leads to agents for immediate support.",
      },
    ],
  },
  {
    id: "ecommerce",
    tab: "E-commerce",
    icon: "bi-cart4",
    title: "Fit Your eCommerce Store in Chat With WhatsApp Bots",
    description:
      "Bring your digital shop to WhatsApp with catalogs, orders, and support in one place.",
    image: "/image/product/e-commerce.png",
    items: [
      {
        icon: "bi-grid",
        title: "Product Catalog",
        description:
          "Share rich product listings directly in WhatsApp conversations.",
      },
      {
        icon: "bi-cart-x",
        title: "Cart Recovery",
        description:
          "Nudge shoppers back with personalized reminders and offers.",
      },
      {
        icon: "bi-tag",
        title: "Discounts & Offers",
        description:
          "Notify customers about limited-time deals and price drops.",
      },
      {
        icon: "bi-box-seam",
        title: "Order Tracking",
        description:
          "Provide shipping updates and delivery confirmations instantly.",
      },
      {
        icon: "bi-heart",
        title: "Wishlist",
        description:
          "Let shoppers save items and get notified when prices change.",
      },
      {
        icon: "bi-bar-chart-line",
        title: "Analytics",
        description: "Track conversions and engagement to optimize your store.",
      },
    ],
  },
  {
    id: "healthcare",
    tab: "Healthcare",
    icon: "bi-heart-pulse",
    title: "Digital Healthcare Services With WhatsApp Chatbot",
    description:
      "Improve healthcare communication with instant assistance and seamless appointments.",
    image: "/image/product/health.png",
    items: [
      {
        icon: "bi-calendar-check",
        title: "Appointment Booking",
        description:
          "Let patients schedule visits and get reminders automatically.",
      },
      {
        icon: "bi-file-medical",
        title: "Patient Reports",
        description:
          "Deliver prescriptions, lab results, and follow-up notes securely.",
      },
      {
        icon: "bi-chat-left-heart",
        title: "Post-Visit Support",
        description: "Answer post-visit questions and share care instructions.",
      },
      {
        icon: "bi-credit-card",
        title: "Payments",
        description: "Offer payment links for consultations and subscriptions.",
      },
      {
        icon: "bi-alarm",
        title: "Med Reminders",
        description:
          "Send automated reminders to improve adherence and outcomes.",
      },
    ],
  },
  {
    id: "hr",
    tab: "HR & Hiring",
    icon: "bi-people",
    title: "Automate Hiring & Employee Management With WhatsApp",
    description:
      "Get an all-rounder WhatsApp chatbot for HR that works 24/7 without delays.",
    image: "/image/product/chatbot_hiring.png",
    items: [
      {
        icon: "bi-envelope-heart",
        title: "Welcome Messages",
        description:
          "Send welcome notes, updates, and policy reminders automatically.",
      },
      {
        icon: "bi-inbox",
        title: "Unified Inbox",
        description:
          "Centralize employee queries and route tickets to the right team.",
      },
      {
        icon: "bi-question-circle",
        title: "FAQ Answers",
        description:
          "Resolve common employee questions instantly with AI responses.",
      },
      {
        icon: "bi-ticket-perforated",
        title: "Ticketing",
        description:
          "Sync HR tickets with your existing helpdesk or HRMS tools.",
      },
      {
        icon: "bi-chat-text",
        title: "Live Escalation",
        description: "Escalate to a human recruiter or HR agent when needed.",
      },
    ],
  },
  {
    id: "education",
    tab: "Education",
    icon: "bi-mortarboard",
    title: "AI-Driven Ed-Tech Chatbot for WhatsApp",
    description:
      "Answer admissions questions, share evaluations, and keep parents informed with automation.",
    image: "/image/product/chatbot_edu.png",
    items: [
      {
        icon: "bi-info-circle",
        title: "Admission Queries",
        description:
          "Respond instantly to program details, fees, and deadlines.",
      },
      {
        icon: "bi-clock",
        title: "Class Reminders",
        description: "Automate timetable updates and upcoming class alerts.",
      },
      {
        icon: "bi-file-earmark-bar-graph",
        title: "Student Reports",
        description:
          "Deliver progress updates and performance insights securely.",
      },
      {
        icon: "bi-chat-square-dots",
        title: "Student Engagement",
        description: "Provide support, resources, and career guidance in chat.",
      },
      {
        icon: "bi-shield-lock",
        title: "Data Security",
        description:
          "Keep student data protected with verified WhatsApp channels.",
      },
    ],
  },
];

const UseCases = () => {
  const [activeTab, setActiveTab] = useState("marketing");
  const activeSection = industrySections.find((s) => s.id === activeTab);

  return (
    <section className={styles.section}>
      <div className="container aos">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className={styles.sectionBadge}>Industry Solutions</span>
          <h2 className={styles.sectionTitle}>
            Built for Every Industry, Designed for Results
          </h2>
          <p
            className={`${styles.sectionLead} mx-auto`}
            style={{ maxWidth: "600px" }}
          >
            See how businesses across industries use our AI chatbot to automate,
            engage, and grow on WhatsApp.
          </p>
        </div>

        <div className="row g-4 aos" data-aos="fade-up">
          {/* Vertical Sidebar Tabs */}
          <div className="col-lg-3">
            <div className={styles.ucTabSidebar}>
              {industrySections.map((section) => (
                <button
                  key={section.id}
                  className={`${styles.ucTabBtn} ${activeTab === section.id ? styles.ucTabBtnActive : ""}`}
                  onClick={() => setActiveTab(section.id)}
                >
                  <div className={styles.ucTabIcon}>
                    <i className={`bi ${section.icon}`}></i>
                  </div>
                  <span>{section.tab}</span>
                  <i
                    className={`bi bi-chevron-right ms-auto ${styles.ucTabArrow}`}
                  ></i>
                </button>
              ))}
            </div>
          </div>

          {/* Content Panel */}
          <div className="col-lg-9">
            {activeSection && (
              <div className={styles.ucPanel}>
                <div className="row g-4 align-items-start">
                  <div className="col-md-6">
                    <div className={styles.ucImageWrap}>
                      <img
                        src={activeSection.image}
                        alt={activeSection.title}
                        className={styles.ucImage}
                      />
                      <div className={styles.ucImageBadge}>
                        <i
                          className={`bi ${industrySections.find((s) => s.id === activeTab)?.icon} me-1`}
                        ></i>
                        {activeSection.tab}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h3 className={styles.ucTitle}>{activeSection.title}</h3>
                    <p className={styles.ucDesc}>{activeSection.description}</p>

                    <div className={styles.ucItemsList}>
                      {activeSection.items.map((item) => (
                        <div key={item.title} className={styles.ucItem}>
                          <div className={styles.ucItemIcon}>
                            <i className={`bi ${item.icon}`}></i>
                          </div>
                          <div>
                            <span className={styles.ucItemTitle}>
                              {item.title}
                            </span>
                            <p className={styles.ucItemDesc}>
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Link
                      href="/request-demo"
                      className={`mt-3 ${styles.primaryBtn}`}
                    >
                      Get Started <i className="bi bi-arrow-right ms-1"></i>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
