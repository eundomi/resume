import React from "react";
import styled from "styled-components";

const Project = () => {
  return (
    <ProjectWrapper>
      <Subject>Project</Subject>
      <BigWrapper>
        <PlaceWrapper>
          <Name>요리조리 (Yori-Jori)</Name>
          <Role>2021.01~2021.02 (4주)</Role>
          <Button>GitHub</Button>
          <Button>PPT</Button>
        </PlaceWrapper>
        <ContentWrapper>
          <Title>Description</Title>
          <Content>요리하는 플랫폼입니다.</Content>
          <Title>Role</Title>
          <Content>팀장, 프론트엔드, 백엔드</Content>
          <Title>What did I do</Title>
          <Content>요리하는 플랫폼입니다.</Content>
          <Title>Tech Stack</Title>
          <Content>요리하는 플랫폼입니다.</Content>
        </ContentWrapper>
        <ContentImageWrapper>
          <Image src={`../images/eunjung.jpg`}></Image>
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
          <Content>대선정보제공 플랫폼입니다.</Content>
          <Title>Role</Title>
          <Content>팀장, 프론트엔드</Content>
          <Title>What did I do</Title>
          <Content>요리하는 플랫폼입니다.</Content>
          <Title>Tech Stack</Title>
          <Content>요리하는 플랫폼입니다.</Content>
        </ContentWrapper>
        <ContentImageWrapper>
          <Image src={`../images/eunjung.jpg`}></Image>
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
          <Content>요리하는 플랫폼입니다.</Content>
          <Title>Tech Stack</Title>
          <Content>요리하는 플랫폼입니다.</Content>
        </ContentWrapper>
        <ContentImageWrapper>
          <Image src={`../images/eunjung.jpg`}></Image>
        </ContentImageWrapper>
      </BigWrapper>
    </ProjectWrapper>
  );
};
export default Project;

const ProjectWrapper = styled.div`
  padding: 10px 0;
`;
const Subject = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  margin: 40px 0 10px 0;
`;
const BigWrapper = styled.div`
  display: flex;
  margin: 20px 0 10px 20px;
`;
const PlaceWrapper = styled.div`
  width: 350px;
`;
const Name = styled.div`
  font-size: 2rem;
`;
const Role = styled.div`
  font-size: 1.1rem;
`;
const Button = styled.button``;

const ContentWrapper = styled.div`
  margin: 0 0 0 20px;
  width: 400px;
`;
const ContentImageWrapper = styled.div`
  margin-left: auto;
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
  width: 330px;
  object-fit: cover;
  margin-left: auto;
`;
