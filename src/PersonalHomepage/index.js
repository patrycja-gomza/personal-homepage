import ModeSwitch from "./ModeSwitch";
import Header from "./Header";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import emojiTools from "./images/tools.svg";
import emojiRocket from "./images/rocket.svg";
import personalData from './personalData.json';

const PersonalHomepage = () => {
  return (
    <>
      <ModeSwitch />
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

export default PersonalHomepage;
