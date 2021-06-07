import "./App.css";
import { FooterComponent } from "./components/Footer/Footer";
import MainScreenComponent from "./components/MainScreen";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainScreenComponent />
        <FooterComponent />
      </BrowserRouter>{" "}
    </div>
  );
}

export default App;
