import React from "react";
import styled from "styled-components";
import TitlePortfolio from "../Common/TitlePortfolio";

const Project = () => {
  return (
    <ProjectWrapper>
      <TitlePortfolio title={"PROJECT"}></TitlePortfolio>
      <ContentWrapper></ContentWrapper>
    </ProjectWrapper>
  );
};

export default Project;

const ProjectWrapper = styled.div``;
const ContentWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
  border-radius: 12px;
  color: black;
`;
