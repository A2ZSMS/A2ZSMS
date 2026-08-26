"use client";

import React from "react";
import Image from "next/image";

const steps = [
  {
    id: 1,
    title: "Register An Account",
    description:
      "Get started by creating an account with us. Registration is quick and simple, allowing you to access our bulk SMS platform instantly.",
    image: "/image/feature-icon/icon-1.png",
  },
  {
    id: 2,
    title: "Select A Bulk SMS Plan",
    description:
      "Choose the SMS plan that fits your needs. We have flexible plans that suit businesses of all sizes — promotional, transactional, or OTP.",
    image: "/image/feature-icon/icon-2.png",
  },
  {
    id: 3,
    title: "Add Contacts & Compose",
    description:
      "Easily upload your contact list and craft personalized messages. Our platform supports custom fields for impactful messaging.",
    image: "/image/feature-icon/icon-3.png",
  },
  {
    id: 4,
    title: "Send & Track Messages",
    description:
      "Launch your campaign with one click! Monitor delivery rates and response metrics in real-time to optimize your results.",
    image: "/image/feature-icon/icon-4.png",
  },
];

const Home1 = () => {
  return (
    <div>
      {/* How It Works */}
      <section className="svc-how">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="section-label">Getting Started</span>
            <h2 className="section-heading">
              How It Works: Simplify Your Bulk SMS Campaigns
            </h2>
            <p className="section-desc mx-auto">
              Four simple steps to launch your first campaign and start engaging
              your audience.
            </p>
          </div>

          <div className="row g-4 aos">
            {steps.map((step, index) => (
              <div
                className="col-md-6 col-lg-3"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                key={step.id}
              >
                <div className="svc-step">
                  <div className="svc-step-num">{step.id}</div>
                  <div className="svc-step-icon">
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={48}
                      height={48}
                    />
                  </div>
                  <h5>{step.title}</h5>
                  <p>{step.description}</p>
                  {index < steps.length - 1 && (
                    <div className="svc-step-connector"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="svc-cta">
        <div className="container">
          <div className="svc-cta-box text-center" data-aos="fade-up">
            <div className="svc-cta-inner">
              <span
                className="section-label"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  borderColor: "rgba(255,255,255,0.15)",
                  color: "#43cea2",
                }}
              >
                Ready to Start?
              </span>
              <h2>Transform Your Business Communication Today</h2>
              <p>
                Join thousands of businesses already using A2ZSMS to engage their
                customers with powerful messaging solutions.
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <a href="/contact" className="btn-cta">
                  Get Free Demo <i className="bi bi-arrow-right"></i>
                </a>
                <a href="tel:+918431086185" className="btn-ghost">
                  <i className="bi bi-telephone-fill"></i> +91-8431086185
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home1;
