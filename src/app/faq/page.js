import React from 'react'
import Faq from '../Component/Resources/Faq/Faq'
export const metadata = {
  title: "Top Bulk WhatsApp Messaging & FAQ | Best Services in Bangalore",
  description: "Get WhatsApp API solutions for businesses in Bangalore, top bulk messaging services, and answers to frequently asked questions (FAQ) for seamless communication.",
  keywords: "Top Bulk WhatsApp Messaging Services in Bangalore, Best WhatsApp marketing services in Bangalore, SMS marketing, WhatsApp bulk messaging service providers Bangalore, Frequently Asked Questions (FAQ)",
  authors: [{ name: "A2ZSMS", url: "https://www.a2zsms.in/faq/" }],
  openGraph: {
    title: "Top Bulk WhatsApp Messaging & FAQ | Best Services in Bangalore",
    description: "Get WhatsApp API solutions for businesses in Bangalore, top bulk messaging services, and answers to frequently asked questions (FAQ) for seamless communication.",
    url: "https://www.a2zsms.in/faq/",
    siteName: "A2ZSMS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Bulk WhatsApp Messaging & FAQ | Best Services in Bangalore",
    description: "Get WhatsApp API solutions for businesses in Bangalore, top bulk messaging services, and answers to frequently asked questions (FAQ) for seamless communication.",
    images: ["/images/meta-image.jpg"],
    site: "@yourtwitterhandle",
  },
  robots: "index, follow",
  
  alternates: {
    canonical: "https://www.a2zsms.in/faq/",
  },
};

const page = () => {
  return (
    <div>
        <Faq/>
    </div>
  )
}

export default page