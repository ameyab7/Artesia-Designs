import React from 'react'
import './Works.css'
import art from "../../assets/art.png";
import art2 from "../../assets/art2.png";
import art3 from "../../assets/art3.png";
import art4 from "../../assets/home.jpg";
import art5 from "../../assets/durai_scaled.jpg";
import art6 from "../../assets/vase_scaled.jpg";

const Works = () => {
  return (
    <div className='works-container'>
      <div className='works'>
        <div className="work">
          <img src={art} alt="First Art" />
          <div className="caption">
              <p> Information about image</p>
          </div>
        </div>
        <div className="work">
          <img src={art2} alt="Second Art" />
          <div className="caption">
              <p> Information about image 2</p>
          </div>
        </div>
        <div className="work">
          <img src={art3} alt="Third Art" />
          <div className="caption">
              <p> Information about image 3</p>
          </div>
        </div>
        <div className="work">
          <img src={art4} alt="Fourth Art" />
          <div className="caption">
              <p> Information about image 4</p>
          </div>
        </div>
        <div className="work">
          <img src={art5} alt=" fifth Art" />
          <div className="caption">
              <p> Information about image 5</p>
          </div>
        </div>
        <div className="work">
          <img src={art6} alt=" sixth Art" />
          <div className="caption">
              <p> Information about image 6</p>
          </div>
        </div>
      </div>
      <a href="https://www.instagram.com/artesiadesigns/" target="_blank" rel="noopener noreferrer" className="see-more-btn">See More Here</a>
    </div>
  )
}

export default Works
