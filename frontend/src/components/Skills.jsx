import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skillsData = [
  { name: 'Python', img: 'images/python.jpeg' },
  { name: 'Java', img: 'images/java.png' },
  { name: 'MySQL', img: 'images/sql.png' },
  { name: 'Javascript', img: 'images/javascript.png' },
  { name: 'HTML', img: 'images/html5.png' },
  { name: 'Tailwind.css', img: 'images/css3.png' },
  { name: 'Github', img: 'images/github.jpg' },
  { name: 'MongoDB', img: 'images/m.png' },
  { name: 'Express.js', img: 'images/e.png' },
  { name: 'REACT', img: 'images/react.png' },
  { name: 'Node.js', img: 'images/n.png' },
  { name: 'Machine learning', img: 'images/ML.jpg' },
  { name: 'Agentic Ai', img: 'images/agent.png' },
  { name: 'Prompt Engineering', img: 'images/prompt.jpg' },
  { name: 'LLMs', img: 'images/llm.webp' }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

const Skills = () => {
  return (
    <section id="Sk" className="skills-section">
      <div className="skills-container">
        
        <motion.div 
          className="skills-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">My Expertise</span>
          <h2 className="section-title">Programming Skills</h2>
          <div className="title-underline"></div>
          
          <p className="skills-desc">
            I am skilled in web development with HTML5, CSS3, JavaScript, and React.js, creating responsive and interactive websites. In machine learning, I use Python, TensorFlow, and Scikit-Learn for model building and data analysis. I am proficient in SQL, working with MySQL and PostgreSQL for database management. Additionally, I use Git, Docker, and VS Code for efficient development and version control.
          </p>
        </motion.div>

        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillsData.map((skill, index) => (
            <motion.div 
              key={index} 
              className="skill-card-wrapper"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="skill-card-inner">
                <div className="skill-icon-container">
                  <img src={skill.img} alt={skill.name} className="skill-icon" />
                </div>
                <p className="skill-name">{skill.name}</p>
              </div>
              <div className="skill-card-glow"></div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default Skills;
