import React from 'react';
import './Projects.css'; // Import the CSS file

const Projects = () => {
  const projects = [
    {
      title: 'Notes App',
      image: require('../img/notes img.jpg'), // Add local image using require
      link: 'https://github.com/ajiz2004/Ajiz-s-notes-backend', // Link of the project
    },
    {
      title: 'Permalist',
      image: require('../img/permalist img.jpg'), // Replace with relevant image
      link: 'https://github.com/ajiz2004/permalist', // Link of the project
    },
    {
      title: 'ChatDuo AI-Assistant',
      image: require('../img/Py.png'), // Replace with relevant image
      link: 'https://github.com/ajiz2004/githubajiz1', // Link of the project
    },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
