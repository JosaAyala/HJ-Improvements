import styled from "styled-components";

export const GalleryScreenStyled = styled.div`
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;

  @keyframes Images {
    0% {
      transform: scale(0);
      transform-origin: left top;
      transition: transform 0.01s ease;
    }

    50% {
      transform: scale(0);
      transform-origin: left top;
      transition: transform 0.01s ease;
    }

    100% {
      transform: scale(1);
      transform-origin: left top;
      transition: transform 0.02s ease;
    }
  }
  .TitleJob {
    text-align: center;
  }

  @media only screen and (max-width: 600px) {
    .GalleryJobs {
      display: flex;
      flex-direction: column;
      row-gap: 10px;
      justify-content: center;
      align-content: center;
      justify-items: center;

      .ImgItem {
        width: 75%;
        height: auto;
        margin: auto auto;
        object-fit: cover;
        filter: drop-shadow(0 0 1mm black);
        animation-name: Images;
        animation-fill-mode: forwards;
        animation-duration: 1.5s;
      }
    }
  }

  @media only screen and (min-width: 600px) {
    .GalleryJobs {
      display: grid;
      grid-template-columns: 1fr 1fr;
      row-gap: 10px;
      column-gap: 10px;
      justify-content: center;
      align-content: center;
      justify-items: center;

      .ImgItem {
        width: 275px;
        height: 310px;
        margin: auto auto;
        object-fit: cover;
        filter: drop-shadow(0 0 1mm black);
        animation-name: Images;
        animation-fill-mode: forwards;
        animation-duration: 1.5s;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .GalleryJobs {
      display: grid;
      grid-template-columns: 1fr 1fr;
      row-gap: 10px;
      justify-content: center;
      align-content: center;
      justify-items: center;

      .ImgItem {
        width: 300px;
        height: 335px;
        margin: auto auto;
        object-fit: cover;
        filter: drop-shadow(0 0 1mm black);
        animation-name: Images;
        animation-fill-mode: forwards;
        animation-duration: 1.5s;
      }
    }
  }

  @media only screen and (min-width: 992px) {
    .GalleryJobs {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      column-gap: 5px;
      row-gap: 10px;
      justify-content: center;
      align-content: center;
      justify-items: center;

      .ImgItem {
        width: 230px;
        height: 275px;
        margin: auto auto;
        object-fit: cover;
        filter: drop-shadow(0 0 1mm black);
        animation-name: Images;
        animation-fill-mode: forwards;
        animation-duration: 1.5s;
      }
    }
  }

  @media only screen and (min-width: 1200px) {
    .GalleryJobs {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      column-gap: 10px;
      row-gap: 10px;
      justify-content: center;
      align-content: center;
      justify-items: center;

      .ImgItem {
        width: 275px;
        height: 350px;
        margin: auto auto;
        object-fit: cover;
        filter: drop-shadow(0 0 1mm black);
        animation-name: Images;
        animation-fill-mode: forwards;
        animation-duration: 1.5s;
      }
    }
  }
`;
