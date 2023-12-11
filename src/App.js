import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from "./GlobalStyle";
import { useSelector } from "react-redux";
import { theme } from "./theme";
import { selectDarkMode } from "./features/modes/modesSlice";
import Switch from "./features/modes/Switch";
import Header from "./common/Header";
import Skills from "./common/Skills";
import Portfolio from "./features/projects/Portfolio";
import Footer from "./common/Footer";
import emojiTools from "./images/tools.svg";
import emojiRocket from "./images/rocket.svg";

function App() {
  const darkMode = useSelector(selectDarkMode);

  return (
    <ThemeProvider theme={{ ...theme, darkMode }}>
      <GlobalStyle />
      <>
        <Switch />
        <Header />
        <main>
          <Skills
            title="My skillset includes"
            emoji={emojiTools}
            body="currentSkills"
          />
          <Skills
            title="What I want to learn next"
            emoji={emojiRocket}
            body="futureSkills"
          />
          <Portfolio />
        </main >
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
