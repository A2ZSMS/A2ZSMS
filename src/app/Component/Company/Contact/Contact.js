"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import ContactForm from "./Form";
import Link from "next/link";

const ContactPage = () => {
  const handleWhatsappClick = () => {
    window.open("https://wa.me/+918431086185", "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:sales@a2zsms.in";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:8431086185";
  };

  const handleLinkedinClick = () => {
    window.open("https://www.linkedin.com/company/105067284", "_blank");
  };

  return (
    <>
      {/* Hero Section */}
      <div
        className="position-relative bg-light"
        style={{
          backgroundImage:
            "radial-gradient(circle, #dee2e6 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          minHeight: "100vh",
        }}
      >
        <div className="container py-5">
          {/* Header */}
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <div className="mb-3">
                <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill fs-6 fw-medium">
                  Contact Us
                </span>
              </div>
              <h1 className="display-4 fw-bold text-dark mb-4">
                Let's Start a Conversation
              </h1>
              <p className="lead text-muted fs-5 lh-base">
                We're here to help you succeed. Reach out to us and let's
                discuss how we can work together to achieve your goals.
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="row g-5">
            {/* Contact Information */}
            <div className="col-lg-5">
              <div className="bg-white rounded-4 shadow-sm border-0 h-100 overflow-hidden">
                <div className="bg-primary bg-opacity-5 p-4 border-bottom">
                  <h3 className="h4 text-dark mb-2 fw-bold d-flex align-items-center">
                    <div className="bg-primary bg-opacity-10 rounded-circle p-2 me-3">
                      <i className="fas fa-info-circle text-primary"></i>
                    </div>
                    Get in Touch
                  </h3>
                  <p className="text-muted mb-0 ps-5">
                    We'll get back to you within 24 hours
                  </p>
                </div>

                <div className="p-4">
                  <div className="contact-info">
                    {/* Phone */}
                    <div
                      className="contact-item d-flex align-items-center p-3 rounded-3 mb-3 border border-light"
                      onClick={handlePhoneClick}
                      style={{
                        cursor: "pointer",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        backgroundColor: "#f8f9fa",
                      }}
                    >
                      <div className="contact-icon me-3 flex-shrink-0">
                        <div
                          className="bg-primary bg-opacity-10 rounded-circle p-3 d-flex align-items-center justify-content-center"
                          style={{ width: "50px", height: "50px" }}
                        >
                          <FontAwesomeIcon
                            icon={faPhone}
                            className="text-primary fs-5"
                          />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="text-dark mb-1 fw-semibold">Phone</h6>
                        <p className="text-muted mb-0 small">+91 84310 86185</p>
                      </div>
                      <div className="contact-arrow">
                        <i className="fas fa-chevron-right text-muted opacity-50"></i>
                      </div>
                    </div>

                    {/* Email */}
                    <div
                      className="contact-item d-flex align-items-center p-3 rounded-3 mb-3 border border-light"
                      onClick={handleEmailClick}
                      style={{
                        cursor: "pointer",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        backgroundColor: "#f8f9fa",
                      }}
                    >
                      <div className="contact-icon me-3 flex-shrink-0">
                        <div
                          className="bg-success bg-opacity-10 rounded-circle p-3 d-flex align-items-center justify-content-center"
                          style={{ width: "50px", height: "50px" }}
                        >
                          <FontAwesomeIcon
                            icon={faEnvelope}
                            className="text-success fs-5"
                          />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="text-dark mb-1 fw-semibold">Email</h6>
                        <p className="text-muted mb-0 small">sales@a2zsms.in</p>
                      </div>
                      <div className="contact-arrow">
                        <i className="fas fa-chevron-right text-muted opacity-50"></i>
                      </div>
                    </div>

                    {/* Address */}
                    <div
                      className="d-flex align-items-start p-3 rounded-3 mb-4 border border-light"
                      style={{ backgroundColor: "#f8f9fa" }}
                    >
                      <div className="contact-icon me-3 flex-shrink-0">
                        <div
                          className="bg-danger bg-opacity-10 rounded-circle p-3 d-flex align-items-center justify-content-center"
                          style={{ width: "50px", height: "50px" }}
                        >
                          <FontAwesomeIcon
                            icon={faMapMarkerAlt}
                            className="text-danger fs-5"
                          />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="text-dark mb-2 fw-semibold">Address</h6>
                        <p className="text-muted mb-0 small lh-base">
                          183, 2nd Floor, G Block opposite to Reliance Trends,
                          <br />
                          Sahakara Nagar Main rd, Byatarayanapura,
                          <br />
                          Bengaluru, Karnataka 560092
                        </p>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="border-top pt-4">
                      <h6 className="text-dark mb-3 fw-semibold">
                        Connect With Us
                      </h6>
                      <div className="row g-3">
                        <div className="col-6">
                          <button
                            className="btn btn-outline-success w-100 py-2 d-flex align-items-center justify-content-center"
                            onClick={handleWhatsappClick}
                            style={{
                              transition: "all 0.3s ease",
                              borderRadius: "10px",
                            }}
                          >
                            <FontAwesomeIcon
                              icon={faWhatsapp}
                              className="me-2"
                            />
                            <span className="small fw-medium">WhatsApp</span>
                          </button>
                        </div>
                        <div className="col-6">
                          <button
                            className="btn btn-outline-primary w-100 py-2 d-flex align-items-center justify-content-center"
                            onClick={handleLinkedinClick}
                            style={{
                              transition: "all 0.3s ease",
                              borderRadius: "10px",
                            }}
                          >
                            <FontAwesomeIcon
                              icon={faLinkedin}
                              className="me-2"
                            />
                            <span className="small fw-medium">LinkedIn</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-7">
              <div className="bg-white rounded-4 shadow-sm border-0 h-100 overflow-hidden">
                <div className="bg-primary bg-opacity-5 p-4 border-bottom">
                  <h3 className="h4 text-dark mb-2 fw-bold d-flex align-items-center">
                    <div className="bg-primary bg-opacity-10 rounded-circle p-2 me-3">
                      <i className="fas fa-paper-plane text-primary"></i>
                    </div>
                    Send us a Message
                  </h3>
                  <p className="text-muted mb-0 ps-5">
                    Fill out the form below and we'll respond promptly
                  </p>
                </div>

                <div className="p-4">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 123, 255, 0.1) !important;
          background-color: #fff !important;
          border-color: rgba(0, 123, 255, 0.2) !important;
        }

        .contact-item:hover .contact-arrow {
          transform: translateX(3px);
        }

        .contact-arrow {
          transition: transform 0.3s ease;
        }

        .btn-outline-success:hover {
          background-color: #25d366;
          border-color: #25d366;
          color: white;
        }

        .btn-outline-primary:hover {
          background-color: #0077b5;
          border-color: #0077b5;
          color: white;
        }

        .shadow-sm {
          box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
        }

        .rounded-4 {
          border-radius: 1rem !important;
        }

        .bg-opacity-5 {
          background-color: rgba(var(--bs-primary-rgb), 0.05) !important;
        }

        .bg-opacity-10 {
          background-color: rgba(var(--bs-primary-rgb), 0.1) !important;
        }
      `}</style>
    </>
  );
};

export default ContactPage;
