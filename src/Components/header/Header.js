import React from "react";
import styled from "styled-components";

const Header = (props) => {
  return (
    <div paddingTop="50px">
      <Title>{props.title}</Title>
    </div>
  );
};
export default Header;

const Title = styled.div`
  color: #868e96;
  font-size: 1.2rem;
  font-weight: 400;
  margin: 20vh 0 20vh 0px;
`;
