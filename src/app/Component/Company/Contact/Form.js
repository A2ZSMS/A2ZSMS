"use client";
import React, { useState } from "react";
import { Form, Input, Checkbox, Button, notification, Modal } from "antd";
import Link from "next/link";
import axios from "axios";

const ContactForm = () => {
  const [form] = Form.useForm(); // Initialize the form instance
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onFinish = async (values) => {
    try {
      const web3FormsData = {
        ...values,
        access_key: "0c511151-8204-4f6f-8485-932700f9e589",
      };

      const telecrmData = {
        fields: {
          name: values.name || "",
          company: values.company || "",
          email: values.email || "",
          phone: values.phone || "",
          note: values.note || "",
        },
        actions: [
          {
            type: "SYSTEM_NOTE",
            text: `Lead Source: Web Form Submission`,
          },
          {
            type: "SYSTEM_NOTE",
            text: `Additional Notes: ${values.note || "No additional notes"}`,
          },
        ],
      };

      // Configuration for TeleCRM API
      const telecrmConfig = {
        method: "post",
        url: "https://022os10kr2.execute-api.ap-south-1.amazonaws.com/enterprise/6794762dcb5f0836bb9c5783/autoupdatelead",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer 00b0060e-214f-4703-b4a0-c7463de555d21741173149873:81e068f2-f877-4f2f-a077-d84447dca9ac",
        },
        data: telecrmData,
      };

      const web3FormsResponse = await axios.post(
        "https://api.web3forms.com/submit",
        web3FormsData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const telecrmResponse = await axios(telecrmConfig);

      // Handle successful submission
      if (web3FormsResponse.status === 200 && telecrmResponse.status === 200) {
        // Show custom modal with success message
        setIsModalVisible(true);
        form.resetFields(); // Reset form fields after successful submission
      }
    } catch (error) {
      // Handle errors during submission
      console.error("Submission error:", error);
      notification.error({
        message: "Error",
        description:
          "There was an error submitting your form. Please try again later.",
      });
    }
  };

  const handleModalOk = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Form
        form={form}
        name="contact-form"
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
        size="large"
      >
        <Form.Item
          label={<span className="text-white">Name</span>}
          name="name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input placeholder="Enter your name" />
        </Form.Item>

        <Form.Item
          label={<span className="text-white">Email</span>}
          name="email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Please enter a valid email" },
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>

        <Form.Item
          label={<span className="text-white">Phone</span>}
          name="phone"
          rules={[
            { required: true, message: "Please enter your phone number" },
          ]}
        >
          <Input placeholder="Enter your phone number" />
        </Form.Item>

        <Form.Item label={<span className="text-white">Note</span>} name="note">
          <Input.TextArea rows={3} placeholder="Enter your message or note" />
        </Form.Item>

        <Form.Item
          name="consent"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(
                      new Error("You must agree to the terms and conditions")
                    ),
            },
          ]}
        >
          <Checkbox className="text-white">
            I hereby authorize to send notifications via SMS/Messages/
            Promotional/Informational messages and agree to the{" "}
            <Link href="/termsandcondition">Terms of Service</Link> and{" "}
            <Link href="/privacypolicies">Privacy Policy</Link>.
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-100">
            Submit
          </Button>
        </Form.Item>
      </Form>

      <Modal
  title={<span style={{ fontSize: "20px", fontWeight: "bold", textAlign: "center" }}>🎉 Success!</span>}
  open={isModalVisible}
  onOk={handleModalOk}
  onCancel={handleModalOk}
  footer={[
    <Button key="submit" type="primary" onClick={handleModalOk} style={{ width: "100%" }}>
      OK
    </Button>,
  ]}
  centered
>
  <p style={{ textAlign: "center", fontSize: "16px", color: "#555" }}>
    Thank you for submitting the form!  
  </p>
  <p style={{ textAlign: "center", fontSize: "14px", color: "#777" }}>
    Our team will get back to you shortly.
  </p>
</Modal>

    </>
  );
};

export default ContactForm;
