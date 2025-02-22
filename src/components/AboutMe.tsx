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
          I am a passionate and dedicated web developer with a strong foundation in both front-end and back-end technologies. With expertise in HTML, CSS, and JavaScript, I create responsive and user-friendly web applications that are both visually appealing and functionally robust. On the front end, I have mastered React, building dynamic, single-page applications that provide seamless user experiences, while on the back end, I am well-versed in Node.js and Express, allowing me to build powerful server-side applications with high efficiency.
        </p>
        <p>
          As a database enthusiast, I am proficient in working with MySQL, PostgreSQL, and MongoDB. MongoDB, as a NoSQL database, allows me to design flexible, scalable, and efficient data models, and I have experience using MongoDB in conjunction with tools like Mongoose for object modeling, enabling me to seamlessly store and retrieve data in a non-relational format. Additionally, I am skilled in using Sequelize, an Object-Relational Mapping (ORM) tool for relational databases like MySQL and PostgreSQL, and MongoDB for non-relational storage. This combination allows me to build powerful, scalable systems, ensuring smooth data flow between the client and server.
        </p>
        <p>
          Along with my technical expertise, I am experienced in using Git for version control, allowing me to collaborate effectively on projects and maintain a well-organized codebase. Whether developing interactive front-end interfaces or building scalable back-end services, I am dedicated to writing clean, efficient, and scalable code while continuously learning and evolving with the latest industry trends. My experience with web development extends to creating fully responsive websites and applications, where I prioritize accessibility to ensure users of all abilities can navigate and interact with the products I build. I am always exploring new ways to improve user experiences, whether through design or performance optimization.
        </p>
        <p>
          In addition to my technical skills, I value collaboration and enjoy working in team environments. I believe that effective communication is key to the success of any project, and I strive to maintain open channels with both team members and clients. My experience in agile environments has allowed me to adapt quickly to changes and deliver results in fast-paced settings. I am also passionate about staying up-to-date with the latest trends in web development, whether it's the newest JavaScript frameworks or advancements in web performance optimization. My commitment to continuous learning drives me to constantly improve my skills and stay ahead in the ever-evolving tech landscape.
        </p>
      
      </div>
    </section>
  );
};

export default AboutMe;
