import Switch from "./PersonalHomepage/ModeSwitch";
import Header from "./PersonalHomepage/Header";
import Skills from "./PersonalHomepage/Skills";
import Portfolio from "./PersonalHomepage/Portfolio";
import Footer from "./PersonalHomepage/Footer";
import emojiTools from "./PersonalHomepage/images/tools.svg";
import emojiRocket from "./PersonalHomepage/images/rocket.svg";
import personalData from './PersonalHomepage/personalData.json';

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
