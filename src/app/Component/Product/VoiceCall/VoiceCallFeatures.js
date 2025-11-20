"use client";

const voiceFeatures = [
  {
    id: 1,
    title: "IVR (Interactive Voice Response)",
    description:
      "Create smart, multi-level IVR systems with press-to-action options. Guide callers through menus, collect inputs, and provide self-service support 24/7 without human intervention.",
    icon: "bi-telephone-fill",
    color: "#007BFF",
  },
  {
    id: 2,
    title: "Text-to-Speech Technology",
    description:
      "Convert any text message into natural-sounding voice calls instantly. Support for multiple languages and accents ensures personalized communication with diverse audiences.",
    icon: "bi-mic-fill",
    color: "#28A745",
  },
  {
    id: 3,
    title: "Call Scheduling",
    description:
      "Schedule voice broadcasts for specific dates and times. Perfect for appointment reminders, event notifications, and time-sensitive alerts delivered exactly when needed.",
    icon: "bi-calendar-event-fill",
    color: "#FD7E14",
  },
  {
    id: 4,
    title: "Real-Time Analytics",
    description:
      "Track call delivery, answer rates, duration, and customer responses in real-time. Get detailed reports to measure campaign effectiveness and optimize future strategies.",
    icon: "bi-graph-up-arrow",
    color: "#DC3545",
  },
  {
    id: 5,
    title: "Number Masking",
    description:
      "Protect customer privacy with number masking. Connect two parties without revealing personal phone numbers - ideal for delivery, ride-sharing, and service platforms.",
    icon: "bi-shield-lock-fill",
    color: "#6610F2",
  },
  {
    id: 6,
    title: "Call Recording",
    description:
      "Record and store voice calls for quality assurance, compliance, and training purposes. Playback conversations anytime to improve service quality and resolve disputes.",
    icon: "bi-record-circle-fill",
    color: "#20C997",
  },
  {
    id: 7,
    title: "Multi-Language Support",
    description:
      "Reach diverse audiences with support for 15+ languages and regional accents. Automatically detect caller language or let them choose for personalized communication.",
    icon: "bi-translate",
    color: "#FFC107",
  },
  {
    id: 8,
    title: "Bulk Voice Broadcasting",
    description:
      "Send thousands of pre-recorded voice messages simultaneously. Ideal for emergency alerts, political campaigns, promotional announcements, and mass notifications.",
    icon: "bi-broadcast",
    color: "#E83E8C",
  },
];

const VoiceCallFeatures = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold head1" style={{ color: "#203239" }}>
            Advanced Voice Features
          </h2>
          <p className="text-muted para-blog mt-3">
            Automate, personalize, and scale your communications
          </p>
        </div>

        <div className="row g-4">
          {voiceFeatures.map((feature, index) => (
            <div
              key={feature.id}
              className="col-md-6 col-lg-3"
              data-aos="zoom-in"
              data-aos-delay={index * 50}
            >
              <div
                className="card h-100 border-0 shadow-sm text-center"
                style={{
                  borderRadius: "15px",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
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
                <div className="card-body p-4">
                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: "70px",
                      height: "70px",
                      backgroundColor: feature.color + "15",
                    }}
                  >
                    <i
                      className={`bi ${feature.icon}`}
                      style={{ fontSize: "32px", color: feature.color }}
                    ></i>
                  </div>
                  <h5 className="fw-bold mb-3" style={{ color: "#203239" }}>
                    {feature.title}
                  </h5>
                  <p className="text-muted small mb-0">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="row mt-5" data-aos="fade-up">
          <div className="col-12">
            <div
              className="card border-0 shadow-sm"
              style={{ borderRadius: "15px", backgroundColor: "#F0F8FF" }}
            >
              <div className="card-body p-4">
                <h4
                  className="fw-bold text-center mb-4"
                  style={{ color: "#203239" }}
                >
                  Why Choose Voice Calls?
                </h4>
                <div className="row">
                  <div className="col-md-3 col-6 mb-3 text-center">
                    <i
                      className="bi bi-speedometer2 text-primary"
                      style={{ fontSize: "32px" }}
                    ></i>
                    <p className="small mb-0 mt-2 fw-bold">Instant Delivery</p>
                    <small className="text-muted">
                      Reach customers in seconds
                    </small>
                  </div>
                  <div className="col-md-3 col-6 mb-3 text-center">
                    <i
                      className="bi bi-people-fill text-success"
                      style={{ fontSize: "32px" }}
                    ></i>
                    <p className="small mb-0 mt-2 fw-bold">Personal Touch</p>
                    <small className="text-muted">
                      Human-like voice interaction
                    </small>
                  </div>
                  <div className="col-md-3 col-6 mb-3 text-center">
                    <i
                      className="bi bi-graph-up text-warning"
                      style={{ fontSize: "32px" }}
                    ></i>
                    <p className="small mb-0 mt-2 fw-bold">
                      High Response Rate
                    </p>
                    <small className="text-muted">70%+ answer rate</small>
                  </div>
                  <div className="col-md-3 col-6 mb-3 text-center">
                    <i
                      className="bi bi-currency-rupee text-info"
                      style={{ fontSize: "32px" }}
                    ></i>
                    <p className="small mb-0 mt-2 fw-bold">Cost Effective</p>
                    <small className="text-muted">
                      Pay only for connected calls
                    </small>
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

export default VoiceCallFeatures;
