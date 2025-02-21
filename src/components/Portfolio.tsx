
// import Project from './Project';

// interface ProjectType {
//   title: string;
//   deployedUrl: string;
//   githubUrl: string;
//   imageUrl: string;
// }

// const Portfolio = () => {
//   const projects: ProjectType[] = [
//     {
//       title: 'Project 1',
//       deployedUrl: 'https://deployed-project-1.com',
//       githubUrl: 'https://github.com/user/project-1',
//       imageUrl: 'project-1-image-url.jpg',
//     },
//     // Add additional projects here
//   ];

//   return (
//     <section className='portfolio'>
//       <h2>Portfolio</h2>
//       <div className="projects">
//         {projects.map((project, index) => (
//           <Project key={index} project={project} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Portfolio;

import Project from './Project';

interface ProjectType {
  title: string;
  deployedUrl: string;
  githubUrl: string;
  imageUrl: string;
}

const Portfolio= () => {
  // Array of 4 projects
  const projects: ProjectType[] = [
    {
      title: 'Project 1',
      deployedUrl: 'https://deployed-project-1.com',
      githubUrl: 'https://github.com/user/project-1',
      imageUrl: 'images/project-1-image.jpg', // Example image path
    },
    {
      title: 'Project 2',
      deployedUrl: 'https://deployed-project-2.com',
      githubUrl: 'https://github.com/user/project-2',
      imageUrl: 'images/project-2-image.jpg',
    },
    {
      title: 'Project 3',
      deployedUrl: 'https://deployed-project-3.com',
      githubUrl: 'https://github.com/user/project-3',
      imageUrl: 'images/project-3-image.jpg',
    },
    {
      title: 'Project 4',
      deployedUrl: 'https://deployed-project-4.com',
      githubUrl: 'https://github.com/user/project-4',
      imageUrl: 'images/project-4-image.jpg',
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

