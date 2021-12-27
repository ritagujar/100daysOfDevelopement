import styled from "styled-components";
import { Link } from "react-router-dom";

export const SignUpContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 4rem;
`;
export const StyleText = styled.h1`
  margin-bottom: 10px;
  color: rgb(7, 8, 28);
`;
export const Text = styled.p`
  margin-bottom: 20px;
  color: #617287;
  font-size: 1.2rem;
`;
export const LoginLink = styled(Link)`
  color: #ff4185;
  margin: 0 5px;
`;
export const Card = styled.div`
  /* margin-top: 3rem; */
  display: flex;
  flex-direction: column;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem 2rem;
  margin-bottom: 20px;
  color: #07081c;

  input {
    height: 46px;
    border: 1px solid #617287;
    padding-left: 10px;
    font-size: 1rem;
    font-family: "Manrope", sans-serif;
  }

  input:focus {
    outline: none;
    border-color: #617287;
  }
`;
export const TextFiled = styled.label`
  color: rgb(7, 8, 28);
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: 12px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  margin: 0 auto;
  margin-top: 20px;
  width: 165px;
  height: 43px;
  border: none;
  color: #ffffff;
  background-image: linear-gradient(80deg, #ac3678, #d8314f, #fa8246);
  cursor: pointer;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 1rem;
  &:hover {
    color: #9e9fa6;
  }
`;
