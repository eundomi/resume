import React from "react";
import styled from "styled-components";
import Footer from "../Common/Footer";
const Home = () => {
  return (
    <HomeWrapper>
      <p>Home페이지입니다.</p>
      <Footer></Footer>
    </HomeWrapper>
  );
};
export default Home;

const HomeWrapper = styled.div``;
