import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import Products from "./components/Products";
import Process from "./components/Process";
import Innovator from "./components/Innovator";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="min-h-screen font-Montserrat">
      <Navbar />
      <HeroSlider />
      <Products />
      <Process />
      <Innovator />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
