import React from 'react'
import './Skills.css'
const Skills = () => {
  return (
    <>
    <h1 id="Sk">Skills</h1>
    <div class="skills">
        <div class="stext">
        <h2 class="shead">What My Programming <br/>Skills Included?</h2>
        <p class="sdes">I am skilled in web development with HTML5, CSS3, JavaScript, and React.js, creating responsive and interactive websites. In machine learning, I use Python, TensorFlow, and Scikit-Learn for model building and data analysis. I am proficient in SQL, working with MySQL and PostgreSQL for database management. Additionally, I use Git, Docker, and VS Code for efficient development and version control.</p>
        </div>
        <div class="skills-box">

            <ul class="skills-list">
              <li class="skill-card">
                  <p class="tooltip">Python</p>
                    <img class="card-icon" src="images/python.jpeg" alt="logo"/>
              </li>
              <li class="skill-card">
                  <p class="tooltip">Java</p>
                    <img class="card-icon" src="images/java.png" alt="logo"/>
              </li>
              <li class="skill-card">
                  <p class="tooltip">C</p>
                    <img class="card-icon" src="images/C.jpg" alt="logo"/>
              </li>
              <li class="skill-card">
                  <p class="tooltip">Javascript</p>
                    <img class="card-icon" src="images/javascript.png" alt="logo"/>
              </li>
              <li class="skill-card">
                  <p class="tooltip">Typescript</p>
                    <img class="card-icon" src="images/ts.jpg" alt="logo"/>
              </li>
              <li class="skill-card">
                  <p class="tooltip">HTML</p>
                    <img class="card-icon" src="images/html5.png" alt="logo"/>
              </li>
              <li class="skill-card">
                  <p class="tooltip">CSS</p>
                    <img class="card-icon" src="images/css3.png" alt="logo"/>
              </li>
              <li class="skill-card">
                  <p class="tooltip">REACT</p>
                    <img class="card-icon" src="images/react.png" alt="logo"/>
              </li>
              <li class="skill-card">
                  <p class="tooltip">Github</p>
                    <img class="card-icon" src="images/github.jpg" alt="logo"/>
              </li>
              <li class="skill-card">
                  <p class="tooltip">Machine learning</p>
                    <img class="card-icon" src="images/ML.jpg" alt="logo"/>
              </li>
              <li class="skill-card">
                  <p class="tooltip">Prolog</p>
                    <img class="card-icon" src="images/prolog.png" alt="logo"/>
              </li>
              <li class="skill-card">
                  <p class="tooltip">My SQL</p>
                    <img class="card-icon" src="images/SQL.jpg" alt="logo"/>
              </li>
              
            </ul>
    </div>
  </div></>
  )
}

export default Skills
