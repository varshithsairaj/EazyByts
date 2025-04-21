import React from "react";
import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <h1>
        <span>I'm Panchadarla Varshith Sai Raj</span>, Full Stack Developer based in India.
      </h1>
      <p>
        A highly motivated and detail-oriented Full Stack Developer with expertise in building dynamic, responsive web applications from Visakhapatnam, Andhra Pradesh.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a
            href="/varshith_resume_internship (3).pdf" // Reference the file directly from the public folder
            style={{  display: "block",        // Ensures the link behaves like a block element
              textAlign: "center",     // Centers the text
              textDecoration: "none",  // Removes underline
              color: "inherit",        // Inherits text color from parent
              width: "100%",           // Makes the link fill the container
              height: "100%",          // Makes the link fill the container
               }}
          >
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
