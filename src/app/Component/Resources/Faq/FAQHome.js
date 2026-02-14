"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../Home/Home.css";

const FAQHome = ({ data }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  if (!data) {
    return <p className="text-center py-5">Loading FAQs...</p>;
  }

  const { title, subtitle, faqs } = data;

  return (
    <div className="faq-section">
      <div className="container py-3">
        {/* Title Section */}
        <div className="text-center mb-5">
          <span className="section-label">FAQ</span>
          <h2 className="section-heading">{title}</h2>
          {subtitle && <p className="section-desc mx-auto">{subtitle}</p>}
        </div>

        {/* Accordion Section */}
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="accordion" data-aos="fade-up" id="faqAccordion">
              {faqs && faqs.length > 0 ? (
                faqs.map((faq) => (
                  <div className="accordion-item" key={faq.id}>
                    <h2 className="accordion-header" id={`heading${faq.id}`}>
                      <button
                        className={`accordion-button ${faq.id === 1 ? "" : "collapsed"}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${faq.id}`}
                        aria-expanded={faq.id === 1 ? "true" : "false"}
                        aria-controls={`collapse${faq.id}`}
                      >
                        <i className={`me-2 ${faq.icon}`}></i>
                        {faq.question}
                      </button>
                    </h2>
                    <div
                      id={`collapse${faq.id}`}
                      className={`accordion-collapse collapse ${faq.id === 1 ? "show" : ""}`}
                      aria-labelledby={`heading${faq.id}`}
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">{faq.answer}</div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-muted">No FAQs available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQHome;
