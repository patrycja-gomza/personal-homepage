import Switch from "./features/motifs/Switch";
import Header from "./common/Header";
import Skills from "./common/Skills";
import Portfolio from "./features/projects/Portfolio";
import Footer from "./common/Footer";
import emojiTools from "./images/tools.svg";
import emojiRocket from "./images/rocket.svg";

function App() {
  return (
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
  );
}

export default App;
