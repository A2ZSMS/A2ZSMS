import React from "react";
import VoiceCall from "../Component/Product/VoiceCall/VoiceCall";
export const metadata = {
  title: "Best Bulk Voice Call Service Provider in Bangalore | India",
  description:
    "Top Bulk Voice Call service provider in Bangalore, India. Reliable promotional, transactional, and business voice call solutions for enterprises and marketing campaigns.",
  keywords:
    "Best Bulk Voice Call Service Provider Bangalore, Bulk Voice Call Services India, Promotional Voice Calls Bangalore, Transactional Voice Call Provider Bangalore, Business Voice Call Services India",
  authors: [
    { name: "Voice Services Team", url: "https://www.a2zsms.in/voice-call/" },
  ],
  openGraph: {
    title: "Best Bulk Voice Call Service Provider in Bangalore | India",
    description:
      "Looking for the best Bulk Voice Call service provider in Bangalore, India? Get reliable promotional, transactional, and business voice call solutions.",
    url: "https://www.a2zsms.in/voice-call/",
    siteName: "Bulk Voice Call Services",
    images: [
      {
        url: "/images/3.png",
        width: 1200,
        height: 630,
        alt: "Best Bulk Voice Call Service Provider in Bangalore | India",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Bulk Voice Call Service Provider in Bangalore | India",
    description:
      "Top Bulk Voice Call provider in Bangalore, India. Services include promotional, transactional, and business voice calls for enterprises and marketing campaigns.",
    images: ["/images/3.png"],
    site: "@yourtwitterhandle",
  },
  robots:
    "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  alternates: {
    canonical: "https://www.a2zsms.in/voice-call/",
  },
};

const page = () => {
  return (
    <div>
      <VoiceCall />
    </div>
  );
};

export default page;
