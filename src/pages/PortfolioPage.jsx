import React from "react";
import styled from "styled-components";
import Header from "../Components/header/Header";
import About from "../Components/portfolio/About";
import Contact from "../Components/portfolio/Contact";
import Project from "../Components/portfolio/Project";

const PortfolioPage = () => {
  return (
    <PortfolioPageWrapper>
      <Circle></Circle>
      <Circle1></Circle1>
      <Circle2></Circle2>
      <Circle3></Circle3>
      <Circle4></Circle4>
      <Header title="PORTFOLIO"></Header>
      <About></About>
      <Contact></Contact>
      <Project></Project>
    </PortfolioPageWrapper>
  );
};
export default PortfolioPage;

const PortfolioPageWrapper = styled.div`
  padding: 0 10rem 10rem 10rem;
  margin: 0;
  background: linear-gradient(180deg, #dbe9f6 15%, #fefcc9 44%, #f7d0d5 100%);
`;

const Circle = styled.div`
  position: absolute;
  top: 10px;
  left: 0;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: transparent linear-gradient(180deg, #a32cdf 0%, #106ad2 100%) 0%
    0% no-repeat padding-box;
  opacity: 0.77;
`;

const Circle1 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 683px;
  height: 682px;
  background: transparent linear-gradient(46deg, #00c0ff 0%, #4218b8 100%) 0% 0%
    no-repeat padding-box;
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
  background: transparent linear-gradient(46deg, #00c0ff 0%, #4218b8 100%) 0% 0%
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
  background: transparent linear-gradient(180deg, #0d4dff 0%, #00ffa9 100%) 0%
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
  background: transparent linear-gradient(90deg, #00ffa9 0%, #0d4dff 100%) 0% 0%
    no-repeat padding-box;
  opacity: 0.77;
  border-radius: 50%;
`;
