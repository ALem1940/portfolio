import heroPhoto from "./hero-photo.js";
import "./hero.css";

function Hero() {
  const src = heroPhoto(1200, 500)
  const alt = "Lake by mountains covered in snow"
  return (
    <div className="hero">
      <img src={src} alt={alt} />
    </div>
  )
}

export default Hero;
