import imageUrl from "./image-url.js"

const heroPhoto = (width, height, sat, description) => {
  const src = imageUrl(width, height, sat)
  const alt = description
  const thumb = imageUrl(300,125)
  return [src, alt, thumb]
}

export default heroPhoto;
