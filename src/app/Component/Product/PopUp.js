"use client";
import React, { useState, useEffect } from "react";
import { gtag_report_conversion } from "../../GoogleTracking";

const PopupForm = () => {
  const [showPopup, setShowPopup] = useState(false);
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
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (
      !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/[\s\-\(\)]/g, ""))
    ) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.consent) newErrors.consent = "You must agree to continue";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const timestamp = new Date().toISOString();

      const makeWebhookData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service: formData.subject,
        message: formData.message,
        timestamp: timestamp,
      };

      const web3FormsData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service: formData.subject,
        message: formData.message,
        access_key: "f51b2c3b-8f16-4d07-b40d-ec3d342fa530",
      };

      const [makeResponse, web3Response] = await Promise.all([
        fetch("https://hook.eu1.make.com/hwd03miuvndwrthjyd3txxx1ya4792so", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(makeWebhookData),
        }),
        fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(web3FormsData),
        }),
      ]);

      if (makeResponse.ok && web3Response.ok) {
        // Fire Google Ads conversion tracking
        gtag_report_conversion();

        setSubmitStatus("success");
        setShowPopup(false);
        setShowSuccessModal(true);
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

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    setSubmitStatus(null);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  if (!showPopup && !showSuccessModal) return null;

  return (
    <>
      {/* Main Contact Form Popup */}
      {showPopup && (
        <div
          className="popup-overlay"
          onClick={(e) => {
            if (e.target.classList.contains("popup-overlay")) closePopup();
          }}
        >
          <div className="popup-container">
            <div className="popup-card">
              {/* Header */}
              <div className="popup-header">
                <div className="popup-header-bg"></div>
                <button
                  type="button"
                  className="popup-close"
                  onClick={closePopup}
                  aria-label="Close"
                >
                  <i className="bi bi-x-lg"></i>
                </button>
                <div className="popup-header-content">
                  <div className="popup-header-icon">
                    <i className="bi bi-send-fill"></i>
                  </div>
                  <h3>Get Free Trial!</h3>
                  <p>
                    Fill out the form below and our team will get back to you
                    within 24 hours.
                  </p>
                </div>
              </div>

              {/* Body */}
              <div className="popup-body">
                <div className="row g-3 aos">
                  {/* Name */}
                  <div className="col-md-6">
                    <label className="popup-label">
                      Full Name <span className="popup-req">*</span>
                    </label>
                    <div className="popup-input-wrap">
                      <i className="bi bi-person popup-input-icon"></i>
                      <input
                        type="text"
                        name="name"
                        className={`popup-input ${errors.name ? "popup-input-error" : ""}`}
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    {errors.name && (
                      <div className="popup-error">{errors.name}</div>
                    )}
                  </div>

                  {/* Email */}
                  <div className="col-md-6">
                    <label className="popup-label">
                      Email Address <span className="popup-req">*</span>
                    </label>
                    <div className="popup-input-wrap">
                      <i className="bi bi-envelope popup-input-icon"></i>
                      <input
                        type="email"
                        name="email"
                        className={`popup-input ${errors.email ? "popup-input-error" : ""}`}
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    {errors.email && (
                      <div className="popup-error">{errors.email}</div>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="col-md-6">
                    <label className="popup-label">
                      Phone Number <span className="popup-req">*</span>
                    </label>
                    <div className="popup-input-wrap">
                      <i className="bi bi-telephone popup-input-icon"></i>
                      <input
                        type="tel"
                        name="phone"
                        className={`popup-input ${errors.phone ? "popup-input-error" : ""}`}
                        placeholder="+91 84310 86185"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    {errors.phone && (
                      <div className="popup-error">{errors.phone}</div>
                    )}
                  </div>

                  {/* Company */}
                  <div className="col-md-6">
                    <label className="popup-label">Company Name</label>
                    <div className="popup-input-wrap">
                      <i className="bi bi-building popup-input-icon"></i>
                      <input
                        type="text"
                        name="company"
                        className="popup-input"
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="col-12">
                    <label className="popup-label">
                      Service Interested In <span className="popup-req">*</span>
                    </label>
                    <div className="popup-input-wrap">
                      <i className="bi bi-grid popup-input-icon"></i>
                      <select
                        name="subject"
                        className={`popup-input popup-select ${errors.subject ? "popup-input-error" : ""}`}
                        value={formData.subject}
                        onChange={handleInputChange}
                      >
                        <option value="">Choose a service</option>
                        <option value="Waba Service">
                          WhatsApp Business API
                        </option>
                        <option value="RCS Service">RCS Messaging</option>
                        <option value="Bulk SMS Service">
                          Bulk SMS Service
                        </option>
                        <option value="Voice Call Service">
                          Voice Call Service
                        </option>
                        <option value="OTP Service">OTP Service</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    {errors.subject && (
                      <div className="popup-error">{errors.subject}</div>
                    )}
                  </div>

                  {/* Message */}
                  <div className="col-12">
                    <label className="popup-label">Your Message</label>
                    <textarea
                      name="message"
                      rows="3"
                      className="popup-input popup-textarea"
                      placeholder="Tell us more about your requirements..."
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>

                  {/* Consent */}
                  <div className="col-12">
                    <div
                      className={`popup-consent ${errors.consent ? "popup-consent-error" : ""}`}
                    >
                      <label className="popup-check-wrap">
                        <input
                          type="checkbox"
                          name="consent"
                          className="popup-checkbox"
                          checked={formData.consent}
                          onChange={handleInputChange}
                        />
                        <span className="popup-checkmark">
                          <i className="bi bi-check2"></i>
                        </span>
                        <span className="popup-consent-text">
                          I authorize A2Z SMS to send notifications and agree to
                          the <a href="/terms/">Terms</a> and{" "}
                          <a href="/privacy/">Privacy Policy</a>.{" "}
                          <span className="popup-req">*</span>
                        </span>
                      </label>
                      {errors.consent && (
                        <div
                          className="popup-error"
                          style={{ marginLeft: "32px" }}
                        >
                          {errors.consent}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Error Message */}
                  {submitStatus === "error" && (
                    <div className="col-12">
                      <div className="popup-alert-error">
                        <i className="bi bi-exclamation-triangle-fill me-2"></i>
                        Failed to submit. Please try again.
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="col-12">
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="popup-submit"
                    >
                      {isSubmitting ? (
                        <>
                          <span
                            className="spinner-border spinner-border-sm me-2"
                            role="status"
                          ></span>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Get Free Trial
                          <i className="bi bi-arrow-right ms-2"></i>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="popup-overlay">
          <div className="popup-container">
            <div className="popup-card popup-success-card">
              <div className="popup-success-body">
                <div className="popup-success-icon">
                  <i className="bi bi-check-lg"></i>
                </div>
                <h3>Message Sent Successfully!</h3>
                <p>
                  Thank you for reaching out to us. Our team will get back to
                  you within 24 hours.
                </p>
                <button
                  type="button"
                  className="popup-submit"
                  onClick={closeSuccessModal}
                  style={{ maxWidth: "220px" }}
                >
                  Got It <i className="bi bi-hand-thumbs-up ms-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        /* ===== POPUP OVERLAY ===== */
        .popup-overlay {
          position: fixed;
          inset: 0;
          background: rgba(10, 15, 30, 0.75);
          backdrop-filter: blur(4px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: popupFadeIn 0.3s ease;
        }

        .popup-container {
          width: 100%;
          max-width: 560px;
          max-height: 90vh;
          overflow-y: auto;
          animation: popupSlideUp 0.4s ease-out;
        }

        .popup-card {
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow:
            0 24px 80px rgba(0, 0, 0, 0.25),
            0 0 0 1px rgba(255, 255, 255, 0.1);
        }

        /* ===== HEADER ===== */
        .popup-header {
          position: relative;
          padding: 32px 32px 28px;
          background: linear-gradient(135deg, #065a9c, #097bdf, #43cea2);
          overflow: hidden;
        }

        .popup-header-bg {
          position: absolute;
          top: -50%;
          right: -30%;
          width: 300px;
          height: 300px;
          background: rgba(255, 255, 255, 0.06);
          border-radius: 50%;
        }

        .popup-close {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 32px;
          height: 32px;
          border-radius: 8px;
          border: none;
          background: rgba(255, 255, 255, 0.15);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s;
          z-index: 2;
        }

        .popup-close:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: scale(1.05);
        }

        .popup-header-content {
          position: relative;
          z-index: 2;
          text-align: center;
          color: #fff;
        }

        .popup-header-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          margin: 0 auto 14px;
        }

        .popup-header-content h3 {
          font-family:
            EB Garamond,
            serif;
          font-size: 26px;
          font-weight: 700;
          margin-bottom: 6px;
        }

        .popup-header-content p {
          font-size: 14px;
          opacity: 0.85;
          margin: 0;
          line-height: 1.5;
        }

        /* ===== BODY ===== */
        .popup-body {
          padding: 28px 28px 32px;
        }

        .popup-label {
          display: block;
          font-size: 13px;
          font-weight: 600;
          color: #1a1a2e;
          margin-bottom: 6px;
        }

        .popup-req {
          color: #ef4444;
        }

        .popup-input-wrap {
          position: relative;
        }

        .popup-input-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 15px;
          color: #94a3b8;
          pointer-events: none;
          z-index: 1;
        }

        .popup-input {
          width: 100%;
          padding: 11px 14px 11px 40px;
          border: 1.5px solid #e2e8f0;
          border-radius: 10px;
          font-size: 14px;
          font-family: "Inter", sans-serif;
          color: #1a1a2e;
          background: #fff;
          transition: all 0.2s;
          outline: none;
        }

        .popup-input::placeholder {
          color: #94a3b8;
        }

        .popup-input:focus {
          border-color: #097bdf;
          box-shadow: 0 0 0 3px rgba(9, 123, 223, 0.1);
        }

        .popup-input-error {
          border-color: #ef4444 !important;
        }

        .popup-input-error:focus {
          box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1) !important;
        }

        .popup-select {
          appearance: none;
          cursor: pointer;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%2394a3b8' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
          padding-right: 36px;
        }

        .popup-textarea {
          padding: 11px 14px;
          resize: vertical;
          min-height: 70px;
        }

        .popup-error {
          font-size: 12px;
          color: #ef4444;
          margin-top: 4px;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        /* ===== CONSENT ===== */
        .popup-consent {
          padding: 12px 14px;
          background: #f8fafc;
          border-radius: 10px;
          border: 1.5px solid transparent;
        }

        .popup-consent-error {
          border-color: #fecaca;
          background: #fef2f2;
        }

        .popup-check-wrap {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          cursor: pointer;
          margin: 0;
        }

        .popup-checkbox {
          display: none;
        }

        .popup-checkmark {
          width: 20px;
          height: 20px;
          min-width: 20px;
          border-radius: 6px;
          border: 1.5px solid #cbd5e1;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          color: transparent;
          transition: all 0.2s;
          margin-top: 1px;
        }

        .popup-checkbox:checked + .popup-checkmark {
          background: linear-gradient(135deg, #097bdf, #43cea2);
          border-color: transparent;
          color: #fff;
        }

        .popup-consent-text {
          font-size: 12.5px;
          color: #64748b;
          line-height: 1.5;
        }

        .popup-consent-text a {
          color: #097bdf;
          font-weight: 600;
          text-decoration: none;
        }

        .popup-consent-text a:hover {
          text-decoration: underline;
        }

        /* ===== ALERT ===== */
        .popup-alert-error {
          padding: 12px 16px;
          background: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: 10px;
          color: #dc2626;
          font-size: 13px;
          font-weight: 500;
          display: flex;
          align-items: center;
        }

        /* ===== SUBMIT ===== */
        .popup-submit {
          width: 100%;
          padding: 13px 24px;
          border: none;
          border-radius: 10px;
          background: linear-gradient(
            to right,
            #43cea2 0%,
            #185a9d 51%,
            #43cea2 100%
          );
          background-size: 200% auto;
          color: #fff;
          font-family: "Inter", sans-serif;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.4s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          margin-top: 4px;
        }

        .popup-submit:hover {
          background-position: right center;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(67, 206, 162, 0.3);
        }

        .popup-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }

        /* ===== SUCCESS MODAL ===== */
        .popup-success-card {
          max-width: 420px;
          margin: 0 auto;
        }

        .popup-success-body {
          padding: 48px 36px;
          text-align: center;
        }

        .popup-success-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(135deg, #43cea2, #185a9d);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          font-size: 36px;
          color: #fff;
          animation: popupBounce 0.6s ease-out;
        }

        .popup-success-body h3 {
          font-family:
            EB Garamond,
            serif;
          font-size: 26px;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 10px;
        }

        .popup-success-body p {
          font-size: 14.5px;
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .popup-success-body .popup-submit {
          margin: 0 auto;
          border-radius: 50px;
        }

        /* ===== ANIMATIONS ===== */
        @keyframes popupFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes popupSlideUp {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes popupBounce {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.08);
          }
          100% {
            transform: scale(1);
          }
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 576px) {
          .popup-container {
            max-width: 100%;
          }
          .popup-header {
            padding: 24px 20px 22px;
          }
          .popup-header-content h3 {
            font-size: 22px;
          }
          .popup-body {
            padding: 20px 18px 24px;
          }
        }

        /* ===== SCROLLBAR ===== */
        .popup-container::-webkit-scrollbar {
          width: 4px;
        }
        .popup-container::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 4px;
        }
      `}</style>
    </>
  );
};

export default PopupForm;
