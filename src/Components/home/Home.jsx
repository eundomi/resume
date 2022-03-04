import React from "react";
import styled, { css } from "styled-components";

const Home = () => {
  return (
    <>
      <MobileUnderline>
        <ContentWrapper>
          <Underline Front>
            <Title>I’m FrontEnd</Title>
          </Underline>
          <Underline>
            <Title>Developer ;</Title>
          </Underline>
        </ContentWrapper>
      </MobileUnderline>
      <Body>
        <ImageWrapper>
          <Image src={`../images/Eundomi.png`}></Image>
        </ImageWrapper>

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
  height: 60vh;
`;
const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10em;
  position: relative;
  top: 15rem;
  @media screen and (max-width: 1300px) {
    top: 0;
    justify-content: center;
    & > span:first-child {
      margin-right: 20px;
    }
  }
  @media screen and (max-width: 740px) {
    width: max-content;
  }
`;
const Underline = styled.span`

  @media screen and (min-width: 1300px) {
    
    background-image: linear-gradient(transparent 60%, #f8cd07 40%);
    background-repeat: no-repeat;
    background-size: 0;
    display: inline;
    transition: 0.5s ease;
    :hover {
      background-size: 100%;
    }

    ${(props) =>
      props.Front &&
      css`
        z-index: 20;
      `}
  } 
  }
`;

const MobileUnderline = styled.span`
  
@media screen and (max-width: 1300px) {
  top:16rem;
  z-index: 20;
  background-image: linear-gradient(transparent 60%, #f8cd07 40%);
  background-repeat: no-repeat;
  background-size: 0;
  display:flex;
  position:relative;
  justify-content: center;
  transition: 0.5s ease;
  z-index: 20;
  background-position: 20vw ;
  
  :hover {
    background-size: 60vw;
  }

    ${(props) =>
      props.Front &&
      css`
        z-index: 20;
      `}
  }
  }
  @media screen and (max-width: 740px) {
    background-position: 18vw ;
  }
  
  
`;

const Title = styled.h2`
  font-family: "GmarketSansBold";
  font-size: 4.6vw;
  margin: 0;
  color: #fff;
  text-shadow: 0 0 0.3em #d0d0d0, 0 0 0.6em #d0d0d0;
  @media screen and (max-width: 1300px) {
    font-size: 4vw;
  }
  @media screen and (max-width: 740px) {
    width: max-content;
  }
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
