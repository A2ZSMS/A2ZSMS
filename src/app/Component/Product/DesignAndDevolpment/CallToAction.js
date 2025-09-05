import React from "react";

const CallToAction = () => {
  const urgencyFactors = [
    {
      icon: "bi-clock-fill",
      title: "Every Day Counts",
      description: "Your competitors are capturing customers online right now",
      color: "danger",
    },
    {
      icon: "bi-speedometer2",
      title: "Market Opportunity",
      description:
        "Digital commerce grows 15% year-over-year while traditional retail stagnates",
      color: "success",
    },
    {
      icon: "bi-people-fill",
      title: "Customer Expectations",
      description:
        "89% of consumers research businesses online before making any purchase decision",
      color: "warning",
    },
  ];

  const guarantees = [
    "100% Satisfaction Guarantee",
    "On-Time Delivery Promise",
    "Free Revisions Until Perfect",
    "Lifetime Technical Support",
    "Mobile-Responsive Guarantee",
    "SEO-Optimized Foundation",
  ];

  return (
    <section className="py-5 shadow bg-light position-relative overflow-hidden border-top">
      {/* Animated Background Elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100">
        <div className="floating-element position-absolute top-25 start-10 opacity-20">
          <i
            className="bi bi-laptop text-secondary"
            style={{ fontSize: "8rem" }}
          ></i>
        </div>
        <div className="floating-element position-absolute top-75 end-10 opacity-20">
          <i className="bi bi-phone text-dark" style={{ fontSize: "6rem" }}></i>
        </div>
        <div className="floating-element position-absolute top-50 start-50 opacity-10">
          <i
            className="bi bi-globe text-secondary"
            style={{ fontSize: "10rem" }}
          ></i>
        </div>
      </div>

      <div className="container position-relative">
        {/* Main CTA Section */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-10">
            <h2 className="display-5 fw-bold mb-4">
              Stop Losing Customers to{" "}
              <span className="text-success">
                Competitors With Better Websites
              </span>
            </h2>
            <p className="lead mb-5 fs-4">
              Every day without a professional website, you're sending potential
              customers directly to your competitors. The question isn't whether
              you need a website—it's how quickly you can get one that drives
              real results.
            </p>

            {/* Urgency Factors */}
            <div className="row g-4 mb-5">
              {urgencyFactors.map((factor, index) => (
                <div key={index} className="col-lg-4">
                  <div className="bg-light shadow bg-opacity-10 rounded-4 p-4 backdrop-blur hover-lift">
                    <i
                      className={`${factor.icon} text-${factor.color} fs-1 mb-3`}
                    ></i>
                    <h5 className="fw-bold text-dark mb-3">{factor.title}</h5>
                    <p className="text-dark mb-0">{factor.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Section */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="bg-light rounded-4 p-5 shadow-lg text-dark text-center">
              <h3 className="fw-bold mb-4">Get Started Today - Risk Free</h3>

              {/* Guarantees Grid */}
              <div className="row g-3 mb-4">
                {guarantees.map((guarantee, index) => (
                  <div key={index} className="col-lg-6 col-md-6">
                    <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                      <i className="bi bi-patch-check-fill text-success fs-5 me-2"></i>
                      <span className="fw-semibold">{guarantee}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pricing Teaser */}
              <div className="bg-light rounded-3 p-4 mb-4">
                <div className="row align-items-center">
                  <div className="col-md-8 text-start">
                    <h5 className="fw-bold mb-2">
                      Limited Time: Free Strategy Session
                    </h5>
                    <p className="text-muted mb-0">
                      Worth $500 - Get expert analysis of your current online
                      presence and a customized growth strategy for your
                      business.
                    </p>
                  </div>
                  <div className="col-md-4 text-center">
                    <span className="badge bg-success fs-6 px-3 py-2">
                      Save $500
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center mb-4">
                <button className="btn btn-primary px-md-5 py-md-3 rounded-pill fw-semibold">
                  <i className="bi bi-rocket-takeoff me-2"></i>
                  Start My Website Project Now
                </button>
                <button className="btn btn-outline-primary  px-md-5 py-md-3 rounded-pill fw-semibold">
                  <i className="bi bi-calendar-check me-2"></i>
                  Book Free Consultation
                </button>
              </div>

              {/* Contact Information */}
              <div className="row g-3 text-center">
                <div className="col-md-4">
                  <div className="d-flex align-items-center justify-content-center">
                    <i className="bi bi-telephone-fill text-primary me-2"></i>
                    <span className="fw-semibold">Call: +91 84310 86185</span>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="d-flex align-items-center justify-content-center">
                    <i className="bi bi-envelope-fill text-primary me-2"></i>
                    <span className="fw-semibold">Email: sales@a2zsms.com</span>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="d-flex align-items-center justify-content-center">
                    <i className="bi bi-whatsapp text-success me-2"></i>
                    <span className="fw-semibold">
                      WhatsApp: Quick Response
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="row justify-content-center mt-5">
          <div className="col-lg-10 text-center">
            <h4 className="fw-bold text-secondary mb-4">
              Join Hundreds of Successful Businesses
            </h4>
            <div className="row g-4">
              <div className="col-md-3 col-6">
                <div className="bg-white shadow  bg-opacity-10 rounded-3 p-3 backdrop-blur">
                  <h3 className="fw-bold text-success mb-1">500+</h3>
                  <small className="text-dark">Websites Delivered</small>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="bg-white shadow bg-opacity-10 rounded-3 p-3 backdrop-blur">
                  <h3 className="fw-bold text-success mb-1">98%</h3>
                  <small className="text-dark">Client Satisfaction</small>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="bg-white shadow bg-opacity-10 rounded-3 p-3 backdrop-blur">
                  <h3 className="fw-bold text-success mb-1">15+</h3>
                  <small className="text-dark">Years Experience</small>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="bg-white shadow bg-opacity-10 rounded-3 p-3 backdrop-blur">
                  <h3 className="fw-bold text-success mb-1">24/7</h3>
                  <small className="text-dark">Support Available</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final Urgency Message */}
        <div className="row justify-content-center mt-5">
          <div className="col-lg-8 text-center">
            <div className="alert alert-success border-0 shadow-lg">
              <div className="d-flex align-items-center justify-content-center">
                <i className="bi bi-exclamation-triangle-fill text-success fs-3 me-3"></i>
                <div className="text-start">
                  <h6 className="fw-bold text-dark mb-1">
                    Don't Wait Until Tomorrow
                  </h6>
                  <p className="text-dark mb-0">
                    Your competitors are already online capturing your potential
                    customers. Every day you delay is revenue walking out the
                    door.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-gradient-cta {
          background: linear-gradient(
            135deg,
            #667eea 0%,
            #764ba2 50%,
            #f093fb 100%
          );
        }

        .floating-element {
          animation: float 8s ease-in-out infinite;
        }

        .floating-element:nth-child(2) {
          animation-delay: 2s;
        }

        .floating-element:nth-child(3) {
          animation-delay: 4s;
        }

        .backdrop-blur {
          backdrop-filter: blur(10px);
        }

        .hover-lift {
          transition: transform 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-10px);
        }

        .transition-smooth {
          transition: all 0.3s ease;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
      `}</style>
    </section>
  );
};

export default CallToAction;
