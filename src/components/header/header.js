import React from "react";

import {
  Wrapper,
  BackgroundImage,
  LogoImage,
  HeaderContainer,
  DisplayFlex,
  Link,
  HeaderBodyContainer,
  CursiveText,
  HeadingText,
  OnlyFlex,
  Flex,
  LinksContainer,
  HeadingTextLogo,
  SocialHandles,
  MainHeadingContainer,
  MobileViewLinks,
} from "./style.js";
import shahiTour from "../../assets/images/shahiTour.png";
import shahiCaterer from "../../assets/images/shahicaterer.png";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import youtube from "../../assets/images/youtube.png";
import whatsapp from "../../assets/images/whatsapp.png";

export default function Header() {
  return (
    <Wrapper>
      <BackgroundImage>
        <HeaderContainer>
          <Flex flex="1">
            <LogoImage src={shahiCaterer} />
          </Flex>
          <HeadingTextLogo>
            <LinksContainer>
              <Link>Gallery</Link>
              <Link>About Us</Link>
              <Link>Services</Link>
              <Link>Contact Us</Link>
            </LinksContainer>
            <Flex flex="1">
              <LogoImage src={shahiTour} />
            </Flex>
          </HeadingTextLogo>
          
        </HeaderContainer>
        <MobileViewLinks>
            <Link>Gallery</Link>
            <Link>About Us</Link>
          </MobileViewLinks>  
          <MobileViewLinks>
            <Link>Services</Link>
            <Link>Contact Us</Link>
          </MobileViewLinks> 
        <HeaderBodyContainer>
          <OnlyFlex style={{ justifyContent: "center" }}>
            <MainHeadingContainer>
              <CursiveText>Welcome To</CursiveText>
              <HeadingText>SHAHI EVENTS & TOUR MANAGEMENT</HeadingText>
              <CursiveText>Make your dream come true</CursiveText>
            </MainHeadingContainer>
          </OnlyFlex>
          <SocialHandles>
            <div>
              <img src={facebook} />
            </div>
            <div>
              <img src={instagram} />
            </div>
            <div>
              <img src={youtube} />
            </div>
            <div>
              <img src={whatsapp} />
            </div>
          </SocialHandles>
        </HeaderBodyContainer>
      </BackgroundImage>
    </Wrapper>
  );
}
