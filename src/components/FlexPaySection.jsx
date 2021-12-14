import styled from "styled-components";

const FlexContainer = styled.div`
  padding: 60px;
  background: ;
`;
const FlexWrapper = styled.div``;
const FlexHeader = styled.h2``;
const FlexDesc = styled.p``;

const FlexPaySection = () => {
  return (
    <FlexContainer>
      <FlexWrapper>
        <FlexHeader>Daily, Weekly, Monthly or One-Off</FlexHeader>
        <FlexDesc>
          With flexi-real estate option, you get to decide how you pay for your
          property
        </FlexDesc>
      </FlexWrapper>
    </FlexContainer>
  );
};

export default FlexPaySection;
