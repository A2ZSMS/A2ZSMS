import React from "react";
const Aboutus = () => {
  return (
    <div className="bg-light py-5">
      <div className="container py-5 aos fw-bold">
        <div className="row align-items-center para-color aos">
          {/* Left Section */}
          <div className="col-12 col-md-6" data-aos="zoom-in-right">
            <h6 className="text-primary text-uppercase fw-bold">
              More About Us
            </h6>
            <h2 className="fw-bold mb-4">
              WhatsApp CRM{" "}
              <span className="text-primary">The Ultimate Guide for Businesses</span>
            </h2>
            <p className="align">
              Elevate your customer experience with the power of WhatsApp CRM The Ultimate Guide for Businesses. By integrating WhatsApp with your CRM systems, you can automate responses, streamline lead management, and build stronger customer relationships using real-time communication features designed for modern businesses.
            </p>
            <ul className="list-unstyled">
              <div className="row">
                <div className="col-md-6">
                  <li className="mb-2 d-flex">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    <span>
                      Sync WhatsApp with your CRM for seamless communication.
                    </span>
                  </li>
                  <li className="mb-2 d-flex">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    <span>Automate replies with AI-powered templates.</span>
                  </li>
                  <li className="mb-2 d-flex">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    <span>
                      Manage leads efficiently with real-time updates.
                    </span>
                  </li>
                </div>
                <div className="col-md-6">
                  <li className="mb-2 d-flex">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    <span>Automate follow-ups based on customer behavior.</span>
                  </li>
                  <li className="mb-2 d-flex">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    <span>
                      Streamline workflows for messages and notifications.
                    </span>
                  </li>
                  <li className="mb-2 d-flex">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    <span>Build loyalty with personalized interactions.</span>
                  </li>
                </div>
              </div>
            </ul>

            <div className="mt-4 p-4 border-0 rounded-4 text-center w-100 bg-primary text-white shadow-lg" style={{ background: 'linear-gradient(135deg, #1483ce 0%, #0fbde9 100%)' }}>
              <i className="bi bi-telephone-fill me-2"></i>
              <span className="fs-5">
                Call us anytime :{" "}
                <b className="ms-2">
                  <a
                    href="tel:+918431086185"
                    className="text-white text-decoration-none border-bottom border-2"
                  >
                    +91-8431086185
                  </a>
                </b>
              </span>
            </div>
          </div>

          {/* Right Section */}
          <div
            className="col-12 col-md-6 py-3 text-center"
            data-aos="zoom-in-left"
          >
            <div className="position-relative">
              <img
                className="img-fluid rounded-4 shadow-lg content-section-img"
                src="/image/Whatsapp.png"
                alt="WhatsApp CRM"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Aboutus;
