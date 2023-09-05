import React from 'react';
import Navbar from './components/Navbar';
import UpperContent from './components/UpperContent';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import Mission from './components/Mission';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <UpperContent />
      <AboutUs />
      <Products />
      <Mission />
      <Footer />
    </div>
  );
}

export default App;
