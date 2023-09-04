import React from 'react';
import Navbar from './components/Navbar';
import UpperContent from './components/UpperContent';
import AboutUs from './components/AboutUs';
import Products from './components/Products';

function App() {
  return (
    <div>
      <Navbar />
      <UpperContent />
      <AboutUs />
      <Products />
    </div>
  );
}

export default App;
