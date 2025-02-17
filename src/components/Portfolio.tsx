
import Project from './Project';

interface ProjectType {
  title: string;
  deployedUrl: string;
  githubUrl: string;
  imageUrl: string;
}

const Portfolio = () => {
  const projects: ProjectType[] = [
    {
      title: 'Project 1',
      deployedUrl: 'https://deployed-project-1.com',
      githubUrl: 'https://github.com/user/project-1',
      imageUrl: 'project-1-image-url.jpg',
    },
    // Add additional projects here
  ];

  return (
    <section className='portfolio'>
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
