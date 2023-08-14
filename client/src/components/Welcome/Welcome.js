import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from 'react-responsive-carousel'; // Import the Carousel component
import './welcome.css'; // Create a CSS file for styling if needed
import carousel1 from '../../images/gallery-9.jpg'
import carousel2 from "../../images/a12.jpg";
import carousel3 from "../../images/a23.jpg";
import carousel4 from "../../images/a26.jpg";
import carousel5 from "../../images/a27.jpg";
import axios from "axios";
const Welcome = () => {
  const location = useLocation();
  console.log('Location State:', location.state);

  useEffect(() => {

    const GetProfile = `http://localhost:5500/api/profile`
    let tokens = sessionStorage?.token;
    const headers = {
      Authorization: `Bearer ${tokens}`,
    };
    axios.get(GetProfile, { headers }).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
  }, [])

  const { userDetailsData } = location.state || {};
  console.log('User Details Data:', userDetailsData);

  const firstName = userDetailsData?.user?.firstName;
  const lastName = userDetailsData?.user?.lastName;

  const quotes = [
    "Unlock your creativity in the virtual realm of online studios.",
    "The online studio is your playground to turn imagination into innovation.",
    "With the power of technology, the online studio becomes a haven for artists.",
    "In the digital realm, the online studio is where art meets technology.",
    "Create, collaborate, and conquer in the realm of online studios."
  ];

  const images = [
    carousel1,
    carousel2,
    carousel3,
    carousel4,
    carousel5,
    // Add more image paths as needed
  ];

  return (
    <div className="welcome-container">
      {firstName && lastName ? (
        <h1 className="welcame">Welcome, {firstName} {lastName}</h1>
      ) : (
        <h1>Welcome</h1>
      )}

      <div className="image-carousel-container">
        <Carousel autoPlay interval={4000} infiniteLoop showThumbs={false} showStatus={false}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Image ${index}`} />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="quote-carousel-container">
        <Carousel autoPlay interval={4000} infiniteLoop showThumbs={false} showIndicators={false} showArrows={false} showStatus={false}>
          {quotes.map((quote, index) => (
            <div key={index}>
              <p className="quote">{quote}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Welcome;
