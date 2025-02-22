import Project from './Project';

interface ProjectType {
  title: string;
  deployedUrl: string;
  githubUrl: string;
  imageUrl: string;
}

const Portfolio = () => {
  // Array of 4 projects
  const projects: ProjectType[] = [
    {
      title: 'GWU DB',
      deployedUrl: 'https://deployed-project-1.com', // Update with actual deployed URL
      githubUrl: 'https://github.com/girma1978/gwu-db',
      imageUrl: 'https://raw.githubusercontent.com/girma1978/profile/main/src/assets/images/abay-rever.png', // Updated image link to raw image
    },
    {
      title: 'API and Server',
      deployedUrl: 'https://deployed-project-2.com', // Update with actual deployed URL
      githubUrl: 'https://github.com/girma1978/API-And-Server',
      imageUrl: 'https://raw.githubusercontent.com/girma1978/profile/main/src/assets/images/baro-river.png', // Updated image link to raw image
    },
    {
      title: 'GWU Assignment',
      deployedUrl: 'https://deployed-project-3.com', // Update with actual deployed URL
      githubUrl: 'https://github.com/girma1978/gwu-assignment',
      imageUrl: 'https://raw.githubusercontent.com/girma1978/profile/main/src/assets/images/bridge.png', // Updated image link to raw image
    },
    {
      title: 'Typescript Assignment',
      deployedUrl: 'https://deployed-project-4.com', // Update with actual deployed URL
      githubUrl: 'https://github.com/girma1978/typescript-assignmnet',
      imageUrl: 'https://raw.githubusercontent.com/girma1978/profile/main/src/assets/images/horizon.png', // Updated image link to raw image
    },
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="portfolio">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
