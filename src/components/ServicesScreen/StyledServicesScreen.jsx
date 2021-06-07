import styled from "styled-components";

export const ServicesScreenStyled = styled.div`
  .ServiceScreenContainer {
    @keyframes hoverImg {
      100% {
        transform: scale(1.2);
        height: 400px;
      }
    }

    @keyframes ServiceCardFrame {
      0% {
        opacity: 0.2;
      }
      25% {
        opacity: 0.4;
      }

      50% {
        opacity: 0.6;
      }

      75% {
        opacity: 0.8;
      }
      100% {
        opacity: 1;
      }
    }

    @keyframes SubServiceCardFrame {
      0% {
        transform: scaleY(0);
        transform-origin: top;
        transition: transform 0.02s ease;
      }
      50% {
        transform: scaleY(0);
        transform-origin: top;
        transition: transform 0.02s ease;
      }
      100% {
        transform: scaleY(1);
        transform-origin: top;
        transition: transform 0.02s ease;
      }
    }

    @media only screen and (max-width: 600px) {
      margin-top: 10px;
      margin-left: 20px;
      margin-right: 20px;
      .ContainerItemsServices {
        display: flex;
        flex-direction: column;
        column-gap: 10px;
        row-gap: 20px;

        .CardDiv {
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          row-gap: 10px;
          justify-content: center;
          align-items: center;

          .CardHeader {
            .CardTitle {
              position: sticky;
              z-index: 100;
              font-weight: bolder;
              text-align: center;
              text-shadow: 2px 2px 4px hsl(0deg 0% 0% / 25%);
              font-size: 12pt;
            }
          }

          .ImgService {
            height: 400px;
            width: 100%
            object-fit: cover;
            display: flex;
            justify-content: center;
            align-content: center;
            align-items: center;
            justify-items: center;
            animation-name: ServiceCardFrame;
            animation-duration: 2s;
          }
        }

        .CardDiv:hover {
          .CardTitle {
            position: sticky;
            z-index: 100;
            text-transform: uppercase;
            color: #ffc107;
            font-size: 12pt;
            text-shadow: 2px 2px 4px hsl(0deg 0% 0% / 25%);
          }

          .ImgService {
            height: 400px;
            animation: hoverImg 0.8s;
            animation-fill-mode: forwards;
            transform-origin: left top;
          }
        }

        .CardServiceItem {
          .CardImageItem {
            object-fit: cover;
            height: 400px;
          }

          .CardHeaderContent {
            font-weight: bolder;
            text-align: center;
            text-shadow: 2px 2px 4px hsl(0deg 0% 0% / 25%);
          }

          .CardImageItem:hover {
            animation: shakePic 0.8s;
            filter: drop-shadow(0 0 5px black);
            height: 400px;
          }
        }

        .CardServiceItem:hover {
          text-transform: uppercase;
          color: #ffc107;
          font-size: 24pt;
          text-shadow: 2px 2px 4px hsl(0deg 0% 0% / 25%);
        }
      }

      .ContainerItemsSubservices {
        display: flex;
        flex-direction: column;
        column-gap: 10px;
        animation-name: SubServiceCardFrame;
        animation-duration: 2s;

        .ItemSubservice {
          .HeaderSubService {
            color: white;
            padding: 10px;
            padding-left: 20px;
            background-color: #014f86;
            display: grid;
            grid-template-columns: 10% 85%;
            column-gap: 20px;
            filter: drop-shadow(0 4mm 3mm black);
            z-index: 100;
            position: relative;

            h3 {
              display: grid;
              font-weight: bold;
              font-size: 16pt;
              text-align: left;
            }

            svg {
              width: 28px;
              height: 28px;
            }

            .ItemSvg {
              color: white;
              padding: 5px;
              width: 32px;
              height: 32px;
            }
          }

          .ContentSubservice {
            padding-top: 20px;
            margin-left: 10px;
            margin-right: 10px;
            font-size: 10pt;
            color: black;
            text-align: left;
          }
        }
      }
    }

    @media only screen and (min-width: 600px) {
      margin-top: 10px;
      margin-left: 20px;
      margin-right: 10px;
      .ContainerItemsServices {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 10px;
        row-gap: 20px;

        .CardDiv {
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          row-gap: 10px;

          .CardHeader {
            .CardTitle {
              position: sticky;
              z-index: 100;
              font-weight: bolder;
              text-align: center;
              text-shadow: 2px 2px 4px hsl(0deg 0% 0% / 25%);
              font-size: 16pt;
            }
          }

          .ImgService {
            height: 400px;
            width: 280px;
            object-fit: cover;
            display: flex;
            justify-content: center;
            align-content: center;
            align-items: center;
            justify-items: center;
            animation-name: ServiceCardFrame;
            animation-duration: 2s;
          }
        }

        .CardDiv:hover {
          .CardTitle {
            position: sticky;
            z-index: 100;
            text-transform: uppercase;
            color: #ffc107;
            font-size: 16pt;
            text-shadow: 2px 2px 4px hsl(0deg 0% 0% / 25%);
          }

          .ImgService {
            height: 400px;
            animation: hoverImg 0.8s;
            animation-fill-mode: forwards;
            transform-origin: left top;
          }
        }

        .CardServiceItem {
          .CardImageItem {
            object-fit: cover;
            height: 400px;
          }

          .CardHeaderContent {
            font-weight: bolder;
            text-align: center;
            text-shadow: 2px 2px 4px hsl(0deg 0% 0% / 25%);
          }

          .CardImageItem:hover {
            animation: shakePic 0.8s;
            filter: drop-shadow(0 0 5px black);
            height: 400px;
          }
        }

        .CardServiceItem:hover {
          text-transform: uppercase;
          color: #ffc107;
          font-size: 24pt;
          text-shadow: 2px 2px 4px hsl(0deg 0% 0% / 25%);
        }
      }

      .ContainerItemsSubservices {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 10px;
        animation-name: SubServiceCardFrame;
        animation-duration: 2s;

        .ItemSubservice {
          .HeaderSubService {
            color: white;
            padding: 10px;
            padding-left: 20px;
            background-color: #014f86;
            display: grid;
            grid-template-columns: 15% 85%;
            column-gap: 20px;
            justify-content: center;
            align-content: center;
            align-items: center;
            filter: drop-shadow(0 4mm 3mm black);
            z-index: 100;
            position: relative;

            h3 {
              display: grid;
              font-weight: bold;
              font-size: 16pt;
              text-align: left;
            }

            svg {
              width: 32px;
              height: 32px;
            }

            .ItemSvg {
              color: white;
              padding: 5px;
              width: 32px;
              height: 32px;
            }
          }

          .ContentSubservice {
            padding-top: 20px;
            margin-left: 10px;
            margin-right: 10px;
            font-size: 10pt;
            color: black;
            text-align: left;
          }
        }
      }
    }

    @media only screen and (min-width: 768px) {
      margin-top: 10px;
      margin-left: 20px;
      margin-right: 20px;
      .ContainerItemsServices {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 10px;

        .CardDiv {
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          row-gap: 10px;

          .CardHeader {
            .CardTitle {
              position: sticky;
              z-index: 100;
              font-weight: bolder;
              text-align: center;
              text-shadow: 2px 2px 4px hsl(0deg 0% 0% / 25%);
              font-size: 18pt;
            }
          }

          .ImgService {
            height: 400px;
            width: 280px;
            object-fit: cover;
            display: flex;
            justify-content: center;
            align-content: center;
            align-items: center;
            justify-items: center;
            animation-name: ServiceCardFrame;
            animation-duration: 2s;
          }
        }

        .CardDiv:hover {
          .CardTitle {
            position: sticky;
            z-index: 100;
            text-transform: uppercase;
            color: #ffc107;
            font-size: 18pt;
            text-shadow: 2px 2px 4px hsl(0deg 0% 0% / 25%);
          }

          .ImgService {
            height: 400px;
            animation: hoverImg 0.8s;
            animation-fill-mode: forwards;
            transform-origin: left top;
          }
        }

        .CardServiceItem {
          .CardImageItem {
            object-fit: cover;
            height: 400px;
          }

          .CardHeaderContent {
            font-weight: bolder;
            text-align: center;
            text-shadow: 2px 2px 4px hsl(0deg 0% 0% / 25%);
          }

          .CardImageItem:hover {
            animation: shakePic 0.8s;
            filter: drop-shadow(0 0 5px black);
            height: 400px;
          }
        }

        .CardServiceItem:hover {
          text-transform: uppercase;
          color: #ffc107;
          font-size: 24pt;
          text-shadow: 2px 2px 4px hsl(0deg 0% 0% / 25%);
        }
      }

      .ContainerItemsSubservices {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 10px;
        margin-left: 25px;
        margin-right: 25px;
        animation-name: SubServiceCardFrame;
        animation-duration: 2s;

        .ItemSubservice {
          .HeaderSubService {
            color: white;
            padding: 10px;
            padding-left: 20px;
            background-color: #014f86;
            display: grid;
            grid-template-columns: auto 1fr;
            column-gap: 20px;
            justify-content: center;
            align-content: center;
            align-items: center;
            filter: drop-shadow(0 4mm 3mm black);
            z-index: 100;
            position: relative;

            h3 {
              display: grid;
              font-weight: bold;
              font-size: 16pt;
              text-align: left;
            }

            svg {
              width: 36px;
              height: 36px;
            }

            .ItemSvg {
              color: white;
              padding: 5px;
              width: 36px;
              height: 36px;
            }
          }

          .ContentSubservice {
            padding-top: 20px;
            margin-left: 10px;
            margin-right: 10px;
            font-size: 10pt;
            color: black;
            text-align: left;
          }
        }
      }
    }

    @media only screen and (min-width: 992px) {
      margin-top: 10px;
      margin-left: 20px;
      margin-right: 20px;
      .ContainerItemsServices {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        column-gap: 10px;
        row-gap: 20px;

        .CardDiv {
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          row-gap: 10px;

          .CardHeader {
            .CardTitle {
              position: sticky;
              z-index: 100;
              font-weight: bolder;
              text-align: center;
              text-shadow: 2px 2px 4px hsl(0deg 0% 0% / 25%);
              font-size: 15pt;
            }
          }

          .ImgService {
            height: 400px;
            width: 280px;
            object-fit: cover;
            display: flex;
            justify-content: center;
            align-content: center;
            align-items: center;
            justify-items: center;
            animation-name: ServiceCardFrame;
            animation-duration: 2s;
          }
        }

        .CardDiv:hover {
          .CardTitle {
            position: sticky;
            z-index: 100;
            text-transform: uppercase;
            color: #ffc107;
            font-size: 20pt;
            text-shadow: 2px 2px 4px hsl(0deg 0% 0% / 25%);
            font-size: 15pt;
          }

          .ImgService {
            height: 400px;
            animation: hoverImg 0.8s;
            animation-fill-mode: forwards;
            transform-origin: left top;
          }
        }

        .CardServiceItem {
          .CardImageItem {
            object-fit: cover;
            height: 400px;
          }

          .CardHeaderContent {
            /* font-size: 18pt; */
            font-weight: bolder;
            text-align: center;
            text-shadow: 2px 2px 4px hsl(0deg 0% 0% / 25%);
          }

          .CardImageItem:hover {
            animation: shakePic 0.8s;
            filter: drop-shadow(0 0 5px black);
            height: 400px;
          }
        }

        .CardServiceItem:hover {
          text-transform: uppercase;
          color: #ffc107;
          font-size: 24pt;
          text-shadow: 2px 2px 4px hsl(0deg 0% 0% / 25%);
        }
      }

      .ContainerItemsSubservices {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        column-gap: 20px;
        margin-left: 25px;
        margin-right: 25px;
        animation-name: SubServiceCardFrame;
        animation-duration: 2s;

        .ItemSubservice {
          .HeaderSubService {
            color: white;
            padding: 10px;
            padding-left: 20px;
            background-color: #014f86;
            display: grid;
            grid-template-columns: auto 1fr;
            column-gap: 20px;
            /* justify-content: center;
            align-content: center;
            align-items: center; */
            /* border-radius: 20px; */
            filter: drop-shadow(0 4mm 3mm black);
            z-index: 100;
            position: relative;

            h3 {
              display: grid;
              font-weight: bold;
              font-size: 16pt;
              text-align: left;
            }

            svg {
              width: 36px;
              height: 36px;
            }

            .ItemSvg {
              color: white;
              padding: 5px;
              width: 36px;
              height: 36px;
            }
          }

          .ContentSubservice {
            padding-top: 20px;
            margin-left: 10px;
            margin-right: 10px;
            font-size: 10pt;
            color: black;
            text-align: left;
          }
        }
      }
    }

    @media only screen and (min-width: 1200px) {
      margin-top: 10px;
      margin-left: 20px;
      margin-right: 20px;
      .ContainerItemsServices {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        column-gap: 10px;

        .CardDiv {
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          row-gap: 10px;

          .CardHeader {
            .CardTitle {
              position: sticky;
              z-index: 100;
              font-weight: bolder;
              text-align: center;
              text-shadow: 2px 2px 4px hsl(0deg 0% 0% / 25%);
            }
          }

          .ImgService {
            height: 400px;
            width: 280px;
            object-fit: cover;
            display: flex;
            justify-content: center;
            align-content: center;
            align-items: center;
            justify-items: center;
            animation-name: ServiceCardFrame;
            animation-duration: 2s;
          }
        }

        .CardDiv:hover {
          .CardTitle {
            position: sticky;
            z-index: 100;
            text-transform: uppercase;
            color: #ffc107;
            font-size: 20pt;
            text-shadow: 2px 2px 4px hsl(0deg 0% 0% / 25%);
          }

          .ImgService {
            height: 400px;
            animation: hoverImg 0.8s;
            animation-fill-mode: forwards;
            transform-origin: left top;
          }
        }

        .CardServiceItem {
          .CardImageItem {
            object-fit: cover;
            height: 400px;
          }

          .CardHeaderContent {
            /* font-size: 18pt; */
            font-weight: bolder;
            text-align: center;
            text-shadow: 2px 2px 4px hsl(0deg 0% 0% / 25%);
          }

          .CardImageItem:hover {
            animation: shakePic 0.8s;
            filter: drop-shadow(0 0 5px black);
            height: 400px;
          }
        }

        .CardServiceItem:hover {
          text-transform: uppercase;
          color: #ffc107;
          font-size: 24pt;
          text-shadow: 2px 2px 4px hsl(0deg 0% 0% / 25%);
        }
      }

      .ContainerItemsSubservices {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        column-gap: 20px;
        margin-left: 25px;
        margin-right: 25px;
        animation-name: SubServiceCardFrame;
        animation-duration: 2s;

        .ItemSubservice {
          .HeaderSubService {
            color: white;
            padding: 10px;
            padding-left: 20px;
            background-color: #014f86;
            display: grid;
            grid-template-columns: auto 1fr;
            column-gap: 20px;
            filter: drop-shadow(0 4mm 3mm black);
            z-index: 100;
            position: relative;

            h3 {
              display: grid;
              font-weight: bold;
              text-align: left;
            }

            .ItemSvg {
              color: white;
              padding: 5px;
            }
          }

          .ContentSubservice {
            padding-top: 20px;
            margin-left: 10px;
            margin-right: 10px;
            font-size: 12pt;
            color: black;
            text-align: left;
          }
        }
      }
    }
  }
`;
