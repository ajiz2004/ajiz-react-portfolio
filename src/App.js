import React from 'react';
import Navbar from './components/Navbar'; // Import the Navbar component
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Experience from './components/Experience';


const App = () => {
  return (
    <div className="App">
      <Navbar /> {/* Include Navbar at the top */}
      <Home />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contacts />
    </div>
  );
};

export default App;