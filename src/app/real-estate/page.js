import React from 'react'
import RealEstate from '../Component/Solutions/RealEstate/RealEstate'

export const metadata = {
  title: "WhatsApp Business Solutions for Real Estate:Engage & Convert Buyers",
  description: "Boost real estate sales with WhatsApp Business. Connect instantly, share property listings, schedule visits, and convert leads faster with seamless communication.",
  keywords: "Instant Lead Generation,WhatsApp Business API for real estate digital marketing,Instant Buyer Engagement",
  authors: [{ name: "A2ZSMS", url: "https://www.a2zsms.in/real-estate/" }],
  openGraph: {
    title: "WhatsApp Business Solutions for Real Estate:Engage & Convert Buyers",
    description: "Boost real estate sales with WhatsApp Business. Connect instantly, share property listings, schedule visits, and convert leads faster with seamless communication.",
    url: "https://www.a2zsms.in/real-estate/",
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
    title: "WhatsApp Business Solutions for Real Estate:Engage & Convert Buyers",
    description: "Boost real estate sales with WhatsApp Business. Connect instantly, share property listings, schedule visits, and convert leads faster with seamless communication.",
    images: ["/images/meta-image.jpg"],
    site: "@yourtwitterhandle",
  },
  robots: "index, follow",
  
  alternates: {
    canonical: "https://www.a2zsms.in/real-estate/",
  },
};


const page = () => {
  return (
    <div>
    <RealEstate/>
    </div>
  )
}

export default page