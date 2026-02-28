"use client";
import { useEffect } from "react";
import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = "G-9EGHVP6W24";
const GTM_ID = "GTM-WW8X2SDK";
const GOOGLE_ADS_ID = "AW-17957140915";

const GoogleTracking = () => {
  useEffect(() => {
    // Initialize Google Analytics (GA4) Once
    if (typeof window !== "undefined" && !window.gaInitialized) {
      ReactGA.initialize(GA_MEASUREMENT_ID);
      ReactGA.send("pageview");
      window.gaInitialized = true;
    }

    // Initialize dataLayer once (shared by GTM and Google Ads)
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
    }

    // Inject Google Tag Manager (GTM) Script Dynamically
    if (typeof window !== "undefined" && !window.gtmScriptAdded) {
      window.dataLayer.push({
        "gtm.start": new Date().getTime(),
        event: "gtm.js",
      });

      const gtmScript = document.createElement("script");
      gtmScript.async = true;
      gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;

      // Insert as high in <head> as possible, with fallback
      const firstScript = document.getElementsByTagName("script")[0];
      if (firstScript && firstScript.parentNode) {
        firstScript.parentNode.insertBefore(gtmScript, firstScript);
      } else {
        document.head.appendChild(gtmScript);
      }

      window.gtmScriptAdded = true;
    }

    // Inject Google Ads (gtag.js) Script Dynamically
    if (typeof window !== "undefined" && !window.gadsScriptAdded) {
      // Define gtag function before loading the script
      if (!window.gtag) {
        window.gtag = function () {
          window.dataLayer.push(arguments);
        };
      }
      window.gtag("js", new Date());
      window.gtag("config", GOOGLE_ADS_ID);

      const gtagScript = document.createElement("script");
      gtagScript.async = true;
      gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`;
      document.head.appendChild(gtagScript);

      window.gadsScriptAdded = true;
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

// Google Ads Conversion Tracking Helper
export const gtag_report_conversion = (url) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    var callback = function () {
      if (typeof url !== "undefined") {
        window.location = url;
      }
    };
    window.gtag("event", "conversion", {
      send_to: "AW-17957140915/mZd1CKqrkfsbELPz0PJC",
      event_callback: callback,
    });
    return false;
  }
};

export default GoogleTracking;
