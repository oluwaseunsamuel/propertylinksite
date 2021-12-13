import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";

const Container = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Register = () => {
  return (
    <>
      <Navbar />
      <Container>
        <h1>Register page</h1>
      </Container>
    </>
  );
};

export default Register;
