"use client";

const TrustBadges = () => {
  const badges = [
    {
      id: 1,
      title: "Meta Business Partner",
      description: "Official WhatsApp Business Solution Provider",
      icon: "bi-patch-check-fill",
      color: "#25D366",
    },
    {
      id: 2,
      title: "ISO 27001 Certified",
      description: "Information Security Management",
      icon: "bi-shield-fill-check",
      color: "#0066CC",
    },
    {
      id: 3,
      title: "GDPR Compliant",
      description: "Data Protection & Privacy",
      icon: "bi-lock-fill",
      color: "#6C757D",
    },
    {
      id: 4,
      title: "99.9% Uptime SLA",
      description: "Guaranteed Service Reliability",
      icon: "bi-speedometer2",
      color: "#28A745",
    },
    {
      id: 5,
      title: "PCI DSS Compliant",
      description: "Payment Card Industry Data Security",
      icon: "bi-credit-card-2-front-fill",
      color: "#FFC107",
    },
    {
      id: 6,
      title: "24/7 Support",
      description: "Round-the-clock Expert Assistance",
      icon: "bi-headset",
      color: "#DC3545",
    },
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container">
        {/* Trust Badges Grid */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold head1" style={{ color: "#203239" }}>
            Security & Compliance
          </h2>
          <p className="text-muted para-blog mt-3">
            Enterprise-grade security with industry-leading certifications
          </p>
        </div>

        <div className="row g-4 mb-5">
          {badges.map((badge, index) => (
            <div
              key={badge.id}
              className="col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className="card border-0 shadow-sm h-100"
                style={{
                  borderRadius: "12px",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 25px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                <div className="card-body p-4 text-center">
                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: "70px",
                      height: "70px",
                      backgroundColor: badge.color + "15",
                    }}
                  >
                    <i
                      className={`bi ${badge.icon}`}
                      style={{ fontSize: "32px", color: badge.color }}
                    ></i>
                  </div>
                  <h5 className="fw-bold mb-2" style={{ color: "#203239" }}>
                    {badge.title}
                  </h5>
                  <p className="text-muted small mb-0">{badge.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Security Features */}
        <div className="row mt-4" data-aos="fade-up">
          <div className="col-12">
            <div
              className="card border-0 shadow-sm"
              style={{ borderRadius: "15px", backgroundColor: "#f8f9fa" }}
            >
              <div className="card-body p-4">
                <h5
                  className="fw-bold text-center mb-4"
                  style={{ color: "#203239" }}
                >
                  Data Protection Standards
                </h5>
                <div className="d-flex flex-wrap justify-content-center gap-4">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-shield-lock-fill text-success me-2 fs-5"></i>
                    <span className="para-color">End-to-End Encryption</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-database-lock text-success me-2 fs-5"></i>
                    <span className="para-color">Secure Data Storage</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-fingerprint text-success me-2 fs-5"></i>
                    <span className="para-color">
                      Two-Factor Authentication
                    </span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-file-earmark-lock2-fill text-success me-2 fs-5"></i>
                    <span className="para-color">GDPR & Privacy Compliant</span>
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

export default TrustBadges;
