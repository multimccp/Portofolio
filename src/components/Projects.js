import React, { useState } from "react";
import "../App.css";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Carjockey",
      description: "Website to help those looking for a new car",
      image: "/images/carjockey/layout mobile homepage.png",
      details: `
        <div class="project-description">
        <h3>Carjockey - A Comprehensive Car Listing Platform</h3>
        <p>
          <strong>Carjockey</strong> is a dynamic web application that I built from scratch, leveraging both front-end and back-end technologies. The core functionality of the platform revolves around a robust backend server built using <strong>Node.js</strong> and <strong>Express</strong>. This server handles multiple API requests, serving as the backbone for user interactions with the platform.
        </p>
        <h4>Key Features:</h4>
            <ul>
              <li><strong>car prices</strong> - Users search cars, to see the median price of that model.</li>
              <li><strong>images</strong> - View photos about the model you search for in a grid view.</li>
              <li><strong>video</strong> - View review videos about the model grid view.</li>
              <li><strong>Backend Integration</strong> - Built with **Node.js** and **MySQL** for full-stack management of car data.</li>
            </ul>
      </div>
      `
    },
    {
      id: 2,
      title: "Diecast Car Collection Project",
      description: "Manage and display a collection of diecast cars",
      image: "/images/dieCast/Screenshot 2025-05-23 162627.png",
      details:  `
        <div class="project-description">
        <h3>Diecast Car Collection Project</h3>
        <p>
          This project lets you manage and display a collection of diecast cars. Users can add, view, update, and delete cars in their collection. The application is built with a **React** frontend and an **Express** backend, using a **MySQL** database to store car data.
        </p>
        <h4>Key Features:</h4>
            <ul>
              <li><strong>Add Cars</strong> - Users can add new diecast cars with details like model, brand, color, year, and more.</li>
              <li><strong>View and Manage</strong> - View cars in a list or grid view. Edit and delete entries easily.</li>
              <li><strong>Filter & Sort</strong> - Cars can be filtered by attributes such as brand, model, and condition.</li>
              <li><strong>Backend Integration</strong> - Built with **Node.js** and **MySQL** for full-stack management of car data.</li>
            </ul>
      </div>
      `,
    },
    {
      id: 3,
      title: "Aureum Plaza",
      description: "PC Game",
      image: "/images/AureumPlaza/PPLg8D.png",
      details: `
        <div class="project-description">
          <h3>Aureum Plaza (DEMO)</h3>
          <p>
            Top-down pixel-art adventure set in a city where Mr. João sets out to complete
            a photo album left by his late wife. Explore, talk to people, and play a
            collection of minigames while the project continues development.
          </p>

          <h4>Key Features:</h4>
          <ul>
            <li><strong>Story Hook</strong> — Help Mr. João finish a cherished photo album.</li>
            <li><strong>Explore & Interact</strong> — Roam the city, chat with NPCs, and discover short minigames. </li>
            <li><strong>Pixel-Art, Top-Down</strong> — Cozy visual style with a classic overhead perspective. </li>
            <li><strong>Platform</strong> — Windows (downloadable demo, ~57 MB). </li>
            <li><strong>Status & Language</strong> — Prototype; Portuguese (Portugal). </li>
          </ul>
        </div>
      `,
    },
  ];

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
  };

  return (
    <section className="projects">
      <h2>My Projects</h2>

      {/* Conditionally Render Project Cards */}
      {!selectedProject && (
        <div className="project-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card fade-in"
              onClick={() => handleCardClick(project)}
            >
              <div className="image-container">
                <img src={`${process.env.PUBLIC_URL}${project.image}`} alt={project.title} />
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Detailed View */}
      {selectedProject && (
        <div className="project-details">
          <button onClick={handleCloseDetails}>Close</button>
          <div dangerouslySetInnerHTML={{ __html: selectedProject.details }} />
        </div>
      )}
    </section>
  );
};

export default Projects;
