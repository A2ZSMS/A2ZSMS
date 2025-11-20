"use client";

const bulkSmsUseCases = [
  {
    id: 1,
    industry: "E-Commerce & Retail",
    icon: "bi-cart-check-fill",
    color: "#FF6B6B",
    useCases: [
      "Flash sale and limited-time offer alerts",
      "Order tracking and delivery notifications",
      "Product back-in-stock alerts",
      "Customer loyalty program updates",
      "Seasonal promotions and discounts",
    ],
    impact: "70% open rate within 3 minutes",
  },
  {
    id: 2,
    industry: "Banking & Finance",
    icon: "bi-bank2",
    color: "#4ECDC4",
    useCases: [
      "Transaction alerts and confirmations",
      "Account balance notifications",
      "Payment due date reminders",
      "Fraud alerts and security updates",
      "Loan approval status updates",
    ],
    impact: "99.9% delivery success rate",
  },
  {
    id: 3,
    industry: "Education",
    icon: "bi-book-fill",
    color: "#95E1D3",
    useCases: [
      "Exam schedule and result notifications",
      "Attendance alerts to parents",
      "Fee payment reminders",
      "Event and activity announcements",
      "Emergency school closure alerts",
    ],
    impact: "95% parent engagement",
  },
  {
    id: 4,
    industry: "Healthcare",
    icon: "bi-heart-pulse-fill",
    color: "#F38181",
    useCases: [
      "Appointment reminders to patients",
      "Prescription refill notifications",
      "Lab test result availability alerts",
      "Health checkup campaign messages",
      "Emergency health tips and alerts",
    ],
    impact: "65% reduction in no-shows",
  },
  {
    id: 5,
    industry: "Real Estate",
    icon: "bi-building-fill",
    color: "#AA96DA",
    useCases: [
      "New property listing alerts",
      "Site visit appointment confirmations",
      "EMI payment reminders",
      "Property document submission alerts",
      "Exclusive pre-launch offers",
    ],
    impact: "3x faster lead response",
  },
  {
    id: 6,
    industry: "Logistics & Delivery",
    icon: "bi-truck",
    color: "#FCBAD3",
    useCases: [
      "Package pickup confirmations",
      "Real-time delivery tracking updates",
      "Delivery attempt notifications",
      "Driver contact information sharing",
      "Successful delivery confirmations",
    ],
    impact: "50% reduction in support calls",
  },
];

const BulkSmsUseCases = () => {
  return (
    <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold head1" style={{ color: "#203239" }}>
            Industry Solutions
          </h2>
          <p className="text-muted para-blog mt-3">
            Reach your customers instantly across all sectors
          </p>
        </div>

        <div className="row g-4">
          {bulkSmsUseCases.map((useCase, index) => (
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
            Ready to boost your business communication?
          </p>
          <a
            href="/request-demo"
            className="btn btn-primary btn-lg px-5 py-3"
            style={{ borderRadius: "30px" }}
          >
            Start Sending SMS Today
            <i className="bi bi-arrow-right ms-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BulkSmsUseCases;
