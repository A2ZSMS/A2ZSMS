"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import { Checkbox } from "antd";
import FormComponent from "./FormComponent";

const TryForFree = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Initialize AOS for animations
    AOS.init({
      duration: 1200, // Animation duration
      once: true, // Animation runs only once
    });
  }, []);

  const onFinish = (values) => {
    console.log("Try For Free Form values:", values);
  };

  return (
    <>
      <div className="bg-light">
        <div className="container py-5 para-color">
          <div className="row aos">
            {/* Left Section */}
            <div className="col-md-6 d-grid" data-aos="fade-right">
              <div className="place-center">
                <h1 className="mb-4">Your Trusted Partner in Success</h1>
                <p>
                  Transform your business communication with innovative solutions
                  designed to engage your audience and drive results. Here's why we're trusted:
                </p>
                <ul className="list-unstyled">
                  {[
                    "Simplify customer engagement with our intuitive WhatsApp Business API.",
                    "Deliver rich, interactive messages with RCS for a superior customer experience.",
                    "Scale your campaigns with our robust and reliable Bulk SMS solutions.",
                    "Create impactful connections using crystal-clear Voice Call services.",
                    "Enhance security with quick, accurate, and secure OTP delivery systems.",
                    "Track success with detailed reporting and actionable insights for growth.",
                    "Personalize your outreach to improve customer satisfaction and retention.",
                    "Enjoy 24/7 expert support to ensure seamless communication operations.",
                  ].map((item, index) => (
                    <li key={index} className="mb-2 pt-2">
                      {/* Render Checkbox only after component mounts to avoid hydration issues */}
                      {isMounted && <Checkbox checked />}
                      <span className="ms-2 pt-3">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3">
                  <strong>Ready to elevate your business?</strong> Experience the
                  power of modern communication with no strings attached. Start now and see the difference!
                </p>
              </div>
            </div>

            {/* Right Section */}
            <div className="col-md-6" data-aos="fade-left">
              <FormComponent
                title="Get Started for Free Today!"
                buttonText="Try Now for Free"
                onFinish={onFinish}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TryForFree;
