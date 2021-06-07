import React, { useState, useEffect } from "react";
import { Button, Dropdown, DropdownButton } from "react-bootstrap";
import { NavHeaderStyled } from "./StyledNavHeader";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ContactScreenComponent from "../ContactScreen";
import HomeScreenComponent from "../HomeScreen";
import GalleryScreenComponent from "../GalleryScreen";
import ServicesScreenComponent from "../ServicesScreen";
import logo02 from "./../../assets/logo02.png";

export const NavHeader = (props) => {
  const paths = ["/home", "/services", "/gallery", "/contact"];
  const [selectedLink, setSelectedLink] = useState("home");
  const [showMobileOption, setShowMobileOption] = useState(false);
  const [selectedMobileOption, setselectedMobileOption] = useState("HOME");

  useEffect(() => {
    const currentPath = window.location.pathname;
    if (paths.includes(currentPath)) {
      setSelectedLink(currentPath);
      let pathSplit = currentPath.split("/");
      setselectedMobileOption(pathSplit[1].toUpperCase());
    } else {
      setSelectedLink("/home");
      setShowMobileOption("HOME");
    }
  }, []);

  const onSetSelectedLink = (ev) => {
    setShowMobileOption(false);
    const { id } = ev.currentTarget;
    const { pathname } = ev.target;

    if (id !== null && id !== "" && !id) {
      if (paths.includes(id)) {
        setSelectedLink(`/${id}`);
        setselectedMobileOption(id.toUpperCase());
        return;
      }
    } else {
      if (!paths.includes(pathname)) {
        setSelectedLink("/home");
        setselectedMobileOption("HOME");
        return;
      }
      setSelectedLink(pathname);
      let pathSplit = pathname.split("/");
      setselectedMobileOption(pathSplit[1].toUpperCase());
      return;
    }
  };

  const linkWhatsappPhoneFirst = `https://wa.me/14438422304`;
  const linkWhatsappPhoneSecond = `https://wa.me/14434092139`;

  return (
    <NavHeaderStyled showMobileOption={showMobileOption}>
      <div className="DefaultBar">
        <div className="DivBarHeader">
          <div id="title">
            <div>{`H&J`}</div>
            <div>{`Home Improvements & Remodeling`}</div>
          </div>
          <div className="">
            <DropdownButton
              title="Go to WhatsApp"
              className="WhatsappButton"
              variant="success"
            >
              <Dropdown.Item href={linkWhatsappPhoneFirst}>
                +1 (443) 842-2304
              </Dropdown.Item>
              <Dropdown.Item href={linkWhatsappPhoneSecond}>
                +1 (443) 409-2139
              </Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
      </div>

      <Router>
        <nav className="NavClass">
          <a href="/home">
            <img className="ImgNav" src={logo02} alt="" />
          </a>
          <div className="">
            <div className="ItemCurrentNav">{selectedMobileOption}</div>
            <ul className="ItemsNav">
              <li key="1" id="home" onClick={onSetSelectedLink}>
                <Link
                  to="/home"
                  className={
                    selectedLink.includes("home")
                      ? "NavItemSelected"
                      : "NavItem"
                  }
                >
                  Home
                </Link>
              </li>
              <li key="2" id="services" onClick={onSetSelectedLink}>
                <Link
                  to="/services"
                  className={
                    selectedLink.includes("services")
                      ? "NavItemSelected"
                      : "NavItem"
                  }
                >
                  Services
                </Link>
              </li>
              <li key="3" id="gallery" onClick={onSetSelectedLink}>
                <Link
                  to="/gallery"
                  className={
                    selectedLink.includes("gallery")
                      ? "NavItemSelected"
                      : "NavItem"
                  }
                >
                  Gallery
                </Link>
              </li>
              <li key="4" id="contact" onClick={onSetSelectedLink}>
                <Link
                  to="/contact"
                  className={
                    selectedLink.includes("contact")
                      ? "NavItemSelected"
                      : "NavItem"
                  }
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <Button
              variant="light"
              className="MenuButton"
              onClick={() => setShowMobileOption(!showMobileOption)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#0078d4"
                className="bi bi-menu-down"
                viewBox="0 0 16 16"
              >
                <path d="M4 2v2H2V2h2zm1 12v-2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm5 10v-2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zM9 2v2H7V2h2zm5 0v2h-2V2h2zM4 7v2H2V7h2zm5 0v2H7V7h2zm5 0h-2v2h2V7zM4 12v2H2v-2h2zm5 0v2H7v-2h2zm5 0v2h-2v-2h2zM12 1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zm-1 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zm1 4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2z" />
              </svg>
            </Button>
          </div>
        </nav>
        {/* {showMobileOption && ( */}
        <div
          className={
            showMobileOption === true ? "MobileOptions" : "MobileNotShow"
          }
        >
          <ul className="">
            <li key="1" id="home" onClick={onSetSelectedLink}>
              <Link to="/home" className="Option">
                HOME
              </Link>
              <hr />
            </li>
            <li key="2" id="services" onClick={onSetSelectedLink}>
              <Link to="/services" className="Option">
                SERVICES
              </Link>
              <hr />
            </li>
            <li key="3" id="gallery" onClick={onSetSelectedLink}>
              <Link to="/gallery" className="Option">
                GALLERY
              </Link>
              <hr />
            </li>
            <li key="4" id="contact" onClick={onSetSelectedLink}>
              <Link to="/contact" className="Option">
                CONTACT
              </Link>
              <hr />
            </li>
          </ul>
        </div>

        {/* )} */}
        <Switch>
          <Route exact path="/">
            <HomeScreenComponent />
          </Route>
          <Route path="/home">
            <HomeScreenComponent />
          </Route>
          <Route path="/services">
            <ServicesScreenComponent />
          </Route>
          <Route path="/gallery">
            <GalleryScreenComponent />
          </Route>
          <Route path="/contact">
            <ContactScreenComponent />
          </Route>
        </Switch>
      </Router>
    </NavHeaderStyled>
  );
};
export default NavHeader;
