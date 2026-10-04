function GreetingCardGeneratorPortfolioCard() {
  let name = "Greeting Card Generator";
  let description =
    "A playlist page that loads its songs from my own data API.";
  let liveUrl = "https://alem1940.github.io/greeting-card-generator/";
  let repoUrl = "https://github.com/ALem1940/greeting-card-generator";
  return (
    <article>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        <a href={liveUrl}>See it live</a> · <a href={repoUrl}>Read the code</a>
      </p>
    </article>
  );
}

export default GreetingCardGeneratorPortfolioCard;
