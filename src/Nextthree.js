import React, { useEffect, useRef, useState } from 'react';
import pic from './3.png';
import './styles.css'; // Import your CSS file
import { useInView } from 'react-intersection-observer';

const Nextthree = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div className="compliant" ref={ref}>
     <h6>USER PII DATA</h6>
      <h4 className={isVisible ? 'animated' : ''}>Maintain GDPR compliance</h4>
      
      <p>Stay compliant with privacy rules and regulations <br/> at scale with self-service data deletion, which <br/> which allows admins to immediately erase user data as <br/> needed</p>
      <img src={pic} alt="pic" className='pic'></img>
    </div>
  );
};

export default Nextthree;
