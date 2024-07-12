import React from "react";
import Home from "./Home";
import Standarts from "./Standarts";
import Products from "./Products";
import Faqs from "./faq";
import Contact from "./contact";

export default function LandingHome() {
  return (
    <div>
      <Home />
      <Standarts />
      <Products />
      <Faqs />
      <Contact />
    </div>
  );
}
