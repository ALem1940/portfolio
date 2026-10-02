import Header from "./Header.jsx";
import About from "./About.jsx";

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Fortune() {
  let fortunes = ["Turn in work early!", "Master Javascript!", "Enjoy React!"];
  let index = randomNumber(0, fortunes.length - 1);
  return <p>{fortunes[index]}</p>;
}

function Footer() {
  let year = new Date().getFullYear();
  return <p>&copy; {year} Ashanti Lemonia</p>;
}

function GitHubLink() {
  let url = "https://github.com/ALem1940";
  let label = "My GitHub";
  return <a href={url}>{label}</a>;
}

function App() {
  return (
    <div>
      <Header />
      <p>Pokémon trainer from Pallet Town.</p>
      <Fortune />
      <GitHubLink />
      <About />
      <Footer />
    </div>
  );
}

export default App;
