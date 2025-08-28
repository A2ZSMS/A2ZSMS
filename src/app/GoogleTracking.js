"use client";
import { useEffect } from "react";
import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = "G-9EGHVP6W24"; 
const GTM_ID = "GTM-T7GKQJ8F"; 

const GoogleTracking = () => {
  useEffect(() => {
    // Initialize Google Analytics (GA4) Once
    if (typeof window !== "undefined" && !window.gaInitialized) {
      ReactGA.initialize(GA_MEASUREMENT_ID);
      ReactGA.send("pageview");
      window.gaInitialized = true;
    }

    // Inject Google Tag Manager (GTM) Script Dynamically
    if (typeof window !== "undefined" && !window.gtmScriptAdded) {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
      document.head.appendChild(script);

      window.gtmScriptAdded = true; // Prevent duplicate script loading
    }
  }, []);

  return (
    <>
      {/* GTM NoScript for Non-JS Users */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
          title="Google Tag Manager"
        ></iframe>
      </noscript>
    </>
  );
};

export default GoogleTracking;
