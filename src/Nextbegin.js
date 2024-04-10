import React, { useEffect, useRef, useState } from 'react';
import comp from './compp.png'; // Import your logo image
import './styles.css'; // Import your CSS file
import { useInView } from 'react-intersection-observer';

const Nextbegin = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div className="para" ref={ref}>
     
      <h3 className={isVisible ? 'animated' : ''}>Retain control as your teams scales</h3>
      
      <p>working with one organizational account ensures you <br/> securely account for all active users as you scale. With <br/> Calendly, IT teams can maintain more oversight over <br/> account access and individual permissions, as well as <br/> audit activity at any time.</p>
      <img src={comp} alt="comp" className='comp'></img>
    </div>
  );
};

export default Nextbegin;
