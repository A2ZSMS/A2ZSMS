"use client";

import { useEffect } from "react";
import styles from "./thankyou.module.css";

const RcsThankYou = () => {
  useEffect(() => {
    const nav = document.querySelector("nav.navbar");
    const footer = document.querySelector("footer");
    if (nav) nav.style.display = "none";
    if (footer) footer.style.display = "none";
    return () => {
      if (nav) nav.style.display = "";
      if (footer) footer.style.display = "";
    };
  }, []);

  return (
    <div className={styles.page}>
      {/* Animated blobs */}
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>

      <div className={styles.wrap}>
        {/* Icon */}
        <div className={styles.iconWrap}>
          <i className="bi bi-check-circle-fill"></i>
        </div>

        {/* Heading */}
        <h1 className={styles.heading}>You&rsquo;re All Set! 🎉</h1>
        <p className={styles.sub}>
          Thank you for requesting a demo. Our RCS specialist will call you back
          within <strong>2 hours</strong> with your free demo &amp; custom
          pricing.
        </p>

        {/* What happens next */}
        <div className={styles.stepsCard}>
          <h4 className={styles.stepsHeading}>What Happens Next?</h4>
          <div className={styles.step}>
            <div className={styles.stepNum}>1</div>
            <div>
              <p className={styles.stepTitle}>We Review Your Requirements</p>
              <p className={styles.stepDesc}>
                Our team reviews your form submission and prepares a custom RCS
                demo for your industry.
              </p>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNum}>2</div>
            <div>
              <p className={styles.stepTitle}>Expert Calls &amp; WhatsApps You</p>
              <p className={styles.stepDesc}>
                A dedicated RCS specialist contacts you within 2 hours to walk
                you through a live demo and pricing.
              </p>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNum}>3</div>
            <div>
              <p className={styles.stepTitle}>RCS Setup &amp; Go Live</p>
              <p className={styles.stepDesc}>
                Once you confirm, we complete brand verification and go live in
                3–5 business days — free setup included.
              </p>
            </div>
          </div>
        </div>

        {/* CTA buttons */}
        <div className={styles.ctaBtns}>
          <a
            href="https://wa.me/918431086185?text=Hi%2C%20I%20just%20submitted%20the%20RCS%20demo%20form"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.waBtn}
          >
            <i className="bi bi-whatsapp"></i> Chat on WhatsApp
          </a>
          <a href="tel:+918431086185" className={styles.callBtn}>
            <i className="bi bi-telephone-fill"></i> Call Us Now
          </a>
        </div>

        {/* Trust badges */}
        <div className={styles.trustRow}>
          <div className={styles.trustBadge}>
            <i className="bi bi-shield-lock-fill"></i>
            <span>SSL Secured</span>
          </div>
          <div className={styles.trustBadge}>
            <i className="bi bi-patch-check-fill"></i>
            <span>Google RCS Partner</span>
          </div>
          <div className={styles.trustBadge}>
            <i className="bi bi-star-fill"></i>
            <span>4.9/5 Rated</span>
          </div>
        </div>

        {/* Back to home */}
        <a href="/" className={styles.backLink}>
          <i className="bi bi-arrow-left me-1"></i> Back to A2ZSMS Home
        </a>
      </div>
    </div>
  );
};

export default RcsThankYou;
