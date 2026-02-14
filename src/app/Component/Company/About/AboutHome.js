import React from "react";
import SocialMedia from "../../Product/Whatsapp/SocialMedia";

const AboutHome = () => {
  return (
    <div>
      {/* Who We Are */}
      <section className="who-section">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="section-label">Who We Are</span>
            <h2 className="section-heading">
              Bridging the Communication <span className="highlight">Gap</span>
            </h2>
            <p className="section-desc mx-auto">
              A trailblazing SMS solutions provider committed to delivering
              reliable, efficient, and scalable messaging solutions.
            </p>
          </div>

          <div className="row align-items-center aos">
            <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
              <div className="who-img-wrap">
                <img
                  src="/image/about-choose.jpeg"
                  alt="Who We Are"
                  className="img-fluid"
                />
                <div className="who-img-accent"></div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <h2>
                Redefining <span className="highlight">Communication</span>{" "}
                Standards Since Day One
              </h2>
              <p className="who-desc">
                At A2ZSMS, we are a trailblazing SMS solutions provider committed
                to bridging the communication gap for businesses across
                industries. With a focus on delivering reliable, efficient, and
                scalable messaging solutions, we empower companies to connect
                with their customers like never before.
              </p>
              <p className="who-desc">
                Founded with the vision to redefine communication standards, we
                specialize in bulk SMS services, transactional SMS, promotional
                SMS, OTP services, and more. Over the years, we have built a
                strong reputation for our innovative approach and customer-centric
                solutions.
              </p>

              <div className="who-highlights">
                <div className="who-highlight-item">
                  <div className="who-highlight-icon">
                    <i className="bi bi-lightning-charge-fill"></i>
                  </div>
                  <span>Fast Delivery</span>
                </div>
                <div className="who-highlight-item">
                  <div className="who-highlight-icon">
                    <i className="bi bi-shield-lock-fill"></i>
                  </div>
                  <span>Secure & Reliable</span>
                </div>
                <div className="who-highlight-item">
                  <div className="who-highlight-icon">
                    <i className="bi bi-graph-up-arrow"></i>
                  </div>
                  <span>Scalable Solutions</span>
                </div>
                <div className="who-highlight-item">
                  <div className="who-highlight-icon">
                    <i className="bi bi-headset"></i>
                  </div>
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mv-section">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="section-label">Our Purpose</span>
            <h2 className="section-heading">Mission & Vision</h2>
            <p className="section-desc mx-auto">
              Driving innovation in business communication with a clear purpose
              and bold vision for the future.
            </p>
          </div>

          <div className="row g-4">
            {/* Mission */}
            <div className="col-lg-6" data-aos="fade-right">
              <div className="mv-card">
                <div className="mv-icon mission-icon">
                  <i className="bi bi-rocket-takeoff-fill"></i>
                </div>
                <h3>Our Mission</h3>
                <p>
                  Our mission at A2ZSMS is to empower businesses to communicate
                  effortlessly and efficiently. We aim to provide state-of-the-art
                  SMS solutions that drive engagement, enhance customer
                  experiences, and simplify operations.
                </p>
                <ul className="mv-list">
                  <li>
                    <i className="bi bi-check-circle-fill"></i>
                    Build stronger customer relationships through messaging.
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i>
                    Reach wider audiences with impactful communication.
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i>
                    Streamline internal and external communication processes.
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i>
                    Stay ahead with cutting-edge technology and innovation.
                  </li>
                </ul>
              </div>
            </div>

            {/* Vision */}
            <div className="col-lg-6" data-aos="fade-left">
              <div className="mv-card">
                <div className="mv-icon vision-icon">
                  <i className="bi bi-eye-fill"></i>
                </div>
                <h3>Our Vision</h3>
                <p>
                  Our vision is to become a global leader in SMS communication
                  solutions, recognized for our innovation, reliability, and
                  customer-first approach.
                </p>
                <ul className="mv-list">
                  <li>
                    <i className="bi bi-check-circle-fill"></i>
                    Revolutionize business-customer communication through SMS
                    technology.
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i>
                    Foster seamless and secure communication accessible to every
                    business.
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i>
                    Continuously innovate with solutions that are efficient,
                    sustainable, and scalable.
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i>
                    Be synonymous with excellence in communication worldwide.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="values-section">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="section-label">Our Values</span>
            <h2 className="section-heading">What Drives Us</h2>
            <p className="section-desc mx-auto">
              The principles that guide every decision we make and every solution
              we deliver.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-3" data-aos="fade-up">
              <div className="value-card">
                <div
                  className="value-icon"
                  style={{ background: "linear-gradient(135deg, #097bdf, #065a9c)" }}
                >
                  <i className="bi bi-lightbulb-fill"></i>
                </div>
                <h5>Innovation</h5>
                <p>
                  We constantly evolve our technology to deliver cutting-edge
                  messaging solutions.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
              <div className="value-card">
                <div
                  className="value-icon"
                  style={{ background: "linear-gradient(135deg, #43cea2, #185a9d)" }}
                >
                  <i className="bi bi-people-fill"></i>
                </div>
                <h5>Customer First</h5>
                <p>
                  Every solution is crafted with our clients' success as the top
                  priority.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
              <div className="value-card">
                <div
                  className="value-icon"
                  style={{ background: "linear-gradient(135deg, #f59e0b, #d97706)" }}
                >
                  <i className="bi bi-award-fill"></i>
                </div>
                <h5>Excellence</h5>
                <p>
                  We maintain the highest standards of quality in everything we
                  deliver.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
              <div className="value-card">
                <div
                  className="value-icon"
                  style={{ background: "linear-gradient(135deg, #8b5cf6, #6d28d9)" }}
                >
                  <i className="bi bi-hand-thumbs-up-fill"></i>
                </div>
                <h5>Integrity</h5>
                <p>
                  Trust and transparency form the foundation of every client
                  relationship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SocialMedia />

      {/* CTA */}
      <section className="about-cta-section">
        <div className="container text-center about-cta-inner">
          <div data-aos="fade-up">
            <span
              className="section-label"
              style={{
                background: "rgba(255,255,255,0.1)",
                borderColor: "rgba(255,255,255,0.2)",
                color: "#fff",
              }}
            >
              Get Started
            </span>
            <h2>Join Us in Our Mission</h2>
            <p>
              Ready to transform your business communication? Let's create
              something amazing together.
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <a href="/contact" className="btn-white">
                Contact Us <i className="bi bi-arrow-right"></i>
              </a>
              <a href="tel:+918431086185" className="btn-outline-white">
                <i className="bi bi-telephone-fill"></i> +91-8431086185
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutHome;
