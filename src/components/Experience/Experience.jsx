import React from 'react';
import './Experience.css'; // We'll still keep the CSS separate for clarity

// 1. Data directly in the component file
const experienceData = [
  {
    id: 1,
    company: "Externsclub",
    role: "Full-Stack Developer Intern",
    dates: "June 2024 - Aug 2024",
    link: "http://www.externsclub.com/"
  },
  {
    id: 2,
    company: "Center of Autonomous Systems",
    // organization: "Google Developer Groups",
    role: "Technical Team Lead",
    dates: "July 2024 - Dec 2024",
    link: "https://www.gitam.edu/research/centre-of-excellence/centre-for-autonomous-system#:~:text=The%20Centre%20for%20Autonomous%20Systems,enhancing%2C%20and%20analysing%20autonomous%20systems."
  },
  {
    id: 3,
    company: "Externsclub",
    role: "Full-Stack Developer Intern",
    dates: "Jan 2025 - Feb 2024",
    link: "https://eazybyts.com/"
  },

  {
    id: 4,
    company: "Novitech",
    role: "AIML Intern",
    dates: "Nov 2024 - Jan 2025",
    link: "https://novitechrd.com/"
  }
];

// 2. ExperienceItem sub-component (defined within the same file)
const ExperienceItem = ({ company, organization, role, dates, link }) => {
  const content = (
    <>
      {company}
      {organization && <span className="organization-text"> ( {organization} )</span>}
      {/* Ensure you have Font Awesome included in your project for the icon */}
      {link && <i className="fas fa-arrow-up-right-from-square icon-link"></i>}
    </>
  );

  return (
    <div className="experience-item">
      <h3 className="experience-company">
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            {content}
          </a>
        ) : (
          content
        )}
      </h3>
      <p className="experience-role">{role}</p>
      <p className="experience-dates">{dates}</p>
    </div>
  );
};


// 3. Main ExperienceSection Component
const ExperienceSection = () => {
  return (
    <section id= "exp" className="experience-section">
      <div className="title-container">
        {/* <h1 className="background-title-text">EXPERIENCE</h1> */}
        <div className="main-title-wrapper">
          <h2 className="main-title-text">EXPERIENCE</h2>
        </div>
      </div>
      <div className="experience-list">
        {experienceData.map((exp) => (
          <ExperienceItem
            key={exp.id}
            company={exp.company}
            organization={exp.organization}
            role={exp.role}
            dates={exp.dates}
            link={exp.link}
          />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;