"use client";

import "bootstrap-icons/font/bootstrap-icons.css"; // Ensure Bootstrap Icons are loaded
import Link from "next/link";

const Pricing = () => {
  const pricingData = [
    {
      package: "Starter Plan",
      description:
        "Perfect for small businesses getting started with voice calls",
      plans: [
        { calls: "2,500 Minutes", price: "₹179", period: "/month" },
        { calls: "5,000 Minutes", price: "₹419", period: "/month" },
        { calls: "10,000 Minutes", price: "₹779", period: "/month" },
      ],
      color: "#007BFF",
      icon: "bi-rocket-takeoff",
    },
    {
      package: "Business Plan",
      description: "Ideal for growing businesses with higher call volumes",
      popular: true,
      plans: [
        { calls: "25,000 Minutes", price: "₹1,199", period: "/month" },
        { calls: "50,000 Minutes", price: "₹2,399", period: "/month" },
        { calls: "100,000 Minutes", price: "₹3,599", period: "/month" },
      ],
      color: "#28A745",
      icon: "bi-building",
    },
    {
      package: "Enterprise Plan",
      description: "For large-scale operations requiring unlimited calling",
      plans: [
        { calls: "250,000 Minutes", price: "₹7,199", period: "/month" },
        { calls: "500,000 Minutes", price: "₹12,999", period: "/month" },
        { calls: "Unlimited Minutes", price: "Custom", period: "" },
      ],
      color: "#6610F2",
      icon: "bi-globe",
    },
  ];

  return (
    <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold head1" style={{ color: "#203239" }}>
            Voice Call Pricing Plans
          </h2>
          <p className="text-muted para-blog mt-3">
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
                className="card border-0 shadow-sm h-100"
                style={{
                  borderRadius: "15px",
                  position: "relative",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 15px 35px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                {category.popular && (
                  <div
                    className="position-absolute top-0 end-0 m-3"
                    style={{
                      backgroundColor: "#FFC107",
                      color: "#000",
                      padding: "5px 15px",
                      borderRadius: "20px",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    POPULAR
                  </div>
                )}

                <div
                  className="card-header border-0 text-white text-center py-4"
                  style={{
                    background: `linear-gradient(135deg, ${category.color} 0%, ${category.color}dd 100%)`,
                  }}
                >
                  <i
                    className={`bi ${category.icon} mb-3`}
                    style={{ fontSize: "48px" }}
                  ></i>
                  <h4 className="fw-bold mb-2">{category.package}</h4>
                  <p className="small mb-0" style={{ opacity: 0.9 }}>
                    {category.description}
                  </p>
                </div>

                <div className="card-body p-4">
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
                      <div>
                        <i
                          className="bi bi-check-circle-fill me-2"
                          style={{ color: category.color }}
                        ></i>
                        <span className="para-color fw-medium">
                          {item.calls}
                        </span>
                      </div>
                      <div>
                        <span
                          className="fw-bold"
                          style={{ fontSize: "18px", color: category.color }}
                        >
                          {item.price}
                        </span>
                        <span className="text-muted small">{item.period}</span>
                      </div>
                    </div>
                  ))}

                  <Link href="/request-demo" passHref>
                    <button
                      className="btn text-white fw-bold w-100 mt-3 py-2"
                      style={{
                        backgroundColor: category.color,
                        borderRadius: "25px",
                        border: "none",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.05)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    >
                      Get Started
                      <i className="bi bi-arrow-right ms-2"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div> */}

        {/* Features Included */}
        <div className="row mt-5" data-aos="fade-up">
          <div className="col-12">
            <div
              className="card border-0 shadow-sm"
              style={{ borderRadius: "15px", backgroundColor: "#fff" }}
            >
              <div className="card-body p-4">
                <h5
                  className="fw-bold text-center mb-4"
                  style={{ color: "#203239" }}
                >
                  All Plans Include
                </h5>
                <div className="row">
                  <div className="col-md-3 col-6 mb-3 text-center">
                    <i
                      className="bi bi-shield-check text-success"
                      style={{ fontSize: "32px" }}
                    ></i>
                    <p className="small mt-2 mb-0 fw-bold">99.9% Uptime</p>
                    <small className="text-muted">Guaranteed reliability</small>
                  </div>
                  <div className="col-md-3 col-6 mb-3 text-center">
                    <i
                      className="bi bi-headset text-primary"
                      style={{ fontSize: "32px" }}
                    ></i>
                    <p className="small mt-2 mb-0 fw-bold">24/7 Support</p>
                    <small className="text-muted">Always here to help</small>
                  </div>
                  <div className="col-md-3 col-6 mb-3 text-center">
                    <i
                      className="bi bi-graph-up text-info"
                      style={{ fontSize: "32px" }}
                    ></i>
                    <p className="small mt-2 mb-0 fw-bold">
                      Real-time Analytics
                    </p>
                    <small className="text-muted">Track performance</small>
                  </div>
                  <div className="col-md-3 col-6 mb-3 text-center">
                    <i
                      className="bi bi-lightning-charge text-warning"
                      style={{ fontSize: "32px" }}
                    ></i>
                    <p className="small mt-2 mb-0 fw-bold">Instant Setup</p>
                    <small className="text-muted">Start in minutes</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Plan CTA */}
        <div className="text-center mt-5" data-aos="fade-up">
          <p className="para-blog mb-3">
            Need a custom plan? We've got you covered!
          </p>
          <Link href="/contact">
            <button
              className="btn btn-outline-primary btn-lg px-5 py-2"
              style={{ borderRadius: "30px" }}
            >
              Contact Sales
              <i className="bi bi-chat-dots ms-2"></i>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
