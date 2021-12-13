import styled from "styled-components";

const Container = styled.div`
  height: 10%;
  background-color: #111;
  color: lightgray;
`;
const Wrapper = styled.div`
  padding: 20px 60px;
  display: flex;
  justify-content: space-between;
`;
const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
`;
const ListItem = styled.li`
  margin-right: 20px;
`;
const Copyright = styled.span``;

const CopyRightFooter = () => {
  return (
    <Container>
      <Wrapper>
        <List>
          <ListItem>Guide</ListItem>
          <ListItem>Support</ListItem>
          <ListItem>API</ListItem>
          <ListItem>Community</ListItem>
        </List>
        <Copyright>
          Copyright © 2021 Property Link | All Right Reserved
        </Copyright>
      </Wrapper>
    </Container>
  );
};

export default CopyRightFooter;
