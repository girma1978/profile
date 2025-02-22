
// import { NavLink } from 'react-router-dom';

// const Navigation = () => {
//   return (
//     <nav className="navigationbar">
//        <li> <h2>Girma Tegegne</h2></li>
//       <ul>
       
//         <li>
//           <NavLink
//             to="/about-me"
//             className={({ isActive }) => (isActive ? 'nav-links active' : 'nav-links')}
//           >
//             About me {/* Changed "About Me" to "About me" */}
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/portfolio"
//             className={({ isActive }) => (isActive ? 'nav-links active' : 'nav-links')}
//           >
//             Portfolio
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/contact"
//             className={({ isActive }) => (isActive ? 'nav-links active' : 'nav-links')}
//           >
//             Contact
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/resume"
//             className={({ isActive }) => (isActive ? 'nav-links active' : 'nav-links')}
//           >
//             Resume
//           </NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navigation;


import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navigationbar">
      <li><h2>Girma Tegegne</h2></li>
      <ul>
        <li>
          <NavLink
            to="/about-me"  // Updated to point to /about-me
            className={({ isActive }) => (isActive ? 'nav-links active' : 'nav-links')}
          >
            About me
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/portfolio"
            className={({ isActive }) => (isActive ? 'nav-links active' : 'nav-links')}
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'nav-links active' : 'nav-links')}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/resume"
            className={({ isActive }) => (isActive ? 'nav-links active' : 'nav-links')}
          >
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
