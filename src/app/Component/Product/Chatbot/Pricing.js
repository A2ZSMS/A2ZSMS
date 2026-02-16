"use client";

import Link from "next/link";
import styles from "./Chatbot.module.css";

const pricingData = [
  {
    package: "Starter Plan",
    subtitle: "Essential Automation",
    description:
      "Perfect for small businesses starting with WhatsApp automation",
    plans: [
      { messages: "1,000 messages", price: "₹999", period: "/month" },
      { messages: "2,500 messages", price: "₹1,999", period: "/month" },
      { messages: "5,000 messages", price: "₹2,999", period: "/month" },
      { messages: "10,000 messages", price: "₹4,999", period: "/month" },
    ],
    icon: "bi-chat-dots",
    tier: "starter",
  },
  {
    package: "Growth Plan",
    subtitle: "Advanced Features",
    description: "Ideal for growing businesses with AI capabilities",
    popular: true,
    plans: [
      { messages: "25,000 messages", price: "₹8,999", period: "/month" },
      { messages: "50,000 messages", price: "₹14,999", period: "/month" },
      { messages: "100,000 messages", price: "₹24,999", period: "/month" },
    ],
    icon: "bi-star-fill",
    tier: "growth",
  },
  {
    package: "Enterprise Plan",
    subtitle: "Complete Solution",
    description: "For large businesses with custom needs",
    plans: [
      { messages: "250,000 messages", price: "₹44,999", period: "/month" },
      { messages: "500,000 messages", price: "₹74,999", period: "/month" },
      {
        messages: "Unlimited messages",
        price: "₹99,999",
        period: "+ Negotiable",
      },
    ],
    icon: "bi-building",
    tier: "enterprise",
  },
];

const includedFeatures = [
  { icon: "bi-robot", title: "AI-Powered Responses", desc: "Smart automation" },
  { icon: "bi-headset", title: "24/7 Availability", desc: "Always responsive" },
  { icon: "bi-graph-up", title: "Analytics Dashboard", desc: "Detailed insights" },
  { icon: "bi-lightning-charge", title: "Quick Setup", desc: "Ready in minutes" },
];

const Pricing = () => {
  return (
    <section className={styles.sectionAlt}>
      <div className="container aos">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className={`badge rounded-pill ${styles.sectionBadge}`}>Pricing</span>
          <h2 className={styles.sectionTitle}>
            AI WhatsApp Chatbot Pricing
          </h2>
          <p className={`${styles.sectionLead} mx-auto`} style={{ maxWidth: "540px" }}>
            Choose the perfect plan for your business automation needs
          </p>
        </div>

        <div className="row g-4 aos">
          {pricingData.map((category, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={`card border-0 h-100 ${styles.pricingCard} ${category.popular ? styles.pricingCardPopular : ""}`}>
                {category.popular && (
                  <div className={styles.popularBadge}>
                    <i className="bi bi-star-fill me-1"></i> MOST POPULAR
                  </div>
                )}

                <div className={`card-header text-center text-white border-0 ${styles.pricingHeader} ${styles[`pricingHeader_${category.tier}`]}`}>
                  <div className={styles.pricingIconWrap}>
                    <i className={`bi ${category.icon}`}></i>
                  </div>
                  <h4 className="fw-bold mb-1">{category.package}</h4>
                  <p className="small mb-0 opacity-75">{category.subtitle}</p>
                </div>

                <div className="card-body p-4">
                  <p className="text-center text-muted small mb-4">
                    {category.description}
                  </p>

                  <div className="mb-4">
                    {category.plans.map((item, i) => (
                      <div
                        key={i}
                        className={`d-flex justify-content-between align-items-center py-3 ${i < category.plans.length - 1 ? "border-bottom" : ""}`}
                      >
                        <div className="d-flex align-items-center gap-2">
                          <i className={`bi bi-check-circle-fill ${styles[`pricingCheck_${category.tier}`]}`}></i>
                          <span className="small">{item.messages}</span>
                        </div>
                        <div className="text-end">
                          <span className={`fw-bold ${styles[`pricingPrice_${category.tier}`]}`}>
                            {item.price}
                          </span>
                          <span className="text-muted small">{item.period}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/request-demo"
                    className={`btn w-100 py-2 fw-semibold ${styles.pricingBtn} ${styles[`pricingBtn_${category.tier}`]}`}
                  >
                    Get Started Now
                    <i className="bi bi-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5" data-aos="fade-up">
          <div className={`card border-0 shadow-sm rounded-4 ${styles.includedCard}`}>
            <div className="card-body p-4 p-lg-5">
              <h5 className="fw-bold text-center mb-4">All Plans Include</h5>
              <div className="row g-4">
                {includedFeatures.map((feature) => (
                  <div key={feature.title} className="col-md-3 col-6 text-center">
                    <div className={styles.includedIcon}>
                      <i className={`bi ${feature.icon}`}></i>
                    </div>
                    <p className="small fw-bold mb-0 mt-2">{feature.title}</p>
                    <small className="text-muted">{feature.desc}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
