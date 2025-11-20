"use client";
import React, { useState, useEffect } from "react";

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

  // Show popup after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 8000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

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
      newErrors.email = "Please enter a valid email";
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

    if (!formData.consent) {
      newErrors.consent = "You must agree to continue";
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
        fetch("https://hook.eu2.make.com/mmfvqeha16nyft89xe7eo54kzxcdwab6", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(makeWebhookData),
        }),
        fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(web3FormsData),
        }),
      ]);

      if (makeResponse.ok && web3Response.ok) {
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
      {/* Bootstrap CSS CDN - Add this to your _app.js or layout */}
      {/* <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      /> */}

      {/* Main Contact Form Popup */}
      {showPopup && (
        <div
          className="modal fade show d-block"
          style={{
            backgroundColor: "rgba(0,0,0,0.7)",
            zIndex: 9999,
            animation: "fadeIn 0.3s ease",
          }}
          onClick={(e) => {
            if (e.target.classList.contains("modal")) {
              closePopup();
            }
          }}
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            style={{ maxWidth: "600px" }}
          >
            <div
              className="modal-content"
              style={{
                borderRadius: "20px",
                border: "none",
                boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                overflow: "hidden",
                animation: "slideUp 0.4s ease-out",
              }}
            >
              {/* Modal Header with Gradient */}
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #0d6efd 0%, #0b5ed7 100%)",
                  padding: "30px",
                  position: "relative",
                }}
              >
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={closePopup}
                  style={{
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    fontSize: "14px",
                  }}
                ></button>
                <div className="text-white text-center">
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      background: "rgba(255,255,255,0.2)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 15px",
                    }}
                  >
                    {" "}
                    <small className="fw-bold">A2Z</small>
                    <i
                      className="fas fa-envelope"
                      style={{ fontSize: "24px" }}
                    ></i>
                  </div>
                  <h3 className="fw-bold mb-2">Let's Connect!</h3>
                  <p
                    className="mb-0"
                    style={{ fontSize: "15px", opacity: 0.9 }}
                  >
                    Fill out the form below and our team will get back to you
                    within 24 hours
                  </p>
                </div>
              </div>

              {/* Modal Body */}
              <div className="modal-body" style={{ padding: "40px 35px" }}>
                <div>
                  <div className="row g-3">
                    {/* Name */}
                    <div className="col-md-6">
                      <label
                        className="form-label fw-semibold"
                        style={{ fontSize: "14px", color: "#333" }}
                      >
                        Full Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        className={`form-control ${
                          errors.name ? "is-invalid" : ""
                        }`}
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleInputChange}
                        style={{
                          borderRadius: "10px",
                          border: "2px solid #e0e0e0",
                          padding: "12px 16px",
                          fontSize: "15px",
                          transition: "all 0.3s",
                        }}
                      />
                      {errors.name && (
                        <div
                          className="text-danger mt-1"
                          style={{ fontSize: "13px" }}
                        >
                          <i className="fas fa-exclamation-circle me-1"></i>
                          {errors.name}
                        </div>
                      )}
                    </div>

                    {/* Email */}
                    <div className="col-md-6">
                      <label
                        className="form-label fw-semibold"
                        style={{ fontSize: "14px", color: "#333" }}
                      >
                        Email Address <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        className={`form-control ${
                          errors.email ? "is-invalid" : ""
                        }`}
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        style={{
                          borderRadius: "10px",
                          border: "2px solid #e0e0e0",
                          padding: "12px 16px",
                          fontSize: "15px",
                          transition: "all 0.3s",
                        }}
                      />
                      {errors.email && (
                        <div
                          className="text-danger mt-1"
                          style={{ fontSize: "13px" }}
                        >
                          <i className="fas fa-exclamation-circle me-1"></i>
                          {errors.email}
                        </div>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="col-md-6">
                      <label
                        className="form-label fw-semibold"
                        style={{ fontSize: "14px", color: "#333" }}
                      >
                        Phone Number <span className="text-danger">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        className={`form-control ${
                          errors.phone ? "is-invalid" : ""
                        }`}
                        placeholder="+91 84310 86185"
                        value={formData.phone}
                        onChange={handleInputChange}
                        style={{
                          borderRadius: "10px",
                          border: "2px solid #e0e0e0",
                          padding: "12px 16px",
                          fontSize: "15px",
                          transition: "all 0.3s",
                        }}
                      />
                      {errors.phone && (
                        <div
                          className="text-danger mt-1"
                          style={{ fontSize: "13px" }}
                        >
                          <i className="fas fa-exclamation-circle me-1"></i>
                          {errors.phone}
                        </div>
                      )}
                    </div>

                    {/* Company */}
                    <div className="col-md-6">
                      <label
                        className="form-label fw-semibold"
                        style={{ fontSize: "14px", color: "#333" }}
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        className="form-control"
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={handleInputChange}
                        style={{
                          borderRadius: "10px",
                          border: "2px solid #e0e0e0",
                          padding: "12px 16px",
                          fontSize: "15px",
                          transition: "all 0.3s",
                        }}
                      />
                    </div>

                    {/* Subject */}
                    <div className="col-12">
                      <label
                        className="form-label fw-semibold"
                        style={{ fontSize: "14px", color: "#333" }}
                      >
                        Service Interested In{" "}
                        <span className="text-danger">*</span>
                      </label>
                      <select
                        name="subject"
                        className={`form-select ${
                          errors.subject ? "is-invalid" : ""
                        }`}
                        value={formData.subject}
                        onChange={handleInputChange}
                        style={{
                          borderRadius: "10px",
                          border: "2px solid #e0e0e0",
                          padding: "12px 16px",
                          fontSize: "15px",
                          transition: "all 0.3s",
                        }}
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
                      {errors.subject && (
                        <div
                          className="text-danger mt-1"
                          style={{ fontSize: "13px" }}
                        >
                          <i className="fas fa-exclamation-circle me-1"></i>
                          {errors.subject}
                        </div>
                      )}
                    </div>

                    {/* Message */}
                    <div className="col-12">
                      <label
                        className="form-label fw-semibold"
                        style={{ fontSize: "14px", color: "#333" }}
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows="3"
                        className="form-control"
                        placeholder="Tell us more about your requirements..."
                        value={formData.message}
                        onChange={handleInputChange}
                        style={{
                          borderRadius: "10px",
                          border: "2px solid #e0e0e0",
                          padding: "12px 16px",
                          fontSize: "15px",
                          resize: "vertical",
                          transition: "all 0.3s",
                        }}
                      ></textarea>
                    </div>

                    {/* Consent */}
                    <div className="col-12">
                      <div
                        className={`p-3 ${
                          errors.consent ? "border border-danger" : ""
                        }`}
                        style={{
                          background: "#f8f9fa",
                          borderRadius: "10px",
                        }}
                      >
                        <div className="form-check">
                          <input
                            type="checkbox"
                            name="consent"
                            id="consent"
                            className="form-check-input"
                            checked={formData.consent}
                            onChange={handleInputChange}
                            style={{
                              width: "18px",
                              height: "18px",
                              marginTop: "2px",
                            }}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="consent"
                            style={{
                              fontSize: "13px",
                              color: "#666",
                              lineHeight: "1.6",
                            }}
                          >
                            I authorize A2Z SMS to send notifications and agree
                            to the{" "}
                            <a
                              href="/terms/"
                              className="text-primary text-decoration-none fw-semibold"
                            >
                              Terms
                            </a>{" "}
                            and{" "}
                            <a
                              href="/privacy/"
                              className="text-primary text-decoration-none fw-semibold"
                            >
                              Privacy Policy
                            </a>
                            . <span className="text-danger">*</span>
                          </label>
                        </div>
                        {errors.consent && (
                          <div
                            className="text-danger mt-2"
                            style={{ fontSize: "13px" }}
                          >
                            <i className="fas fa-exclamation-circle me-1"></i>
                            {errors.consent}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Error Message */}
                    {submitStatus === "error" && (
                      <div className="col-12">
                        <div
                          className="alert alert-danger d-flex align-items-center mb-0"
                          role="alert"
                          style={{
                            borderRadius: "10px",
                            border: "none",
                            background: "#fee",
                          }}
                        >
                          <i className="fas fa-exclamation-triangle me-2"></i>
                          <div style={{ fontSize: "14px" }}>
                            Failed to submit. Please try again.
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Submit Button */}
                    <div className="col-12 mt-4">
                      <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="btn w-100"
                        style={{
                          background:
                            "linear-gradient(135deg, #0d6efd 0%, #0b5ed7 100%)",
                          border: "none",
                          borderRadius: "10px",
                          padding: "14px",
                          fontSize: "16px",
                          fontWeight: "600",
                          color: "white",
                          transition: "all 0.3s",
                          boxShadow: "0 4px 15px rgba(13, 110, 253, 0.3)",
                        }}
                        onMouseEnter={(e) => {
                          if (!isSubmitting) {
                            e.target.style.transform = "translateY(-2px)";
                            e.target.style.boxShadow =
                              "0 6px 20px rgba(13, 110, 253, 0.4)";
                          }
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = "translateY(0)";
                          e.target.style.boxShadow =
                            "0 4px 15px rgba(13, 110, 253, 0.3)";
                        }}
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
                            <i className="fas fa-paper-plane me-2"></i>
                            Send Message
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div
          className="modal fade show d-block"
          style={{
            backgroundColor: "rgba(0,0,0,0.7)",
            zIndex: 9999,
            animation: "fadeIn 0.3s ease",
          }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div
              className="modal-content"
              style={{
                borderRadius: "20px",
                border: "none",
                boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                animation: "zoomIn 0.4s ease-out",
              }}
            >
              <div
                className="modal-body text-center"
                style={{ padding: "50px 40px" }}
              >
                <div
                  style={{
                    width: "90px",
                    height: "90px",
                    background:
                      "linear-gradient(135deg, #00d084 0%, #00a86b 100%)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 25px",
                    animation: "bounceIn 0.6s ease-out",
                  }}
                >
                  <i
                    className="fas fa-check"
                    style={{ fontSize: "40px", color: "white" }}
                  ></i>
                </div>
                <h3 className="fw-bold mb-3" style={{ color: "#333" }}>
                  Message Sent Successfully!
                </h3>
                <p className="mb-4" style={{ color: "#666", fontSize: "15px" }}>
                  Thank you for reaching out to us. Our team will get back to
                  you within 24 hours.
                </p>
                <button
                  type="button"
                  className="btn btn-lg px-5"
                  onClick={closeSuccessModal}
                  style={{
                    background:
                      "linear-gradient(135deg, #0d6efd 0%, #0b5ed7 100%)",
                    border: "none",
                    borderRadius: "50px",
                    padding: "12px 40px",
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "white",
                    boxShadow: "0 4px 15px rgba(13, 110, 253, 0.3)",
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
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
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

        .form-control:focus,
        .form-select:focus {
          border-color: #0d6efd !important;
          box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.15) !important;
          outline: none;
        }

        .form-check-input:checked {
          background-color: #0d6efd;
          border-color: #0d6efd;
        }

        .btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
      `}</style>
    </>
  );
};

export default PopupForm;
