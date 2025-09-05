import Link from "next/link";
import React from "react";

const Responsivedesign = () => {
  const deviceStats = [
    {
      device: "Mobile",
      percentage: "58.99",
      icon: "bi-phone",
      color: "primary",
    },
    {
      device: "Desktop",
      percentage: "38.35",
      icon: "bi-laptop",
      color: "success",
    },
    {
      device: "Tablet",
      percentage: "2.66",
      icon: "bi-tablet",
      color: "warning",
    },
  ];

  const responsiveFeatures = [
    {
      icon: "bi-phone-vibrate",
      title: "Mobile-First Design",
      description:
        "We start with mobile and scale up, ensuring perfect experiences on the devices your customers use most.",
      stat: "Mobile users convert 3x more with optimized sites",
    },
    {
      icon: "bi-speedometer2",
      title: "Lightning-Fast Performance",
      description:
        "Optimized images, efficient code, and smart caching ensure your site loads instantly on any device or connection.",
      stat: "1 second delay = 7% fewer conversions",
    },
    {
      icon: "bi-search",
      title: "Google-Friendly SEO",
      description:
        "Responsive sites rank higher in search results. Google prioritizes mobile-friendly websites in search rankings.",
      stat: "Mobile-friendly sites get 50% more traffic",
    },
    {
      icon: "bi-arrow-repeat",
      title: "Cross-Browser Compatibility",
      description:
        "Flawless performance across Chrome, Safari, Firefox, Edge, and all modern browsers on every device.",
      stat: "Reduces bounce rate by up to 40%",
    },
  ];

  const maintenanceServices = [
    {
      service: "Security Updates",
      icon: "bi-shield-lock-fill",
      urgency: "Critical",
    },
    {
      service: "Performance Optimization",
      icon: "bi-speedometer",
      urgency: "High",
    },
    {
      service: "Content Management",
      icon: "bi-pencil-square",
      urgency: "Regular",
    },
    {
      service: "Backup & Recovery",
      icon: "bi-cloud-download",
      urgency: "Automated",
    },
    { service: "Bug Fixes", icon: "bi-bug-fill", urgency: "Immediate" },
    {
      service: "Feature Enhancements",
      icon: "bi-plus-circle",
      urgency: "Ongoing",
    },
  ];

  return (
    <section className="py-5 bg-light shadow border-top position-relative">
      <div className="container">
        <div className="row align-items-center mb-5">
          {/* Content Section */}
          <div className="col-lg-6 order-lg-1 order-2">
            <span className="badge bg-info-subtle text-info px-4 py-2 rounded-pill mb-3 fs-6">
              Responsive Excellence
            </span>
            <h2 className="display-5 fw-bold text-dark mb-4">
              Responsive Design &
              <span className="text-primary">
                {" "}
                Maintenance for Peak Performance
              </span>
            </h2>
            <p className="lead text-muted mb-4">
              Your customers use multiple devices throughout their day. A
              responsive website ensures you never lose a potential sale because
              your site doesn't work properly on their phone, tablet, or
              desktop.
            </p>
            <p className="text-muted mb-4">
              Our responsive design approach guarantees flawless functionality
              across all screen sizes, from smartwatches to ultra-wide monitors.
              We test rigorously on real devices to ensure every interaction
              feels natural and intuitive, regardless of how your customers
              access your site.
            </p>

            {/* Device Usage Stats */}
            <div className="bg-white rounded-4 p-4 shadow-sm mb-4">
              <h5 className="fw-bold text-dark mb-3">
                Global Web Traffic by Device
              </h5>
              {deviceStats.map((stat, index) => (
                <div key={index} className="d-flex align-items-center mb-3">
                  <i
                    className={`${stat.icon} text-${stat.color} fs-4 me-3`}
                  ></i>
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                      <span className="fw-semibold text-dark">
                        {stat.device}
                      </span>
                      <span className="fw-bold text-primary">
                        {stat.percentage}%
                      </span>
                    </div>
                    <div className="progress" style={{ height: "8px" }}>
                      <div
                        className={`progress-bar bg-${stat.color}`}
                        style={{ width: `${stat.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="alert alert-warning border-0 shadow-sm">
              <div className="d-flex align-items-center">
                <i className="bi bi-exclamation-triangle-fill text-warning fs-4 me-3"></i>
                <div>
                  <strong>Reality Check:</strong> If your website doesn't work
                  perfectly on mobile, you're losing 6 out of every 10 potential
                  customers before they even see what you offer.
                </div>
              </div>
            </div>
          </div>

          {/* Image Section with Device Mockups */}
          <div className="col-lg-6 order-lg-2 order-1 text-center mb-4 mb-lg-0">
            <div className="position-relative">
              <img
                src="/image/product/web-speed1.jpg"
                alt="Responsive Website Design Across All Devices"
                className="w-100 rounded-4 shadow-lg"
              />
              {/* Device Indicators */}
              <div className="position-absolute top-0 start-0 w-100 h-100">
                <div className="device-indicator position-absolute top-25 start-25">
                  <div className="bg-primary rounded-pill px-3 py-2 text-white shadow">
                    <i className="bi bi-laptop me-2"></i>
                    <small>Desktop Perfect</small>
                  </div>
                </div>
                <div className="device-indicator position-absolute top-50 end-25">
                  <div className="bg-success rounded-pill px-3 py-2 text-white shadow">
                    <i className="bi bi-phone me-2"></i>
                    <small>Mobile Optimized</small>
                  </div>
                </div>
                <div className="device-indicator position-absolute top-100 ">
                  <div className="bg-warning rounded-pill px-3 py-2 text-dark shadow">
                    <i className="bi bi-tablet me-2"></i>
                    <small>Tablet Ready</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Responsive Features */}
        <div className="row g-4 mb-5">
          {responsiveFeatures.map((feature, index) => (
            <div key={index} className="col-lg-6">
              <div className="card border-0 shadow-sm h-100 hover-card bg-white">
                <div className="card-body p-4">
                  <div className="d-flex align-items-start mb-3">
                    <div
                      className="bg-primary-subtle rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{ width: "60px", height: "60px" }}
                    >
                      <i className={`${feature.icon} text-primary fs-3`}></i>
                    </div>
                    <div className="flex-grow-1">
                      <h4 className="fw-bold text-dark mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-muted mb-3">{feature.description}</p>
                      <div className="bg-light rounded-3 p-3">
                        <small className="text-primary fw-semibold">
                          <i className="bi bi-graph-up me-2"></i>
                          Impact: {feature.stat}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Maintenance Services */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="bg-dark rounded-4 p-5 text-white">
              <div className="text-center mb-5">
                <h3 className="fw-bold mb-3">
                  Comprehensive Website Maintenance
                </h3>
                <p className="lead text-light">
                  A website is like a car—it needs regular maintenance to
                  perform at its best. Our maintenance services ensure your
                  digital investment continues delivering results.
                </p>
              </div>

              <div className="row g-3">
                {maintenanceServices.map((service, index) => (
                  <div key={index} className="col-lg-4 col-md-6">
                    <div className="d-flex align-items-center p-3 bg-light bg-opacity-10 rounded-3 hover-maintenance">
                      <i
                        className={`${service.icon} text-warning fs-4 me-3`}
                      ></i>
                      <div className="flex-grow-1">
                        <h6 className="fw-semibold text-white mb-1">
                          {service.service}
                        </h6>
                        <small className="text-light">
                          {service.urgency} Priority
                        </small>
                      </div>
                      <div
                        className="bg-success rounded-circle d-flex align-items-center justify-content-center"
                        style={{ width: "20px", height: "20px" }}
                      >
                        <i className="bi bi-check text-white small"></i>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-4">
                <p className="text-warning fw-semibold mb-3">
                  <i className="bi bi-info-circle me-2"></i>
                  Websites without regular maintenance lose 40% of their traffic
                  within 2 years
                </p>
                <Link
                  href="/contact/"
                  className="btn btn-warning  px-md-5 py-md-3 rounded-pill fw-semibold text-dark"
                >
                  <i className="bi bi-tools me-2"></i>
                  Get Maintenance Plan Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-gradient-tech {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }

        .device-indicator {
          animation: pulse 2s ease-in-out infinite;
        }

        .device-indicator:nth-child(2) {
          animation-delay: 0.5s;
        }

        .device-indicator:nth-child(3) {
          animation-delay: 1s;
        }

        .hover-card {
          transition: all 0.3s ease;
        }

        .hover-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1) !important;
        }

        .hover-maintenance {
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .hover-maintenance:hover {
          background-color: rgba(255, 255, 255, 0.2) !important;
          transform: translateX(5px);
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
      `}</style>
    </section>
  );
};

export default Responsivedesign;
