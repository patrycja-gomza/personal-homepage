import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
::after,
::before {
  box-sizing: inherit;
}

#root {
  font-family: 'Inter', sans-serif;
}

body {
    margin: 0 auto;
    max-width: 1216px;
    color: ${({ theme }) => theme.color.mineShaft};
    background-color: ${({ theme: { darkMode, color } }) => (
    darkMode ? color.mineShaft : color.whiteLilac)};
}
`;
