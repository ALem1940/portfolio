import imageUrl from "./image-url.js";

const heroPhoto = ({ photo, width, height, sat, description }) => {
  const src = imageUrl({ photo, width, height, sat });
  const alt = description;
  const thumb = imageUrl({
    photo,
    width: 300,
    height: 125,
    sat,
  });
  return [src, alt, thumb];
};

export default heroPhoto;
