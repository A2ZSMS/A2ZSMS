"use client";

const useCasesData = [
  {
    id: 1,
    industry: "E-Commerce & Retail",
    icon: "bi-cart-check-fill",
    color: "#FF6B6B",
    useCases: [
      "Order confirmations and shipping updates",
      "Abandoned cart recovery messages",
      "New product launch notifications",
      "Personalized offers and discount codes",
      "Customer feedback collection",
    ],
    impact: "45% increase in cart recovery",
  },
  {
    id: 2,
    industry: "Healthcare",
    icon: "bi-heart-pulse-fill",
    color: "#4ECDC4",
    useCases: [
      "Appointment reminders and confirmations",
      "Prescription refill alerts",
      "Health tips and wellness updates",
      "Lab report delivery",
      "Telemedicine consultation booking",
    ],
    impact: "60% reduction in no-shows",
  },
  {
    id: 3,
    industry: "Education",
    icon: "bi-book-fill",
    color: "#95E1D3",
    useCases: [
      "Class schedule and exam notifications",
      "Assignment reminders and deadlines",
      "Fee payment reminders",
      "Result announcements",
      "Parent-teacher communication",
    ],
    impact: "80% parent engagement rate",
  },
  {
    id: 4,
    industry: "Real Estate",
    icon: "bi-building-fill",
    color: "#F38181",
    useCases: [
      "Property listing updates",
      "Site visit scheduling",
      "Document submission reminders",
      "EMI payment alerts",
      "Virtual property tours",
    ],
    impact: "5x lead conversion rate",
  },
  {
    id: 5,
    industry: "Banking & Finance",
    icon: "bi-bank2",
    color: "#AA96DA",
    useCases: [
      "Transaction alerts and OTP delivery",
      "Loan application status updates",
      "Credit card payment reminders",
      "Investment opportunities",
      "Account statement delivery",
    ],
    impact: "99.9% OTP delivery rate",
  },
  {
    id: 6,
    industry: "Travel & Hospitality",
    icon: "bi-airplane-fill",
    color: "#FCBAD3",
    useCases: [
      "Booking confirmations and e-tickets",
      "Flight/hotel check-in reminders",
      "Itinerary updates and changes",
      "Travel insurance offers",
      "Post-trip feedback requests",
    ],
    impact: "90% customer satisfaction",
  },
];

const UseCases = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold head1" style={{ color: "#203239" }}>
            Industry Solutions
          </h2>
          <p className="text-muted para-blog mt-3">
            Powering business communication across all sectors
          </p>
        </div>

        <div className="row g-4">
          {useCasesData.map((useCase, index) => (
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
                  {/* Icon and Industry */}
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

                  {/* Use Cases List */}
                  <ul className="list-unstyled mb-3">
                    {useCase.useCases.map((item, i) => (
                      <li key={i} className="mb-2 para-color">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        <small>{item}</small>
                      </li>
                    ))}
                  </ul>

                  {/* Impact Badge */}
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

        {/* CTA Section */}
        <div className="text-center mt-5" data-aos="fade-up">
          <p className="para-blog mb-3">
            Ready to transform your business communication?
          </p>
          <a
            href="/request-demo"
            className="btn btn-success btn-lg px-5 py-3"
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

export default UseCases;
