import Announce from "../components/Announce";
import Calculator from "../components/Calculator";
import Contact from "../components/Contact";
import CopyRightFooter from "../components/CopyRightFooter";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <>
      <Announce />
      <Navbar />
      <Slider />
      <Calculator />
      <Contact />
      <NewsLetter />
      <Footer />
      <CopyRightFooter />
    </>
  );
};

export default Home;
