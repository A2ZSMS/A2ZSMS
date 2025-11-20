"use client";

import Link from "next/link";

const RcsPricing = () => {
  const pricingData = [
    {
      package: "Starter Plan",
      subtitle: "Basic RCS Messaging",
      description: "Perfect for small businesses starting with RCS messaging",
      plans: [
        { messages: "5,000 messages", price: "₹299", period: "/month" },
        { messages: "10,000 messages", price: "₹549", period: "/month" },
        { messages: "25,000 messages", price: "₹1,299", period: "/month" },
        { messages: "50,000 messages", price: "₹2,499", period: "/month" },
        { messages: "100,000 messages", price: "₹4,799", period: "/month" },
      ],
      color: "#17A2B8",
      icon: "bi-chat-square-text",
    },
    {
      package: "Business Plan",
      subtitle: "Advanced Features",
      description:
        "Ideal for growing businesses with rich media and automation",
      popular: true,
      plans: [
        { messages: "150,000 messages", price: "₹6,999", period: "/month" },
        { messages: "250,000 messages", price: "₹11,499", period: "/month" },
        { messages: "500,000 messages", price: "₹21,999", period: "/month" },
        { messages: "1,000,000 messages", price: "₹41,999", period: "/month" },
        { messages: "Unlimited messages", price: "₹79,999", period: "/month" },
      ],
      color: "#138496",
      icon: "bi-star-fill",
    },
    {
      package: "Enterprise Plan",
      subtitle: "Custom Solutions",
      description: "For large-scale operations with dedicated support",
      plans: [
        { messages: "2,000,000 messages", price: "₹79,999", period: "/month" },
        {
          messages: "5,000,000 messages",
          price: "₹1,89,999",
          period: "/month",
        },
        { messages: "10,000,000+ messages", price: "Custom", period: "" },
      ],
      color: "#0C6980",
      icon: "bi-building",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold head1 mb-3" style={{ color: "#203239" }}>
            RCS Messaging Pricing
          </h2>
          <p className="text-muted para-blog">
            Choose the perfect plan for your rich communication needs
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
                  border: category.popular ? `3px solid ${category.color}` : "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(23, 162, 184, 0.3)";
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
                        <div className="d-flex align-items-start">
                          <i
                            className="bi bi-check-circle-fill me-2 mt-1"
                            style={{ color: category.color, fontSize: "18px" }}
                          ></i>
                          <span
                            className="para-color"
                            style={{ fontSize: "14px" }}
                          >
                            {item.messages}
                          </span>
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
                        backgroundColor: "#17A2B815",
                      }}
                    >
                      <i
                        className="bi bi-image"
                        style={{ fontSize: "28px", color: "#17A2B8" }}
                      ></i>
                    </div>
                    <p
                      className="small mt-2 mb-0 fw-bold"
                      style={{ color: "#203239" }}
                    >
                      Rich Media Support
                    </p>
                    <small className="text-muted">HD images & videos</small>
                  </div>
                  <div className="col-md-3 col-6 mb-4 text-center">
                    <div
                      className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                      style={{
                        width: "60px",
                        height: "60px",
                        backgroundColor: "#13849615",
                      }}
                    >
                      <i
                        className="bi bi-patch-check-fill"
                        style={{ fontSize: "28px", color: "#138496" }}
                      ></i>
                    </div>
                    <p
                      className="small mt-2 mb-0 fw-bold"
                      style={{ color: "#203239" }}
                    >
                      Verified Sender
                    </p>
                    <small className="text-muted">Brand identity</small>
                  </div>
                  <div className="col-md-3 col-6 mb-4 text-center">
                    <div
                      className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                      style={{
                        width: "60px",
                        height: "60px",
                        backgroundColor: "#17A2B815",
                      }}
                    >
                      <i
                        className="bi bi-graph-up"
                        style={{ fontSize: "28px", color: "#17A2B8" }}
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
                        backgroundColor: "#13849615",
                      }}
                    >
                      <i
                        className="bi bi-headset"
                        style={{ fontSize: "28px", color: "#138496" }}
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
                background: "linear-gradient(135deg, #17A2B8 0%, #138496 100%)",
                color: "#fff",
                border: "none",
                borderRadius: "30px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 10px 25px rgba(23, 162, 184, 0.3)";
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

export default RcsPricing;
