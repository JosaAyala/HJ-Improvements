import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Navbar, Nav, Button } from 'react-bootstrap';
import { MainScreenStyled } from './StyledMainScreen';
import ContactScreenComponent from '../ContactScreen';
import HomeScreenComponent from '../HomeScreen';
import GalleryScreenComponent from '../GalleryScreen';
import ServicesScreenComponent from '../ServicesScreen';
import logo02 from './../../assets/logo02.png';
import NavHeader from '../NavHeader';


export class MainScreenComponent extends React.Component {
    render() {
        return (
            <MainScreenStyled>
                <NavHeader />
            </MainScreenStyled>);
    }
}

export default MainScreenComponent;