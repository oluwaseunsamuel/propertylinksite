import React from "react";
import styled from "styled-components";
import Announce from "../components/Announce";
import CopyRightFooter from "../components/CopyRightFooter";
import RegisterLoginNav from "../components/RegisterLoginNav";

const Container = styled.div`
  width: 100%;
  height: 80vh;
  background: #036403;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 30%;
  padding: 20px;
  background-color: white;
`;
const Title = styled.h1`
  font-size: 28px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  font-size: 18px;
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  cursor: pointer;
  background-color: darkgreen;
  color: white;
  font-size: 18px;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <>
      <Announce />
      <RegisterLoginNav />
      <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form>
            <Input placeholder="Email" />
            <Input placeholder="Password" />
            <Button>LOGIN</Button>
            <Link>DO NOT YOU REMEMBER THE PASSWORD</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
          </Form>
        </Wrapper>
      </Container>
      <CopyRightFooter />
    </>
  );
};

export default Login;
