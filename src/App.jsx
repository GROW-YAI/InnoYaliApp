import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import Features from "./components/Features";
import Products from "./components/Products";
import Process from "./components/Process";
import Innovator from "./components/Innovator";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSlider />
      <Features />
      <Products />
      <Process />
      <Innovator />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
