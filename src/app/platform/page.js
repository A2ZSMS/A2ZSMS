"use client";

import React, { useState } from "react";
import Link from "next/link";
import "../Component/Home/Home.css";

/* ─── Data ─────────────────────────────────────────── */

const products = [
  {
    icon: "bi-envelope-fill",
    bg: "linear-gradient(135deg,#43cea2,#185a9d)",
    badge: "SMS",
    title: "SMS Portal",
    tagline: "Web-based bulk SMS campaign platform",
    desc: "Cloud-hosted SMS portal for promotional and transactional campaigns. Supports DLT-registered sender IDs, contact segmentation, real-time delivery reports, and webhook callbacks.",
    bullets: ["DLT sender ID & template management", "CSV / API contact upload", "Real-time delivery & click tracking", "Promotional & transactional routing"],
    link: "/bulk-sms/",
  },
  {
    icon: "bi-hdd-network-fill",
    bg: "linear-gradient(135deg,#1e89ec,#0a1628)",
    badge: "SMPP",
    title: "SMPP Gateway",
    tagline: "High-throughput carrier-grade SMS API",
    desc: "Enterprise SMPP v3.4 gateway for high-volume, low-latency message delivery. Supports TPS throttling, sticky connections, multi-bind sessions, and automatic failover across telecom operators.",
    bullets: ["SMPP v3.4 / HTTP REST API", "Up to 3,000 TPS throughput", "Multi-operator routing & failover", "Delivery receipts & MO routing"],
    link: "/bulk-sms/",
  },
  {
    icon: "bi-whatsapp",
    bg: "linear-gradient(135deg,#25D366,#128C7E)",
    badge: "WhatsApp",
    title: "WhatsApp Business API",
    tagline: "Meta-approved official BSP integration",
    desc: "Send template messages, manage opt-in flows, run drip sequences, and operate 24/7 AI chatbots — all through an official Meta Business Solution Provider connection.",
    bullets: ["Meta-approved BSP integration", "Template & session messaging", "Chatbot + live agent handoff", "Broadcast & drip campaigns"],
    link: "/whatsapp-api/",
  },
  {
    icon: "bi-chat-square-dots-fill",
    bg: "linear-gradient(135deg,#7b2ff7,#097bdf)",
    badge: "RCS",
    title: "RCS Messaging",
    tagline: "Rich, verified brand messaging on Android",
    desc: "Deliver interactive carousels, action buttons, and verified sender profiles directly to the native Android Messages app. No app install needed — pure carrier-delivered rich messaging.",
    bullets: ["Verified brand sender (RBM)", "Carousels, cards & quick replies", "Automated fallback to SMS", "Google RCS Business Messaging API"],
    link: "/rcs-service/",
  },
  {
    icon: "bi-telephone-outbound-fill",
    bg: "linear-gradient(135deg,#f7971e,#ffd200)",
    badge: "Voice",
    title: "Bulk Voice Call",
    tagline: "AI-powered voice broadcast & IVR",
    desc: "Automated outbound voice campaigns with custom audio, IVR flows, call recording, DTMF input collection, and real-time analytics. Supports regional language TTS.",
    bullets: ["Pre-recorded & TTS audio", "IVR with DTMF input", "Regional language support (12+)", "Live call analytics & recording"],
    link: "/voice-call/",
  },
];

const archItems = [
  { icon: "bi-layers-fill", title: "Multi-Tenant SaaS", desc: "Isolated per-tenant data with shared infrastructure for cost efficiency. Each client gets dedicated API keys, rate limits, and reporting." },
  { icon: "bi-diagram-3-fill", title: "Microservices Architecture", desc: "Each channel (SMS, WhatsApp, RCS, Voice) runs as an independent service, enabling zero-downtime deployments and per-channel scaling." },
  { icon: "bi-cloud-arrow-up-fill", title: "Cloud-Native Infrastructure", desc: "Deployed on scalable cloud infrastructure with auto-scaling groups, load balancers, and multi-AZ redundancy for 99.9% SLA." },
  { icon: "bi-arrow-repeat", title: "Real-Time Message Queue", desc: "High-throughput message broker handles burst traffic with priority queuing, dead-letter queues, and guaranteed delivery." },
  { icon: "bi-database-fill", title: "Distributed Data Layer", desc: "Time-series delivery data stored in high-performance databases with hot/cold tiering for instant analytics and long-term retention." },
  { icon: "bi-webhook", title: "Event-Driven Webhooks", desc: "Every delivery event, reply, opt-out, and conversion fires an instant webhook — keeping your CRM and systems always in sync." },
];

const apiFeatures = [
  { icon: "bi-code-slash", label: "REST API", desc: "Clean RESTful endpoints for all channels. JSON payloads, OAuth 2.0 auth, Swagger docs included." },
  { icon: "bi-hdd-network", label: "SMPP v3.4", desc: "Industry-standard SMPP protocol for ultra-low latency, high-volume SMS at 3,000+ TPS." },
  { icon: "bi-arrow-left-right", label: "Webhooks", desc: "Real-time push events for delivery receipts, incoming messages, opt-outs, and conversions." },
  { icon: "bi-box-seam", label: "SDKs", desc: "Client libraries for Node.js, Python, PHP, Java, and .NET with usage examples." },
  { icon: "bi-plugin", label: "Zapier / Make", desc: "No-code connectors for 5,000+ apps. Build automations without writing a single line of code." },
  { icon: "bi-file-earmark-code", label: "Postman Collection", desc: "Ready-to-import API collection with environment variables for instant testing." },
];

const compliance = [
  { icon: "bi-patch-check-fill", color: "#43cea2", title: "TRAI & DLT Compliant", desc: "All SMS routes are registered on Distributed Ledger Technology (DLT) as mandated by TRAI. Sender IDs and templates are pre-approved." },
  { icon: "bi-shield-lock-fill", color: "#097bdf", title: "AES-256 Encryption", desc: "All data in transit is encrypted via TLS 1.3. Stored data is AES-256 encrypted. API keys are hashed and never stored in plaintext." },
  { icon: "bi-globe2", color: "#7b2ff7", title: "GDPR Ready", desc: "Opt-in management, right-to-erasure workflows, data residency controls, and DPA agreements available for global customers." },
  { icon: "bi-person-lock", color: "#f7971e", title: "Role-Based Access Control", desc: "Granular RBAC with MFA enforcement. Audit logs capture every user action with IP, timestamp, and resource trail." },
  { icon: "bi-building-check", color: "#25D366", title: "Meta BSP Verified", desc: "Officially approved Meta Business Solution Provider for WhatsApp Business API access — vetted by Meta's compliance team." },
  { icon: "bi-card-checklist", color: "#e53e3e", title: "SOC 2 Type II Roadmap", desc: "Infrastructure controls aligned with SOC 2 Trust Services Criteria. Audit process underway for formal certification." },
];

const scaleStats = [
  { num: "3,000+", label: "SMS per Second (TPS)", icon: "bi-speedometer2" },
  { num: "500M+", label: "Messages Delivered", icon: "bi-envelope-check-fill" },
  { num: "99.9%", label: "Platform SLA Uptime", icon: "bi-arrow-up-circle-fill" },
  { num: "10K+", label: "Active Business Clients", icon: "bi-buildings-fill" },
  { num: "<200ms", label: "Avg API Response Time", icon: "bi-lightning-charge-fill" },
  { num: "18+", label: "Telecom Operator Routes", icon: "bi-diagram-2-fill" },
];


/* ─── Component ─────────────────────────────────────── */

export default function PlatformPage() {
  const [activeProduct, setActiveProduct] = useState(0);

  return (
    <main>

      {/* ── HERO ──────────────────────────────────────── */}
      <section style={{
        background: "linear-gradient(135deg,#060d1f 0%,#0d2247 55%,#060d1f 100%)",
        padding: "110px 0 80px",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* grid pattern */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)",
          backgroundSize: "50px 50px",
        }} />
        <div style={{ position:"absolute", top:"-120px", right:"-120px", width:550, height:550, borderRadius:"50%", background:"radial-gradient(circle,rgba(9,123,223,0.18) 0%,transparent 70%)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:"-80px", left:"-80px", width:400, height:400, borderRadius:"50%", background:"radial-gradient(circle,rgba(67,206,162,0.12) 0%,transparent 70%)", pointerEvents:"none" }} />

        <div className="container position-relative" style={{ zIndex:1 }}>
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              {/* badges */}
              <div style={{ display:"flex", gap:10, flexWrap:"wrap", marginBottom:24 }}>
                <span className="hero-tag" style={{ display:"inline-flex" }}>
                  <span className="pulse-dot" />
                  Enterprise CPaaS Platform
                </span>
                <span style={{ display:"inline-flex", alignItems:"center", gap:6, padding:"7px 16px", background:"rgba(67,206,162,0.1)", border:"1px solid rgba(67,206,162,0.25)", borderRadius:50, fontSize:13, fontWeight:600, color:"#43cea2" }}>
                  <i className="bi bi-cloud-fill" /> Cloud-Native Infrastructure
                </span>
              </div>

              <h1 style={{ fontFamily:"EB Garamond,serif", fontSize:"clamp(2.3rem,5vw,3.6rem)", fontWeight:700, color:"#fff", lineHeight:1.12, marginBottom:20 }}>
                The Only CPaaS Platform<br />
                <span style={{ color:"#43cea2" }}>Indian Businesses</span> Need
              </h1>

              <p style={{ fontSize:"1.08rem", lineHeight:1.8, color:"rgba(255,255,255,0.78)", maxWidth:600, marginBottom:32 }}>
                A2ZSMS is a Communications Platform as a Service (CPaaS) delivering
                SMS, SMPP, WhatsApp Business API, RCS, and Bulk Voice — each as a
                production-ready product — built for scale on cloud-native infrastructure.
              </p>

              <div className="hero-actions">
                <Link href="/try-for-free/" className="btn-cta">
                  Start Free Trial <i className="bi bi-arrow-right" />
                </Link>
                <Link href="/request-demo/" className="btn-ghost">
                  <i className="bi bi-play-circle" /> Book a Demo
                </Link>
              </div>

              {/* trust strip */}
              <div style={{ display:"flex", flexWrap:"wrap", gap:"20px 32px", marginTop:40, paddingTop:32, borderTop:"1px solid rgba(255,255,255,0.1)" }}>
                {[
                  { icon:"bi-patch-check-fill", text:"TRAI DLT Compliant", color:"#43cea2" },
                  { icon:"bi-building-check", text:"Meta BSP Verified", color:"#25D366" },
                  { icon:"bi-shield-lock-fill", text:"AES-256 Encrypted", color:"#097bdf" },
                  { icon:"bi-cloud-check-fill", text:"99.9% SLA Uptime", color:"#f7971e" },
                ].map((t,i) => (
                  <div key={i} style={{ display:"flex", alignItems:"center", gap:8, color:"rgba(255,255,255,0.8)", fontSize:"0.88rem", fontWeight:500 }}>
                    <i className={`bi ${t.icon}`} style={{ color:t.color, fontSize:"1rem" }} />
                    {t.text}
                  </div>
                ))}
              </div>
            </div>

            {/* right — platform metrics card */}
            <div className="col-lg-5 d-none d-lg-block">
              <div style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:20, padding:28, backdropFilter:"blur(12px)" }}>
                <p style={{ color:"rgba(255,255,255,0.5)", fontSize:"0.8rem", textTransform:"uppercase", letterSpacing:1, marginBottom:20 }}>Platform Live Stats</p>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
                  {scaleStats.map((s,i) => (
                    <div key={i} style={{ background:"rgba(255,255,255,0.05)", borderRadius:12, padding:"16px 18px" }}>
                      <i className={`bi ${s.icon}`} style={{ fontSize:"1.3rem", color:"#43cea2", marginBottom:8, display:"block" }} />
                      <div style={{ fontSize:"1.5rem", fontWeight:800, color:"#fff", lineHeight:1 }}>{s.num}</div>
                      <div style={{ fontSize:"0.76rem", color:"rgba(255,255,255,0.5)", marginTop:4 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PLATFORM PRODUCTS ─────────────────────────── */}
      <section style={{ padding:"100px 0", background:"#f8f9ff" }}>
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="section-label">What We Offer</span>
            <h2 className="section-heading">5 Channels. One Cloud Platform.</h2>
            <p className="section-desc mx-auto">
              A2ZSMS delivers SMS, SMPP gateway, WhatsApp Business API, RCS Messaging, and
              Bulk Voice Call as standalone, production-ready products — each with its own
              portal, API, and reporting. A unified All-in-One dashboard is on our roadmap.
            </p>
          </div>

          {/* tab row */}
          <div style={{ display:"flex", flexWrap:"wrap", gap:10, justifyContent:"center", marginBottom:40 }}>
            {products.map((p,i) => (
              <button key={i} onClick={() => setActiveProduct(i)}
                style={{
                  padding:"10px 22px", borderRadius:50, fontSize:"0.88rem", fontWeight:600, cursor:"pointer", border:"2px solid",
                  borderColor: activeProduct===i ? "#097bdf" : "transparent",
                  background: activeProduct===i ? "#097bdf" : "#e8ecff",
                  color: activeProduct===i ? "#fff" : "#374151",
                  transition:"all 0.2s",
                }}>
                <i className={`bi ${p.icon}`} style={{ marginRight:6 }} />{p.title}
              </button>
            ))}
          </div>

          {/* coming soon badge */}
          <div style={{ textAlign:"center", marginBottom:16 }}>
            <span style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"8px 20px", background:"linear-gradient(135deg,rgba(9,123,223,0.1),rgba(67,206,162,0.1))", border:"1px dashed #097bdf", borderRadius:50, fontSize:"0.85rem", fontWeight:600, color:"#097bdf" }}>
              <i className="bi bi-rocket-takeoff-fill" />
              Coming Soon: All-in-One Dashboard — manage every channel from a single login
            </span>
          </div>

          {/* active product detail */}
          {products.map((p,i) => i===activeProduct && (
            <div key={i} data-aos="fade-up" style={{ background:"#fff", borderRadius:20, boxShadow:"0 8px 40px rgba(0,0,0,0.08)", overflow:"hidden" }}>
              <div className="row g-0 align-items-stretch">
                {/* left visual */}
                <div className="col-lg-5" style={{ background:p.bg, padding:"52px 40px", display:"flex", flexDirection:"column", justifyContent:"center" }}>
                  <span style={{ display:"inline-block", padding:"4px 14px", background:"rgba(255,255,255,0.2)", borderRadius:50, fontSize:"0.78rem", fontWeight:700, color:"#fff", letterSpacing:1, textTransform:"uppercase", marginBottom:20 }}>{p.badge}</span>
                  <i className={`bi ${p.icon}`} style={{ fontSize:"4rem", color:"rgba(255,255,255,0.9)", marginBottom:20 }} />
                  <h3 style={{ fontSize:"1.9rem", fontWeight:800, color:"#fff", marginBottom:10 }}>{p.title}</h3>
                  <p style={{ color:"rgba(255,255,255,0.8)", fontSize:"1rem", lineHeight:1.7 }}>{p.tagline}</p>
                </div>
                {/* right content */}
                <div className="col-lg-7" style={{ padding:"52px 44px" }}>
                  <p style={{ fontSize:"1.05rem", color:"#374151", lineHeight:1.8, marginBottom:28 }}>{p.desc}</p>
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14, marginBottom:36 }}>
                    {p.bullets.map((b,j) => (
                      <div key={j} style={{ display:"flex", alignItems:"flex-start", gap:10 }}>
                        <i className="bi bi-check-circle-fill" style={{ color:"#43cea2", fontSize:"1rem", marginTop:2, flexShrink:0 }} />
                        <span style={{ fontSize:"0.92rem", color:"#4b5563", lineHeight:1.55 }}>{b}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ display:"flex", gap:14, flexWrap:"wrap" }}>
                    <Link href={p.link} className="btn-cta" style={{ fontSize:"0.9rem", padding:"12px 28px" }}>
                      Explore {p.title} <i className="bi bi-arrow-right" />
                    </Link>
                    <Link href="/request-demo/" style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"12px 24px", border:"2px solid #e5e7eb", borderRadius:50, fontSize:"0.9rem", fontWeight:600, color:"#374151", textDecoration:"none", transition:"all 0.2s" }}>
                      <i className="bi bi-calendar-check" /> Book Demo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PLATFORM ARCHITECTURE ─────────────────────── */}
      <section style={{ padding:"100px 0", background:"#0a0f1e" }}>
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="section-label" style={{ background:"rgba(67,206,162,0.1)", color:"#43cea2", border:"1px solid rgba(67,206,162,0.2)" }}>Architecture</span>
            <h2 className="section-heading" style={{ color:"#fff" }}>Built for Enterprise Scale</h2>
            <p className="section-desc mx-auto" style={{ color:"rgba(255,255,255,0.6)" }}>
              A2ZSMS is engineered on a cloud-native, microservices architecture — designed
              to handle millions of messages per day without compromising reliability.
            </p>
          </div>

          {/* architecture flow */}
          <div style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:20, padding:"40px 32px", marginBottom:48 }} data-aos="fade-up">
            <div style={{ display:"flex", alignItems:"center", justifyContent:"center", flexWrap:"wrap", gap:8, marginBottom:8 }}>
              {[
                { label:"Your App / CRM", icon:"bi-laptop", color:"#097bdf" },
                { label:"→", icon:null, color:"#555" },
                { label:"A2ZSMS REST API / SMPP", icon:"bi-braces-asterisk", color:"#43cea2" },
                { label:"→", icon:null, color:"#555" },
                { label:"Message Router", icon:"bi-diagram-3-fill", color:"#7b2ff7" },
                { label:"→", icon:null, color:"#555" },
                { label:"Operator / BSP / Carrier", icon:"bi-broadcast-pin", color:"#f7971e" },
                { label:"→", icon:null, color:"#555" },
                { label:"End User", icon:"bi-person-fill", color:"#25D366" },
              ].map((item,i) => item.icon ? (
                <div key={i} style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:6, padding:"14px 20px", background:"rgba(255,255,255,0.05)", borderRadius:12, border:"1px solid rgba(255,255,255,0.1)", minWidth:110 }}>
                  <i className={`bi ${item.icon}`} style={{ fontSize:"1.4rem", color:item.color }} />
                  <span style={{ fontSize:"0.72rem", color:"rgba(255,255,255,0.7)", textAlign:"center", fontWeight:600, lineHeight:1.3 }}>{item.label}</span>
                </div>
              ) : (
                <i key={i} className="bi bi-arrow-right" style={{ color:"rgba(255,255,255,0.25)", fontSize:"1.4rem" }} />
              ))}
            </div>
            <p style={{ textAlign:"center", color:"rgba(255,255,255,0.35)", fontSize:"0.78rem", marginTop:16 }}>
              Every message flows through intelligent routing, compliance checks, and operator selection in under 200ms
            </p>
          </div>

          <div className="row g-4">
            {archItems.map((item,i) => (
              <div className="col-md-6 col-lg-4" key={i} data-aos="fade-up" data-aos-delay={i*70}>
                <div style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:16, padding:"28px 24px", height:"100%", transition:"border-color 0.2s" }}>
                  <i className={`bi ${item.icon}`} style={{ fontSize:"1.8rem", color:"#43cea2", marginBottom:14, display:"block" }} />
                  <h5 style={{ color:"#fff", fontWeight:700, marginBottom:8, fontSize:"1.05rem" }}>{item.title}</h5>
                  <p style={{ color:"rgba(255,255,255,0.55)", fontSize:"0.9rem", lineHeight:1.7, margin:0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── API & DEVELOPER HUB ───────────────────────── */}
      <section style={{ padding:"100px 0", background:"#fff" }}>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-5" data-aos="fade-right">
              <span className="section-label">Developer Hub</span>
              <h2 className="section-heading" style={{ fontSize:"clamp(1.8rem,3.5vw,2.5rem)" }}>
                API-First.<br />Integrate in Minutes.
              </h2>
              <p className="section-desc" style={{ maxWidth:"100%" }}>
                Every A2ZSMS product is accessible through clean, documented APIs.
                From simple REST calls to enterprise SMPP binds — your team
                can integrate in the language and protocol you already use.
              </p>
              <div style={{ display:"flex", gap:12, flexWrap:"wrap", marginTop:28 }}>
                <Link href="/request-demo/" className="btn-cta" style={{ fontSize:"0.9rem" }}>
                  View API Docs <i className="bi bi-arrow-right" />
                </Link>
                <Link href="/request-demo/" style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"12px 24px", border:"2px solid #e5e7eb", borderRadius:50, fontSize:"0.9rem", fontWeight:600, color:"#374151", textDecoration:"none" }}>
                  <i className="bi bi-file-earmark-code" /> Postman Collection
                </Link>
              </div>
            </div>

            <div className="col-lg-7" data-aos="fade-left">
              {/* code block */}
              <div style={{ background:"#0d1117", borderRadius:16, overflow:"hidden", boxShadow:"0 20px 60px rgba(0,0,0,0.2)", marginBottom:24 }}>
                <div style={{ padding:"12px 20px", background:"#161b22", display:"flex", alignItems:"center", gap:8, borderBottom:"1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ display:"flex", gap:6 }}>
                    {["#ff5f57","#febc2e","#28c840"].map((c,i) => <span key={i} style={{ width:12, height:12, borderRadius:"50%", background:c }} />)}
                  </div>
                  <span style={{ color:"rgba(255,255,255,0.4)", fontSize:"0.8rem", marginLeft:8 }}>Send SMS — REST API</span>
                </div>
                <pre style={{ padding:"24px 28px", margin:0, fontSize:"0.82rem", lineHeight:1.8, color:"#e6edf3", overflowX:"auto" }}>{`POST https://api.a2zsms.in/v1/sms/send
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

{
  "to": "+919876543210",
  "sender_id": "A2ZSMS",
  "template_id": "1007XXXXXXXXXXXXX",
  "message": "Your OTP is 839201. Valid for 10 mins.",
  "type": "transactional"
}

// Response
{
  "status": "queued",
  "message_id": "msg_abc123xyz",
  "credits_used": 1
}`}</pre>
              </div>

              <div className="row g-3">
                {apiFeatures.map((f,i) => (
                  <div className="col-md-6" key={i}>
                    <div style={{ display:"flex", gap:14, padding:"16px 18px", background:"#f8f9ff", borderRadius:12, border:"1px solid #e8ecff" }}>
                      <i className={`bi ${f.icon}`} style={{ fontSize:"1.4rem", color:"#097bdf", flexShrink:0, marginTop:2 }} />
                      <div>
                        <div style={{ fontWeight:700, fontSize:"0.9rem", color:"#111827", marginBottom:2 }}>{f.label}</div>
                        <div style={{ fontSize:"0.8rem", color:"#6b7280", lineHeight:1.5 }}>{f.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECURITY & COMPLIANCE ─────────────────────── */}
      <section style={{ padding:"100px 0", background:"#f8f9ff" }}>
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="section-label">Security & Compliance</span>
            <h2 className="section-heading">Enterprise-Grade Security.<br />Zero Compromises.</h2>
            <p className="section-desc mx-auto">
              A2ZSMS is built with compliance and security at the core —
              not as an afterthought. Every layer of the stack is hardened.
            </p>
          </div>

          <div className="row g-4">
            {compliance.map((item,i) => (
              <div className="col-md-6 col-lg-4" key={i} data-aos="fade-up" data-aos-delay={i*70}>
                <div style={{ background:"#fff", border:"1px solid #e8ecff", borderRadius:16, padding:"28px 24px", height:"100%", borderTop:`3px solid ${item.color}` }}>
                  <i className={`bi ${item.icon}`} style={{ fontSize:"1.8rem", color:item.color, marginBottom:14, display:"block" }} />
                  <h5 style={{ fontWeight:700, marginBottom:8, fontSize:"1.05rem" }}>{item.title}</h5>
                  <p style={{ color:"#6b7280", fontSize:"0.9rem", lineHeight:1.7, margin:0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCALE STATS BAND ──────────────────────────── */}
      <section style={{ padding:"70px 0", background:"linear-gradient(135deg,#097bdf,#43cea2)" }}>
        <div className="container">
          <div className="row g-4 text-center">
            {scaleStats.map((s,i) => (
              <div className="col-6 col-lg-2" key={i}>
                <i className={`bi ${s.icon}`} style={{ fontSize:"1.8rem", color:"rgba(255,255,255,0.8)", marginBottom:10, display:"block" }} />
                <div style={{ fontSize:"2rem", fontWeight:800, color:"#fff", lineHeight:1 }}>{s.num}</div>
                <div style={{ fontSize:"0.8rem", color:"rgba(255,255,255,0.8)", marginTop:6, lineHeight:1.4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── HOW IT WORKS ──────────────────────────────── */}
      <section className="how-section">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="section-label">Onboarding</span>
            <h2 className="section-heading">Go Live in 4 Steps</h2>
            <p className="section-desc mx-auto">
              From sign-up to sending your first campaign — the A2ZSMS platform is
              designed for speed. No infrastructure to manage, no ops burden.
            </p>
          </div>
          <div className="row justify-content-center g-4">
            {[
              { num:"1", icon:"bi-person-plus-fill", title:"Create Account", desc:"Sign up in 2 minutes. Get instant API keys, portal access, and sandbox credits." },
              { num:"2", icon:"bi-toggles2", title:"Activate Channels", desc:"Choose SMS, WhatsApp, RCS, or Voice. Register DLT sender IDs from the same dashboard." },
              { num:"3", icon:"bi-code-slash", title:"Integrate or Use Portal", desc:"Call our REST API / SMPP, or use the web portal to upload contacts and craft campaigns." },
              { num:"4", icon:"bi-bar-chart-line-fill", title:"Track & Scale", desc:"Monitor live delivery reports, tweak campaigns, and scale volume as your business grows." },
            ].map((step,i) => (
              <div className="col-md-6 col-lg-3" key={i} data-aos="fade-up" data-aos-delay={i*100}>
                <div className="step-card h-100">
                  <div className="step-num">{step.num}</div>
                  <i className={`bi ${step.icon}`} style={{ fontSize:28, marginBottom:12, color:"#097bdf" }} />
                  <h5 style={{ fontWeight:700, marginBottom:8 }}>{step.title}</h5>
                  <p style={{ color:"#64748b", fontSize:"0.93rem", lineHeight:1.65 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link href="/try-for-free/" className="btn-cta">
              Start Free — No Card Needed <i className="bi bi-arrow-right" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────── */}
      <section className="cta-banner">
        <div className="container text-center position-relative" style={{ zIndex:1 }}>
          <h2 data-aos="fade-up">
            Ready to Scale Your Business Communication?
          </h2>
          <p data-aos="fade-up" data-aos-delay="100">
            Join 10,000+ businesses across India already using A2ZSMS to send
            millions of messages every day — reliably, compliantly, at scale.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap" data-aos="fade-up" data-aos-delay="200">
            <Link href="/try-for-free/" className="btn-white">
              Get Started Free <i className="bi bi-arrow-right" />
            </Link>
            <Link href="/contact/" className="btn-outline-white">
              <i className="bi bi-telephone" /> Talk to Sales
            </Link>
          </div>
          <div style={{ display:"flex", justifyContent:"center", gap:24, flexWrap:"wrap", marginTop:36, paddingTop:28, borderTop:"1px solid rgba(255,255,255,0.15)" }}>
            {[
              "10,000+ Active Businesses",
              "500M+ Messages Delivered",
              "TRAI & Meta Compliant",
              "99.9% Uptime SLA",
            ].map((txt,i) => (
              <span key={i} style={{ color:"rgba(255,255,255,0.75)", fontSize:"0.85rem", fontWeight:500 }}>
                <i className="bi bi-check-circle-fill" style={{ color:"#43cea2", marginRight:6 }} />{txt}
              </span>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
