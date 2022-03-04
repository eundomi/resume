import React from "react";
import { Link } from "react-router-dom";
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
            <ProjectItemContent>
              사용자의 레시피를 작성,수정,공유하는 레시피 공유 모바일 플랫폼
            </ProjectItemContent>
            <ProjectContent>
              <ProjectList>
                <ProjectItem>
                  <strong>기간</strong>
                  <ProjectItemContent>2021.01~2021.02 (4주)</ProjectItemContent>
                </ProjectItem>
                <ProjectItem>
                  <strong>사용 기술</strong>
                  <ProjectItemContent skill>REACT</ProjectItemContent>
                  <ProjectItemContent skill>Recoil</ProjectItemContent>
                  <ProjectItemContent skill>
                    Styled-Components
                  </ProjectItemContent>
                  <ProjectItemContent skill>Node.js</ProjectItemContent>
                </ProjectItem>

                <ProjectItem content>
                  <strong>주요 기능</strong>
                  <ProjectItemContent>
                    - 로그인 , 카카오 로그인 , 회원가입 , 닉네임 및 프로필사진
                    수정
                    <br />
                    - 레시피 작성, 조회, 수정, 삭제
                    <br />
                    - 레시피 카카오톡 공유
                    <br />
                    - 레시피 랜덤추천
                    <br />
                    - 레시피 카테고리 검색
                    <br />
                    - 레시피 최신순, 좋아요순 정렬
                    <br />
                    - 팔로우, 팔로잉/팔로워 리스트
                    <br />
                  </ProjectItemContent>
                </ProjectItem>
                <ProjectItem>
                  {" "}
                  <br />
                  자신의 레시피를 공유하고 다른 사용자의 레시피를 확인할 수
                  있습니다.
                  <br />
                  이를 통해 요리 경험의 만족도를 높이고, 요리에 대한 진입장벽을
                  낮출 수 있습니다.
                </ProjectItem>
              </ProjectList>
            </ProjectContent>
            <ButtonWrapper>
              <Link to="/yorijori">
                <Button>VIEW PPT</Button>
              </Link>
              <Button
                onClick={() =>
                  window.open("https://github.com/eundomi/Yorijori", "_blank")
                }
              >
                GITHUB
              </Button>
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
            <ProjectItemContent>
              2022 대선 후보 정보 제공 플랫폼
            </ProjectItemContent>
            <ProjectContent>
              <ProjectList>
                <ProjectItem>
                  <strong>기간</strong>
                  <ProjectItemContent>2021.12~2021.12 (2주)</ProjectItemContent>
                </ProjectItem>
                <ProjectItem>
                  <strong>사용 기술</strong>
                  <ProjectItemContent skill>HTML5</ProjectItemContent>
                  <ProjectItemContent skill>CSS3</ProjectItemContent>
                  <ProjectItemContent skill>JavaScript</ProjectItemContent>
                  <ProjectItemContent skill>Node.js</ProjectItemContent>
                </ProjectItem>

                <ProjectItem content>
                  <strong>주요 기능</strong>
                  <ProjectItemContent>
                    - 로그인 , 회원가입
                    <br />
                    - 후보별 상세 프로필 및 공약 정보 제공
                    <br />
                    - 후보별 관련 영상 링크 바로가기
                    <br />
                    - 1:1 후보별 공약 비교 및 공약 추천
                    <br />
                  </ProjectItemContent>
                </ProjectItem>

                <ProjectItem>
                  <br />
                  "당신의 대통령에게 투표하세요!"
                  <br />
                  대선 후보의 정보와 사용자들의 의견을 들을 수 있습니다.
                  <br />
                </ProjectItem>
              </ProjectList>
            </ProjectContent>
            <ButtonWrapper>
              <Link to="/president101">
                <Button>VIEW PPT</Button>
              </Link>
              <Button
                onClick={() =>
                  window.open(
                    "https://github.com/eundomi/PRESIDENT101",
                    "_blank"
                  )
                }
              >
                GITHUB
              </Button>
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
            <ProjectItemContent>
              청소년들의 눈높이에 맞춘 위치에 콘돔 자판기 설치 제안
            </ProjectItemContent>
            <ProjectContent>
              <ProjectList>
                <ProjectItem>
                  <strong>기간</strong>
                  <ProjectItemContent>2020.08~2020.09 (2주)</ProjectItemContent>
                </ProjectItem>
                <ProjectItem>
                  <strong>사용 기술</strong>
                  <ProjectItemContent skill>PYTHON</ProjectItemContent>
                  <ProjectItemContent skill>Q-GIS</ProjectItemContent>
                </ProjectItem>
                <ProjectItem content>
                  <strong>분석 방법</strong>
                  <ProjectItemContent>
                    1. 학교, 청소년 문화시설, 학원, 보건소에 가중치 적용
                    <br />
                    2. QGIS 격자데이터에 해당되는 가중치를 합산
                    <br />
                    3. Python folium을 활용하여 순위별 데이터분석
                    <br />
                    4. 다중회귀분석을 통한 검증
                    <br />
                  </ProjectItemContent>
                </ProjectItem>
                <ProjectItem>
                  <strong>성과</strong>
                  <ProjectItemContent>
                    2020년 공공빅데이터 청년인턴십 실무형 프로젝트 결과보고회
                    경상지역 최우수상
                  </ProjectItemContent>
                </ProjectItem>
              </ProjectList>
            </ProjectContent>
            <ButtonWrapper>
              <Link to="/location">
                <Button>VIEW PPT</Button>
              </Link>
            </ButtonWrapper>
          </Contents>
        </Wrapper>
      </ContentWrapper>
    </ProjectWrapper>
  );
};

export default Project;

const ProjectWrapper = styled.div`
  margin-top: 25vh;
`;
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
  margin: 0 6vh;
  font-size: 1.2rem;
  @media screen and (max-width: 1300px) {
    margin: 2vh 6vh;
  }
`;
const Wrapper = styled.div`
  display: flex;
  padding: 30px 30px 30px 30px;
  @media screen and (max-width: 1300px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Image = styled.img`
  display: flex;
  justify-content: center;
  align-item: center;
  width: 50vh;
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
const ProjectContent = styled.div``;
const Button = styled.button`
  font-family: "GmarketSansLight";
  margin: 0 10px 0 0;
  height: 50px;
  width: 150px;
  border-radius: 100px;
  background: rgba(0, 0, 0, 0);
  background-size: 200% 100%;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  letter-spacing: 0.1em;
  border: solid 1px grey;

  :hover {
    background: #feae11;
    border: none;
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
  align-items: baseline;
  flex-wrap: wrap;
  & > p {
    margin-left: 10px;
  }
`;
const ProjectItemContent = styled.p`
  margin: 2px;
  ${(props) =>
    props.skill &&
    css`
      padding: 2px 8px 2px 8px;
      color: #ff8000;
      font-weight: 600;
      background-color: #e6e6e6;
      border-radius: 10px;
      :hover {
        opacity: 0.8;
      }
    `}
`;
const ButtonWrapper = styled.div`
  @media screen and (max-width: 1300px) {
    text-align: center;
  }
`;
