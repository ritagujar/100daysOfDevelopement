import { css } from "styled-components";

export const colors = {
  backgroungColor: "#FF4185",
};

export const getClickableLinkStyle = () => {
  return css`
    display: inline-block;
    position: relative;
    width: max-content;
    &:after {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 1.7px;
      bottom: 0;
      left: 0;
      background-color: ${colors.backgroungColor};
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }
    &:hover:after {
      transform: scaleX(0.7);
      transform-origin: bottom left;
    }
  `;
};
