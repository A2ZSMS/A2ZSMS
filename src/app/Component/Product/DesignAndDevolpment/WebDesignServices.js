import Link from "next/link";
import React from "react";

const WebDesignServices = () => {
  const designTypes = [
    {
      icon: "bi-layout-text-window",
      title: "Static Websites",
      description:
        "Perfect for businesses needing professional online presence with essential information, contact details, and service showcases.",
      features: [
        "Lightning-fast loading",
        "SEO optimized",
        "Mobile responsive",
        "Easy maintenance",
      ],
    },
    {
      icon: "bi-gear-fill",
      title: "Dynamic Websites",
      description:
        "Interactive platforms with real-time content updates, user dashboards, and advanced functionality for growing businesses.",
      features: [
        "Interactive features",
        "Content management",
        "User accounts",
        "Real-time updates",
      ],
    },
    {
      icon: "bi-cart-fill",
      title: "E-commerce Solutions",
      description:
        "Complete online stores with secure payment gateways, inventory management, and customer relationship tools.",
      features: [
        "Payment integration",
        "Inventory tracking",
        "Customer analytics",
        "Mobile commerce",
      ],
    },
  ];

  return (
    <section className="py-5 bg-white position-relative overflow-hidden">
      {/* Background Pattern */}
      <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10">
        <div className="pattern-dots"></div>
      </div>

      <div className="container position-relative aos">
        <div className="row align-items-center mb-5">
          {/* Content Section */}
          <div className="col-lg-6 order-lg-1 order-2" data-aos="fade-right">
            <span className="badge bg-success-subtle text-success px-4 py-2 rounded-pill mb-3 fs-6">
              Design Excellence
            </span>
            <h2 className="display-5 fw-bold text-dark mb-4">
              Comprehensive Website Design for
              <span className="text-success d-block">Every Business Need</span>
            </h2>
            <p className="lead text-muted mb-4">
              At A2Z SMS, we understand that every business is unique. That's
              why we offer three distinct website categories, each designed to
              solve specific business challenges and maximize your online
              potential.
            </p>
            <p className="text-muted mb-4">
              Our award-winning design process combines creativity with
              strategy, ensuring your website not only looks spectacular but
              also drives conversions, builds trust, and grows your business. We
              don't just build websites—we create digital experiences that
              transform visitors into loyal customers.
            </p>

            {/* Key Promises */}
            <div className="row g-3 mb-4 ">
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  <span className="fw-semibold">100% Custom Design</span>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  <span className="fw-semibold">Fast Delivery</span>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  <span className="fw-semibold">SEO Optimized</span>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  <span className="fw-semibold">Lifetime Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div
            className="col-lg-6 order-lg-2 order-1 text-center mb-4 mb-lg-0"
            data-aos="fade-left"
          >
            <div className="position-relative">
              <img
                src="/image/product/website.png"
                alt="Professional Website Design Services"
                className="img-fluid rounded-4 shadow-lg"
                style={{ maxHeight: "500px" }}
              />
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient rounded-4 opacity-20"></div>
            </div>
          </div>
        </div>

        {/* Website Types Section */}
        <div className="row g-4 py-5 aos">
          {designTypes.map((type, index) => (
            <div key={index} className="col-lg-4" data-aos="zoom-out">
              <div className="card border-0 shadow h-100 hover-card">
                <div className="card-body p-4">
                  <div className="text-center mb-4">
                    <div
                      className="bg-primary-subtle rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                      style={{ width: "70px", height: "70px" }}
                    >
                      <i className={`${type.icon} text-primary fs-2`}></i>
                    </div>
                    <h4 className="fw-bold text-dark">{type.title}</h4>
                  </div>

                  <p className="text-muted mb-4">{type.description}</p>

                  <ul className="list-unstyled">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="d-flex align-items-center mb-2">
                        <i className="bi bi-arrow-right-circle-fill text-primary me-2"></i>
                        <span className="text-dark">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4">
                    <Link
                      href="/contact/"
                      className="btn btn-outline-primary w-100 rounded-pill"
                    >
                      Know More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="row justify-content-center mt-5 oas">
          <div className="col-lg-8 text-center" data-aos="fade-in">
            <div className="bg-light rounded-4 p-5">
              <h3 className="fw-bold text-dark mb-3">
                Ready to Stand Out Online?
              </h3>
              <p className="text-muted mb-4">
                Don't let your competitors capture your potential customers.
                Every day without a professional website is a day of lost
                opportunities and revenue.
              </p>
              <Link
                href="/contact"
                className="btn btn-success px-md-5 py-md-3 rounded-pill fw-semibold"
              >
                <i className="bi bi-chat-dots-fill me-2"></i>
                Get Your Free Design Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .pattern-dots {
          background-image: radial-gradient(
            circle,
            #dee2e6 1px,
            transparent 1px
          );
          background-size: 20px 20px;
          width: 100%;
          height: 100%;
        }

        .bg-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .hover-card {
          transition: all 0.3s ease;
        }

        .hover-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1) !important;
        }
      `}</style>
    </section>
  );
};

export default WebDesignServices;
