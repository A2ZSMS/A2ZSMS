import { useState } from "react";

const WhyChooseUs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const benefits = [
    {
      title: "99.9% Delivery Rate Guarantee",
      description:
        "Our robust infrastructure ensures your messages reach recipients with industry-leading reliability. We maintain direct connections with telecom operators to guarantee consistent delivery.",
      icon: "bi-graph-up-arrow",
    },
    {
      title: "Lightning Fast Delivery (< 2 Seconds)",
      description:
        "Experience ultra-fast message delivery with our optimized routing system. Most SMS are delivered in under 2 seconds, ensuring timely communication with your customers.",
      icon: "bi-lightning-fill",
    },
    {
      title: "100% DND & TRAI Compliant",
      description:
        "Stay compliant with all Indian telecommunications regulations. Our platform automatically filters DND numbers and ensures complete adherence to TRAI guidelines.",
      icon: "bi-shield-check",
    },
    {
      title: "Seamless API Integration",
      description:
        "Integrate SMS functionality into your existing systems with our developer-friendly APIs. Supports multiple programming languages with comprehensive documentation.",
      icon: "bi-code-slash",
    },
    {
      title: "Real-time Analytics Dashboard",
      description:
        "Monitor your SMS campaigns with real-time insights. Track delivery rates, failures, and engagement metrics through our intuitive dashboard.",
      icon: "bi-bar-chart-line-fill",
    },
    {
      title: "24/7 Expert Support",
      description:
        "Our dedicated support team is available round the clock to assist you with any queries or technical issues. Get prompt assistance whenever you need it.",
      icon: "bi-headset",
    },
  ];

  const faqs = [
    {
      question: "How quickly can I get started?",
      answer:
        "You can start sending SMS within minutes of signing up. Our streamlined onboarding process includes instant account activation and easy API integration.",
    },
    {
      question: "Do you offer international SMS services?",
      answer:
        "Yes, we provide SMS services to over 190 countries worldwide with competitive pricing and excellent delivery rates.",
    },
    {
      question: "What makes your service different from competitors?",
      answer:
        "Our combination of 99.9% delivery rate, sub-2-second delivery speed, complete regulatory compliance, and 24/7 expert support sets us apart in the market.",
    },
  ];

  return (
    <div className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="text-dark fw-bold mb-3">
            Why Choose Our Bulk SMS Service?
          </h2>
          <p className="text-muted mb-4">
            Discover the advantages that make us the preferred choice for
            thousands of businesses
          </p>
        </div>

        <div className="row g-4 mb-5">
          {benefits.map((benefit, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm hover-effect">
                <div className="card-body text-center p-4">
                  <div
                    className="icon-circle bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
                    style={{ width: "70px", height: "70px" }}
                  >
                    <i
                      className={`bi ${benefit.icon}`}
                      style={{ fontSize: "1.8rem" }}
                    ></i>
                  </div>
                  <h5 className="card-title fw-bold mb-3">{benefit.title}</h5>
                  <p className="card-text text-muted">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3 shadow-sm p-4 p-md-5">
          <h3 className="text-center fw-bold mb-4">
            Frequently Asked Questions
          </h3>
          <div className="accordion" id="whyChooseAccordion">
            {faqs.map((faq, index) => (
              <div key={index} className="accordion-item border-0 mb-3">
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button ${
                      activeIndex === index ? "" : "collapsed"
                    } fw-medium`}
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    style={{ borderRadius: "10px" }}
                  >
                    {faq.question}
                  </button>
                </h2>
                <div
                  className={`accordion-collapse collapse ${
                    activeIndex === index ? "show" : ""
                  }`}
                >
                  <div className="accordion-body pt-3 pb-4">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
