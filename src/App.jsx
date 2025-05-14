import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import MyWork from './components/MyWork/MyWork';
import Contact from './components/Contact/Contact';
import ExperienceSection from './components/Experience/Experience';
import PurpleSectionAurora from './components/Effect/PurpleSectionAurora';

const App = () => {
  return (
    <div>
      <PurpleSectionAurora /> 
      <Navbar />
      <Hero />
      
      <MyWork />
      <About />
      <ExperienceSection />
      <Contact />
    </div>
  );
}

export default App;
