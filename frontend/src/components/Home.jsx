import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Home.css";

const Home = () => {
  const careers = ["AI/ML Engineer","Full Stack Developer", "Student"];
  const [currentCareer, setCurrentCareer] = useState("");
  const [careerIndex, setCareerIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentWord = careers[careerIndex];
    if (isDeleting) {
      if (currentCareer === "") {
        setIsDeleting(false);
        setCareerIndex((prev) => (prev + 1) % careers.length);
      } else {
        timer = setTimeout(() => setCurrentCareer(currentWord.slice(0, currentCareer.length - 1)), 50);
      }
    } else {
      if (currentCareer === currentWord) {
        timer = setTimeout(() => setIsDeleting(true), 2000);
      } else {
        timer = setTimeout(() => setCurrentCareer(currentWord.slice(0, currentCareer.length + 1)), 100);
      }
    }
    return () => clearTimeout(timer);
  }, [currentCareer, isDeleting, careerIndex, careers]);

  return (
    <section className="home" id="home">
      <div className="home-content">
        <motion.div 
          className="home-text-container"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 className="greeting"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hello, I am
          </motion.h2>
          
          <h1 className="name">Abhiram</h1>
          
          <h3 className="dynamic-text">
            And I'm a <span className="highlight">{currentCareer}</span><span className="cursor">|</span>
          </h3>

          <motion.p 
            className="description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            I'm a passionate developer with a love for creating interactive and intelligent applications. Whether it's designing seamless user experiences or developing smart algorithms, I am dedicated to continuously learning and building the future of technology. I strive to combine creativity with functionality to bring ideas to life.
          </motion.p>

          <motion.div 
            className="social-links"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a href="https://github.com/Abhiram4957" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/Abhiram" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin />
            </a>
            <a href="mailto:abhiram4957@email.com" className="social-icon">
              <FaEnvelope />
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="home-image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="image-glow"></div>
          <motion.img 
            src="./images/2.png" 
            alt="Abhiram" 
            className="profile-pic"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
