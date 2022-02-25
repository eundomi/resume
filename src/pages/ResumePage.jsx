import React from "react";
import styled from "styled-components";
import Contact from "../Components/resume/Contact";
import Experience from "../Components/resume/Experience";
import Project from "../Components/resume/Project";
import Education from "../Components/resume/Education";
import Skills from "../Components/resume/Skills";
import Header from "../Components/header/Header";
const ResumePage = () => {
  return (
    <ResumePageWrapper>
      <Header title="RESUME"></Header>
      <Info>안녕하세요, 저는 손은정입니다.</Info>
      <Contact></Contact>
      <Experience></Experience>
      <Project></Project>
      <Education></Education>
      <Skills></Skills>
    </ResumePageWrapper>
  );
};
export default ResumePage;

const ResumePageWrapper = styled.div`
  position: relative;
  width: auto;
  padding: 0 15rem 10rem 15rem;
  margin: 0px auto;
`;
const Info = styled.div`
  font-size: 5rem;
  padding-bottom: 3rem;
  margin: 20vh 0px 2rem;
  font-weight: 700;
`;
