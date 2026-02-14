import Link from "next/link";
import "./Home.css";

const Video = () => {
  return (
    <div className="hero">
      <video autoPlay muted loop playsInline>
        <source src="/video/video.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>

      <div className="hero-inner">
        <div className="container">
          <div className="row align-items-center aos">
            {/* Left — Text */}
            <div className="col-lg-8">
              <div className="hero-tag">
                <span className="pulse-dot"></span>
                #1 WhatsApp Business API Provider
              </div>

              <h1>
                Boost Your Business Revenue by{" "}
                <span className="green">5X with WhatsApp Marketing</span>
              </h1>

              <p className="hero-desc">
                Connect with your audience in real-time. Deliver personalized
                promotions, build stronger customer relationships, and drive
                unmatched engagement rates with 98% open rates.
              </p>

              <div className="hero-actions">
                <Link href="/try-for-free/" className="btn-cta">
                  Get Started Free <i className="bi bi-arrow-right"></i>
                </Link>
                <Link href="/request-demo" className="btn-ghost">
                  <i className="bi bi-play-circle"></i> Request Demo
                </Link>
              </div>

              <div className="hero-metrics">
                <div className="hero-metric">
                  <div className="num">98%</div>
                  <div className="label">Open Rate</div>
                </div>
                <div className="hero-metric">
                  <div className="num">10K+</div>
                  <div className="label">Businesses</div>
                </div>
                <div className="hero-metric">
                  <div className="num">50M+</div>
                  <div className="label">Messages Sent</div>
                </div>
                <div className="hero-metric">
                  <div className="num">99.9%</div>
                  <div className="label">Uptime</div>
                </div>
              </div>
            </div>

            {/* Right — Visual */}
            {/* <div className="col-lg-6 d-none d-lg-block">
              <div className="hero-visual">
                <img src="/image/Whatsapp.png" alt="WhatsApp Business API Dashboard" />
                Floating cards
                <div className="hero-float-card top-card">
                  <div className="fc-icon" style={{ background: "#43cea2" }}>
                    <i className="bi bi-check-lg"></i>
                  </div>
                  <div>
                    <div className="fc-num">98%</div>
                    <div className="fc-label">Delivery Rate</div>
                  </div>
                </div>
                <div className="hero-float-card bottom-card">
                  <div className="fc-icon" style={{ background: "#097bdf" }}>
                    <i className="bi bi-chat-dots"></i>
                  </div>
                  <div>
                    <div className="fc-num">2.5x</div>
                    <div className="fc-label">More Engagement</div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Trusted logos */}
      <div className="hero-logos text-center">
        <p>Trusted by leading brands</p>
        <div className="hero-logos-row">
          <img src="/image/ping4sms-client3.webp" alt="Client" />
          <img src="/image/isk.png" alt="Client" />
          <img src="/image/ping4sms-client1.webp" alt="Client" />
          <img src="/image/ping4sms-client5.webp" alt="Client" />
        </div>
      </div>
    </div>
  );
};

export default Video;
