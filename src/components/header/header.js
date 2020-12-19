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
        <HeaderBodyContainer>
          <OnlyFlex style={{ justifyContent: "center", marginTop: "20vh" }}>
            <div
              style={{
                padding: "40px 40px",
                textAlign: "center",
                backgroundColor: "white",
                borderRadius: "10px",
                opacity: 0.8,
              }}
            >
              <CursiveText>Welcome To</CursiveText>
              <HeadingText>SHAHI EVENTS & TOUR MANAGEMENT</HeadingText>
              <CursiveText>Make your dream come true</CursiveText>
            </div>
          </OnlyFlex>
          <div
            style={{
              position: "absolute",
              right: 60,
              top: "35vh",
            }}
          >
            <div style={{ width: 60 }}>
              <img src={facebook} />
            </div>

            <div style={{ width: 60 }}>
              <img src={instagram} />
            </div>
            <div style={{ width: 60 }}>
              <img src={youtube} />
            </div>
            <div style={{ width: 60 }}>
              <img src={whatsapp} />
            </div>
          </div>
        </HeaderBodyContainer>
      </BackgroundImage>
    </Wrapper>
  );
}
