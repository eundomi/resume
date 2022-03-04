import React from "react";
import styled from "styled-components";

const Project = () => {
  return (
    <ProjectWrapper>
      <Subject>Project</Subject>
      <BigWrapper>
        <PlaceWrapper>
          <Name>
            요리조리
            <br />
            (Yori-Jori)
          </Name>
          <Role>2021.01~2021.02 (4주)</Role>
          <Button>GitHub</Button>
          <Button>PPT</Button>
        </PlaceWrapper>
        <ContentWrapper>
          <Title>Description</Title>
          <Content>요리 레시피를 작성,수정,공유하는 모바일 플랫폼</Content>
          <Title>Role</Title>
          <Content>팀장, 프론트엔드, 백엔드</Content>
          <Title>What did I do</Title>
          <Content>- 개발 문서 작성</Content>
          <Content>- 전체 게시물 페이지 필터링 및 검색</Content>
          <Content>- DB스키마 생성</Content>
          <Content>- 전체 API명세 및 레시피 API 작성</Content>
          <Content>- 서버 배포</Content>
          <Title>Tech Stack</Title>
          <Content>REACT Recoil Styled-Components Node.js</Content>
        </ContentWrapper>
        <ContentImageWrapper>
          <Image src={`../images/yorijori.png`}></Image>
        </ContentImageWrapper>
      </BigWrapper>

      <BigWrapper>
        <PlaceWrapper>
          <Name>President101</Name>
          <Role>2021.12~2021.12 (2주)</Role>
          <Button>GitHub</Button>
          <Button>PPT</Button>
        </PlaceWrapper>
        <ContentWrapper>
          <Title>Description</Title>
          <Content>2022 대선 후보 정보 제공 플랫폼</Content>
          <Title>Role</Title>
          <Content>팀장, 프론트엔드</Content>
          <Title>What did I do</Title>
          <Content>- 개발 문서 작성</Content>
          <Content>- 메인페이지 제작</Content>
          <Content>- 로그인 및 회원가입페이지 제작</Content>
          <Title>Tech Stack</Title>
          <Content>HTML5 CSS3 JavaScript Node.js</Content>
        </ContentWrapper>
        <ContentImageWrapper>
          <Image src={`../images/president101.png`}></Image>
        </ContentImageWrapper>
      </BigWrapper>

      <BigWrapper>
        <PlaceWrapper>
          <Name>콘돔자판기 최적입지 선정</Name>
          <Role>2020.08~2020.09 (2주)</Role>
          <Button>PPT</Button>
        </PlaceWrapper>
        <ContentWrapper>
          <Title>Description</Title>
          <Content>청소년들을 위한 콘돔자판기 최적입지 선정</Content>
          <Title>Role</Title>
          <Content>팀장, 데이터 분석</Content>
          <Title>What did I do</Title>
          <Content>- 데이터 수집 및 전처리</Content>
          <Content>- 유효 데이터 검증</Content>
          <Title>Tech Stack</Title>
          <Content>PYTHON Q-GIS</Content>
        </ContentWrapper>
        <ContentImageWrapper>
          <Image src={`../images/location.png`}></Image>
        </ContentImageWrapper>
      </BigWrapper>
    </ProjectWrapper>
  );
};
export default Project;

const ProjectWrapper = styled.div`
  margin-top: 20vh;
`;
const Subject = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  margin: 40px 0 10px 0;
`;
const BigWrapper = styled.div`
  display: flex;
  margin: 50px 0 10px 20px;
  @media screen and (max-width: 1300px) {
    flex-direction: column;
  }
`;
const PlaceWrapper = styled.div`
  width: 350px;
  @media screen and (max-width: 1300px) {
    width: 100%;
  }
`;
const Name = styled.div`
  font-size: 2rem;
`;
const Role = styled.div`
  font-size: 1.1rem;
`;

const Button = styled.button`
  font-family: "GmarketSansLight";
  margin: 20px 20px 20px 0;
  height: 50px;
  width: 100px;
  text-align: center;
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
const ContentWrapper = styled.div`
  margin: 0 0 0 20px;
  width: 400px;
`;
const ContentImageWrapper = styled.div`
  margin-left: auto;
  @media screen and (max-width: 1300px) {
    margin-left: 0;
  }
`;

const Title = styled.p`
  padding: 0;
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
`;
const Content = styled.p`
  margin: 0 0 10px 10px;
  font-size: 1.1rem;
`;
const Image = styled.img`
  width: 500px;
  object-fit: cover;
  margin-left: auto;
  @media screen and (max-width: 1300px) {
    margin: 20px 0 0 20px;
  }
`;
