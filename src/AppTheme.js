import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import { useSelector } from "react-redux";
import { theme } from "./styles/theme";
import { selectDarkMode } from "./features/modes/modesSlice";

function AppTheme({ children }) {
    const darkMode = useSelector(selectDarkMode);

    return (
        <ThemeProvider theme={{ ...theme, darkMode }}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    );
}

export default AppTheme;