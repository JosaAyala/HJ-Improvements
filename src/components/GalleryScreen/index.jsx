import React from 'react';
import { Carousel } from 'react-bootstrap';
import { GalleryScreenStyled } from './StyledGalleryScreen';
import PaintedHouse from './../../assets/PaintedHouse.jpeg';
import PaintPic from './../../assets/PaintPic.jpeg';
import KitchenPic from './../../assets/KitchenPic.jpeg';
import drywall from './../../assets/drywall.jpg';
import BathroomJobCompleted from './../../assets/BathroomJobCompleted.jpeg';
import PaintingJobComplete from './../../assets/PaintingJobComplete.jpeg';
import Framing2 from './../../assets/Framing2.jpg';
import BathroomJob from './../../assets/BathroomJob.jpeg';
import Kitchen2 from './../../assets/Kitchen2.jpeg';
import PersonalJob1 from './../../assets/PersonalJob1.jpeg';


export class GalleryScreenComponent extends React.Component {
    render() {
        return (
            <GalleryScreenStyled>
                <h3 className="TitleJob">Our Process</h3>
                <div className="GalleryJobs">
                    <img src={Framing2} alt="FramingJob" className="ImgItem" />
                    <img src={drywall} alt="DrywallJob" className="ImgItem" />
                    <img src={BathroomJob} alt="BathroomJob" className="ImgItem" />
                    <img src={PersonalJob1} alt="PersonalJob1" className="ImgItem" />
                </div>
                <br className="" />
                <h3 className="TitleJob">Projects</h3>
                <div className="GalleryJobs">
                    <img src={KitchenPic} alt="KitchenPic" className="ImgItem" />
                    <img src={PaintPic} alt="PaintPic" className="ImgItem" />
                    <img src={PaintingJobComplete} alt="PaintingJobComplete" className="ImgItem" />
                    <img src={BathroomJobCompleted} alt="BathroomJobCompleted" className="ImgItem" />
                    <img src={Kitchen2} alt="Kitchen2" className="ImgItem" />
                    <img src={PaintedHouse} alt="PaintedHouse" className="ImgItem" />
                </div>
                <br className="" />
            </GalleryScreenStyled>
        );
    }
}

export default GalleryScreenComponent;