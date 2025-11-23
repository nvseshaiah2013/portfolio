import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Introduction = () => {
  return (
    <section id="introduction" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-emerald-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-teal-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="text-center z-10 px-4 max-w-4xl mx-auto">

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Venkata Seshaiah</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-8 font-light">
          Software Engineer & Technology Enthusiast
        </p>

        <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto">
          I build accessible, pixel-perfect, and performant web experiences.
          Passionate about learning new technologies and solving real-world problems.
        </p>

        <div className="flex justify-center space-x-6 mb-12">
          <a href="https://www.linkedin.com/in/nvseshaiah2013" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 transform hover:scale-110">
            <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
          </a>
          <a href="https://github.com/nvseshaiah2013" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://www.instagram.com/_venkata_87" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyan-500 transition-colors duration-300 transform hover:scale-110">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://www.facebook.com/venkata.seshaiah.77" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors duration-300 transform hover:scale-110">
            <FontAwesomeIcon icon={faFacebookF} size="2x" />
          </a>
        </div>

        <a href="#about" className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-semibold shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-1">
          More About Me
        </a>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-500 hover:text-white transition-colors">
          <FontAwesomeIcon icon={faChevronDown} size="lg" />
        </a>
      </div>
    </section>
  );
}

export default Introduction;