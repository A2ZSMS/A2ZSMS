"use client";

import styles from "./Chatbot.module.css";

const stats = [
  { value: "2.8 Bn+", label: "Active Users" },
  { value: "180+", label: "Countries" },
  { value: "60+", label: "Languages" },
];

const StatsSection = () => {
  return (
    <section className={styles.sectionAlt}>
      <div className="container aos">
        <div className={styles.statsWrap} data-aos="fade-up">
          <div className="row align-items-center gy-3">
            <div className="col-lg-7">
              <div className={styles.statsGrid}>
                {stats.map((stat) => (
                  <div key={stat.label} className={styles.statCard}>
                    <div className={styles.statValue}>{stat.value}</div>
                    <div className={styles.statLabel}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-5">
              <p className={styles.statsText}>
                Reach customers at scale and save time and cost.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
