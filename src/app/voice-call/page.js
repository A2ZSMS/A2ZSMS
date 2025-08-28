import React from 'react'
import VoiceCall from '../Component/Product/VoiceCall/VoiceCall'

export const metadata = {
  title: 'Promotional Voice Service in Bangalore',
  description: 'Get the best Voice Call Services in Bangalore with our Promotional Voice Service in Bangalore, Bulk Voice Calls, and reliable Bulk Voice Call Service Provider in India',
  keywords: "Top Bulk WhatsApp Messaging Services in Bangalore, Best WhatsApp marketing services in Bangalore, SMS marketing, WhatsApp bulk messaging service providers Bangalore, Bulk Voice Call Service Provider in Bangalore",
  authors: [{ name: "A2ZSMS", url: "https://www.a2zsms.in/voice-call/" }],
  openGraph: {
    title: 'Promotional Voice Service in Bangalore',
    description: 'Get the best Voice Call Services in Bangalore with our Promotional Voice Service in Bangalore, Bulk Voice Calls, and reliable Bulk Voice Call Service Provider in India.',
    url: "https://www.a2zsms.in/voice-call/",
    siteName: "A2ZSMS",
    images: [
      {
        url: "/images/meta-image.jpg",
        width: 1200,
        height: 630,
        alt: "A2ZSMS Bulk WhatsApp & Voice Call Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Promotional Voice Service in Bangalore',
    description: 'Get the best Voice Call Services in Bangalore with our Promotional Voice Service in Bangalore, Bulk Voice Calls, and reliable Bulk Voice Call Service Provider in India.',
    images: ["/images/meta-image.jpg"],
    site: "@yourtwitterhandle",
  },
  robots: "index, follow",
  
  alternates: {
    canonical: "https://www.a2zsms.in/voice-call/",
  },
};


const page = () => {
  return (
    <div>
        <VoiceCall/>
    </div>
  )
}

export default page