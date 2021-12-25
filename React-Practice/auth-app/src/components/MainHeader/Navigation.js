import React from "react";
import styled from "styled-components";
import { getClickableLinkStyle } from "../../utils/styleUtils";

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
const LogoText = styled.a`
  font-size: 2rem;
  cursor: pointer;
  ${getClickableLinkStyle()}
`;
const Menu = styled.ul`
  display: flex;
`;
const MenuItem = styled.li`
  list-style-type: none;
  margin-left: 2rem;
  font-size: 20px;
  text-transform: uppercase;
  cursor: pointer;
  letter-spacing: 1px;
  ${getClickableLinkStyle()}
`;

const Navigation = () => {
  return (
    <StyledNavbar>
      <LogoText>auth-app</LogoText>
      <Menu>
        <MenuItem>Login</MenuItem>
        <MenuItem>Register</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </StyledNavbar>
  );
};

export default Navigation;
