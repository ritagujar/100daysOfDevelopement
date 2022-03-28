import React, { useState } from "react";
import { SearchSection } from "./style";
import axios from "axios";

const github = axios.create({
  baseURL: "https://api.github.com/",
});

const SearchUser = () => {
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState([]);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const result = await github.get(`users/${user}`);
      setUserData(result.data);
    } catch (error) {
      console.log(error);
    }
    setUser("");
  };

  return (
    <>
      <SearchSection>
        <form onSubmit={onSubmitHandler}>
          <input
            type="text"
            placeholder="Search for user"
            value={user}
            onChange={(event) => setUser(event.target.value)}
          />
          <button type="search">Search</button>
        </form>
      </SearchSection>
    </>
  );
};

export default SearchUser;
