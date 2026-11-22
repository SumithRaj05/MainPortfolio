import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import NavBar from './Components/NavBar/NavBar';

function App() {

  return (
    <React.Fragment>
      <a className="SkipLink" href="#About">Skip to content</a>
      <NavBar />
      <main>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </React.Fragment>
  );
}

export default App;
