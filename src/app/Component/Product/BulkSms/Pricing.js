import { useState } from "react";
import Link from "next/link";

const NewPricingPlans = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const pricingPlans = [
    {
      id: "starter",
      name: "Starter Pack",
      description: "Perfect for startups and small businesses",
      monthlyPrice: "₹2500",
      yearlyPrice: "₹25000",
      smsCredits: "5,000 SMS",
      features: [
        "High Delivery Rate",
        "24/7 Support",
        "API Access",
        "Basic Analytics",
        "Standard Templates",
        "Email Support"
      ],
      buttonText: "Get Started",
      popular: false,
      color: "#007BFF",
      bgColor: "#ffffff",
      borderColor: "#007BFF",
      textColor: "#007BFF"
    },
    {
      id: "business",
      name: "Business Pack",
      description: "Ideal for growing businesses",
      monthlyPrice: "₹5000",
      yearlyPrice: "₹50000",
      smsCredits: "15,000 SMS",
      features: [
        "High Delivery Rate",
        "Priority Support",
        "Advanced API Access",
        "Detailed Analytics",
        "Custom Templates",
        "Phone & Email Support",
        "Sender ID Management",
        "Scheduled Messaging"
      ],
      buttonText: "Try Free for 14 Days",
      popular: true,
      color: "#ffffff",
      bgColor: "#007BFF",
      borderColor: "#007BFF",
      textColor: "#ffffff"
    },
    {
      id: "enterprise",
      name: "Enterprise Pack",
      description: "For large organizations with high volume needs",
      monthlyPrice: "₹10000",
      yearlyPrice: "₹100000",
      smsCredits: "50,000 SMS",
      features: [
        "Highest Delivery Rate",
        "24/7 Dedicated Support",
        "Full API Access",
        "Advanced Analytics",
        "Unlimited Templates",
        "Multi-user Access",
        "Dedicated Account Manager",
        "Custom Integrations",
        "SLA Guarantee",
        "White-label Options"
      ],
      buttonText: "Contact Sales",
      popular: false,
      color: "#0056b3",
      bgColor: "#ffffff",
      borderColor: "#0056b3",
      textColor: "#0056b3"
    }
  ];

  const toggleBillingCycle = () => {
    setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly");
  };

  return (
    <div className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="text-dark fw-bold mb-3">Simple, Transparent Pricing</h2>
          <p className="text-muted mb-4">Choose the perfect plan for your business needs</p>
          
          {/* Billing Toggle */}
          <div className="d-flex justify-content-center align-items-center mb-4">
            <span className={`me-3 ${billingCycle === "monthly" ? "fw-bold" : "text-muted"}`}>Monthly</span>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="billingToggle"
                checked={billingCycle === "yearly"}
                onChange={toggleBillingCycle}
                style={{ width: "3rem", height: "1.5rem" }}
              />
              <label className="form-check-label" htmlFor="billingToggle">
                Yearly <span className="badge bg-success ms-2">Save 20%</span>
              </label>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {pricingPlans.map((plan) => (
            <div key={plan.id} className="col-lg-4 col-md-6">
              <div 
                className="card h-100 shadow-sm border-2" 
                style={{ 
                  borderColor: plan.borderColor,
                  backgroundColor: plan.bgColor,
                  transition: 'all 0.3s ease',
                  borderRadius: '15px',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
                }}
              >
                {plan.popular && (
                  <div 
                    className="text-center py-2" 
                    style={{ 
                      backgroundColor: '#ffc107', 
                      color: '#212529', 
                      fontWeight: 'bold' 
                    }}
                  >
                    MOST POPULAR
                  </div>
                )}
                <div className="card-body d-flex flex-column p-4">
                  <h3 
                    className="card-title fw-bold mb-3" 
                    style={{ color: plan.popular ? '#ffffff' : plan.textColor }}
                  >
                    {plan.name}
                  </h3>
                  <p className="text-muted mb-4">{plan.description}</p>
                  
                  <div className="mb-4">
                    <div className="d-flex align-items-baseline mb-1">
                      <span 
                        className="h2 mb-0 fw-bold" 
                        style={{ color: plan.popular ? '#ffffff' : plan.textColor }}
                      >
                        {billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                      </span>
                      <span className="text-muted ms-2">/{billingCycle === "monthly" ? "month" : "year"}</span>
                    </div>
                    <div className="text-muted small">{plan.smsCredits} included</div>
                  </div>
                  
                  <ul className="list-unstyled mb-4 flex-grow-1">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="mb-2 d-flex align-items-center">
                        <i 
                          className="bi bi-check-circle-fill me-2" 
                          style={{ color: plan.popular ? '#ffffff' : '#28a745' }}
                        ></i>
                        <span 
                          style={{ color: plan.popular ? '#ffffff' : '#495057' }}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link href="/request-demo" passHref>
                    <button 
                      className="w-100 py-3 fw-bold border-0" 
                      style={{ 
                        backgroundColor: plan.bgColor,
                        color: plan.popular ? plan.bgColor : plan.textColor,
                        borderColor: plan.borderColor,
                        borderRadius: '30px',
                        transition: 'all 0.3s ease',
                        border: `2px solid ${plan.borderColor}`
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = plan.popular ? plan.textColor : plan.bgColor;
                        e.currentTarget.style.color = plan.popular ? plan.bgColor : plan.textColor;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = plan.bgColor;
                        e.currentTarget.style.color = plan.popular ? plan.bgColor : plan.textColor;
                      }}
                    >
                      {plan.buttonText}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-5">
          <p className="text-muted mb-2">Need a custom plan?</p>
          <Link href="/contact" className="text-decoration-none fw-bold" style={{ color: '#007BFF' }}>
            Contact our sales team <i className="bi bi-arrow-right ms-1"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewPricingPlans;