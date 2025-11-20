import Home from "./Home";
import Details from "./Details";
import Pricing from "./Pricing";
import FAQHome from "../../Resources/Faq/FAQHome";
import { voicecall } from "../../Resources/Faq/FaqData";
import PopupForm from "../PopUp";
import VoiceCallUseCases from "./VoiceCallUseCases";
import VoiceCallFeatures from "./VoiceCallFeatures";

const VoiceCall = () => {
  return (
    <div>
      {/* Hero Section with CTA */}
      <Home />

      {/* Details Section */}
      <Details />

      {/* Voice Call Features */}
      <VoiceCallFeatures />

      {/* Pricing Plans */}
      <Pricing />

      {/* Use Cases by Industry */}
      <VoiceCallUseCases />

      {/* FAQ Section */}
      <FAQHome data={voicecall} />

      {/* Popup Form */}
      <PopupForm />
    </div>
  );
};

export default VoiceCall;
