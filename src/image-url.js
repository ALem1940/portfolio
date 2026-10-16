const imageUrl = (width, height, brightness, sat) =>
  "https://images.unsplash.com/photo-1455156218388-5e61b526818b?w=" +
  width +
  "&h=" +
  height +
  "&fit=crop&auto=format&bri=" +
  brightness +
  "&sat=" +
  sat;
export default imageUrl;
