"use client";
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (
      !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/[\s\-\(\)]/g, ""))
    ) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    if (!formData.consent) {
      newErrors.consent = "You must agree to the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const web3FormsData = {
        ...formData,
        access_key: "0c511151-8204-4f6f-8485-932700f9e589",
        subject: `Contact Form: ${formData.subject}`,
      };

      const response = await axios.post(
        "https://api.web3forms.com/submit",
        web3FormsData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setSubmitStatus("success");
        setShowModal(true);

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: "",
          consent: false,
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSubmitStatus(null);
  };

  return (
    <>
      <form onSubmit={handleSubmit} noValidate>
        <div className="row g-4">
          {/* Name */}
          <div className="col-md-6">
            <div className="form-floating">
              <input
                type="text"
                name="name"
                id="name"
                className={`form-control form-control-lg ${
                  errors.name ? "is-invalid" : ""
                }`}
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleInputChange}
                style={{
                  borderRadius: "12px",
                  border: "2px solid #e9ecef",
                  fontSize: "16px",
                  paddingTop: "1.625rem",
                  paddingBottom: "0.625rem",
                  height: "calc(3.5rem + 2px)",
                }}
              />
              <label htmlFor="name" className="fw-medium text-muted">
                Full Name <span className="text-danger">*</span>
              </label>
              {errors.name && (
                <div className="invalid-feedback d-block mt-1">
                  <i className="fas fa-exclamation-circle me-1"></i>
                  {errors.name}
                </div>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="col-md-6">
            <div className="form-floating">
              <input
                type="email"
                name="email"
                id="email"
                className={`form-control form-control-lg ${
                  errors.email ? "is-invalid" : ""
                }`}
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleInputChange}
                style={{
                  borderRadius: "12px",
                  border: "2px solid #e9ecef",
                  fontSize: "16px",
                  paddingTop: "1.625rem",
                  paddingBottom: "0.625rem",
                  height: "calc(3.5rem + 2px)",
                }}
              />
              <label htmlFor="email" className="fw-medium text-muted">
                Email Address <span className="text-danger">*</span>
              </label>
              {errors.email && (
                <div className="invalid-feedback d-block mt-1">
                  <i className="fas fa-exclamation-circle me-1"></i>
                  {errors.email}
                </div>
              )}
            </div>
          </div>

          {/* Phone */}
          <div className="col-md-6">
            <div className="form-floating">
              <input
                type="tel"
                name="phone"
                id="phone"
                className={`form-control form-control-lg ${
                  errors.phone ? "is-invalid" : ""
                }`}
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleInputChange}
                style={{
                  borderRadius: "12px",
                  border: "2px solid #e9ecef",
                  fontSize: "16px",
                  paddingTop: "1.625rem",
                  paddingBottom: "0.625rem",
                  height: "calc(3.5rem + 2px)",
                }}
              />
              <label htmlFor="phone" className="fw-medium text-muted">
                Phone Number <span className="text-danger">*</span>
              </label>
              {errors.phone && (
                <div className="invalid-feedback d-block mt-1">
                  <i className="fas fa-exclamation-circle me-1"></i>
                  {errors.phone}
                </div>
              )}
            </div>
          </div>

          {/* Company */}
          <div className="col-md-6">
            <div className="form-floating">
              <input
                type="text"
                name="company"
                id="company"
                className="form-control form-control-lg"
                placeholder="Enter your company name"
                value={formData.company}
                onChange={handleInputChange}
                style={{
                  borderRadius: "12px",
                  border: "2px solid #e9ecef",
                  fontSize: "16px",
                  paddingTop: "1.625rem",
                  paddingBottom: "0.625rem",
                  height: "calc(3.5rem + 2px)",
                }}
              />
              <label htmlFor="company" className="fw-medium text-muted">
                Company Name
              </label>
            </div>
          </div>

          {/* Subject */}
          <div className="col-12">
            <div className="form-floating">
              <select
                name="subject"
                id="subject"
                className={`form-select form-select-lg ${
                  errors.subject ? "is-invalid" : ""
                }`}
                value={formData.subject}
                onChange={handleInputChange}
                style={{
                  borderRadius: "12px",
                  border: "2px solid #e9ecef",
                  fontSize: "16px",
                  paddingTop: "1.625rem",
                  paddingBottom: "0.625rem",
                  height: "calc(3.5rem + 2px)",
                }}
              >
                <option value="">Choose a subject</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="SMS Services">SMS Services</option>
                <option value="Support">Technical Support</option>
                <option value="Partnership">Partnership Opportunities</option>
                <option value="Pricing">Pricing Information</option>
                <option value="Other">Other</option>
              </select>
              <label htmlFor="subject" className="fw-medium text-muted">
                Subject <span className="text-danger">*</span>
              </label>
              {errors.subject && (
                <div className="invalid-feedback d-block mt-1">
                  <i className="fas fa-exclamation-circle me-1"></i>
                  {errors.subject}
                </div>
              )}
            </div>
          </div>

          {/* Message */}
          <div className="col-12">
            <div className="form-floating">
              <textarea
                name="message"
                id="message"
                rows="4"
                className={`form-control ${errors.message ? "is-invalid" : ""}`}
                placeholder="Tell us more about your requirements..."
                value={formData.message}
                onChange={handleInputChange}
                style={{
                  borderRadius: "12px",
                  border: "2px solid #e9ecef",
                  fontSize: "16px",
                  paddingTop: "1.625rem",
                  paddingBottom: "0.625rem",
                  height: "120px",
                  resize: "vertical",
                }}
              ></textarea>
              <label htmlFor="message" className="fw-medium text-muted">
                Your Message <span className="text-danger">*</span>
              </label>
              {errors.message && (
                <div className="invalid-feedback d-block mt-1">
                  <i className="fas fa-exclamation-circle me-1"></i>
                  {errors.message}
                </div>
              )}
            </div>
          </div>

          {/* Consent */}
          <div className="col-12">
            <div className="form-check p-3 bg-light bg-opacity-50 rounded-3 border">
              <input
                type="checkbox"
                name="consent"
                id="consent"
                className={`form-check-input me-2 ${
                  errors.consent ? "is-invalid" : ""
                }`}
                checked={formData.consent}
                onChange={handleInputChange}
                style={{
                  transform: "scale(1.1)",
                  borderRadius: "4px",
                }}
              />
              <label
                className="form-check-label text-muted small lh-base"
                htmlFor="consent"
              >
                I hereby authorize A2Z SMS to send notifications via
                SMS/Messages/Promotional/Informational messages and agree to the{" "}
                <Link
                  href="/terms/"
                  className="text-primary text-decoration-none fw-medium"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy/"
                  className="text-primary text-decoration-none fw-medium"
                >
                  Privacy Policy
                </Link>
                . <span className="text-danger fw-medium">*</span>
              </label>
              {errors.consent && (
                <div className="invalid-feedback d-block mt-1">
                  <i className="fas fa-exclamation-circle me-1"></i>
                  {errors.consent}
                </div>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="col-12 mt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary btn-lg w-100 fw-semibold position-relative overflow-hidden"
              style={{
                borderRadius: "12px",
                background: "linear-gradient(135deg, #0d6efd, #0b5ed7)",
                border: "none",
                height: "60px",
                fontSize: "16px",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {isSubmitting ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Sending Message...
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane me-2"></i>
                  Send Message
                </>
              )}
            </button>
          </div>

          {/* Error Message */}
          {submitStatus === "error" && (
            <div className="col-12">
              <div
                className="alert alert-danger d-flex align-items-center border-0 rounded-3"
                role="alert"
                style={{ backgroundColor: "#f8d7da" }}
              >
                <div className="bg-danger bg-opacity-10 rounded-circle p-2 me-3">
                  <i className="fas fa-exclamation-triangle text-danger"></i>
                </div>
                <div>
                  <strong>Error:</strong> There was an issue submitting your
                  message. Please try again or contact us directly.
                </div>
              </div>
            </div>
          )}
        </div>
      </form>

      {/* Success Modal */}
      {showModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1055 }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div
              className="modal-content border-0 shadow-lg"
              style={{ borderRadius: "20px" }}
            >
              <div className="modal-body text-center p-5">
                <div className="success-animation mb-4">
                  <div
                    className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <i
                      className="fas fa-check text-success"
                      style={{ fontSize: "2.5rem" }}
                    ></i>
                  </div>
                </div>
                <h4 className="mb-3 fw-bold text-dark">
                  Message Sent Successfully!
                </h4>
                <p className="text-muted mb-4 lh-base">
                  Thank you for reaching out to us. We have received your
                  message and our team will get back to you within 24 hours.
                </p>
                <button
                  type="button"
                  className="btn btn-primary btn-lg px-4 py-2 fw-semibold"
                  onClick={closeModal}
                  style={{
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, #0d6efd, #0b5ed7)",
                    border: "none",
                  }}
                >
                  <i className="fas fa-thumbs-up me-2"></i>
                  Perfect!
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .form-control:focus,
        .form-select:focus {
          border-color: #0d6efd !important;
          box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.15) !important;
        }

        .form-floating > label {
          padding: 1rem 1rem;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(13, 110, 253, 0.3);
        }

        .btn-primary:active {
          transform: translateY(0);
        }

        .success-animation {
          animation: bounceIn 0.6s ease-out;
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .form-check-input:checked {
          background-color: #0d6efd;
          border-color: #0d6efd;
        }

        .alert {
          animation: slideInDown 0.3s ease-out;
        }

        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default ContactForm;
