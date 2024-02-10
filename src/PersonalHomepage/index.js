import ModeSwitch from "./ModeSwitch";
import Header from "./Header";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import emojiTools from "./images/tools.svg";
import emojiRocket from "./images/rocket.svg";
import personalData from './personalData.json';
import profilePhoto from './images/pgomza.jpg';
import { toArtPage } from "../app/routes";

const PersonalHomepage = () => {
  return (
    <>
      <ModeSwitch />
      <Header
        name={personalData.name}
        to={toArtPage()}
        photo={profilePhoto}
        description={personalData.description}
      />
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
