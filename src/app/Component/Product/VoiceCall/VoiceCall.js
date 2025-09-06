import React from "react";
import Home from "./Home";
import Details from "./Details";
// import Client from '../Whatsapp/Clients'
import Pricing from "./Pricing";
import SocialMedia from "../Whatsapp/SocialMedia";
import FAQHome from "../../Resources/Faq/FAQHome";
import { voicecall } from "../../Resources/Faq/FaqData";
import Trustedbrand from "../../Home/Trustedbrand";

const VoiceCall = () => {
  return (
    <div>
      <Home />
      <Details />
      {/* <Client/> */}
      <Trustedbrand />
      <Pricing />
      <SocialMedia />
      <FAQHome data={voicecall} />
    </div>
  );
};

export default VoiceCall;
