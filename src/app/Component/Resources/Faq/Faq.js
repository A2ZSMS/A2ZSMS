"use client";

import React from 'react'
import FAQHome from './FAQHome';
import { Whatsapp, voicecall,bulkSmsData,RcsData } from "./FaqData";
// FAQPage schema built from the same questions shown on the page
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [Whatsapp, RcsData, voicecall, bulkSmsData]
    .flatMap((d) => d.faqs)
    .map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
};

const Faq = () => {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container pt-5 text-center">
        <h1 className="section-heading">
          Frequently Asked Questions: Bulk SMS, WhatsApp API, RCS &amp; Voice Calls
        </h1>
      </div>
        <FAQHome data={Whatsapp}/>
       <FAQHome data={RcsData}/>
       <FAQHome data={voicecall}/>
       <FAQHome data={bulkSmsData}/>
    </div>
  )
}

export default Faq