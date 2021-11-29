import React from 'react';
import SideNav from './SideNav';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Introduction from './Introduction';

const MainComponent = () => {
  return (
    <div className="container">
      <SideNav />
      <Introduction />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}

export default MainComponent;