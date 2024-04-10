
import Header from './Header';  // Assuming Header.js is in the same directory
import React from 'react';
import Hero from './Hero';
import BodySection from './Bodysection';
import HomePage from './HomePage';

import Nextbegin from './Nextbegin'
import Nextone from './Nextone';
import Nexttwo from './nexttwo';
import Feature from './Feature';
import Nextthree from './Nextthree';
import Cards from './Cards';
import Success from './Success';
//import Ban from './Ban';




function App() {
  return (
    
 <div className="container mx-auto px-4">
 <Header />  {/* Render the Header component here */}
 {/* Rest of your application components */}
 <Hero />
 <BodySection /> 
 <HomePage />

 <Nextbegin />
 <Nextone/>
 <Nexttwo/>
 <Feature/>
 <Nextthree/>
 <Success/>
 <Cards/>


 
      
</div>
    
  );
}

export default App;
