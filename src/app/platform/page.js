import React from "react";
import Link from "next/link";

export const metadata = {
  title: "A2ZSMS Platform - SMS, WhatsApp, RCS & Voice Messaging Dashboard",
  description:
    "A2ZSMS is a unified messaging platform that brings SMS, WhatsApp Business API, RCS Messaging, and Bulk Voice Calls into a single powerful dashboard built for businesses.",
  keywords:
    "A2ZSMS platform, messaging platform, SMS dashboard, WhatsApp API platform, RCS messaging platform, bulk voice call platform",
  alternates: {
    canonical: "https://www.a2zsms.in/platform/",
  },
};

const features = [
  {
    icon: "bi-whatsapp",
    color: "#25D366",
    title: "WhatsApp Business API",
    desc: "Send bulk messages, run chatbots, and manage customer conversations at scale. 98% open rates — directly inside the A2ZSMS dashboard.",
    link: "/whatsapp-api/",
  },
  {
    icon: "bi-chat-square-dots",
    color: "#097bdf",
    title: "RCS Messaging",
    desc: "Deliver rich, interactive messages with carousels, verified sender identity, and app-like experiences — all powered by your A2ZSMS account.",
    link: "/rcs-service/",
  },
  {
    icon: "bi-envelope-fill",
    color: "#43cea2",
    title: "Bulk SMS",
    desc: "Send promotional and transactional SMS campaigns with 99.9% delivery rates across all networks, right from your platform dashboard.",
    link: "/bulk-sms/",
  },
  {
    icon: "bi-telephone-fill",
    color: "#185a9d",
    title: "Bulk Voice Calls",
    desc: "Launch automated voice campaigns with IVR, retry logic, and real-time analytics — fully managed within the A2ZSMS platform.",
    link: "/voice-call/",
  },
  {
    icon: "bi-robot",
    color: "#1e89ec",
    title: "AI Chatbot",
    desc: "Automate customer support with intelligent chatbots that handle queries, capture leads, and escalate to agents — built into the platform.",
    link: "/chatbot",
  },
  {
    icon: "bi-bar-chart-fill",
    color: "#f7971e",
    title: "Analytics & Reports",
    desc: "Track delivery rates, open rates, click-throughs, and campaign ROI in real time from a unified analytics dashboard.",
    link: "/request-demo/",
  },
];

const stats = [
  { value: "10,000+", label: "Businesses Trust Us" },
  { value: "99.9%", label: "Delivery Rate" },
  { value: "500M+", label: "Messages Sent" },
  { value: "24/7", label: "Platform Uptime" },
];

export default function PlatformPage() {
  return (
    <main style={{ fontFamily: "sans-serif", color: "#1a1a2e" }}>

      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
          color: "#fff",
          padding: "100px 24px 80px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <span
            style={{
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: 20,
              padding: "6px 18px",
              fontSize: 13,
              letterSpacing: 1,
              textTransform: "uppercase",
              display: "inline-block",
              marginBottom: 24,
            }}
          >
            The A2ZSMS Platform
          </span>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: 24,
            }}
          >
            One Platform. Every Channel.<br />Unlimited Growth.
          </h1>
          <p
            style={{
              fontSize: "1.15rem",
              color: "rgba(255,255,255,0.8)",
              maxWidth: 620,
              margin: "0 auto 40px",
              lineHeight: 1.7,
            }}
          >
            A2ZSMS is a unified business messaging platform. SMS, WhatsApp, RCS,
            and Voice — all managed from one powerful dashboard built to scale
            your business communication.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/try-for-free/"
              style={{
                background: "#fff",
                color: "#302b63",
                padding: "14px 32px",
                borderRadius: 8,
                fontWeight: 700,
                fontSize: "1rem",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Start Free Trial
            </Link>
            <Link
              href="/request-demo/"
              style={{
                border: "2px solid rgba(255,255,255,0.6)",
                color: "#fff",
                padding: "14px 32px",
                borderRadius: 8,
                fontWeight: 600,
                fontSize: "1rem",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ background: "#f8f9ff", padding: "48px 24px" }}>
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 32,
            textAlign: "center",
          }}
        >
          {stats.map((s, i) => (
            <div key={i}>
              <div
                style={{ fontSize: "2.2rem", fontWeight: 800, color: "#302b63" }}
              >
                {s.value}
              </div>
              <div style={{ color: "#666", marginTop: 6, fontSize: "0.95rem" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Platform Features */}
      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span
              style={{
                background: "#ede9ff",
                color: "#302b63",
                padding: "6px 16px",
                borderRadius: 20,
                fontSize: 13,
                fontWeight: 600,
                display: "inline-block",
                marginBottom: 16,
              }}
            >
              Platform Features
            </span>
            <h2
              style={{
                fontSize: "clamp(1.7rem, 4vw, 2.4rem)",
                fontWeight: 800,
                marginBottom: 16,
              }}
            >
              Everything Built Into One Dashboard
            </h2>
            <p style={{ color: "#555", fontSize: "1.05rem", maxWidth: 560, margin: "0 auto" }}>
              Every channel you need to reach customers is available inside your
              A2ZSMS account — no switching tools, no integrations needed.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 28,
            }}
          >
            {features.map((f, i) => (
              <div
                key={i}
                style={{
                  border: "1px solid #eee",
                  borderRadius: 16,
                  padding: "32px 28px",
                  transition: "box-shadow 0.2s",
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 12,
                    background: f.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                  }}
                >
                  <i
                    className={`bi ${f.icon}`}
                    style={{ fontSize: 22, color: "#fff" }}
                  ></i>
                </div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 10 }}>
                  {f.title}
                </h3>
                <p style={{ color: "#666", fontSize: "0.95rem", lineHeight: 1.65, marginBottom: 20 }}>
                  {f.desc}
                </p>
                <Link
                  href={f.link}
                  style={{
                    color: "#302b63",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    textDecoration: "none",
                  }}
                >
                  Learn more &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: "80px 24px", background: "#f8f9ff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 800, marginBottom: 16 }}>
            How the A2ZSMS Platform Works
          </h2>
          <p style={{ color: "#555", fontSize: "1.05rem", maxWidth: 540, margin: "0 auto 56px" }}>
            From account setup to first campaign — up and running in minutes.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 32,
            }}
          >
            {[
              { step: "01", title: "Create Account", desc: "Sign up and access your A2ZSMS dashboard instantly." },
              { step: "02", title: "Choose Channel", desc: "Select SMS, WhatsApp, RCS, or Voice — or use all four." },
              { step: "03", title: "Build Campaign", desc: "Upload contacts, write your message, set schedule." },
              { step: "04", title: "Launch & Track", desc: "Send campaigns and monitor live analytics in real time." },
            ].map((item, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "#302b63",
                    color: "#fff",
                    fontSize: "1.1rem",
                    fontWeight: 800,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                  }}
                >
                  {item.step}
                </div>
                <h4 style={{ fontWeight: 700, marginBottom: 8 }}>{item.title}</h4>
                <p style={{ color: "#666", fontSize: "0.92rem", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #302b63, #0f0c29)",
          color: "#fff",
          padding: "80px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, marginBottom: 20 }}>
            Ready to Use the A2ZSMS Platform?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem", marginBottom: 40, lineHeight: 1.7 }}>
            Join 10,000+ businesses already using A2ZSMS to communicate smarter.
            Start your free trial today — no credit card required.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/try-for-free/"
              style={{
                background: "#fff",
                color: "#302b63",
                padding: "14px 36px",
                borderRadius: 8,
                fontWeight: 700,
                fontSize: "1rem",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Try for Free
            </Link>
            <Link
              href="/contact/"
              style={{
                border: "2px solid rgba(255,255,255,0.5)",
                color: "#fff",
                padding: "14px 36px",
                borderRadius: 8,
                fontWeight: 600,
                fontSize: "1rem",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
