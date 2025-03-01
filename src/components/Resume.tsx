const Resume = () => {
  return (
    <section className="resume">
      <h2>Resume</h2>
      <span>
        Download Resume: 
        <a
          href="https://etd.aau.edu.et/server/api/core/bitstreams/791a089e-8962-47d2-bfca-410a061efbe4/content"
          download="Resume.pdf"
          className="resume-download-link"
        >
          Resume
        </a>
      </span>

      <h3>Skills</h3>

      <h4>Front-end Proficiencies</h4>
      <ul className="resume-skills-list">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>JQuery</li>
        <li>React</li>
        <li>Vue</li>
        <li>Angular</li>
        <li>Bootstrap</li>
        <li>Tailwind CSS</li>
        <li>Responsive Design (Media Queries)</li>
      </ul>

      <h4>Back-end Proficiencies</h4>
      <ul className="resume-skills-list">
        <li>APIs</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MySQL</li>
        <li>PostgreSQL</li>
        <li>MongoDB</li>
        <li>Sequelize </li>
        <li>REST</li>
        <li>GraphQL</li>
        <li>Git</li>
      </ul>
    </section>
  );
};

export default Resume;
