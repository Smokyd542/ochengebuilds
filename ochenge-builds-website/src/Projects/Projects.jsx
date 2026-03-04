import React from 'react';
import './Projects.css';
import { assets } from '../assets';


const Projects = () => {
  // Simple array to manage your project data
  const projectData = [
    {
      id: 1,
      title: "Photographer website",
      description: "A 3D photographer portfolio platform.",
      liveLink: "https://smokyd542.github.io/photography/"
    },
    {
      id: 2,
      title: "Banking Dashboard",
      description: "A dark-themed financial tracker with real-time data visualization.",
      liveLink: "https://yourwebsite.com/project2"
    },
    {
      id: 3,
      title: "Portfolio 3D",
      description: "An immersive developer portfolio built with React and custom CSS.",
      liveLink: "https://yourwebsite.com/project3"
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-header">
        <h5>My Recent Work</h5>
        <h2>Latest <span>Projects</span></h2>
      </div>

      <div className="projects-container">
        {projectData.map((project) => (
          <div key={project.id} className="project-card">
            
           
            <div className="project-img-box">
               {<img src={assets.images.project_1} alt="Project Screenshot" />}
            </div>

            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              {/* Button linked to your live website */}
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="live-btn"
              >
                Live Demo
              </a>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;