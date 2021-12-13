import { Send } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  background-color: #f7fff5;
  height: 40vh;
`;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;
`;
const Desc = styled.div`
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 20px;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  cursor: pointer;
  border: none;
  background-color: darkgreen;
  color: white;
`;

const NewsLetter = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Newsletter</Title>
        <Desc>
          Be the first to know of our various offer by providing us your email
          and will get in touch
        </Desc>
        <InputContainer>
          <Input placeholder="Your Email" />
          <Button>
            <Send />
          </Button>
        </InputContainer>
      </Wrapper>
    </Container>
  );
};

export default NewsLetter;
