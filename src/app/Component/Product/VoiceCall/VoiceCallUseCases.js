"use client";

const voiceCallUseCases = [
  {
    id: 1,
    industry: "Banking & Finance",
    icon: "bi-bank2",
    color: "#007BFF",
    useCases: [
      "OTP verification via automated voice calls",
      "Payment due reminders and alerts",
      "Fraud detection and security alerts",
      "Loan approval and status notifications",
      "Account balance and transaction alerts",
    ],
    impact: "99.5% OTP delivery rate",
  },
  {
    id: 2,
    industry: "Healthcare",
    icon: "bi-heart-pulse-fill",
    color: "#DC3545",
    useCases: [
      "Appointment reminders to reduce no-shows",
      "Prescription refill notifications",
      "Lab test result availability alerts",
      "Emergency health alerts and notifications",
      "Vaccination appointment confirmations",
    ],
    impact: "75% reduction in no-shows",
  },
  {
    id: 3,
    industry: "Education",
    icon: "bi-book-fill",
    color: "#28A745",
    useCases: [
      "Emergency school closure announcements",
      "Exam schedule and result notifications",
      "Fee payment reminders to parents",
      "Event and PTM meeting reminders",
      "Attendance alerts for absent students",
    ],
    impact: "90% parent reach rate",
  },
  {
    id: 4,
    industry: "E-Commerce & Retail",
    icon: "bi-cart-check-fill",
    color: "#FD7E14",
    useCases: [
      "Order confirmation and dispatch alerts",
      "Delivery attempt notifications",
      "Flash sale and limited-time offers",
      "Customer feedback and survey calls",
      "Cart abandonment recovery calls",
    ],
    impact: "40% increase in conversions",
  },
  {
    id: 5,
    industry: "Logistics & Delivery",
    icon: "bi-truck",
    color: "#6610F2",
    useCases: [
      "Package pickup confirmations",
      "Real-time delivery status updates",
      "Failed delivery attempt alerts",
      "Customer address verification calls",
      "Driver location and ETA updates",
    ],
    impact: "60% reduction in failed deliveries",
  },
  {
    id: 6,
    industry: "Government & Public Services",
    icon: "bi-building-fill-gear",
    color: "#20C997",
    useCases: [
      "Emergency disaster alerts and warnings",
      "Election and voting reminders",
      "Public service announcements",
      "Citizen grievance status updates",
      "Utility bill payment reminders",
    ],
    impact: "Reach millions instantly",
  },
];

const VoiceCallUseCases = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold head1" style={{ color: "#203239" }}>
            Industry Solutions
          </h2>
          <p className="text-muted para-blog mt-3">
            Connect with your audience through automated voice messaging
          </p>
        </div>

        <div className="row g-4">
          {voiceCallUseCases.map((useCase, index) => (
            <div
              key={useCase.id}
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className="card h-100 border-0 shadow-sm"
                style={{
                  borderRadius: "15px",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{
                        width: "60px",
                        height: "60px",
                        backgroundColor: useCase.color + "20",
                      }}
                    >
                      <i
                        className={`bi ${useCase.icon}`}
                        style={{ fontSize: "28px", color: useCase.color }}
                      ></i>
                    </div>
                    <h5 className="fw-bold mb-0" style={{ color: "#203239" }}>
                      {useCase.industry}
                    </h5>
                  </div>

                  <ul className="list-unstyled mb-3">
                    {useCase.useCases.map((item, i) => (
                      <li key={i} className="mb-2 para-color">
                        <i className="bi bi-check-circle-fill text-primary me-2"></i>
                        <small>{item}</small>
                      </li>
                    ))}
                  </ul>

                  <div
                    className="mt-3 p-2 text-center"
                    style={{
                      backgroundColor: useCase.color + "15",
                      borderRadius: "8px",
                    }}
                  >
                    <small className="fw-bold" style={{ color: useCase.color }}>
                      <i className="bi bi-graph-up-arrow me-1"></i>
                      {useCase.impact}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5" data-aos="fade-up">
          <p className="para-blog mb-3">
            Ready to reach your customers with voice?
          </p>
          <a
            href="/request-demo"
            className="btn btn-primary btn-lg px-5 py-3"
            style={{ borderRadius: "30px" }}
          >
            Get Started Today
            <i className="bi bi-arrow-right ms-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default VoiceCallUseCases;
