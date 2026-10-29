"use client"; // Important for Next.js app directory

const Home = () => {
  return (
    <section className="py-5 bg2">
      <div className="container">
        <div className="row align-items-center aos">
          {/* Left Content */}
          <div className="col-md-6 para-color" data-aos="fade-right">
            <h1 className="fw-bold mb-4">
              Elevate Tours & Travels with{" "}
              <span className="text-primary">WhatsApp Solutions!</span>
            </h1>
            <p className="">
              Transform how you engage with travelers by leveraging WhatsApp's
              powerful messaging tools.{" "}
              <strong>Best whatsapp business api for travel & tourism</strong>{" "}
              helps you provide real-time updates, personalized itineraries, and
              instant support to make every trip unforgettable.
            </p>
            <ul className="list-unstyled mt-4 text-muted">
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>
                  Deliver instant travel itineraries, confirmations, and updates
                  with{" "}
                  <strong>
                    Best whatsapp business api for travel & tourism
                  </strong>
                  .
                </span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>
                  Notify customers about booking changes, cancellations, or
                  delays.
                </span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>
                  Use WhatsApp campaigns to promote holiday packages and offers.
                </span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-check-circle-fill text-primary me-3"></i>
                <span>
                  Enhance customer satisfaction with AI-driven chat support for
                  FAQs.
                </span>
              </li>
            </ul>
          </div>

          {/* Right Image Section */}
          <div className="col-md-6 text-center aos" data-aos="fade-left">
            <img
              fetchPriority="high"
              src="/image/Solutions/Travel.webp"
              alt="Tours and Travels Services"
              width={1600}
              height={1600}
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
