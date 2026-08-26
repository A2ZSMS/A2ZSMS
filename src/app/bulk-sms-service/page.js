import BulkSmsLanding from "../Component/Product/BulkSmsLanding/BulkSmsLanding";

export const metadata = {
  metadataBase: new URL("https://www.a2zsms.in"),
  title: "Bulk SMS Service - Send SMS to Millions Instantly | A2ZSMS",
  description:
    "India's most trusted Bulk SMS service provider. Send OTP, promotional & transactional SMS with 99.9% delivery rate. DLT compliant, TRAI regulated. Starting at affordable rates.",
  keywords:
    "Bulk SMS Service, Bulk SMS Provider India, Promotional SMS, Transactional SMS, OTP SMS, Bulk SMS API, SMS Marketing, SMS Gateway India, Bulk SMS Bangalore",
  authors: [
    {
      name: "A2ZSMS",
      url: "https://www.a2zsms.in/bulk-sms-service/",
    },
  ],
  openGraph: {
    title: "Bulk SMS Service - Send SMS to Millions Instantly | A2ZSMS",
    description:
      "Send Bulk SMS with 99.9% delivery rate. OTP, promotional & transactional SMS. Trusted by 1000+ businesses across India. DLT compliant & TRAI regulated.",
    url: "https://www.a2zsms.in/bulk-sms-service/",
    siteName: "A2ZSMS",
    images: [
      {
        url: "/images/1.png",
        width: 1200,
        height: 630,
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
      "India's leading Bulk SMS provider. Send millions of SMS instantly with 99.9% delivery rate. DLT compliant, developer-friendly API.",
    images: ["/images/1.png"],
  },
  robots: "index, follow",
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
  themeColor: "#0d6efd",
};

const page = () => {
  return (
    <div>
      <BulkSmsLanding />
    </div>
  );
};

export default page;
