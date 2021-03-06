import React from "react";
import styled from "styled-components";
import Header from "../Components/Common/Header";
import About from "../Components/portfolio/About";
import Contact from "../Components/portfolio/Contact";
import Project from "../Components/portfolio/Project";
import Footer from "../Components/Common/Footer";
const PortfolioPage = () => {
  return (
    <PortfolioPageWrapper>
      <Header title="PORTFOLIO"></Header>
      <Circle></Circle>
      <Circle1></Circle1>
      <Circle2></Circle2>
      <Circle3></Circle3>
      <Circle4></Circle4>
      <Circle5></Circle5>
      <Circle6></Circle6>
      <Body>
        <About></About>
        <Project></Project>
        <Contact></Contact>
      </Body>
      <Footer></Footer>
    </PortfolioPageWrapper>
  );
};
export default PortfolioPage;
const Body = styled.div`
  padding: 16vh 10vw 5vh 10vw;

  :before {
    content: "";
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 350px;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 1) 27%,
      rgba(255, 255, 255, 0.75) 40%,
      rgba(255, 255, 255, 0.5) 55%,
      rgba(255, 255, 255, 0.25) 75%,
      rgba(255, 255, 255, 0.15) 85%,
      rgba(255, 255, 255, 0) 100%
    );
    z-index: 2;
    pointer-events: none;
  }
`;
const PortfolioPageWrapper = styled.div`
  background: #fff;
`;

const Circle = styled.div`
  position: absolute;
  top: 10px;
  left: 0;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: transparent linear-gradient(80deg, #fff 0%, #feae11 100%) 0% 0%
    no-repeat padding-box;
  opacity: 0.77;
`;

const Circle1 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 683px;
  height: 682px;
  background: transparent
    linear-gradient(180deg, #fff 0%, #fe7e71 50%, #fe7e71 100%) 0% 0% no-repeat
    padding-box;
  opacity: 0.77;
  border-radius: 50%;
`;

const Circle2 = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 300px;
  height: 300px;
  transform: matrix(-0.97, 0.26, -0.26, -0.97, 0, 0);
  background: transparent linear-gradient(46deg, #fcbec6 0%, #4218b8 100%) 0% 0%
    no-repeat padding-box;
  opacity: 0.77;
  border-radius: 50%;
`;

const Circle3 = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 400px;
  height: 400px;
  background: transparent linear-gradient(180deg, #a24d90 0%, #f4a4c1 100%) 0%
    0% no-repeat padding-box;
  opacity: 0.77;
  border-radius: 50%;
`;

const Circle4 = styled.div`
  position: absolute;
  top: 1600px;
  right: 0;
  width: 600px;
  height: 600px;
  background: transparent linear-gradient(90deg, #fe7e71 0%, #a24d90 100%) 0% 0%
    no-repeat padding-box;
  opacity: 0.77;
  border-radius: 50%;
`;

const Circle5 = styled.div`
  position: absolute;
  top: 2600px;
  left: 0;
  width: 800px;
  height: 800px;
  border-radius: 50%;
  background: transparent linear-gradient(80deg, ##ffeccb 0%, #c25450 100%) 0%
    0% no-repeat padding-box;
  opacity: 0.77;
`;
const Circle6 = styled.div`
  position: absolute;
  top: 3400px;
  right: 0;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: transparent linear-gradient(180deg, #ffc1b6 0%, #a98c66 100%) 0%
    0% no-repeat padding-box;
  opacity: 0.5;
`;
