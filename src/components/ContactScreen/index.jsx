import React from "react";
import { ContactScreenStyled } from "./StyledContactScreen";
import userIcon from "./../../assets/userIcon.png";
import iconMail01 from "./../../assets/iconMail01.png";
import iconPhone from "./../../assets/iconPhone.png";
import iconLocation from "./../../assets/iconLocation.png";

export class ContactScreenComponent extends React.Component {
  render() {
    return (
      <ContactScreenStyled>
        <hr className="" />
        <div className="ContactScreenContainer">
          <div className="DivInformation">
            <div className=""></div>
            <div className="CardContainer">
              <div className="HeaderCardContact">
                <div className="TtileContact">
                  <h2 className="">Contact Us</h2>
                </div>
              </div>
              <div className="ContentCardContact">
                <div className="ItemContent">
                  <img src={userIcon} alt="User" className="ImgItem" />
                  <div className="TextContent">
                    <div className="">Herson Argueta</div>
                    <div className="">Johanna Ramírez</div>
                  </div>
                </div>
                <div className="ItemContent">
                  <img src={iconLocation} alt="Location" className="ImgItem" />
                  <div className="TextContent">
                    <div className="">
                      4605 Elsrode Ave, Baltimore, MD 21214.
                    </div>
                    <div className="">
                      <a href="https://www.google.hn/maps/place/4605+Elsrode+Ave,+Baltimore,+MD+21214,+EE.+UU./@39.3432847,-76.5739706,17z/data=!3m1!4b1!4m5!3m4!1s0x89c805c009aa0125:0x918ce5493f3bfaf4!8m2!3d39.3432847!4d-76.5717819">
                        View in Maps
                      </a>
                    </div>
                  </div>
                </div>
                <div className="ItemContent">
                  <img src={iconMail01} alt="Email" className="ImgItem" />
                  <div className="TextContent">
                    <div className="">hjimprovementsllc@gmail.com</div>
                  </div>
                </div>
                <div className="ItemContent">
                  <img src={iconPhone} alt="PhoneNumber" className="ImgItem" />
                  <div className="TextContent">
                    <div className="">+1 (443) 842-2304</div>
                    <div className="">+1 (443) 409-2139</div>
                  </div>
                </div>
              </div>
              <div className="FooterCardContact">
                <div className="">
                  <div>
                    Let us help you make an informed decision on your next
                    project.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContactScreenStyled>
    );
  }
}

export default ContactScreenComponent;
