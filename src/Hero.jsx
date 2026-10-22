import { useState } from "react";
import heroPhoto from "./hero-photo.js";
import "./hero.css";

function Hero() {
  const photos = [
    "photo-1455156218388-5e61b526818b",
    "photo-1616667664034-c947c1e2cf29",
    "photo-1658902050586-96af4d9a08c6",
  ];

  const descriptions = [
    "Lake by mountains covered in snow",
    "Africans wearing red tribal attire walking in a group",
    "Mountain side off the coast under a blue sky",
  ];

  const [index, setIndex] = useState(0);

  const [sat, setSat] = useState(0);

  const [blur, setBlur] = useState(0);

  const nextPhoto = () => {
    if (index === photos.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const previousPhoto = () => {
    if (index === 0) {
      setIndex(photos.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const showColor = () => {
    setSat(100);
  };

  const showBlackAndWhite = () => {
    setSat(0);
  };

  const [src, alt] = heroPhoto(
    photos[index],
    1200,
    500,
    sat,
    descriptions[index],
  );

  const moreBlur = () => {
    setBlur(blur + 100);
  };

  const removeBlur = () => {
    setBlur(0);
  };

  return (
    <div className="hero">
      <img
        src={src + "&blur" + blur}
        alt={alt}
        style={{ filter: `saturate(${sat}%)` }}
      />
      <p>
        Photo {index + 1} if {photos.length}
      </p>
      <p className="hero-buttons">
        <button onClick={previousPhoto}>Previous</button>
        <button onClick={nextPhoto}>Next</button>
        <button onClick={showColor}>Color</button>
        <button onClick={showBlackAndWhite}>Black And White</button>
        <button onClick={moreBlur}>More Blur</button>
        <button onClick={removeBlur}>No Blur</button>
      </p>
    </div>
  );
}

export default Hero;
