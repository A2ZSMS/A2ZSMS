"use client";

import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Pricing.css";
import Link from "next/link";
const Pricing = () => {
  const pricingData = [
    {
      package: "Starter Plan",
      subtitle: "Broadcast Oriented",
      description:
        "Perfect for small businesses starting with WhatsApp messaging",
      plans: [
        { calls: "2,500 conversations", price: "₹179", period: "/month" },
        { calls: "5,000 conversations", price: "₹419", period: "/month" },
        { calls: "10,000 conversations", price: "₹779", period: "/month" },
        { calls: "25,000 conversations", price: "₹1,199", period: "/month" },
        { calls: "100,000 conversations", price: "₹1,799", period: "/month" },
        { calls: "Unlimited conversations", price: "₹4,799", period: "/month" },
      ],
      color: "#25D366",
      icon: "bi-chat-dots",
    },
    {
      package: "Business Plan",
      subtitle: "Feature Oriented",
      description:
        "Ideal for growing businesses with advanced features and automation",
      popular: true,
      plans: [
        { calls: "1,250 conversations", price: "₹359", period: "/month" },
        { calls: "2,500 conversations", price: "₹839", period: "/month" },
        { calls: "5,000 conversations", price: "₹1,559", period: "/month" },
        { calls: "12,500 conversations", price: "₹2,399", period: "/month" },
        { calls: "50,000 conversations", price: "₹3,599", period: "/month" },
        { calls: "Unlimited conversations", price: "₹7,199", period: "/month" },
      ],
      color: "#128C7E",
      icon: "bi-star-fill",
    },
    {
      package: "Add-On Packs",
      subtitle: "Flexible Top-ups",
      description:
        "Need more conversations? Add extra capacity anytime as you grow",
      plans: [
        {
          calls: "1,000 conversations",
          price: "₹119",
          period: "/pack",
          note: "₹0.119 per conversation",
        },
        {
          calls: "5,000 conversations",
          price: "₹419",
          period: "/pack",
          note: "₹0.084 per conversation",
        },
        {
          calls: "10,000 conversations",
          price: "₹659",
          period: "/pack",
          note: "₹0.066 per conversation",
        },
        {
          calls: "25,000 conversations",
          price: "₹1,199",
          period: "/pack",
          note: "₹0.048 per conversation",
        },
        {
          calls: "100,000 conversations",
          price: "₹1,799",
          period: "/pack",
          note: "₹0.018 per conversation",
        },
      ],
      color: "#075E54",
      icon: "bi-plus-circle",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container aos">
        {/* Header */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold head1 mb-3" style={{ color: "#203239" }}>
            WhatsApp Business API Pricing
          </h2>
          <p className="text-muted para-blog">
            Choose the perfect plan for your business communication needs
          </p>
        </div>

        {/* Pricing Cards */}
        {/* <div className="row g-4">
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
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(37, 211, 102, 0.3)";
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
                              {item.calls}
                            </span>
                          </div>
                          {item.note && (
                            <small
                              className="text-muted ms-4"
                              style={{ fontSize: "11px" }}
                            >
                              {item.note}
                            </small>
                          )}
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
        </div> */}

        {/* Features Included */}
        <div className="row mt-5 aos" data-aos="fade-up">
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
                        className="bi bi-shield-check"
                        style={{ fontSize: "28px", color: "#25D366" }}
                      ></i>
                    </div>
                    <p
                      className="small mt-2 mb-0 fw-bold"
                      style={{ color: "#203239" }}
                    >
                      End-to-End Encryption
                    </p>
                    <small className="text-muted">100% Secure</small>
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
                      24/7 Support
                    </p>
                    <small className="text-muted">Always available</small>
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
                      Real-time Analytics
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
                      Instant Setup
                    </p>
                    <small className="text-muted">Ready in minutes</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Plan CTA */}
        <div className="text-center mt-5" data-aos="fade-up">
          <p className="para-blog mb-3" style={{ fontSize: "16px" }}>
            Need a custom enterprise solution? Let's talk!
          </p>
          <Link href="/contact">
            <button
              className="btn btn-lg px-5 py-3 fw-bold"
              style={{
                background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                color: "#fff",
                border: "none",
                borderRadius: "30px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 10px 25px rgba(37, 211, 102, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <i className="bi bi-telephone-fill me-2"></i>
              Contact Sales Team
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
