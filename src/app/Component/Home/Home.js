import React from "react";
import Video from "./Video";
import TrustStrip from "./TrustStrip";
import Services from "./Services";
import HowItWorks from "./HowItWorks";
import Aboutus from "./Aboutus";
import Industries from "../Product/BulkSms/Industries";
import { Contents } from "./Contents";
import ContentHome from "./Content";
import SocialMedia from "../Product/Whatsapp/SocialMedia";
import PopupForm from "../Product/PopUp";
import Testimonials from "../Company/Carrer/Testimonials";
import FAQHome from "../Resources/Faq/FAQHome";
import { Whatsapp } from "../Resources/Faq/FaqData";
import CtaBanner from "./CtaBanner";

const Home = () => {
  return (
    <>
      {/* 1. Hero — Outcome-driven headline + product visual */}
      <Video />

      {/* 2. Trust Strip — Meta Partner, stats, credibility */}
      <TrustStrip />

      {/* 3. Services — Clear cards for each product */}
      <Services />

      {/* 4. How It Works — 3 simple steps */}
      <HowItWorks />

      {/* 5. About — Company credibility */}
      <Aboutus />

      {/* 6. Industries We Serve */}
      <Industries />

      {/* 7. Detailed Product Sections */}
      <ContentHome data={Contents} />

      {/* 8. Social Media */}
      <SocialMedia />

      {/* 9. Popup Form */}
      <PopupForm />

      {/* 10. Testimonials */}
      <Testimonials />

      {/* 11. FAQ */}
      <FAQHome data={Whatsapp} />

      {/* 12. CTA Banner — Final conversion push */}
      {/* <CtaBanner /> */}
    </>
  );
};

export default Home;
