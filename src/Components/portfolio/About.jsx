import React from "react";
import styled, { css } from "styled-components";
import TitlePortfolio from "../Common/TitlePortfolio";
import Underline from "../Common/Underline";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <AboutWrapper>
      <TitlePortfolio title={"ABOUT"}></TitlePortfolio>
      <ContentWrapper>
        <IntroduceContent>
          <Info>"안녕하세요, 프론트엔드 개발자 손은정입니다."</Info>
          <Wrapper>
            <ImageWrapper>
              <Image src={`../images/eunjung.jpg`}></Image>
            </ImageWrapper>
            <Contents>
              <strong>
                “어떻게 하면 사용자가 더 간편하고 편하게 서비스를 접근할수
                있을까?”
              </strong>
              <br />
              <br />
              사용자들에게 새롭고 편리한 경험을 제공해주는 프론트엔드 개발자
              손은정입니다.
              <br />
              웹사이트의 레이아웃을 이해하기 쉽고 효과적으로 배치하여
              <br />
              사용자들의 니즈를 충족시킬수 있는 개발자의 꿈을 꾸고 있습니다.
              <br />
              <br />
              늘 사용자의 관점에서 생각하며 더 효율적인 방법을 생각하겠습니다.
              <br />
              다른 부서와의 협업을 통하여, 근본적인 문제를 해결할수 있는 사람이
              되고싶습니다.
              <br />
              <br />
              모두가 만족하는 최적의 솔루션을 제공할 수 있는
              <Underline
                content={"통찰력과 창의력이 있는 개발자가 되겠습니다."}
              ></Underline>
              <br />
            </Contents>
          </Wrapper>
        </IntroduceContent>
        <OtherWrapper>
          <SkillsContent>
            <Info title>Skills</Info>
            <ImageWrappers>
              <ImageSkill src={`../images/skill1.png`}></ImageSkill>
              <ImageSkill src={`../images/skill2.png`}></ImageSkill>
              <ImageSkill src={`../images/skill3.png`}></ImageSkill>
              <ImageSkill src={`../images/skill8.png`}></ImageSkill>
              <ImageSkill src={`../images/skill4.png`}></ImageSkill>
              <ImageSkill src={`../images/skill5.png`}></ImageSkill>
              <ImageSkill src={`../images/skill6.png`}></ImageSkill>
              <ImageSkill src={`../images/skill7.png`}></ImageSkill>
            </ImageWrappers>
          </SkillsContent>
          <ChannelWrapper>
            <Info title>Channel</Info>
            <ImageWrappers channel>
              <a href="https://github.com/eundomi">
                <ImageSkill title src={`../images/GitHub.png`}></ImageSkill>
              </a>
              <a href="https://eundomi.tistory.com/">
                <ImageSkill title src={`../images/tistory.svg`}></ImageSkill>
              </a>
            </ImageWrappers>
          </ChannelWrapper>
        </OtherWrapper>
      </ContentWrapper>
    </AboutWrapper>
  );
};

export default About;

const AboutWrapper = styled.div``;
const Info = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  ${(props) =>
    props.title &&
    css`
      text-align: center;
    `}
`;
const ContentWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
  border-radius: 12px;
  color: black;
`;
const IntroduceContent = styled.div`
  height: auto;
  margin: 0 30px 40px 30px;
`;
const OtherWrapper = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
`;
const SkillsContent = styled.div`
  width: 50%;
  height: auto;
  margin: 0 15px 40px 40px;
`;
const ChannelWrapper = styled.div`
  width: 50%;
  height: auto;
  margin: 0 30px 40px 15px;
`;

const Contents = styled.div`
  margin-left: 60px;
  font-size: 1.2rem;
  strong {
    font-size: 1.3rem;
  }
`;
const Wrapper = styled.div`
  display: flex;
  padding: 20px 20px 0 20px;
`;
const Image = styled.img`
  display: flex;
  justify-content: center;
  align-item: center;
  width: 280px;
  height: 280px;
  object-fit: cover;
  border-radius: 50%;
`;
const ImageSkill = styled.img`
  height: 90px;
  padding-right: 8px;

  ${(props) =>
    props.title &&
    css`
      padding-right: 40px;
    `}

  :hover {
    opacity: 0.7;
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.7));
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
`;
const ImageWrappers = styled.div`
  display: absolute;
  text-align: center;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.channel &&
    css`
      display: flex;
      height: 160px;
    `}
`;
