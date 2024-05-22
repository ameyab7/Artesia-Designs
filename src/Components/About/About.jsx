import React from 'react';
import './About.css';
import intro_vid from '../../assets/intro.mp4';
import backgroundImage from '../../assets/about.png'; // Add the path to your background image

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <video src={intro_vid} className='about-vid' autoPlay muted loop controls />
      </div>
      <div className="about-right">
        <img src={backgroundImage} className="background-img" alt="Background" />
        <div className="text-overlay">
          
          
          <h2>Our Story</h2>
          <p>In a fusion of friendship and creativity, an interior designer and a graphic artist embarked on an enchanting journey inspired by South Asian artistry. 
            Their collaboration birthed a collection of captivating pieces, from hand-painted murals to bespoke graphic prints, each a gateway to a new adventure. With modern innovation intertwined with timeless tradition, 
            
            their creations echoed the soulful essence of the region's landscapes and culture. Step into their world, where every brushstroke and pixel ignites the imagination and invites exploration.</p>
            
        </div>
      </div>
    </div>
  );
}

export default About;
