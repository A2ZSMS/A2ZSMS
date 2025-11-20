"use client";

import { useEffect, useState } from "react";
import CountUp from "react-countup";

const statsData = [
  {
    id: 1,
    number: 7000,
    suffix: "+",
    title: "RCS Enabled Businesses",
    description: "Leading brands using RCS",
    icon: "bi-building-fill",
    color: "#17A2B8",
  },
  {
    id: 2,
    number: 2,
    suffix: "B+",
    title: "RCS Users Worldwide",
    description: "Global reach and growing",
    icon: "bi-globe2",
    color: "#6C63FF",
  },
  {
    id: 3,
    number: 35,
    suffix: "%",
    title: "Higher Engagement",
    description: "vs traditional SMS",
    icon: "bi-graph-up-arrow",
    color: "#28A745",
  },
  {
    id: 4,
    number: 10,
    suffix: "MB",
    title: "Media File Size",
    description: "High-quality content support",
    icon: "bi-file-earmark-image",
    color: "#FD7E14",
  },
  {
    id: 5,
    number: 98,
    suffix: "%",
    title: "Delivery Rate",
    description: "Reliable message delivery",
    icon: "bi-check-circle-fill",
    color: "#DC3545",
  },
  {
    id: 6,
    number: 24,
    suffix: "/7",
    title: "Expert Support",
    description: "Always here to help",
    icon: "bi-headset",
    color: "#20C997",
  },
];

const RcsStats = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("rcs-stats-section");
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
    <section id="rcs-stats-section" className="py-5 bg-white">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold head1" style={{ color: "#203239" }}>
            RCS Messaging by the Numbers
          </h2>
          <p className="text-muted para-blog mt-3">
            Join the future of business messaging with proven results
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

export default RcsStats;
