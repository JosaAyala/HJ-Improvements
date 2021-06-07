import React from "react";
import { HomeScreenStyled } from "./StyledHomeScreen";
import { ValueCard } from "./CardValue";
import {
  DISCIPLINE_VALUE,
  FAIRNESS_VALUE,
  HONESTY_VALUE,
  RESPECT_VALUE,
} from "./Constants";

export class HomeScreenComponent extends React.Component {
  render() {
    return (
      <HomeScreenStyled>
        <hr className="" />

        <br className="" />
        <div className="BlocsContainer">
          <div className="BlocLeftMission">
            <div className="ContentBloc">
              <div className="ContentText">
                <h2 className="Title">Mission</h2>
                <p className="Info">
                  To be a leading construction company in quality and efficient
                  service. Offering guaranteed work to all our clients, managing
                  to satisfy their needs in a timely manner in the commercial
                  and residential area.
                </p>
              </div>
            </div>
            <div />
          </div>
          <br className="" />
          <div className="BlocRightMission">
            <div />
            <div className="ContentBloc">
              <div className="ContentText">
                <h2 className="Title">Vision</h2>
                <p className="Info">
                  To offer the client full satisfaction of their main needs,
                  obtaining preference, trust and loyalty. Focused on meeting
                  your requirements.
                </p>
              </div>
            </div>
          </div>
        </div>

        <br className="" />
        <div className="ValuesContent">
          <h3 className="">OUR VALUES</h3>
          <br className="" />
          <div className="CardValues">
            <ValueCard valueTitle="Respect" contentValue={RESPECT_VALUE} />
            <ValueCard valueTitle="Honesty" contentValue={HONESTY_VALUE} />
            <ValueCard valueTitle="Fairness" contentValue={FAIRNESS_VALUE} />
            <ValueCard
              valueTitle="Discipline"
              contentValue={DISCIPLINE_VALUE}
            />
          </div>
        </div>
        <br className="" />
      </HomeScreenStyled>
    );
  }
}

export default HomeScreenComponent;
