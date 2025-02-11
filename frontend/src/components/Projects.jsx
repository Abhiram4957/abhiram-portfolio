/*import React from "react";
import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projectsData from "./projectsData.json";

const Projects = () => {
  return (
    <section className="projectsSection" id="projects">
      <h2 className="ptitle">Projects</h2>
      <div className="projectsGrid">
        {projectsData.map((project, id) => (
          <div key={id} className="projectCard">
            <img src={project.image} alt={project.title} className="projectImage" />
            <div className="projectInfo">
              <h3 className="projectTitle">{project.title}</h3>
              <p className="projectDescription">{project.description}</p>
              <div className="techStack">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="tech">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="projectLinks">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="icon" />
                  </a>
                )}
                {project.liveDemo && (
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt className="icon" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
*/
import React, { useEffect, useState } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="projects-container">
      {projects.map((proj) => (
        <div key={proj._id} className="project-card">
          <img src={proj.imageUrl} alt={proj.title} />
          <h3>{proj.title}</h3>
          <p>{proj.description}</p>
          <p>Tech: {proj.techStack.join(", ")}</p>
          <a href={proj.liveUrl} target="_blank">Live</a> |{" "}
          <a href={proj.repoUrl} target="_blank">Code</a>
        </div>
      ))}
    </div>
  );
}

export default Projects;
  