import React from "react";

const WebsiteBenefits = () => {
  const benefits = [
    {
      icon: "bi-globe",
      title: "24/7 Global Presence",
      description:
        "Your business never sleeps. A website works round-the-clock, reaching customers worldwide while you focus on what matters most.",
      color: "primary",
    },
    {
      icon: "bi-graph-up-arrow",
      title: "Instant Credibility Boost",
      description:
        "In today's digital world, customers expect businesses to have a professional online presence. A quality website instantly builds trust and authority.",
      color: "success",
    },
    {
      icon: "bi-people-fill",
      title: "Expand Your Customer Base",
      description:
        "Reach customers beyond your physical location. A website opens doors to new markets and demographics you never thought possible.",
      color: "info",
    },
    {
      icon: "bi-currency-dollar",
      title: "Increase Revenue Streams",
      description:
        "Generate sales, leads, and inquiries automatically. Your website becomes your most efficient salesperson, working 24/7 without breaks.",
      color: "warning",
    },
    {
      icon: "bi-speedometer2",
      title: "Cost-Effective Marketing",
      description:
        "Traditional advertising costs thousands monthly. A website provides permanent, scalable marketing that pays for itself within months.",
      color: "danger",
    },
    {
      icon: "bi-shield-check",
      title: "Own Your Digital Space",
      description:
        "Stop relying on social media platforms you don't control. A website gives you complete ownership of your online presence and customer data.",
      color: "dark",
    },
  ];

  return (
    <section className="py-5 bg-light position-relative">
      <div className="container">
        {/* Header Section */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <span className="badge bg-primary-subtle text-primary px-4 py-2 rounded-pill mb-3 fs-6">
              Digital Success Awaits
            </span>
            <h2 className="display-4 fw-bold text-dark mb-4">
              Why Every Business Needs a
              <span className="text-primary"> Professional Website</span>
            </h2>
            <p className="lead text-muted">
              Whether you're a small startup or an established enterprise, a
              website isn't just an option anymore— it's essential for survival
              and growth in today's competitive market.
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="row g-4 mb-5">
          {benefits.map((benefit, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm h-100 hover-lift transition-smooth">
                <div className="card-body p-4 text-center">
                  <div
                    className={`bg-${benefit.color}-subtle rounded-circle d-inline-flex align-items-center justify-content-center mb-4`}
                    style={{ width: "80px", height: "80px" }}
                  >
                    <i
                      className={`${benefit.icon} text-${benefit.color} fs-1`}
                    ></i>
                  </div>
                  <h4 className="fw-bold text-dark mb-3">{benefit.title}</h4>
                  <p className="text-muted mb-0 lh-lg">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reality Check Section */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="bg-gradient-primary rounded-4 p-5 text-white text-center shadow-lg">
              <h3 className="fw-bold mb-4">
                The Hard Truth About Today's Market
              </h3>
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="border-end border-white border-opacity-25 pe-4">
                    <h2 className="fw-bold text-warning">89%</h2>
                    <p className="mb-0">
                      of consumers research businesses online before visiting or
                      purchasing
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="border-end border-white border-opacity-25 pe-4">
                    <h2 className="fw-bold text-warning">75%</h2>
                    <p className="mb-0">
                      judge business credibility based on website design quality
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <h2 className="fw-bold text-warning">57%</h2>
                  <p className="mb-0">
                    won't recommend a business with poor mobile website
                    experience
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <p className="fs-5 fw-semibold mb-0">
                  Your competitors already know this. Don't let them get ahead
                  while you're still thinking about it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1) !important;
        }

        .transition-smooth {
          transition: all 0.3s ease;
        }

        .bg-gradient-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
      `}</style>
    </section>
  );
};

export default WebsiteBenefits;
