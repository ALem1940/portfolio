import Header from "./Header.jsx";
import About from "./About.jsx";
import Fortune from ".Fortune.jsx";

function App() {
  return (
    <div>
      <Header />
      <p>Pokémon trainer from Pallet Town.</p>
      <Fortune />
      <GitHubLink />
      <About />
      <ProjectCount />
      <Footer />
    </div>
  );
}

export default App;
