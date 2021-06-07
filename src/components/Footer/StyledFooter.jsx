import styled from "styled-components";

export const FooterStyled = styled.div`
  border-top: 10px solid #014f86;
  border-bottom: 20px solid #ffba08;
  background-color: #f3f2f1;

  @media only screen and (max-width: 600px) {
    .ContainerFooter {
      margin-top: 10px;
      margin-bottom: 10px;
      display: flex;
      flex-direction: column;
      column-gap: 10px;

      .LeftSideFooter {
        display: flex;
        justify-content: center;
        align-items: center;
        .ImgLogo {
          padding: 10px;
          height: 200px;
          width: 250px;
        }
      }
      .RightSideFooter {
        display: flex;
        flex-direction: column;
        column-gap: 5px;

        .LineSeparator {
          background-color: #bebbb8;
        }

        .TitleItem {
          font-size: 14pt;
          font-weight: bolder;
          text-align: center;
          color: white;
          /* text-shadow: 1.5px 1.5px #bebbb8; */
          background-color: #014f86;
          filter: drop-shadow(0 2mm 2mm black);
        }

        .InformationContent {
          list-style-position: outside;
          font-size: 10pt;
          .ItemLi {
            display: flex;
            flex-direction: row;
            column-gap: 5px;
            align-items: center;
          }
        }

        .ServiceContent {
          list-style-position: outside;
          font-size: 10pt;
          .ItemLi {
            display: flex;
            flex-direction: row;
            column-gap: 5px;
            align-items: center;
          }
        }

        .CopyrightsContent {
          font-weight: 600;
          text-align: center;
          font-size: 12pt;
        }
      }
    }
  }

  @media only screen and (min-width: 600px) {
    .ContainerFooter {
      margin-top: 10px;
      margin-bottom: 10px;
      display: grid;
      grid-template-columns: 25% 73%;
      column-gap: 10px;

      .LeftSideFooter {
        .ImgLogo {
          padding: 10px;
          height: 130px;
          width: 150px;
        }
      }
      .RightSideFooter {
        display: grid;
        grid-template-columns: 50% 50%;
        column-gap: 5px;

        .LineSeparator {
          background-color: #bebbb8;
        }

        .TitleItem {
          font-size: 12pt;
          font-weight: bolder;
          text-align: center;
          color: white;
          background-color: #014f86;
          filter: drop-shadow(0 2mm 2mm black);
        }

        .InformationContent {
          font-size: 10pt;
          list-style-position: outside;
          list-style-type: none;
          margin-left: -20px;
          .ItemLi {
            display: grid;
            grid-template-columns: 12% 80%;
            column-gap: 5px;
            align-items: center;

            a {
              word-break: break-all;
            }

            div {
              word-break: break-all;
            }
          }
        }

        .ServiceContent {
          font-size: 10pt;
          list-style-position: outside;
          list-style-type: none;

          .ItemLi {
            display: flex;
            flex-direction: row;
            column-gap: 5px;
            align-items: center;
          }
        }

        .CopyrightsContent {
          font-weight: 600;
          text-align: center;
          font-size: 10pt;
          word-break: break-all;
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .ContainerFooter {
      margin-top: 10px;
      margin-bottom: 10px;
      display: grid;
      grid-template-columns: 25% 73%;
      column-gap: 10px;

      .LeftSideFooter {
        .ImgLogo {
          padding: 10px;
          height: 150px;
          width: 190px;
        }
      }
      .RightSideFooter {
        display: grid;
        grid-template-columns: 48% 48%;
        row-gap: 10px;
        column-gap: 5px;

        .LineSeparator {
          display: none;
        }

        .TitleItem {
          font-size: 14pt;
          font-weight: bolder;
          text-align: center;
          color: white;
          background-color: #014f86;
          filter: drop-shadow(0 2mm 2mm black);
        }

        .InformationContent {
          list-style-position: outside;
          .ItemLi {
            display: flex;
            flex-direction: row;
            column-gap: 5px;
            align-items: center;
          }
        }

        .ServiceContent {
          list-style-position: outside;
          .ItemLi {
            display: flex;
            flex-direction: row;
            column-gap: 5px;
            align-items: center;
          }
        }

        .CopyrightsContent {
          font-weight: 600;
          text-align: center;
        }
      }
    }
  }

  @media only screen and (min-width: 992px) {
    .ContainerFooter {
      margin-top: 10px;
      margin-bottom: 10px;
      display: grid;
      grid-template-columns: 20% 78%;
      column-gap: 10px;

      .LeftSideFooter {
        .ImgLogo {
          padding: 10px;
          height: 175px;
          width: 200px;
        }
      }
      .RightSideFooter {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 5px;

        .LineSeparator {
          background-color: #bebbb8;
        }

        .TitleItem {
          font-size: 16pt;
          font-weight: bolder;
          text-align: center;
          color: white;
          background-color: #014f86;
          filter: drop-shadow(0 2mm 2mm black);
        }

        .InformationContent {
          list-style-position: outside;
          .ItemLi {
            display: flex;
            flex-direction: row;
            column-gap: 5px;
            align-items: center;
          }
        }

        .ServiceContent {
          list-style-position: outside;
          .ItemLi {
            display: flex;
            flex-direction: row;
            column-gap: 5px;
            align-items: center;
          }
        }

        .CopyrightsContent {
          font-weight: 600;
          text-align: center;
        }
      }
    }
  }

  @media only screen and (min-width: 1200px) {
    .ContainerFooter {
      margin-top: 10px;
      margin-bottom: 10px;
      display: grid;
      grid-template-columns: 20% 77%;
      column-gap: 10px;

      .LeftSideFooter {
        .ImgLogo {
          padding: 10px;
          height: 200px;
          width: 250px;
        }
      }
      .RightSideFooter {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 5px;

        .LineSeparator {
          background-color: #bebbb8;
        }

        .TitleItem {
          font-size: 18pt;
          font-weight: bolder;
          text-align: center;
          color: white;
          /* text-shadow: 1.5px 1.5px #bebbb8; */
          background-color: #014f86;
          filter: drop-shadow(0 2mm 2mm black);
        }

        .InformationContent {
          list-style-position: outside;
          .ItemLi {
            display: flex;
            flex-direction: row;
            column-gap: 5px;
            align-items: center;
          }
        }

        .ServiceContent {
          list-style-position: outside;
          .ItemLi {
            display: flex;
            flex-direction: row;
            column-gap: 5px;
            align-items: center;
          }
        }

        .CopyrightsContent {
          font-weight: 600;
          text-align: center;
        }
      }
    }
  }
`;
