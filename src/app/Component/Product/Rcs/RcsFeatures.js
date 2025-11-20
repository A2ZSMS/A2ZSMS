"use client";

const rcsFeatures = [
  {
    id: 1,
    title: "Rich Media Support",
    description:
      "Send high-resolution images up to 10MB, videos, audio files, GIFs, and location maps. Enhance your messages with vibrant visuals that capture attention and drive engagement like never before.",
    icon: "bi-image-fill",
    color: "#17A2B8",
  },
  {
    id: 2,
    title: "Interactive Buttons & Carousels",
    description:
      "Add quick reply buttons, suggested actions, and product carousels directly in messages. Allow customers to browse, select, and take action without leaving the conversation.",
    icon: "bi-collection-fill",
    color: "#6C63FF",
  },
  {
    id: 3,
    title: "Verified Business Profile",
    description:
      "Display your official business name, logo, and verified badge in every message. Build instant trust and credibility with customers who know they're talking to the real you.",
    icon: "bi-patch-check-fill",
    color: "#28A745",
  },
  {
    id: 4,
    title: "Read Receipts & Typing Indicators",
    description:
      "Know exactly when your message is delivered, read, and when customers are typing. Real-time feedback helps you time your follow-ups perfectly and improve response rates.",
    icon: "bi-check-all",
    color: "#FD7E14",
  },
  {
    id: 5,
    title: "File Sharing Capabilities",
    description:
      "Share PDF documents, brochures, catalogs, invoices, and more directly through RCS. Perfect for sending contracts, receipts, medical reports, and important business documents.",
    icon: "bi-file-earmark-pdf-fill",
    color: "#DC3545",
  },
  {
    id: 6,
    title: "Location & Maps Integration",
    description:
      "Share precise locations, store addresses, and interactive maps. Help customers find your business, track deliveries in real-time, or share meeting points with pinpoint accuracy.",
    icon: "bi-geo-alt-fill",
    color: "#20C997",
  },
  {
    id: 7,
    title: "Smart Reply Suggestions",
    description:
      "Offer pre-defined quick reply options for common queries. Speed up conversations and make it easy for customers to respond with a single tap, improving engagement by 3x.",
    icon: "bi-chat-left-text-fill",
    color: "#6610F2",
  },
  {
    id: 8,
    title: "Calendar Integration",
    description:
      "Send appointment reminders with one-tap 'Add to Calendar' buttons. Reduce no-shows by making it effortless for customers to save important dates and receive timely notifications.",
    icon: "bi-calendar-event-fill",
    color: "#FFC107",
  },
];

const RcsFeatures = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold head1" style={{ color: "#203239" }}>
            Advanced RCS Features
          </h2>
          <p className="text-muted para-blog mt-3">
            Interactive, engaging, and conversion-focused messaging
          </p>
        </div>

        <div className="row g-4">
          {rcsFeatures.map((feature, index) => (
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

        {/* Why Choose RCS Over SMS */}
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
                  RCS vs Traditional SMS
                </h4>
                <div className="row">
                  <div className="col-md-3 col-6 mb-3 text-center">
                    <i
                      className="bi bi-dash-circle-fill text-danger"
                      style={{ fontSize: "24px" }}
                    ></i>
                    <p className="small mb-1 mt-2 fw-bold">SMS Limit</p>
                    <small className="text-muted">160 characters</small>
                    <br />
                    <i
                      className="bi bi-check-circle-fill text-success mt-2"
                      style={{ fontSize: "24px" }}
                    ></i>
                    <p className="small mb-1 mt-2 fw-bold text-success">
                      RCS Power
                    </p>
                    <small className="text-success">Up to 100KB text</small>
                  </div>
                  <div className="col-md-3 col-6 mb-3 text-center">
                    <i
                      className="bi bi-dash-circle-fill text-danger"
                      style={{ fontSize: "24px" }}
                    ></i>
                    <p className="small mb-1 mt-2 fw-bold">No Media</p>
                    <small className="text-muted">Text only</small>
                    <br />
                    <i
                      className="bi bi-check-circle-fill text-success mt-2"
                      style={{ fontSize: "24px" }}
                    ></i>
                    <p className="small mb-1 mt-2 fw-bold text-success">
                      Rich Media
                    </p>
                    <small className="text-success">
                      Images, Videos, Files
                    </small>
                  </div>
                  <div className="col-md-3 col-6 mb-3 text-center">
                    <i
                      className="bi bi-dash-circle-fill text-danger"
                      style={{ fontSize: "24px" }}
                    ></i>
                    <p className="small mb-1 mt-2 fw-bold">No Tracking</p>
                    <small className="text-muted">Unknown delivery</small>
                    <br />
                    <i
                      className="bi bi-check-circle-fill text-success mt-2"
                      style={{ fontSize: "24px" }}
                    ></i>
                    <p className="small mb-1 mt-2 fw-bold text-success">
                      Full Analytics
                    </p>
                    <small className="text-success">Read receipts & more</small>
                  </div>
                  <div className="col-md-3 col-6 mb-3 text-center">
                    <i
                      className="bi bi-dash-circle-fill text-danger"
                      style={{ fontSize: "24px" }}
                    ></i>
                    <p className="small mb-1 mt-2 fw-bold">Plain Text</p>
                    <small className="text-muted">No branding</small>
                    <br />
                    <i
                      className="bi bi-check-circle-fill text-success mt-2"
                      style={{ fontSize: "24px" }}
                    ></i>
                    <p className="small mb-1 mt-2 fw-bold text-success">
                      Verified Brand
                    </p>
                    <small className="text-success">Logo & Name</small>
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

export default RcsFeatures;
