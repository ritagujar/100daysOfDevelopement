import React from "react";
import styled from "styled-components";

const SearchSection = styled.div`
  input {
    width: 25rem;
    height: 2.7rem;
    margin-right: 0.4rem;
    font-size: 1.2rem;
    font-family: var(--font-alt);
    letter-spacing: 0.04rem;
    outline: none;
    color: var(--color-black);
    border: 1px solid var(--color-gray);
    border-radius: 0.2rem;
    padding-left: 1rem;

    @media screen and (max-width: 900px) {
      height: 2rem;
      width: 18rem;
    }
    @media screen and (max-width: 450px) {
      height: 2rem;
      width: 12rem;
      font-size: 1rem;
    }
  }

  input:focus {
    border: 1px solid var(--color-golden);
  }

  button {
    width: 6.5rem;
    height: 2.7rem;
    cursor: pointer;
    border-radius: 0.5rem;
    font-size: 1.3rem;
    font-weight: 700;
    letter-spacing: 0.04rem;
    border: none;
    outline: none;
    color: var(--color-black);
    font-family: var(--font-base);
    background-color: var(--color-crimson);

    @media screen and (max-width: 900px) {
      height: 2rem;
      width: 6rem;
    }
    @media screen and (max-width: 450px) {
      height: 2rem;
      width: 5rem;
      font-size: 1.1rem;
    }
  }

  button:hover {
    background-color: var(--color-golden-light);
  }
`;

const SearchUser = () => {
  return (
    <SearchSection>
      <form action="">
        <input type="text" placeholder="Search username" />
        <button type="search">Search</button>
      </form>
    </SearchSection>
  );
};

export default SearchUser;
