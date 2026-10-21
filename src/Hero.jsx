import { useState } from "react";
import heroPhoto from "./hero-photo.js";
import "./hero.css";

function Hero() {
  //const src = heroPhoto(1200, 500)
  //const alt = "Lake by mountains covered in snow"
  
  const [sat, setSat] = useState(0);

  const showColor = () => {
    setSat(100);
  };

  const showBlackAndWhite = () => {
    setSat(0)
  };


  const [src, alt] = heroPhoto(
    1200,
    500,
    sat,
    "Lake by mountains covered in snow")
  return (
    <div className="hero">
      <img src={src} alt={alt} style={{ filter : `saturate(${sat}%)`}} />
      <p>
        <button onClick={showColor}>Color</button>
        &nbsp;
        <button onClick={showBlackAndWhite}>Black And White</button>
      </p>
    </div>
  )
}

export default Hero;
