"use client";

import Link from "next/link";
import styles from "./Chatbot.module.css";

const industrySections = [
  {
    title: "Manage Marketing Needs Using Your Chatbot for WhatsApp",
    description:
      "Turn your WhatsApp chatbot into a growth engine. Nurture leads with automated campaigns and win loyalty effortlessly.",
    image: "/image/product/chatbot_market.png",
    badge: "Marketing Automation",
    items: [
      {
        title: "Drip Campaigns",
        description: "Automate sequences to nurture prospects at every stage.",
      },
      {
        title: "Bulk Message Campaigns",
        description:
          "Send segmented promotions to large audiences at the perfect time.",
      },
      {
        title: "Lead Generation",
        description:
          "Capture, qualify, and route leads directly to your sales team.",
      },
      {
        title: "Multiple Widgets",
        description:
          "Add WhatsApp buttons, widgets, QR codes, and links to drive signups.",
      },
      {
        title: "Integrate With Marketing Tools",
        description:
          "Connect CRM and analytics tools for seamless reporting and sync.",
      },
    ],
  },
  {
    title: "Close High-Value Real Estate Deals With Chatbot for WhatsApp",
    description:
      "Let clients contact you instantly to schedule consultations or property viewings.",
    image: "/image/product/chatbot_realestate.png",
    badge: "Real Estate",
    items: [
      {
        title: "Property Search and Listings",
        description:
          "Share listings based on budgets, locations, and preferences.",
      },
      {
        title: "Notify Them About New Deals",
        description:
          "Send alerts about price drops, new launches, and open houses.",
      },
      {
        title: "Booking for Property Viewing",
        description:
          "Schedule visits automatically with confirmation reminders.",
      },
      {
        title: "Property Valuation Assistance",
        description: "Offer quick estimates and capture seller requirements.",
      },
      {
        title: "Integration With CRM Systems",
        description: "Sync leads and conversations with your real estate CRM.",
      },
      {
        title: "Live Chat With Your WhatsApp Customers",
        description:
          "Escalate high-intent leads to agents for immediate support.",
      },
    ],
  },

  {
    title: "Fit Your eCommerce Store in Chat With WhatsApp Bots",
    description:
      "Bring your digital shop to WhatsApp with catalogs, orders, and support in one place.",
    image: "/image/product/e-commerce.png",
    badge: "E-commerce",
    items: [
      {
        title: "Send Product Catalog",
        description:
          "Share rich product listings directly in WhatsApp conversations.",
      },
      {
        title: "Recover Abandoned Carts",
        description:
          "Nudge shoppers back with personalized reminders and offers.",
      },
      {
        title: "Discounts and Offers",
        description:
          "Notify customers about limited-time deals and price drops.",
      },
      {
        title: "Back in Stock Alerts",
        description:
          "Automate alerts when popular products are available again.",
      },
      {
        title: "Order Tracking",
        description:
          "Provide shipping updates and delivery confirmations instantly.",
      },
      {
        title: "Wishlist and Favorite Items",
        description:
          "Let shoppers save items and get notified when prices change.",
      },
      {
        title: "Performance Analytics",
        description: "Track conversions and engagement to optimize your store.",
      },
    ],
  },

  {
    title: "Provide Digital Healthcare Services With Chatbot for WhatsApp",
    description:
      "Improve healthcare communication with instant assistance and seamless appointments.",
    image: "/image/product/health.png",
    badge: "Healthcare",
    items: [
      {
        title: "Automated Appointment Booking",
        description:
          "Let patients schedule visits and get reminders automatically.",
      },
      {
        title: "Send Patient Reports",
        description:
          "Deliver prescriptions, lab results, and follow-up notes securely.",
      },
      {
        title: "Post Consultation Support",
        description: "Answer post-visit questions and share care instructions.",
      },
      {
        title: "Collect Payments",
        description: "Offer payment links for consultations and subscriptions.",
      },
      {
        title: "Medication Reminders",
        description:
          "Send automated reminders to improve adherence and outcomes.",
      },
      {
        title: "Health Monitoring and Analytics",
        description: "Track engagement and highlight urgent patient needs.",
      },
    ],
  },
  {
    title: "Automate Your Hiring & Employee Management With a WhatsApp Bot",
    description:
      "Get an all-rounder WhatsApp chatbot for HR that works 24/7 without delays.",
    image: "/image/product/chatbot_hiring.png",
    badge: "HR Automation",
    items: [
      {
        title: "Personalized Messages",
        description:
          "Send welcome notes, updates, and policy reminders automatically.",
      },
      {
        title: "Unified Chat Inbox",
        description:
          "Centralize employee queries and route tickets to the right team.",
      },
      {
        title: "Answer FAQs",
        description:
          "Resolve common employee questions instantly with AI responses.",
      },
      {
        title: "Integrate With Ticketing System",
        description:
          "Sync HR tickets with your existing helpdesk or HRMS tools.",
      },
      {
        title: "Live Chat",
        description: "Escalate to a human recruiter or HR agent when needed.",
      },
      {
        title: "Send WhatsApp Notifications",
        description:
          "Share interview schedules, onboarding tasks, and reminders.",
      },
    ],
  },
  {
    title: "AI-Driven Ed-Tech Chatbot for WhatsApp",
    description:
      "Answer admissions questions, share evaluations, and keep parents informed with automation.",
    image: "/image/product/chatbot_edu.png",
    badge: "Education",
    items: [
      {
        title: "Answer Admission Queries",
        description:
          "Respond instantly to program details, fees, and deadlines.",
      },
      {
        title: "Send Class Reminders",
        description: "Automate timetable updates and upcoming class alerts.",
      },
      {
        title: "Share Student Reports",
        description:
          "Deliver progress updates and performance insights securely.",
      },
      {
        title: "Stay in Touch With Students",
        description: "Provide support, resources, and career guidance in chat.",
      },
      {
        title: "Secure Information Handling",
        description:
          "Keep student data protected with verified WhatsApp channels.",
      },
    ],
  },
];

const UseCases = () => {
  return (
    <div>
      {industrySections.map((section, index) => {
        const sectionClass =
          index % 2 === 1 ? styles.sectionAlt : styles.caseSection;
        const rowClass = `row align-items-center gy-4${
          index % 2 === 1 ? " flex-lg-row-reverse" : ""
        }`;

        return (
          <section key={section.title} className={sectionClass}>
            <div className="container aos">
              {/* <div className="text-center mb-5 pb-3" data-aos="fade-up">
                <h2 className={styles.sectionTitle}>
                  How Our AI-Powered WhatsApp Chatbot Helps Your Business
                </h2>
                <p className={styles.sectionLead}>
                  Our AI-powered WhatsApp chatbot is designed to automate
                  customer communication, manage leads, run campaigns, and
                  provide instant support. It connects with your business
                  systems to deliver fast, accurate, and personalized responses
                  at scale.
                </p>
              </div> */}
              <div className={rowClass}>
                <div
                  className="col-lg-6"
                  data-aos={index % 2 === 1 ? "fade-left" : "fade-right"}
                >
                  <div className={styles.caseMedia}>
                    <img src={section.image} alt={section.title} />
                    <div className={styles.caseBadge}>{section.badge}</div>
                  </div>
                </div>
                <div
                  className="col-lg-6"
                  data-aos={index % 2 === 1 ? "fade-right" : "fade-left"}
                >
                  <h3 className={styles.caseTitle}>{section.title}</h3>
                  <p className={styles.caseLead}>{section.description}</p>
                  <div className={styles.detailsList}>
                    {section.items.map((item, itemIndex) => (
                      <details
                        key={item.title}
                        className={styles.detailItem}
                        open={itemIndex === 0}
                      >
                        <summary>{item.title}</summary>
                        <p className={styles.detailText}>{item.description}</p>
                      </details>
                    ))}
                  </div>
                  {section.cta && (
                    <div className={styles.ctaRow}>
                      <Link
                        href={section.cta.href}
                        className={styles.primaryBtn}
                      >
                        {section.cta.label}{" "}
                        <i className="bi bi-arrow-right"></i>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default UseCases;
