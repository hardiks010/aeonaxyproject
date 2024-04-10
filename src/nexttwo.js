import React from 'react';
import fiveimg from './fiveimg.png'; // Import your logo image
import './styles.css'; // Import your CSS file

const Nexttwo = () => {
  return (
    <div className='five'>
    <h3>Get more value from existing technology </h3>
    <p>Calendly securely integrates with the tools your teams rely <br/> on every day. This includes seamless OAuth through<br/>  Google Calendar and Office365 as well as integrations<br/>  across leading video conferencing tools (Zoom, Google<br/>  Meet, Microsoft Teams, Webex), and more.</p>

    <img src={fiveimg} alt="fiveimg" className="fiveimg"></img>
    
</div>
  );
};

export default Nexttwo;
