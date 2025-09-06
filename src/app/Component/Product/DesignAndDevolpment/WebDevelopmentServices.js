import React from "react";

const WebDevelopmentServices = () => {
  const developmentServices = [
    {
      icon: "bi-code-slash",
      title: "Frontend Development",
      description:
        "Beautiful, interactive user interfaces that engage visitors and drive conversions.",
      technologies: ["HTML5", "CSS3", "JavaScript", "React.js"],
      benefits:
        "Creates stunning visual experiences that keep visitors engaged and convert them into customers.",
    },
    {
      icon: "bi-server",
      title: "Backend Development",
      description:
        "Powerful server-side solutions that handle complex business logic and data management.",
      technologies: ["Node.js", "PHP", "MySQL", "API Integration"],
      benefits:
        "Ensures your website can handle growth, process orders, and manage customer data securely.",
    },
    {
      icon: "bi-phone",
      title: "Mobile Optimization",
      description:
        "Responsive designs that work flawlessly across all devices and screen sizes.",
      technologies: [
        "Responsive Design",
        "PWA",
        "Touch Optimization",
        "Performance",
      ],
      benefits:
        "Captures mobile traffic (60%+ of web users) and improves search engine rankings.",
    },
    {
      icon: "bi-lightning-charge",
      title: "Performance Optimization",
      description:
        "Lightning-fast loading speeds that reduce bounce rates and improve user experience.",
      technologies: [
        "Speed Optimization",
        "CDN",
        "Caching",
        "Image Compression",
      ],
      benefits:
        "Every second faster = 7% more conversions. Fast sites rank higher on Google.",
    },
  ];

  return (
    <section className="py-5 bg-white shadow-sm border border-top text-dark position-relative overflow-hidden">
      {/* Animated Background */}
      <div className="position-absolute top-0 start-0 w-100 h-100">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <div className="container position-relative aos">
        <div className="row align-items-center mb-5 aos">
          {/* Image Section */}
          <div
            className="col-lg-6 order-lg-1 order-2 text-center mb-4 mb-lg-0"
            data-aos="fade-right"
          >
            <div className="position-relative">
              <img
                src="/image/product/designs.jpg"
                alt="Advanced Web Development Technologies"
                className="img-fluid rounded-4 shadow-lg"
                style={{ maxHeight: "500px" }}
              />
              {/* Floating Tech Icons */}
              <div className="position-absolute top-0 start-0 w-100 h-100">
                <div className="floating-icon position-absolute top-25 start-25">
                  <div className="bg-primary rounded-circle p-3 shadow">
                    <i className="bi bi-filetype-html text-white fs-4"></i>
                  </div>
                </div>
                <div className="floating-icon position-absolute top-75 end-25">
                  <div className="bg-warning rounded-circle p-3 shadow">
                    <i className="bi bi-filetype-js text-white fs-4"></i>
                  </div>
                </div>
                <div className="floating-icon position-absolute top-50 start-75">
                  <div className="bg-info rounded-circle p-3 shadow">
                    <i className="bi bi-database text-white fs-4"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="col-lg-6 order-lg-2 order-1" data-aos="fade-left">
            <span className="badge bg-warning text-dark px-4 py-2 rounded-pill mb-3 fs-6">
              Advanced Technology
            </span>
            <h2 className="display-5 fw-bold mb-4">
              Cutting-Edge Development
              <span className="text-warning d-block">That Powers Success</span>
            </h2>
            <p className="lead mb-4 text-dark">
              We don't just write code—we engineer digital solutions that solve
              real business problems. Our development expertise ensures your
              website is fast, secure, scalable, and built to grow with your
              business.
            </p>
            <p className="text-dark mb-4">
              Using industry-leading technologies and best practices, we create
              websites that not only look amazing but also perform
              exceptionally. Every line of code is optimized for speed,
              security, and search engine visibility.
            </p>

            {/* Key Stats */}
            <div className="row g-3 mb-4 py-5">
              <div className="col-6">
                <div className="text-center">
                  <h3 className="fw-bold text-warning mb-1">99.9%</h3>
                  <small className="text-dark">Uptime Guarantee</small>
                </div>
              </div>
              <div className="col-6">
                <div className="text-center">
                  <h3 className="fw-bold text-warning mb-1">&lt;3s</h3>
                  <small className="text-dark">Average Load Time</small>
                </div>
              </div>
            </div>

            {/* <button className="btn btn-warning btn-lg px-5 py-3 rounded-pill fw-semibold text-dark">
              <i className="bi bi-code-square me-2"></i>
              Start Your Development Project
            </button> */}
          </div>
        </div>

        {/* Development Services Grid */}
        <div className="row g-4 aos">
          {developmentServices.map((service, index) => (
            <div key={index} className="col-lg-6" data-aos="fade-in">
              <div className="card bg-dark border-0 h-100 hover-glow">
                <div className="card-body p-4">
                  <div className="d-flex align-items-start mb-3">
                    <div
                      className="bg-warning rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{ width: "60px", height: "60px" }}
                    >
                      <i className={`${service.icon} text-light fs-3`}></i>
                    </div>
                    <div className="flex-grow-1">
                      <h4 className="fw-bold text-white mb-2">
                        {service.title}
                      </h4>
                      <p className="text-white mb-3">{service.description}</p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-3">
                    <h6 className="text-warning fw-semibold mb-2">
                      Technologies:
                    </h6>
                    <div className="d-flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="badge bg-secondary text-light px-3 py-2 rounded-pill"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Business Benefits */}
                  <div className="border-top border-secondary pt-3">
                    <h6 className="text-warning fw-semibold mb-2">
                      Business Impact:
                    </h6>
                    <p className="text-light mb-0 small">{service.benefits}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Our Development */}
        <div
          className="row justify-content-center mt-5 py-4 "
          data-aos="fade-in"
        >
          <div className="col-lg-10">
            <div className="text-center">
              <h3 className="fw-bold text-dark mb-4">
                Why Our Development Stands Apart
              </h3>
              <div className="row g-4">
                <div className="col-md-3 col-6">
                  <div className="border-0 shadow rounded-4 p-4 h-100">
                    <i className="bi bi-shield-lock text-warning fs-2 mb-3"></i>
                    <h5 className="fw-bold text-dark">Secure</h5>
                    <p className="text-dark small mb-0">
                      Enterprise-grade security protocols
                    </p>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="border-0 shadow rounded-4 p-4 h-100">
                    <i className="bi bi-arrows-angle-expand text-warning fs-2 mb-3"></i>
                    <h5 className="fw-bold text-dark">Scalable</h5>
                    <p className="text-dark small mb-0">
                      Grows with your business needs
                    </p>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="border-0 shadow rounded-4 p-4 h-100">
                    <i className="bi bi-rocket-takeoff text-warning fs-2 mb-3"></i>
                    <h5 className="fw-bold text-dark">Fast</h5>
                    <p className="text-dark small mb-0">
                      Optimized for lightning speed
                    </p>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="border-0 shadow rounded-4 p-4 h-100">
                    <i className="bi bi-search text-warning fs-2 mb-3"></i>
                    <h5 className="fw-bold text-dark">SEO Ready</h5>
                    <p className="text-dark small mb-0">
                      Built for search engine success
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .pattern-dots {
          background-image: radial-gradient(
            circle,
            #dee2e6 1px,
            transparent 1px
          );
          background-size: 20px 20px;
          width: 100%;
          height: 100%;
        }
        .floating-shapes {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(45deg, #667eea, #764ba2);
          opacity: 0.1;
        }

        .shape-1 {
          width: 200px;
          height: 200px;
          top: 10%;
          left: 10%;
          animation: float 6s ease-in-out infinite;
        }

        .shape-2 {
          width: 150px;
          height: 150px;
          top: 60%;
          right: 10%;
          animation: float 8s ease-in-out infinite reverse;
        }

        .shape-3 {
          width: 100px;
          height: 100px;
          bottom: 20%;
          left: 20%;
          animation: float 7s ease-in-out infinite;
        }

        .floating-icon {
          animation: float 3s ease-in-out infinite;
        }

        .hover-glow {
          transition: all 0.3s ease;
        }

        .hover-glow:hover {
          box-shadow: 0 10px 30px rgba(255, 193, 7, 0.3) !important;
          transform: translateY(-5px);
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </section>
  );
};

export default WebDevelopmentServices;
