"use client";

import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Pricing = () => {
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
      color: "#25D366",
      icon: "bi-chat-dots",
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
      color: "#128C7E",
      icon: "bi-star-fill",
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
      color: "#075E54",
      icon: "bi-building",
    },
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold head1 mb-3" style={{ color: "#203239" }}>
            AI WhatsApp Chatbot Pricing
          </h2>
          <p className="text-muted para-blog">
            Choose the perfect plan for your business automation needs
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="row g-4">
          {pricingData.map((category, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className="card border-0 shadow-lg h-100"
                style={{
                  borderRadius: "20px",
                  position: "relative",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  border: category.popular
                    ? `3px solid ${category.color}`
                    : "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = `0 20px 40px ${category.color}50`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                {category.popular && (
                  <div
                    className="position-absolute top-0 end-0"
                    style={{
                      backgroundColor: "#FFC107",
                      color: "#000",
                      padding: "8px 20px",
                      fontSize: "12px",
                      fontWeight: "bold",
                      borderBottomLeftRadius: "15px",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                    }}
                  >
                    ⭐ MOST POPULAR
                  </div>
                )}

                <div
                  className="text-white text-center py-5"
                  style={{
                    background: `linear-gradient(135deg, ${category.color} 0%, ${category.color}dd 100%)`,
                  }}
                >
                  <div
                    className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                    style={{
                      width: "70px",
                      height: "70px",
                      backgroundColor: "rgba(255,255,255,0.2)",
                    }}
                  >
                    <i
                      className={`bi ${category.icon}`}
                      style={{ fontSize: "36px" }}
                    ></i>
                  </div>
                  <h4 className="fw-bold mb-2">{category.package}</h4>
                  <p className="small mb-0" style={{ opacity: 0.9 }}>
                    {category.subtitle}
                  </p>
                </div>

                <div
                  className="card-body p-4"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <p
                    className="text-center text-muted mb-4"
                    style={{ fontSize: "14px" }}
                  >
                    {category.description}
                  </p>

                  <div className="mb-4">
                    {category.plans.map((item, i) => (
                      <div
                        key={i}
                        className="d-flex justify-content-between align-items-center mb-3 pb-3"
                        style={{
                          borderBottom:
                            i < category.plans.length - 1
                              ? "1px solid #e9ecef"
                              : "none",
                        }}
                      >
                        <div className="d-flex align-items-start flex-column">
                          <div className="d-flex align-items-start mb-1">
                            <i
                              className="bi bi-check-circle-fill me-2 mt-1"
                              style={{
                                color: category.color,
                                fontSize: "18px",
                              }}
                            ></i>
                            <span
                              className="para-color"
                              style={{ fontSize: "14px" }}
                            >
                              {item.messages}
                            </span>
                          </div>
                        </div>
                        <div className="text-end">
                          <span
                            className="fw-bold"
                            style={{ fontSize: "18px", color: category.color }}
                          >
                            {item.price}
                          </span>
                          <span className="text-muted small">
                            {item.period}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link href="/request-demo" passHref>
                    <button
                      className="btn text-white fw-bold w-100 py-3"
                      style={{
                        backgroundColor: category.color,
                        borderRadius: "30px",
                        border: "none",
                        fontSize: "16px",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.05)";
                        e.currentTarget.style.boxShadow = `0 8px 16px ${category.color}50`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      Get Started Now
                      <i className="bi bi-arrow-right ms-2"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Included */}
        <div className="row mt-5" data-aos="fade-up">
          <div className="col-12">
            <div
              className="card border-0 shadow-sm"
              style={{
                borderRadius: "20px",
                background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
              }}
            >
              <div className="card-body p-5">
                <h5
                  className="fw-bold text-center mb-4"
                  style={{ color: "#203239" }}
                >
                  ✨ All Plans Include
                </h5>
                <div className="row">
                  <div className="col-md-3 col-6 mb-4 text-center">
                    <div
                      className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                      style={{
                        width: "60px",
                        height: "60px",
                        backgroundColor: "#25D36615",
                      }}
                    >
                      <i
                        className="bi bi-robot"
                        style={{ fontSize: "28px", color: "#25D366" }}
                      ></i>
                    </div>
                    <p
                      className="small mt-2 mb-0 fw-bold"
                      style={{ color: "#203239" }}
                    >
                      AI-Powered Responses
                    </p>
                    <small className="text-muted">Smart automation</small>
                  </div>
                  <div className="col-md-3 col-6 mb-4 text-center">
                    <div
                      className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                      style={{
                        width: "60px",
                        height: "60px",
                        backgroundColor: "#128C7E15",
                      }}
                    >
                      <i
                        className="bi bi-headset"
                        style={{ fontSize: "28px", color: "#128C7E" }}
                      ></i>
                    </div>
                    <p
                      className="small mt-2 mb-0 fw-bold"
                      style={{ color: "#203239" }}
                    >
                      24/7 Availability
                    </p>
                    <small className="text-muted">Always responsive</small>
                  </div>
                  <div className="col-md-3 col-6 mb-4 text-center">
                    <div
                      className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                      style={{
                        width: "60px",
                        height: "60px",
                        backgroundColor: "#25D36615",
                      }}
                    >
                      <i
                        className="bi bi-graph-up"
                        style={{ fontSize: "28px", color: "#25D366" }}
                      ></i>
                    </div>
                    <p
                      className="small mt-2 mb-0 fw-bold"
                      style={{ color: "#203239" }}
                    >
                      Analytics Dashboard
                    </p>
                    <small className="text-muted">Detailed insights</small>
                  </div>
                  <div className="col-md-3 col-6 mb-4 text-center">
                    <div
                      className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                      style={{
                        width: "60px",
                        height: "60px",
                        backgroundColor: "#128C7E15",
                      }}
                    >
                      <i
                        className="bi bi-lightning-charge"
                        style={{ fontSize: "28px", color: "#128C7E" }}
                      ></i>
                    </div>
                    <p
                      className="small mt-2 mb-0 fw-bold"
                      style={{ color: "#203239" }}
                    >
                      Quick Setup
                    </p>
                    <small className="text-muted">Ready in minutes</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
