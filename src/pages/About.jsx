import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announce from "../components/Announce";
import Footer from "../components/Footer";
import CopyRightFooter from "../components/CopyRightFooter";
import NewsLetter from "../components/NewsLetter";
import Contact from "../components/Contact";

const Container = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7fff5;
`;

const About = () => {
  return (
    <>
      <Announce />
      <Navbar />
      <Container>
        <h1>About us page</h1>
      </Container>
      <Contact />
      <NewsLetter />
      <Footer />
      <CopyRightFooter />
    </>
  );
};

export default About;
