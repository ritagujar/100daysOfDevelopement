import styled from "styled-components";

export const FooterSection = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 4rem;
  background-color: var(--color-black);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterText = styled.p`
  color: var(--color-golden);
  font-size: 1.4rem;
  font-family: var(--font-base);
  letter-spacing: 0.04rem;
  @media screen and (max-width: 300px) {
    font-size: 1.2rem;
  }
`;
