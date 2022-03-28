import React from "react";
import { SearchSection } from "./style";

const SearchUser = () => {
  return (
    <SearchSection>
      <form action="">
        <input type="text" placeholder="Search for user" />
        <button type="search">Search</button>
      </form>
    </SearchSection>
  );
};

export default SearchUser;
