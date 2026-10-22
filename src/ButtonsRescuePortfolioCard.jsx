import { useState } from "react";
function ButtonsRescuePortfolioCard() {
  const name = "Buttons Rescue";
  const description =
    "A website for an animal shelter to adopt an adorable cat.";
  let details =
    "I built it in Level 2 to practice click listeners and the counter pattern.";
  const liveUrl = "https://alem1940.github.io/buttons-rescue/";
  const repoUrl = "https://github.com/ALem1940/buttons-rescue";
  const [likes, setLikes] = useState(0);
  const [open, setOpen] = useState(false);

  const addLike = () => {
    setLikes(likes + 1);
  };

  const toggleOpen = () => {
    setOpen(!open);
  };

  const removeLikes = () => {
    if (likes > 0) {
      setLikes(likes - 1);
    }
  };

  const resetLikes = () => {
    setLikes(0);
  };

  let text = description;
  if (open) {
    text = description + " " + details;
  }

  let label = "Show More";
  if (open) {
    label = "Show Less";
  }

  return (
    <article className="card-jade">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{text}</p>
      <p>
        <a href={liveUrl}>See it live</a> · <a href={repoUrl}>Read the code</a>
      </p>
      <button onClick={toggleOpen}>{label}</button>
      &nbsp;
      <button onClick={addLike}>Like {likes}</button>
      &nbsp;
      <button onClick={removeLikes}>Unlike</button>
      &nbsp;
      <button onClick={resetLikes}>Reset</button>
    </article>
  );
}

export default ButtonsRescuePortfolioCard;
