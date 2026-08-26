"use client";

import React from "react";
import Image from "next/image";

const services = [
  {
    icon: "/image/feature-icon/icon-1.png",
    title: "WhatsApp SMS",
    bg: "linear-gradient(135deg, #25D366, #128C7E)",
    description:
      "Engage your audience on WhatsApp with instant, interactive messages. Reach customers where they're active, with high open and engagement rates.",
  },
  {
    icon: "/image/feature-icon/icon-2.png",
    title: "RCS SMS",
    bg: "linear-gradient(135deg, #097bdf, #065a9c)",
    description:
      "Deliver rich, multimedia messages with RCS SMS, bringing a more engaging experience to your users. Enhance communication with images, buttons, and more.",
  },
  {
    icon: "/image/feature-icon/icon-3.png",
    title: "Promotional SMS",
    bg: "linear-gradient(135deg, #f59e0b, #d97706)",
    description:
      "Promote your business effectively with targeted SMS campaigns. Reach thousands instantly and boost engagement with special offers and updates.",
  },
  {
    icon: "/image/feature-icon/icon-4.png",
    title: "Transactional SMS",
    bg: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
    description:
      "Send important alerts, updates, and confirmations to customers in real-time. Ensure critical information reaches your users instantly and securely.",
  },
  {
    icon: "/image/feature-icon/icon-8.png",
    title: "Bulk Voice Call",
    bg: "linear-gradient(135deg, #ef4444, #dc2626)",
    description:
      "Communicate with your audience using pre-recorded voice messages. Perfect for alerts, reminders, and personalized updates on a large scale.",
  },
  {
    icon: "/image/feature-icon/icon-7.png",
    title: "OTP SMS",
    bg: "linear-gradient(135deg, #43cea2, #185a9d)",
    description:
      "Secure your transactions with One-Time Password (OTP) SMS. Provide an extra layer of protection with fast, reliable, and secure OTP delivery.",
  },
];

const OurService = () => {
  return (
    <section className="svc-services">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="section-label">Best Services</span>
          <h2 className="section-heading">Powerful Bulk SMS Services</h2>
          <p className="section-desc mx-auto">
            Comprehensive messaging solutions designed to help your business
            communicate effectively and grow faster.
          </p>
        </div>

        <div className="row g-4 aos">
          {services.map((service, index) => (
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay={index * 80}
              key={index}
            >
              <div className="svc-card">
                <div className="svc-card-icon" style={{ background: service.bg }}>
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={36}
                    height={36}
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </div>
                <h5>{service.title}</h5>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurService;
