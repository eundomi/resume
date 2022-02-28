import React from "react";
import styled, { css } from "styled-components";
import TitlePortfolio from "../Common/TitlePortfolio";
const Contact = () => {
  return (
    <ContactWrapper>
      <TitlePortfolio title={"CONTACT"}></TitlePortfolio>
      <ContentWrapper>
        <ContactElementWrapper>
          <ConatactContactWrapper>
            <Title>Contact</Title>
            <Wrapper>
              <Mail>sandy131712@gmail.com</Mail>
              <Phone>010-7352-4560</Phone>
            </Wrapper>
          </ConatactContactWrapper>
          <ContactTextWrapper>
            <Form>
              <Input placeholder="Name"></Input>
              <Input placeholder="Email"></Input>
              <Input message placeholder="Message"></Input>
            </Form>
            <Button>Send</Button>
          </ContactTextWrapper>
        </ContactElementWrapper>
      </ContentWrapper>
    </ContactWrapper>
  );
};

export default Contact;
const ContactWrapper = styled.div``;
const ContentWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
  border-radius: 12px;
  color: black;
`;
const ContactElementWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 30px 30px 30px;
`;
const ConatactContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
`;
const ContactTextWrapper = styled.div`
  margin-left: 60px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Title = styled.h3`
  font-size: 3.438rem;
  margin: 0;
  color: #c3c3c3;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Mail = styled.a``;
const Phone = styled.a``;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: unset;
`;
const Input = styled.input`
  margin: 10px 0 10px 0;
  outline: none;
  border: none;
  border-bottom: 1px solid #c3c3c3;
  background-color: unset;
  color: #000000;
  font-size: 1.125em;
  ${(props) =>
    props.Message &&
    css`
      grid-column: 1/3;
    `}
`;
const Button = styled.button`
  margin-top: 20px;
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
