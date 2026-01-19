"use client";

import styles from "./Chatbot.module.css";

const automationItems = [
  {
    title: "ChatGPT Model Integration",
    description:
      "Add ChatGPT intelligence to resolve complex questions with better accuracy.",
  },
  {
    title: "Reply Based on User History",
    description:
      "Personalize responses using past chats, orders, and customer preferences.",
  },
  {
    title: "Train Your AI WhatsApp Bot",
    description:
      "Upload FAQs, PDFs, and product data so the bot speaks your brand voice.",
  },
  {
    title: "Self-Learning Bot",
    description:
      "Improve responses over time with real chat feedback and learning loops.",
  },
  {
    title: "Automatic Language Translation",
    description:
      "Detect languages automatically and respond in the customer's language.",
  },
  {
    title: "Select Your Bot's Tone",
    description:
      "Choose a formal, friendly, or playful tone that fits your brand.",
  },
];

const AutomationSection = () => {
  return (
    //
    <>
      {/* <section className={`${styles.section} bg-light`}> */}
      <section className={styles.section}>
        <div className="container aos">
          <div className="text-center mb-4" data-aos="fade-up">
            <h2 className={styles.sectionTitle}>
              AI Automation Built for High-Impact WhatsApp Bots
            </h2>
            <p className={styles.sectionLead}>
              Add a human touch with conversational AI and build stronger
              customer relationships through helpful automation.
            </p>
          </div>

          <div className="row align-items-center gy-4 pb-4">
            <div className="col-lg-6" data-aos="fade-right">
              <div className={styles.mediaCard}>
                <img
                  src="/image/product/chatbot_2.png"
                  alt="AI automation showcase"
                />
                <div className={styles.mediaOverlay}>
                  AI automation in action
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className={styles.detailsList}>
                {automationItems.map((item, index) => (
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
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light py-5 my-4">
        <div className=" container aos">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className={styles.sectionTitle}>
              Build Powerful WhatsApp Chatbots – Without Coding
            </h2>
            <p className={styles.sectionLead}>
              Design intelligent WhatsApp chatbot journeys using our visual flow
              builder. Automate conversations, collect customer data, and
              deliver instant responses – all without writing a single line of
              code.
            </p>
          </div>
          <img
            className="w-100"
            src="/image/product/chatbot_creation.png"
            alt="AI automation showcase"
          />
        </div>
      </section>
    </>
  );
};

export default AutomationSection;
