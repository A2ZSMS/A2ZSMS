const RcsMessagingSection = () => {
  return (
    <div>
      <div className="bg-white py-3">
        <div className="container">
          <h2 className="text-center fw-bold mb-5" style={{ color: "#203239" }}>
            Our RCS Messaging Templates
          </h2>

          <div className="row align-items-center mb-5 aos">
            <div className="col-md-6 text-center" data-aos="fade-right">
              <img
                className="img-fluid rounded"
                src="/image/product/rcs2.png"
                alt="Image"
              />
            </div>
            <div className="col-md-6 para-color1 fw-bold" data-aos="fade-in">
              <h3 className="fw-bold" style={{ color: "#203239" }}>
                Why Choose RCS Messaging?
              </h3>
              <p className="text-muted ">
                Replace SMS and MMS texting with feature-rich RCS Business Messaging to send and receive high-resolution images, videos, and interactive content. Enhance your communication and improve customer engagement with RCS Business Messaging’s advanced capabilities and branded experiences.
              </p>
              <ul>
                <li>Verified Sender with branding</li>
                <li>Customizable quick replies and actions</li>
                <li>Rich media support (images, videos, carousels)</li>
                <li>Real-time tracking and analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-light py-3">
        <div className="container">
          <div className="row align-items-center aos">
            <div className="col-md-6 para-color1 fw-bold" data-aos="fade-left">
              <h3 className="fw-bold" style={{ color: "#203239" }}>
                RCS Messaging Features
              </h3>
              <p className="text-muted">
                Engage customers like never before with an advanced RCS Messaging Platform that delivers interactive, dynamic, and high-impact messages. Enhance user experience and boost conversions using rich media capabilities and branded communication features.
              </p>
              <ul>
                <li>Instant delivery of rich media messages through a reliable RCS Messaging Platform</li>
                <li>Highly secure and encrypted communication for trusted customer interactions</li>
                <li>Personalized messages for each customer based on behavior and preferences</li>
                <li>Improved customer satisfaction and loyalty with interactive app like messaging experiences</li>
              </ul>
            </div>
            <div className="col-md-6 text-center" data-aos="fade-in">
              <img
                className="img-fluid rounded"
                src="/image/product/rcs3.png"
                alt="Image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RcsMessagingSection;
