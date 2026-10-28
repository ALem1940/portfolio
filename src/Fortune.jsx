import { useState } from "react";

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function Fortune() {
  const fortunes = [
    "Turn in work early!",
    "Master Javascript!",
    "Enjoy React!",
  ];
  const [index, setIndex] = useState(0, fortunes.length - 1)
  const newFortune = () => {
    setIndex(randomNumber(0, fortunes.length - 1));
  };
  return (
    <div>
      <p>{fortunes[index]}</p>
      <button onClick={newFortune}>New Fortune</button>
    </div>
  );
}

export default Fortune;
