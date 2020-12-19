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

  @media (min-width: 320px) and (max-width: 480px) {
    background-size: cover;
    background-position: top;
    height: 300px;
  }
`;

export const MainHeadingContainer = styled.div`
  padding: 20px 20px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  opacity: 0.8;
  top: 40vh;
  position: absolute;

  @media (min-width: 320px) and (max-width: 480px) {
    padding: 10px 10px;
    text-align: center;
    background-color: white;
    border-radius: 6px;
    opacity: 1;
    top: 30vh;
    border: solid 1px black;
  }
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

export const SocialHandles = styled.div`
  position: absolute;
  right: 20px;
  top: 42vh;

  @media (min-width: 320px) and (max-width: 480px) { 
    display:none;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    top: 40vh;
    div img {
      width: 40px;
    }
  }
`;

export const LinksContainer = styled(DisplayFlex)`
  flex: 8;
  padding-top: 30px;
  justify-content: space-around;

  @media (min-width: 320px) and (max-width: 480px) {
    display: none;
  }
`;

export const MobileViewLinks = styled(DisplayFlex)`
display: none;
@media (min-width: 320px) and (max-width: 480px) {
  display:flex;
  padding-bottom:10px;
  justify-content: center;
  a:first-child {
    padding-right: 80px;
  }
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
  padding: 10px;
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 24px;
    padding: 5px;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 18px;
    padding: 5px;
  }
`;
export const HeadingText = styled.div`
  font-size: 48px;
  color: #a76c40;
  font-family: "Acme";
  font-weight: 600;
  padding: 10px;
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 24px;
    padding: 5px;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 18px;
    padding: 5px;
  }
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
  @media (min-width: 320px) and (max-width: 1024px) {
    font-size: 14px;
  }

  
`;
