import Link from "next/link";
import styles from "./thankyou.module.css";

export const metadata = {
  metadataBase: new URL("https://www.a2zsms.in"),
  title: "Thank You – A2ZSMS | We'll Be in Touch Soon",
  description:
    "Thank you for reaching out to A2ZSMS. Our team will call you within 30 minutes to get you started with Bulk SMS service.",
  robots: "noindex, nofollow",
};

const ThankYouPage = () => {
  return (
    <div className={styles.page}>
      <div className={`${styles.blob} ${styles.blob1}`}></div>
      <div className={`${styles.blob} ${styles.blob2}`}></div>

      <div className="container">
        <div className={styles.card}>
          {/* Success icon */}
          <div className={styles.iconWrap}>
            <div className={styles.iconRing}></div>
            <div className={styles.icon}>
              <i className="bi bi-check-lg"></i>
            </div>
          </div>

          {/* Heading */}
          <h1 className={styles.title}>Thank You!</h1>
          <p className={styles.sub}>
            Your request has been submitted successfully. Our team will call
            you within <strong>30 minutes</strong> to get you started with Bulk SMS.
          </p>

          {/* What happens next */}
          <div className={styles.steps}>
            <h6 className={styles.stepsTitle}>What happens next?</h6>

            <div className={styles.step}>
              <div className={styles.stepNum}>1</div>
              <div className={styles.stepText}>
                <strong>Our team reviews your request</strong>
                <span>We&apos;ll analyse your requirements and prepare a plan</span>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNum}>2</div>
              <div className={styles.stepText}>
                <strong>We&apos;ll call you</strong>
                <span>Keep your phone handy — expect our call within 30 minutes</span>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNum}>3</div>
              <div className={styles.stepText}>
                <strong>Setup &amp; Go Live</strong>
                <span>Your Bulk SMS account is activated within 24 hours</span>
              </div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className={styles.actions}>
            <Link prefetch={false} href="/" className={styles.btnPrimary}>
              <i className="bi bi-house-fill me-2"></i>Back to Home
            </Link>
            <a href="tel:+918431086185" className={styles.btnWa}>
              <i className="bi bi-telephone-fill me-2"></i>Call +91 84310 86185
            </a>
          </div>

          {/* Trust row */}
          <div className={styles.trust}>
            <span>
              <i className="bi bi-shield-lock-fill"></i> SSL Secured
            </span>
            <span>
              <i className="bi bi-patch-check-fill"></i> TRAI Compliant
            </span>
            <span>
              <i className="bi bi-geo-alt-fill"></i> Bengaluru-based support
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
