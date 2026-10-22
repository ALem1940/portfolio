import imageUrl from "./image-url.js";

const heroPhoto = (photo, width, height, sat, description) => {
  const src = imageUrl(photo, width, height, 0, sat);
  const alt = description;
  const thumb = imageUrl(photo, 300, 125, 0, sat);
  return [src, alt, thumb];
};

export default heroPhoto;
