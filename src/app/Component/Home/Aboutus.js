import React from "react";
import "./Home.css";

const features = [
  "Sync WhatsApp with your CRM for seamless communication.",
  "Automate replies with AI-powered templates.",
  "Manage leads efficiently with real-time updates.",
  "Automate follow-ups based on customer behavior.",
  "Streamline workflows for messages and notifications.",
  "Build loyalty with personalized interactions.",
];

const Aboutus = () => {
  return (
    <div className="about-section">
      <div className="container">
        <div className="row align-items-center aos">
          {/* Left Section */}
          <div className="col-12 col-md-6" data-aos="fade-right">
            <span className="section-label">More About Us</span>
            <h2>
              WhatsApp CRM —{" "}
              <span style={{ color: "#097bdf" }}>The Ultimate Guide</span> for
              Businesses
            </h2>
            <p className="about-desc">
              Elevate your customer experience with the power of WhatsApp CRM.
              By integrating WhatsApp with your CRM systems, you can automate
              responses, streamline lead management, and build stronger customer
              relationships using real-time communication features.
            </p>

            <ul className="about-features">
              {features.map((feature, index) => (
                <li key={index} className="about-feature-item">
                  <div className="about-check">
                    <i className="bi bi-check2"></i>
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a href="tel:+918431086185" className="about-cta">
              <div className="about-cta-icon">
                <i className="bi bi-telephone-fill"></i>
              </div>
              <div>
                <div className="about-cta-label">Call us anytime</div>
                <div className="about-cta-number">+91-8431086185</div>
              </div>
            </a>
          </div>

          {/* Right Section */}
          <div
            className="col-12 col-md-6 py-3 text-center"
            data-aos="fade-left"
          >
            <div className="about-img-wrap">
              <img
                className="img-fluid"
                src="/image/Whatsapp.png"
                alt="WhatsApp CRM"
              />
              <div className="about-img-badge">
                <div className="badge-num">5+</div>
                <div className="badge-text">
                  Years of
                  <br />
                  Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
