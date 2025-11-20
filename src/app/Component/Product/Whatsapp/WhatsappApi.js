import Home from "./Home";
import ComparisonTable from "./ComparisonTable";
import WhatsappPricing from "./WhatsappPricing";
import StepsSection from "./StepsSection";
import Features from "./Features";
import FAQHome from "../../Resources/Faq/FAQHome";
import { Whatsapp } from "../../Resources/Faq/FaqData";
import PopupForm from "../PopUp";
import UseCases from "./UseCases";
import VideoDemo from "./VideoDemo";
import IntegrationShowcase from "./IntegrationShowcase";

const WhatsappApi = () => {
  return (
    <div>
      {/* Hero Section with CTAs */}
      <Home />

      <ComparisonTable />

      {/* Video Demo Section */}
      {/* <VideoDemo /> */}

      {/* How It Works Steps */}
      <StepsSection />

      {/* Pricing Plans */}
      <WhatsappPricing />

      {/* Use Cases by Industry */}
      <UseCases />

      {/* Integration Showcase */}
      <IntegrationShowcase />

      {/* Features Section */}
      <Features />

      {/* FAQ Section */}
      <FAQHome data={Whatsapp} />

      {/* Popup Form */}
      <PopupForm />
    </div>
  );
};

export default WhatsappApi;
