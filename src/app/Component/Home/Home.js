import React from "react";
import Video from "./Video";
import Aboutus from "./Aboutus";
// import Trustedbrand from "./Trustedbrand";
import SocialMedia from "../Product/Whatsapp/SocialMedia";
import Testimonials from "../Company/Carrer/Testimonials";
import { Contents } from "./Contents";
import ContentHome from "./Content";
import FAQHome from "../Resources/Faq/FAQHome";
import { Whatsapp } from "../Resources/Faq/FaqData";
import Industries from "../Product/BulkSms/Industries";
import PopupForm from "../Product/PopUp";
// import Reviews from "../Product/BulkSms/Reviews";

const Home = () => {
  return (
    <>
      {/* Home Page Components */}
      <Video />
      <Aboutus />
      {/* <Trustedbrand /> */}
      <Industries />

      <ContentHome data={Contents} />
      <SocialMedia />
      <PopupForm />
      {/* <Reviews /> */}
      <Testimonials />
      <FAQHome data={Whatsapp} />
    </>
  );
};

export default Home;
