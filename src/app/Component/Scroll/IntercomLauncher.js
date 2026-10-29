"use client";

import { useEffect, useState } from "react";

const INTERCOM_APP_ID = "a5mrjdl9";

// Lightweight stand-in for the Intercom launcher. The real Intercom widget (~150KB JS
// and ~1s of main-thread work on mobile) is only downloaded when a visitor clicks this
// button; it then opens the messenger and Intercom's own launcher takes over.
// Same position and colour as the Intercom launcher settings (#0071b2, right, 20px).
export default function IntercomLauncher() {
  const [state, setState] = useState("idle"); // idle | loading | done

  useEffect(() => {
    window.intercomSettings = {
      api_base: "https://api-iam.intercom.io",
      app_id: INTERCOM_APP_ID,
    };
  }, []);

  const openChat = () => {
    if (state !== "idle") return;
    setState("loading");
    const w = window;
    if (typeof w.Intercom !== "function") {
      // Standard Intercom queue stub: calls made before the script loads are replayed
      const i = function () {
        i.c(arguments);
      };
      i.q = [];
      i.c = function (args) {
        i.q.push(args);
      };
      w.Intercom = i;
    }
    w.Intercom("boot", w.intercomSettings);
    w.Intercom("show");

    const s = document.createElement("script");
    s.async = true;
    s.src = `https://widget.intercom.io/widget/${INTERCOM_APP_ID}`;
    // Hand over to Intercom's own launcher once it has rendered
    s.onload = () => setTimeout(() => setState("done"), 1500);
    s.onerror = () => setState("idle");
    document.head.appendChild(s);
  };

  if (state === "done") return null;

  return (
    <button
      type="button"
      onClick={openChat}
      aria-label="Open chat"
      title="Chat with us"
      style={{
        position: "fixed",
        right: 20,
        bottom: 20,
        width: 48,
        height: 48,
        borderRadius: "50%",
        border: "none",
        padding: 0,
        background: "#0071b2",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 1px 6px rgba(0,0,0,0.06), 0 2px 32px rgba(0,0,0,0.16)",
        cursor: "pointer",
        zIndex: 2147483000,
      }}
    >
      {state === "loading" ? (
        <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
      ) : (
        <svg width="24" height="24" viewBox="0 0 28 32" fill="currentColor" aria-hidden="true">
          <path d="M28 32s-4.714-1.855-8.527-3.34H3.437C1.54 28.66 0 27.026 0 25.013V3.644C0 1.633 1.54 0 3.437 0h21.125c1.898 0 3.437 1.632 3.437 3.645v18.404H28V32zm-4.139-11.982a.88.88 0 00-1.292-.105c-.03.026-3.015 2.681-8.57 2.681-5.486 0-8.517-2.636-8.571-2.684a.88.88 0 00-1.29.107 1.01 1.01 0 00-.219.708.992.992 0 00.318.664c.142.128 3.537 3.15 9.762 3.15 6.226 0 9.621-3.022 9.763-3.15a.992.992 0 00.317-.664 1.01 1.01 0 00-.218-.707z" />
        </svg>
      )}
    </button>
  );
}
