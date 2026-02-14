"use client";
import "./Header.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faLinkedinIn,
  faWhatsapp,
  faYoutube,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "FAQ's", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
];

const serviceLinks = [
  { label: "Bulk SMS", href: "/bulk-sms" },
  { label: "WhatsApp API", href: "/whatsapp-api" },
  { label: "RCS Messaging", href: "/rcs-service" },
  { label: "Bulk Voice Call", href: "/voice-call" },
  { label: "Blogs", href: "/blogs" },
];

const socialLinks = [
  { icon: faFacebookF, href: "https://www.facebook.com/A2zsmsservices/", bg: "#1877F2" },
  { icon: faLinkedinIn, href: "https://www.linkedin.com/company/105067284", bg: "#0A66C2" },
  { icon: faWhatsapp, href: "https://wa.me/918431086185?text=Hi", bg: "#25D366" },
  { icon: faYoutube, href: "https://www.youtube.com/@a2zsms", bg: "#FF0000" },
  { icon: faXTwitter, href: "https://x.com/A2zSmsin", bg: "#000" },
  { icon: faInstagram, href: "https://www.instagram.com/a2z.sms/", bg: "linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #c810e4)" },
];

const Footer = () => {
  return (
    <footer className="site-footer">
      {/* Main Footer */}
      <div className="footer-main">
        <div className="container">
          <div className="row g-4 g-lg-5">
            {/* Brand Column */}
            <div className="col-lg-4 col-md-6">
              <div className="footer-brand">
                <img src="/image/logo.png" alt="A2Z SMS Logo" width="80" />
                <p className="footer-brand-desc">
                  Bulk SMS is the most popular marketing method compared to other
                  marketing methods. It is trusted, reliable, and cost-effective.
                </p>

                {/* Social Links */}
                <div className="footer-socials">
                  {socialLinks.map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      className="footer-social-link"
                      target="_blank"
                      style={{ background: social.bg }}
                    >
                      <FontAwesomeIcon icon={social.icon} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div className="col-6 col-md-3 col-lg-2">
              <h6 className="footer-heading">Company</h6>
              <ul className="footer-links">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href}>
                      <i className="bi bi-chevron-right"></i>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Links */}
            <div className="col-6 col-md-3 col-lg-2">
              <h6 className="footer-heading">SMS Plans</h6>
              <ul className="footer-links">
                {serviceLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href}>
                      <i className="bi bi-chevron-right"></i>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-lg-4 col-md-6">
              <h6 className="footer-heading">Contact Us</h6>
              <ul className="footer-contact">
                <li>
                  <div className="footer-contact-icon">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </div>
                  <span>
                    183, 2nd Floor, G Block opposite to Reliance Trends,
                    Sahakara Nagar Main Rd, Byatarayanapura, Bengaluru,
                    Karnataka 560092
                  </span>
                </li>
                <li>
                  <div className="footer-contact-icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <a href="mailto:sales@a2zsms.in">sales@a2zsms.in</a>
                </li>
                <li>
                  <div className="footer-contact-icon">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <a href="tel:+918431086185">+91 84310 86185</a>
                </li>
              </ul>

              {/* Payment Methods */}
              <div className="footer-payments">
                <span className="footer-payments-label">Payment Methods</span>
                <div className="footer-payments-row">
                  <img src="/image/visa-logo.png" alt="Visa" />
                  <img src="/image/payoneer-logo.png" alt="Payoneer" />
                  <img src="/image/mastercard-logo.png" alt="Mastercard" />
                  <img src="/image/affirm-logo.png" alt="Affirm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center g-3">
            <div className="col-md-6 text-center text-md-start">
              <p className="footer-copy">
                &copy; {new Date().getFullYear()} <strong>A2ZSMS Services</strong>. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-legal">
                <Link href="/terms/">Terms & Conditions</Link>
                <Link href="/privacy/">Privacy Policy</Link>
                <Link href="/refund-policie/">Refund Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
