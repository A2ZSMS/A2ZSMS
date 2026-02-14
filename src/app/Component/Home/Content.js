import React from "react";
import "./Home.css";

const ContentHome = ({ data }) => {
  if (!data || !data.content) {
    return <p>No data available</p>;
  }

  return (
    <div>
      {data.content.map((item, index) => {
        const isEven = index % 2 === 0;
        return (
          <div
            key={item.id || `content-${index}`}
            style={{ background: isEven ? "var(--bg-light)" : "#fff" }}
          >
            <div className="container content-section">
              <div
                className={`row g-0 g-md-5 align-items-center aos ${
                  index % 2 === 1 ? "" : "flex-row-reverse"
                }`}
              >
                {/* Text Section */}
                <div className="col-md-6 p-md-4" data-aos="fade-right">
                  <span className="section-label">
                    <i className={`${item.icon} me-1`}></i> {item.title.split(" ")[0]}
                  </span>
                  <h2>{item.title}</h2>
                  <ul className="content-feature-list">
                    {item.description.map((desc, i) => (
                      <li
                        key={`${item.id || `content-${index}`}-desc-${i}`}
                        className="content-feature-item"
                      >
                        <div className="content-check">
                          <i className="bi bi-check2"></i>
                        </div>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="my-4">
                    <a href={item.link} className="content-btn">
                      Learn More <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>

                {/* Image Section */}
                <div className="col-md-6 text-center py-4" data-aos="fade-left">
                  <div className="content-img-wrap">
                    <img src={item.image} alt={item.title} className="w-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContentHome;
