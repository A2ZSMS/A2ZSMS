"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./Anime.css"; // Reuse your CSS for animations

const WhatsAppButton = () => {
  const phoneNumber = "918431086185"; // Replace with your WhatsApp number
  const message = "Hello, I would like to know more about your services!"; // Default message

  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div
      className="bounce-in-top whatsapp-bottom whatsapp-button"
      onClick={openWhatsApp}
    >
      <FaWhatsapp size={30} />
    </div>
  );
};

export default WhatsAppButton;
