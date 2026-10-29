"use client";
import { useEffect } from "react";

// Google Ads (AW-17957140915) and its conversion tags are loaded by the GTM container,
// so the separate direct gtag.js load for Ads was removed (duplicate script).
// GA4 is NOT in the GTM container, so it is loaded once here. It used to go through
// react-ga4, whose initialize() + send("pageview") recorded every page view twice.
const GA_MEASUREMENT_ID = "G-9EGHVP6W24";
const GTM_ID = "GTM-WW8X2SDK";

const GoogleTracking = () => {
  useEffect(() => {
    // Initialize dataLayer once (shared by GTM and Google Ads)
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      // gtag() is still used by gtag_report_conversion() in the lead forms. The
      // Google tag that GTM loads processes these dataLayer commands.
      if (!window.gtag) {
        window.gtag = function () {
          window.dataLayer.push(arguments);
        };
      }
    }

    // Google Analytics 4: one config = one page_view per page load
    if (typeof window !== "undefined" && !window.gaInitialized) {
      window.gtag("js", new Date());
      window.gtag("config", GA_MEASUREMENT_ID);

      const gaScript = document.createElement("script");
      gaScript.async = true;
      gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(gaScript);

      window.gaInitialized = true;
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
