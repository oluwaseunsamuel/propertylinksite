import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";

const Container = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Login = () => {
  return (
    <>
      <Navbar />
      <Container>
        <h1>Login us page</h1>
      </Container>
    </>
  );
};

export default Login;
