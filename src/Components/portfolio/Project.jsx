import React from "react";
import styled, { css } from "styled-components";
import TitlePortfolio from "../Common/TitlePortfolio";

const Project = () => {
  return (
    <ProjectWrapper>
      <TitlePortfolio title={"PROJECT"}></TitlePortfolio>
      <ContentWrapper>
        <Wrapper>
          <ImageWrapper>
            <Image src={`../images/yorijori.png`}></Image>
          </ImageWrapper>
          <Contents>
            <ProjectName>요리조리 (Yori-Jori)</ProjectName>
            <ProjectContent>
              <ProjectList>
                <ProjectItem>
                  기간.
                  <ProjectItemContent>2021.01~2021.02 (4주)</ProjectItemContent>
                </ProjectItem>
                <ProjectItem>
                  사용 기술.
                  <ProjectItemContent skill>REACT</ProjectItemContent>
                  <ProjectItemContent skill>Recoil</ProjectItemContent>
                  <ProjectItemContent skill>
                    Styled-Components
                  </ProjectItemContent>
                  <ProjectItemContent skill>Node.js</ProjectItemContent>
                </ProjectItem>

                <ProjectItem>
                  주요 기능.
                  <ProjectItemContent>
                    요리레시피를 작성,수정,공유하는 플랫폼입니다
                  </ProjectItemContent>
                </ProjectItem>
                <ProjectItem>
                  상세 설명.
                  <ProjectItemContent>
                    "요리" + "조리"
                    <br /> 요리를 조리해먹는 사람을 위한 레시피 공유 모바일
                    플랫폼
                    <br />
                    자신의 레시피를 공유하고 다른 사용자의 레시피를 확인할 수
                    있습니다.
                    <br />
                    이를 통해 요리 경험의 만족도를 높이고, 요리에 대한
                    진입장벽을 낮출 수 있습니다.
                    <br />
                  </ProjectItemContent>
                </ProjectItem>
              </ProjectList>
            </ProjectContent>
            <ButtonWrapper>
              <Button>VIEW MORE</Button>
              <Button>GITHUB</Button>
            </ButtonWrapper>
          </Contents>
        </Wrapper>
      </ContentWrapper>
      <ContentWrapper>
        <Wrapper>
          <ImageWrapper>
            <Image src={`../images/president101.png`}></Image>
          </ImageWrapper>
          <Contents>
            <ProjectName>PRESIDENT 101</ProjectName>
            <ProjectContent>
              <ProjectList>
                <ProjectItem>
                  기간.
                  <ProjectItemContent>2021.12~2021.12 (2주)</ProjectItemContent>
                </ProjectItem>
                <ProjectItem>
                  사용 기술.
                  <ProjectItemContent skill>HTML5</ProjectItemContent>
                  <ProjectItemContent skill>CSS3</ProjectItemContent>
                  <ProjectItemContent skill>JavaScript</ProjectItemContent>
                  <ProjectItemContent skill>Node.js</ProjectItemContent>
                </ProjectItem>

                <ProjectItem>
                  주요 기능.
                  <ProjectItemContent>
                    2022 대선 후보 정보 제공 플랫폼
                  </ProjectItemContent>
                </ProjectItem>
                <ProjectItem>
                  상세 설명.
                  <ProjectItemContent>
                    "당신의 대통령에게 투표하세요!"
                    <br /> 2022 대선 후보 정보 제공 플랫폼
                    <br />
                  </ProjectItemContent>
                </ProjectItem>
              </ProjectList>
            </ProjectContent>
            <ButtonWrapper>
              <Button>VIEW MORE</Button>
              <Button>GITHUB</Button>
            </ButtonWrapper>
          </Contents>
        </Wrapper>
      </ContentWrapper>
      <ContentWrapper>
        <Wrapper>
          <ImageWrapper>
            <Image src={`../images/location.png`}></Image>
          </ImageWrapper>
          <Contents>
            <ProjectName>
              청소년 콘돔자판기 최적입지 선정 및 활성화 방안
            </ProjectName>
            <ProjectContent>
              <ProjectList>
                <ProjectItem>
                  기간.
                  <ProjectItemContent>2020.08~2020.09 (2주)</ProjectItemContent>
                </ProjectItem>
                <ProjectItem>
                  사용 기술.
                  <ProjectItemContent skill>PYTHON</ProjectItemContent>
                  <ProjectItemContent skill>Q-GIS</ProjectItemContent>
                </ProjectItem>

                <ProjectItem>
                  주요 기능.
                  <ProjectItemContent>
                    청소년들의 눈높이에 맞춘 최적의 위치에 콘돔 자판기 제안
                  </ProjectItemContent>
                </ProjectItem>
                <ProjectItem>
                  상세 설명.
                  <ProjectItemContent>
                    PYTHON과 QGIS를 이용하여 학교, 청소년 문화시설, 학원,
                    보건소에 가중치를 두어
                    <br />
                    각 격자별 순위를 계산하는 방식으로 진행하였습니다.
                    <br />
                    Python folium을 활용하여 순위별 데이터분석과정을 거쳐
                    최적입지선정을 하였습니다.
                    <br />
                    다중회귀분석을 통한 검증을 하였습니다.
                  </ProjectItemContent>
                </ProjectItem>
              </ProjectList>
            </ProjectContent>
            <ButtonWrapper>
              <Button>VIEW MORE</Button>
            </ButtonWrapper>
          </Contents>
        </Wrapper>
      </ContentWrapper>
    </ProjectWrapper>
  );
};

export default Project;

const ProjectWrapper = styled.div``;
const ContentWrapper = styled.div`
  margin-top: 50px;
  background-color: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
  border-radius: 12px;
  color: black;
`;
const Contents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 60px;
  font-size: 1.2rem;
`;
const Wrapper = styled.div`
  display: flex;
  padding: 30px 30px 30px 30px;
`;
const Image = styled.img`
  display: flex;
  justify-content: center;
  align-item: center;
  width: 460px;
  object-fit: cover;
`;
const ImageWrapper = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
`;
const ProjectName = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;
const ProjectContent = styled.div`
  margin-left: 20px;
`;
const Button = styled.button`
  margin: 0 10px 0 0;
  height: 50px;
  width: 150px;
  border-radius: 100px;
  border: none;
  background: rgba(0, 0, 0, 0);
  background-size: 200% 100%;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  letter-spacing: 0.1em;
  border: solid 2px grey;
  :hover {
    background: #8e7cc3;
    opacity: 0.5;
  }
`;

const ProjectList = styled.li`
  list-style: none;
  height: auto;
  margin: 20px 0 20px 0;
  width: auto;
`;
const ProjectItem = styled.li`
  display: flex;
  flex-wrap: wrap;
`;
const ProjectItemContent = styled.p`
  margin: 2px;
  ${(props) =>
    props.skill &&
    css`
      padding: 0 5px 0 5px;
      color: #9f8be0;
      font-weight: 600;
      background-color: #c4c4c4;
      border-radius: 10px;
      :hover {
        opacity: 0.8;
      }
    `}
`;
const ButtonWrapper = styled.div``;
