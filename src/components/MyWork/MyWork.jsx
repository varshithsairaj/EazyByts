import React from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
  return (
    <div>
      <div id="projects" className="mywork">
        {/* Title Section */}
        <div className="mywork-title">
          <h1>My Projects</h1>
          <img src={theme_pattern} alt="Pattern" />
        </div>

        {/* Projects Section */}
        <div className="mywork-container">
          {mywork_data.map((Worker, index) => (
            <a
              key={index}
              href={Worker.w_link}
           
              rel="noopener noreferrer"
              className="work-item"
            >
              <img src={Worker.w_img} alt={Worker.w_name} />
            </a>
          ))}
        </div>

        {/* Show More Section */}
        <div className="mywork-showmore">
          <p>Show More</p>
          <img src={arrow_icon} alt="Arrow Icon" />
        </div>
      </div>
    </div>
  );
};

export default MyWork;
