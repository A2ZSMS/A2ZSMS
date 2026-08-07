"use client";

import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect, useRef, useState } from "react";
import { Button, Form, Input, Space, Typography } from "antd";
import { gtag_report_conversion } from "../../../GoogleTracking";

const { Text } = Typography;

const MAKE_WEBHOOK_URL = "https://hook.eu1.make.com/hwd03miuvndwrthjyd3txxx1ya4792so";
const WEB3FORMS_URL = "https://api.web3forms.com/submit";
const WEB3FORMS_KEY = "f51b2c3b-8f16-4d07-b40d-ec3d342fa530";
const FAKE_PHONE_BLOCKLIST = new Set([
  "9999999999","8888888888","7777777777","6666666666","1234567890",
  "9876543210","0000000000","1111111111","9090909090","9123456789",
]);

const TELECRM_TOKEN = '9a518e10-1d74-485d-ac8e-479f37d5c4bf1782817303004:3abb1a1f-2527-49e0-a4a9-ec7361c2b4a6';
const TELECRM_API   = 'https://next-api.telecrm.in/enterprise/6a3cfd845aaa3fd96c26da19/autoupdatelead';
function fireTeleCRM(name, phone, email) {
  let p = String(phone || '').replace(/\D/g, '');
  if (p.length === 13 && p.startsWith('091')) p = p.slice(3);
  if (p.length === 12 && p.startsWith('91'))  p = p.slice(2);
  if (p.length === 11 && p.startsWith('0'))   p = p.slice(1);
  if (p.length !== 10 || !/^[6-9]/.test(p)) return;
  const cleanEmail = String(email || '').trim().toLowerCase() || `${p}@lead.a2zsms.in`;
  const opts = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${TELECRM_TOKEN}` },
    body: JSON.stringify({ fields: { name: String(name || '').trim() || 'Unknown', phone: p, email: cleanEmail } }),
    keepalive: true,
  };
  (async () => {
    for (let i = 0; i < 2; i++) {
      try {
        const r = await fetch(TELECRM_API, opts);
        const t = await r.text();
        console.log('[TeleCRM] response:', r.status, t);
        if (r.ok) return;
      } catch (e) {
        console.error('[TeleCRM] error:', e);
      }
      if (i === 0) await new Promise(res => setTimeout(res, 1000));
    }
  })();
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

function fireMakeAndW3F(name, phone) {
  const timestamp = new Date().toISOString();
  const payload = {
    name: String(name || '').trim(),
    email: '',
    phone: String(phone || '').replace(/\D/g, ''),
    company: '',
    service: 'WhatsApp Test Message',
    message: 'Lead from Test WhatsApp Widget on /whatsapp-api',
    timestamp,
  };
  fetch(MAKE_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  }).catch((e) => console.error('[Make.com] error:', e));
  fetch(WEB3FORMS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...payload,
      access_key: WEB3FORMS_KEY,
      subject: `WhatsApp Widget Lead - ${payload.name || 'Unknown'}`,
    }),
  }).catch((e) => console.error('[Web3Forms] error:', e));
}

const Home = () => {
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("secondary");
  const [isSending, setIsSending] = useState(false);
  const [form] = Form.useForm();
  const compactWrapperStyle = {
    maxWidth: 520,
    width: "100%",
  };
  const formCardStyle = {
    marginTop: 16,
    padding: "16px 18px",
    backgroundColor: "#f9fbf9",
    border: "1px solid rgba(22, 163, 74, 0.18)",
    borderRadius: 16,
  };
  const inputStyle = {
    height: 46,
    borderRadius: 999,
    paddingInline: 18,
    fontSize: 15,
    fontFamily: "inherit",
  };
  const buttonStyle = {
    height: 46,
    borderRadius: 999,
    paddingInline: 28,
    backgroundColor: "#16a34a",
    borderColor: "#16a34a",
    fontWeight: 600,
    fontSize: 14,
    fontFamily: "inherit",
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation runs only once
    });
  }, []);

  const submitLock = useRef(false);

  const handleFinish = async (values) => {
    if (submitLock.current) return;
    setStatusMessage("");
    setStatusType("secondary");

    const trimmedName = values.name.trim();
    const mobileDigits = values.mobile.replace(/\D/g, "");

    if (mobileDigits.length !== 10 || !/^[6-9]/.test(mobileDigits)) {
      setStatusMessage("Enter a valid 10-digit Indian mobile.");
      setStatusType("danger");
      return;
    }
    if (FAKE_PHONE_BLOCKLIST.has(mobileDigits)) {
      setStatusMessage("Enter a real mobile number.");
      setStatusType("danger");
      return;
    }

    const url = `https://api.msgmaker.in/api/v1/wa-templates/send/cmkkzen8910zk7axpfclvgaen/16133/1949/API/${encodeURIComponent(
      mobileDigits,
    )}?body1=${encodeURIComponent(trimmedName)}`;

    submitLock.current = true;
    try {
      setIsSending(true);

      fireTeleCRM(trimmedName, mobileDigits, "");
      fireAiSensy(trimmedName, mobileDigits);
      fireMakeAndW3F(trimmedName, mobileDigits);
      try { gtag_report_conversion(); } catch (_) {}

      const response = await fetch(url, { method: "GET" });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatusMessage("Message sent successfully.");
      setStatusType("success");
      form.resetFields();
    } catch (error) {
      setStatusMessage("Unable to send message. Please try again.");
      setStatusType("danger");
    } finally {
      setIsSending(false);
      submitLock.current = false;
    }
  };

  const handleFinishFailed = (info) => {
    const firstError = info?.errorFields?.[0]?.errors?.[0];
    if (firstError) {
      setStatusMessage(firstError);
      setStatusType("danger");
    }
  };

  const handleValuesChange = () => {
    if (statusMessage) {
      setStatusMessage("");
      setStatusType("secondary");
    }
  };

  return (
    <section className="py-5 bg2">
      <div className="container aos">
        <div className="row align-items-center aos">
          {/* Left Content */}
          <div className="col-md-6 para-color" data-aos="fade-right">
            <h1 className="fw-bold mb-3 lh-sm display-6">
              Elevate Your Business with{" "}
              <span className="text-success">Cloud WhatsApp API</span>
            </h1>
            <p className="text-muted mb-3 lh-lg">
              Transform your business engagement with the customer through our
              Cloud WhatsApp API. Enjoy effortless connectivity, automation as
              well as scalability on a single trusted platform.
            </p>
            <ul className="list-unstyled mt-4 mb-0">
              <li className="d-flex align-items-start mb-3 fs-6">
                <i className="bi bi-check-circle-fill text-success me-3"></i>
                <span>
                  Automate customer support with intelligent chatbots.
                </span>
              </li>
              <li className="d-flex align-items-start mb-3 fs-6">
                <i className="bi bi-check-circle-fill text-success me-3"></i>
                <span>Send personalized messages at scale with templates.</span>
              </li>
              <li className="d-flex align-items-start mb-3 fs-6">
                <i className="bi bi-check-circle-fill text-success me-3"></i>
                <span>
                  Provide secure and instant OTP verification services.
                </span>
              </li>
              <li className="d-flex align-items-start mb-3 fs-6">
                <i className="bi bi-check-circle-fill text-success me-3"></i>
                <span>
                  Deliver real-time notifications for orders and updates.
                </span>
              </li>
              <li className="d-flex align-items-start fs-6">
                <i className="bi bi-check-circle-fill text-success me-3"></i>
                <span>
                  Integrate seamlessly with CRMs for unified workflows.
                </span>
              </li>
            </ul>
            <div className="d-flex gap-3 mt-4">
              <a
                href="/try-for-free"
                className="btn btn-success px-4 py-2 fw-semibold"
              >
                <i className="bi bi-rocket-takeoff me-2"></i>
                Try For Free
              </a>
              <a
                href="/request-demo"
                className="btn btn-outline-success px-4 py-2 fw-semibold"
              >
                <i className="bi bi-calendar-check me-2"></i>
                Request Demo
              </a>
            </div>
            <div style={formCardStyle}>
              <div className="mb-2">
                <h5 className="mb-1 fw-semibold">Test WhatsApp Message</h5>
                <p className="mb-0 text-muted small">
                  Send a sample template to your number in seconds.
                </p>
              </div>
              <Form
                form={form}
                onFinish={handleFinish}
                onFinishFailed={handleFinishFailed}
                onValuesChange={handleValuesChange}
              >
                <div style={compactWrapperStyle}>
                  <div className="d-flex flex-column gap-2">
                    <Space.Compact
                      block
                      size="middle"
                      style={{ width: "100%" }}
                    >
                      <Form.Item
                        name="name"
                        rules={[
                          {
                            required: true,
                            whitespace: true,
                            message: "Please enter your name.",
                          },
                          { min: 3, message: "At least 3 characters" },
                          {
                            pattern: /^[A-Za-z][A-Za-z .'-]{1,59}$/,
                            message: "Letters and spaces only",
                          },
                        ]}
                        noStyle
                      >
                        <Input
                          placeholder="Enter your name"
                          aria-label="Name"
                          style={inputStyle}
                        />
                      </Form.Item>
                      <Form.Item
                        name="mobile"
                        rules={[
                          { required: true, message: "Please enter your mobile number." },
                          {
                            validator: (_, value) => {
                              const digits = (value || "").replace(/\D/g, "");
                              if (!/^[6-9]\d{9}$/.test(digits)) {
                                return Promise.reject(
                                  new Error("Enter a valid 10-digit Indian mobile."),
                                );
                              }
                              if (FAKE_PHONE_BLOCKLIST.has(digits)) {
                                return Promise.reject(
                                  new Error("Enter a real mobile number."),
                                );
                              }
                              return Promise.resolve();
                            },
                          },
                        ]}
                        normalize={(value) =>
                          (value || "").replace(/\D/g, "").slice(0, 10)
                        }
                        noStyle
                      >
                        <Input
                          placeholder="Enter 10 digit mobile number"
                          aria-label="Mobile number"
                          className="ms-3"
                          inputMode="numeric"
                          maxLength={10}
                          style={inputStyle}
                        />
                      </Form.Item>
                    </Space.Compact>
                    <div className="d-flex justify-content-center">
                      <Button
                        type="primary"
                        htmlType="submit"
                        loading={isSending}
                        style={buttonStyle}
                        className="px-5"
                      >
                        Send
                      </Button>
                    </div>
                  </div>
                </div>
                {statusMessage ? (
                  <Text type={statusType} className="d-block mt-2 small">
                    {statusMessage}
                  </Text>
                ) : null}
              </Form>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="col-md-6 text-center" data-aos="fade-left">
            <img
              className="img-fluid rounded"
              src="/image/product/whatsapp.png"
              alt="Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
