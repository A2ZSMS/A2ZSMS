import React from "react";
import BulkSms from "../Component/Product/BulkSms/BulkSms";

export const metadata = {
  title: "Best Bulk SMS Service Provider in Bangalore | India",
  description:
    "Top Bulk SMS service provider in Bangalore, India. Reliable business SMS solutions for OTP, promotional, transactional, and marketing campaigns.",
  keywords:
    "Best Bulk SMS Service Provider Bangalore, Bulk SMS Services India, OTP SMS Bangalore, Promotional SMS Provider Bangalore, Transactional SMS Services India, Business SMS Bangalore",
  authors: [
    { name: "SMS Services Team", url: "https://www.a2zsms.in/bulk-sms/" },
  ],
  openGraph: {
    title: "Best Bulk SMS Service Provider in Bangalore | India",
    description:
      "Looking for the best Bulk SMS service provider in Bangalore, India? Get reliable OTP, promotional, transactional, and marketing SMS solutions.",
    url: "https://www.a2zsms.in/bulk-sms/",
    siteName: "Bulk SMS Services",
    images: [
      {
        url: "/images/oct.png",
        width: 1200,
        height: 630,
        alt: "Best Bulk SMS Service Provider in Bangalore | India",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Bulk SMS Service Provider in Bangalore | India",
    description:
      "Top Bulk SMS provider in Bangalore, India. Services include OTP, promotional, transactional, and business SMS campaigns.",
    images: ["/images/oct.png"],
    site: "@yourtwitterhandle",
  },
  robots:
    "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  alternates: {
    canonical: "https://www.a2zsms.in/bulk-sms/",
  },
};

const page = () => {
  return (
    <div>
      <BulkSms />
    </div>
  );
};

export default page;
