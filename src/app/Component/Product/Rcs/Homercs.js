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
    backgroundColor: "#f7fbff",
    border: "1px solid rgba(13, 202, 240, 0.25)",
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
    backgroundColor: "#0dcaf0",
    borderColor: "#0dcaf0",
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

  const handleFinish = () => {
    setStatusMessage("Sample RCS message request received.");
    setStatusType("success");
    setIsSending(false);
    form.resetFields();
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
    <section className="bg2">
      <div className="container">
        <div className="row align-items-center aos">
          <div className="col-md-6 para-color" data-aos="fade-right">
            <h1 className="fw-bold mb-2">
              Improve Your Business with{" "}
              <span className="text-info">RCS Messaging Solutions</span>
            </h1>
            <p className="text-muted mb-4">
              Replace the SMS and MMS texting with feature-rich RCS messaging to
              send and receive media including high-resolution images,
              high-definition videos, and much more.
            </p>
            <ul className="list-unstyled para-color">
              <li className="mb-2 d-flex align-items-center">
                <i className="bi bi-check-circle-fill text-success me-3"></i>
                <span>Send messages with rich images and videos.</span>
              </li>
              <li className="mb-2 d-flex align-items-center">
                <i className="bi bi-check-circle-fill text-success me-3"></i>
                <span>Build trust with verified business identity.</span>
              </li>
              <li className="mb-2 d-flex align-items-center">
                <i className="bi bi-check-circle-fill text-success me-3"></i>
                <span>
                  Use quick replies and smart actions for better response.
                </span>
              </li>
              <li className="mb-2 d-flex align-items-center">
                <i className="bi bi-check-circle-fill text-success me-3"></i>
                <span>Improve communication with HD images and videos.</span>
              </li>
              <li className="mb-2 d-flex align-items-center">
                <i className="bi bi-check-circle-fill text-success me-3"></i>
                <span>Personalize your brand with custom options.</span>
              </li>
            </ul>

            {/* CTA Buttons */}
            <div className="d-flex gap-3 mt-4">
              <a
                href="/try-for-free"
                className="btn btn-info px-4 py-2 text-white"
              >
                <i className="bi bi-rocket-takeoff me-2"></i>
                Try For Free
              </a>
              <a
                href="/request-demo"
                className="btn btn-outline-info px-4 py-2"
              >
                <i className="bi bi-calendar-check me-2"></i>
                Request Demo
              </a>
            </div>
            {/* <div style={formCardStyle}>
              <div className="mb-2">
                <h5 className="mb-1 fw-semibold">Test RCS Message</h5>
                <p className="mb-0 text-muted small">
                  Send a sample RCS message to your number in seconds.
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
                          inputMode="numeric"
                          className="ms-3"
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
            </div> */}
          </div>
          <div className="col-md-6 text-center" data-aos="fade-left">
            <img
              className="img-fluid rounded"
              src="/image/product/rcs1.png"
              alt="Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
