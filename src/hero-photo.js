import imageUrl from "./image-url.js"

const heroPhoto = (width, height, description) => {
  const src = imageUrl(width, height)
  const alt = description
  const thumb = imageUrl(300,125)
  return [src, alt, thumb]
}

export default heroPhoto;
