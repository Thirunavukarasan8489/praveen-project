import React, { useState, useContext } from 'react';
import { AuthContext } from '../User/authContact';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import cam from '../../images/camera.svg';
import './Navbar.css';

const Navbar = () => {
  const history = useHistory();
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const [navItem, setNavItems] = useState([]);

  const handleLogoClick = () => {
    window.location.reload();
  };

  const handleLogout = () => {
    // Perform logout actions, e.g., clear localStorage, reset state, etc.
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
    history.push('/');
  };

  const handleLogin = () => {
    // Perform login actions, set isAuthenticated, etc.
    setIsAuthenticated(true);

    // Store authentication status in local storage
    localStorage.setItem('isAuthenticated', 'true');

    // Update the navItems state with authenticated user navigation items
    setNavItems([
      { text: 'Welcome Page', link: '/welcome' },
      { text: 'Book Now', link: '/usersDetails' },
      { text: 'View Bookings', link: '/viewBooking' },
      { text: 'Pay', link: '/pay' },
    ]);
  };

 const navItems = isAuthenticated
    ? [
        { text: 'Welcome Page', link: '/welcome' },
        { text: 'Book Now', link: '/usersDetails' },
        { text: 'View Bookings', link: '/viewBooking' },
        { text: 'Pay', link: '/pay' },
      ]
    : [
        { text: 'Home', link: '/' },
        { text: 'About', link: '/about' },
        { text: 'Admin', link: '/admin' },
        { text: 'Gallery', link: '/gallery' },
        { text: 'User', link: '/user' },
      ];

      return (
        <nav className="navbar">
          <div className="logoContainer" onClick={handleLogoClick}>
            <img src={cam} alt="Cam Logo" className="logoImg" />
            <span className="logoText">Your Studio</span>
          </div>
          <ul className="navList">
            {navItems.map((item) => (
              <li key={item.link} className="navItem">
                <Link to={item.link}>{item.text}</Link>
              </li>
            ))}
            {isAuthenticated ? (
              <li>
                <button className="logoutbtn" onClick={handleLogout}>Logout</button>
              </li>
            ) : null} {/* Close the ternary operator here */}
          </ul>
          <div className="socialIcons">
            <div>
              <a href="https://www.facebook.com"><FaFacebook /></a>
              <a href="https://www.twitter.com"><FaTwitter /></a>
              <a href="https://www.instagram.com"><FaInstagram /></a>
              <a href="https://www.linkedin.com"><FaLinkedin /></a>
              <a href="https://www.github.com"><FaGithub /></a>
            </div>
          </div>
        </nav>
      );
}
export default Navbar;
