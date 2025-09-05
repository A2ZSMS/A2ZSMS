import React from "react";
import Video from "./Video";
import Aboutus from "./Aboutus";
import Trustedbrand from "./Trustedbrand";
import SocialMedia from "../Product/Whatsapp/SocialMedia";
import Achievements from "../Resources/Services/Achievements";
import Testimonials from "../Company/Carrer/Testimonials";
import { Contents } from "./Contents";
import ContentHome from "./Content";

const Home = () => {
  return (
    <>
      {/* Home Page Components */}
      <Video />
      <Aboutus />
      <Trustedbrand />
      <ContentHome data={Contents} />
      <SocialMedia />
      <Testimonials />
    </>
  );
};

export default Home;
