import React from 'react';

interface ProjectProps {
  project: {
    title: string;
    deployedUrl: string;
    githubUrl: string;
    imageUrl: string;
    challengeLinks: string[];  // Accepting the dynamic challenge links
  };
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="project">
      <div className="image-container">
        <img src={project.imageUrl} alt={project.title} />
        <div className="overlay">
          <h3>{project.title}</h3>
          <div className="links">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              GitHub Repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
