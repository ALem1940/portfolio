const Gallery = () => {
  const photos = [
    "https://images.unsplash.com/photo-1664331746392-cb3a90a8c1ab?",
    "https://images.unsplash.com/photo-1545451169-ccd644e02932?",
    "https://images.unsplash.com/photo-1562590980-1bfb0699efd9?",
  ];
  return (
    <div className="grid">
      <div>
        <img src="https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=200"></img>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1545451169-ccd644e02932?w=200"></img>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1562590980-1bfb0699efd9?w=200"></img>
      </div>
    </div>
  );
};

export default Gallery;
