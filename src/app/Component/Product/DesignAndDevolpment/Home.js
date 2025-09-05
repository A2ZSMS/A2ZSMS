const Home = () => {
  return (
    <section className="bg-gradient position-relative overflow-hidden">
      <div className="container-fluid p-0 position-relative">
        <div className="row align-items-center min-vh-100 g-0">
          {/* Hero Image with Overlay */}
          <div className="col-12 position-relative">
            <div className="hero-image-container position-relative">
              <img
                src="/image/product/website.png"
                alt="Professional Web Design and Development Services"
                className="w-100 h-auto d-block"
                style={{
                  minHeight: "600px",
                  objectFit: "cover",
                  filter: "brightness(0.8)",
                }}
              />

              {/* Hero Content Overlay */}
              {/* <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                <div className="container text-center text-white">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <h1 className="display-3 fw-bold mb-4 animate__animated animate__fadeInUp">
                        Transform Your Business with
                        <span className="text-warning d-block">
                          Professional Web Solutions
                        </span>
                      </h1>
                      <p className="lead mb-4 fs-4 animate__animated animate__fadeInUp animate__delay-1s">
                        From stunning designs to powerful functionality - we
                        create websites that drive results, boost your
                        credibility, and grow your business online.
                      </p>

                      <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center mb-5 animate__animated animate__fadeInUp animate__delay-2s">
                        <button className="btn btn-warning btn-lg px-5 py-3 fw-semibold rounded-pill shadow-lg">
                          <i className="bi bi-rocket-takeoff me-2"></i>
                          Start Your Project Today
                        </button>
                        <button className="btn btn-outline-light btn-lg px-5 py-3 fw-semibold rounded-pill">
                          <i className="bi bi-play-circle me-2"></i>
                          View Our Portfolio
                        </button>
                      </div>

                      <div className="row text-center animate__animated animate__fadeInUp animate__delay-3s">
                        <div className="col-md-3 col-6 mb-3">
                          <div className="bg-white bg-opacity-10 rounded-4 p-3 backdrop-blur">
                            <h3 className="fw-bold text-warning">500+</h3>
                            <p className="mb-0 small">Websites Delivered</p>
                          </div>
                        </div>
                        <div className="col-md-3 col-6 mb-3">
                          <div className="bg-white bg-opacity-10 rounded-4 p-3 backdrop-blur">
                            <h3 className="fw-bold text-warning">98%</h3>
                            <p className="mb-0 small">Client Satisfaction</p>
                          </div>
                        </div>
                        <div className="col-md-3 col-6 mb-3">
                          <div className="bg-white bg-opacity-10 rounded-4 p-3 backdrop-blur">
                            <h3 className="fw-bold text-warning">24/7</h3>
                            <p className="mb-0 small">Support Available</p>
                          </div>
                        </div>
                        <div className="col-md-3 col-6 mb-3">
                          <div className="bg-white bg-opacity-10 rounded-4 p-3 backdrop-blur">
                            <h3 className="fw-bold text-warning">15+</h3>
                            <p className="mb-0 small">Years Experience</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* Floating Elements */}
              <div className="position-absolute top-0 start-0 w-100 h-100 pointer-events-none">
                <div className="floating-element position-absolute top-25 start-25">
                  <i className="bi bi-laptop text-warning fs-1 opacity-75"></i>
                </div>
                <div className="floating-element position-absolute top-75 end-25">
                  <i className="bi bi-phone text-info fs-1 opacity-75"></i>
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="position-absolute bottom-0 start-50 translate-middle-x text-white mb-4">
              <div className="animate-bounce">
                <i className="bi bi-chevron-double-down fs-4"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .floating-element {
          animation: float 3s ease-in-out infinite;
        }

        .backdrop-blur {
          backdrop-filter: blur(10px);
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

        .animate-bounce {
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
};

export default Home;
