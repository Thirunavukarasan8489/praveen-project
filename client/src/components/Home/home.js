import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import ImageGrid from './imageGrid';
import Footer from '../NavBar/Footer';

const Home = () => {
    return(
        <>
            <br/>
            <br/>
            <h1 className='homeHead'> A single photograph contains <br/>different images
                <span className='homePara'><br/> God creates the beauty. My camera and I are the witness. </span>
            </h1>
            <div className="centerButton">
                <Link to="/about">
                    <button className="homeButton">Available For HIRE</button>
                </Link>
            </div>
            <br/> <br/> <br/>
            <ImageGrid />
            <hr className="divider" />
            <Footer />
        </>
        
    )
}

export default Home;