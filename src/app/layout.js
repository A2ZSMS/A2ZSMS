"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import { Jost, Inter, Poppins } from "next/font/google";
import Headerdrop from "./Component/Header/Headerdrop";
import Footer from "./Component/Header/Footer";
import ScrollToTop from "./Component/Scroll/ScrollToTop";
import GoogleTracking from "./GoogleTracking";
import Head from "next/head";
import SchemaMarkup from "./Component/schemaMarkup";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jost",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js")
      .then(() => console.log("Bootstrap JS loaded successfully."))
      .catch((err) => console.error("Error loading Bootstrap JS:", err));

    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });

    // Dynamically Load WhatsApp Script
    const script = document.createElement("script");
    script.src =
      "https://cdn.msgmaker.in/es.chat.min.js?t=b8e8dc1e-6a0b-42ac-883f-a6ee4dc0069f";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <html
      lang="en"
      className={`${jost.variable} ${inter.variable} ${poppins.variable}`}
    >
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <body>
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
