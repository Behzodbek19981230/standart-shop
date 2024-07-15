import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Navbar />
      <div
        className="layout-wrapper  landing bg-light"
        style={{ paddingTop: 150 }}
      >
        {children}
      </div>
      <Footer />
    </React.Fragment>
  );
}
