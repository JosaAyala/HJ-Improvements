import styled from "styled-components";
import HeaderMain06 from "./../../assets/HaederMain06.jpg";

export const NavHeaderStyled = styled.div`
  nav a {
    text-decoration: none;
    color: black;
  }
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
  @media only screen and (max-width: 600px) {
    ul a {
      text-decoration: none;
      color: black;
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

    .NavBarContainer {
      margin-top: 120px;
      background-color: #f3f2f1;
      width: 100%;

      display: grid;
      grid-template-columns: 125px calc(97% - 210px) 80px;
      column-gap: 5px;

      .ImgNav {
        filter: drop-shadow(0 0 3px #b3b0ad);
        width: 100px;
        height: 60px;
        display: grid;
        justify-content: center;
        justify-items: center;
        align-content: center;
        align-items: center;
        margin: auto;
      }

      .MenuContainer {
        display: grid;
        font-size: 12pt;

        ul {
          list-style-type: none;
          margin: 0px;
          padding: 0px;
          color: black;
          text-decoration: none;
        }

        .MenuMobileSelectedOption {
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-content: center;
          align-items: center;
          justify-items: center;
          justify-content: center;

          .SelectedOption {
            text-align: center;
            color: #ffc107;
            border-bottom: solid 3px #bebbb8;
            border-top: solid 3px #bebbb8;
            font-weight: 900;
            padding-top: 3px;
            padding-bottom: 3px;
            padding-left: 10px;
            padding-right: 10px;
            transition: font-weight 0.2s, font-size 0.2s, border-top 0.2s,
              border-bottom 0.2s;
          }

          .SelectedOption:hover {
            color: #8a8886;
            border-bottom: solid 5px #ffc107;
            border-top: solid 5px #ffc107;
            font-weight: 900;
            font-size: 12pt;
          }
        }
        .ListMenu {
          display: none;
        }
      }

      .MenuHamburger {
        display: flex;
        flex-direction: column;
        row-gap: 5px;
        justify-content: center;
        align-items: center;
        align-content: center;

        .Bar {
          width: 30px;
          height: 3px;
          background: #0078d4;
        }

        .Bar:hover {
          background: #484644;
        }
      }

      .MenuHamburger:hover {
      }
    }

    .MobileOptionsNotShow {
      display: none;
    }

    .MenuMobileOptions {
      display: grid;
      font-size: 12pt;
      height: 200px;
      transition: height 02s;
      animation-name: MobileMenu;
      animation-duration: 0.2s;
      -webkit-transition: height 0.2s;
      -moz-transition: height 0.2s;

      ul {
        list-style-type: none;
        margin: 0px;
        padding: 0px;
        color: black;
        text-decoration: none;
      }
      .ListMenu {
        display: grid;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        justify-content: space-around;
        align-content: center;
        align-items: center;
        justify-items: center;

        .ListItem {
          font-weight: 700;
          padding-left: 10px;
          padding-right: 10px;
          transition: font-weight 0.2s, font-size 0.2s, border-top 0.2s,
            border-bottom 0.2s;
        }

        .ListItem:hover {
          border-bottom: solid 5px #ffc107;
          border-top: solid 5px #ffc107;
          font-weight: 900;
          font-size: 12pt;
        }

        .ListItemSelected {
          color: #ffc107;
          border-bottom: solid 3px #bebbb8;
          border-top: solid 3px #bebbb8;
          font-weight: 900;
          padding-top: 3px;
          padding-bottom: 3px;
          padding-left: 10px;
          padding-right: 10px;
          transition: font-weight 0.2s, font-size 0.2s, border-top 0.2s,
            border-bottom 0.2s;
        }

        .ListItemSelected:hover {
          color: #8a8886;
          border-bottom: solid 5px #ffc107;
          border-top: solid 5px #ffc107;
          font-weight: 900;
          font-size: 12pt;
        }
      }
    }
  }

  @media only screen and (min-width: 600px) {
    ul a {
      text-decoration: none;
      color: black;
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

    .MobileOptionsNotShow {
      display: none;
    }

    .MenuMobileOptions {
      display: grid;
      font-size: 16pt;
      height: 200px;
      transition: height 02s;
      animation-name: MobileMenu;
      animation-duration: 0.2s;
      -webkit-transition: height 0.2s;
      -moz-transition: height 0.2s;

      ul {
        list-style-type: none;
        margin: 0px;
        padding: 0px;
        color: black;
        text-decoration: none;
      }
      .ListMenu {
        display: grid;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        justify-content: space-around;
        align-content: center;
        align-items: center;
        justify-items: center;

        .ListItem {
          font-weight: 700;
          padding-left: 10px;
          padding-right: 10px;
          transition: font-weight 0.2s, font-size 0.2s, border-top 0.2s,
            border-bottom 0.2s;
        }

        .ListItem:hover {
          border-bottom: solid 5px #ffc107;
          border-top: solid 5px #ffc107;
          font-weight: 900;
          font-size: 18pt;
        }

        .ListItemSelected {
          color: #ffc107;
          border-bottom: solid 3px #bebbb8;
          border-top: solid 3px #bebbb8;
          font-weight: 900;
          padding-top: 3px;
          padding-bottom: 3px;
          padding-left: 10px;
          padding-right: 10px;
          transition: font-weight 0.2s, font-size 0.2s, border-top 0.2s,
            border-bottom 0.2s;
        }

        .ListItemSelected:hover {
          color: #8a8886;
          border-bottom: solid 5px #ffc107;
          border-top: solid 5px #ffc107;
          font-weight: 900;
          font-size: 18pt;
        }
      }
    }

    .NavBarContainer {
      margin-top: 120px;
      background-color: #f3f2f1;
      width: 100%;

      display: grid;
      grid-template-columns: 155px calc(97% - 235px) 80px;
      column-gap: 15px;

      .ImgNav {
        filter: drop-shadow(0 0 3px #b3b0ad);
        width: 140px;
        height: 80px;
        display: grid;
        justify-content: center;
        justify-items: center;
        align-content: center;
        align-items: center;
        margin: auto;
      }

      .MenuContainer {
        display: grid;
        font-size: 16pt;

        ul {
          list-style-type: none;
          margin: 0px;
          padding: 0px;
          color: black;
          text-decoration: none;
        }

        .MenuMobileSelectedOption {
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-content: center;
          align-items: center;
          justify-items: center;
          justify-content: center;

          .SelectedOption {
            text-align: center;
            color: #ffc107;
            border-bottom: solid 3px #bebbb8;
            border-top: solid 3px #bebbb8;
            font-weight: 900;
            padding-top: 3px;
            padding-bottom: 3px;
            padding-left: 10px;
            padding-right: 10px;
            transition: font-weight 0.2s, font-size 0.2s, border-top 0.2s,
              border-bottom 0.2s;
          }

          .SelectedOption:hover {
            color: #8a8886;
            border-bottom: solid 5px #ffc107;
            border-top: solid 5px #ffc107;
            font-weight: 900;
            font-size: 18pt;
          }
        }
        .ListMenu {
          display: none;
        }
      }
      .MenuHamburger {
        display: flex;
        flex-direction: column;
        row-gap: 5px;
        justify-content: center;
        align-items: center;
        align-content: center;

        .Bar {
          width: 30px;
          height: 3px;
          background: #0078d4;
        }

        .Bar:hover {
          background: #484644;
        }
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

    .MenuMobileOptions {
      display: none;
    }

    .MobileOptionsNotShow {
      display: none;
    }

    .NavBarContainer {
      margin-top: 75px;
      background-color: #f3f2f1;
      width: 100%;

      display: grid;
      grid-template-columns: 200px calc(97% - 210px);
      column-gap: 15px;

      .ImgNav {
        filter: drop-shadow(0 0 3px #b3b0ad);
        width: 140px;
        height: 80px;
        display: grid;
        justify-content: center;
        justify-items: center;
        align-content: center;
        align-items: center;
        margin: auto;
      }

      .MenuContainer {
        display: grid;
        font-size: 16pt;

        ul {
          list-style-type: none;
          margin: 0px;
          padding: 0px;
          color: black;
          text-decoration: none;
        }

        .MenuMobileSelectedOption {
          display: none;
        }
        .ListMenu {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          flex-direction: row;
          justify-content: space-around;
          align-content: center;
          align-items: center;
          justify-items: center;

          .ListItem {
            font-weight: 700;
            padding-left: 10px;
            padding-right: 10px;
            transition: font-weight 0.2s, font-size 0.2s, border-top 0.2s,
              border-bottom 0.2s;
          }

          .ListItem:hover {
            border-bottom: solid 5px #ffc107;
            border-top: solid 5px #ffc107;
            font-weight: 900;
            font-size: 18pt;
          }

          .ListItemSelected {
            color: #ffc107;
            border-bottom: solid 3px #bebbb8;
            border-top: solid 3px #bebbb8;
            font-weight: 900;
            padding-top: 3px;
            padding-bottom: 3px;
            padding-left: 10px;
            padding-right: 10px;
            transition: font-weight 0.2s, font-size 0.2s, border-top 0.2s,
              border-bottom 0.2s;
          }

          .ListItemSelected:hover {
            color: #8a8886;
            border-bottom: solid 5px #ffc107;
            border-top: solid 5px #ffc107;
            font-weight: 900;
            font-size: 18pt;
          }
        }
      }
      .MenuHamburger {
        display: none;
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

    .MenuMobileOptions {
      display: none;
    }

    .MobileOptionsNotShow {
      display: none;
    }

    .NavBarContainer {
      margin-top: 75px;
      background-color: #f3f2f1;
      width: 100%;

      display: grid;
      grid-template-columns: 300px calc(97% - 385px) 80px;
      column-gap: 15px;

      .ImgNav {
        filter: drop-shadow(0 0 3px #b3b0ad);
        width: 140px;
        height: 80px;
        display: grid;
        justify-content: center;
        justify-items: center;
        align-content: center;
        align-items: center;
        margin: auto;
      }

      .MenuContainer {
        display: grid;
        font-size: 16pt;

        ul {
          list-style-type: none;
          margin: 0px;
          padding: 0px;
          color: black;
          text-decoration: none;
        }

        .MenuMobileSelectedOption {
          display: none;
        }
        .ListMenu {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          flex-direction: row;
          justify-content: space-around;
          align-content: center;
          align-items: center;
          justify-items: center;

          .ListItem {
            font-weight: 700;
            padding-left: 10px;
            padding-right: 10px;
            transition: font-weight 0.2s, font-size 0.2s, border-top 0.2s,
              border-bottom 0.2s;
          }

          .ListItem:hover {
            border-bottom: solid 5px #ffc107;
            border-top: solid 5px #ffc107;
            font-weight: 900;
            font-size: 18pt;
          }

          .ListItemSelected {
            color: #ffc107;
            border-bottom: solid 3px #bebbb8;
            border-top: solid 3px #bebbb8;
            font-weight: 900;
            padding-top: 3px;
            padding-bottom: 3px;
            padding-left: 10px;
            padding-right: 10px;
            transition: font-weight 0.2s, font-size 0.2s, border-top 0.2s,
              border-bottom 0.2s;
          }

          .ListItemSelected:hover {
            color: #8a8886;
            border-bottom: solid 5px #ffc107;
            border-top: solid 5px #ffc107;
            font-weight: 900;
            font-size: 18pt;
          }
        }
      }
      .MenuHamburger {
        display: none;
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

    .MenuMobileOptions {
      display: none;
    }

    .MobileOptionsNotShow {
      display: none;
    }

    .NavBarContainer {
      margin-top: 75px;
      background-color: #f3f2f1;
      width: 100%;

      display: grid;
      grid-template-columns: 300px calc(97% - 385px) 80px;
      column-gap: 15px;

      .ImgNav {
        filter: drop-shadow(0 0 3px #b3b0ad);
        width: 140px;
        height: 80px;
        display: grid;
        justify-content: center;
        justify-items: center;
        align-content: center;
        align-items: center;
        margin: auto;
      }

      .MenuContainer {
        display: grid;
        font-size: 16pt;

        ul {
          list-style-type: none;
          margin: 0px;
          padding: 0px;
          color: black;
          text-decoration: none;
        }

        .MenuMobileSelectedOption {
          display: none;
        }
        .ListMenu {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          flex-direction: row;
          justify-content: space-around;
          align-content: center;
          align-items: center;
          justify-items: center;

          .ListItem {
            font-weight: 700;
            padding-left: 10px;
            padding-right: 10px;
            transition: font-weight 0.2s, font-size 0.2s, border-top 0.2s,
              border-bottom 0.2s;
          }

          .ListItem:hover {
            border-bottom: solid 5px #ffc107;
            border-top: solid 5px #ffc107;
            font-weight: 900;
            font-size: 18pt;
          }

          .ListItemSelected {
            color: #ffc107;
            border-bottom: solid 3px #bebbb8;
            border-top: solid 3px #bebbb8;
            font-weight: 900;
            padding-top: 3px;
            padding-bottom: 3px;
            padding-left: 10px;
            padding-right: 10px;
            transition: font-weight 0.2s, font-size 0.2s, border-top 0.2s,
              border-bottom 0.2s;
          }

          .ListItemSelected:hover {
            color: #8a8886;
            border-bottom: solid 5px #ffc107;
            border-top: solid 5px #ffc107;
            font-weight: 900;
            font-size: 18pt;
          }
        }
      }
      .MenuHamburger {
        display: none;
      }
    }
  }
`;
