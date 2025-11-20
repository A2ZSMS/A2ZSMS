"use client";

import { useEffect, useState } from "react";
import CountUp from "react-countup";

const statsData = [
  {
    id: 1,
    number: 10000,
    suffix: "+",
    title: "Active Clients",
    description: "Businesses sending SMS daily",
    icon: "bi-people-fill",
    color: "#007BFF",
  },
  {
    id: 2,
    number: 100,
    suffix: "M+",
    title: "SMS Delivered",
    description: "Messages sent every month",
    icon: "bi-envelope-fill",
    color: "#28A745",
  },
  {
    id: 3,
    number: 98,
    suffix: "%",
    title: "Delivery Rate",
    description: "Guaranteed SMS delivery",
    icon: "bi-check-circle-fill",
    color: "#FFC107",
  },
  {
    id: 4,
    number: 3,
    suffix: " Sec",
    title: "Average Delivery Time",
    description: "Lightning-fast delivery",
    icon: "bi-lightning-charge-fill",
    color: "#DC3545",
  },
  {
    id: 5,
    number: 24,
    suffix: "/7",
    title: "Support Available",
    description: "Round the clock assistance",
    icon: "bi-headset",
    color: "#6F42C1",
  },
  {
    id: 6,
    number: 99,
    suffix: "%",
    title: "Customer Satisfaction",
    description: "Based on client reviews",
    icon: "bi-emoji-smile-fill",
    color: "#FD7E14",
  },
];

const BulkSmsStats = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("bulksms-stats-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom >= 0;
        if (isInView && !isVisible) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  return (
    <section
      id="bulksms-stats-section"
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #007BFF 0%, #0056b3 100%)",
      }}
    >
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold text-white head1">Leading the SMS Industry</h2>
          <p className="text-white-50 para-blog mt-3">
            Delivering millions of messages with excellence
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
                className="card border-0 shadow-lg h-100 text-center"
                style={{
                  borderRadius: "15px",
                  background: "rgba(255, 255, 255, 0.95)",
                }}
              >
                <div className="card-body p-4">
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

                  <h5 className="fw-bold mb-2" style={{ color: "#203239" }}>
                    {stat.title}
                  </h5>

                  <p className="text-muted small mb-0">{stat.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BulkSmsStats;
