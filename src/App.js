// import logo from "./images/image 7.svg"
import "./App.css";
import Advantage from "./components/Advantage/Advantage";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Install from "./components/Install/Install";
import JoinCom from "./components/JoinComm/JoinCom";
import KeyAdv from "./components/KeyAdvantage/KeyAdv";
import Navbar from "./components/Navbar/Navbar";
import ProductAndService from "./components/ProductAndService/ProductAndService";

function App() {
  return (
    <div className="app_conntainer">
      <Navbar />
      <Hero/>
      <Advantage />
      <ProductAndService />
      <KeyAdv />
      <JoinCom />
      <Install />
      <Footer />
    </div>
  );
}

export default App;
