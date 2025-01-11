// src/components/Portfolio/Portfolio.jsx
import axios from "axios";
import { useState, useEffect } from "react";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/projects")
      .then((response) => setProjects(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {projects.map((project) => (
        <div key={project._id}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
