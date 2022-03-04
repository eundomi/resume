import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <ContentsWrapper>
        <Introduce>
          사용자에게 새롭고 편리한 경험을 제공해주는 프론트엔드 개발자
          손은정입니다.
          <br />
          <br />
          기록의 중요성을 알고있으며, 평소 개발하면서 고민이 되는 부분이 있을 때
          마다 글로 정리하며 꼼꼼히 기록하는 것을 좋아합니다. 배움의 중요성을
          알며, 내일 더 발전하기위해 고민을 생활화 합니다.
        </Introduce>
        <ContactChannelWrapper>
          <ContactWrapper>
            <Subject>Contact</Subject>
            <Content>
              <strong>E-mail</strong> sandy131712@gmail.com
              <br />
              <strong>Phone</strong> 01073524560
            </Content>
          </ContactWrapper>
          <ChannelWrapper>
            <Subject>Channel</Subject>
            <Content
              onClick={() =>
                window.open("https://eundomi.tistory.com/", "_blank")
              }
            >
              <strong>Blog</strong> https://eundomi.tistory.com/
              <br />
            </Content>
            <Content
              onClick={() =>
                window.open("https://github.com/eundomi", "_blank")
              }
            >
              <strong>GitHub</strong> https://github.com/eundomi
            </Content>
          </ChannelWrapper>
        </ContactChannelWrapper>
      </ContentsWrapper>
      <ImageWrapper>
        <Image src={`../images/eunjung.jpg`}></Image>
      </ImageWrapper>
    </Wrapper>
  );
};
export default Contact;

const Wrapper = styled.div`
  display: flex;
  padding: 10px 0;
  @media screen and (max-width: 1300px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;
const ImageWrapper = styled.div``;
const Image = styled.img`
  width: 330px;
  object-fit: cover;
  border-radius: 50%;
  margin-left: 80px;
  @media screen and (max-width: 1300px) {
    margin-left: 0;
  }
`;
const ContentsWrapper = styled.div`
  margin: auto;
  width: 90%;
  position: relative;
  object-fit: cover;
  @media screen and (max-width: 1300px) {
    margin: 3vh 0;
  }
`;
const Introduce = styled.p`
  font-size: 1.5rem;
  margin: 0;
  padding-bottom: 20px;
`;
const Subject = styled.h2`
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0 0 10px 0;
`;
const Content = styled.p`
  cursor: pointer;
  margin: 2px;
  margin-left: 10px;
`;
const ContactChannelWrapper = styled.div`
  display: flex;
`;
const ContactWrapper = styled.div`
  width: 50%;
`;
const ChannelWrapper = styled.div`
  width: 50%;
`;
