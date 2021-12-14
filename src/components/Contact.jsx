import { Email, LocationOn, Phone, WhatsApp } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
`;
const Wrapper = styled.div`
  padding: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FormContainer = styled.div`
  width: 50%;
`;
const Title = styled.h1`
  margin: 50px;
`;
const Form = styled.form`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
`;
const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Input = styled.input`
  width: 300px;
  padding: 15px;
  font-size: 18px;
`;
const TextArea = styled.textarea`
  width: 300px;
  height: 62%;
  padding: 15px;
  font-size: 18px;
`;
const Button = styled.button`
  border: none;
  padding: 15px;
  background-color: darkgreen;
  color: white;
  font-size: 20px;
  margin-top: 20px;
  cursor: pointer;
`;

const AddressContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  //align-items: center;
`;
const AddressIntroText = styled.p`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 400;
  //padding-left: 60px;
`;
const AddressItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;
const AddressText = styled.span`
  margin-right: 15px;
`;

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Title>
            Question? <br /> You Can Get in Touch
          </Title>
          <Form>
            <LeftForm>
              <Input placeholder="Name" />
              <Input placeholder="Email" />
              <Input placeholder="Subject" />
            </LeftForm>
            <RightForm>
              <TextArea placeholder="Your Message" />
              <Button>Send</Button>
            </RightForm>
          </Form>
        </FormContainer>
        <AddressContainer>
          <AddressIntroText>
            Visit any of our offices in lagos or contact us via our support
            channels. Our representatives are always available to support you.
          </AddressIntroText>
          <AddressItem>
            <LocationOn style={{ marginRight: "14px" }} />
            <AddressText>
              Plot1B Block 77, Basheer Shittu Magodo GRA, Phase II, Shangisha,
              Lagos, Nigeria
            </AddressText>
          </AddressItem>
          <AddressItem>
            <Phone style={{ marginRight: "14px" }} />
            <AddressText>+234(01)841 7729</AddressText>
            <AddressText>+234(0)810 235 0235</AddressText>
            <AddressText>+44(0) 792 703 7450</AddressText>
          </AddressItem>
          <AddressItem>
            <Email style={{ marginRight: "14px" }} />
            <AddressText>Info@propertylinkng.com</AddressText>
            <AddressText>request@propertylinkng.com</AddressText>
          </AddressItem>
          <AddressItem>
            <WhatsApp style={{ marginRight: "14px" }} />
            <AddressText>+234(0)809 964 1139</AddressText>
          </AddressItem>
        </AddressContainer>
      </Wrapper>
    </Container>
  );
};

export default Contact;
