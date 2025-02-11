import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="about" className="about-container">
      <h1 className="title">About Me</h1>
      <div className="about-content">
        <div className="about-text">
          <h2>Myself Abhiram</h2>
          <p className="about-sec">
            I am a B.Tech student in Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning. Skilled in web development, I create responsive and user-friendly websites using technologies like HTML, CSS, JavaScript, and React.
            <br />
            <br />
            In machine learning, I have experience in predictive analytics, object detection, and recommendation systems, utilizing tools like TensorFlow and PyTorch. I enjoy solving real-world problems through innovative solutions and collaborating with teams to create impactful projects.
            <br />
          </p>
          <a href=".\images\Abhiram Gonuguntla - resume.pdf" download="Abhiram_Resume">
            <button className="btn">Download Resume</button>
          </a>
        </div>
        <div className="about-image">
          <img src="./images/coding-freak.gif" alt="coder" className="gif" />
        </div>
      </div>
    </div>
  );
};

export default About;
