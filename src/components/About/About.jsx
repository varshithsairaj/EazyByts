import React from "react";
import theme_pattern from '../../assets/theme_pattern.svg'
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaJs,
  FaFigma,
  FaGithubAlt,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import {
  SiRedux,
  SiDjango,
  SiFlask,
  SiMongodb,
  SiMysql,
  SiSqlite,
  SiStreamlit,
  SiCplusplus,
  SiC,
  SiExpress
} from "react-icons/si";



// import { RiNetflixFill } from "react-icons/ri";
// import { FaAmazon } from "react-icons/fa";
import "./About.css"; // Ensure you link your CSS file

const About = () => {
    return (
        <div id='skills' className="experience-container">
          <div className="about-title">
          <h1>Technical Skills</h1>
          <img src={theme_pattern} alt="" />

          </div>
          

          <div className="icon-grid">
        <div className="icon-box">
          <FaHtml5 size={50} color="#E34F26" />
          <p>HTML5</p>
        </div>
        <div className="icon-box">
          <FaCss3 size={50} color="#1572B6" />
          <p>CSS3</p>
        </div>
        <div className="icon-box">
          <FaReact size={50} color="#61DAFB" />
          <p>React</p>
        </div>
        <div className="icon-box">
          <FaJs size={50} color="#F7DF1E" />
          <p>JavaScript</p>
        </div>
        <div className="icon-box">
          <FaFigma size={50} color="#F24E1E" />
          <p>Figma</p>
        </div>
        <div className="icon-box">
          <FaGithubAlt size={50} color="#000" />
          <p>GitHub</p>
        </div>
        <div className="icon-box">
          <FaNodeJs size={50} color="#3C873A" />
          <p>Node.js</p>
        </div>
        <div className="icon-box">
          <SiExpress color="#000000" size={50} />
          <p>Express.js</p>
        </div>
        <div className="icon-box">
          <SiRedux size={50} color="#764ABC" />
          <p>Redux</p>
        </div>
        <div className="icon-box">
          <SiDjango size={50} color="#092E20" />
          <p>Django</p>
        </div>
        <div className="icon-box">
          <SiFlask size={50} color="#000" />
          <p>Flask</p>
        </div>
        <div className="icon-box">
          <SiMongodb size={50} color="#47A248" />
          <p>MongoDB</p>
        </div>
        <div className="icon-box">
          <SiMysql size={50} color="#00758F" />
          <p>MySQL</p>
        </div>
        <div className="icon-box">
          <SiSqlite size={50} color="#003B57" />
          <p>SQLite</p>
        </div>
        <div className="icon-box">
          <SiStreamlit size={50} color="#FF4B4B" />
          <p>Streamlit</p>
        </div>
        <div className="icon-box">
          <SiCplusplus size={50} color="#00599C" />
          <p>C++</p>
        </div>
        <div className="icon-box">
          <SiC size={50} color="#A8B9CC" />
          <p>C</p>
        </div>
        <div className="icon-box">
          <FaPython size={50} color="#3776AB" />
          <p>Python</p>
        </div>
      </div>
    </div>
  );
};
    

export default About;
