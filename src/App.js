import "./App.css";
import { FooterComponent } from "./components/Footer/Footer";
import MainScreenComponent from "./components/MainScreen";
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreenComponent from "./components/HomeScreen";
import ContactScreenComponent from "./components/ContactScreen";
import GalleryScreenComponent from "./components/GalleryScreen";
import ServicesScreenComponent from "./components/ServicesScreen";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainScreenComponent />
        <Route exact path="/" component={HomeScreenComponent} />
        <Route exact path="/home" component={HomeScreenComponent} />
        <Route exact path="/services" component={ServicesScreenComponent} />
        <Route exact path="/gallery" component={GalleryScreenComponent} />
        <Route exact path="/contact" component={ContactScreenComponent} />
        <FooterComponent />
      </BrowserRouter>{" "}
    </div>
  );
}

export default App;
