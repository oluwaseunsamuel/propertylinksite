import React from "react";
import styled from "styled-components";
import Announce from "../components/Announce";
import Contact from "../components/Contact";
import CopyRightFooter from "../components/CopyRightFooter";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";

const Container = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7fff5;
`;

const ViewEstate = () => {
  return (
    <>
      <Announce />
      <Navbar />
      <Container>
        <h1>This is View Estate Page</h1>
      </Container>
      <Contact />
      <NewsLetter />
      <Footer />
      <CopyRightFooter />
    </>
  );
};

export default ViewEstate;
