import styled from "styled-components";
import backgroundImage from "./../../assets/images/mainBg.png";
export const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  div {
    position: absolute;
    background-image: url(${backgroundImage});
    background-size: contain;
    background-repeat: no-repeat;
    height: 120vh;
    width: 100%;
  }
`;
