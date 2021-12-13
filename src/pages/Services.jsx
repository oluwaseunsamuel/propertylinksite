import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announce from "../components/Announce";

const Container = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7fff5;
`;

const Services = () => {
  return (
    <>
      <Announce />
      <Navbar />
      <Container>
        <h1>Service us page</h1>
      </Container>
    </>
  );
};

export default Services;
