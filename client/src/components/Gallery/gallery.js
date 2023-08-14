import React, { useState } from 'react';
import img1 from "../../images/a1.jpg";
import img10 from "../../images/a10.jpeg";
import img11 from "../../images/a11.jpg";
import img12 from "../../images/a12.jpg";
import img13 from "../../images/a13.jpg";
import img14 from "../../images/a14.jpg";
import img15 from "../../images/a15.jpg";
import img16 from "../../images/a16.jpg";
import img17 from "../../images/a17.jpg";
import img18 from "../../images/a18.jpg";
import img19 from "../../images/a19.jpg";
import img2 from "../../images/a2.jpg";
import img20 from "../../images/a20.jpg";
import img21 from "../../images/a21.jpg";
import img22 from "../../images/a22.jpg";
import img23 from "../../images/a23.jpg";
import img24 from "../../images/a24.jpg";
import img25 from "../../images/a25.jpg";
import img26 from "../../images/a26.jpg";
import img27 from "../../images/a27.jpg";
import img3 from "../../images/a3.jpg";
import img4 from "../../images/a4.jpg";
import img5 from "../../images/a5.jpg";
import img6 from "../../images/a6.jpg";
import img7 from "../../images/a7.jpg";
import img8 from "../../images/a8.jpg";
import img9 from "../../images/a9.jpg";
import gallery1 from '../../images/gallery-1.jpg';
import gallery10 from '../../images/gallery-10.jpg';
import gallery11 from '../../images/gallery-11.jpg';
import gallery12 from '../../images/gallery-12.jpg';
import gallery13 from '../../images/gallery-13.jpg';
import gallery14 from '../../images/gallery-14.jpg';
import gallery15 from '../../images/gallery-15.jpg';
import gallery16 from '../../images/gallery-16.jpg';
import gallery2 from '../../images/gallery-2.jpg';
import gallery4 from '../../images/gallery-4.jpg';
import gallery5 from '../../images/gallery-5.jpg';
import gallery6 from '../../images/gallery-6.jpg';
import gallery7 from '../../images/gallery-7.jpg';
import gallery8 from '../../images/gallery-8.jpg';
import gallery9 from '../../images/gallery-9.jpg';
import "./gallery.css";

const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState('all'); // Default category is 'all'
  
    // Array of image URLs for each category
    const imageCategories = {
      all: [
        gallery4, gallery5, gallery11, gallery12, gallery13, gallery15, gallery16, img1, img2, img4, gallery6, 
        gallery8, gallery9, gallery10, img5, img6, img7, img8, img9, gallery2, gallery7, img10, img11, img12, 
        img13, img14, img15, gallery4, gallery11, img16, img17, img18, img19, img20, img21, gallery1, img22, 
        img23, img24, img25, img26, img27, gallery14, img3
      ],    
      nature: [
        gallery4, gallery5, gallery11, gallery12, gallery13, gallery15, gallery16
      ],
      people: [
        img1, img2, img4, gallery6, gallery8, gallery9, gallery10
      ],
      architecture: [
        img5, img6, img7, img8, img9, gallery2, gallery7
      ],
      animals: [
        img10, img11, img12, img13, img14, img15, gallery4, gallery11
      ],
      sports: [
        img16, img17, img18, img19, img20, img21, gallery1
      ],
      travel: [
        img22, img23, img24, img25, img26, img27, gallery14, img3
      ],
    };
  
    const handleCategoryChange = (category) => {
      setSelectedCategory(category);
    };
  
    return (
      <div>
        <h1>This is my Gallery Page</h1>
        <div className="categoryButtons">
          <button className='butt' onClick={() => handleCategoryChange('all')}>All</button>
          <button className='butt' onClick={() => handleCategoryChange('nature')}>Nature</button>
          <button className='butt' onClick={() => handleCategoryChange('people')}>People</button>
          <button className='butt' onClick={() => handleCategoryChange('architecture')}>Architecture</button>
          <button className='butt' onClick={() => handleCategoryChange('animals')}>Animals</button>
          <button className='butt' onClick={() => handleCategoryChange('sports')}>Sports</button>
          <button className='butt' onClick={() => handleCategoryChange('travel')}>Travel</button>
        </div>
        <div className="imageGrid">
          {imageCategories[selectedCategory].map((imageUrl, index) => (
            <img key={index} src={imageUrl} alt={`Image ${index}`} />
          ))}
        </div>
      </div>
    );
  };
  
  export default Gallery;