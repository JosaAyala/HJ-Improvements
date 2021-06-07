import styled from "styled-components";
import HomeViewPic from "./../../assets/HomeViewPic.jpeg";

export const HomeScreenStyled = styled.div`
  @keyframes ValuesFrame {
    0% {
      opacity: 0.2;
      color: white;
    }
    25% {
      opacity: 0.4;
      color: #edebe9;
    }

    50% {
      opacity: 0.6;
      color: #bebbb8;
    }

    75% {
      opacity: 0.8;
      color: #8a8886;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes mission {
    0% {
      background: white;
      border: solid 5px white;
      width: 0%;
      .Title {
        display: none;
      }
    }
    25% {
      background: white;
      border: solid 5px white;
      width: 90%;
      .Title {
        display: none;
      }
    }
    50% {
      background: white;
      border: solid 5px white;
      width: 95%;
      .Title {
        display: none;
      }
    }
    100% {
      background: #0078d4;
      width: 100%;
    }
  }

  @keyframes vision {
    0% {
      background: white;
      border: solid 5px white;
      width: 0%;
    }
    25% {
      background: white;
      border: solid 5px white;
      width: 90%;
    }
    50% {
      background: white;
      border: solid 5px white;
      width: 95%;
    }
    100% {
      background: #0078d4;
      width: 100%;
    }
  }

  @media only screen and (max-width: 600px) {
    .BlocsContainer {
      background-image: url(${HomeViewPic});
      background-size: cover;
      width: 100%;
      background-position: center;

      .BlocLeftMission {
        display: grid;
        grid-template-columns: 60% 40%;
        padding-top: 50px;
        padding-bottom: 50px;
        opacity: 0.8;

        .ContentBloc {
          border-bottom-right-radius: 10px;
          border-top-right-radius: 10px;
          background: #0078d4;
          border: solid 5px #0078d4;
          filter: drop-shadow(0 0 5px black);
          animation-name: mission;
          animation-duration: 2.5s;

          .ContentText {
            margin-left: 10px;
            margin-top: 10px;
            margin-bottom: 10px;
            margin-right: 10px;
            padding-left: 15px;
            border-left: solid 5px white;
            border-bottom-left-radius: 10px;
            border-top-left-radius: 10px;
            filter: drop-shadow(0 0 5px black);
            .Title {
              color: #ffba08;
              filter: drop-shadow(0 0 5px black);
              font-size: 16pt;
            }

            .Info {
              color: white;
              font-size: 10pt;
            }
          }
        }
      }

      .BlocRightMission {
        display: grid;
        grid-template-columns: 40% 60%;
        padding-top: 50px;
        padding-bottom: 50px;
        opacity: 0.8;

        .ContentBloc {
          border-bottom-left-radius: 10px;
          border-top-left-radius: 10px;
          background: #0078d4;
          border: solid 5px #0078d4;
          filter: drop-shadow(0 0 5px black);

          animation-name: vision;
          animation-duration: 2.5s;

          .ContentText {
            margin-left: 10px;
            margin-top: 10px;
            margin-bottom: 10px;
            margin-right: 10px;
            padding-left: 15px;
            border-left: solid 5px white;
            border-bottom-left-radius: 10px;
            border-top-left-radius: 10px;
            filter: drop-shadow(0 0 5px black);

            .Title {
              color: #ffba08;
              filter: drop-shadow(0 0 5px black);
              font-size: 16pt;
            }

            .Info {
              color: white;
              font-size: 10pt;
            }
          }
        }
      }
    }

    .ValuesContent {
      h3 {
        text-align: center;
        font-weight: bold;
        filter: drop-shadow(0 0 4px gray);
      }

      .CardValues {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 10px;
        animation-name: ValuesFrame;
        animation-duration: 2.5s;

        .CardHeaderItem {
          .HeaderTitle {
            color: black;
            filter: drop-shadow(0 0 2px #0078d4);
            text-align: center;
            font-size: 16pt;
          }
        }

        .CardContent {
          font-size: 11pt;
        }
      }
    }
  }

  @media only screen and (min-width: 600px) {
    .BlocsContainer {
      background-image: url(${HomeViewPic});
      background-size: cover;
      width: 100%;
      background-position: center;

      .BlocLeftMission {
        display: grid;
        grid-template-columns: 60% 40%;
        padding-top: 50px;
        padding-bottom: 50px;
        opacity: 0.8;

        .ContentBloc {
          border-bottom-right-radius: 10px;
          border-top-right-radius: 10px;
          background: #0078d4;
          border: solid 5px #0078d4;
          filter: drop-shadow(0 0 5px black);
          animation-name: mission;
          animation-duration: 2.5s;

          .ContentText {
            margin-left: 10px;
            margin-top: 10px;
            margin-bottom: 10px;
            margin-right: 10px;
            padding-left: 15px;
            border-left: solid 5px white;
            border-bottom-left-radius: 10px;
            border-top-left-radius: 10px;
            filter: drop-shadow(0 0 5px black);
            .Title {
              color: #ffba08;
              filter: drop-shadow(0 0 5px black);
              font-size: 16pt;
            }

            .Info {
              color: white;
              font-size: 10pt;
            }
          }
        }
      }

      .BlocRightMission {
        display: grid;
        grid-template-columns: 40% 60%;
        padding-top: 50px;
        padding-bottom: 50px;
        opacity: 0.8;

        .ContentBloc {
          border-bottom-left-radius: 10px;
          border-top-left-radius: 10px;
          background: #0078d4;
          border: solid 5px #0078d4;
          filter: drop-shadow(0 0 5px black);

          animation-name: vision;
          animation-duration: 2.5s;

          .ContentText {
            margin-left: 10px;
            margin-top: 10px;
            margin-bottom: 10px;
            margin-right: 10px;
            padding-left: 15px;
            border-left: solid 5px white;
            border-bottom-left-radius: 10px;
            border-top-left-radius: 10px;
            filter: drop-shadow(0 0 5px black);

            .Title {
              color: #ffba08;
              filter: drop-shadow(0 0 5px black);
              font-size: 16pt;
            }

            .Info {
              color: white;
              font-size: 10pt;
            }
          }
        }
      }
    }

    .ValuesContent {
      margin-left: 10px;
      margin-right: 10px;

      h3 {
        text-align: center;
        font-weight: bold;
        filter: drop-shadow(0 0 4px gray);
      }

      .CardValues {
        display: grid;
        grid-template-columns: 50% 50%;
        column-gap: 10px;
        animation-name: ValuesFrame;
        animation-duration: 2.5s;
        /* filter: drop-shadow(0 0 2px black); */

        .CardHeaderItem {
          /* filter: drop-shadow(0 0 1px black); */

          .HeaderTitle {
            color: black;
            filter: drop-shadow(0 0 2px #0078d4);
            text-align: center;
            font-size: 16pt;
          }
        }

        .CardContent {
          font-size: 11pt;
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .BlocsContainer {
      background-image: url(${HomeViewPic});
      background-size: cover;

      .BlocLeftMission {
        display: grid;
        grid-template-columns: 60% 40%;
        padding-top: 50px;
        padding-bottom: 50px;

        .ContentBloc {
          border-bottom-right-radius: 10px;
          border-top-right-radius: 10px;
          background: #0078d4;
          border: solid 5px #0078d4;
          filter: drop-shadow(0 0 5px black);
          animation-name: mission;
          animation-duration: 2.5s;

          .ContentText {
            margin-left: 10px;
            margin-top: 10px;
            margin-bottom: 10px;
            margin-right: 10px;
            padding-left: 15px;
            border-left: solid 5px white;
            border-bottom-left-radius: 10px;
            border-top-left-radius: 10px;
            filter: drop-shadow(0 0 5px black);
            .Title {
              color: #ffba08;
              filter: drop-shadow(0 0 5px black);
            }

            .Info {
              color: white;
              font-size: 14pt;
            }
          }
        }
      }

      .BlocRightMission {
        display: grid;
        grid-template-columns: 40% 60%;
        padding-top: 50px;
        padding-bottom: 50px;

        .ContentBloc {
          border-bottom-left-radius: 10px;
          border-top-left-radius: 10px;
          background: #0078d4;
          border: solid 5px #0078d4;
          filter: drop-shadow(0 0 5px black);

          animation-name: vision;
          animation-duration: 2.5s;

          .ContentText {
            margin-left: 10px;
            margin-top: 10px;
            margin-bottom: 10px;
            margin-right: 10px;
            padding-left: 15px;
            border-left: solid 5px white;
            border-bottom-left-radius: 10px;
            border-top-left-radius: 10px;
            filter: drop-shadow(0 0 5px black);

            .Title {
              color: #ffba08;
              filter: drop-shadow(0 0 5px black);
            }

            .Info {
              color: white;
              font-size: 14pt;
            }
          }
        }
      }
    }

    .ValuesContent {
      margin-left: 10px;
      margin-right: 10px;

      h1 {
        text-align: center;
        font-weight: bold;
        filter: drop-shadow(0 0 4px gray);
      }

      .CardValues {
        display: grid;
        grid-template-columns: 24% 24% 24% 24%;
        column-gap: 10px;
        animation-name: ValuesFrame;
        animation-duration: 2.5s;

        .CardHeaderItem {
          .HeaderTitle {
            color: black;
            filter: drop-shadow(0 0 2px #0078d4);
            text-align: center;
            font-size: 16pt;
          }
        }

        .CardContent {
          font-size: 12pt;
        }
      }
    }
  }

  @media only screen and (min-width: 992px) {
    .BlocsContainer {
      background-image: url(${HomeViewPic});
      background-size: cover;

      .BlocLeftMission {
        display: grid;
        grid-template-columns: 60% 40%;
        padding-top: 50px;
        padding-bottom: 50px;

        .ContentBloc {
          border-bottom-right-radius: 10px;
          border-top-right-radius: 10px;
          background: #0078d4;
          border: solid 5px #0078d4;
          filter: drop-shadow(0 0 5px black);
          animation-name: mission;
          animation-duration: 2.5s;

          .ContentText {
            margin-left: 10px;
            margin-top: 10px;
            margin-bottom: 10px;
            margin-right: 10px;
            padding-left: 15px;
            border-left: solid 5px white;
            border-bottom-left-radius: 10px;
            border-top-left-radius: 10px;
            filter: drop-shadow(0 0 5px black);
            .Title {
              color: #ffba08;
              filter: drop-shadow(0 0 5px black);
            }

            .Info {
              color: white;
              font-size: 16pt;
            }
          }
        }
      }

      .BlocRightMission {
        display: grid;
        grid-template-columns: 40% 60%;
        padding-top: 50px;
        padding-bottom: 50px;

        .ContentBloc {
          border-bottom-left-radius: 10px;
          border-top-left-radius: 10px;
          background: #0078d4;
          border: solid 5px #0078d4;
          filter: drop-shadow(0 0 5px black);

          animation-name: vision;
          animation-duration: 2.5s;

          .ContentText {
            margin-left: 10px;
            margin-top: 10px;
            margin-bottom: 10px;
            margin-right: 10px;
            padding-left: 15px;
            border-left: solid 5px white;
            border-bottom-left-radius: 10px;
            border-top-left-radius: 10px;
            filter: drop-shadow(0 0 5px black);

            .Title {
              color: #ffba08;
              filter: drop-shadow(0 0 5px black);
            }

            .Info {
              color: white;
              font-size: 16pt;
            }
          }
        }
      }
    }

    .ValuesContent {
      margin-left: 10px;
      margin-right: 10px;

      h3 {
        text-align: center;
        font-weight: bold;
        filter: drop-shadow(0 0 4px gray);
      }

      .CardValues {
        display: grid;
        grid-template-columns: 24% 24% 24% 24%;
        column-gap: 10px;
        animation-name: ValuesFrame;
        animation-duration: 2.5s;

        .CardHeaderItem {
          .HeaderTitle {
            color: black;
            filter: drop-shadow(0 0 2px #0078d4);
            text-align: center;
          }
        }

        .CardContent {
          font-size: 14pt;
        }
      }
    }
  }

  @media only screen and (min-width: 1200px) {
    .BlocsContainer {
      background-image: url(${HomeViewPic});
      background-size: cover;

      .BlocLeftMission {
        display: grid;
        grid-template-columns: 60% 40%;
        padding-top: 50px;
        padding-bottom: 50px;

        .ContentBloc {
          border-bottom-right-radius: 10px;
          border-top-right-radius: 10px;
          background: #0078d4;
          border: solid 5px #0078d4;
          filter: drop-shadow(0 0 5px black);
          animation-name: mission;
          animation-duration: 2.5s;

          .ContentText {
            margin-left: 10px;
            margin-top: 10px;
            margin-bottom: 10px;
            margin-right: 10px;
            padding-left: 15px;
            border-left: solid 5px white;
            border-bottom-left-radius: 10px;
            border-top-left-radius: 10px;
            filter: drop-shadow(0 0 5px black);
            .Title {
              color: #ffba08;
              filter: drop-shadow(0 0 5px black);
            }

            .Info {
              color: white;
              font-size: 16pt;
            }
          }
        }
      }

      .BlocRightMission {
        display: grid;
        grid-template-columns: 40% 60%;
        padding-top: 50px;
        padding-bottom: 50px;

        .ContentBloc {
          border-bottom-left-radius: 10px;
          border-top-left-radius: 10px;
          background: #0078d4;
          border: solid 5px #0078d4;
          filter: drop-shadow(0 0 5px black);

          animation-name: vision;
          animation-duration: 2.5s;

          .ContentText {
            margin-left: 10px;
            margin-top: 10px;
            margin-bottom: 10px;
            margin-right: 10px;
            padding-left: 15px;
            border-left: solid 5px white;
            border-bottom-left-radius: 10px;
            border-top-left-radius: 10px;
            filter: drop-shadow(0 0 5px black);

            .Title {
              color: #ffba08;
              filter: drop-shadow(0 0 5px black);
            }

            .Info {
              color: white;
              font-size: 16pt;
            }
          }
        }
      }
    }

    .ValuesContent {
      margin-left: 10px;
      margin-right: 10px;

      h3 {
        text-align: center;
        font-weight: bold;
        filter: drop-shadow(0 0 4px gray);
      }

      .CardValues {
        display: grid;
        grid-template-columns: 24% 24% 24% 24%;
        column-gap: 10px;
        animation-name: ValuesFrame;
        animation-duration: 2.5s;

        .CardHeaderItem {
          .HeaderTitle {
            color: black;
            filter: drop-shadow(0 0 2px #0078d4);
            text-align: center;
          }
        }

        .CardContent {
          font-size: 14pt;
        }
      }
    }
  }
`;
