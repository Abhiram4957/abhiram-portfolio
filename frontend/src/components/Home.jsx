import React, { useEffect, useRef } from "react";
import "./Home.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Add social media icons

const Home = () => {
  const containerRef = useRef(null); // Reference to the container element
  const careers = ["Web Developer", "ML Engineer", "Student"];
  let careerIndex = 0;
  let characterIndex = 0;

  const updateText = () => {
    if (containerRef.current) {
      characterIndex++;
      containerRef.current.innerHTML = `<h1> I am a <span>${careers[careerIndex].slice(0, characterIndex)}</span></h1>`;

      if (characterIndex === careers[careerIndex].length) {
        careerIndex++;
        characterIndex = 0;
      }

      if (careerIndex === careers.length) {
        careerIndex = 0;
      }

      setTimeout(updateText, 500);
    }
  };

  useEffect(() => {
    updateText();
  }, []);

  return (
    <div className="home" id="home">
      <div className="homeText">
        <p className="container" ref={containerRef}></p>
        <p className="description">
          I'm Abhiram, a passionate developer with a love for creating interactive and intelligent applications. Whether it's designing seamless user experiences or developing smart algorithms, I am dedicated to continuously learning and building the future of technology. I strive to combine creativity with functionality to bring ideas to life.
        </p>
        <div className="socialLinks">
          <a href="https://github.com/Abhiram4957" target="_blank" rel="noopener noreferrer">
            <FaGithub className="socialIcon" />
          </a>
          <a href="https://www.linkedin.com/in/Abhiram" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="socialIcon" />
          </a>
          <a href="mailto:abhiram4957@email.com">
            <FaEnvelope className="socialIcon" />
          </a>
        </div>
      </div>
      <img src="./images/me.jpg" alt="Abhiram" id="myPic" />
    </div>
  );
};

export default Home;
