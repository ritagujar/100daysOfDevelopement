import React from "react";
import styled from "styled-components";
import Card from "../Card/Card";

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 81vh;
  position: relative;
`;

const Text = styled.h1`
  color: var(--color-golden);
`;

const UserDetails = ({ userData }) => {
  return (
    <Section>
      <Card>
        <Text>{userData.login}</Text>
        <h1>{userData.followers_url}</h1>
      </Card>
    </Section>
  );
};

export default UserDetails;
