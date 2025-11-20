"use client";

import { useEffect, useState } from "react";
import CountUp from "react-countup";

const statsData = [
  {
    id: 1,
    number: 5000,
    suffix: "+",
    title: "Active Clients",
    description: "Businesses trust our platform",
    icon: "bi-people-fill",
    color: "#FF6B6B",
  },
  {
    id: 2,
    number: 50,
    suffix: "M+",
    title: "Messages Delivered",
    description: "Successfully sent every month",
    icon: "bi-chat-dots-fill",
    color: "#4ECDC4",
  },
  {
    id: 3,
    number: 99.9,
    suffix: "%",
    title: "Uptime Guarantee",
    description: "Reliable service 24/7",
    icon: "bi-shield-check",
    color: "#95E1D3",
  },
  {
    id: 4,
    number: 15,
    suffix: "+",
    title: "Industries Served",
    description: "Across multiple sectors",
    icon: "bi-briefcase-fill",
    color: "#F38181",
  },
  {
    id: 5,
    number: 98,
    suffix: "%",
    title: "Customer Satisfaction",
    description: "Based on client feedback",
    icon: "bi-emoji-smile-fill",
    color: "#AA96DA",
  },
  {
    id: 6,
    number: 24,
    suffix: "/7",
    title: "Support Available",
    description: "Expert assistance anytime",
    icon: "bi-headset",
    color: "#FCBAD3",
  },
];

const StatsCounter = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("stats-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom >= 0;
        if (isInView && !isVisible) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  return (
    <section id="stats-section" className="py-5 bg-white">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold head1" style={{ color: "#203239" }}>
            Leading the Industry in Business Messaging
          </h2>
          <p className="text-muted para-blog mt-3">
            Delivering excellence with proven results
          </p>
        </div>

        <div className="row g-4">
          {statsData.map((stat, index) => (
            <div
              key={stat.id}
              className="col-md-6 col-lg-4"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div
                className="card border-0 shadow h-100 text-center"
                style={{
                  borderRadius: "15px",
                  background: "#ffffff",
                }}
              >
                <div className="card-body p-4">
                  {/* Icon */}
                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: "70px",
                      height: "70px",
                      backgroundColor: stat.color + "20",
                    }}
                  >
                    <i
                      className={`bi ${stat.icon}`}
                      style={{ fontSize: "32px", color: stat.color }}
                    ></i>
                  </div>

                  {/* Counter */}
                  <h2
                    className="fw-bold mb-2"
                    style={{ color: stat.color, fontSize: "2.5rem" }}
                  >
                    {isVisible ? (
                      <CountUp
                        end={stat.number}
                        duration={2.5}
                        decimals={stat.number % 1 !== 0 ? 1 : 0}
                        separator=","
                      />
                    ) : (
                      "0"
                    )}
                    {stat.suffix}
                  </h2>

                  {/* Title */}
                  <h5 className="fw-bold mb-2" style={{ color: "#203239" }}>
                    {stat.title}
                  </h5>

                  {/* Description */}
                  <p className="text-muted small mb-0">{stat.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <div className="row mt-5">
          <div className="col-12">
            <div
              className="card border-0 shadow-lg"
              style={{
                borderRadius: "15px",
                background: "#ffffff",
              }}
            >
              <div className="card-body p-4">
                <div className="row text-center">
                  <div className="col-md-3 col-6 mb-3 mb-md-0">
                    <i
                      className="bi bi-lightning-charge-fill text-warning"
                      style={{ fontSize: "32px" }}
                    ></i>
                    <p
                      className="mb-0 mt-2 fw-bold"
                      style={{ color: "#203239" }}
                    >
                      Instant Setup
                    </p>
                  </div>
                  <div className="col-md-3 col-6 mb-3 mb-md-0">
                    <i
                      className="bi bi-shield-lock-fill text-success"
                      style={{ fontSize: "32px" }}
                    ></i>
                    <p
                      className="mb-0 mt-2 fw-bold"
                      style={{ color: "#203239" }}
                    >
                      Secure & Encrypted
                    </p>
                  </div>
                  <div className="col-md-3 col-6">
                    <i
                      className="bi bi-award-fill text-primary"
                      style={{ fontSize: "32px" }}
                    ></i>
                    <p
                      className="mb-0 mt-2 fw-bold"
                      style={{ color: "#203239" }}
                    >
                      Award Winning
                    </p>
                  </div>
                  <div className="col-md-3 col-6">
                    <i
                      className="bi bi-graph-up-arrow text-info"
                      style={{ fontSize: "32px" }}
                    ></i>
                    <p
                      className="mb-0 mt-2 fw-bold"
                      style={{ color: "#203239" }}
                    >
                      High ROI
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
