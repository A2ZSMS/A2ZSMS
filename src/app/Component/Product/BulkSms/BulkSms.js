"use client";
import Services from "./Services";
// import PricingTabs from "./Pricing";
import Reviews from "./Reviews";
import BulkSmsHome from "./BulkSmsHome";
import Industries from "./Industries";
import Features from "./Features";
import FAQHome from "../../Resources/Faq/FAQHome";
import { bulkSmsData } from "../../Resources/Faq/FaqData";
import PopupForm from "../PopUp";
import BulkSmsUseCases from "./BulkSmsUseCases";

const BulkSms = () => {
  return (
    <div>
      {/* Hero Section - Keep existing Services component */}
      <Services />

      {/* Content Sections - Keep existing BulkSmsHome */}
      <BulkSmsHome />

      {/* Pricing - Conversion Section */}
      {/* <PricingTabs /> */}

      {/* Use Cases - Industry Solutions */}
      <BulkSmsUseCases />

      {/* Industries - Sector-specific Solutions */}
      <Industries />

      {/* Features - Core Benefits */}
      <Features />

      {/* Testimonials - Social Proof */}
      <Reviews />

      {/* FAQ - Address Concerns */}
      <FAQHome data={bulkSmsData} />

      {/* Popup Form - Lead Generation */}
      <PopupForm />
    </div>
  );
};

export default BulkSms;
