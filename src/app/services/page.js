import React from 'react'
import Service from '../Component/Resources/Services/Service'
export const metadata = {
  title: "Top Bulk WhatsApp Messaging & Communication Services in Bangalore",
  description: "Get comprehensive messaging & communication services with WhatsApp API solutions for businesses in Bangalore to enhance seamless marketing & engagement.",
  keywords: "Top Bulk WhatsApp Messaging Services in Bangalore, Best WhatsApp marketing services in Bangalore, SMS marketing, WhatsApp bulk messaging service providers Bangalore, Comprehensive Messaging & Communication Services",
  authors: [{ name: "A2ZSMS", url: "https://www.a2zsms.in/services/" }],
  openGraph: {
    title: "Top Bulk WhatsApp Messaging & Communication Services in Bangalore",
    description: "Get comprehensive messaging & communication services with WhatsApp API solutions for businesses in Bangalore to enhance seamless marketing & engagement.",
    url: "https://www.a2zsms.in/services/",
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
    title: "Top Bulk WhatsApp Messaging & Communication Services in Bangalore",
    description: "Get comprehensive messaging & communication services with WhatsApp API solutions for businesses in Bangalore to enhance seamless marketing & engagement.",
    images: ["/images/meta-image.jpg"],
    site: "@yourtwitterhandle",
  },
  robots: "index, follow",
  
  alternates: {
    canonical: "https://www.a2zsms.in/services/",
  },
};

const page = () => {
  return (
    <div>
        <Service/>
    </div>
  )
}

export default page