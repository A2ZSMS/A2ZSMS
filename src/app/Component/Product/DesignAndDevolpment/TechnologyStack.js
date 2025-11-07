import React from "react";

const TechnologyStack = () => {
  const technologies = [
    {
      category: "Frontend Technologies",
      icon: "bi-palette-fill",
      color: "primary",
      techs: [
        {
          name: "HTML5",
          icon: "bi-filetype-html",
          description:
            "Latest markup standards for semantic, accessible websites",
          level: "Expert",
        },
        {
          name: "CSS3",
          icon: "bi-filetype-css",
          description:
            "Advanced styling with animations and responsive layouts",
          level: "Expert",
        },
        {
          name: "JavaScript",
          icon: "bi-filetype-js",
          description: "Dynamic interactions and modern ES6+ features",
          level: "Expert",
        },
        {
          name: "React.js",
          icon: "bi-filetype-js",
          description: "Component-based architecture for scalable applications",
          level: "Expert",
        },
      ],
    },
    {
      category: "Backend & Database",
      icon: "bi-server",
      color: "success",
      techs: [
        {
          name: "PHP",
          icon: "bi-filetype-php",
          description: "Server-side scripting for dynamic web applications",
          level: "Expert",
        },
        {
          name: "MySQL",
          icon: "bi-database",
          description: "Robust database management for data integrity",
          level: "Expert",
        },
        {
          name: "Node.js",
          icon: "bi-filetype-js",
          description: "JavaScript runtime for high-performance backends",
          level: "Advanced",
        },
        {
          name: "API Development",
          icon: "bi-cloud-arrow-up",
          description: "RESTful APIs for seamless integrations",
          level: "Expert",
        },
      ],
    },
    {
      category: "Frameworks & Tools",
      icon: "bi-tools",
      color: "warning",
      techs: [
        {
          name: "Bootstrap",
          icon: "bi-bootstrap",
          description: "Rapid responsive design with consistent components",
          level: "Expert",
        },
        {
          name: "Next.js",
          icon: "bi-arrow-clockwise",
          description: "Full-stack React framework for production apps",
          level: "Expert",
        },
        {
          name: "WordPress",
          icon: "bi-wordpress",
          description: "Flexible CMS for content-driven websites",
          level: "Expert",
        },
        {
          name: "Git",
          icon: "bi-git",
          description: "Version control for organized development workflow",
          level: "Expert",
        },
      ],
    },
  ];

  const whyChooseOurTech = [
    {
      icon: "bi-award-fill",
      title: "Industry-Standard Excellence",
      description:
        "We use only proven, enterprise-grade technologies that power the world's most successful websites including Netflix, Airbnb, and Facebook.",
    },
    {
      icon: "bi-shield-check",
      title: "Future-Proof Solutions",
      description:
        "Our technology choices ensure your website stays current and compatible with evolving web standards for years to come.",
    },
    {
      icon: "bi-graph-up",
      title: "Performance Guaranteed",
      description:
        "Every technology we implement is chosen for optimal speed, security, and scalability to maximize your business growth.",
    },
    {
      icon: "bi-people-fill",
      title: "Easy Maintenance",
      description:
        "We build with maintainability in mind, ensuring updates and changes can be made quickly without breaking functionality.",
    },
  ];

  return (
    <section className="py-5 pattern-dots position-relative">
      <div className="container aos para-color">
        {/* Header */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center text-black">
            <span className="badge bg-warning text-dark px-4 py-2 rounded-pill mb-3 fs-6">
              Technology Excellence
            </span>
            <h2 className="display-4 fw-bold mb-4">
              Powered by the Most
              <span className="text-warning">Advanced Technologies</span>
            </h2>
            <p className="">
              We don't just follow trends—we use battle-tested technologies that
              have built billion-dollar companies. Your website deserves the
              same foundation that powers industry leaders.
            </p>
          </div>
        </div>

        {/* Technology Categories */}
        {technologies.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-5">
            <div className="row justify-content-center mb-4 aos">
              <div className="col-lg-8 text-center" data-aos="fade-in">
                <div className="d-flex align-items-center justify-content-center mb-3">
                  <div
                    className={`bg-${category.color} rounded-circle d-flex align-items-center justify-content-center me-3`}
                    style={{ width: "50px", height: "50px" }}
                  >
                    <i className={`${category.icon} text-white fs-4`}></i>
                  </div>
                  <h3 className="fw-bold text-black mb-0">
                    {category.category}
                  </h3>
                </div>
              </div>
            </div>

            <div className="row g-4 aos">
              {category.techs.map((tech, techIndex) => (
                <div
                  key={techIndex}
                  className="col-lg-3 col-md-6"
                  data-aos="fade-in"
                >
                  <div className="card border-0 tech-card shadow">
                    <div className="card-body p-4 text-center">
                      <div
                        className={`bg-${category.color}-subtle rounded-circle d-inline-flex align-items-center justify-content-center mb-3`}
                        style={{ width: "60px", height: "60px" }}
                      >
                        <i
                          className={`${tech.icon} text-${category.color} fs-2`}
                        ></i>
                      </div>
                      <h5 className="fw-bold text-dark mb-2">{tech.name}</h5>
                      <span className={`badge bg-${category.color} mb-3`}>
                        {tech.level}
                      </span>
                      <p className="text-dark small mb-0">{tech.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Why Our Tech Choices Matter */}
        <div className="row justify-content-center aos">
          <div className="col-lg-10" data-aos="fade-out">
            <div className="bg-dark rounded-4 p-5 shadow-lg">
              <h3 className="fw-bold text-center text-light mb-5">
                Why Our Technology Choices Drive Your Success
              </h3>
              <div className="row g-4">
                {whyChooseOurTech.map((reason, index) => (
                  <div key={index} className="col-lg-6">
                    <div className="d-flex align-items-start">
                      <div
                        className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                        style={{ width: "50px", height: "50px" }}
                      >
                        <i className={`${reason.icon} text-light fs-4`}></i>
                      </div>
                      <div className="py-3">
                        <h5 className="fw-bold text-light mb-2">
                          {reason.title}
                        </h5>
                        <p className="text-light mb-0">{reason.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
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
        .bg-gradient-tech {
          background: linear-gradient(
            135deg,
            #1a1a2e 0%,
            #16213e 50%,
            #0d4d9cff 100%
          );
        }

        .tech-card {
          transition: all 0.3s ease;
        }

        .tech-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(0, 123, 255, 0.3) !important;
          border-color: #007bff !important;
        }

        .floating-icon {
          animation: float 4s ease-in-out infinite;
        }

        .floating-icon:nth-child(2) {
          animation-delay: 1s;
        }

        .floating-icon:nth-child(3) {
          animation-delay: 2s;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
      `}</style>
    </section>
  );
};

export default TechnologyStack;
