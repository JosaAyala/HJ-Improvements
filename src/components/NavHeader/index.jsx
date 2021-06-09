import React, { useState, useEffect } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { NavHeaderStyled } from "./StyledNavHeader";
import { Link } from "react-router-dom";
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
      setselectedMobileOption("HOME");
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

  const onClickShowMenu = () => {
    setShowMobileOption(!showMobileOption);
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

      {/* <Router> */}
      <nav className="NavBarContainer">
        <Link to="/">
          <img className="ImgNav" src={logo02} alt="" />
        </Link>
        <div className="MenuContainer">
          <ul className="MenuMobileSelectedOption">
            <li className="SelectedOption">{selectedMobileOption}</li>
          </ul>
          <ul className="ListMenu">
            <li key="home" id="home" onClick={onSetSelectedLink}>
              <Link
                href="/home"
                to="/home"
                onClick={onSetSelectedLink}
                className={
                  selectedLink.includes("home")
                    ? "ListItemSelected"
                    : "ListItem"
                }
              >
                HOME
              </Link>
            </li>
            <li key="services" id="services" onClick={onSetSelectedLink}>
              <Link
                href="/services"
                to="/services"
                className={
                  selectedLink.includes("services")
                    ? "ListItemSelected"
                    : "ListItem"
                }
              >
                SERVICES
              </Link>
            </li>

            <li key="gallery" id="gallery" onClick={onSetSelectedLink}>
              <Link
                href="/gallery"
                to="/gallery"
                className={
                  selectedLink.includes("gallery")
                    ? "ListItemSelected"
                    : "ListItem"
                }
              >
                GALLERY
              </Link>
            </li>

            <li key="contact" id="contact" onClick={onSetSelectedLink}>
              <Link
                href="/contact"
                to="/contact"
                className={
                  selectedLink.includes("contact")
                    ? "ListItemSelected"
                    : "ListItem"
                }
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
        <span className="MenuHamburger" onClick={onClickShowMenu}>
          <div className="Bar"></div>
          <div className="Bar"></div>
          <div className="Bar"></div>
        </span>
      </nav>
      <div
        className={
          showMobileOption === true
            ? "MenuMobileOptions"
            : "MobileOptionsNotShow"
        }
      >
        <ul className="ListMenu">
          <li key="home" id="home" onClick={onSetSelectedLink}>
            <Link
              href="/home"
              to="/home"
              onClick={onSetSelectedLink}
              style={{ textDecoration: "none", color: "none" }}
              className={
                selectedLink.includes("home") ? "ListItemSelected" : "ListItem"
              }
            >
              HOME
            </Link>
          </li>
          <li key="services" id="services" onClick={onSetSelectedLink}>
            <Link
              href="/services"
              to="/services"
              className={
                selectedLink.includes("services")
                  ? "ListItemSelected"
                  : "ListItem"
              }
            >
              SERVICES
            </Link>
          </li>

          <li key="gallery" id="gallery" onClick={onSetSelectedLink}>
            <Link
              href="/gallery"
              to="/gallery"
              className={
                selectedLink.includes("gallery")
                  ? "ListItemSelected"
                  : "ListItem"
              }
            >
              GALLERY
            </Link>
          </li>

          <li key="contact" id="contact" onClick={onSetSelectedLink}>
            <Link
              href="/contact"
              to="/contact"
              className={
                selectedLink.includes("contact")
                  ? "ListItemSelected"
                  : "ListItem"
              }
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </div>

      {/* <Switch>
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
        </Switch> */}
      {/* </Router> */}
    </NavHeaderStyled>
  );
};
export default NavHeader;
