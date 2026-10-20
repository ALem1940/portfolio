import { useState } from "react";
import heroPhoto from "./hero-photo.js";
import "./hero.css";

function Hero() {
  //const src = heroPhoto(1200, 500)
  //const alt = "Lake by mountains covered in snow"
  const [src, alt] = heroPhoto(
    1200,
    500,
    0,
    "Lake by mountains covered in snow",
  );
  const [sat, setSat] = useState(0);

  const showColor = () => {
    setSat(0);
  };

  const showBlackAndWhite = () => {
    setSat(-100);
  };

  return (
    <div className="hero">
      <img src={src} alt={alt} />

      <p>
        <button onClick={showColor}>Color</button>
        &nbsp;
        <button onClick={showBlackAndWhite}>Black And White</button>
      </p>
    </div>
  );
}

export default Hero;
