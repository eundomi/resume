import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <ContentWrapper>
        <Content>© 2022 EUNDOMI. All rights reserved.</Content>
      </ContentWrapper>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  width: 100%;
`;
const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`;
const Content = styled.p`
  font-size: 9px;
  line-height: 12px;
`;
