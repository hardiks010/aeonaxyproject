import React from 'react';
import images from './images.png';
import imageb from './imageb.png';
import imagec from './imagec.png';
import imaged from './imaged.png';

const Hero = () => {
  return (
    <div className="top-section">
      {/* Add your text and images here */}
      <h1>Secure <br/> connections, <br/> Empowered <br/> teams </h1>
      <img src={images} alt="images" className="imagea"></img>
      <img src={imageb} alt="imageb" className="imageb"></img>
      <img src={imagec} alt="imagec" className="imagec"></img>
      <img src={imaged} alt="imaged" className="imaged"></img>


      
      <p>Bring your teams together in a centrally- <br/> managed ecosystem with complete <br/> oversight and visibility.</p>
      <button>Contact sales
        <a href='https://calendly.com/for-teams'></a>
      </button>
      
    </div>
  );
};

export default Hero;

  