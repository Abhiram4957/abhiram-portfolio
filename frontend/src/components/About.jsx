import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-subtitle">Discover</span>
        <h2 className="section-title">About Me</h2>
        <div className="title-underline"></div>
      </motion.div>

      <div className="about-content">
        <motion.div 
          className="about-image-wrapper"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="glass-panel">
            <img src="./images/coding-freak.gif" alt="coder" className="gif" />
          </div>
        </motion.div>

        <motion.div 
          className="about-text-wrapper"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="about-greeting">Myself Abhiram</h3>
          <p className="about-desc">
            I am a B.Tech student in Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning. Skilled in web development, I create responsive and user-friendly websites using technologies like <span className="highlight-text">HTML, CSS, JavaScript, and React.</span>
          </p>
          <p className="about-desc">
            In machine learning, I have experience in predictive analytics, object detection, and recommendation systems, utilizing tools like <span className="highlight-text">TensorFlow and PyTorch.</span> I enjoy solving real-world problems through innovative solutions and collaborating with teams to create impactful projects.
          </p>
          
          <motion.a 
            href=".\images\Abhiram Gonuguntla - resume.pdf" 
            download="Abhiram_Resume"
            className="resume-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={20} />
            <span>Download Resume</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
