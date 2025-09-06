import React from "react";
import Video from "./Video";
import Aboutus from "./Aboutus";
import Trustedbrand from "./Trustedbrand";
import SocialMedia from "../Product/Whatsapp/SocialMedia";
import Testimonials from "../Company/Carrer/Testimonials";
import { Contents } from "./Contents";
import ContentHome from "./Content";
import FAQHome from "../Resources/Faq/FAQHome";
import { Whatsapp } from "../Resources/Faq/FaqData";
import Industries from "../Product/BulkSms/Industries";
import Reviews from "../Product/BulkSms/Reviews";

const Home = () => {
  return (
    <>
      {/* Home Page Components */}
      <Video />
      <Aboutus />
      <Trustedbrand />
      <ContentHome data={Contents} />
      <SocialMedia />
      <Industries />
      <Reviews />
      <Testimonials />
      <FAQHome data={Whatsapp} />
    </>
  );
};

export default Home;
