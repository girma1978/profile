// import React from 'react';

// interface ProjectProps {
//   project: {
//     title: string;
//     deployedUrl: string;
//     githubUrl: string;
//     imageUrl: string;
//   };
// }

// const Project: React.FC<ProjectProps> = ({ project }) => {
//   return (
//     <div className="project">
//       <img src={project.imageUrl} alt={project.title} />
//       <h3>{project.title}</h3>
//       <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer">Deployed App</a>
//       <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
//     </div>
//   );
// };

// export default Project;
import React from 'react';

interface ProjectProps {
  project: {
    title: string;
    deployedUrl: string;
    githubUrl: string;
    imageUrl: string;
  };
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="project">
      <img src={project.imageUrl} alt={project.title} />
      <h3>{project.title}</h3>
      <div className="links">
        <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer">Deployed App</a>
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
      </div>
    </div>
  );
};

export default Project;
