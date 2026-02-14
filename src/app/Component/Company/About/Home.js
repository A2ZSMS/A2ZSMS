"use client";

import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import "./About.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <section className="about-hero">
      <div className="about-hero-grid"></div>
      <div className="container about-hero-inner">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6" data-aos="fade-right">
            <span className="section-label">About A2ZSMS</span>
            <h1>
              Your Trusted{" "}
              <span className="highlight">Messaging Partner</span> for Business
              Growth
            </h1>
            <p className="about-hero-desc">
              At A2ZSMS, we specialize in delivering innovative communication
              solutions that empower businesses to connect with their customers
              seamlessly. Reliability, speed, and scalability — that's what makes
              us a trusted partner across industries.
            </p>

            <div className="about-hero-stats">
              <div className="about-hero-stat">
                <div className="stat-num">5+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="about-hero-stat">
                <div className="stat-num">500+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
              <div className="about-hero-stat">
                <div className="stat-num">99.9%</div>
                <div className="stat-label">Uptime</div>
              </div>
              <div className="about-hero-stat">
                <div className="stat-num">10M+</div>
                <div className="stat-label">Messages Sent</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-6" data-aos="fade-left">
            <div className="about-hero-img">
              <img
                src="/image/About.png"
                alt="About A2ZSMS"
                className="img-fluid"
              />
              <div className="about-hero-badge">
                <div className="badge-icon">
                  <i className="bi bi-shield-check"></i>
                </div>
                <div>
                  <div className="badge-num">Trusted</div>
                  <div className="badge-label">By 500+ Businesses</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
