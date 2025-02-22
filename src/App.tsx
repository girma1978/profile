// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import AboutMe from './components/AboutMe';
// import Portfolio from './components/Portfolio';
// import Contact from './components/Contact';
// import Resume from './components/Resume';
import './App.css';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <main>
//           <Routes>
//             <Route path="/about-me" element={<AboutMe />} /> {/* Route for About me */}
//             <Route path="/portfolio" element={<Portfolio />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/resume" element={<Resume />} />
//             <Route path="/" element={<AboutMe />} /> {/* Default route */}
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutMe from './components/AboutMe';  // Adjust path if necessary
import Portfolio from './components/Portfolio';  // Example for another page (Portfolio)
import Contact from './components/Contact';  // Example for Contact page
import Resume from './components/Resume';  // Example for Resume page
import Navigation from './components/Navigation';  // Your Navigation component

const App = () => {
  return (
    <Router>
      {/* Navigation Bar */}
      <Navigation />

      {/* Define Routes */}
      <Routes>
        {/* Default Route for AboutMe ("/" is the root of the app) */}
        <Route path="/" element={<AboutMe />} />

        {/* Additional Routes */}
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
};

export default App;
