import React from "react";
import Reviews from "../Product/BulkSms/Reviews";

const ContentHome = ({ data }) => {
  if (!data || !data.content) {
    return <p>No data available</p>; // ✅ Prevents crashes if data is missing
  }

  return (
    <div>
      {data.content.map((item, index) => {
        // console.log("Item ID:", item.id); // ✅ Debugging line
        return (
          <div key={item.id || `content-${index}`} className={item.bg}>
            {" "}
            {/* ✅ Ensuring unique key */}
            <div className="container aos ">
              <div
                className={`row g-0 g-md-5 align-items-center mb-5 aos ${
                  index % 2 === 1 ? "" : "flex-row-reverse"
                }`}
              >
                {/* Text Section */}
                <div
                  className="col-md-6 p-md-5 para-color"
                  data-aos="zoom-in-right"
                >
                  <h2 className="fw-bold mb-4">{item.title}</h2>
                  <ul className="list-unstyled align">
                    {item.description.map((desc, i) => (
                      <li
                        key={`${item.id || `content-${index}`}-desc-${i}`}
                        className="d-flex align-items-start mb-3"
                      >
                        <i className="bi bi-check-circle-fill text-primary me-3"></i>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Button Section */}
                  <div className="my-4">
                    <a
                      href={item.link}
                      className="btn btn-primary px-4 py-2 fw-bold"
                    >
                      Learn More <i className="bi bi-arrow-right ms-2"></i>
                    </a>
                  </div>
                </div>

                {/* Image Section */}
                <div
                  className="col-md-6 text-center py-4"
                  data-aos="zoom-in-left"
                >
                  <img src={item.image} alt={item.title} className="w-100" />
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {/* <Reviews /> */}
    </div>
  );
};

export default ContentHome;
