import Header from "./Header.jsx";
import About from "./About.jsx";
import Fortune from "./Fortune.jsx";
import GitHubLink from "./GiHubLink.jsx";
import ProjectCount from "./ProjectCount.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <>
      <h1>Hello World!</h1>
      <div className="container">
        <Header />
        <p>Pokémon trainer from Pallet Town.</p>
        <Fortune />
        <GitHubLink />
        <About />
        <ProjectCount />
        <Footer />

      </div>
    </>
  );
}

export default App;
