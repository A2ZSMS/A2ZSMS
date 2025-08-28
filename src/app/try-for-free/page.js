import React from 'react'
import TryForFree from '../Component/Forms/TryForFree'
export const metadata = {
  title: "Free SMS, WhatsApp & Voice Calls - Top Bulk Messaging Services",
  description: "Get free SMS, WhatsApp & voice call solutions for businesses in Bangalore. Enhance communication & marketing with top Bulk WhatsApp Messaging Services.",
  keywords: "Free SMS, WhatsApp & Voice Calls, Top Bulk WhatsApp Messaging Services in Bangalore, Best WhatsApp marketing services in Bangalore, SMS marketing, WhatsApp bulk messaging service providers Bangalore",
  authors: [{ name: "A2ZSMS", url: "https://www.a2zsms.in/try-for-free/" }],
  openGraph: {
    title: "Free SMS, WhatsApp & Voice Calls - Top Bulk Messaging Services",
    description: "Get free SMS, WhatsApp & voice call solutions for businesses in Bangalore. Enhance communication & marketing with top Bulk WhatsApp Messaging Services.",
    url: "https://www.a2zsms.in/try-for-free/",
    siteName: "A2ZSMS",
    images: [
      {
        url: "/images/meta-image.jpg",
        width: 1200,
        height: 630,
        alt: "A2ZSMS Bulk WhatsApp Messaging Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free SMS, WhatsApp & Voice Calls - Top Bulk Messaging Services",
    description: "Get free SMS, WhatsApp & voice call solutions for businesses in Bangalore. Enhance communication & marketing with top Bulk WhatsApp Messaging Services.",
    images: ["/images/meta-image.jpg"],
    site: "@yourtwitterhandle",
  },
  robots: "index, follow",
  
  alternates: {
    canonical: "https://www.a2zsms.in/try-for-free/",
  },
};

const page = () => {
  return (
    <div>
        <TryForFree/>
    </div>
  )
}

export default page