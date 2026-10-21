import { useState } from "react";

function GreetingCardGeneratorPortfolioCard() {
  const name = "Greeting Card Generator";
  const description =
    "A playlist page that loads its songs from my own data API.";
  const liveUrl = "https://alem1940.github.io/greeting-card-generator/";
  const repoUrl = "https://github.com/ALem1940/greeting-card-generator";
  const [likes, setLikes] = useState(Number(localStorage.getItem("click-lab-likes")))
  const addLike = () => {
    const next = likes + 1
    setLikes(next)
    localStorage.setItem("click-lab-likes", next)
  }

  const removeLikes = () => {
    if (likes > 0) {}
    setLikes(likes - 1)
  }

  const resetLikes = () => {
    setLikes(0)
  }

  return (
    <div className="flex-container">
      <article className="card-pumpkin">
        <h2>{name}</h2>
        <p>{description}</p>
        <p>
          <a href={liveUrl}>See it live</a> ·{" "}
          <a href={repoUrl}>Read the code</a>
        </p>
        <button onClick={addLike}>Like {likes}</button>
        &nbsp;
        <button onClick={removeLikes}>Unlike</button>
        &nbsp;
        <button onClick={resetLikes}>Reset</button>
      </article>
    </div>
  );
}

export default GreetingCardGeneratorPortfolioCard;
