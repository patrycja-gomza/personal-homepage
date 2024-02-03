import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { useSelector } from "react-redux";
import { theme } from "./theme";
import { selectDarkMode } from "./PersonalHomepage/ModeSwitch/modesSlice";

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