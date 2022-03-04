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
            웹 프론트엔드로서 필요한 JavaScript, React.js, node.js를 배웠습니다.
            <br />
            기존과는 다루던 PYTHON과는 다른 새로운 언어들을 접하게 되면서 더
            많은 기능을 구현할 수 있게 되었습니다. <br />
            팀프로젝트를 통해 프로젝트를 기획하고 팀장으로서 팀을 이끌어 가는
            능력을 키울 수 있었으며 git을 통한 협업의 중요성을 알게 되었습니다.
          </Contents>
        </PlaceWrapper>
      </BigWrapper>
      <BigWrapper>
        <PlaceWrapper>
          <Name>공공 빅데이터 교육</Name>
          <Role>2020.08 ~2020.10 (200시간)</Role>
          <Contents>
            R, PYTHON을 이용하여 데이터 전처리 및 분석, QGIS를 통한 지도 분석 및
            시각화를 어떤방식으로 해야 효율적인지 느끼게 되었고 <br />
            프로젝트를 진행하는 동안, 데이터 수집, 전처리, 예측을 실제로
            하게되면서 데이터분석에 대한 전반적인 이해도가 생겼습니다.
          </Contents>
        </PlaceWrapper>
      </BigWrapper>
      <BigWrapper>
        <PlaceWrapper>
          <Name>대전대학교</Name>
          <Role>컴퓨터공학과</Role>
          <Role>2014.03 ~ 2020.02</Role>
          <Contents>
            컴퓨터공학과에서 4년간 공부하며 컴퓨터구조, 자료구조, 컴퓨터
            네트워크 등 과목들을 4.5만점에 3.79점의 성적으로 졸업하였습니다.{" "}
            <br />
            중간에 워킹홀리데이를 2년간 다녀와서 다소 늦게 졸업하였습니다.
          </Contents>
        </PlaceWrapper>
      </BigWrapper>
    </EducationWrapper>
  );
};
export default Education;

const EducationWrapper = styled.div`
  margin-top: 20vh;
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
