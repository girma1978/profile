
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="footer">
      <ul>
        <li>
          <a href="https://github.com/girma1978" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} /> 
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/girma-a-2b360533b/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} /> 
          </a>
        </li>
        <li>
          <a href="https://stackoverflow.com/users/29575037/girma-a" target="_blank" rel="noopener noreferrer">
            <FaStackOverflow size={30} /> 
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;

