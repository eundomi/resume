import React from "react";
import styled from "styled-components";
import Menu from "./Menu";

const Header = (props) => {
  return (
    <HeaderWrapper>
      <Wrapper>
        <Title>{props.title}</Title>
        <Menu />
      </Wrapper>
    </HeaderWrapper>
  );
};
export default Header;
const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  z-index: 999;
`;
const Wrapper = styled.h3`
  padding: 3rem 10rem;
  display: flex;
  justify-content: space-between;
`;
const Title = styled.h3`
  color: #868e96;
  font-size: 1.2rem;
  font-weight: 400;
  margin: 0;
`;
