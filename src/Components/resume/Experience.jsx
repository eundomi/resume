import React from "react";
import styled from "styled-components";

const Experience = () => {
  return (
    <ExperienceWrapper>
      <Subject>Work Experience</Subject>
      <BigWrapper>
        <PlaceWrapper>
          <Name>
            DGIST <br />
            (대구경북과학기술원)
          </Name>
          <Role>정보전산팀 | 기술원</Role>
          <Period>2021.04.~2021.10</Period>
        </PlaceWrapper>
        <ContentWrapper>
          <Content>
            - 그룹웨어 기획 및 운영 (전자결재, 메일, 홈페이지)
            <br />- IT서비스 관리 및 안내
          </Content>
        </ContentWrapper>
      </BigWrapper>
      <BigWrapper>
        <PlaceWrapper>
          <Name>대구상수도사업본부</Name>
          <Role>정보통신과 | 인턴</Role>
          <Period>2020.09.~2020.12</Period>
        </PlaceWrapper>
        <ContentWrapper>
          <Content>
            - 스마트수도 검침 시스템으로부터 수집된 데이터와 공공데이터 및
            민원데이터를 이용하여 데이터분석
            <br />- 스마트 미터링 관제시스템을 구축
          </Content>
        </ContentWrapper>
      </BigWrapper>
    </ExperienceWrapper>
  );
};
export default Experience;

const ExperienceWrapper = styled.div`
  margin-top: 20vh;
`;
const Subject = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  margin: 10px 0 10px 0;
`;
const BigWrapper = styled.div`
  display: flex;
  margin: 20px 0 10px 20px;
  @media screen and (max-width: 1300px) {
    flex-direction: column;
  }
`;
const PlaceWrapper = styled.div`
  width: 30%;
  @media screen and (max-width: 1300px) {
    width: 100%;
    margin-left: 40px;
  }
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
  width: 70%;
  margin: 0 0 0 40px;
`;
const Content = styled.p`
  font-size: 1.1rem;
`;
