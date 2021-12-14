import styled from "styled-components";
import { PlaylistAddCheck } from "@material-ui/icons";
import Picture1 from "../components/Assets/Picture1.jpg";

const Container = styled.div`
  padding: 60px;
`;
const ServiceSectionWrapper = styled.div``;
const SectionHeader = styled.h2`
  font-weight: 300;
  font-size: 35px;
`;
const SectionDesc = styled.p`
  margin-top: 25px;
  width: 35%;
`;
const SectionWrapper = styled.div`
  margin-top: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Section1 = styled.div`
  flex: 1;
  width: 100%;
`;
const Image = styled.img`
  width: 80%;
  justify-content: center;
`;
const Section2 = styled.div`
  flex: 1;
`;
const Section2Wrap = styled.div``;
const Section2Header = styled.h2`
  font-weight: 200;
  font-size: 24px;
  margin-bottom: 18px;
`;
const Section2Desc = styled.p`
  display: flex;
  font-size: 18px;
  margin-bottom: 20px;
`;
const Button = styled.button`
  padding: 10px 20px;
  background-color: darkgreen;
  color: white;
  font-size: 18px;
  cursor: pointer;
`;

const ServiceSection = () => {
  return (
    <Container>
      <ServiceSectionWrapper>
        <SectionHeader>How you can Engaged Us</SectionHeader>
        <SectionDesc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          nam maxime quae asperiores repellendus deserunt alias vitae, fugit
          quas ab ut hic placeat unde porro pariatur odit ipsam, eveniet esse.
        </SectionDesc>
        <SectionWrapper>
          <Section1>
            <Image src={Picture1} alt="" />
          </Section1>
          <Section2>
            <Section2Wrap>
              <Section2Header>
                This are Highlight of our Services
              </Section2Header>
              <Section2Desc>
                <PlaylistAddCheck style={{ marginRight: "10px" }} />
                Construction And Design
              </Section2Desc>
              <Section2Desc>
                <PlaylistAddCheck style={{ marginRight: "10px" }} />
                Property Management
              </Section2Desc>
              <Section2Desc>
                <PlaylistAddCheck style={{ marginRight: "10px" }} />
                Property Sale, Rental And Development
              </Section2Desc>
              <Section2Desc>
                <PlaylistAddCheck style={{ marginRight: "10px" }} />
                Property Registration Services
              </Section2Desc>
              <Section2Desc>
                <PlaylistAddCheck style={{ marginRight: "10px" }} />
                Legal Advice
              </Section2Desc>
              <Section2Desc>
                <PlaylistAddCheck style={{ marginRight: "10px" }} />
                Property Registration Services
              </Section2Desc>
              <Button>Read More</Button>
            </Section2Wrap>
          </Section2>
        </SectionWrapper>
      </ServiceSectionWrapper>
    </Container>
  );
};

export default ServiceSection;
