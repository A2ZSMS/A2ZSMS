import React from 'react'
import Travel from '../Component/Solutions/Travel/Travel'

export const metadata = {
  title: "Boost Tours & Travel Business with WhatsApp Solutions",
  description: "Enhance your tours & travel business with WhatsApp API. Automate bookings, share itineraries, send real-time updates & engage customers instantly.",
  keywords: "Automated WhatsApp Messages for Tourism,WhatsApp Marketing for Travel Agencies,Real-Time Travel Updates on WhatsApp,WhatsApp Business API Integration",
  authors: [{ name: "A2ZSMS", url: "https://www.a2zsms.in/tours-travel/" }],
  openGraph: {
    title: "Boost Tours & Travel Business with WhatsApp Solutions",
    description: "Enhance your tours & travel business with WhatsApp API. Automate bookings, share itineraries, send real-time updates & engage customers instantly.",
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
    title: "Boost Tours & Travel Business with WhatsApp Solutions",
    description: "Enhance your tours & travel business with WhatsApp API. Automate bookings, share itineraries, send real-time updates & engage customers instantly.",
    images: ["/images/meta-image.jpg"],
    site: "@yourtwitterhandle",
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