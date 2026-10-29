"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const AOS_ATTRS = [
  "data-aos",
  "data-aos-delay",
  "data-aos-duration",
  "data-aos-easing",
  "data-aos-offset",
  "data-aos-anchor",
  "data-aos-anchor-placement",
  "data-aos-once",
  "data-aos-mirror",
];

// Lightweight replacement for the AOS library (~1KB instead of ~44KB of JS + CSS).
// It reads the same data-aos="fade-up" / data-aos-delay attributes the components
// already use, so no markup changes are needed. Styles are in globals.css.
// - Nothing is hidden until this runs (html.reveal-on), so content is visible on
//   first paint and to search engines.
// - Elements already on screen are left static, so the hero/LCP is never delayed.
// - Uses IntersectionObserver instead of recalculating positions on every scroll.
function setupReveal() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const root = document.documentElement;
  const vh = window.innerHeight || root.clientHeight;

  const observer =
    !reduceMotion && "IntersectionObserver" in window
      ? new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("aos-in");
                observer.unobserve(entry.target);
              }
            });
          },
          { rootMargin: "0px 0px -60px 0px" }
        )
      : null;

  document.querySelectorAll("[data-aos]").forEach((el) => {
    if (!observer || el.getBoundingClientRect().top < vh) {
      AOS_ATTRS.forEach((attr) => el.removeAttribute(attr));
      return;
    }
    const delay = parseInt(el.getAttribute("data-aos-delay"), 10);
    const duration = parseInt(el.getAttribute("data-aos-duration"), 10);
    if (delay > 0) el.style.setProperty("--aos-delay", `${delay}ms`);
    if (duration > 0) el.style.setProperty("--aos-duration", `${duration}ms`);
    observer.observe(el);
  });

  root.classList.add("reveal-on");
  return () => observer && observer.disconnect();
}

export default function ClientRuntime() {
  const pathname = usePathname();

  // Runs on first load and after every client-side page change
  useEffect(() => setupReveal(), [pathname]);

  useEffect(() => {
    // Bootstrap JS (navbar, offcanvas, dropdowns) loads in parallel
    import("bootstrap/dist/js/bootstrap.bundle.min.js").catch((error) => {
      console.error("Bootstrap JS failed to load:", error);
    });
  }, []);

  return null;
}
