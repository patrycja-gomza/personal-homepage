import { personalData } from "./personalData";
import Skills from "./Skills";

function App() {
  return (
    <>
      <header></header>
      <main>
        <Skills
          title="My skillset includes"
          body={personalData.currentSkills}
        />
        <Skills
          title="What I want to learn next"
          body={personalData.futureSkills}
        />
        <article></article>
      </main >
      <footer></footer>
    </>
  );
}

export default App;
