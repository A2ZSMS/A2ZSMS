"use client";

const IntegrationShowcase = () => {
  const integrations = [
    {
      category: "CRM Systems",
      platforms: [
        { name: "Salesforce", icon: "bi-cloud-fill", color: "#00A1E0" },
        { name: "HubSpot", icon: "bi-graph-up", color: "#FF7A59" },
        { name: "Zoho CRM", icon: "bi-briefcase-fill", color: "#E42527" },
        { name: "Freshworks", icon: "bi-box-fill", color: "#00C9A7" },
      ],
    },
    {
      category: "E-Commerce",
      platforms: [
        { name: "Shopify", icon: "bi-bag-fill", color: "#96BF48" },
        { name: "WooCommerce", icon: "bi-wordpress", color: "#96588A" },
        { name: "Magento", icon: "bi-cart4", color: "#EE672F" },
        { name: "BigCommerce", icon: "bi-shop", color: "#121118" },
      ],
    },
    {
      category: "Payment Gateways",
      platforms: [
        { name: "Razorpay", icon: "bi-credit-card-fill", color: "#3395FF" },
        { name: "PayPal", icon: "bi-paypal", color: "#00457C" },
        { name: "Stripe", icon: "bi-stripe", color: "#635BFF" },
        { name: "Paytm", icon: "bi-wallet2", color: "#00BAF2" },
      ],
    },
    {
      category: "Marketing Tools",
      platforms: [
        { name: "Mailchimp", icon: "bi-envelope-fill", color: "#FFE01B" },
        { name: "Google Analytics", icon: "bi-google", color: "#E37400" },
        { name: "Meta Ads", icon: "bi-facebook", color: "#0668E1" },
        { name: "Zapier", icon: "bi-lightning-fill", color: "#FF4A00" },
      ],
    },
    {
      category: "Custom APIs",
      platforms: [
        { name: "REST API", icon: "bi-code-slash", color: "#61DAFB" },
        { name: "Webhooks", icon: "bi-link-45deg", color: "#4CAF50" },
        { name: "Node.js", icon: "bi-braces", color: "#68A063" },
        { name: "Python", icon: "bi-filetype-py", color: "#3776AB" },
      ],
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold head1" style={{ color: "#203239" }}>
            Seamless Integrations
          </h2>
          <p className="text-muted para-blog mt-3">
            Connect with 100+ platforms and streamline your workflow
          </p>
        </div>

        {/* Integration Categories */}
        {integrations.map((integration, catIndex) => (
          <div
            key={catIndex}
            className="mb-5"
            data-aos="fade-up"
            data-aos-delay={catIndex * 100}
          >
            <h4
              className="fw-bold mb-4 text-center text-md-start"
              style={{ color: "#203239" }}
            >
              <i className="bi bi-plug-fill text-success me-2"></i>
              {integration.category}
            </h4>
            <div className="row g-3">
              {integration.platforms.map((platform, platIndex) => (
                <div key={platIndex} className="col-6 col-md-3">
                  <div
                    className="card border-0 shadow-sm h-100"
                    style={{
                      borderRadius: "12px",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-5px)";
                      e.currentTarget.style.borderColor = platform.color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.borderColor = "";
                    }}
                  >
                    <div className="card-body text-center p-3">
                      <div
                        className="rounded-circle d-inline-flex align-items-center justify-content-center mb-2"
                        style={{
                          width: "50px",
                          height: "50px",
                          backgroundColor: platform.color + "15",
                        }}
                      >
                        <i
                          className={`bi ${platform.icon}`}
                          style={{ fontSize: "24px", color: platform.color }}
                        ></i>
                      </div>
                      <p
                        className="mb-0 fw-bold small"
                        style={{ color: "#203239" }}
                      >
                        {platform.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Integration Features */}
        <div
          className="card border-0 shadow-sm mt-5"
          style={{ borderRadius: "15px" }}
          data-aos="fade-up"
        >
          <div className="card-body p-4">
            <h5
              className="fw-bold text-center mb-4"
              style={{ color: "#203239" }}
            >
              Integration Benefits
            </h5>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="text-center">
                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "#25D36620",
                    }}
                  >
                    <i
                      className="bi bi-lightning-charge-fill"
                      style={{ fontSize: "28px", color: "#25D366" }}
                    ></i>
                  </div>
                  <h6 className="fw-bold" style={{ color: "#203239" }}>
                    Quick Setup
                  </h6>
                  <p className="text-muted small">
                    Get integrated in minutes, not days. Our API is designed for
                    speed.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center">
                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "#007BFF20",
                    }}
                  >
                    <i
                      className="bi bi-book-fill"
                      style={{ fontSize: "28px", color: "#007BFF" }}
                    ></i>
                  </div>
                  <h6 className="fw-bold" style={{ color: "#203239" }}>
                    Clear Documentation
                  </h6>
                  <p className="text-muted small">
                    Step-by-step guides and code examples for every platform.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center">
                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "#FFC10720",
                    }}
                  >
                    <i
                      className="bi bi-headset"
                      style={{ fontSize: "28px", color: "#FFC107" }}
                    ></i>
                  </div>
                  <h6 className="fw-bold" style={{ color: "#203239" }}>
                    Developer Support
                  </h6>
                  <p className="text-muted small">
                    Our technical team is ready to help you with any
                    integration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-5" data-aos="fade-up">
          <p className="para-blog mb-3">
            Don't see your platform? We can build custom integrations!
          </p>
          <a
            href="/contact"
            className="btn btn-outline-success btn-lg px-5 py-2"
            style={{ borderRadius: "30px" }}
          >
            Talk to Our Integration Experts
            <i className="bi bi-arrow-right ms-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default IntegrationShowcase;
