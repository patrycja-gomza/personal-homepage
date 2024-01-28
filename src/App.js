import Switch from "./features/modes/Switch";
import Header from "./common/Header";
import Skills from "./common/Skills";
import Portfolio from "./features/projects/Portfolio";
import Footer from "./common/Footer";
import emojiTools from "./images/tools.svg";
import emojiRocket from "./images/rocket.svg";
import personalData from './data/personalData.json';

function App() {
  return (
    <>
      <Switch />
      <Header />
      <main>
        <Skills
          title="My skillset includes"
          emoji={emojiTools}
          skills={personalData.currentSkills}
        />
        <Skills
          title="What I want to learn next"
          emoji={emojiRocket}
          skills={personalData.futureSkills}
        />
        <Portfolio />
      </main >
      <Footer />
    </>
  );
}

export default App;
