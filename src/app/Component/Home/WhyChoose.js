// components/Home/SmartSolutions.jsx
"use client";

import React, { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const WhyChooseUs = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const solutions = [
    {
      title: "High-Delivery WhatsApp API",
      description:
        "Send order updates, payment reminders, and support replies directly to your customers’ WhatsApp — with 99.9% delivery rate and full compliance.",
      icon: "bi-whatsapp",
      color: "text-success",
      link: "/whatsapp-api",
    },
    {
      title: "Bulk SMS for Critical Alerts",
      description:
        "Reach every customer instantly with transactional SMS for OTPs, bookings, and alerts — even on 2G networks.",
      icon: "bi-megaphone-fill",
      color: "text-primary",
      link: "/bulk-sms",
    },
    {
      title: "Rich RCS for Brand Engagement",
      description:
        "Go beyond text with images, carousels, and CTA buttons. Deliver interactive brand experiences right in the message inbox.",
      icon: "bi-layout-three-columns",
      color: "text-info",
      link: "/rcs-service",
    },
    {
      title: "Automated Voice Notifications",
      description:
        "Ensure critical messages are heard — not missed. Use voice calls for appointment reminders, emergency alerts, and verification.",
      icon: "bi-telephone-outbound",
      color: "text-warning",
      link: "/voice-call",
    },
  ];

  const stats = [
    { number: "5M+", label: "Messages Daily" },
    { number: "98%", label: "Avg. Open Rate" },
    { number: "50+", label: "Countries" },
    { number: "10K+", label: "Active Clients" },
  ];

  if (!isClient) return null;

  return (
    <section className="bg-light py-5 py-md-8">
      <div className="container aos">
        {/* Section Header */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <h2 className="fw-bold mb-3">
              Smart Communication Solutions for{" "}
              <span className="text-primary">Every Business Need</span>
            </h2>
            <p className="text-muted">
              We help businesses across industries connect with customers
              faster, more reliably, and in the most engaging way possible.
            </p>
          </div>
        </div>

        {/* Stats Row */}
        <div className="row text-center mb-6 g-4">
          {stats.map((stat, index) => (
            <div className="col-6 col-md-3" key={index}>
              <h3 className="fw-bold text-dark">{stat.number}</h3>
              <p className="mb-0 text-muted small">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Solutions Grid */}
        <div className="row g-5 align-items-center">
          {/* Left Image */}
          <div className="col-lg-5 text-center mb-4 mb-lg-0">
            <img
              src="/image/content1.webp"
              alt="Smart Messaging Platform Dashboard"
              className="img-fluid rounded shadow-sm"
              style={{
                maxWidth: "100%",
                height: "auto",
                maxHeight: "380px",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Right Content */}
          <div className="col-lg-7">
            <div className="row g-4">
              {solutions.map((solution, index) => (
                <div className="col-md-6" key={index}>
                  <div className="d-flex align-items-start mb-4">
                    <i
                      className={`bi ${solution.icon} ${solution.color} me-3`}
                      style={{ fontSize: "1.8rem", marginTop: "4px" }}
                    ></i>
                    <div>
                      <h5 className="fw-semibold">{solution.title}</h5>
                      <p className="text-muted small mb-0">
                        {solution.description}
                      </p>
                      <a
                        href={solution.link}
                        className={`fw-medium d-inline-block mt-2 ${solution.color}`}
                        style={{ fontSize: "0.9rem" }}
                      >
                        Learn more →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Below */}
        <div className="text-center mt-6">
          <a
            href="/tryforfree"
            className="btn btn-primary btn-lg px-5 py-3 rounded-3 shadow"
          >
            Get Started Free for 14 Days
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
