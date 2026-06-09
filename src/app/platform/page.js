"use client";

import React from "react";
import Link from "next/link";
import "../Component/Home/Home.css";

const features = [
  {
    icon: "bi-whatsapp",
    bg: "#25D366",
    title: "WhatsApp Business API",
    desc: "Send bulk messages, automate replies with chatbots, and manage customer conversations at scale with 98% open rates — all from your A2ZSMS dashboard.",
    link: "/whatsapp-api/",
  },
  {
    icon: "bi-chat-square-dots",
    bg: "#097bdf",
    title: "RCS Messaging",
    desc: "Deliver rich, app-like experiences with interactive carousels, branded messages, and verified sender identity — built directly into the platform.",
    link: "/rcs-service/",
  },
  {
    icon: "bi-envelope-fill",
    bg: "#43cea2",
    title: "Bulk SMS",
    desc: "Lightning-fast promotional and transactional SMS campaigns with 99.9% delivery rates across all networks from one unified inbox.",
    link: "/bulk-sms/",
  },
  {
    icon: "bi-telephone-fill",
    bg: "#185a9d",
    title: "Bulk Voice Calls",
    desc: "Crystal-clear voice campaigns with IVR, auto-retry logic, and detailed analytics — fully managed inside your platform account.",
    link: "/voice-call/",
  },
  {
    icon: "bi-robot",
    bg: "#1e89ec",
    title: "AI Chatbot",
    desc: "24/7 automated customer support powered by AI. Handle queries, capture leads, and escalate to agents — all within the platform.",
    link: "/chatbot",
  },
  {
    icon: "bi-bar-chart-line-fill",
    bg: "#f7971e",
    title: "Analytics & Reports",
    desc: "Track delivery rates, open rates, conversions, and campaign ROI in real time from a single unified analytics dashboard.",
    link: "/request-demo/",
  },
];

const steps = [
  {
    num: "1",
    icon: "bi-person-plus-fill",
    title: "Create Your Account",
    desc: "Sign up in 2 minutes and get instant access to your A2ZSMS platform dashboard.",
  },
  {
    num: "2",
    icon: "bi-toggles",
    title: "Choose Your Channels",
    desc: "Activate SMS, WhatsApp, RCS, or Voice — or all four — from the same account.",
  },
  {
    num: "3",
    icon: "bi-send-fill",
    title: "Launch Campaigns",
    desc: "Upload contacts, craft your message, schedule delivery, and go live in minutes.",
  },
  {
    num: "4",
    icon: "bi-graph-up-arrow",
    title: "Track & Optimise",
    desc: "Monitor live analytics, delivery rates, and engagement to continuously improve ROI.",
  },
];

const whyUs = [
  { icon: "bi-shield-check", color: "text-success", title: "Enterprise Security", desc: "End-to-end encrypted messaging with full GDPR and TRAI compliance built in." },
  { icon: "bi-lightning-charge-fill", color: "text-warning", title: "99.9% Uptime", desc: "High-availability infrastructure ensures your campaigns never miss a beat." },
  { icon: "bi-plug-fill", color: "text-primary", title: "Easy API Integration", desc: "Plug into your CRM, ERP, or custom app with our clean REST API and detailed docs." },
  { icon: "bi-headset", color: "text-info", title: "Dedicated Support", desc: "24/7 expert support via chat, email, and phone — a real team, not a bot." },
];

export default function PlatformPage() {
  return (
    <main>

      {/* ── HERO ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #0a0f1e 0%, #0d2247 50%, #0a1628 100%)",
          padding: "110px 0 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* background glow blobs */}
        <div style={{ position: "absolute", top: "-100px", right: "-100px", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(9,123,223,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-80px", left: "-80px", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(67,206,162,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              {/* badge */}
              <div className="hero-tag mb-4" style={{ display: "inline-flex" }}>
                <span className="pulse-dot"></span>
                A2ZSMS Unified Messaging Platform
              </div>

              <h1 style={{ fontFamily: "EB Garamond, serif", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>
                One Platform.<br />
                <span style={{ color: "#43cea2" }}>Every Channel.</span><br />
                Unlimited Reach.
              </h1>

              <p className="hero-desc">
                A2ZSMS brings SMS, WhatsApp, RCS, and Voice together in a single
                powerful dashboard — so your team manages every customer
                conversation from one place, with zero channel-switching.
              </p>

              <div className="hero-actions">
                <Link href="/try-for-free/" className="btn-cta">
                  Start Free Trial <i className="bi bi-arrow-right"></i>
                </Link>
                <Link href="/request-demo/" className="btn-ghost">
                  <i className="bi bi-play-circle"></i> Book a Demo
                </Link>
              </div>

              {/* mini stats */}
              <div className="hero-metrics">
                {[
                  { num: "10K+", label: "Active Businesses" },
                  { num: "500M+", label: "Messages Sent" },
                  { num: "99.9%", label: "Delivery Rate" },
                  { num: "24/7", label: "Platform Uptime" },
                ].map((s, i) => (
                  <div className="hero-metric" key={i}>
                    <div className="num">{s.num}</div>
                    <div className="label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* right visual */}
            <div className="col-lg-6 d-none d-lg-block">
              <div className="hero-visual" style={{ position: "relative" }}>
                <img
                  src="/image/product/whatsapp1.png"
                  alt="A2ZSMS Platform Dashboard"
                  style={{ borderRadius: 20, boxShadow: "0 24px 64px rgba(0,0,0,0.4)", width: "100%", maxWidth: 480 }}
                />
                {/* floating cards */}
                <div className="hero-float-card top-card">
                  <div className="fc-icon" style={{ background: "#25D366" }}>
                    <i className="bi bi-whatsapp"></i>
                  </div>
                  <div>
                    <div className="fc-num">98%</div>
                    <div className="fc-label">WhatsApp Open Rate</div>
                  </div>
                </div>
                <div className="hero-float-card bottom-card">
                  <div className="fc-icon" style={{ background: "#097bdf" }}>
                    <i className="bi bi-envelope-fill"></i>
                  </div>
                  <div>
                    <div className="fc-num">500M+</div>
                    <div className="fc-label">Messages Delivered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PLATFORM FEATURES ── */}
      <section className="services-section">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="section-label">Platform Features</span>
            <h2 className="section-heading">
              All Your Channels.<br />One Powerful Dashboard.
            </h2>
            <p className="section-desc mx-auto">
              Every communication channel your business needs is built directly into the
              A2ZSMS platform — no third-party tools, no complex integrations.
            </p>
          </div>

          <div className="row g-4">
            {features.map((f, i) => (
              <div className="col-md-6 col-lg-4" key={i} data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="service-card">
                  <div className="service-icon" style={{ background: f.bg }}>
                    <i className={`bi ${f.icon}`}></i>
                  </div>
                  <h5>{f.title}</h5>
                  <p>{f.desc}</p>
                  <Link href={f.link} className="service-link">
                    Explore feature <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="how-section">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="section-label">How It Works</span>
            <h2 className="section-heading">Get Started in 4 Simple Steps</h2>
            <p className="section-desc mx-auto">
              From sign-up to first campaign — the A2ZSMS platform is built for speed.
              No technical skills needed. Go live in minutes.
            </p>
          </div>

          <div className="row justify-content-center g-4">
            {steps.map((step, i) => (
              <div className="col-md-6 col-lg-3" key={i} data-aos="fade-up" data-aos-delay={i * 120}>
                <div className="step-card h-100">
                  {i < steps.length - 1 && (
                    <div className="step-connector d-none d-lg-block"></div>
                  )}
                  <div className="step-num">{step.num}</div>
                  <div style={{ fontSize: 28, marginBottom: 12, color: "#097bdf" }}>
                    <i className={`bi ${step.icon}`}></i>
                  </div>
                  <h5 style={{ fontWeight: 700, marginBottom: 8 }}>{step.title}</h5>
                  <p style={{ color: "#64748b", fontSize: "0.93rem", lineHeight: 1.65 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5" data-aos="fade-up">
            <Link href="/try-for-free/" className="btn-cta">
              Start Your Free Trial <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY A2ZSMS ── */}
      <section style={{ padding: "90px 0", background: "#fff" }}>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-5" data-aos="zoom-in-right">
              <img
                src="/image/product/rcs1.png"
                alt="Why choose A2ZSMS platform"
                className="img-fluid rounded-4 shadow"
                style={{ maxHeight: 400, objectFit: "cover", width: "100%" }}
              />
            </div>
            <div className="col-lg-7" data-aos="fade-up">
              <span className="section-label">Why A2ZSMS</span>
              <h2 className="section-heading" style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.3rem)" }}>
                Built for Businesses That<br />Can't Afford to Miss a Message
              </h2>
              <p className="section-desc" style={{ maxWidth: "100%" }}>
                From solo founders to enterprise teams — A2ZSMS is the platform that
                scales with you, backed by infrastructure you can trust.
              </p>
              <div className="row g-4 mt-2">
                {whyUs.map((item, i) => (
                  <div className="col-sm-6" key={i}>
                    <div className="d-flex align-items-start gap-3">
                      <i className={`bi ${item.icon} ${item.color}`} style={{ fontSize: "1.8rem", marginTop: 3 }}></i>
                      <div>
                        <h6 className="fw-bold mb-1">{item.title}</h6>
                        <p className="text-muted mb-0" style={{ fontSize: "0.9rem", lineHeight: 1.6 }}>{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CHANNEL COMPARISON ── */}
      <section style={{ padding: "90px 0", background: "#f8f9ff" }}>
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="section-label">Channel Overview</span>
            <h2 className="section-heading">Pick the Right Channel for Every Message</h2>
            <p className="section-desc mx-auto">
              Not sure which channel to use? Here&apos;s a quick comparison to help you decide.
            </p>
          </div>

          <div className="table-responsive" data-aos="fade-up">
            <table className="table table-bordered text-center align-middle bg-white rounded-4 overflow-hidden shadow-sm">
              <thead style={{ background: "linear-gradient(to right, #097bdf, #43cea2)", color: "#fff" }}>
                <tr>
                  <th className="text-start ps-4 py-3">Feature</th>
                  <th className="py-3">📱 SMS</th>
                  <th className="py-3">💬 WhatsApp</th>
                  <th className="py-3">🌟 RCS</th>
                  <th className="py-3">📞 Voice</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Open Rate", "98%", "98%", "90%+", "85%+"],
                  ["Rich Media", "❌", "✅", "✅", "❌"],
                  ["Verified Sender", "✅", "✅", "✅", "✅"],
                  ["Works Without Internet", "✅", "❌", "❌", "✅"],
                  ["Interactive Buttons", "❌", "✅", "✅", "✅ (IVR)"],
                  ["Best For", "OTP / Alerts", "Marketing / Support", "Brand Campaigns", "Reminders / Surveys"],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f8f9ff" }}>
                    <td className="text-start ps-4 fw-semibold text-dark">{row[0]}</td>
                    <td className="text-muted">{row[1]}</td>
                    <td className="text-muted">{row[2]}</td>
                    <td className="text-muted">{row[3]}</td>
                    <td className="text-muted">{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="cta-banner">
        <div className="container text-center position-relative" style={{ zIndex: 1 }}>
          <h2 data-aos="fade-up">Ready to Power Your Business with A2ZSMS?</h2>
          <p data-aos="fade-up" data-aos-delay="100">
            Join 10,000+ businesses using the A2ZSMS platform to drive engagement,
            automate communication, and grow revenue — across every channel.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap" data-aos="fade-up" data-aos-delay="200">
            <Link href="/try-for-free/" className="btn-white">
              Get Started Free <i className="bi bi-arrow-right"></i>
            </Link>
            <Link href="/contact/" className="btn-outline-white">
              <i className="bi bi-telephone"></i> Talk to Sales
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
