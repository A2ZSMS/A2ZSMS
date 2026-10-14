import React from 'react'
import Faq from '../Component/Resources/Faq/Faq'
export const metadata = {
  metadataBase: new URL("https://www.a2zsms.in"),
  title: "Bulk WhatsApp Messaging FAQs | Best Services in Bangalore",
  description: "Bulk WhatsApp messaging FAQs: clear answers on WhatsApp API solutions, bulk SMS and messaging services for businesses in Bangalore, from the A2ZSMS team.",
  keywords: "Top Bulk WhatsApp Messaging Services in Bangalore, Best WhatsApp marketing services in Bangalore, SMS marketing, WhatsApp bulk messaging service providers Bangalore, Frequently Asked Questions (FAQ)",
  authors: [{ name: "A2ZSMS", url: "https://www.a2zsms.in/faq/" }],
  openGraph: {
    images: ["/Images/meta-image.jpg"],
    title: "Bulk WhatsApp Messaging FAQs | Best Services in Bangalore",
    description: "Bulk WhatsApp messaging FAQs: clear answers on WhatsApp API solutions, bulk SMS and messaging services for businesses in Bangalore, from the A2ZSMS team.",
    url: "https://www.a2zsms.in/faq/",
    siteName: "A2ZSMS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bulk WhatsApp Messaging FAQs | Best Services in Bangalore",
    description: "Bulk WhatsApp messaging FAQs: clear answers on WhatsApp API solutions, bulk SMS and messaging services for businesses in Bangalore, from the A2ZSMS team.",
    images: ["/Images/meta-image.jpg"],

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