import React from "react";
import Link from "next/link";
import "./Home.css";

const services = [
  {
    icon: "bi-whatsapp",
    bg: "#25D366",
    title: "WhatsApp Business API",
    desc: "Send bulk messages, automate replies with chatbots, and manage customer conversations at scale with 98% open rates.",
    link: "/whatsapp-api/",
  },
  {
    icon: "bi-chat-square-dots",
    bg: "#097bdf",
    title: "RCS Messaging",
    desc: "Deliver rich, app-like experiences with interactive carousels, branded messages, and verified sender identity.",
    link: "/rcs-service/",
  },
  {
    icon: "bi-envelope-fill",
    bg: "#43cea2",
    title: "Bulk SMS Service",
    desc: "Lightning-fast promotional and transactional SMS campaigns with 99.9% delivery rates across all networks.",
    link: "/bulk-sms/",
  },
  {
    icon: "bi-telephone-fill",
    bg: "#185a9d",
    title: "Bulk Voice Calls",
    desc: "Crystal-clear voice campaigns with IVR, auto-retry logic, and detailed analytics for maximum reach.",
    link: "/voice-call/",
  },
  {
    icon: "bi-code-slash",
    bg: "#065a9c",
    title: "Web Design & Development",
    desc: "Conversion-optimized, mobile-first websites built with modern frameworks for superior performance and SEO.",
    link: "/design-developement/",
  },
  {
    icon: "bi-robot",
    bg: "#1e89ec",
    title: "WhatsApp AI Chatbot",
    desc: "24/7 automated customer support powered by AI. Handle queries, capture leads, and close sales while you sleep.",
    link: "/chatbot",
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="section-label">Our Services</span>
          <h2 className="section-heading">
            Everything You Need to<br />Grow Your Business
          </h2>
          <p className="section-desc mx-auto">
            From WhatsApp automation to bulk messaging — powerful communication
            tools trusted by 10,000+ businesses across India.
          </p>
        </div>

        <div className="row g-4 aos">
          {services.map((item, i) => (
            <div className="col-md-6 col-lg-4" key={i} data-aos="fade-up" data-aos-delay={i * 80}>
              <div className="service-card">
                <div className="service-icon" style={{ background: item.bg }}>
                  <i className={`bi ${item.icon}`}></i>
                </div>
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
                <Link href={item.link} className="service-link">
                  Learn more <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
