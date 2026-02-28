import Link from "next/link";
import styles from "./thankyou.module.css";
("use-client");
export const metadata = {
  title: "Thank You – A2ZSMS | We'll Be in Touch Soon",
  description:
    "Thank you for reaching out to A2ZSMS. Our team will contact you within 2 hours to get you started with WhatsApp API.",
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
            Your request has been submitted successfully. Our team will contact
            you within <strong>2 hours</strong> to get you started.
          </p>

          {/* What happens next */}
          <div className={styles.steps}>
            <h6 className={styles.stepsTitle}>What happens next?</h6>

            <div className={styles.step}>
              <div className={styles.stepNum}>1</div>
              <div className={styles.stepText}>
                <strong>Our team reviews your request</strong>
                <span>We'll analyse your requirements and prepare a plan</span>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNum}>2</div>
              <div className={styles.stepText}>
                <strong>We'll call / WhatsApp you</strong>
                <span>Expect a response within 2 hours on a business day</span>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNum}>3</div>
              <div className={styles.stepText}>
                <strong>Setup &amp; Go Live</strong>
                <span>Your WhatsApp API is activated within 24–48 hours</span>
              </div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className={styles.actions}>
            <Link href="/" className={styles.btnPrimary}>
              <i className="bi bi-house-fill me-2"></i>Back to Home
            </Link>
            <a
              href="https://wa.me/918431086185?text=Hi%2C%20I%20just%20filled%20the%20form%20on%20your%20website%20for%20WhatsApp%20API%20service."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnWa}
            >
              <i className="bi bi-whatsapp me-2"></i>Chat on WhatsApp
            </a>
          </div>

          {/* Trust row */}
          <div className={styles.trust}>
            <span>
              <i className="bi bi-shield-lock-fill"></i> SSL Secured
            </span>
            <span>
              <i className="bi bi-patch-check-fill"></i> Meta Partner
            </span>
            <span>
              <i className="bi bi-star-fill"></i> 4.9/5 Rated
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
