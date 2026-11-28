// Page + ad-click info sent with every lead to the n8n webhook (see leadWebhook.js).
// n8n uses it to put Google Ads leads (gclid, or utm_medium cpc/ppc/paid) in the "Ads"
// tab and every other lead in the "Website" tab of the "Website Leads" Google Sheet.
//
// Values come from the current URL first, then from the first-touch attribution that
// src/app/layout.js saves in sessionStorage ("a2z_attribution"), so an ad visitor who
// moves to another page before filling a form is still counted as an ads lead.
export function getLeadContext(pageId = "") {
  const out = {
    page: pageId,
    page_url: "",
    gclid: "",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
    landing: "",
    referrer: "",
  };
  if (typeof window === "undefined") return out;
  try {
    out.page_url = window.location.pathname;
    if (!out.page) out.page = window.location.pathname;
    const q = new URLSearchParams(window.location.search);
    let saved = {};
    try { saved = JSON.parse(sessionStorage.getItem("a2z_attribution") || "{}") || {}; } catch (_) {}
    const pick = (k) => String(q.get(k) || saved[k] || "").trim().slice(0, 200);
    ["gclid", "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].forEach((k) => {
      out[k] = pick(k);
    });
    out.landing  = String(saved.landing || "").slice(0, 200);
    out.referrer = String(document.referrer || saved.referrer || "").slice(0, 300);
  } catch (_) {}
  return out;
}
