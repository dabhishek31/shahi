import "./App.css";

import Header from "./components/header/header";
import {
  MainWrapper,
  BrownDivider,
  ServicesContainer,
  FlexCustom,
  PinkDivider,
  ServicesHeading,
  BackgroundServiceIllus,
  ServiceCard,
  SizedBox,
  HoldCards,
  CardContainer,
  CardTextContainer,
} from "./app_style";

import marriage from "./assets/images/Intersect.png";
import mehendi from "./assets/images/mehendi.png";
import travel from "./assets/images/travel.png";
import catering from "./assets/images/catering.png";
import decoration from "./assets/images/decoration.png";
import photography from "./assets/images/photography.png";

function App() {
  return (
    <MainWrapper>
      <Header />
      <BrownDivider />
      <PinkDivider />
      <ServicesContainer>
        <BackgroundServiceIllus>
          <FlexCustom justify="center">
            <ServicesHeading>OUR SERVICES</ServicesHeading>
          </FlexCustom>
          <SizedBox height="24px" />
          <HoldCards justify="space-around">
            <ServiceCard>
              <FlexCustom justify="center">
                <CardContainer justify="center">
                  <img src={marriage} />
                  <FlexCustom justify="center">
                    <CardTextContainer>Marriage & Reception</CardTextContainer>
                  </FlexCustom>
                </CardContainer>
              </FlexCustom>
            </ServiceCard>
            <ServiceCard>
              <FlexCustom justify="center">
                <CardContainer justify="center">
                  <img src={mehendi} />
                  <FlexCustom justify="center">
                    <CardTextContainer>Make Up & Mehendi</CardTextContainer>
                  </FlexCustom>
                </CardContainer>
              </FlexCustom>
            </ServiceCard>
            <ServiceCard>
              <FlexCustom justify="center">
                <CardContainer justify="center">
                  <img src={travel} />
                  <FlexCustom justify="center">
                    <CardTextContainer>Tours & Travels</CardTextContainer>
                  </FlexCustom>
                </CardContainer>
              </FlexCustom>
            </ServiceCard>
            <ServiceCard>
              <FlexCustom justify="center">
                <CardContainer justify="center">
                  <img src={catering} />
                  <FlexCustom justify="center">
                    <CardTextContainer>Catering</CardTextContainer>
                  </FlexCustom>
                </CardContainer>
              </FlexCustom>
            </ServiceCard>
            <ServiceCard>
              <FlexCustom justify="center">
                <CardContainer justify="center">
                  <img src={photography} />
                  <FlexCustom justify="center">
                    <CardTextContainer>Photography</CardTextContainer>
                  </FlexCustom>
                </CardContainer>
              </FlexCustom>
            </ServiceCard>
            <ServiceCard>
              <FlexCustom justify="center">
                <CardContainer justify="center">
                  <img src={decoration} />
                  <FlexCustom justify="center">
                    <CardTextContainer>Decoration</CardTextContainer>
                  </FlexCustom>
                </CardContainer>
              </FlexCustom>
            </ServiceCard>
          </HoldCards>
          <SizedBox height="24px" />
        </BackgroundServiceIllus>
      </ServicesContainer>

      <div style={{ width: "100%", height: "400px" }}> </div>
    </MainWrapper>
  );
}

export default App;
