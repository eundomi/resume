import React from "react";
import styled from "styled-components";

const Education = () => {
  return (
    <EducationWrapper>
      <Subject>Education</Subject>
      <BigWrapper>
        <PlaceWrapper>
          <Name>엘리스 SW 엔지니어 트랙 1기</Name>
          <Role>2021.10~2022.02 (4개월)</Role>
          <Contents>
            4개월의 프론트엔드 교육 과정을 통해 기존 지식이 있던 HTML CSS
            JavaScript에 대한 이해도가 깊어졌고 TypeScript Nodejs Express
            mongoDB React에 대해 배우게 됐습니다 새로운 언어들을 접하게 되면서
            좀 더 풍부한 코드작성이 가능해졌습니다. 팀프로젝트를 통해 프로젝트를
            설계하는 법 오류를 대처하는 법 git을 통한 협업 백엔드에 대한 지식이
            늘어났습니다. 또한 알고리즘 스터디를 통해 파이썬 언어에 대한 실력이
            늘게되었고 알고리즘 설계 능력 또한 증가했습니다
          </Contents>
        </PlaceWrapper>
      </BigWrapper>
      <BigWrapper>
        <PlaceWrapper>
          <Name>공공 빅데이터 교육</Name>
          <Role>2020.08 ~2020.10 (560시간)</Role>
          <Contents>공공빅데이터 교육</Contents>
        </PlaceWrapper>
      </BigWrapper>
      <BigWrapper>
        <PlaceWrapper>
          <Name>대전대학교</Name>
          <Role>컴퓨터공학과</Role>
          <Role>2014.03 ~ 2020.02</Role>
          <Contents>
            컴퓨터공학과에서 4년간 공부하며 컴퓨터구조, 자료구조, 컴퓨터
            네트워크 등 과목들을 우수한 성적으로 이수하였습니다. <br />
            중간에 워킹홀리데이를 2년간 다녀와서 다소 늦게 졸업하였습니다.
          </Contents>
        </PlaceWrapper>
      </BigWrapper>
    </EducationWrapper>
  );
};
export default Education;

const EducationWrapper = styled.div`
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
const PlaceWrapper = styled.div``;
const Name = styled.div`
  font-size: 2rem;
  margin: 10px 0 10px 0;
`;
const Role = styled.div`
  font-size: 1.1rem;
  margin: 10px 0 10px 0;
`;
const Contents = styled.p`
  font-size: 1.2rem;
  margin: 10px 0 10px 10px;
`;
