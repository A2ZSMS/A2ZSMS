import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

// JSON Data
const tableData = {
  title: "Compare WhatsApp Business Options",
  subtitle:
    "Understand the benefits of WhatsApp Business App vs API for scaling your business.",
  headers: ["Feature", "WhatsApp Business App", "WhatsApp Business API"],
  rows: [
    {
      feature: "Message Automation",
      app: {
        icon: "times",
        color: "red",
        text: "Limited to auto-replies only",
      },
      api: {
        icon: "check",
        color: "green",
        text: "Automate workflows with custom triggers and templates",
      },
    },
    {
      feature: "Scalability",
      app: {
        icon: "times",
        color: "red",
        text: "Restricted to 256 contacts per group",
      },
      api: {
        icon: "check",
        color: "green",
        text: "Unlimited outreach with bulk messaging",
      },
    },
    {
      feature: "Multi-User Support",
      app: {
        icon: "times",
        color: "red",
        text: "Single-device access only",
      },
      api: {
        icon: "check",
        color: "green",
        text: "Allow multiple agents to manage conversations simultaneously",
      },
    },
    {
      feature: "Integrations",
      app: {
        icon: "times",
        color: "red",
        text: "No third-party integrations supported",
      },
      api: {
        icon: "check",
        color: "green",
        text: "Integrates with CRM, ERP, and marketing tools",
      },
    },
    {
      feature: "Performance Insights",
      app: {
        icon: "times",
        color: "red",
        text: "No analytics available",
      },
      api: {
        icon: "check",
        color: "green",
        text: "Track delivery, open rates, and agent performance",
      },
    },
    {
      feature: "Customization",
      app: {
        icon: "times",
        color: "red",
        text: "Basic templates only",
      },
      api: {
        icon: "check",
        color: "green",
        text: "Personalized messages with dynamic fields",
      },
    },
  ],
};

// Component
const ComparisonTable = () => {
  const getIcon = (icon, color) => {
    const iconMap = {
      check: faCheckCircle,
      times: faTimesCircle,
    };

    return (
      <FontAwesomeIcon
        icon={iconMap[icon]}
        className="me-2"
        style={{ fontSize: "1.2rem", color }}
      />
    );
  };

  return (
    <>
      <div className="bg-white">
        <div className="container py-5 aos">
          <h2 className="text-center fw-bold mb-3" style={{ color: "#203239" }}>
            {tableData.title}
          </h2>
          <h4
            className="text-center mb-4"
            style={{ color: "#203239", fontWeight: "400" }}
          >
            {tableData.subtitle}
          </h4>
          <div className="table-responsive aos">
            <table
              className="table table-bordered table-striped align-middle"
              data-aos="fade-in"
            >
              <thead>
                <tr>
                  {tableData.headers.map((header, index) => (
                    <th
                      className="p-3"
                      key={index}
                      style={{
                        backgroundColor: index === 0 ? "#f8f9fa" : "#008060",
                        color: index === 0 ? "#000000" : "#ffffff",
                        fontWeight: "600",
                        fontSize: "1rem",
                      }}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableData.rows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    <td className="p-3">{row.feature}</td>
                    <td>
                      {getIcon(row.app.icon, row.app.color)}
                      {row.app.text}
                    </td>
                    <td>
                      {getIcon(row.api.icon, row.api.color)}
                      {row.api.text}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </>
  );
};

export default ComparisonTable;
