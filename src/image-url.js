const imageUrl = ({ photo, width, height, sat }) =>
  `https://images.unsplash.com/${photo}?w=${width}&h=${height}&fit=crop&auto=format&sat=${sat}`;

export default imageUrl;
