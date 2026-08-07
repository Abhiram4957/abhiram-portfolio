import React from "react";
import { Briefcase, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import "./Experience.css";

const experiences = [
  {
    role: "AI engineer Intern",
    company: "Humera AI",
    url: "https://www.linkedin.com/company/humera-ai/?originalSubdomain=in",
    duration: "01 March 2026 - 30 April 2026",
    description:
      "Working with lip-sync, voice cloning, and TTS models, focusing on improving speech quality and audiovisual alignment. Applied prompt engineering techniques, development tools to automate workflows and optimize model interaction"
    },
    {
    role: "React Developer Intern",
    company: "Amigos Smart Tech Pvt Ltd",
    url: "https://amigosmartech.com/index.html",
    duration: "01 Oct 2024 - 31 Dec 2024",
    description:
      "Developed interactive UI components using React.js. Implemented state management and optimized performance for a scalable web application.",
  },
  {
    role: "Data Science Intern",
    company: "NSIC",
    duration: "May 2023 - Aug 2023",
    description:
      "Worked on data preprocessing, exploratory data analysis, and building machine learning models using Python. Contributed to a real-world project involving predictive analytics.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">Career Path</span>
          <h2 className="section-title">Experience</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="timeline-dot">
                <Briefcase size={16} />
              </div>
              
              <motion.div 
                className="timeline-content glass-card"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="timeline-header">
                  <h3 className="role">{experience.role}</h3>
                  <div className="duration-badge">
                    <Calendar size={14} />
                    <span>{experience.duration}</span>
                  </div>
                </div>
                
                {experience.url ? (
                  <a className="company-link" href={experience.url} target="_blank" rel="noopener noreferrer">
                    {experience.company}
                  </a>
                ) : (
                  <span className="company-text">{experience.company}</span>
                )}
                
                <p className="desc">{experience.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
