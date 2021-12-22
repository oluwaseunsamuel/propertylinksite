import { useState } from "react";
import AboutSection from "../components/AboutSection";
import Announce from "../components/Announce";
import Calculator from "../components/Calculator";
import Contact from "../components/Contact";
//import FlexPaySection from "../components/FlexPaySection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ServiceSection from "../components/ServiceSection";
import Sidebar from "../components/Sidebar";
import {homeObjOne, homeObjTwo, homeObjThree} from "../Data"
import Slider from "../components/Slider";
import { SliderData } from "../Data";
import SliderMobile from "../components/SliderMobile";
import CopyRightFooter from "../components/CopyRightFooter";
import NewsLetter from "../components/NewsLetter";
import FlexPaymentSec from "../components/FlexPaymentSec";

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Announce />
      <Navbar toggle={toggle} />
      <Slider />
      <SliderMobile slides={SliderData} />
      <AboutSection {...homeObjThree}/>
      <FlexPaymentSec {...homeObjOne}/>
      <ServiceSection {...homeObjTwo}/>
      <Calculator />
      <Contact />
      <NewsLetter />
      <Footer />
      <CopyRightFooter />
    </>
  );
};

export default Home;
