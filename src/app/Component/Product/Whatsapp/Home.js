"use client";

import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect, useState } from "react";
import { Button, Form, Input, Space, Typography } from "antd";

const { Text } = Typography;

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

  const handleFinish = async (values) => {
    setStatusMessage("");
    setStatusType("secondary");

    const trimmedName = values.name.trim();
    const mobileDigits = values.mobile.replace(/\D/g, "");

    const url = `https://api.msgmaker.in/api/v1/wa-templates/send/cmkkzen8910zk7axpfclvgaen/16133/1949/API/${encodeURIComponent(
      mobileDigits,
    )}?body1=${encodeURIComponent(trimmedName)}`;

    try {
      setIsSending(true);
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
      <div className="container">
        <div className="row align-items-center">
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
                          {
                            validator: (_, value) => {
                              const digits = (value || "").replace(/\D/g, "");
                              if (digits.length === 10) {
                                return Promise.resolve();
                              }
                              return Promise.reject(
                                new Error(
                                  "Please enter a valid 10 digit mobile number.",
                                ),
                              );
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
