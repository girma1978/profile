
import GirmaImage from '../assets/Girma.png';

const AboutMe = () => {
  return (
    <section className="aboutme">
      <h2>About me</h2>
      
      <div className="aboutme-image-container">
        <img src={GirmaImage} alt="Girma" className="aboutme-image" />
      </div>

      <div className="aboutme-biography">
        <p>
          I am a passionate and dedicated web developer with a strong foundation in both front-end and back-end technologies. With expertise in <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>, I create responsive and user-friendly web applications that are both visually appealing and functionally robust.
    
          On the front end, I have mastered <strong>React</strong>, building dynamic, single-page applications that provide seamless user experiences. On the back end, I am well-versed in <strong>Node.js</strong> and <strong>Express</strong>, allowing me to build powerful server-side applications with high efficiency.
        </p>
        <p>
          As a database enthusiast, I am proficient in working with <strong>MySQL</strong>, <strong>PostgreSQL</strong>, and <strong>MongoDB</strong>. MongoDB, as a NoSQL database, allows me to design flexible, scalable, and efficient data models. I have experience using MongoDB in conjunction with tools like <strong>mongoose</strong> for object modeling, enabling me to seamlessly store and retrieve data in a non-relational format.
        </p>
        <p>
          I am also skilled in using <strong>Sequelize</strong>, an Object-Relational Mapping (ORM) tool for relational databases like MySQL and PostgreSQL, and MongoDB for non-relational storage. This combination allows me to build powerful, scalable systems, ensuring smooth data flow between the client and server.
          Along with my technical expertise, I am experienced in using <strong>Git</strong> for version control, allowing me to collaborate effectively on projects and maintain a well-organized codebase.
          Whether developing interactive front-end interfaces or building scalable back-end services, I am dedicated to writing clean, efficient, and scalable code while continuously learning and evolving with the latest industry trends.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
