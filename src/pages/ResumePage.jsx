import React from "react";
import styled from "styled-components";
import Contact from "../Components/resume/Contact";
import Experience from "../Components/resume/Experience";
import Project from "../Components/resume/Project";
import Education from "../Components/resume/Education";
import Certificate from "../Components/resume/Certificate";
import Skills from "../Components/resume/Skills";
import Header from "../Components/Common/Header";
import Footer from "../Components/Common/Footer";
const ResumePage = () => {
  return (
    <ResumePageWrapper>
      <Header title="RESUME"></Header>
      <Body>
        <Info>
          안녕하세요, <br />
          저는 손은정입니다.
        </Info>

        <Contact></Contact>
        <Experience></Experience>
        <Project></Project>
        <Education></Education>
        <Certificate></Certificate>
        <Skills></Skills>
      </Body>
      <Footer></Footer>
    </ResumePageWrapper>
  );
};
export default ResumePage;
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
const ResumePageWrapper = styled.div`
  background: #fff;
`;
const Info = styled.div`
  font-family: "GongGothicBold";
  font-size: 5vw;
  padding-bottom: 3vh;
  margin: 20vh 0px 3vh;
  font-weight: 700;
  @media screen and (max-width: 1300px) {
    padding-bottom: 0;
  }
`;
