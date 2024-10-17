import React from 'react';
import TopNav from './TopNav';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import Introduction from './Introduction';
import Footer from './Footer';
import Articles from './Articles';

const MainComponent = () => {
  return (
    <div className="divide-y divide-light-blue-400">
      <TopNav />
      <Introduction />
      <About />
      <Experience />
      <Projects />
      <Articles />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default MainComponent;