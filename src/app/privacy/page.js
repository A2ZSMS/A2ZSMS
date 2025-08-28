import React from 'react'
import Privacy from '../Component/TermsPrivacy/Privacy'
 
export const metadata = {
  title: "Best Bulk WhatsApp Messaging & Business Solutions in India",
  description: "Boost your business with the best Bulk WhatsApp Messaging Services in India. Get seamless communication, marketing, and automation for your business growth.",
  keywords: "Bulk WhatsApp Messaging Services India, WhatsApp marketing solutions, Business WhatsApp automation, Best WhatsApp bulk messaging provider, WhatsApp Business services",
  authors: [{ name: "A2ZSMS", url: "https://www.a2zsms.in/privacy/" }],
  openGraph: {
    title: "Best Bulk WhatsApp Messaging & Business Solutions in India",
    description: "Boost your business with the best Bulk WhatsApp Messaging Services in India. Get seamless communication, marketing, and automation for your business growth.",
    url: "https://www.a2zsms.in/privacy/",
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
    title: "Best Bulk WhatsApp Messaging & Business Solutions in India",
    description: "Boost your business with the best Bulk WhatsApp Messaging Services in India. Get seamless communication, marketing, and automation for your business growth.",
    images: ["/images/meta-image.jpg"],
    site: "@yourtwitterhandle",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://www.a2zsms.in/privacy/",
  },
};
 
const page = () => {
  return (
    <>
    <Privacy/>
    </>
  )
}
 
export default page