"use client";

import Home from "./Home";
import Features from "./Features";
// import StatsSection from "./StatsSection";
import StepsSection from "./StepsSection";
import AutomationSection from "./AutomationSection";
import UseCases from "./UseCases";
import FAQHome from "../../Resources/Faq/FAQHome";
import { ChatbotFaqData } from "./ChatbotFaqData";
import PopupForm from "../PopUp";
import styles from "./Chatbot.module.css";

const Chatbot = () => {
  return (
    <div className={styles.page}>
      <Home />
      <Features />
      {/* <StatsSection /> */}
      <StepsSection />
      <AutomationSection />
      <UseCases />
      <FAQHome data={ChatbotFaqData} />
      <PopupForm />
    </div>
  );
};

export default Chatbot;
