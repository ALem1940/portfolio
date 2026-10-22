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
  const [sat, setSat] = useState(0);

  const showColor = () => {
    setSat(100);
  };

  const showBlackAndWhite = () => {
    setSat(0);
  };

  const [src, alt] = heroPhoto(photos[0], 1200, 500, sat, descriptions[0]);
  return (
    <div className="hero">
      <img src={src} alt={alt} style={{ filter: `saturate(${sat}%)` }} />
      <p className="hero-buttons">
        <button onClick={showColor}>Color</button>
        <button onClick={showBlackAndWhite}>Black And White</button>
      </p>
    </div>
  );
}

export default Hero;
