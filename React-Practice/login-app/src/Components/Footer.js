import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  padding: 0px 100px;
  margin-bottom: 10px;
  justify-content: space-between;
  color: #727272;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <h3>Privacy Policy</h3>
      <h3>Copyright@Tract2021</h3>
    </FooterContainer>
  );
};

export default Footer;
