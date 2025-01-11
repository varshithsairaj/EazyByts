import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import MyWork from './components/MyWork/MyWork';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';  // Import Portfolio component

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <MyWork />
      <Portfolio />  {/* Add the Portfolio component here */}
      <Contact />
    </div>
  );
}

export default App;
