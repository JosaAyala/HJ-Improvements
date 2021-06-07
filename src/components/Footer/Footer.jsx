import React from "react";
import { FooterStyled } from "./StyledFooter";
import logo01 from "./../../assets/logo01.png";
import { IconLi } from "./LiIcon";

export const FooterComponent = (props) => {
  return (
    <FooterStyled>
      <footer>
        <div className="ContainerFooter">
          <div className="LeftSideFooter">
            <img src={logo01} alt="Logo" className="ImgLogo" />
          </div>
          <div className="RightSideFooter">
            <div className="">
              <div className="TitleItem">INFORMATION</div>
              <hr className="" />
              <div className="">
                <ul className="InformationContent">
                  <li className="ItemLi">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-geo-alt"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                    <div className="">
                      <a
                        href="https://www.google.hn/maps/place/4605+Elsrode+Ave,+Baltimore,+MD+21214,+EE.+UU./@39.3432847,-76.5739706,17z/data=!3m1!4b1!4m5!3m4!1s0x89c805c009aa0125:0x918ce5493f3bfaf4!8m2!3d39.3432847!4d-76.5717819"
                        className=""
                        aria-label="Go Maps"
                      >
                        4605 Elsrode Ave, Baltimore, MD 21214
                      </a>
                    </div>
                  </li>
                  <li className="ItemLi">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-envelope"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                    </svg>
                    <div className="">hjimprovementsllc@gmail.com</div>
                  </li>
                  <li className="ItemLi">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-whatsapp"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                    </svg>
                    <div className="">
                      <a href="https://wa.me/14438422304" className="">
                        +1 (443) 842-2304
                      </a>
                    </div>
                  </li>
                  <li className="ItemLi">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-whatsapp"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                    </svg>
                    <div className="">
                      <a href="https://wa.me/14434092139" className="">
                        +1 (443) 409-2139
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="TitleItem">SERVICES</div>
              <hr className="" />
              <div className="">
                <ul className="ServiceContent">
                  <li className="ItemLi">
                    <IconLi />
                    <div className="">Kitchens</div>
                  </li>
                  <li className="ItemLi">
                    <IconLi />
                    <div className="">Bathrooms</div>
                  </li>
                  <li className="ItemLi">
                    <IconLi />
                    <div className="">Carpentry</div>
                  </li>
                  <li className="ItemLi">
                    <IconLi />
                    <div className="">Doors</div>
                  </li>
                  <li className="ItemLi">
                    <IconLi />
                    <div className="">Painting</div>
                  </li>
                  <li className="ItemLi">
                    <IconLi />
                    <div className="">Flooring</div>
                  </li>
                  <li className="ItemLi">
                    <IconLi />
                    <div className="">Windows</div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="TitleItem">COPYRIGHT</div>
              <hr className="" />
              <div className="CopyrightsContent">
                <p className="">{`Copyright © 2021 H&J`}</p>
                <p className="">{`Home Improvements & Remodeling`}</p>
                <p className="">All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </FooterStyled>
  );
};
