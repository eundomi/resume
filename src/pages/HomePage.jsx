import React from "react";
import styled, { css } from "styled-components";
import Home from "../Components/home/Home";
import Header from "../Components/Common/Header";
import Footer from "../Components/Common/Footer";
const HomePage = () => {
  return (
    <HomePageWrapper>
      <Header title={"EUNDOMI"}></Header>
      <Home></Home>
    </HomePageWrapper>
  );
};
export default HomePage;

const HomePageWrapper = styled.div`
  background-color: #fff;
  display: flex;
  max-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
`;
