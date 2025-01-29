import React from "react";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import "./Experience.css";

const experiences = [
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
    <div className="experience-container">
      <h1 className="title">Experience</h1>
      <div className="cards">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className="card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a className="company" href={experience.url} target="_blank" rel="noopener noreferrer">
              {experience.company}
            </a>
            <h3 className="role">{experience.role}</h3>
            <p className="duration">{experience.duration}</p>
            <p className="desc">{experience.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
