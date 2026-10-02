import Header from "./Header.jsx";

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

function App() {
  return (
    <div>
      <Header />
      <p>Pokémon trainer from Pallet Town.</p>
      <Fortune />
      <Footer />
    </div>
  );
}

export default App;
