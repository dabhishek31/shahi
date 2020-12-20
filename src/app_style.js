import styled from "styled-components";

import illustrationImage from "./assets/images/serviceIllus.png";
export const MainWrapper = styled.div`
  max-width: 100% !important;
  font-family: Acme;
`;

export const BrownDivider = styled.div`
  width: 100%;
  height: 8px;
  background-color: #a76c40;
  margin-top: 4px;
`;
export const PinkDivider = styled.div`
  width: 100%;
  height: 8px;
  background-color: #c98fa2;
  margin-top: 2px;
`;
export const ServicesContainer = styled.div`
  width: 100%;
  margin-top: 24px;
  position: relative;
  width: 100%;

  @media (min-width: 320px) and (max-width: 480px) {
    margin-top: 44px;
  }
`;

export const BackgroundServiceIllus = styled.div`
  position: absolute;
  background-image: url(${illustrationImage});
  z-index: 0;
  background-size: cover;
  // background-position: center;
  background-repeat: no-repeat;
  width: 100%;
`;

export const FlexCustom = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.justify ? props.justify : "space-between"};
`;

export const HoldCards = styled(FlexCustom)`
  padding: 0px 60px;
  flex-wrap: wrap;
`;

export const ServicesHeading = styled.div`
  color: #ffffff;
  background-color: #a76c40;
  padding: 20px 50px;
  border-radius: 10px;
`;

export const ServiceCard = styled.div`
  height: 340px;
  width: 340px;
  margin: 10px 24px;
  flex: 0 0 26.333333%;
`;

export const SizedBox = styled.div`
  width: 100%;
  height: ${(props) => (props.height ? props.height : "14px")};
`;

export const CardContainer = styled(FlexCustom)`
  flex-direction: column;
`;

export const CardTextContainer = styled.div`
  text-align: center;
  background-color: #F3E4E9;
  padding: 20px 40px;
  border:solid 1px black;
  border-radius:4px;
`;
