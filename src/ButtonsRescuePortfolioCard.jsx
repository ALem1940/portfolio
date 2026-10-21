import { useState } from "react";
function ButtonsRescuePortfolioCard() {
  const name = "Buttons Rescue";
  const description =
    "A website for an animal shelter to adopt an adorable cat.";
  const liveUrl = "https://alem1940.github.io/buttons-rescue/";
  const repoUrl = "https://github.com/ALem1940/buttons-rescue";
  const [likes, setLikes] = useState(0);

  const addLike = () => {
    setLikes(likes + 1);
  };
  
  const removeLikes = () => {
    if (likes > 0) {
      setLikes(likes - 1)
    }
  }

  const resetLikes = () => {
    setLikes(0)
  }

  return (
    <article className="card-jade">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        <a href={liveUrl}>See it live</a> · <a href={repoUrl}>Read the code</a>
      </p>
      <button onClick={addLike}>Like {likes}</button>
      &nbsp;
      <button onClick={removeLikes}>Unlike</button>
      &nbsp;
      <button onClick={resetLikes}>Reset</button>
    </article>
  );
}

export default ButtonsRescuePortfolioCard;
