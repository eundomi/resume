import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { Link } from "react-router-dom";

const Menu = () => {
  const [click, setClick] = useState(false);
  const [currentText, setCurrentText] = useState("MENU");

  return (
    <MenuWrapper>
      <Bar>
        <Icon>
          <Text
            onClick={() => {
              setClick(!click);
              const changeText = click === false ? "CLOSE" : "MENU";
              setCurrentText(changeText);
              console.log(click);
            }}
          >
            {currentText}
          </Text>
        </Icon>
      </Bar>

      <ContainerList click={click}>
        <List to="/">HOME</List>
        <List to="/resume">RESUME</List>
        <List to="/portfolio">PORTFOLIO</List>
      </ContainerList>
    </MenuWrapper>
  );
};

export default Menu;

const slideUp = keyframes`
    from {
        transform: translateY(200px); 
    }
    to {
        transform: translateY(0px);
    }
`;
const MenuWrapper = styled.div``;
const Bar = styled.div``;

const ContainerList = styled.ul`
  background: linear-gradient(to bottom, #ffffff, #ece9e6);

  margin-top: 100px;
  margin-bottom: 80px;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 90vh;
  position: absolute;
  top: 0;
  right: 0;

  display: ${({ click }) => {
    return click === false ? "none" : "flex";
  }};
`;
const List = styled(Link)`
  text-decoration: none;
  color: black;
  box-sizing: border-box;
  display: block;
  font-size: calc(6vw + 20px);
  padding: 6px 0;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  position: relative;
  font-weight: 800;
  :hover {
    color: #b3aad1;
  }
  animation-duration: 0.75s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;
`;
const Icon = styled.div`
  cursor: pointer;
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
  z-index: 50;
`;
