import React from "react";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import SearchUser from "./SearchUser";

const NavbarSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 5.5rem;
  background-color: var(--color-black);

  @media screen and (max-width: 650px) {
    display: flex;
    flex-direction: column;
  }
`;
const Heading = styled.div`
  display: flex;
  align-items: center;
  color: var(--color-golden);

  h1 {
    font-size: 2.1rem;
    letter-spacing: 0.04rem;
    font-family: var(--font-base);
  }
`;
const Logo = styled.a`
  font-size: 2.5rem;
  margin-right: 0.5rem;
`;

const Navbar = () => {
  return (
    <NavbarSection>
      <Heading>
        <Logo>
          {" "}
          <AiFillGithub />
        </Logo>
        <h1>Search Github User</h1>
      </Heading>
      <SearchUser />
    </NavbarSection>
  );
};

export default Navbar;
