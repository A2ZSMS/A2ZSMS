"use client";
import React, { useState } from "react";
import Link from "next/link";
import { gtag_report_conversion } from "../../../GoogleTracking";

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
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "phone") {
      setFormData((prev) => ({ ...prev, [name]: value.replace(/\D/g, "") }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
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
    } else if (!/^\d{10,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Enter valid phone (min 10 digits)";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please select a subject";
    }

    if (!formData.consent) {
      newErrors.consent = "You must agree to the terms and conditions";
    }

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

      await Promise.all([
        fetch("https://hook.eu2.make.com/mmfvqeha16nyft89xe7eo54kzxcdwab6", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            company: formData.company,
            service: formData.subject,
            message: formData.message,
            timestamp,
          }),
        }),
        fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            company: formData.company,
            service: formData.subject,
            message: formData.message,
            access_key: "f51b2c3b-8f16-4d07-b40d-ec3d342fa530",
          }),
        }),
      ]);

      gtag_report_conversion();
      setShowSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        consent: false,
      });
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showSuccess) {
    return (
      <div style={styles.successWrap}>
        <div style={styles.successIcon}>
          <i className="bi bi-check-lg"></i>
        </div>
        <h4 className="fw-bold mb-2">Message Sent Successfully!</h4>
        <p className="text-muted mb-3">
          Thank you for reaching out. Our team will get back to you within 24
          hours.
        </p>
        <button style={styles.submitBtn} onClick={() => setShowSuccess(false)}>
          <i className="bi bi-arrow-left me-2"></i>Send Another Message
        </button>
      </div>
    );
  }

  return (
    <>
      {/* Response time badge */}
      <div style={styles.responseBadge}>
        <span style={styles.responseDot}></span>
        Average response time: <strong>under 24 hours</strong>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <div className="row g-3 aos">
          {/* Full Name */}
          <div className="col-md-6">
            <label style={styles.label}>
              Full Name <span style={styles.required}>*</span>
            </label>
            <div style={styles.inputWrap}>
              <i className={`bi bi-person`} style={styles.inputIcon}></i>
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                style={{
                  ...styles.input,
                  ...(errors.name ? styles.inputError : {}),
                }}
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            {errors.name && <p style={styles.errorText}>{errors.name}</p>}
          </div>

          {/* Email */}
          <div className="col-md-6">
            <label style={styles.label}>
              Email Address <span style={styles.required}>*</span>
            </label>
            <div style={styles.inputWrap}>
              <i className="bi bi-envelope" style={styles.inputIcon}></i>
              <input
                type="email"
                name="email"
                placeholder="you@company.com"
                style={{
                  ...styles.input,
                  ...(errors.email ? styles.inputError : {}),
                }}
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            {errors.email && <p style={styles.errorText}>{errors.email}</p>}
          </div>

          {/* Phone */}
          <div className="col-md-6">
            <label style={styles.label}>
              Phone Number <span style={styles.required}>*</span>
            </label>
            <div style={styles.inputWrap}>
              <i className="bi bi-telephone" style={styles.inputIcon}></i>
              <input
                type="tel"
                name="phone"
                placeholder="10-digit mobile number"
                style={{
                  ...styles.input,
                  ...(errors.phone ? styles.inputError : {}),
                }}
                value={formData.phone}
                onChange={handleInputChange}
                maxLength={15}
              />
            </div>
            {errors.phone && <p style={styles.errorText}>{errors.phone}</p>}
          </div>

          {/* Company */}
          <div className="col-md-6">
            <label style={styles.label}>Company Name</label>
            <div style={styles.inputWrap}>
              <i className="bi bi-building" style={styles.inputIcon}></i>
              <input
                type="text"
                name="company"
                placeholder="Your Company (optional)"
                style={styles.input}
                value={formData.company}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Subject */}
          <div className="col-12">
            <label style={styles.label}>
              Subject <span style={styles.required}>*</span>
            </label>
            <div style={styles.inputWrap}>
              <i className="bi bi-grid" style={styles.inputIcon}></i>
              <select
                name="subject"
                style={{
                  ...styles.input,
                  ...(errors.subject ? styles.inputError : {}),
                  cursor: "pointer",
                  appearance: "auto",
                }}
                value={formData.subject}
                onChange={handleInputChange}
              >
                <option value="">Choose a subject</option>
                <option value="Waba Service">Waba Service</option>
                <option value="RCS Service">RCS Service</option>
                <option value="Bulk SMS Service">Bulk SMS Service</option>
                <option value="Voice Call Service">Voice Call Service</option>
                <option value="OTP Service">OTP Service</option>
                <option value="Other">Other</option>
              </select>
            </div>
            {errors.subject && <p style={styles.errorText}>{errors.subject}</p>}
          </div>

          {/* Message */}
          <div className="col-12">
            <label style={styles.label}>Your Message</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Tell us more about your requirements..."
              style={{ ...styles.input, ...styles.textarea }}
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
          </div>

          {/* Consent */}
          <div className="col-12">
            <div
              style={{
                ...styles.consentBox,
                ...(errors.consent ? styles.consentBoxError : {}),
              }}
            >
              <input
                type="checkbox"
                name="consent"
                id="consent"
                checked={formData.consent}
                onChange={handleInputChange}
                style={styles.checkbox}
              />
              <label htmlFor="consent" style={styles.consentLabel}>
                I authorize A2Z SMS to send notifications via
                SMS/Messages/Promotional/Informational messages and agree to the{" "}
                <Link
                  href="/terms/"
                  style={styles.consentLink}
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy/"
                  style={styles.consentLink}
                >
                  Privacy Policy
                </Link>
                . <span style={styles.required}>*</span>
              </label>
            </div>
            {errors.consent && (
              <p style={styles.errorText}>{errors.consent}</p>
            )}
          </div>

          {/* Submit */}
          <div className="col-12 mt-2">
            <button
              type="submit"
              style={{
                ...styles.submitBtn,
                ...(isSubmitting ? styles.submitBtnDisabled : {}),
              }}
              disabled={isSubmitting}
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
                  Send Message <i className="bi bi-send-fill ms-1"></i>
                </>
              )}
            </button>

            {/* Trust badges */}
            <div style={styles.trustRow}>
              <div style={styles.trustItem}>
                <i className="bi bi-shield-lock-fill" style={styles.trustIcon}></i>
                <span>256-bit SSL</span>
              </div>
              <div style={styles.trustItem}>
                <i className="bi bi-patch-check-fill" style={styles.trustIcon}></i>
                <span>Verified Partner</span>
              </div>
              <div style={styles.trustItem}>
                <i className="bi bi-clock-fill" style={styles.trustIcon}></i>
                <span>Reply in 24 hrs</span>
              </div>
            </div>
          </div>

          {/* Error alert */}
          {submitStatus === "error" && (
            <div className="col-12">
              <div
                style={{
                  background: "#fee2e2",
                  border: "1px solid #fecaca",
                  borderRadius: "12px",
                  padding: "12px 16px",
                  color: "#dc2626",
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <i className="bi bi-exclamation-circle-fill"></i>
                There was an issue submitting your message. Please try again or
                contact us directly.
              </div>
            </div>
          )}
        </div>
      </form>

      <style jsx>{`
        input:focus,
        select:focus,
        textarea:focus {
          border-color: #0d6efd !important;
          box-shadow: 0 0 0 3px rgba(13, 110, 253, 0.12) !important;
          outline: none;
        }
        button[type="submit"]:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(13, 110, 253, 0.3) !important;
        }
      `}</style>
    </>
  );
};

const styles = {
  responseBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    background: "#e8f0fe",
    borderRadius: "999px",
    padding: "6px 16px",
    fontSize: "12px",
    color: "#374151",
    marginBottom: "20px",
  },
  responseDot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: "#0d6efd",
    display: "inline-block",
    animation: "pulse 2s ease-in-out infinite",
  },
  label: {
    display: "block",
    fontSize: "13px",
    fontWeight: "600",
    color: "#1a2332",
    marginBottom: "6px",
  },
  required: {
    color: "#ef4444",
  },
  inputWrap: {
    position: "relative",
  },
  inputIcon: {
    position: "absolute",
    left: "14px",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "15px",
    color: "#8a9ba3",
    pointerEvents: "none",
    zIndex: 1,
  },
  input: {
    width: "100%",
    padding: "12px 14px 12px 40px",
    border: "1.5px solid #e2e8f0",
    borderRadius: "12px",
    fontSize: "14px",
    color: "#1a2332",
    background: "#fff",
    transition: "all 0.2s",
    outline: "none",
    fontFamily: "inherit",
  },
  inputError: {
    borderColor: "#ef4444",
  },
  textarea: {
    paddingLeft: "14px",
    resize: "vertical",
    minHeight: "100px",
  },
  errorText: {
    fontSize: "12px",
    color: "#ef4444",
    marginTop: "4px",
    marginBottom: "0",
  },
  consentBox: {
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
    background: "#f8fafc",
    border: "1.5px solid #e2e8f0",
    borderRadius: "12px",
    padding: "14px 16px",
  },
  consentBoxError: {
    borderColor: "#ef4444",
  },
  checkbox: {
    width: "16px",
    height: "16px",
    marginTop: "2px",
    flexShrink: 0,
    cursor: "pointer",
    accentColor: "#0d6efd",
  },
  consentLabel: {
    fontSize: "13px",
    color: "#6b7280",
    lineHeight: "1.6",
    cursor: "pointer",
  },
  consentLink: {
    color: "#0d6efd",
    textDecoration: "none",
    fontWeight: "600",
  },
  submitBtn: {
    width: "100%",
    padding: "13px 24px",
    border: "none",
    borderRadius: "999px",
    background: "linear-gradient(135deg, #0d6efd 0%, #0b5ed7 100%)",
    color: "#fff",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    boxShadow: "0 4px 16px rgba(13, 110, 253, 0.3)",
    fontFamily: "inherit",
  },
  submitBtnDisabled: {
    opacity: 0.6,
    cursor: "not-allowed",
    transform: "none",
    boxShadow: "none",
  },
  trustRow: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "16px",
    flexWrap: "wrap",
  },
  trustItem: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "12px",
    color: "#8a9ba3",
  },
  trustIcon: {
    color: "#0d6efd",
    fontSize: "14px",
  },
  successWrap: {
    textAlign: "center",
    padding: "32px 16px",
  },
  successIcon: {
    width: "64px",
    height: "64px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #0d6efd, #0b5ed7)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "28px",
    color: "#fff",
    margin: "0 auto 16px",
  },
};

export default ContactForm;
