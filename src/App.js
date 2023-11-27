import Skills from "./Skills";

function App() {
  return (
    <>
      <header></header>
      <main>
        <Skills
          title="My skillset includes 🛠️"
          body="currentSkills"
        />
        <Skills
          title="What I want to learn next 🚀"
          body="futureSkills"
        />
        <article></article>
      </main >
      <footer></footer>
    </>
  );
}

export default App;
