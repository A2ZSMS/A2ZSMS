"use client";

import styles from "./Chatbot.module.css";

const automationItems = [
  {
    icon: "bi-cpu",
    title: "ChatGPT Model Integration",
    description:
      "Add ChatGPT intelligence to resolve complex questions with better accuracy.",
  },
  {
    icon: "bi-person-lines-fill",
    title: "Reply Based on User History",
    description:
      "Personalize responses using past chats, orders, and customer preferences.",
  },
  {
    icon: "bi-database-up",
    title: "Train Your AI WhatsApp Bot",
    description:
      "Upload FAQs, PDFs, and product data so the bot speaks your brand voice.",
  },
  {
    icon: "bi-arrow-repeat",
    title: "Self-Learning Bot",
    description:
      "Improve responses over time with real chat feedback and learning loops.",
  },
  {
    icon: "bi-translate",
    title: "Automatic Language Translation",
    description:
      "Detect languages automatically and respond in the customer's language.",
  },
  {
    icon: "bi-chat-square-heart",
    title: "Select Your Bot's Tone",
    description:
      "Choose a formal, friendly, or playful tone that fits your brand.",
  },
];

const AutomationSection = () => {
  return (
    <>
      <section className={styles.section}>
        <div className="container aos">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className={`badge rounded-pill ${styles.sectionBadge}`}>
              AI Automation
            </span>
            <h2 className={styles.sectionTitle}>
              AI Automation Built for High-Impact WhatsApp Bots
            </h2>
            <p
              className={`${styles.sectionLead} mx-auto`}
              style={{ maxWidth: "640px" }}
            >
              Add a human touch with conversational AI and build stronger
              customer relationships through helpful automation.
            </p>
          </div>

          <div className="row g-4 align-items-center aos">
            <div className="col-lg-6" data-aos="fade-right">
              <img
                src="/image/product/chatbot_2.png"
                alt="AI automation showcase"
                className="img-fluid rounded-4 shadow"
              />
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="row g-3">
                {automationItems.map((item, index) => (
                  <div key={item.title} className="col-sm-6">
                    <div className={styles.automationCard}>
                      <div className={styles.automationIcon}>
                        <i className={`bi ${item.icon}`}></i>
                      </div>
                      <h6 className="fw-bold mb-1">{item.title}</h6>
                      <p className="text-muted mb-0 small">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className="container">
          <div className="row align-items-center gy-4 aos">
            <div className="col-lg-5" data-aos="fade-right">
              <span className={`badge rounded-pill ${styles.sectionBadge}`}>
                No-Code Builder
              </span>
              <h2 className={`${styles.sectionTitle} mt-3`}>
                Build Powerful WhatsApp Chatbots – Without Coding
              </h2>
              <p className={styles.sectionLead}>
                Design intelligent WhatsApp chatbot journeys using our visual
                flow builder. Automate conversations, collect customer data, and
                deliver instant responses – all without writing a single line of
                code.
              </p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <div className={styles.builderFeature}>
                  <i className="bi bi-diagram-3 text-success"></i>
                  <span>Visual Flow Builder</span>
                </div>
                <div className={styles.builderFeature}>
                  <i className="bi bi-lightning-charge text-warning"></i>
                  <span>Drag & Drop</span>
                </div>
                <div className={styles.builderFeature}>
                  <i className="bi bi-bar-chart text-primary"></i>
                  <span>Built-in Analytics</span>
                </div>
              </div>
            </div>
            <div className="col-lg-7" data-aos="fade-left">
              <img
                className="img-fluid rounded-4 shadow"
                src="/image/product/chatbot_creation.png"
                alt="Visual chatbot builder"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AutomationSection;
