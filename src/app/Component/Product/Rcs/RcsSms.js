import Homercs from "./Homercs";
import ComparisonTable from "./ComparisonTable";
import RcsMessagingSection from "./RcsMessagingSection";
import FAQHome from "../../Resources/Faq/FAQHome";
import { RcsData } from "../../Resources/Faq/FaqData";
import PopupForm from "../PopUp";
import RcsUseCases from "./RcsUseCases";
import RcsFeatures from "./RcsFeatures";
import RcsPricing from "./RcsPricing";

const RcsSms = () => {
  return (
    <div>
      {/* Hero Section with CTA */}
      <Homercs />

      {/* RCS Messaging Details */}
      <RcsMessagingSection />

      {/* RCS Features */}
      <RcsFeatures />

      {/* Pricing */}
      <RcsPricing />

      {/* Comparison Table */}
      <ComparisonTable />

      {/* Use Cases by Industry */}
      <RcsUseCases />

      {/* FAQ Section */}
      <FAQHome data={RcsData} />

      {/* Popup Form */}
      <PopupForm />
    </div>
  );
};

export default RcsSms;
