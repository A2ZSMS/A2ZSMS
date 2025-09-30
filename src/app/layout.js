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
import Head from "next/head";
import SchemaMarkup from "./Component/schemaMarkup";
import WhatsAppButton from "./Component/Scroll/WhatsappButton";

export default function RootLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js")
      .then(() => console.log("Bootstrap JS loaded successfully."))
      .catch((err) => console.error("Error loading Bootstrap JS:", err));

    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <body>
        <WhatsAppButton />
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
