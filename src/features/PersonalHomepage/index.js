import ModeSwitch from "../../common/ModeSwitch";
import Header from "./Header";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import emojiTools from "../../assets/tools.svg";
import emojiRocket from "../../assets/rocket.svg";
import personalData from '../PersonalHomepage/personalData.json';
import profilePhoto from './images/pgomza.jpg';
import { toArtPage } from "../../app/routes";

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
