// Hero.js
import React from "react";
import "./Hero.css";
// import AnchorLink from "react-anchor-link-smooth-scroll"; // Commented out in your original
import PurpleSectionAurora from '../Effect/PurpleSectionAurora';

const Hero = () => {
  return (
    <div id="home" className="hero">
      <PurpleSectionAurora /> {/* Add the aurora effect as the first child */}

      {/* Wrap content to ensure it's above the aurora */}
      <div className="hero-content-wrapper">
        <h1>
          <span>I'm Panchadarla Varshith Sai Raj</span>, Full Stack AI Developer based in India.
        </h1>
        <p>
          Full Stack AI Developer passionate about building intelligent, end-to-end applications that combine machine learning with seamless user experiences.
        </p>
        <div className="hero-action">
          {/* <div className="hero-connect"> ... </div> */}
          <div className="hero-resume">
            <a
              href="/resume.pdf"
            >
              My Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;