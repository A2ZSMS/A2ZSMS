"use client";

import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import Image from "next/image";
import "./Services.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <section className="svc-hero">
      <div className="svc-hero-grid"></div>
      <div className="container svc-hero-inner">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6" data-aos="fade-right">
            <span className="section-label">Reliable Bulk SMS Solutions</span>
            <h1>
              Get <span className="highlight">High-Quality</span> SMS Services
              for Your Business
            </h1>
            <p className="svc-hero-desc">
              Deliver effective messages to your customers at the best prices.
              Our reliable SMS service ensures instant delivery and high
              engagement for every campaign.
            </p>

            <ul className="svc-hero-features">
              <li>
                <span className="check-icon">
                  <i className="bi bi-check2"></i>
                </span>
                Instant Message Delivery Guarantee
              </li>
              <li>
                <span className="check-icon">
                  <i className="bi bi-check2"></i>
                </span>
                Comprehensive Campaign Management Tools
              </li>
              <li>
                <span className="check-icon">
                  <i className="bi bi-check2"></i>
                </span>
                Unlimited Contacts and Customized Messaging
              </li>
              <li>
                <span className="check-icon">
                  <i className="bi bi-check2"></i>
                </span>
                24/7 Customer Support
              </li>
            </ul>

            <div className="svc-hero-actions">
              <a href="/contact" className="btn-cta">
                Get Started <i className="bi bi-arrow-right"></i>
              </a>
              <a href="tel:+918431086185" className="btn-ghost">
                <i className="bi bi-telephone-fill"></i> Talk to Expert
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-6" data-aos="fade-left">
            <div className="svc-hero-img">
              <Image
                src="/image/hosting-boy.png"
                alt="SMS Services"
                width={500}
                height={500}
                className="img-fluid"
              />

              <div className="svc-hero-float top-float">
                <div
                  className="float-icon"
                  style={{ background: "linear-gradient(135deg, #097bdf, #065a9c)" }}
                >
                  <i className="bi bi-envelope-check-fill"></i>
                </div>
                <div>
                  <div className="float-num">99.9%</div>
                  <div className="float-label">Delivery Rate</div>
                </div>
              </div>

              <div className="svc-hero-float bottom-float">
                <div
                  className="float-icon"
                  style={{ background: "linear-gradient(135deg, #43cea2, #185a9d)" }}
                >
                  <i className="bi bi-people-fill"></i>
                </div>
                <div>
                  <div className="float-num">13,999+</div>
                  <div className="float-label">Happy Clients</div>
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
