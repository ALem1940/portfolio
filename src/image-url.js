const imageUrl = (photo, width, height, brightness, sat) => 
  `https://images.unsplash.com/${photo}?w=${width}&${height}&fit=crop&auto=format&sat=${sat}`
  



export default imageUrl;
