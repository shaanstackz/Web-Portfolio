// src/components/Projects.js
import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: 'Portfolio Website',
      description: 'A responsive portfolio built with React and Firebase.',
    },
    {
      name: 'Task Manager App',
      description: 'A task management application with real-time updates.',
    },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project-item">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Projects;