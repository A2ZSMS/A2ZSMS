import Home from './Component/Home/Home';

export const metadata = {
  title: 'WhatsApp Messaging Services in Bangalore',
  description: 'Get top Bulk WhatsApp Messaging Services in Bangalore & the Best WhatsApp Marketing Service in Hyderabad with our API solutions for seamless business communication.',
  keywords: "Top Bulk WhatsApp Messaging Services in Bangalore, Best WhatsApp marketing services in Bangalore, SMS marketing, WhatsApp bulk messaging service providers Bangalore",
  authors: [{ name: "A2ZSMS", url: "https://www.a2zsms.in" }],
  openGraph: {
    title: 'WhatsApp Messaging Services in Bangalore',
    description: 'Get top Bulk WhatsApp Messaging Services in Bangalore & the Best WhatsApp Marketing Service in Hyderabad with our API solutions for seamless business communication.',
    url: "https://www.a2zsms.in",
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
    title: 'WhatsApp Messaging Services in Bangalore',
    description: 'Get top Bulk WhatsApp Messaging Services in Bangalore & the Best WhatsApp Marketing Service in Hyderabad with our API solutions for seamless business communication.',
    images: ["/images/meta-image.jpg"],
    site: "@yourtwitterhandle",
  },
  robots: "index, follow",
  
  alternates: {
    canonical: "https://www.a2zsms.in",
  },
};


const Page = () => {
  return <Home />;
};

export default Page;
