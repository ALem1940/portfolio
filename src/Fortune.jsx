const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function Fortune() {
  let fortunes = ["Turn in work early!", "Master Javascript!", "Enjoy React!"];
  let index = randomNumber(0, fortunes.length - 1);
  return <p>{fortunes[index]}</p>;
}

export default Fortune;
