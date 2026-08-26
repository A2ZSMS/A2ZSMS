import React from "react";

const trustData = [
  { icon: "bi-whatsapp", bg: "#25D366", num: "Official", label: "Meta Business Partner" },
  { icon: "bi-people-fill", bg: "#097bdf", num: "10,000+", label: "Active Businesses" },
  // { icon: "bi-envelope-check", bg: "#43cea2", num: "50M+", label: "Messages Delivered" },
  { icon: "bi-shield-check", bg: "#065a9c", num: "99.9%", label: "Uptime Guaranteed" },
];

const TrustStrip = () => {
  return (
    <div className="trust-strip">
      <div className="container">
        <div className="row justify-content-center aos">
          {trustData.map((item, i) => (
            <div className="col-6 col-md-3 mb-3 mb-md-0" key={i}>
              <div className="trust-item">
                <div className="trust-icon" style={{ background: `${item.bg}15`, color: item.bg }}>
                  <i className={`bi ${item.icon}`}></i>
                </div>
                <div>
                  <div className="trust-num">{item.num}</div>
                  <div className="trust-label">{item.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustStrip;
