import React from 'react'
import Travel from '../Component/Solutions/Travel/Travel'

export const metadata = {
  title: "Best whatsapp business api for travel & tourism",
  description: "Best whatsapp business api for travel & tourism: capture enquiries, automate itineraries and booking updates, send offers, and support customers 24/7 fast.",
  keywords: "Automated WhatsApp Messages for Tourism,WhatsApp Marketing for Travel Agencies,Real-Time Travel Updates on WhatsApp,WhatsApp Business API Integration",
  authors: [{ name: "A2ZSMS", url: "https://www.a2zsms.in/tours-travel/" }],
  openGraph: {
    title: "Best whatsapp business api for travel & tourism",
    description: "Best whatsapp business api for travel & tourism: capture enquiries, automate itineraries and booking updates, send offers, and support customers 24/7 fast.",
    url: "https://www.a2zsms.in/tours-travel/",
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
    title: "Best whatsapp business api for travel & tourism",
    description: "Best whatsapp business api for travel & tourism: capture enquiries, automate itineraries and booking updates, send offers, and support customers 24/7 fast.",
    images: ["/images/meta-image.jpg"],

  },
  robots: "index, follow",
  
  alternates: {
    canonical: "https://www.a2zsms.in/tours-travel/",
  },
};

const page = () => {
  return (
    <div>
        <Travel/>
    </div>
  )
}

export default page