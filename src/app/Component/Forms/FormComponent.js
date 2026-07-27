"use client";

import React, { useRef, useState } from "react";
import { Form, Input, Select, Button, Checkbox, notification } from "antd";
import Link from "next/link";
import axios from "axios";
import { gtag_report_conversion } from "../../GoogleTracking";

const { Option } = Select;

const WEB3FORMS_URL = "https://api.web3forms.com/submit";
const WEB3FORMS_KEY = "f51b2c3b-8f16-4d07-b40d-ec3d342fa530";
const MAKE_WEBHOOK_URL =
  "https://hook.eu1.make.com/hwd03miuvndwrthjyd3txxx1ya4792so";
const FAKE_PHONE_BLOCKLIST = new Set([
  "9999999999", "8888888888", "7777777777", "6666666666", "1234567890",
  "9876543210", "0000000000", "1111111111", "9090909090", "9123456789",
]);

const TELECRM_TOKEN = '9a518e10-1d74-485d-ac8e-479f37d5c4bf1782817303004:3abb1a1f-2527-49e0-a4a9-ec7361c2b4a6';
const TELECRM_API   = 'https://next-api.telecrm.in/enterprise/6a3cfd845aaa3fd96c26da19/autoupdatelead';
function fireTeleCRM(name, phone, email) {
  let p = String(phone || '').replace(/\D/g, '');
  if (p.length === 13 && p.startsWith('091')) p = p.slice(3);
  if (p.length === 12 && p.startsWith('91'))  p = p.slice(2);
  if (p.length === 11 && p.startsWith('0'))   p = p.slice(1);
  if (p.length !== 10 || !/^[6-9]/.test(p)) return;
  fetch(TELECRM_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${TELECRM_TOKEN}` },
    body: JSON.stringify({ fields: { name: String(name || '').trim() || 'Unknown', phone: p, email: String(email || '').trim().toLowerCase() } }),
  }).then(r => r.text()).then(t => console.log('[TeleCRM] response:', t)).catch(e => console.error('[TeleCRM] error:', e));
}

const AISENSY_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhMmQ0ZmEzMTJlMDk0MjAzNGE2YWI1NiIsIm5hbWUiOiJPaml2YSBBaSIsImFwcE5hbWUiOiJBaVNlbnN5IiwiY2xpZW50SWQiOiI2YTJkNGZhMzVjZGU4NTBlZjZiYTkzMTEiLCJhY3RpdmVQbGFuIjoiTk9ORSIsImlhdCI6MTc4MTM1NDQwM30.fcLtJxl4XRgYT2v8exQN5WSIiD1YsomDe5zzF_WQDBw';
const AISENSY_URL    = 'https://backend.api-wa.co/campaign/ojiva-ai/api/v2';
function fireAiSensy(name, phone) {
  let p = String(phone || '').replace(/\D/g, '');
  if (p.length === 13 && p.startsWith('091')) p = p.slice(3);
  if (p.length === 12 && p.startsWith('91'))  p = p.slice(2);
  if (p.length === 11 && p.startsWith('0'))   p = p.slice(1);
  if (p.length !== 10 || !/^[6-9]/.test(p)) return;
  const fullName  = String(name || '').trim() || 'User';
  const firstName = fullName.split(' ')[0];
  fetch(AISENSY_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      apiKey: AISENSY_API_KEY, campaignName: 'ojiva_lead_welcome',
      destination: '91' + p, userName: fullName, templateParams: [firstName],
      source: 'new-landing-page form', media: {}, buttons: [], carouselCards: [],
      location: {}, attributes: {}, paramsFallbackValue: { FirstName: 'user' },
    }),
  }).then(r => r.text()).then(t => console.log('[AiSensy] response:', t)).catch(e => console.error('[AiSensy] error:', e));
}

const FormComponent = ({ title, buttonText }) => {
  const [form] = Form.useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const honeypotRef = useRef("");
  const submitLock = useRef(false);

  const onFinish = async (values) => {
    // Ref-level mutex — blocks double-clicks instantly (before React re-renders)
    if (submitLock.current) return;
    submitLock.current = true;
    setIsSubmitting(true);

    if (honeypotRef.current) {
      submitLock.current = false;
      setIsSubmitting(false);
      return;
    }
    try {
      const servicesStr = values.services ? values.services.join(", ") : "";
      const timestamp = new Date().toISOString();

      fireTeleCRM(values.name, values.phone, values.email);
      fireAiSensy(values.name, values.phone);

      const web3Data = {
        name: values.name || "",
        email: values.email || "",
        phone: values.phone || "",
        company: values.company || "",
        service: servicesStr,
        message: values.industry || "",
        access_key: WEB3FORMS_KEY,
        subject: `New Lead - ${values.name || "Unknown"}`,
      };

      const makeWebhookData = {
        name: values.name || "",
        email: values.email || "",
        phone: values.phone || "",
        company: values.company || "",
        service: servicesStr,
        message: values.industry || "",
        timestamp,
      };

      const results = await Promise.allSettled([
        axios.post(WEB3FORMS_URL, web3Data, {
          headers: { "Content-Type": "application/json" },
        }),
        axios.post(MAKE_WEBHOOK_URL, makeWebhookData, {
          headers: { "Content-Type": "application/json" },
        }),
      ]);

      const anySuccess = results.some(
        (r) =>
          r.status === "fulfilled" &&
          (r.value.status === 200 || r.value.status === 201),
      );
      if (!anySuccess) throw new Error("Both endpoints failed");

      try { gtag_report_conversion(); } catch (_) {}
      form.resetFields();
      setShowModal(true);
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      notification.error({
        message: "Error",
        description:
          "There was an error submitting the form. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
      submitLock.current = false;
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <section className="lead-form-wrapper aos">
        <div className="floating-pill pill-one" aria-hidden="true" />
        <div className="floating-pill pill-two" aria-hidden="true" />
        <div className="form-card shadow-sm">
          <div className="form-header text-center ">
            <span className="eyebrow-pill">Instant onboarding</span>
            <h3 className="form-title">{title}</h3>
            <p className="form-subtitle pb-4">
              Get started in just a few steps and go live within minutes.
            </p>
          </div>

          <Form
            layout="vertical"
            form={form}
            onFinish={onFinish}
            size="large"
            className="lead-form"
          >
            {/* Honeypot — hidden from real users */}
            <input
              type="text"
              name="website_url"
              tabIndex={-1}
              autoComplete="new-password"
              aria-hidden="true"
              onChange={(e) => (honeypotRef.current = e.target.value)}
              style={{ display: "none" }}
            />

            <div className="form-grid">
              <Form.Item
                className="form-field"
                label="Full Name"
                name="name"
                rules={[
                  { required: true, message: "Please enter your name" },
                  { min: 3, message: "At least 3 characters" },
                  {
                    pattern: /^[A-Za-z][A-Za-z .'-]{1,59}$/,
                    message: "Letters and spaces only",
                  },
                ]}
              >
                <Input placeholder="Enter your full name" maxLength={60} />
              </Form.Item>

              <Form.Item className="form-field" label="Company" name="company">
                <Input placeholder="Company name (optional)" maxLength={100} />
              </Form.Item>

              <Form.Item
                className="form-field"
                label="Work Email"
                name="email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please enter a valid email",
                  },
                ]}
              >
                <Input placeholder="Enter your work email" maxLength={120} />
              </Form.Item>

              <Form.Item
                className="form-field"
                label="Phone Number"
                name="phone"
                rules={[
                  { required: true, message: "Please enter your phone number" },
                  {
                    pattern: /^[6-9]\d{9}$/,
                    message: "Enter a valid 10-digit Indian mobile",
                  },
                  {
                    validator: (_, value) =>
                      !value || !FAKE_PHONE_BLOCKLIST.has(value)
                        ? Promise.resolve()
                        : Promise.reject(new Error("Enter a real mobile number")),
                  },
                ]}
              >
                <Input
                  addonBefore="+91"
                  placeholder="10-digit mobile number"
                  maxLength={10}
                />
              </Form.Item>

              <Form.Item
                className="form-field full-width"
                label="Services Interested"
                name="services"
                rules={[
                  {
                    required: true,
                    message: "Please select at least one service",
                  },
                ]}
              >
                <Select
                  mode="multiple"
                  placeholder="Select services"
                  allowClear
                  maxTagCount="responsive"
                >
                  <Option value="Waba Service">Waba Service</Option>
                  <Option value="RCS Service">RCS Service</Option>
                  <Option value="Bulk SMS Service">Bulk SMS Service</Option>
                  <Option value="Voice Call Service">Voice Call Service</Option>
                  <Option value="OTP Services">OTP Services</Option>
                </Select>
              </Form.Item>

              <Form.Item
                className="form-field full-width"
                label="Industry"
                name="industry"
              >
                <Select placeholder="Select industry (optional)" allowClear>
                  <Option value="Real Estate">Real Estate</Option>
                  <Option value="Food & Beverage">Food & Beverage</Option>
                  <Option value="Healthcare">Healthcare</Option>
                  <Option value="Tours & Travels">Tours & Travels</Option>
                  <Option value="Gaming">Gaming</Option>
                  <Option value="Retail & eCommerce">Retail & eCommerce</Option>
                  <Option value="Media">Media</Option>
                  <Option value="Government">Government</Option>
                  <Option value="Education">Education</Option>
                </Select>
              </Form.Item>
            </div>

            {/* Terms and Conditions - Single Line */}
            <div className="terms-section">
              <Form.Item
                name="terms"
                valuePropName="checked"
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject(
                            new Error(
                              "You must accept the terms and conditions"
                            )
                          ),
                  },
                ]}
                className="mb-0"
              >
                <Checkbox className="terms-checkbox">
                  I accept the{" "}
                  <Link href="/terms/" target="_blank">
                    terms and conditions
                  </Link>{" "}
                  and agree to receive communication about services.
                </Checkbox>
              </Form.Item>
            </div>

            {/* Submit Button - Centered */}
            <div className="button-section">
              <Button
                type="primary"
                htmlType="submit"
                loading={isSubmitting}
                className="submit-button"
              >
                {buttonText}
              </Button>
            </div>

            <p className="privacy-note">
              We respect your inbox. Our experts will reach out with a tailored
              plan within one business day.
            </p>
          </Form>
        </div>
      </section>

      {showModal && (
        <div
          className="modal fade show d-block success-modal"
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
                  Form Submitted Successfully!
                </h4>
                <p className="text-muted mb-4 lh-base">
                  Thank you for your submission. We have received your
                  information and our team will get back to you shortly.
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
        .lead-form-wrapper {
          position: relative;
          border-radius: 32px;
          padding: 1.75rem;
          background: linear-gradient(135deg, #f4f7ff 0%, #ffffff 100%);
          overflow: hidden;
        }

        .form-card {
          position: relative;
          background: #ffffff;
          border-radius: 24px;
          padding: 2rem;
          box-shadow: 0px 25px 60px rgba(10, 38, 71, 0.08);
        }

        .floating-pill {
          position: absolute;
          border-radius: 999px;
          filter: blur(0px);
          opacity: 0.4;
          animation: pulse 8s ease-in-out infinite alternate;
        }

        .pill-one {
          width: 220px;
          height: 220px;
          background: radial-gradient(circle, #8ec5fc, #e0c3fc);
          top: -60px;
          right: -20px;
        }

        .pill-two {
          width: 180px;
          height: 180px;
          background: radial-gradient(circle, #ffecd2, #fcb69f);
          bottom: -40px;
          left: -30px;
        }

        .form-header {
          margin-bottom: 1.5rem;
        }

        .eyebrow-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.35rem 0.9rem;
          margin-bottom: 0.75rem;
          border-radius: 999px;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          background: rgba(13, 110, 253, 0.1);
          color: #0d6efd;
          font-weight: 600;
        }

        .form-title {
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 0.5rem;
          font-size: clamp(1.5rem, 4vw, 1.9rem);
        }

        .form-subtitle {
          color: #475569;
          margin-bottom: 1.25rem;
        }

        .lead-form {
          margin-top: 1.5rem;
        }

        .form-grid {
          display: grid;
          gap: 1.25rem;
          grid-template-columns: 1fr;
          margin-bottom: 1.5rem;
        }

        .full-width {
          grid-column: span 1;
        }

        /* Terms Section - Single Line Centered */
        .terms-section {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 1.25rem;
          padding: 0 1rem;
        }

        .terms-section :global(.ant-form-item) {
          margin-bottom: 0;
        }

        .terms-section :global(.terms-checkbox) {
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 100%;
        }

        /* Button Section - Centered */
        .button-section {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 1.25rem;
        }

        .submit-button {
          border-radius: 14px;
          font-size: 1rem;
          padding: 0.9rem 3rem;
          background: linear-gradient(135deg, #0d6efd, #5b7cfd);
          border: none;
          box-shadow: 0 12px 25px rgba(13, 110, 253, 0.25);
          min-width: 200px;
        }

        .submit-button:hover {
          background: linear-gradient(135deg, #0b5ed7, #4a63d8);
          transform: translateY(-2px);
          box-shadow: 0 14px 30px rgba(13, 110, 253, 0.3);
        }

        .privacy-note {
          font-size: 0.9rem;
          color: #64748b;
          text-align: center;
          margin: 0;
        }

        @media (min-width: 768px) {
          .lead-form-wrapper {
            padding: 2.25rem;
          }

          .form-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .full-width {
            grid-column: span 2;
          }
        }

        @media (max-width: 767px) {
          .terms-section :global(.terms-checkbox) {
            white-space: normal;
            font-size: 0.9rem;
          }

          .submit-button {
            width: 100%;
            max-width: 100%;
          }

          .button-section {
            padding: 0 0.5rem;
          }
        }

        @media (max-width: 575px) {
          .form-card {
            padding: 1.5rem;
          }

          .privacy-note {
            text-align: left;
          }

          .terms-section {
            padding: 0;
          }
        }

        .success-modal .modal-dialog {
          max-width: 420px;
          width: 90%;
          margin: 2rem auto;
        }

        .success-modal .modal-body {
          border-radius: 24px;
        }

        @media (max-width: 575px) {
          .success-modal .modal-body {
            padding: 2.5rem 1.5rem;
          }
        }

        @keyframes pulse {
          from {
            transform: translateY(0px);
            opacity: 0.5;
          }
          to {
            transform: translateY(15px);
            opacity: 0.8;
          }
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

        .modal {
          animation: fadeIn 0.3s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .modal-content {
          animation: slideUp 0.3s ease-out;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <style jsx global>{`
        .lead-form .ant-form-item-label > label {
          font-weight: 600;
          color: #0f172a;
        }

        .lead-form .ant-input,
        .lead-form .ant-select-selector {
          border-radius: 14px !important;
          border: 1px solid #e2e8f0;
          padding: 0.65rem 1rem;
          background-color: #f8fafc;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .lead-form .ant-input:hover,
        .lead-form .ant-select-selector:hover,
        .lead-form .ant-input:focus,
        .lead-form .ant-select-focused .ant-select-selector {
          border-color: #0d6efd !important;
          box-shadow: 0 0 0 3px rgba(13, 110, 253, 0.15);
          background-color: #ffffff;
        }

        .lead-form .ant-select-selector {
          height: auto !important;
        }

        .lead-form .ant-select-selection-placeholder,
        .lead-form .ant-select-selection-item {
          font-size: 0.95rem;
        }

        .lead-form .ant-form-item-explain-error {
          font-size: 0.85rem;
        }

        .lead-form .ant-checkbox + span {
          color: #475569;
        }

        .lead-form .ant-checkbox + span a {
          color: #0d6efd;
          text-decoration: none;
          font-weight: 500;
        }

        .lead-form .ant-checkbox + span a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
};

export default FormComponent;
