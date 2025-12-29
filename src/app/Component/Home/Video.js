import Link from "next/link";
import "./Home.css";

const Video = () => {
  return (
    <div className="video-container position-relative">
      <video autoPlay muted loop playsInline className="videoBackground">
        <source src="/video/video.mp4" type="video/mp4" />
      </video>

      <div className="video-overlay"></div>

      <div className="container position-relative z-index-2">
        <div className="video-content text-white" data-aos="fade-up">
          <h1 className="fw-bold">
            Boost Your Business Revenue by{" "}
            <span className="highlight">5X with WhatsApp Marketing</span>
          </h1>
          <p className="description">
            Unlock the full potential of WhatsApp to connect with your audience
            in real-time. Deliver personalized promotions, build stronger
            customer relationships, and drive unmatched engagement rates.
            Transform your marketing strategy with a platform that guarantees
            results.
          </p>
          <div className="action-buttons d-flex flex-wrap gap-3">
            <Link href="/whatsapp-api/">
              <button className="btn btn-outline-light">
                Learn More
              </button>
            </Link>
            <Link href="/try-for-free/">
              <button className="btn btn-primary">
                Set Up Discovery Call
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="bottom-logos" data-aos="fade-up" data-aos-delay="200">
        <div className="container">
          <h3 className="text-center">Our Trusted Brands</h3>
          <div className="logo-container-flex">
            <img
              className="logo-img"
              src="/image/ping4sms-client3.webp"
              alt="Trusted Brand 1"
            />
            <img
              className="logo-img"
              src="/image/isk.png"
              alt="Trusted Brand 2"
            />
            <img
              className="logo-img"
              src="/image/ping4sms-client1.webp"
              alt="Trusted Brand 3"
            />
            <img
              className="logo-img"
              src="/image/ping4sms-client5.webp"
              alt="Trusted Brand 4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;

