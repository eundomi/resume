import React from "react";
import styled from "styled-components";
import Contact from "../Components/resume/Contact";
import Experience from "../Components/resume/Experience";
import Project from "../Components/resume/Project";
import Education from "../Components/resume/Education";
import Skills from "../Components/resume/Skills";
import Header from "../Components/header/Header";
import Footer from "../Components/Common/Footer";
const ResumePage = () => {
  return (
    <ResumePageWrapper>
      <Header title="RESUME"></Header>
      <Body>
        <Info>안녕하세요, 저는 손은정입니다.</Info>
        <Contact></Contact>
        <Experience></Experience>
        <Project></Project>
        <Education></Education>
        <Skills></Skills>
      </Body>
      <Footer></Footer>
    </ResumePageWrapper>
  );
};
export default ResumePage;
const Body = styled.div`
  padding: 16rem 10rem 5rem 10rem;

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
const ResumePageWrapper = styled.div`
  background: #fff;
`;
const Info = styled.div`
  font-size: 5rem;
  padding-bottom: 3rem;
  margin: 20vh 0px 2rem;
  font-weight: 700;
`;
