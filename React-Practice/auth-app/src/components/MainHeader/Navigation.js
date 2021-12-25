import React from "react";
import styled from "styled-components";
import { LinkStyle } from "../../utils/styleUtils";
import { Link } from "react-router-dom";

const StyledNavbar = styled.nav`
  display: flex;
  background-color: #07081c;
  justify-content: space-between;
  padding: 0 4rem;
  color: #fbfbfb;
  top: 0;
  height: 4rem;
  align-items: center;
`;
const LogoText = styled(Link)`
  font-size: 1.8rem;
  text-decoration: none;
  cursor: pointer;
  color: #ffffff;
  ${LinkStyle()}
  &:hover {
    color: #9e9fa6;
  }
`;
const Menu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
`;

const MenuItem = styled(Link)`
  text-decoration: none;
  margin-right: 2rem;
  font-size: 20px;
  text-transform: uppercase;
  cursor: pointer;
  letter-spacing: 1px;
  color: #ffffff;
  ${LinkStyle()}
  &:hover {
    color: #9e9fa6;
  }
`;

const BtnStyle = styled.button`
  border: none;
  height: 30px;
  width: 80px;
  border-radius: 2px;
  color: #ffffff;
  background-image: linear-gradient(80deg, #ac3678, #d8314f, #fa8246);
  cursor: pointer;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 0.8rem;
  &:hover {
    color: #9e9fa6;
  }
`;

const Navigation = () => {
  return (
    <StyledNavbar>
      <LogoText to="/">auth-app</LogoText>
      <Menu>
        <MenuItem to="/login">Login</MenuItem>
        <MenuItem to="/register">Register</MenuItem>
        <BtnStyle>Logout</BtnStyle>
      </Menu>
    </StyledNavbar>
  );
};

export default Navigation;
