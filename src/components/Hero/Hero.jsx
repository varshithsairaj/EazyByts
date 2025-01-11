import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';
// import profile_img from '../../assets/profile_img.jpg'
const hero = () => {
  return (
    <div id='home' className='hero'>
        
         <h1><span>I'm Panchadarla Varshith Sai raj</span>, Full Stack Developer based in India. </h1>
        <p>A highly motivated and detail-oriented Full Stack Developer with expertise in building dynamic, responsive web applications from Visakhapatnam, Andhra Pradesh </p>
        <div className='hero-action'>
            <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className='hero-resume'>My resume</div>
        </div>
    </div>
  )
}

export default hero
