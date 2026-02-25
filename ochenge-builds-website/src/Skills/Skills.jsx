import React from 'react';
import './Skills.css';

const Skills = () => {
  // We define the skills in an array so it's easy to add or remove them later
  const skillList = [
    { name: 'HTML', level: '90%' },
    { name: 'CSS', level: '85%' },
    { name: 'JavaScript', level: '80%' },
    { name: 'React', level: '75%' },
    { name: '3D Design', level: '70%' },
    { name: 'Node.js', level: '65%' }
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-header">
        <h5>Check Out My Tech Stack</h5>
        <h2>My <span>Skills</span></h2>
      </div>

      <div className="skills-grid">
        {skillList.map((skill, index) => (
          <div key={index} className="skill-card">
            {/* ICON PLACEHOLDER: You can add FontAwesome icons here later */}
            <div className="skill-icon-box">
              {skill.name.charAt(0)} 
            </div>
            
            <h3>{skill.name}</h3>
            
            {/* Progress Bar Container */}
            <div className="progress-bg">
              <div 
                className="progress-fill" 
                style={{ width: skill.level }}
              ></div>
            </div>
            <span className="level-text">{skill.level}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;