import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";

const Container = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Container>
        <h1>Dashboard page</h1>
      </Container>
    </>
  );
};

export default Dashboard;
