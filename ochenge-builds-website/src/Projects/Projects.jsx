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
      liveLink: "https://ochengebuilds.github.io/photography/"
    },
    {
      id: 2,
      title: "Scented candles website",
      description: "A scented candles e-commerce website built with React and styled-components.",
      liveLink: "https://beautyscentscandles.co.uk/?srsltid=AfmBOooHpT1nR-HvLFC2zi-xU3yFuHySNWAOzAjas8BOi1JKdAGSnHmW"
    },
    {
      id: 3,
      title: "Landscaping website",
      description: "A landscaping website built with React and styled-components.",
      liveLink: "https://www.greenmeadowslandscaping.com/"
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