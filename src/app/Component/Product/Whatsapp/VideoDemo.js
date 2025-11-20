"use client";

import { useState } from "react";
const VideoDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const features = [
    {
      id: 1,
      icon: "bi-chat-left-dots-fill",
      title: "Bulk Messaging",
      description: "Send thousands of messages instantly",
    },
    {
      id: 2,
      icon: "bi-robot",
      title: "AI Chatbots",
      description: "24/7 automated customer support",
    },
    {
      id: 3,
      icon: "bi-bar-chart-fill",
      title: "Analytics Dashboard",
      description: "Track performance in real-time",
    },
    {
      id: 4,
      icon: "bi-puzzle-fill",
      title: "Easy Integration",
      description: "Connect with your existing tools",
    },
  ];

  return (
    <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left: Video Player */}
          <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
            <div className="position-relative">
              {/* Video Thumbnail/Player */}
              <div
                className="rounded shadow-lg overflow-hidden"
                style={{
                  backgroundColor: "#000",
                  aspectRatio: "16/9",
                  position: "relative",
                }}
              >
                {!isPlaying ? (
                  <>
                    {/* Thumbnail */}
                    <img
                      src="/image/product/whatsapp-demo-thumbnail.png"
                      alt="WhatsApp API Demo"
                      className="w-100 h-100"
                      style={{ objectFit: "cover", opacity: 0.7 }}
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                    {/* Play Button Overlay */}
                    <div
                      className="position-absolute top-50 start-50 translate-middle"
                      style={{ cursor: "pointer" }}
                      onClick={() => setIsPlaying(true)}
                    >
                      <div
                        className="rounded-circle bg-success d-flex align-items-center justify-content-center"
                        style={{
                          width: "80px",
                          height: "80px",
                          transition: "transform 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "scale(1.1)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                        }}
                      >
                        <i
                          className="bi bi-play-fill text-white"
                          style={{ fontSize: "40px", marginLeft: "5px" }}
                        ></i>
                      </div>
                    </div>
                    {/* Demo Label */}
                    <div
                      className="position-absolute top-0 start-0 m-3"
                      style={{
                        backgroundColor: "rgba(0,0,0,0.7)",
                        padding: "8px 15px",
                        borderRadius: "20px",
                      }}
                    >
                      <small className="text-white fw-bold">
                        <i className="bi bi-camera-video-fill me-2"></i>
                        Product Demo
                      </small>
                    </div>
                  </>
                ) : (
                  // Placeholder for actual video
                  <div className="w-100 h-100 d-flex align-items-center justify-content-center flex-column">
                    <i
                      className="bi bi-film text-white mb-3"
                      style={{ fontSize: "48px" }}
                    ></i>
                    <p className="text-white">
                      Video player would be embedded here
                    </p>
                    <small className="text-white-50">
                      (YouTube/Vimeo embed or custom video)
                    </small>
                  </div>
                )}
              </div>

              {/* Stats Below Video */}
              <div className="row mt-3 g-2">
                <div className="col-4">
                  <div
                    className="card border-0 shadow-sm text-center p-2"
                    style={{ borderRadius: "10px" }}
                  >
                    <i className="bi bi-eye-fill text-primary fs-5"></i>
                    <small
                      className="fw-bold mt-1"
                      style={{ color: "#203239" }}
                    >
                      10K+ Views
                    </small>
                  </div>
                </div>
                <div className="col-4">
                  <div
                    className="card border-0 shadow-sm text-center p-2"
                    style={{ borderRadius: "10px" }}
                  >
                    <i className="bi bi-hand-thumbs-up-fill text-success fs-5"></i>
                    <small
                      className="fw-bold mt-1"
                      style={{ color: "#203239" }}
                    >
                      98% Liked
                    </small>
                  </div>
                </div>
                <div className="col-4">
                  <div
                    className="card border-0 shadow-sm text-center p-2"
                    style={{ borderRadius: "10px" }}
                  >
                    <i className="bi bi-clock-fill text-warning fs-5"></i>
                    <small
                      className="fw-bold mt-1"
                      style={{ color: "#203239" }}
                    >
                      3 Min Demo
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="col-lg-6" data-aos="fade-left">
            <h2 className="fw-bold mb-3 head1" style={{ color: "#203239" }}>
              See WhatsApp Business API in Action
            </h2>
            <p className="text-muted para-blog mb-4">
              Watch our 3-minute demo to discover how easy it is to automate
              customer conversations, send bulk messages, and integrate with
              your existing systems.
            </p>

            {/* Feature List */}
            <div className="row g-3 mb-4">
              {features.map((feature, index) => (
                <div key={feature.id} className="col-12">
                  <div className="d-flex align-items-start">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{
                        width: "50px",
                        height: "50px",
                        minWidth: "50px",
                        backgroundColor: "#25D36615",
                      }}
                    >
                      <i
                        className={`bi ${feature.icon} text-success`}
                        style={{ fontSize: "24px" }}
                      ></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1" style={{ color: "#203239" }}>
                        {feature.title}
                      </h6>
                      <p className="text-muted small mb-0">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="d-flex gap-3 flex-wrap">
              <a
                href="/try-for-free"
                className="btn btn-success btn-lg px-4 py-2"
                style={{ borderRadius: "25px" }}
              >
                <i className="bi bi-rocket-takeoff me-2"></i>
                Start Free Trial
              </a>
              <a
                href="/request-demo"
                className="btn btn-outline-success btn-lg px-4 py-2"
                style={{ borderRadius: "25px" }}
              >
                <i className="bi bi-calendar-check me-2"></i>
                Book Live Demo
              </a>
            </div>

            {/* Trust Indicator */}
            <div className="mt-4 pt-4 border-top">
              <div className="d-flex align-items-center gap-3 flex-wrap">
                <div className="d-flex align-items-center">
                  <i className="bi bi-shield-check text-success me-2 fs-5"></i>
                  <small className="text-muted">No Credit Card Required</small>
                </div>
                <div className="d-flex align-items-center">
                  <i className="bi bi-stopwatch text-success me-2 fs-5"></i>
                  <small className="text-muted">Setup in 5 Minutes</small>
                </div>
                <div className="d-flex align-items-center">
                  <i className="bi bi-x-circle text-success me-2 fs-5"></i>
                  <small className="text-muted">Cancel Anytime</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;
