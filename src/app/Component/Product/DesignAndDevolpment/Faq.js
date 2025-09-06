"use client";
import Link from "next/link";
import React, { useState } from "react";

const Faq = () => {
  const [activeCategory, setActiveCategory] = useState("general");

  const faqCategories = {
    general: {
      title: "General Questions",
      icon: "bi-question-circle",
      color: "primary",
      faqs: [
        {
          id: 1,
          question: "Why do I need a website when I have social media?",
          answer:
            "Social media is rented land—you don't control it. A website is your digital property that you own completely. While social media can disappear or change algorithms overnight, your website provides stability, credibility, and complete control over your brand message. Plus, 75% of consumers judge business credibility based on website design quality.",
        },
        {
          id: 2,
          question: "How much does a professional website cost?",
          answer:
            "Website costs vary based on complexity and features. A basic business website starts from $2,500, while e-commerce solutions begin at $5,000. However, consider this: the average business sees a 200% ROI within the first year. Your website pays for itself through increased credibility, leads, and sales.",
        },
        {
          id: 3,
          question: "How long does it take to build a website?",
          answer:
            "Simple websites take 2-4 weeks, while complex e-commerce sites require 6-12 weeks. We prioritize quality over speed, but we also understand urgency. Our streamlined process includes regular updates so you see progress every step of the way. Rush delivery options are available for urgent projects.",
        },
        {
          id: 4,
          question: "Do you provide website content or do I need to write it?",
          answer:
            "We offer comprehensive content creation services including copywriting, photography coordination, and content strategy. Many clients prefer our content services because we understand what converts visitors into customers. We can work with your existing content or create everything from scratch.",
        },
      ],
    },
    technical: {
      title: "Technical Questions",
      icon: "bi-gear-fill",
      color: "success",
      faqs: [
        {
          id: 5,
          question: "What technologies do you use and why should I care?",
          answer:
            "We use proven technologies like React, Next.js, PHP, and MySQL—the same tech powering Netflix, Airbnb, and Facebook. This means your website is built on enterprise-grade foundations that can scale with your business growth. Modern tech also means better security, faster loading, and easier maintenance.",
        },
        {
          id: 6,
          question: "Will my website work on all devices and browsers?",
          answer:
            "Absolutely. We test on 20+ device/browser combinations before launch. With 59% of web traffic coming from mobile devices, responsive design isn't optional—it's critical. We ensure perfect functionality on iPhone, Android, tablets, desktops, and even smart TVs.",
        },
        {
          id: 7,
          question: "How do you ensure my website loads quickly?",
          answer:
            "We implement multiple optimization techniques: image compression, code minification, CDN integration, and smart caching. Page speed directly impacts sales—Amazon loses $1.6 billion annually for every second of delay. We guarantee load times under 3 seconds on standard connections.",
        },
        {
          id: 8,
          question: "Is my website secure from hackers and data breaches?",
          answer:
            "Security is built into every layer. We implement SSL certificates, secure hosting, regular security updates, automated backups, and follow industry best practices. We also provide ongoing security monitoring because cyber threats evolve constantly.",
        },
      ],
    },
    business: {
      title: "Business Impact",
      icon: "bi-graph-up",
      color: "warning",
      faqs: [
        {
          id: 9,
          question: "How will a website actually help my business grow?",
          answer:
            "Websites generate leads 24/7, build credibility, enable online sales, improve customer service through self-service options, and provide valuable analytics about your customers. Businesses with websites grow 40% faster than those without. It's like having a salesperson who never sleeps.",
        },
        {
          id: 10,
          question:
            "Can you redesign my existing website to make it more effective?",
          answer:
            "Yes! We specialize in transforming underperforming websites into conversion machines. Our redesign process includes user experience analysis, conversion optimization, modern design implementation, and performance enhancement. Most clients see 50-200% improvement in leads within 90 days.",
        },
        {
          id: 11,
          question: "Will my website show up on Google search results?",
          answer:
            "We build every website with SEO best practices from day one. This includes proper structure, fast loading, mobile optimization, and technical SEO setup. However, ranking depends on competition and ongoing SEO efforts. We offer SEO services to help you dominate local search results.",
        },
        {
          id: 12,
          question: "What happens after my website launches?",
          answer:
            "Launch is just the beginning. We provide training, analytics setup, ongoing support, and maintenance options. We also offer marketing services to drive traffic to your new site. Think of us as your long-term digital growth partner, not just a one-time vendor.",
        },
      ],
    },
  };

  const currentCategory = faqCategories[activeCategory];

  return (
    <section className="py-5 pattern-dots">
      <div className="container aos">
        {/* Header */}
        <div className="row justify-content-center mb-5 aos">
          <div className="col-lg-8 text-center" data-aos="fade-in">
            <span className="badge bg-primary-subtle text-primary px-4 py-2 rounded-pill mb-3 fs-6">
              Get Answers
            </span>
            <h2 className="display-4 fw-bold text-dark mb-4">
              Everything You Need to Know About
              <span className="text-primary">Professional Web Solutions</span>
            </h2>
            <p className="lead text-muted">
              We've answered the most common questions from business owners like
              you. Still have questions? We're here to help.
            </p>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="row justify-content-center mb-5 aos">
          <div className="col-lg-8" data-aos="fade-in">
            <div className="nav nav-pills justify-content-center bg-white rounded-pill p-2 shadow-sm">
              {Object.entries(faqCategories).map(([key, category]) => (
                <button
                  key={key}
                  className={`nav-link rounded-pill px-4 py-2 fw-semibold transition-smooth ${
                    activeCategory === key
                      ? `active bg-${category.color} text-white`
                      : "text-muted"
                  }`}
                  onClick={() => setActiveCategory(key)}
                >
                  <i className={`${category.icon} me-2`}></i>
                  {category.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="row justify-content-center aos">
          <div className="col-lg-10" data-aos="fade-in">
            <div className="text-center mb-4">
              <div
                className={`bg-${currentCategory.color}-subtle rounded-circle d-inline-flex align-items-center justify-content-center mb-3`}
                style={{ width: "80px", height: "80px" }}
              >
                <i
                  className={`${currentCategory.icon} text-${currentCategory.color} fs-1`}
                ></i>
              </div>
              <h3 className="fw-bold text-dark">{currentCategory.title}</h3>
            </div>

            <div className="accordion" id="faqAccordion">
              {currentCategory.faqs.map((faq, index) => (
                <div
                  className="accordion-item border-0 mb-3 shadow-sm rounded-3"
                  key={faq.id}
                >
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button fw-bold border-0 bg-white py-4 rounded-3"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${faq.id}`}
                      aria-expanded={index === 0 ? "true" : "false"}
                      aria-controls={`collapse${faq.id}`}
                    >
                      <div
                        className={`bg-${currentCategory.color}-subtle rounded-circle d-flex align-items-center justify-content-center me-3`}
                        style={{ width: "40px", height: "40px" }}
                      >
                        <i
                          className={`bi bi-question text-${currentCategory.color} fs-5`}
                        ></i>
                      </div>
                      <span className="text-dark">{faq.question}</span>
                    </button>
                  </h2>
                  <div
                    id={`collapse${faq.id}`}
                    className={`accordion-collapse collapse ${
                      index === 0 ? "show" : ""
                    }`}
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body p-4 bg-light">
                      <p className="text-dark mb-0 lh-lg">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Still Have Questions CTA */}
        <div className="row justify-content-center mt-5 aos">
          <div className="col-lg-8 text-center" data-aos="fade-in">
            <div className="bg-white rounded-4 p-5 shadow-lg border border-primary border-opacity-25">
              <h4 className="fw-bold text-dark mb-3">Still Have Questions?</h4>
              <p className="text-muted mb-4">
                Every business is unique, and you might have specific questions
                about your project. We're here to provide honest, expert
                advice—even if you're not ready to start immediately.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <Link
                  href="/contact/"
                  className="btn btn-primary  px-md-5 py-md-3 rounded-pill fw-semibold"
                >
                  <i className="bi bi-telephone-fill me-2"></i>
                  Schedule Free Consultation
                </Link>
                <Link
                  href="https://wa.me/918431086185"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary  px-md-5 py-md-3 rounded-pill fw-semibold"
                >
                  <i className="bi bi-chat-dots-fill me-2"></i>
                  Chat with Expert Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .pattern-dots {
          background-image: radial-gradient(
            circle,
            #dee2e6 1px,
            transparent 1px
          );
          background-size: 20px 20px;
          width: 100%;
          height: 100%;
        }
        .bg-gradient-faq {
          background: linear-gradient(
            135deg,
            #f8f9fa 0%,
            #ffffff 50%,
            #f1f3f4 100%
          );
        }

        .transition-smooth {
          transition: all 0.3s ease;
        }

        .nav-link:not(.active):hover {
          background-color: #f8f9fa !important;
          color: #495057 !important;
        }

        .accordion-button:not(.collapsed) {
          background-color: #f8f9fa !important;
          box-shadow: none !important;
        }

        .accordion-button:focus {
          box-shadow: none !important;
        }

        .accordion-item {
          transition: all 0.3s ease;
        }

        .accordion-item:hover {
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
};

export default Faq;
