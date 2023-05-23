import React from 'react';
import './Linkedin.css';
import image from './../../img/src.png';

const Linkedin = () => {
  return (
    <div className="Linkedin"
    onClick={() =>
        window.open('https://www.linkedin.com/in/thalles-melo-b38085242/', '_blank')
      }>
        <img src={image} alt='' />
        <span>Follow me on LinkedIn</span>
        <span>Click here</span>
    </div>
  )
}

export default Linkedin