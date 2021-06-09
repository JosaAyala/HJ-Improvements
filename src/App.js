import "./App.css";
import { FooterComponent } from "./components/Footer/Footer";
import MainScreenComponent from "./components/MainScreen";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import HomeScreenComponent from "./components/HomeScreen";
import ContactScreenComponent from "./components/ContactScreen";
import GalleryScreenComponent from "./components/GalleryScreen";
import ServicesScreenComponent from "./components/ServicesScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <MainScreenComponent />
        <Switch>
          <Route exact path="/" component={HomeScreenComponent} />
          <Redirect to="/" />
          <Route exact path="/home" component={HomeScreenComponent} />
          <Route exact path="/services" component={ServicesScreenComponent} />
          <Route exact path="/gallery" component={GalleryScreenComponent} />
          <Route exact path="/contact" component={ContactScreenComponent} />
        </Switch>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
