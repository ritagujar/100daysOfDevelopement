import React from "react";
import styled from "styled-components";

const NavBar = styled.nav`
  color: white;
  display: flex;
  width: 100%;
  height: 4rem;
  flex: 1;
  background-color: blue;
  top: 0;
  position: sticky;
  align-items: center;
  padding: 0 40px;

  @media (max-width: 766px) {
    width: 100%;
    font-size: 1rem;
    padding: 0;
    padding-left: 10px;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  ul {
    display: flex;
    list-style-type: none;
  }

  li {
    margin-right: 15px;
    align-items: center;
  }

  a {
    display: block;
    text-decoration: none;
    color: white;
    font-size: 1.2rem;
  }

  input {
    height: 25px;
    width: 15rem;
    margin-right: 10px;
    border: none;
  }

  button {
    height: 2.3rem;
    width: 5.9rem;
    border-radius: 5px;
    cursor: pointer;
    border: none;
    font-size: 0.9rem;
    text-align: center;
    margin-left: 10px;
    background-image: linear-gradient(80deg, #ac3678, #d8314f, #fa8246);
    color: white;
  }

  @media (max-width: 886px) {
    input {
      width: 5rem;
    }
  }

  @media (max-width: 685px) {
    li {
      margin-right: 8px;
    }

    button {
      margin-left: 5px;
    }

    a {
      font-size: 0.8rem;
    }
  }
`;

const Header = () => {
  return (
    <NavBar>
      <h2>Tract.</h2>
      <NavMenu>
        <ul>
          <li>
            <a href="/">Category</a>
          </li>
          <li>
            <a href="/">Tract For Business</a>
          </li>
          <li>
            <a href="/">Teach on Tract</a>
          </li>
        </ul>
        <input type="text" />
        <button>Sign up</button>
      </NavMenu>
    </NavBar>
  );
};

export default Header;
