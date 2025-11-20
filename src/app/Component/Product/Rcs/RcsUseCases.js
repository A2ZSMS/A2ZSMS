"use client";

const rcsUseCases = [
  {
    id: 1,
    industry: "E-Commerce & Retail",
    icon: "bi-cart-check-fill",
    color: "#17A2B8",
    useCases: [
      "Rich product catalogs with images and carousels",
      "Interactive order tracking with real-time updates",
      "One-tap payment buttons for quick checkout",
      "Personalized offers with rich media",
      "Customer support with quick reply options",
    ],
    impact: "85% engagement rate",
  },
  {
    id: 2,
    industry: "Banking & Financial Services",
    icon: "bi-bank2",
    color: "#6C63FF",
    useCases: [
      "Secure OTP delivery with verified sender",
      "Interactive transaction statements with charts",
      "Loan application forms with file uploads",
      "Investment opportunities with rich visuals",
      "Credit card offers with carousel templates",
    ],
    impact: "99.8% secure delivery",
  },
  {
    id: 3,
    industry: "Travel & Hospitality",
    icon: "bi-airplane-fill",
    color: "#FF6B9D",
    useCases: [
      "E-tickets with QR codes and boarding passes",
      "Hotel booking confirmations with images",
      "Interactive travel itineraries",
      "Real-time flight updates with location maps",
      "Feedback collection with star ratings",
    ],
    impact: "92% customer satisfaction",
  },
  {
    id: 4,
    industry: "Healthcare",
    icon: "bi-heart-pulse-fill",
    color: "#20C997",
    useCases: [
      "Appointment reminders with calendar integration",
      "Prescription delivery with medicine images",
      "Health reports sharing with PDFs",
      "Telemedicine consultation booking buttons",
      "Vaccination certificate delivery",
    ],
    impact: "70% reduction in no-shows",
  },
  {
    id: 5,
    industry: "Food & Delivery",
    icon: "bi-bag-check-fill",
    color: "#FD7E14",
    useCases: [
      "Menu catalogs with food images and prices",
      "Real-time order tracking with map location",
      "One-tap reorder previous meals",
      "Promotional campaigns with rich media",
      "Instant feedback with emoji reactions",
    ],
    impact: "60% repeat order rate",
  },
  {
    id: 6,
    industry: "Automotive",
    icon: "bi-car-front-fill",
    color: "#6610F2",
    useCases: [
      "New vehicle launches with 360° images",
      "Service appointment scheduling with calendar",
      "Car insurance renewal reminders with documents",
      "Test drive booking with location selection",
      "Maintenance tips with instructional videos",
    ],
    impact: "4x higher conversion",
  },
];

const RcsUseCases = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold head1" style={{ color: "#203239" }}>
            Industry Solutions
          </h2>
          <p className="text-muted para-blog mt-3">
            Interactive, media-rich messaging for modern businesses
          </p>
        </div>

        <div className="row g-4">
          {rcsUseCases.map((useCase, index) => (
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
                        <i className="bi bi-check-circle-fill text-info me-2"></i>
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
          <p className="para-blog mb-3">Ready to upgrade from SMS to RCS?</p>
          <a
            href="/request-demo"
            className="btn btn-info btn-lg px-5 py-3 text-white"
            style={{ borderRadius: "30px" }}
          >
            Get Started with RCS
            <i className="bi bi-arrow-right ms-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default RcsUseCases;
