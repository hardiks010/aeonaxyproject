import React, { useState, useEffect } from 'react';
import './styles.css';
import loga from './loga.png';
import logb from './logb.png';
import logc from './logc.png';

const HomePage = () => {
  const [isSloganVisible, setIsSloganVisible] = useState(false);
  const [isStatsVisible, setIsStatsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sloganPosition = document.querySelector('.slogan').getBoundingClientRect().top;
      const statsPosition = document.querySelector('.stats-section').getBoundingClientRect().top;

      // Check if the cursor is over the stats section or if the top of the stats section is in the viewport
      if (
        (statsPosition < window.innerHeight * 0.75 && statsPosition > 0) ||
        (sloganPosition < window.innerHeight * 0.75 && sloganPosition > 0)
      ) {
        setIsStatsVisible(true);
      } else {
        setIsStatsVisible(false);
      }

      // Check if the top of the slogan section is in the viewport
      if (sloganPosition < window.innerHeight * 0.75 && sloganPosition > 0) {
        setIsSloganVisible(true);
      } else {
        setIsSloganVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='slogan'>
      <h1 className={isSloganVisible ? 'visible' : 'hidden'}>Work faster, smarter, and more</h1>
      <h2 className={isSloganVisible ? 'visible' : 'hidden'}>securely</h2>
    
      <p className={isSloganVisible ? 'visible' : 'hidden'}>Sales, Customer Success, Support, Recruiting, and Makeketing teams <br/> rely on scheduling platforms  save time and quickly connect with <br/><span className="sub-text">customers.</span>
      </p>

      <div 
        className={`stats-section ${isStatsVisible ? 'slide-in' : ''}`}
        onMouseEnter={() => setIsStatsVisible(true)}
        onMouseLeave={() => setIsStatsVisible(false)}
      >
        <div className='stateline'></div>
        <div className="stat">
          <h3>75%</h3>
          <p>reduction in time to <br/> schedule customer success <br/> calls</p>
          <img src={loga} alt="loga" className="loga"></img>
        </div>
        <div className="stat">
          <h3>200%</h3>
          <p>increase in connections <br/> between sales and <br/>customer leads</p>
          <img src={logb} alt="logb" className="logb"></img>
        </div>
        <div className="stat">
          <h3>200%</h3>
          <p>more customers onboarded <br/> per month</p>
          <img src={logc} alt="logc" className="logc"></img>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
