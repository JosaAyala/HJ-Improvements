import React from "react";
import { GalleryScreenStyled } from "./StyledGalleryScreen";
import drywall from "./../../assets/drywall.jpg";
import drywall2 from "./../../assets/drywall2.jpg";
import drywall3 from "./../../assets/drywall3.jpg";
import drywall4 from "./../../assets/drywall4.jpeg";

import Bathroom_1_1 from "./../../assets/Bathroom_1_1.jpg";
import Bathroom_1_2 from "./../../assets/Bathroom_1_2.jpeg";
import Bathroom_1_3 from "./../../assets/Bathroom_1_3.jpg";
import Bathroom_1_4 from "./../../assets/Bathroom_1_4.jpg";

import Painting_1_1 from "./../../assets/Painting_1_1.jpg";
import Painting_1_2 from "./../../assets/Painting_1_2.jpeg";
import Painting_1_3 from "./../../assets/Painting_1_3.jpeg";
import Painting_1_4 from "./../../assets/Painting_1_4.jpeg";

import Glass_1_1 from "./../../assets/Glass_1_1.jpg";
import Glass_1_2 from "./../../assets/Glass_1_2.jpg";
import Glass_1_3 from "./../../assets/Glass_1_3.jpg";

import Kitchen_1_1 from "./../../assets/Kitchen_1_1.jpeg";
import Kitchen_1_2 from "./../../assets/Kitchen_1_2.jpeg";
import Kitchen_1_3 from "./../../assets/Kitchen_1_3.jpeg";

import Gabinets_1_1 from "./../../assets/Gabinets_1_1.jpg";
import Gabinets_1_2 from "./../../assets/Gabinets_1_2.jpg";
import Gabinets_1_3 from "./../../assets/Gabinets_1_3.jpg";

import floorPic from "./../../assets/floorPic.jpeg";
import floorPic2 from "./../../assets/floorPic2.jpeg";

import Framing1 from "./../../assets/Framing1.jpg";
import Framing2 from "./../../assets/Framing2.jpg";

import AcoustingCeilling_1_1 from "./../../assets/AcoustingCeilling_1_1.jpg";
import AcoustingCeilling_1_2 from "./../../assets/AcoustingCeilling_1_2.jpg";

import Carpentry_1_2 from "./../../assets/Carpentry_1_2.jpg";

export class GalleryScreenComponent extends React.Component {
  render() {
    return (
      <GalleryScreenStyled>
        <h3 className="TitleJob">BATHROOMS</h3>
        <div className="GalleryJobs">
          <img src={Bathroom_1_1} alt="BATHROOM Job 01" className="ImgItem" />
          <img src={Bathroom_1_2} alt="BATHROOM Job 02" className="ImgItem" />
          <img src={Bathroom_1_3} alt="BATHROOM Job 03" className="ImgItem" />
          <img src={Bathroom_1_4} alt="BATHROOM Job 04" className="ImgItem" />
        </div>
        <br className="" />
        <h3 className="TitleJob">DRYWALL</h3>
        <div className="GalleryJobs">
          <img src={drywall} alt="Drywall Job 01" className="ImgItem" />
          <img src={drywall2} alt="Drywall Job 02" className="ImgItem" />
          <img src={drywall3} alt="Drywall Job 03" className="ImgItem" />
          <img src={drywall4} alt="Drywall Job 04" className="ImgItem" />
        </div>
        <br className="" />
        <h3 className="TitleJob">PAINTING</h3>
        <div className="GalleryJobs">
          <img src={Painting_1_1} alt="PAINTING Job 01" className="ImgItem" />
          <img src={Painting_1_2} alt="PAINTING Job 02" className="ImgItem" />
          <img src={Painting_1_3} alt="PAINTING Job 03" className="ImgItem" />
          <img src={Painting_1_4} alt="PAINTING Job 04" className="ImgItem" />
        </div>
        <br className="" />
        <h3 className="TitleJob">KITCHEN</h3>
        <div className="GalleryJobs">
          <img src={Kitchen_1_1} alt="KITCHEN Job 01" className="ImgItem" />
          <img src={Kitchen_1_2} alt="KITCHEN Job 02" className="ImgItem" />
          <img src={Kitchen_1_3} alt="KITCHEN Job 03" className="ImgItem" />
        </div>
        <br className="" />
        <h3 className="TitleJob">GLASS</h3>
        <div className="GalleryJobs">
          <img src={Glass_1_1} alt="GLASS Job 01" className="ImgItem" />
          <img src={Glass_1_2} alt="GLASS Job 02" className="ImgItem" />
          <img src={Glass_1_3} alt="GLASS Job 03" className="ImgItem" />
        </div>
        <br className="" />
        <h3 className="TitleJob">CABINETS</h3>
        <div className="GalleryJobs">
          <img src={Gabinets_1_1} alt="CABINETS Job 01" className="ImgItem" />
          <img src={Gabinets_1_2} alt="CABINETS Job 02" className="ImgItem" />
          <img src={Gabinets_1_3} alt="CABINETS Job 03" className="ImgItem" />
        </div>
        <br className="" />
        <h3 className="TitleJob">FLOOR</h3>
        <div className="GalleryJobs">
          <img src={floorPic} alt="FLOOR Job 01" className="ImgItem" />
          <img src={floorPic2} alt="FLOOR Job 02" className="ImgItem" />
        </div>
        <br className="" />
        <h3 className="TitleJob">FRAMING</h3>
        <div className="GalleryJobs">
          <img src={Framing1} alt="FRAMING Job 01" className="ImgItem" />
          <img src={Framing2} alt="FRAMING Job 02" className="ImgItem" />
        </div>
        <br className="" />
        <h3 className="TitleJob">ACOUSTING CEILING</h3>
        <div className="GalleryJobs">
          <img
            src={AcoustingCeilling_1_1}
            alt="ACOUSTING CEILING Job 01"
            className="ImgItem"
          />
          <img
            src={AcoustingCeilling_1_2}
            alt="ACOUSTING CEILING Job 02"
            className="ImgItem"
          />
        </div>
        <br className="" />
        <h3 className="TitleJob">CARPENTRY</h3>
        <div className="GalleryJobs">
          <img src={Carpentry_1_2} alt="CARPENTRY Job" className="ImgItem" />
        </div>
        <br className="" />
      </GalleryScreenStyled>
    );
  }
}

export default GalleryScreenComponent;
