import React, { useState, useEffect } from "react";
import { Collapse, Container, NavbarToggler, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import Scrollspy from "react-scrollspy";

//import Images
import logodark from "../../../assets/images/nft/logo.svg";
import logolight from "../../../assets/images/nft/logo.svg";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import LanguageDropdown from "../../../Components/Common/LanguageDropdown";
import MyCartDropdown from "../../../Components/Common/MyCartDropdown";

const Navbar = () => {
  const [isOpenMenu, setisOpenMenu] = useState(false);
  const [navClass, setnavClass] = useState("");

  const toggle = () => setisOpenMenu(!isOpenMenu);

  useEffect(() => {
    window.addEventListener("scroll", scrollNavigation, true);
  });

  const scrollNavigation = () => {
    var scrollup = document.documentElement.scrollTop;
    if (scrollup > 50) {
      setnavClass("is-sticky");
    } else {
      setnavClass("");
    }
  };
  return (
    <React.Fragment>
      <nav
        className={
          "navbar navbar-expand-lg navbar-landing navbar-light fixed-top " +
          navClass
        }
        id="navbar"
      >
        <Container className="gap-2">
          <Link className="navbar-brand" to="/index">
            <img
              src={logodark}
              className="card-logo card-logo-dark"
              alt="logo dark"
              height="44"
            />
            <img
              src={logolight}
              className="card-logo card-logo-light"
              alt="logo light"
              height="44"
            />
          </Link>

          <NavbarToggler
            className="navbar-toggler py-0 fs-20 text-body"
            onClick={toggle}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="mdi mdi-menu"></i>
          </NavbarToggler>

          <Collapse className="navbar-collapse" id="navbarSupportedContent">
            <Scrollspy
              offset={-18}
              items={[
                "hero",
                "wallet",
                "marketplace",
                "categories",
                "creators",
              ]}
              currentClassName="active"
              className="navbar-nav mx-auto mt-2 mt-lg-0"
              id="navbar-example"
            >
              <li className="nav-item">
                <NavLink href="#hero">Asosiy sahifa</NavLink>
              </li>
              <li className="nav-item">
                <NavLink href="#product">Mahsulotlar</NavLink>
              </li>
              <li className="nav-item">
                <NavLink href="#publications">Nashrlar</NavLink>
              </li>
              <li className="nav-item">
                <NavLink href="#services">Xizmatlar</NavLink>
              </li>
              <li className="nav-item">
                <NavLink href="#contact">Kontakt</NavLink>
              </li>
              <li className="nav-item">
                <NavLink href="#publications">Obunalar</NavLink>
              </li>
              <li className="nav-item">
                <NavLink href="#creators">Texnik yordam</NavLink>
              </li>
            </Scrollspy>
          </Collapse>
          <div className="d-flex align-items-center">
            <li className=" header-item">
              <LanguageDropdown />
            </li>
            <li className=" header-item">
              <MyCartDropdown />
            </li>
            <li className="nav-item d-flex align-items-center header-item btn-ghost-secondary">
              <NavLink href="#">
                <FeatherIcon icon="log-in" />
              </NavLink>
            </li>
          </div>
        </Container>
      </nav>
      <div className="bg-overlay bg-overlay-pattern"></div>
    </React.Fragment>
  );
};

export default Navbar;
