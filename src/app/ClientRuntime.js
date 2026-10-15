"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function ClientRuntime() {
  useEffect(() => {
    // Start AOS immediately: its CSS keeps [data-aos] elements hidden until init runs,
    // so waiting for Bootstrap here would delay visible content (LCP).
    AOS.init({
      duration: 800,
      once: true,
      disable: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });

    // Bootstrap JS (navbar, offcanvas, dropdowns) loads in parallel
    import("bootstrap/dist/js/bootstrap.bundle.min.js").catch((error) => {
      console.error("Bootstrap JS failed to load:", error);
    });
  }, []);

  return null;
}
