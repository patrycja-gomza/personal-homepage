import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
::after,
::before {
  box-sizing: inherit;
  transition: background-color 0.3s linear, color 0.3s linear;
}

#root {
  font-family: 'Inter', sans-serif;
}

body {
    margin: 0 auto;
    max-width: 1216px;
    color: ${({ theme: { darkMode, color } }) => (
    darkMode ? color.white : color.mineShaft)};
    background-color: ${({ theme: { darkMode, color } }) => (
    darkMode ? color.mineShaft : color.whiteLilac)};
    display: flex;
    flex-direction: column;
    padding: 32px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
      padding: 16px;
      margin: 16px;
    }
}
`;
