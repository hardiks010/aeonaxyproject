import React from 'react';
import logo from './logo.svg'; // Import your logo image
import './styles.css'; // Import your CSS file

const Header = () => {
  return (
    <header className="header">
      {/* Logo */}
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>

      {/* Navigation */}
      <nav className="nav-links">
        <a href="https://calendly.com/">Individuals</a>
        <a href='https://calendly.com/for-teams'>Teams</a>
        <a href='https://calendly.com/for-enterprise'>Enterprise</a>
        
        {/* Products dropdown */}
        <div className="dropdown">
          <button className="dropbtn">Products<span className="arrow">&#9660;</span></button>
          <div className="dropdown-content">
            <a href="#">Product 1</a>
            <a href="#">Product 2</a>
            <a href="#">Product 3</a>
          </div>
        </div>

        <a href='https://calendly.com/pricing'>Pricing</a>

        {/* Resources dropdown */}
        <div className="dropdown">
          <button className="dropbtn">Resources<span className="arrow">&#9660;</span></button>
          <div className="dropdown-content">
            <a href="#">Resource 1</a>
            <a href="#">Resource 2</a>
            <a href="#">Resource 3</a>
          </div>
        </div>
      </nav>

      
    
      <nav className="nav-but"> 
        <a href='https://calendly.com/login' >Log In</a>
        <button>Get Started</button>
      </nav>
    </header>
  );
};

export default Header;
