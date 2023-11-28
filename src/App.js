import Header from "./Header";
import Skills from "./Skills";
import Portfolio from "./Portfolio";

function App() {
  return (
    <>
      <Header />
      <main>
        <Skills
          title="My skillset includes 🛠️"
          body="currentSkills"
        />
        <Skills
          title="What I want to learn next 🚀"
          body="futureSkills"
        />
        <Portfolio />
      </main >
      <footer></footer>
    </>
  );
}

export default App;
