import Header from "./Header.jsx";
import About from "./About.jsx";
import Fortune from "./Fortune.jsx";
import GitHubLink from "./GiHubLink.jsx";
import ProjectCount from "./ProjectCount.jsx";
import ButtonsRescuePortfolioCard from "./ButtonsRescuePortfolioCard.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <p>Pokémon trainer from Pallet Town.</p>
        <Fortune />
        <ButtonsRescuePortfolioCard />
        <GitHubLink />
        <About />
        <ProjectCount />

        <Footer />
      </div>
    </>
  );
}

export default App;
