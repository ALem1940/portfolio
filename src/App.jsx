import "./flex-container.css";
import Header from "./Header.jsx";
import About from "./About.jsx";
import Fortune from "./Fortune.jsx";
import GitHubLink from "./GiHubLink.jsx";
import ProjectCount from "./ProjectCount.jsx";
import ButtonsRescuePortfolioCard from "./ButtonsRescuePortfolioCard.jsx";
import GreetingCardGeneratorPortfolioCard from "./GreetingCardGeneratorPortfolioCard.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <p>I am becoming Her.</p>
        <Fortune />
        <div className="grid">
          <ButtonsRescuePortfolioCard />
          <GreetingCardGeneratorPortfolioCard />
        </div>
        <GitHubLink />
        <About />
        <ProjectCount />
        <a href="https://github.com/ALem1940/portfolio/pull/1/changes"></a>

        <Footer />
      </div>
    </>
  );
}

export default App;
