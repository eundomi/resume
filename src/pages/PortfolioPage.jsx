import React from "react";
import styled from "styled-components";
import Header from "../Components/header/Header";
import About from "../Components/portfolio/About";
import Contact from "../Components/portfolio/Contact";
import Project from "../Components/portfolio/Project";

const PortfolioPage = () => {
  return (
    <PortfolioPageWrapper>
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
