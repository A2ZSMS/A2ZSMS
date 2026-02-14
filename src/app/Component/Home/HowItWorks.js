import React from "react";
import Link from "next/link";
import "./Home.css";

const steps = [
  {
    num: "1",
    title: "Sign Up & Connect",
    desc: "Create your account in 2 minutes and connect your WhatsApp Business number to our platform.",
  },
  {
    num: "2",
    title: "Set Up Campaigns",
    desc: "Use our intuitive dashboard to create bulk messages, chatbots, and automated workflows.",
  },
  {
    num: "3",
    title: "Engage & Grow",
    desc: "Start reaching customers instantly with 98% open rates. Track results with real-time analytics.",
  },
];

const HowItWorks = () => {
  return (
    <section className="how-section">
      <div className="container aos">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="section-label">How It Works</span>
          <h2 className="section-heading">Get Started in 3 Simple Steps</h2>
          <p className="section-desc mx-auto">
            No complicated setup. No technical skills needed. Go live in minutes.
          </p>
        </div>

        <div className="row justify-content-center aos">
          {steps.map((step, i) => (
            <div className="col-md-4 mb-4 mb-md-0" key={i} data-aos="fade-up" data-aos-delay={i * 150}>
              <div className="step-card">
                {i < steps.length - 1 && <div className="step-connector d-none d-md-block"></div>}
                <div className="step-num">{step.num}</div>
                <h5>{step.title}</h5>
                <p>{step.desc}</p>
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
  );
};

export default HowItWorks;
