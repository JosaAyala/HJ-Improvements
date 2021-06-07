import React from "react";
import { MainScreenStyled } from "./StyledMainScreen";
import NavHeader from "../NavHeader";

export class MainScreenComponent extends React.Component {
  render() {
    return (
      <MainScreenStyled>
        <NavHeader />
      </MainScreenStyled>
    );
  }
}

export default MainScreenComponent;
