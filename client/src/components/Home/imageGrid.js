// ImageGrid.js
import React, { useState } from 'react';
import gallery1 from '../../images/gallery-1.jpg';
import gallery10 from '../../images/gallery-10.jpg';
import gallery11 from '../../images/gallery-11.jpg';
import gallery12 from '../../images/gallery-12.jpg';
import gallery13 from '../../images/gallery-13.jpg';
import gallery14 from '../../images/gallery-14.jpg';
import gallery15 from '../../images/gallery-15.jpg';
import gallery16 from '../../images/gallery-16.jpg';
import gallery2 from '../../images/gallery-2.jpg';
import gallery3 from '../../images/gallery-3.jpg';
import gallery4 from '../../images/gallery-4.jpg';
import gallery5 from '../../images/gallery-5.jpg';
import gallery6 from '../../images/gallery-6.jpg';
import gallery7 from '../../images/gallery-7.jpg';
import gallery8 from '../../images/gallery-8.jpg';
import gallery9 from '../../images/gallery-9.jpg';
import './home.css';


const ImageGrid = () => {
  const images = [
    gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, 
    gallery8, gallery9, gallery10, gallery11, gallery12, gallery13, gallery14, 
    gallery15, gallery16
  ];

  const [zoomedImage, setZoomedImage] = useState(null);

  const handleImageClick = (index) => {
    setZoomedImage(index);
  };

  const handleCloseZoom = () => {
    setZoomedImage(null);
  };

  return (
    <div className="image-grid">
      {images.map((image, index) => (
        <div
          key={index}
          className="image-container"
          onClick={() => handleImageClick(index)}
        >
          <img src={image} alt={`Image ${index}`} />
        </div>
      ))}

      {zoomedImage !== null && (
        <div className="zoom-overlay" onClick={handleCloseZoom}>
          <img
            src={images[zoomedImage]}
            alt={`Zoomed Image ${zoomedImage}`}
            className="zoomed-image"
          />
        </div>
      )}
    </div>
  );
};

export default ImageGrid;
