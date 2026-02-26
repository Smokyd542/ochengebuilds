import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faReact, faJs, faHtml5, faCss3Alt, 
  faNodeJs, faPython, faGitAlt, faFigma 
} from '@fortawesome/free-brands-svg-icons';
import './TechStack.css';

const TechStack = () => {
  const skills = [
    { icon: faReact, name: "React", color: "#61DAFB" },
    { icon: faJs, name: "JavaScript", color: "#F7DF1E" },
    { icon: faHtml5, name: "HTML5", color: "#E34F26" },
    { icon: faCss3Alt, name: "CSS3", color: "#1572B6" },
    { icon: faNodeJs, name: "Node.js", color: "#339933" },
    { icon: faPython, name: "Python", color: "#3776AB" },
    { icon: faGitAlt, name: "Git", color: "#F05032" },
    { icon: faFigma, name: "Figma", color: "#F24E1E" },
  ];

  return (
    <section className="tech-section">
      <div className="tech-title">
        <h5>My Toolkit</h5>
        <h2>Technologies I <span>Master</span></h2>
      </div>

      <div className="marquee">
        <div className="marquee-content">
          {/* First set of icons */}
          {skills.map((skill, index) => (
            <div className="tech-card" key={index} style={{ "--clr": skill.color }}>
              <FontAwesomeIcon icon={skill.icon} className="tech-icon" />
              <span>{skill.name}</span>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {skills.map((skill, index) => (
            <div className="tech-card" key={`dup-${index}`} style={{ "--clr": skill.color }}>
              <FontAwesomeIcon icon={skill.icon} className="tech-icon" />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;