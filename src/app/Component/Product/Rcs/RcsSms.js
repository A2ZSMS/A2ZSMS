import React from "react";
import Homercs from "./Homercs";
import ComparisonTable from "./ComparisonTable";
// import Client from '../Whatsapp/Clients'
import RcsMessagingSection from "./RcsMessagingSection";
import SocialMedia from "../Whatsapp/SocialMedia";
import FAQHome from "../../Resources/Faq/FAQHome";
import { RcsData } from "../../Resources/Faq/FaqData";
import Trustedbrand from "../../Home/Trustedbrand";
import PopupForm from "../PopUp";

const RcsSms = () => {
  return (
    <div>
      <Homercs />
      <ComparisonTable />
      {/* <Client/> */}
      <PopupForm />
      <Trustedbrand />
      <RcsMessagingSection />
      <SocialMedia />
      <FAQHome data={RcsData} />
    </div>
  );
};

export default RcsSms;
