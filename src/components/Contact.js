import React from "react";
import "../App.css";

const Projects = () => {
  const projectImages = [
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
  ];

  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projectImages.map((img, i) => (
          <div key={i} className="project-card fade-in">
            <img src={img} alt={`Project ${i + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;