import React from 'react';
import Carrer from '../Component/Company/Carrer/Carrer';

export const metadata = {
  metadataBase: new URL("https://www.a2zsms.in"),
  title: "Careers at A2ZSMS – Join Our Team for Growth in Bangalore",
  description: "Explore careers at A2ZSMS and join our team for growth. We offer exciting opportunities to excel in the Bulk SMS & WhatsApp API industry in Bangalore.",
  keywords: "Careers at A2ZSMS, Join Our Team for Growth, job opportunities, WhatsApp API careers, Bulk SMS jobs in Bangalore",
  authors: [{ name: "A2ZSMS", url: "https://www.a2zsms.in/career/" }],
  openGraph: {
    images: ["/Images/meta-image.jpg"],
    title: "Careers at A2ZSMS – Join Our Team for Growth in Bangalore",
    description: "Explore careers at A2ZSMS and join our team for growth. We offer exciting opportunities to excel in the Bulk SMS & WhatsApp API industry in Bangalore.",
    url: "https://www.a2zsms.in/career/",
    siteName: "A2ZSMS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at A2ZSMS – Join Our Team for Growth in Bangalore",
    description: "Explore careers at A2ZSMS and join our team for growth. We offer exciting opportunities to excel in the Bulk SMS & WhatsApp API industry in Bangalore.",
    images: ["/Images/meta-image.jpg"],

  },
  robots: "index, follow",
  alternates: {
    canonical: "https://www.a2zsms.in/career/",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

const Page = () => {
  return (
    <div>
      <Carrer />
    </div>
  );
};

export default Page;
