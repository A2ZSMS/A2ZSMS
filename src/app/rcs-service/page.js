import React from 'react'
import RcsSms from '../Component/Product/Rcs/RcsSms'

export const metadata = {
  title: 'rcs business messaging |Best RCS messaging provider in India ',
  description: 'A2zsms offers expert rcs business messaging, Best RCS messaging provider in India, RCS Messaging Services,RCS Service Provider in Hyderabad.',
  keywords: "Bulk SMS Service Provider Bangalore, Try Free SMS Now, Best SMS marketing services, WhatsApp bulk messaging service providers Bangalore",
  authors: [{ name: "A2ZSMS", url: "https://www.a2zsms.in/rcs-service/" }],
  openGraph: {
    title: "Bulk SMS Service Provider Bangalore - Bulk SMS Providers In Bangalore | The Best Of The Best - RCS Technology in Bangalore",
    description: 'A2zsms offers expert rcs business messaging, Best RCS messaging provider in India, RCS Messaging Services,RCS Service Provider in Hyderabad.',
    url: "https://www.a2zsms.in/rcs-service/",
    siteName: "A2ZSMS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bulk SMS Service Provider Bangalore - Bulk SMS Providers In Bangalore | The Best Of The Best - RCS Technology in Bangalore",
    description: 'A2zsms offers expert rcs business messaging, Best RCS messaging provider in India, RCS Messaging Services,RCS Service Provider in Hyderabad.',
    images: ["/images/meta-image.jpg"],
    site: "@yourtwitterhandle",
  },
  robots: "index, follow",
  
  alternates: {
    canonical: "https://www.a2zsms.in/rcs-service/",
  },
};

const page = () => {
  return (
    <div>
        <RcsSms/>
    </div>
  )
}

export default page