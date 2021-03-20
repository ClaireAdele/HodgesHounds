import './App.css';
import { Router } from "@reach/router";
import HomePage from "./components/Homepage/HomePage";
import Contact from "./components/Contact/Contact";
import PricingServices from "./components/PricingServices/PricingServices";
import Banner from "./Banner";
import NavBar from "./NavBar";
import BottomInfo from "./BottomInfo";
import LoginOwner from "./components/Login/LoginOwner";

function App() {
  return (
    <div className="App">
      <header>
      <Banner />
      <NavBar />
      </header>
      <Router>
        <HomePage path="/" />
        <LoginOwner path="/login" />
        <Contact path="/contact" />
        <PricingServices path="/pricing_services" />
      </Router>
      <BottomInfo />
    </div>
  );
}

export default App;
