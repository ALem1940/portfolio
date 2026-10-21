import imageUrl from "./image-url.js";

const heroPhoto = (photo, width, height, brightness, sat, description) => {
  const src = imageUrl(photo, width, height, 0, sat);
  const alt = description;
  const thumb = imageUrl(300, 125, 0, 0);
  return [src, alt, thumb];
};

export default heroPhoto;
