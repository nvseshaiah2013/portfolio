import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBuilding, faFlask, faInfo, faPhone, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

const TopNav = () => {
  return (
    <div className="flex divide-x z-10 fixed md:mt-1 md:ml-72 flex-wrap justify-center">
      <a href="#about" className="border-gray-500 p-3 bg-gray-200 font-semibold opacity-40 hover:opacity-100">
        
         About
        
        <FontAwesomeIcon icon={faInfo} className="h-6 w-6 ml-1 align-bottom" />
      </a>
      <a href="#experience" className="border-gray-500 p-3 bg-gray-200 font-semibold opacity-40 hover:opacity-100">
        Work Experience
      <FontAwesomeIcon icon={faBuilding} className="h-6 w-6 align-bottom  ml-1" />
      </a>
      <a href="#skills" className="border-gray-500 p-3 bg-gray-200 font-semibold opacity-40 hover:opacity-100">
        Skills
      <FontAwesomeIcon icon={faFlask} className="h-6 w-6 align-bottom  ml-1" />
      </a>
      <a href="#projects" className="border-gray-500 p-3 bg-gray-200 font-semibold opacity-40 hover:opacity-100">
        Projects
      <FontAwesomeIcon icon={faProjectDiagram} className="h-6 w-6 align-bottom ml-1" />
      </a>
      <a href="#articles" className="border-gray-500 p-3 bg-gray-200 font-semibold opacity-40 hover:opacity-100">
        Artices
      <FontAwesomeIcon icon={faFlask} className="h-6 w-6 align-bottom  ml-1" />
      </a>      
      <a href="#education" className="border-gray-500 p-3 bg-gray-200 font-semibold opacity-40 hover:opacity-100">
        Education
      <FontAwesomeIcon icon={faBook} className="h-6 w-6 align-bottom  ml-1" />
      </a>
      <a href="#contact" className="border-gray-500 p-3 bg-gray-200 font-semibold opacity-40 hover:opacity-100">
        Contact Me
      <FontAwesomeIcon icon={faPhone} className="h-6 w-6 align-bottom ml-1" />
      </a>
    </div>
  );
}

export default TopNav;