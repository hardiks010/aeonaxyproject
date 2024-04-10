import React from 'react';
import './styles.css';
import stack from './stack.png'
import texas from './texas.png'
import bitly from './bitly.png'


const Cards = () => {
  return (
    <div className="card-container">
      <div className="card">
    <img src={stack} alt="stack" className="stack"></img>
      
        <h3>CUSTOMER STORY</h3>
        <p>Stack Overflow's streamlined <br/> admin forges  relationships with new recruits</p>
        <a href="https://stackoverflow.com/" className="read-more">Read now<span className="arroww"></span></a>
      </div>
      <div className="card">
    <img src={texas} alt="texas" className="texas"></img>

        <h3>CUSTOMER STORY</h3>
        <p>University of Texas at Austin<br/>  saves money through<br/>  administrative scheduling</p>
        <a href="https://www.utexas.edu/" className="read-more">Read now<span className="arroww"></span></a>
      </div>
      <div className="card">
    <img src={bitly} alt="bitly" className="bitly"></img>
        <h3>CUSTOMER STORY</h3>
        <p>More meetings, better prospects <br/> boost Bitly's conversions across <br/> the board</p>
        <a href="https://bitly.com/" className="read-more">Read now<span className="arroww"></span></a>
      </div>
      

  

    </div>
  );
}

export default Cards;
