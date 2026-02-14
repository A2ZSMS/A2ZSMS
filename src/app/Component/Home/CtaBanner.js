import React from "react";
import Link from "next/link";
import "./Home.css";

const CtaBanner = () => {
  return (
    <section className="cta-banner">
      <div className="container text-center position-relative aos" style={{ zIndex: 1 }}>
        <h2 data-aos="fade-up">Ready to Grow Your Business?</h2>
        <p data-aos="fade-up" data-aos-delay="100">
          Join 10,000+ businesses using A2ZSMS to drive customer engagement,
          boost sales, and automate communication.
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
  );
};

export default CtaBanner;
