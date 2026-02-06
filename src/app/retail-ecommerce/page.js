import React from 'react'
import Retail from '../Component/Solutions/Retail/Retail'
export const metadata = {
  title: "WhatsApp Business Platform for Retail & eCommerce | A2ZSMS",
  description: "WhatsApp Business Platform for Retail & eCommerce: automate order updates, cart recovery, offers, and support to boost conversions and repeat sales 24/7.",
  keywords: "WhatsApp API for Retail,Personalized Retail Promotions,WhatsApp Business API for E-commerce, WhatsApp Business for Retail & E-commerce",
  authors: [{ name: "A2ZSMS", url: "https://www.a2zsms.in/retail-ecommerce/" }],
  openGraph: {
    title: "WhatsApp Business Platform for Retail & eCommerce | A2ZSMS",
    description: "WhatsApp Business Platform for Retail & eCommerce: automate order updates, cart recovery, offers, and support to boost conversions and repeat sales 24/7.",
    url: "https://www.a2zsms.in/retail-ecommerce/",
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
    title: "WhatsApp Business Platform for Retail & eCommerce | A2ZSMS",
    description: "WhatsApp Business Platform for Retail & eCommerce: automate order updates, cart recovery, offers, and support to boost conversions and repeat sales 24/7.",
    images: ["/images/meta-image.jpg"],
    site: "@yourtwitterhandle",
  },
  robots: "index, follow",
  
  alternates: {
    canonical: "https://www.a2zsms.in/retail-ecommerce/",
  },
};

const page = () => {
  return (
    <div>
        <Retail/>
    </div>
  )
}

export default page