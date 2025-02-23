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
//       title: 'my first deployement',
//       deployedUrl: 'https://girma1978.github.io/prework-study-guide/', 
//       githubUrl: 'https://github.com/girma1978/prework-study-guide',
//       imageUrl: 'https://raw.githubusercontent.com/girma1978/profile/main/src/assets/images/abay-rever.png', 
//     },
//     {
//       title: 'API and Server',
//       deployedUrl: 'https://api-and-server-9sk2.onrender.com/', 
//       githubUrl: 'https://github.com/girma1978/API-And-Server',
//       imageUrl: 'https://raw.githubusercontent.com/girma1978/profile/main/src/assets/images/baro-river.png', // Updated image link to raw image
//     },
//     {
//       title: 'calculator app',
//       deployedUrl: 'https://girma1978.github.io/calculator/', 
//       githubUrl: 'https://github.com/girma1978/calculator',
//       imageUrl: 'https://raw.githubusercontent.com/girma1978/profile/main/src/assets/images/bridge.png', // Updated image link to raw image
//     },
//     {
//       title: 'QUIZ APP',
//       deployedUrl: 'https://girma1978.github.io/rediet/', 
//       githubUrl: 'https://github.com/girma1978/rediet',
//       imageUrl: 'https://raw.githubusercontent.com/girma1978/profile/main/src/assets/images/horizon.png', // Updated image link to raw image
//     },
//   ];

//   return (
//     <section>
//       <h2>Portfolio</h2>
//       <div className="portfolio">
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
  challengeLinks: string[];  // New field for challenge links
}

const Portfolio = () => {
  
  const projects: ProjectType[] = [
    {
      title: 'my first deployment',
      deployedUrl: 'https://girma1978.github.io/prework-study-guide/', 
      githubUrl: 'https://github.com/girma1978/prework-study-guide',
      imageUrl: 'https://raw.githubusercontent.com/girma1978/profile/main/src/assets/images/abay-rever.png', 
      challengeLinks: [
        'https://github.com/girma1978/typescript-assignmnet',
        'https://github.com/girma1978/gwu-db',
        'https://github.com/girma1978/API-And-Server',
        'https://github.com/girma1978/API-And-Server'
      ]
    },
    {
      title: 'API and Server',
      deployedUrl: 'https://api-and-server-9sk2.onrender.com/', 
      githubUrl: 'https://github.com/girma1978/API-And-Server',
      imageUrl: 'https://raw.githubusercontent.com/girma1978/profile/main/src/assets/images/baro-river.png', 
      challengeLinks: [
        'https://github.com/girma1978/typescript-assignmnet',
        'https://github.com/girma1978/gwu-db',
        'https://github.com/girma1978/API-And-Server',
        'https://github.com/girma1978/API-And-Server'
      ]
    },
    {
      title: 'calculator app',
      deployedUrl: 'https://girma1978.github.io/calculator/', 
      githubUrl: 'https://github.com/girma1978/calculator',
      imageUrl: 'https://raw.githubusercontent.com/girma1978/profile/main/src/assets/images/bridge.png', 
      challengeLinks: [
        'https://github.com/girma1978/typescript-assignmnet',
        'https://github.com/girma1978/gwu-db',
        'https://github.com/girma1978/API-And-Server',
        'https://github.com/girma1978/API-And-Server'
      ]
    },
    {
      title: 'QUIZ APP',
      deployedUrl: 'https://girma1978.github.io/rediet/', 
      githubUrl: 'https://github.com/girma1978/rediet',
      imageUrl: 'https://raw.githubusercontent.com/girma1978/profile/main/src/assets/images/horizon.png', 
      challengeLinks: [
        'https://github.com/girma1978/typescript-assignmnet',
        'https://github.com/girma1978/gwu-db',
        'https://github.com/girma1978/API-And-Server',
        'https://github.com/girma1978/API-And-Server'
      ]
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
