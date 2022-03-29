import React, { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import SearchUser from "../SearchUser/SearchUser";
import UserDetails from "../UserDetails/UserDetails";
import { NavbarSection, Heading, Logo } from "./style";

const Navbar = () => {
  const [userData, setUserData] = useState([]);

  return (
    <>
      <NavbarSection>
        <Heading>
          <Logo>
            {" "}
            <AiFillGithub />
          </Logo>
          <h1>Search Github User</h1>
        </Heading>
        <SearchUser setUserData={setUserData} />
      </NavbarSection>
      <UserDetails userData={userData} />
    </>
  );
};

export default Navbar;
