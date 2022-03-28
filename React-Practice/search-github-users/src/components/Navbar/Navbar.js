import React from "react";
import { AiFillGithub } from "react-icons/ai";
import SearchUser from "../SearchUser/SearchUser";
import { NavbarSection, Heading, Logo } from "./style";

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
