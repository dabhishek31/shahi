import styled from "styled-components";
import backgroundImage from "./../../assets/images/mainBg.png";
export const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
`;

export const Flex = styled.div`
  flex: ${(props) => (props.flex ? props.flex : 1)};
`;
export const BackgroundImage = styled.div`
  position: absolute;
  background-image: url(${backgroundImage});
  z-index: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
`;

export const OnlyFlex = styled.div`
  display: flex;
`;

export const DisplayFlex = styled(Flex)`
  display: flex;
  justify-content: space-between;
`;

export const HeadingTextLogo = styled(DisplayFlex)`
  @media (min-width: 768px) and (max-width: 1024px) {
    flex: 5;
  }
`;

export const LinksContainer = styled(DisplayFlex)`
  flex: 8;
  padding-top: 30px;
  justify-content: space-around;
  /* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

  @media (min-width: 320px) and (max-width: 480px) {
    display: none;
  }
`;

export const HeaderContainer = styled(DisplayFlex)`
  padding: 20px 60px 0px 60px;
`;

export const HeaderBodyContainer = styled.div``;
export const CursiveText = styled.div`
  font-size: 48px;
  color: #700d0d;
  font-family: "Great Vibes";
  font-weight: 600;
`;
export const HeadingText = styled.div`
  font-size: 48px;
  color: #a76c40;
  font-family: "Acme";
  font-weight: 600;
`;

export const LogoImage = styled.img`
  height: 116px;
  width: 148px;
`;

export const Link = styled.a`
  font-size: 18px;
  color: #700d0d;
  font-family: "Open Sans";
  font-weight: 600;

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 14px;
  }
`;
