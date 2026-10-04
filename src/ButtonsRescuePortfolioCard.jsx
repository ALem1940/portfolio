function ButtonsRescuePortfolioCard() {
  let name = "Buttons Rescue";
  let description = "A website for an animal shelter to adopt an adorable cat.";
  let liveUrl = "https://alem1940.github.io/buttons-rescue/";
  let repoUrl = "https://github.com/ALem1940/buttons-rescue";
  return (
    <article className="card-jade">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        <a href={liveUrl}>See it live</a> · <a href={repoUrl}>Read the code</a>
      </p>
    </article>
  );
}

export default ButtonsRescuePortfolioCard;
