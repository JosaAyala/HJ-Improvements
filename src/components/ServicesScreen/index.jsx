import React from "react";
import { ServicesScreenStyled } from "./StyledServicesScreen";
import AcoustingCeilling from "./../../assets/AcoustingCeilling.jpg";
import drywall2 from "./../../assets/drywall2.jpg";
import Framing from "./../../assets/Framing.jpg";
import PaintPic from "./../../assets/PaintPic.jpeg";
import floorPic from "./../../assets/floorPic.jpeg";
import { CardService } from "./CardService";
import { SubServiceCard } from "./SubServiceCard";
import {
  PAINT_PATH_ICON,
  KITCHEN_PATH_ICON,
  CARPENTRY_PATH_ICON,
  BATHROOMS_PATH_ICON,
  DOORS_PATH_ICON,
  FLOORING_PATH_ICON,
  WINDOWS_PATH_ICON,
  BATHROOM_CONTENT,
  CARPENTRY_CONTENT,
  DOORS_CONTENT,
  FLOORING_CONTENT,
  KITCHEN_CONTENT,
  PAINTING_CONTENT,
  WINDOW_CONTENT,
} from "./constants";

export class ServicesScreenComponent extends React.Component {
  render() {
    return (
      <ServicesScreenStyled>
        <br className="" />
        <div className="ServiceScreenContainer">
          <div className="ContainerItemsServices">
            <CardService
              pictureValue={AcoustingCeilling}
              serviceTitle="Acousting Ceiling"
            />

            <CardService pictureValue={drywall2} serviceTitle="Drywall" />

            <CardService pictureValue={Framing} serviceTitle="Framing" />

            <CardService pictureValue={PaintPic} serviceTitle="Painting" />

            <CardService pictureValue={floorPic} serviceTitle="Floor" />
          </div>
          <br className="" />
          <div className="ContainerItemsSubservices">
            <SubServiceCard
              titleText="Kitchens"
              contentText={KITCHEN_CONTENT}
              pathIcon={KITCHEN_PATH_ICON}
              iconId=""
            />
            <SubServiceCard
              titleText="Bathrooms"
              contentText={BATHROOM_CONTENT}
              pathIcon={BATHROOMS_PATH_ICON}
              iconId=""
            />
            <SubServiceCard
              titleText="Carpentry"
              contentText={CARPENTRY_CONTENT}
              pathIcon={CARPENTRY_PATH_ICON}
              iconId=""
            />
            <SubServiceCard
              titleText="Doors"
              contentText={DOORS_CONTENT}
              pathIcon={DOORS_PATH_ICON}
              iconId=""
            />
            <SubServiceCard
              titleText="Painting"
              contentText={PAINTING_CONTENT}
              pathIcon={PAINT_PATH_ICON}
              iconId=""
            />
            <SubServiceCard
              titleText="Flooring"
              contentText={FLOORING_CONTENT}
              pathIcon={FLOORING_PATH_ICON}
              iconId=""
            />
            <SubServiceCard
              titleText="Windows"
              contentText={WINDOW_CONTENT}
              pathIcon={WINDOWS_PATH_ICON}
              iconId="bi bi-shop-window"
            />
          </div>
        </div>
        <br className="" />
      </ServicesScreenStyled>
    );
  }
}

export default ServicesScreenComponent;
