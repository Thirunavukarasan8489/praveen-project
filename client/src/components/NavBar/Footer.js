import React from 'react';
import './footer.css'; // Add your footer styles here

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="#" className="social-icon"><i className="fab fa-facebook"></i></a>
        <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
        <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
      </div>
      <p>&copy; 2023 Your Website Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
