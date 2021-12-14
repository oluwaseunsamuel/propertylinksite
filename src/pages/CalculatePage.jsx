import React from "react";
import styled from "styled-components";
import CopyRightFooter from "../components/CopyRightFooter";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Announce from "../components/Announce";

const Container = styled.div`
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7fff5;
  font-weight: 500;
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
  margin-top: 20px;
  margin-bottom: 35px;
  max-width: 55%;
  text-align: center;
`;
const ServiceRight = styled.div`
  flex: 1;
`;
const ServiceLeft = styled.div`
  flex: 1;
`;

const CalculatePage = () => {
  return (
    <>
      <Announce />
      <Navbar />
      <Container>
        <h1>Calculator Page</h1>
      </Container>
      <ServiceWrapper>
        <ServiceTitle>Calculate Your Progess</ServiceTitle>
        <ServiceDesc>
          From our flexible payment plan you can easily track your progress so far and the amount contributed and what is left to be paid.
        </ServiceDesc>
        <ServiceRight></ServiceRight>
        <ServiceLeft></ServiceLeft>
      </ServiceWrapper>
      <Footer />
      <CopyRightFooter />
    </>
  );
};

export default CalculatePage;
