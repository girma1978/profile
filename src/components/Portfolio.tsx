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
      title: 'Project 1',
      deployedUrl: 'https://deployed-project-1.com',
      githubUrl: 'https://github.com/user/project-1',
      imageUrl: 'https://github.com/girma1978/profile/blob/main/src/assets/images/abay-rever.png', // Updated image link
    },
    {
      title: 'Project 2',
      deployedUrl: 'https://deployed-project-2.com',
      githubUrl: 'https://github.com/user/project-2',
      imageUrl: 'https://github.com/girma1978/profile/blob/main/src/assets/images/baro-river.png', // Updated image link
    },
    {
      title: 'Project 3',
      deployedUrl: 'https://deployed-project-3.com',
      githubUrl: 'https://github.com/user/project-3',
      imageUrl: 'https://github.com/girma1978/profile/blob/main/src/assets/images/bridge.png', // Updated image link
    },
    {
      title: 'Project 4',
      deployedUrl: 'https://deployed-project-4.com',
      githubUrl: 'https://github.com/user/project-4',
      imageUrl: 'https://github.com/girma1978/profile/blob/main/src/assets/images/horizon.png', // Updated image link
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
