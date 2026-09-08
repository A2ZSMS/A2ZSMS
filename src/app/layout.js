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

    // Dynamically load MsgMaker chat script (WhatsApp Widget) - Commented out for now
    // const script = document.createElement("script");
    // script.src =
    //   "https://cdn.msgmaker.in/es.chat.min.js?t=b8e8dc1e-6a0b-42ac-883f-a6ee4dc0069f";
    // script.async = true;
    // document.body.appendChild(script);

    // return () => {
    //   document.body.removeChild(script);
    // };
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

        {/* OpenAI Ads Measurement Pixel */}
        <Script id="openai-ads-pixel" strategy="afterInteractive">
          {`
            window.oaiq = window.oaiq || function () {
              (window.oaiq.q = window.oaiq.q || []).push(arguments);
            };
            oaiq("init", { pixelId: "9YNGvhAjh1Y9MHjxeA8EyS" });
          `}
        </Script>
        <Script
          id="openai-ads-sdk"
          src="https://bzrcdn.openai.com/sdk/oaiq.min.js"
          strategy="afterInteractive"
        />
        {/* End OpenAI Ads Measurement Pixel */}

        {/* A2ZSMS Attribution Capture — reads UTM params + AI referrer on first landing
            of the session, stores in sessionStorage for form submissions to read back
            and send to TeleCRM. First-touch: never overwritten within the same session. */}
        <Script id="a2z-attribution" strategy="afterInteractive">
          {`
            (function () {
              try {
                var KEY = 'a2z_attribution';
                if (sessionStorage.getItem(KEY)) return;
                var url = new URL(window.location.href);
                var q = url.searchParams;
                var get = function (k) { return (q.get(k) || '').trim().slice(0, 200); };
                var utm_source   = get('utm_source');
                var utm_medium   = get('utm_medium');
                var utm_campaign = get('utm_campaign');
                var utm_term     = get('utm_term');
                var utm_content  = get('utm_content');
                var gclid        = get('gclid');
                var fbclid       = get('fbclid');
                var msclkid      = get('msclkid');
                var oai          = get('oai_pixel_click_id');
                var aiHosts = {
                  'chat.openai.com': 'chatgpt',
                  'chatgpt.com': 'chatgpt',
                  'perplexity.ai': 'perplexity',
                  'www.perplexity.ai': 'perplexity',
                  'gemini.google.com': 'gemini',
                  'bard.google.com': 'gemini',
                  'claude.ai': 'claude',
                  'copilot.microsoft.com': 'copilot',
                  'you.com': 'you',
                  'phind.com': 'phind'
                };
                var ai_source = '';
                var ref_host = '';
                var ref = document.referrer || '';
                if (ref) {
                  try {
                    ref_host = new URL(ref).hostname.toLowerCase().replace(/^www\\./, '');
                    if (aiHosts[ref_host]) ai_source = aiHosts[ref_host];
                  } catch (_) {}
                }
                // Fallback classifier — used when the visitor arrives with no
                // UTM tag AND we didn't detect an AI host. Turns "organic /
                // social / referral / direct" into a usable utm_source pair
                // so TeleCRM always shows a real attribution row.
                function classifyReferrer(host) {
                  if (!host) return { source: 'direct', medium: 'none' };
                  var searchEngines = ['google', 'bing', 'duckduckgo', 'yahoo', 'yandex', 'baidu', 'ecosia', 'brave', 'startpage'];
                  var socialNets    = {
                    'facebook.com': 'facebook', 'm.facebook.com': 'facebook', 'lm.facebook.com': 'facebook',
                    'instagram.com': 'instagram', 'l.instagram.com': 'instagram',
                    'linkedin.com': 'linkedin', 'lnkd.in': 'linkedin',
                    'twitter.com': 'twitter', 'x.com': 'twitter', 't.co': 'twitter',
                    'youtube.com': 'youtube', 'm.youtube.com': 'youtube', 'youtu.be': 'youtube',
                    'reddit.com': 'reddit', 'out.reddit.com': 'reddit',
                    'quora.com': 'quora',
                    'pinterest.com': 'pinterest',
                    'wa.me': 'whatsapp', 'api.whatsapp.com': 'whatsapp',
                    't.me': 'telegram'
                  };
                  for (var i = 0; i < searchEngines.length; i++) {
                    if (host.indexOf(searchEngines[i]) !== -1) {
                      return { source: searchEngines[i], medium: 'organic' };
                    }
                  }
                  if (socialNets[host]) return { source: socialNets[host], medium: 'social' };
                  return { source: host, medium: 'referral' };
                }
                var fallback = (!utm_source && !ai_source) ? classifyReferrer(ref_host) : null;
                var attribution = {
                  utm_source:   utm_source   || ai_source || (fallback && fallback.source) || '',
                  utm_medium:   utm_medium   || (ai_source ? 'ai' : '') || (fallback && fallback.medium) || '',
                  utm_campaign: utm_campaign || (ai_source ? 'organic_ai' : ''),
                  utm_term:     utm_term,
                  utm_content:  utm_content,
                  gclid:        gclid,
                  fbclid:       fbclid,
                  msclkid:      msclkid,
                  oai_click_id: oai,
                  ai_source:    ai_source,
                  referrer:     ref_host,
                  landing:      location.pathname,
                  ts:           new Date().toISOString()
                };
                sessionStorage.setItem(KEY, JSON.stringify(attribution));
              } catch (_) {}
            })();
          `}
        </Script>
        {/* End A2ZSMS Attribution Capture */}

        {/* Intercom Code */}
        <Script id="intercom-settings" strategy="afterInteractive">
          {`
            window.intercomSettings = {
              api_base: "https://api-iam.intercom.io",
              app_id: "a5mrjdl9"
            };
          `}
        </Script>
        <Script id="intercom-widget" strategy="afterInteractive">
          {`
            (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/a5mrjdl9';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
          `}
        </Script>
        {/* End Intercom Code */}
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
