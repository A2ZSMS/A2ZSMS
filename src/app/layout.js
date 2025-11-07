"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";

import Headerdrop from "./Component/Header/Headerdrop";
import Footer from "./Component/Header/Footer";
import ScrollToTop from "./Component/Scroll/ScrollToTop";
import GoogleTracking from "./GoogleTracking";
import SchemaMarkup from "./Component/schemaMarkup";
// import WhatsAppButton from "./Component/Scroll/WhatsappButton";

export default function RootLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    // Load Bootstrap JS
    import("bootstrap/dist/js/bootstrap.bundle.min.js")
      .then(() => console.log("Bootstrap JS loaded successfully."))
      .catch((err) => console.error("Error loading Bootstrap JS:", err));

    // Initialize AOS
    AOS.init({
      duration: 800,
      once: true,
    });

    // Dynamically load MsgMaker chat script
    const script = document.createElement("script");
    script.src =
      "https://cdn.msgmaker.in/es.chat.min.js?t=b8e8dc1e-6a0b-42ac-883f-a6ee4dc0069f";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body>
        {/* <WhatsAppButton /> */}
        <GoogleTracking />
        <Headerdrop />
        <ScrollToTop />
        <SchemaMarkup />
        {children}
        <Footer />
      </body>
    </html>
  );
}
