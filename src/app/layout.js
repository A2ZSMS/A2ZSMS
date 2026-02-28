"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Script from "next/script";
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

        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '939372612105441');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=939372612105441&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
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
