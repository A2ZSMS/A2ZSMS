"use client";

import { useEffect } from "react";

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

export default function ClientRuntime() {
  useEffect(() => {
    let cancelled = false;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Elements already on screen when JS starts keep their final (visible) state.
    // Without this, AOS would hide the hero/LCP content and fade it in only after
    // hydration, which pushes LCP back by seconds on mobile. aos.css is not in the
    // initial CSS any more, so everything is visible on first paint.
    const vh = window.innerHeight || document.documentElement.clientHeight;
    document.querySelectorAll("[data-aos]").forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (reduceMotion || rect.top < vh) {
        AOS_ATTRS.forEach((attr) => el.removeAttribute(attr));
      }
    });

    if (!reduceMotion) {
      // Below-the-fold elements still animate in as before.
      Promise.all([import("aos/dist/aos.css"), import("aos")])
        .then(([, mod]) => {
          if (cancelled) return;
          const AOS = mod.default || mod;
          AOS.init({ duration: 800, once: true });
        })
        .catch(() => {});
    }

    // Bootstrap JS (navbar, offcanvas, dropdowns) loads in parallel
    import("bootstrap/dist/js/bootstrap.bundle.min.js").catch((error) => {
      console.error("Bootstrap JS failed to load:", error);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
