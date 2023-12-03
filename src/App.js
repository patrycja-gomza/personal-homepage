import Switch from "./Switch";
import Header from "./Header";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
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
