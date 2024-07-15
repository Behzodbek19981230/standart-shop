import React from "react";
import Home from "../components/Home";
import Standarts from "../components/Standarts";
import Products from "../components/Products";
import Faqs from "../components/faq";
import Contact from "../components/contact";

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
