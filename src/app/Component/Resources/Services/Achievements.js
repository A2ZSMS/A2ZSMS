"use client";

import React from "react";
import Image from "next/image";
import CountUp from "react-countup";

const achievements = [
  {
    icon: "/image/icons/1.png",
    value: 10,
    suffix: "+",
    label: "Years In Business",
  },
  {
    icon: "/image/icons/2.png",
    value: 50,
    suffix: "+",
    label: "Team Members",
  },
  {
    icon: "/image/icons/3.png",
    value: 13999,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    icon: "/image/icons/4.png",
    value: 6000,
    suffix: "+",
    label: "Promotional Users",
  },
  {
    icon: "/image/icons/5.png",
    value: 7000,
    suffix: "+",
    label: "Transactional Users",
  },
  {
    icon: "/image/icons/6.png",
    value: 24,
    suffix: "/7",
    label: "Support Available",
  },
];

const Achievements = () => {
  return (
    <section className="svc-achievements">
      <div className="container svc-achievements-inner">
        <div className="text-center mb-5" data-aos="fade-up">
          <span
            className="section-label"
            style={{
              background: "rgba(255,255,255,0.1)",
              borderColor: "rgba(255,255,255,0.2)",
              color: "#fff",
            }}
          >
            Our Numbers
          </span>
          <h2
            style={{
              fontFamily: "EB Garamond, serif",
              fontSize: "40px",
              fontWeight: 700,
              color: "#fff",
              marginBottom: "8px",
            }}
          >
            Our Achievements
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "rgba(255,255,255,0.7)",
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            Numbers that reflect our commitment to excellence and customer
            satisfaction.
          </p>
        </div>

        <div className="row g-4 aos">
          {achievements.map((item, index) => (
            <div
              className="col-6 col-md-4 col-lg-2"
              data-aos="fade-up"
              data-aos-delay={index * 80}
              key={index}
            >
              <div className="svc-stat-card">
                <div className="svc-stat-icon">
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={30}
                    height={30}
                  />
                </div>
                <div className="svc-stat-num">
                  <CountUp
                    start={0}
                    end={item.value}
                    duration={4}
                    suffix={item.suffix}
                  />
                </div>
                <div className="svc-stat-label">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
