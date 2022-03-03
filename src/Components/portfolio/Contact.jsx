import React from "react";
import styled, { css } from "styled-components";
import TitlePortfolio from "../Common/TitlePortfolio";

const Contact = () => {
  const autoResizeTextarea = (e) => {
    let textarea = document.querySelector(".autoTextarea");

    if (textarea) {
      textarea.style.height = "auto";
      let height = textarea.scrollHeight;
      textarea.style.height = `${height}px`;
    }
  };
  return (
    <ContactWrapper>
      <TitlePortfolio title={"CONTACT"}></TitlePortfolio>
      <ContentWrapper>
        <ContactElementWrapper>
          <ConatactContactWrapper>
            <Title>Contact</Title>
            <Wrapper>
              <Info href="mailto:sandy131712@gmail.com">
                sandy131712@gmail.com
              </Info>
              <Info href="tel:010-7352-4560">010-7352-4560</Info>
            </Wrapper>
          </ConatactContactWrapper>
          <ContactTextWrapper>
            <Form
              class="gform"
              method="POST"
              data-email="sandy131712@gmail.com"
              action="https://script.google.com/macros/s/AKfycbyk4Ux9hglooPmJR5w3bKqIpN8L-8OgLTrEdU1x0cqSyEzDaGbapHsA-EYUJqwE3efq/exec"
            >
              <InputWrapper>
                <Input
                  Name
                  placeholder="Name"
                  type="name"
                  name="name"
                  required
                ></Input>
                <Input
                  Email
                  placeholder="Email"
                  type="email"
                  name="email"
                  required
                ></Input>
              </InputWrapper>

              <Message
                placeholder="Message"
                type="text"
                name="message"
                className="autoTextarea"
                required
                onKeyDown={autoResizeTextarea}
                onKeyUp={autoResizeTextarea}
              ></Message>
              <Button type="submit">Send </Button>
            </Form>
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
const Info = styled.a`
  margin-bottom: 10px;
  text-decoration: none;
  color: #4c4c4c;
  font-size: 1.125rem;
  position: relative;
  :first-child {
    margin-top: 20px;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: unset;
`;
const Input = styled.input`
  margin: 20px 3rem 20px 0;
  outline: none;
  border: none;
  border-bottom: 1px solid #c3c3c3;
  background-color: unset;
  color: #000000;
  font-size: 1em;
  ${(props) =>
    props.Name &&
    css`
      width: 50%;
    `}
  ${(props) =>
    props.Email &&
    css`
      width: 50%;
    `}
`;
const Message = styled.textarea`
  font-family: "IBMPlexSansKR";
  font-size: 1em;
  margin: 10px 3rem 20px 0;
  border: 1px solid #c3c3c3;
  border-radius: 10px;
  height: auto;
  padding: 10px;
`;
const Button = styled.button`
  margin-top: 10px;
  margin-bottom: 20px;
  height: 50px;
  width: 150px;
  text-align: center;
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
const InputWrapper = styled.div`
  display: flex;
`;
