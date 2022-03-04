import React from "react";
import styled from "styled-components";

const Certificate = () => {
  return (
    <CertificateWrapper>
      <Subject>Certificate</Subject>
      <Wrapper>
        <Contents>
          <Name>SQLD(SQL 개발자)</Name>
          <Content>2021.10.</Content>
        </Contents>
        <Contents>
          <Name>컴퓨터활용능력 1급 </Name>
          <Content>2021.04.</Content>
        </Contents>
        <Contents>
          <Name>ADsP(데이터분석준전문가) </Name>
          <Content>2021.12.</Content>
        </Contents>
        <Contents>
          <Name>한국사능력검정시험 1급</Name>
          <Content>2021.10.</Content>
        </Contents>
        <Contents>
          <Name>정보처리기사</Name>
          <Content>2019.11.</Content>
        </Contents>
        <Contents>
          <Name>GTQ그래픽기술자격 1급 </Name>
          <Content>2016.12.</Content>
        </Contents>
        <Contents>
          <Name>Microsoft Office Specialist 2010 Master</Name>
          <Content>2016.06.</Content>
        </Contents>
      </Wrapper>
    </CertificateWrapper>
  );
};

export default Certificate;

const CertificateWrapper = styled.div`
  margin-top: 20vh;
`;
const Subject = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  margin: 40px 0 10px 0;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3vh;
`;
const Contents = styled.div`
  display: flex;
  align-items: flex-end;
`;
const Name = styled.p`
  align-items: center;
  font-size: 1.5rem;
  margin: 10px 0 10px 0;
`;
const Content = styled.p`
  font-size: 1rem;
  margin-left: 20px;
`;
