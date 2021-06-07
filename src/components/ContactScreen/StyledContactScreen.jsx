import styled from "styled-components";

export const ContactScreenStyled = styled.div`
  @keyframes CardContactDefault {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 0.2;
    }
    50% {
      opacity: 0.4;
    }
    75% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }

  @media only screen and (max-width: 600px) {
    margin-top: 5px;
    margin-bottom: 20px;
    padding-left: 10px;
    padding-right: 10px;

    .ContactScreenContainer {
      animation-name: CardContactDefault;
      animation-duration: 1.5s;
      animation-fill-mode: forwards;
      display: grid;

      .DivInformation {
        align-items: center;

        .CardContainer {
          padding: 20px;
          .HeaderCardContact {
            background: #0078d4;
            color: #ffba08;
            font-weight: bold;
            display: flex;
            text-align: center;
            justify-items: center;
            align-content: center;
            justify-content: center;
            border-radius: 10px;
            border-left: solid 5px #0078d4;
            border-top: solid 5px #0078d4;
            border-bottom: solid 1px #a0aeb2;
            border-right: solid 5px #0078d4;
            /* margin-left: 5px;
                margin-right: 5px;
                padding-top: 10px;
                padding-bottom: 10px; */

            .TitleContact {
            }
          }

          .ContentCardContact {
            background: #f3f2f1;
            border-radius: 10px;
            border-left: solid 5px #0078d4;
            border-top: solid 1px #a0aeb2;
            border-bottom: solid 1px #a0aeb2;
            border-right: solid 5px #0078d4;

            display: grid;
            column-gap: 10px;

            .ItemContent {
              display: flex;
              flex-direction: column;
              padding: 15px;
              justify-content: center;
              justify-items: center;
              align-content: center;
              align-items: center;

              .ImgItem {
                width: 75px;
                height: 75px;
              }

              .TextContent {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                align-content: flex-start;
                justify-content: center;
                justify-items: flex-start;
                word-break: break-all;
                font-size: 14pt;
                font-weight: bold;
              }
            }
          }

          .FooterCardContact {
            background: #0078d4;
            color: #ffba08;
            font-weight: bold;
            font-size: 16pt;
            border-radius: 10px;
            border-left: solid 5px #0078d4;
            border-bottom: solid 5px #0078d4;
            border-top: solid 1px #a0aeb2;
            border-right: solid 5px #0078d4;

            display: flex;
            text-align: center;
            justify-items: center;
            align-content: center;
            justify-content: center;
            align-items: center;
            padding-top: 5px;
            padding-bottom: 5px;
          }
        }
      }
    }
  }

  @media only screen and (min-width: 600px) {
    margin-top: 5px;
    margin-bottom: 20px;
    padding-left: 10px;
    padding-right: 10px;
    .ContactScreenContainer {
      animation-name: CardContactDefault;
      animation-duration: 1.5s;
      animation-fill-mode: forwards;
      display: grid;

      .DivInformation {
        align-items: center;

        .CardContainer {
          padding: 20px;

          .HeaderCardContact {
            background: #0078d4;
            color: #ffba08;
            font-weight: bold;
            display: flex;
            text-align: center;
            justify-items: center;
            align-content: center;
            justify-content: center;
            border-radius: 10px;
            border-left: solid 5px #0078d4;
            border-top: solid 5px #0078d4;
            border-bottom: solid 1px #a0aeb2;
            border-right: solid 5px #0078d4;

            .TitleContact {
            }
          }

          .ContentCardContact {
            background: #f3f2f1;
            border-radius: 10px;
            border-left: solid 5px #0078d4;
            border-top: solid 1px #a0aeb2;
            border-bottom: solid 1px #a0aeb2;
            border-right: solid 5px #0078d4;

            display: grid;
            grid-template-columns: 50% 50%;
            column-gap: 10px;

            .ItemContent {
              display: flex;
              flex-direction: column;
              padding: 15px;
              justify-content: center;
              justify-items: center;
              align-content: center;
              align-items: center;

              .ImgItem {
                width: 100px;
                height: 100px;
              }

              .TextContent {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                align-content: flex-start;
                justify-content: center;
                justify-items: flex-start;
                word-break: break-all;
                font-size: 14pt;
                font-weight: bold;
              }
            }
          }

          .FooterCardContact {
            background: #0078d4;
            color: #ffba08;
            font-weight: bold;
            font-size: 16pt;
            border-radius: 10px;
            border-left: solid 5px #0078d4;
            border-bottom: solid 5px #0078d4;
            border-top: solid 1px #a0aeb2;
            border-right: solid 5px #0078d4;

            display: flex;
            text-align: center;
            justify-items: center;
            align-content: center;
            justify-content: center;
            align-items: center;
            padding-top: 5px;
            padding-bottom: 5px;
          }
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .ContactScreenContainer {
      animation-name: CardContactDefault;
      animation-duration: 1.5s;
      animation-fill-mode: forwards;
      display: grid;

      .DivInformation {
        align-items: center;

        .MapDiv {
          display: flex;
          justify-content: center;
          justify-items: center;
          align-content: center;
          align-items: center;
          height: 400px;
          width: 400px;
        }

        .CardContainer {
          padding: 20px;
          .HeaderCardContact {
            background: #0078d4;
            color: #ffba08;
            font-weight: bold;
            display: flex;
            text-align: center;
            justify-items: center;
            align-content: center;
            justify-content: center;
            border-radius: 10px;
            border-left: solid 5px #0078d4;
            border-top: solid 5px #0078d4;
            border-bottom: solid 1px #a0aeb2;
            border-right: solid 5px #0078d4;
            /* margin-left: 5px;
                margin-right: 5px;
                padding-top: 10px;
                padding-bottom: 10px; */

            .TitleContact {
            }
          }

          .ContentCardContact {
            background: #f3f2f1;
            border-radius: 10px;
            border-left: solid 5px #0078d4;
            border-top: solid 1px #a0aeb2;
            border-bottom: solid 1px #a0aeb2;
            border-right: solid 5px #0078d4;

            display: grid;
            grid-template-columns: 50% 50%;
            column-gap: 10px;

            .ItemContent {
              display: grid;
              grid-template-columns: 40% 60%;
              padding: 15px;

              .ImgItem {
                width: 100px;
                height: 100px;
              }

              .TextContent {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                align-content: flex-start;
                justify-content: center;
                justify-items: flex-start;
                word-break: break-all;
              }
            }
          }

          .FooterCardContact {
            background: #0078d4;
            color: #ffba08;
            font-weight: bold;
            font-size: 16pt;
            border-radius: 10px;
            border-left: solid 5px #0078d4;
            border-bottom: solid 5px #0078d4;
            border-top: solid 1px #a0aeb2;
            border-right: solid 5px #0078d4;

            display: flex;
            text-align: center;
            justify-items: center;
            align-content: center;
            justify-content: center;
            align-items: center;
            padding-top: 5px;
            padding-bottom: 5px;
          }
        }
      }
    }
  }

  @media only screen and (min-width: 992px) {
    .ContactScreenContainer {
      animation-name: CardContactDefault;
      animation-duration: 1.5s;
      animation-fill-mode: forwards;
      display: grid;

      .DivInformation {
        align-items: center;

        .MapDiv {
          display: flex;
          justify-content: center;
          justify-items: center;
          align-content: center;
          align-items: center;
          height: 400px;
          width: 400px;
        }

        .CardContainer {
          padding: 20px;
          .HeaderCardContact {
            background: #0078d4;
            color: #ffba08;
            font-weight: bold;
            display: flex;
            text-align: center;
            justify-items: center;
            align-content: center;
            justify-content: center;
            border-radius: 10px;
            border-left: solid 5px #0078d4;
            border-top: solid 5px #0078d4;
            border-bottom: solid 1px #a0aeb2;
            border-right: solid 5px #0078d4;
            /* margin-left: 5px;
                margin-right: 5px;
                padding-top: 10px;
                padding-bottom: 10px; */

            .TitleContact {
            }
          }

          .ContentCardContact {
            background: #f3f2f1;
            border-radius: 10px;
            border-left: solid 5px #0078d4;
            border-top: solid 1px #a0aeb2;
            border-bottom: solid 1px #a0aeb2;
            border-right: solid 5px #0078d4;

            display: grid;
            grid-template-columns: 50% 50%;
            column-gap: 10px;

            .ItemContent {
              display: grid;
              grid-template-columns: 40% 60%;
              padding: 20px;

              .ImgItem {
                width: 150px;
                height: 150px;
              }

              .TextContent {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                align-content: flex-start;
                justify-content: center;
                justify-items: flex-start;
                word-break: break-all;
                font-size: 18pt;
                font-weight: bold;
              }
            }
          }

          .FooterCardContact {
            background: #0078d4;
            color: #ffba08;
            font-weight: bold;
            font-size: 16pt;
            border-radius: 10px;
            border-left: solid 5px #0078d4;
            border-bottom: solid 5px #0078d4;
            border-top: solid 1px #a0aeb2;
            border-right: solid 5px #0078d4;

            display: flex;
            text-align: center;
            justify-items: center;
            align-content: center;
            justify-content: center;
            align-items: center;
            padding-top: 5px;
            padding-bottom: 5px;
          }
        }
      }
    }
  }
  @media only screen and (min-width: 1200px) {
    margin-top: 20px;
    margin-bottom: 20px;
    padding-left: 150px;
    padding-right: 150px;
    .ContactScreenContainer {
      animation-name: CardContactDefault;
      animation-duration: 1.5s;
      animation-fill-mode: forwards;
      display: grid;

      .DivInformation {
        align-items: center;

        .MapDiv {
          display: flex;
          justify-content: center;
          justify-items: center;
          align-content: center;
          align-items: center;
          height: 400px;
          width: 400px;
        }

        .CardContainer {
          padding: 20px;
          .HeaderCardContact {
            background: #0078d4;
            color: #ffba08;
            font-weight: bold;
            display: flex;
            text-align: center;
            justify-items: center;
            align-content: center;
            justify-content: center;
            border-radius: 10px;
            border-left: solid 5px #0078d4;
            border-top: solid 5px #0078d4;
            border-bottom: solid 1px #a0aeb2;
            border-right: solid 5px #0078d4;
            /* margin-left: 5px;
                margin-right: 5px;
                padding-top: 10px;
                padding-bottom: 10px; */

            .TitleContact {
            }
          }

          .ContentCardContact {
            background: #f3f2f1;
            border-radius: 10px;
            border-left: solid 5px #0078d4;
            border-top: solid 1px #a0aeb2;
            border-bottom: solid 1px #a0aeb2;
            border-right: solid 5px #0078d4;

            display: grid;
            grid-template-columns: 50% 50%;
            column-gap: 10px;

            .ItemContent {
              display: grid;
              grid-template-columns: 40% 60%;
              padding: 20px;

              .ImgItem {
                width: 150px;
                height: 150px;
              }

              .TextContent {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                align-content: flex-start;
                justify-content: center;
                justify-items: flex-start;
                word-break: break-all;
                font-size: 18pt;
                font-weight: bold;
              }
            }
          }

          .FooterCardContact {
            background: #0078d4;
            color: #ffba08;
            font-weight: bold;
            font-size: 16pt;
            border-radius: 10px;
            border-left: solid 5px #0078d4;
            border-bottom: solid 5px #0078d4;
            border-top: solid 1px #a0aeb2;
            border-right: solid 5px #0078d4;

            display: flex;
            text-align: center;
            justify-items: center;
            align-content: center;
            justify-content: center;
            align-items: center;
            padding-top: 5px;
            padding-bottom: 5px;
          }
        }
      }
    }
  }
`;
