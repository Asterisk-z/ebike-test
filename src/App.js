import "./App.css";
import Bikes from "./components/Bikes";
import BikeTypes from "./components/BikeTypes";
import Footer from "./components/Footer";
import Header from './components/Header';
import HybridBikes from "./components/HybridBikes";
import Navigation from "./components/Navigation";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <Bikes />
      <BikeTypes />
      <HybridBikes />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
