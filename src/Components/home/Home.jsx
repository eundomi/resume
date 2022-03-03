import React from "react";
import styled, { css } from "styled-components";

const Home = () => {
  return (
    <>
      <ContentWrapper>
        <Title Front>Developer ;</Title>
      </ContentWrapper>
      <Body>
        <ImageWrapper>
          <Image src={`../images/Eundomi.png`}></Image>
        </ImageWrapper>
        <ContentWrapper Front>
          <Title>I’m FrontEnd</Title>
        </ContentWrapper>
        <Wrapper>
          <Caution>
            이력서 또는 포트폴리오는 메뉴 또는 위의 버튼을 통해 확인해주세요.{" "}
          </Caution>
        </Wrapper>
      </Body>
    </>
  );
};
export default Home;

const Body = styled.div`
  height: 100vh;
`;
const ImageWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Image = styled.img`
  height: 70vh;
`;
const ContentWrapper = styled.div`
  position: absolute;
  top: 16rem;
  right: 14rem;

  ${(props) =>
    props.Front &&
    css`
      top: 16rem;
      left: 14rem;
    `}

  @media screen and (max-width: 1600px) {
    z-index: 20;
    position: absolute;
    top: 30rem;
    right: 14rem;
    ${(props) =>
      props.Front &&
      css`
        top: 16rem;
        left: 14rem;
      `}
  }
`;
const Title = styled.h2`
  font-size: 5rem;
  margin: 0;
  color: #fff;
  text-shadow: 0 0 0.3em #d0d0d0, 0 0 0.6em #d0d0d0;
  ${(props) =>
    props.main &&
    css`
      text-align: right;
      font-size: 10rem;
      padding: 0;
      color: rgba(255, 255, 255, 0.9);
      text-shadow: none;
    `}
`;

const Caution = styled.p`
  top: 16rem;
  right: 14rem;
  font-size: 0.9rem;
  margin: 2rem 0;
`;
const Wrapper = styled.div`
  position: absolute;
  top: 84%;
  width: 100%;
  text-align: center;
`;
