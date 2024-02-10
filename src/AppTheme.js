import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { GlobalStyle } from "./app/GlobalStyle";
import { theme } from "./app/theme";
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