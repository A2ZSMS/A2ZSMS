import React from 'react'
import RealEstate from '../Component/Solutions/RealEstate/RealEstate'

export const metadata = {
  metadataBase: new URL("https://www.a2zsms.in"),
  title: "WhatsApp Business API for Real Estate Leads | A2ZSMS",
  description: "WhatsApp Business API for Real Estate Leads: capture enquiries, automate follow-ups, share listings, and book site visits faster with A2ZSMS—24/7 securely.",
  keywords: "Instant Lead Generation,WhatsApp Business API for real estate digital marketing,Instant Buyer Engagement",
  authors: [{ name: "A2ZSMS", url: "https://www.a2zsms.in/real-estate/" }],
  openGraph: {
    title: "WhatsApp Business API for Real Estate Leads | A2ZSMS",
    description: "WhatsApp Business API for Real Estate Leads: capture enquiries, automate follow-ups, share listings, and book site visits faster with A2ZSMS—24/7 securely.",
    url: "https://www.a2zsms.in/real-estate/",
    siteName: "A2ZSMS",
    images: [
      {
        url: "/Images/meta-image.jpg",
        width: 1200,
        height: 630,
        alt: "A2ZSMS Bulk WhatsApp Messaging Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp Business API for Real Estate Leads | A2ZSMS",
    description: "WhatsApp Business API for Real Estate Leads: capture enquiries, automate follow-ups, share listings, and book site visits faster with A2ZSMS—24/7 securely.",
    images: ["/Images/meta-image.jpg"],

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