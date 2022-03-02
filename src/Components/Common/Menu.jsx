import React, { useState } from "react";
import styled from "styled-components";
const Menu = () => {
  const [click, setClick] = useState(false);

  return (
    <MenuWrapper>
      <Bar>
        <Icon>
          <Text
            onClick={() => {
              setClick(!click);
            }}
          >
            MENU
          </Text>
        </Icon>
      </Bar>
      <Wrapper>
        <ContainerList click={click}>
          <List href="/">HOME</List>
          <List href="/resume">RESUME</List>
          <List href="/portfolio">PORTFOLIO</List>
        </ContainerList>
      </Wrapper>
    </MenuWrapper>
  );
};

export default Menu;

const MenuWrapper = styled.div``;
const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-end;
  cursor: pointer;
`;
const Wrapper = styled.div``;
const ContainerList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  display: ${({ click }) => {
    return click === false ? "none" : "flex";
  }};
`;
const List = styled.a`
  text-decoration: none;
  color: black;
`;
const Icon = styled.div`
  margin: 0;
  padding: 0;
`;
const Text = styled.p`
  color: #868e96;
  background-color: transparent;
  font-size: 1.2rem;
  font-weight: 400;
  margin: 0;
  text-align: right;
`;
