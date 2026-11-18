import BulkSmsLanding from "../Component/Product/BulkSmsLanding/BulkSmsLanding";

export const metadata = {
  metadataBase: new URL("https://www.a2zsms.in"),
  title: "Bulk SMS Service Provider in India | Panel, API & SMPP | A2ZSMS",
  description:
    "Bulk SMS service provider in India. Send promotional, transactional and OTP SMS through our own panel, API and SMPP. Book a free 10-minute demo.",
  keywords:
    "Bulk SMS Service, Bulk SMS Provider India, Promotional SMS, Transactional SMS, OTP SMS, Bulk SMS API, SMS Marketing, SMS Gateway India, Bulk SMS Bangalore",
  authors: [
    {
      name: "A2ZSMS",
      url: "https://www.a2zsms.in/bulk-sms-service/",
    },
  ],
  openGraph: {
    title: "Bulk SMS Service Provider in India | Panel, API & SMPP | A2ZSMS",
    description:
      "See our SMS platform, discuss your messaging needs and explore panel, API or SMPP connectivity in a free 10-minute guided demo.",
    url: "https://www.a2zsms.in/bulk-sms-service/",
    siteName: "A2ZSMS",
    images: [
      {
        url: "/image/bulk-sms-landing/business-messaging-v2.webp",
        width: 1536,
        height: 1024,
        alt: "Bulk SMS Service by A2ZSMS",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bulk SMS Service - OTP, Promotional & Transactional SMS | A2ZSMS",
    description:
      "Business SMS through our own panel, API or SMPP. Book a free 10-minute guided demo of the A2ZSMS platform.",
    images: ["/image/bulk-sms-landing/business-messaging-v2.webp"],
  },
  robots: "noindex, follow",
  alternates: {
    canonical: "https://www.a2zsms.in/bulk-sms-service/",
  },
  category: "Bulk SMS Service",
  applicationName: "A2ZSMS",
  generator: "Next.js",
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  themeColor: "#087bb9",
};

const page = () => {
  return (
    <div>
      <BulkSmsLanding />
    </div>
  );
};

export default page;
