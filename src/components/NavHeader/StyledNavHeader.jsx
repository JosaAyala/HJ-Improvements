import styled from "styled-components";
import HeaderMain06 from "./../../assets/HaederMain06.jpg";

export const NavHeaderStyled = styled.div`
  @keyframes MobileMenu {
    0% {
      background: #b3b0ad;
      height: 25px;
    }
    25% {
      background: #b3b0ad;
      height: 50px;
    }
    50% {
      background: #979593;
      height: 150px;
    }
    75% {
      background: #f3f2f1;
      height: 200px;
    }
    100% {
      background: #f3f2f1;
      height: 250px;
    }
  }
  nav a {
    text-decoration: none;
    color: black;
  }

  ul {
    list-style-type: none;
    display: block;
    padding: 0.5rem 0.5rem;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    margin: 0;

    li {
      text-align: -webkit-match-parent;
      display: list-item;
      padding: 0 1.5rem;
      width: 100%;
    }
  }

  @media only screen and (max-width: 600px) {
    .DefaultBar {
      height: 120px;
      display: block;
      background: url(${HeaderMain06});
      background-repeat: no-repeat;
      background-size: cover;
      position: fixed;
      width: 100%;
      z-index: 1000;
      top: 0;
      padding: 10px 16px;
      color: black;

      .DivBarHeader {
        display: grid;

        #title {
          color: black;
          font-size: 14pt;
          font-weight: bold;
          z-index: 1001;
          opacity: 1;
          filter: drop-shadow(0 0 8px white);
          display: flex;
          flex-direction: column;
          align-items: center;
          align-content: flex-start;
          justify-items: center;
          column-gap: 5px;
        }

        .WhatsappButton {
          transform: translateY(-50%);
          width: 150px;
          filter: drop-shadow(0 0 8px black);
          top: 25px;
          left: 50%;
          margin-left: -75px;
        }
      }
    }

    .MobileNotShow {
      visibility: collapse;
    }

    .MobileOptions {
      visibility: collapse;
      position: absolute;
      background-color: #f3f2f1;
      left: 50%;
      overflow: hidden;
      top: 100%auto;
      z-index: 9000;
      width: 98%;
      transform: translateX(-50%);
      transition: height 1s;
      height: 250px;
      animation-name: MobileMenu;
      animation-duration: 0.5s;
      -webkit-transition: height 1s;
      -moz-transition: height 1s;

      .Option {
        color: #484644;
        font-size: 14pt;
        font-weight: normal;
        filter: drop-shadow(0 0 3px black);
      }

      .Option:hover {
        border-bottom: solid 4px #ffc107;
        color: black;
        font-weight: bold;
        text-transform: uppercase;
        text-shadow: 2px 2px 4px hsl(0deg 0% 0% / 25%);
        transition: 0.1s ease-in color;
      }
    }

    .NavClass {
      margin-top: 120px;
      width: 100%;
      display: grid;
      grid-template-columns: 115px calc(95% - 195px) 80px;
      column-gap: 15px;
      background-color: #f3f2f1;

      .ImgNav {
        filter: drop-shadow(0 0 3px #b3b0ad);
        width: 100px;
        height: 60px;
        display: flex;
        justify-content: center;
        justify-items: center;
        align-content: center;
        align-items: center;
        margin-left: 10px;
        margin-right: auto;
      }

      .MenuButton {
        display: block;
        justify-content: center;
        justify-items: center;
        align-content: center;
        align-items: center;
        padding: 20px;
        background-color: #f3f2f1;
      }

      a {
        font-weight: bold;
      }

      .ItemsNav {
        display: none;
      }

      .ItemCurrentNav {
        display: flex;
        justify-content: center;
        justify-items: center;
        align-content: center;
        align-items: center;
        padding: 20px;
        text-align: center;
        width: min-content;
        margin: auto;
        color: #ffc107;
        font-weight: bold;
        text-transform: uppercase;
        text-shadow: 2px 2px 4px hsl(0deg 0% 0% / 25%);
        transition: 0.1s ease-in color;
        font-size: 16pt;
      }
    }
  }

  @media only screen and (min-width: 600px) {
    ul {
      list-style-type: none;
      list-style-position: inside;
    }

    .DefaultBar {
      height: 120px;
      display: block;
      background: url(${HeaderMain06});
      background-repeat: no-repeat;
      background-size: cover;
      position: fixed;
      width: 100%;
      z-index: 1000;
      top: 0;
      padding: 10px 16px;
      color: black;

      .DivBarHeader {
        display: grid;

        #title {
          color: black;
          font-size: 14pt;
          font-weight: bold;
          z-index: 1001;
          opacity: 1;
          filter: drop-shadow(0 0 8px white);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-items: center;
          column-gap: 5px;
        }

        .WhatsappButton {
          transform: translateY(-50%);
          filter: drop-shadow(0 0 8px black);
          display: flex;
          top: 25px;
          left: 50%;
          margin-left: -75px;
        }
      }
    }

    .MobileNotShow {
      visibility: collapse;
    }

    .MobileOptions {
      visibility: collapse;
      position: absolute;
      background-color: #f3f2f1;
      left: 50%;
      overflow: hidden;
      top: 100%auto;
      z-index: 9000;
      width: 100%;
      transform: translateX(-50%);
      transition: height 1s;
      height: 250px;
      animation-name: MobileMenu;
      animation-duration: 0.5s;
      -webkit-transition: height 1s;
      -moz-transition: height 1s;

      .Option {
        color: #484644;
        font-size: 14pt;
        font-weight: normal;
        filter: drop-shadow(0 0 3px black);
      }

      .Option:hover {
        border-bottom: solid 4px #ffc107;
        color: black;
        font-weight: bold;
        text-transform: uppercase;
        text-shadow: 2px 2px 4px hsl(0deg 0% 0% / 25%);
        transition: 0.1s ease-in color;
      }
    }

    .NavClass {
      margin-top: 120px;
      width: 100%;
      display: grid;
      grid-template-columns: 115px calc(97% - 195px) 80px;
      column-gap: 15px;
      background-color: #f3f2f1;

      .ImgNav {
        filter: drop-shadow(0 0 3px #b3b0ad);
        width: 100px;
        height: 60px;
        display: flex;
        justify-content: center;
        justify-items: center;
        align-content: center;
        align-items: center;
        margin-left: 10px;
        margin-right: auto;
      }

      .MenuButton {
        display: flex;
        justify-content: center;
        justify-items: center;
        align-content: center;
        align-items: center;
        padding: 20px;
        background-color: #f3f2f1;
      }

      a {
        font-weight: bold;
      }

      .ItemsNav {
        display: none;
      }

      .ItemCurrentNav {
        display: flex;
        justify-content: center;
        justify-items: center;
        align-content: center;
        align-items: center;
        padding: 20px;
        text-align: center;
        width: min-content;
        margin: auto;
        color: #ffc107;
        font-weight: bold;
        text-transform: uppercase;
        text-shadow: 2px 2px 4px hsl(0deg 0% 0% / 25%);
        transition: 0.1s ease-in color;
        font-size: 16pt;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .DefaultBar {
      height: 75px;
      display: block;
      background: url(${HeaderMain06});
      background-repeat: no-repeat;
      background-size: cover;
      position: fixed;
      width: 100%;
      z-index: 1000;
      top: 0;
      padding: 10px 16px;
      color: black;

      .DivBarHeader {
        display: grid;
        grid-template-columns: 80% 20%;

        #title {
          color: black;
          font-size: 20pt;
          font-weight: bold;
          z-index: 1001;
          opacity: 1;
          filter: drop-shadow(0 0 8px white);
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-content: center;
          align-items: center;
          justify-items: center;
          column-gap: 10px;
        }

        .WhatsappButton {
          transform: translateY(-50%);
          width: 150px;
          filter: drop-shadow(0 0 8px black);
          top: 25px;
        }
      }
    }

    .MobileOptions {
      display: none;
    }
    .NavClass {
      margin-top: 75px;
      width: 100%;
      display: grid;
      grid-template-columns: 175px calc(98% - 260px) 80px;
      column-gap: 5px;
      background-color: #f3f2f1;

      justify-content: center;
      align-items: center;
      align-content: space-around;

      .ImgNav {
        filter: drop-shadow(0 0 3px #b3b0ad);
        width: 140px;
        height: 80px;
        display: flex;
        justify-content: center;
        justify-items: center;
        align-content: center;
        align-items: center;
        margin-left: 10px;
        margin-right: auto;
      }

      .MenuButton {
        display: none;
      }

      a {
        font-weight: bold;
      }

      .ItemCurrentNav {
        display: none;
      }

      .ItemsNav {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        column-gap: 10px;

        justify-content: center;
        justify-items: center;
        align-content: center;
        align-items: center;

        .NavItem {
          font-size: 16pt;
          color: black;
          filter: drop-shadow(0 0 8px gray);
          width: max-content;
        }

        .NavItemSelected {
          border-bottom: solid 4px #ffc107;
          color: #ffc107;
          font-weight: bold;
          text-transform: uppercase;
          text-shadow: 2px 2px 4px hsl(0deg 0% 0% / 25%);
          transition: 0.1s ease-in color;
          font-size: 16pt;
        }

        .NavItem:hover {
          border-bottom: solid 4px #ffc107;
          color: black;
          font-weight: bold;
          text-transform: uppercase;
          text-shadow: 2px 2px 4px hsl(0deg 0% 0% / 25%);
          transition: 0.1s ease-in color;
        }

        .ImgNav:hover {
          filter: drop-shadow(0 0 2px white);
        }
      }
    }
  }

  @media only screen and (min-width: 992px) {
    .DefaultBar {
      height: 75px;
      display: block;
      background: url(${HeaderMain06});
      background-repeat: no-repeat;
      background-size: cover;
      position: fixed;
      width: 100%;
      z-index: 1000;
      top: 0;
      padding: 10px 16px;
      color: black;

      .DivBarHeader {
        display: grid;
        grid-template-columns: 85% 15%;

        #title {
          color: black;
          font-size: 20pt;
          font-weight: bold;
          z-index: 1001;
          opacity: 1;
          filter: drop-shadow(0 0 8px white);
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-content: center;
          align-items: center;
          justify-items: center;
          column-gap: 10px;
        }

        .WhatsappButton {
          transform: translateY(-50%);
          filter: drop-shadow(0 0 8px black);
          top: 25px;
        }
      }
    }
    .MobileOptions {
      display: none;
    }

    .NavClass {
      margin-top: 75px;
      width: 100%;
      display: grid;
      grid-template-columns: 200px calc(97% - 285px) 80px;
      column-gap: 15px;
      background-color: #f3f2f1;
      justify-content: center;
      align-items: center;
      align-content: space-around;

      .ImgNav {
        filter: drop-shadow(0 0 3px #b3b0ad);
        width: 140px;
        height: 80px;
        display: flex;
        justify-content: center;
        justify-items: center;
        align-content: center;
        align-items: center;
        margin-left: 10px;
        margin-right: auto;
      }

      .MenuButton {
        display: none;
      }

      a {
        font-weight: bold;
      }

      .ItemCurrentNav {
        display: none;
      }

      .ItemsNav {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        column-gap: 25px;

        justify-content: center;
        justify-items: center;
        align-content: center;
        align-items: center;

        .NavItem {
          font-size: 18pt;
          color: black;
          filter: drop-shadow(0 0 8px gray);
          width: max-content;
        }

        .NavItemSelected {
          border-bottom: solid 4px #ffc107;
          color: #ffc107;
          font-weight: bold;
          text-transform: uppercase;
          text-shadow: 2px 2px 4px hsl(0deg 0% 0% / 25%);
          transition: 0.1s ease-in color;
          font-size: 18pt;
        }

        .NavItem:hover {
          border-bottom: solid 4px #ffc107;
          color: black;
          font-weight: bold;
          text-transform: uppercase;
          text-shadow: 2px 2px 4px hsl(0deg 0% 0% / 25%);
          transition: 0.1s ease-in color;
        }

        .ImgNav:hover {
          filter: drop-shadow(0 0 2px white);
        }
      }
    }
  }

  @media only screen and (min-width: 1200px) {
    .DefaultBar {
      height: 75px;
      display: block;
      background: url(${HeaderMain06});
      background-repeat: no-repeat;
      background-size: cover;
      position: fixed;
      width: 100%;
      z-index: 1000;
      top: 0;
      padding: 10px 16px;
      color: black;

      .DivBarHeader {
        display: grid;
        grid-template-columns: 88% 12%;

        #title {
          color: black;
          font-size: 20pt;
          font-weight: bold;
          z-index: 1001;
          opacity: 1;
          filter: drop-shadow(0 0 8px white);
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-content: center;
          align-items: center;
          justify-items: center;
          column-gap: 10px;
        }

        .WhatsappButton {
          transform: translateY(-50%);
          filter: drop-shadow(0 0 8px black);
          top: 25px;
        }
      }
    }

    .MobileOptions {
      display: none;
    }

    .NavClass {
      margin-top: 75px;
      width: 100%;
      display: grid;
      grid-template-columns: 200px calc(97% - 285px) 80px;
      column-gap: 15px;
      background-color: #f3f2f1;

      .ImgNav {
        filter: drop-shadow(0 0 3px #b3b0ad);
        width: 140px;
        height: 80px;
        display: flex;
        justify-content: center;
        justify-items: center;
        align-content: center;
        align-items: center;
        margin-left: 10px;
        margin-right: auto;
      }

      .MenuButton {
        display: none;
      }

      a {
        font-weight: bold;
      }

      .ItemCurrentNav {
        display: none;
      }

      .ItemsNav {
        display: flex;
        flex-direction: row;
        column-gap: 25px;

        justify-content: flex-start;
        align-content: space-around;
        align-items: center;

        .NavItem {
          font-size: 18pt;
          color: black;
          filter: drop-shadow(0 0 8px gray);
          padding-left: 15px;
          padding-right: 15px;
        }

        .NavItemSelected {
          border-bottom: solid 4px #ffc107;
          color: #ffc107;
          font-weight: bold;
          text-transform: uppercase;
          text-shadow: 2px 2px 4px hsl(0deg 0% 0% / 25%);
          transition: 0.1s ease-in color;
          font-size: 16pt;
        }

        .NavItem:hover {
          border-bottom: solid 4px #ffc107;
          color: black;
          font-weight: bold;
          text-transform: uppercase;
          text-shadow: 2px 2px 4px hsl(0deg 0% 0% / 25%);
          transition: 0.1s ease-in color;
        }

        .ImgNav:hover {
          filter: drop-shadow(0 0 2px white);
        }
      }
    }
  }
`;
