import React from 'react';
import TopNav from './TopNav';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Introduction from './Introduction';
import Footer from './Footer';

const MainComponent = () => {
  return (
    <div className="divide-y divide-light-blue-400">
      <TopNav />
      <Introduction />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default MainComponent;