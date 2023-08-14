import React from 'react';
import loc from '../../images/location.svg';
import phone from '../../images/phone.svg';
import profile from '../../images/profile-img.jpg';
import web from '../../images/website.svg';
import './about.css';
import Footer from '../NavBar/Footer';

const About = () => {
    return(
        <>
            <div className="about-container">
              <div className="about-image">
                <img className='abt-image' src={profile} alt="Photographer" />
              </div>
              <div className="about-content">
                <h2 className="about-heading">Professional Photographer from Our City</h2>
                <p className="about-details">
                  Today everything exists to end in a photograph.
                  <br />
                  <br />
                <img className='svgic' src={loc} alt='location svg'/>&nbsp;
                  <strong>Location &nbsp; :</strong>  Coimbatore
                  <br />

                <img className='svgic' src={web} alt='website svg'/> &nbsp;
                  <strong>Website &nbsp; :</strong>&nbsp; www.onlinestudio.com
                  <br />
                <img className='svgic' src={phone} alt='phone svg'/> &nbsp;
                  <strong>Phone &nbsp; &nbsp;&nbsp; :</strong> &nbsp;+9876543210
                  <br />
                <img className='svgic' src={loc} alt='location svg'/> &nbsp;
                  <strong>City &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;:</strong>&nbsp; Cbe, India
                  <br />
                  <br />
                  We provide photography and videography for an affordable price.
                  <br />
                  <br />
                  Also, we have handled many occasions including Birthdays, Parties,<br/> Weddings, Anniversaries, Functions, Festivals, Farewells, and Model shoots.
                </p>
              </div>
            </div>
            <hr className="divider" />
            <Footer/>
        </>

          );
        };

export default About;