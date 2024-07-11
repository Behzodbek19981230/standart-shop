import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Connect from "./Connect";
import Features from "./Features";
import Trending from "./Trending ";
import DiscoverItems from "./DiscoverItems";
import TopCreator from "./TopCreator ";
import CTA from "./CTA";
import Footer from "./footer";
import Standarts from "./Standarts";
import Aos from "aos";
import Faqs from "./faq";
import Reviews from "./reviews";
import Contact from "./contact";
import Products from "./Products";
import { Col, Container, Row } from "reactstrap";

const index = () => {
  document.title = " Landing | Standartlar onlayn do'koni";

  window.onscroll = function () {
    scrollFunction();
  };

  const scrollFunction = () => {
    const element = document.getElementById("back-to-top");
    if (element) {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    }
  };

  const toTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  useEffect(() => {
    Aos.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <React.Fragment>
      <div className="layout-wrapper landing bg-light">
        <Navbar />
        <Home />
        <Standarts />
        {/* <Connect /> */}

        <Products />

        <Faqs />
        {/* <Reviews /> */}
        <Contact />
        {/* <DiscoverItems /> */}
        {/* <Features />
                <Trending />
                <DiscoverItems />
                <TopCreator />
                <CTA /> */}
        <Footer />
        <button
          onClick={() => toTop()}
          className="btn btn-danger btn-icon landing-back-top"
          id="back-to-top"
        >
          <i className="ri-arrow-up-line"></i>
        </button>
      </div>
    </React.Fragment>
  );
};

export default index;
