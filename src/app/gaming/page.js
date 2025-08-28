import React from 'react'
import Gaming from '../Component/Solutions/Gaming/Gaming'
export const metadata = {
  title: "Top Bulk WhatsApp Messaging & Business Solutions for Gaming",
  description: "Get WhatsApp Business for Gaming and API solutions in Bangalore for seamless communication, marketing, and bulk messaging services.",
  keywords: "Top Bulk WhatsApp Messaging Services in Bangalore, Best WhatsApp marketing services in Bangalore, SMS marketing, WhatsApp bulk messaging service providers Bangalore, WhatsApp Business for Gaming",
  authors: [{ name: "A2ZSMS", url: "https://www.a2zsms.in/gaming/" }],
  openGraph: {
    title: "Top Bulk WhatsApp Messaging & Business Solutions for Gaming",
    description: "Get WhatsApp Business for Gaming and API solutions in Bangalore for seamless communication, marketing, and bulk messaging services.",
    url: "https://www.a2zsms.in/gaming/",
    siteName: "A2ZSMS",
    images: [
      {
        url: "/images/meta-image.jpg",
        width: 1200,
        height: 630,
        alt: "A2ZSMS Bulk WhatsApp Messaging & Gaming Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Bulk WhatsApp Messaging & Business Solutions for Gaming",
    description: "Get WhatsApp Business for Gaming and API solutions in Bangalore for seamless communication, marketing, and bulk messaging services.",
    images: ["/images/meta-image.jpg"],
    site: "@yourtwitterhandle",
  },
  robots: "index, follow",
  
  alternates: {
    canonical: "https://www.a2zsms.in/gaming/",
  },
};

const page = () => {
  return (
    <div><Gaming/></div>
  )
}

export default page