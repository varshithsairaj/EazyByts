
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
// import mywork_data from '../../assets/mywork_data'; 

import PurpleSectionAurora from '../Effect/PurpleSectionAurora'; // Corrected path assuming 'Effects' folder
import project1_img from '../../assets/project_1.png';
import project2_img from '../../assets/project_2.png';
import project3_img from '../../assets/project_3.png';
import project4_img from '../../assets/project_4.png';
import project5_img from '../../assets/project_5.jpg';
import project6_img from '../../assets/project_6.png';



// App.js (or your main component file)
import React, { useState, useEffect, useRef } from 'react';



// --- SVG Icons (you can replace these with your preferred icon library) ---
const LiveIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.708.819-1z"/>
    <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.819 1H12a3 3 0 1 0 0-6H9z"/>
  </svg>
);

const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l3.5-3.5a.5.5 0 0 0-.708 0z"/>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" style={{ marginLeft: '0.3em', verticalAlign: 'middle' }}>
    <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
    <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
  </svg>
);

// --- Project Data ---
const projectsData = [
  {
    id: 1,
    title: 'Weather App',
    imageUrl: project2_img, // Replace with your actual image
    description: 'A sleek weather application with real-time forecasts and intuitive UI',
    techStack: ['HTML', 'CSS', 'Javascript', 'API'],
    liveLink: 'https://weather-pp-five.vercel.app/',
    codeLink: '#',
  },
  {
    id: 2,
    title: 'young green minds',
    imageUrl: project1_img, // Replace with your actual image
    description: 'A full-stack food delivery platform with real-time order tracking and payment...',
    techStack: ['React', 'Node.js', 'MongoDB'],
    liveLink: 'https://varshithsairaj.github.io/shore-hack-codex-/',
    codeLink: '#',
  },
  {
    id: 3,
    title: 'Hostel management system',
    imageUrl: project3_img, // Replace with your actual image
    description: ' Developed a web-based Hostel Management System with features like both student and warden login, room allocation, and outing permissions...',
    techStack: ['React', 'Python', 'Deep Learning', 'Flask'],
    liveLink: 'https://hostel-management-backend-org.vercel.app/',
    codeLink: '#',
  },
  {
    id: 4,
    title: 'Attendance System With Face Recognition',
    imageUrl: project4_img, // Replace with your actual image
    
    description: 'Smart Attendance System using Real-Time Face Recognition',
    techStack: ['Python', 'Flask-SocketIO', 'OpenCV ', 'MySql', 'Deep Learning'],
    liveLink: 'https://www.linkedin.com/posts/varshithsairaj_ai-computervision-machinelearning-activity-7319773005742583808-mFgY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5nk1sBWM6OCLvuH5UwYGDCnhfnEsThJiY',
    codeLink: ' https://lnkd.in/gPeN_WP4',
  },
  {
    id: 5,
    title: 'MindSync',
    imageUrl: project5_img, // Replace with your actual image
   
    description: 'AI-Powered Security Drone for Real-Time Surveillance and Threat Detection.',
    techStack: ['Python', 'OpenCV', 'Pixhawk Flight Controller', 'High-Resolution Camera', 'GPU-Accelerated FaceNet'],
    liveLink: 'https://www.linkedin.com/posts/varshithsairaj_facialrecognition-ai-security-activity-7294288515893186560-GtkM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5nk1sBWM6OCLvuH5UwYGDCnhfnEsThJiY',
    codeLink: '#',
  },

  {
    id: 6,
    title: 'PocketLink',
    imageUrl: project6_img, // Replace with your actual image
   
    description: 'A fully functional  Resource Management Web App for users to save, categorize, and manage learning resources like videos, PDFs, and notes.',
    techStack: ['React.js', 'Tailwind css', 'Node.js', 'Express.js', 'MongoDB'],
    liveLink: 'https://www.linkedin.com/posts/varshithsairaj_facialrecognition-ai-security-activity-7294288515893186560-GtkM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5nk1sBWM6OCLvuH5UwYGDCnhfnEsThJiY',
    codeLink: '#',
  },
];

// --- ProjectCard Component ---
const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.imageUrl} alt={project.title} className="project-image" />
      <div className="project-content">
        <h3 className="project-title">
          {project.title}
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live link`}>
            <ExternalLinkIcon />
          </a>
        </h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tech-stack">
          {project.techStack.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-button live-button">
            <LiveIcon /> Live
          </a>
          <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="project-button code-button">
            <CodeIcon /> Code
          </a>
        </div>
      </div>
    </div>
  );
};

// --- Carousel Component ---
const ProjectCarousel = ({ projects }) => {
  const carouselRef = useRef(null);
  const scrollAmountRef = useRef(0); // To store current scroll position
  const animationFrameIdRef = useRef(null); // To store the requestAnimationFrame ID
  const [isHovering, setIsHovering] = useState(false);

  const duplicatedProjects = [...projects, ...projects];
  const scrollSpeed = 1.35; // Adjust for speed, or make it a prop

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const animateScroll = () => {
      if (!isHovering && carouselRef.current) { // Check if carousel still exists
        scrollAmountRef.current += scrollSpeed;
        // Check against scrollWidth of the actual carousel element
        if (scrollAmountRef.current >= carouselRef.current.scrollWidth / 2) {
          scrollAmountRef.current = 0; // Reset to loop
        }
        carouselRef.current.style.transform = `translateX(-${scrollAmountRef.current}px)`;
      }
      animationFrameIdRef.current = requestAnimationFrame(animateScroll);
    };

    // Clear any existing animation frame before starting a new one
    // This is important if isHovering changes rapidly or projects.length changes
    if (animationFrameIdRef.current) {
      cancelAnimationFrame(animationFrameIdRef.current);
    }
    
    // Start the animation
    // Initialize scrollAmountRef.current from existing style if needed (e.g., on remount or complex state changes)
    // For simplicity here, we assume it starts or continues from its last value.
    // If the carousel.style.transform was cleared or reset elsewhere, you might need to re-parse it.
    
    animationFrameIdRef.current = requestAnimationFrame(animateScroll);

    // Cleanup function
    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [isHovering, projects.length, scrollSpeed]); // Add scrollSpeed if it can change, or remove if constant

  return (
    <div
      id= "projects" className="carousel-container"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="carousel-track" ref={carouselRef} style={{ transform: `translateX(-${scrollAmountRef.current}px)`}}> {/* Initialize transform here if needed */}
        {duplicatedProjects.map((project, index) => (
          <ProjectCard key={`${project.id}-${index}`} project={project} />
        ))}
      </div>
    </div>
  );
};


// --- Main App ---
function MyWork() {
  return (
    <div className="app-container">
      <PurpleSectionAurora/>
      <div className="mywork-title">
            <h1>My Projects</h1>
            <img src={theme_pattern} alt="Pattern" />
          </div>


      <ProjectCarousel projects={projectsData} />
      <p className="carousel-footer-text">
        <span className="arrow">←</span> Auto-scrolling carousel <span className="arrow">→</span>
      </p>
    </div>
  );
}

export default MyWork;