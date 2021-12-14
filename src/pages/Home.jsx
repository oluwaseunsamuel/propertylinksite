import AboutSection from "../components/AboutSection";
import Announce from "../components/Announce";
import Calculator from "../components/Calculator";
import Contact from "../components/Contact";
import CopyRightFooter from "../components/CopyRightFooter";
import FlexPaySection from "../components/FlexPaySection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import ServiceSection from "../components/ServiceSection";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <>
      <Announce />
      <Navbar />
      <Slider />
      <FlexPaySection />
      <AboutSection />
      <ServiceSection />
      <Calculator />
      <Contact />
      <NewsLetter />
      <Footer />
      <CopyRightFooter />
    </>
  );
};

export default Home;
