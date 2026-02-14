"use client";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGoogle,
  FaYoutube,
} from "react-icons/fa";
import CountUp from "react-countup";
import "../../Home/Home.css";

const socialMediaData = [
  { id: 1, platform: "Instagram", icon: <FaInstagram color="#E4405F" />, count: 5000 },
  { id: 2, platform: "Facebook", icon: <FaFacebook color="#4267B2" />, count: 6000 },
  { id: 3, platform: "LinkedIn", icon: <FaLinkedin color="#0077B5" />, count: 8600 },
  { id: 4, platform: "Google", icon: <FaGoogle color="#DB4437" />, count: 5500 },
  { id: 5, platform: "YouTube", icon: <FaYoutube color="#FF0000" />, count: 10000 },
];

const SocialMedia = () => {
  return (
    <div className="social-section">
      <div className="container text-center">
        <span className="section-label">Follow Us</span>
        <h2 className="section-heading mb-2">
          Let&apos;s Get <span style={{ color: "#097bdf" }}>Social!</span>
        </h2>
        <p className="section-desc mx-auto mb-5">
          Connect with us on Social Media
        </p>

        <div className="row justify-content-center" data-aos="fade-up">
          {socialMediaData.map((item) => (
            <div key={item.id} className="col-6 col-md-2 mb-3">
              <div className="social-card">
                <div className="social-icon">{item.icon}</div>
                <div className="social-count">
                  <CountUp end={item.count} duration={4} />
                  <span>+</span>
                </div>
                <div className="social-name">{item.platform}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
