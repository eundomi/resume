import React from "react";
import styled from "styled-components";

const Experience = () => {
  return (
    <ExperienceWrapper>
      <Subject>Work Experience</Subject>
      <BigWrapper>
        <PlaceWrapper>
          <Name>DGIST <br/>(대구경북과학기술원)</Name>
          <Role>정보전산팀 | 기술원</Role>
          <Period>2021.04.~2021.10</Period>
        </PlaceWrapper>
        <ContentWrapper>
          <Content>메일, 전자결재시스템 등 교내 IT서비스 지원</Content>
        </ContentWrapper>
      </BigWrapper>
      <BigWrapper>
        <PlaceWrapper>
          <Name>대구상수도사업본부</Name>
          <Role>인턴</Role>
          <Period>2020.09.~2020.12</Period>
        </PlaceWrapper>
        <ContentWrapper>
          <Content>누수데이터분석</Content>
        </ContentWrapper>
      </BigWrapper>
    </ExperienceWrapper>
  );
};
export default Experience;

const ExperienceWrapper = styled.div`
  padding: 10px 0;
`;
const Subject = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  margin: 10px 0 10px 0;
`;
const BigWrapper = styled.div`
  display: flex;
  margin: 20px 0 10px 20px;
`;
const PlaceWrapper = styled.div`
  width: 390px;
`;
const Name = styled.div`
  font-size: 2rem;
`;
const Role = styled.div`
  font-size: 1.1rem;
`;
const Period = styled.div`
  font-size: 1.1rem;
`;
const ContentWrapper = styled.div`
  margin: 0 0 0 40px;
`;
const Content = styled.p`
  font-size: 1.1rem;
`;
