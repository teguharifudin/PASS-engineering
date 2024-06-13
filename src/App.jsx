import Navbar from "./components/Navbar";
import ScrollTop from "./components/ScrollTop";
import Hero from "./components/Hero";
import Product from "./components/Product";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-primary text-white w-full h-full">
      <Navbar />
      <ScrollTop />
      <div className="container px-5 md:px-10 mx-auto">
        <Hero />
        <Product />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;