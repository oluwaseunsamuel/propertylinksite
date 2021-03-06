import React from "react";
import styled from "styled-components";
import Contact from "../components/Contact";
import CopyRightFooter from "../components/CopyRightFooter";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Announce from "../components/Announce";

const Container = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7fff5;
`;
const ServiceWrapper = styled.div`
  padding: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const ServiceTitle = styled.h2`
  font-weight: 400;
  font-size: 36px;
`;
const ServiceDesc = styled.p`
  margin-top: 30px;
  max-width: 55%;
  text-align: center;
`;
const ServiceInfoContainer = styled.div`
  width: 100%;
  padding: 30px 50px;
`;
const ServiceInfoWrap = styled.div`
  margin-top: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ServiceRight = styled.div`
  flex: 1;
`;
const ServiceLeft = styled.div`
  flex: 1;
`;

const Services = () => {
  return (
    <>
      <Announce />
      <Navbar />
      <Container>
        <h1>Service us page</h1>
      </Container>
      <ServiceWrapper>
        <ServiceTitle>How can you Engage us</ServiceTitle>
        <ServiceDesc>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
          accusantium veritatis labore consequuntur repudiandae reprehenderit
          corrupti neque. Ipsa itaque dicta fuga.
        </ServiceDesc>
        <ServiceInfoContainer>
          <ServiceInfoWrap>
            <ServiceRight>R</ServiceRight>
            <ServiceLeft>L</ServiceLeft>
          </ServiceInfoWrap>
        </ServiceInfoContainer>
      </ServiceWrapper>
      <Contact />
      <NewsLetter />
      <Footer />
      <CopyRightFooter />
    </>
  );
};

export default Services;
