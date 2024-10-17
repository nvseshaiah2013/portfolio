import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBuilding, faFlask, faInfo, faPhone, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

const TopNav = () => {
  return (
    <div className="flex z-10 fixed md:mt-0 w-full justify-center">
      <div className="flex space-x-0">
        <a href="#about" className="border-gray-500 p-3 bg-gray-200 font-semibold opacity-40 hover:opacity-100 flex items-center">
          About
          <FontAwesomeIcon icon={faInfo} className="h-6 w-6 ml-1" />
        </a>
        <a href="#experience" className="border-gray-500 p-3 bg-gray-200 font-semibold opacity-40 hover:opacity-100 flex items-center">
          Work Experience
          <FontAwesomeIcon icon={faBuilding} className="h-6 w-6 ml-1" />
        </a>
        {/* <a href="#skills" className="border-gray-500 p-3 bg-gray-200 font-semibold opacity-40 hover:opacity-100 flex items-center">
          Skills
          <FontAwesomeIcon icon={faFlask} className="h-6 w-6 ml-1" />
        </a> */}
        <a href="#projects" className="border-gray-500 p-3 bg-gray-200 font-semibold opacity-40 hover:opacity-100 flex items-center">
          Projects
          <FontAwesomeIcon icon={faProjectDiagram} className="h-6 w-6 ml-1" />
        </a>
        <a href="#articles" className="border-gray-500 p-3 bg-gray-200 font-semibold opacity-40 hover:opacity-100 flex items-center">
          Articles
          <FontAwesomeIcon icon={faFlask} className="h-6 w-6 ml-1" />
        </a>
        <a href="#education" className="border-gray-500 p-3 bg-gray-200 font-semibold opacity-40 hover:opacity-100 flex items-center">
          Education
          <FontAwesomeIcon icon={faBook} className="h-6 w-6 ml-1" />
        </a>
        <a href="#contact" className="border-gray-500 p-3 bg-gray-200 font-semibold opacity-40 hover:opacity-100 flex items-center">
          Contact Me
          <FontAwesomeIcon icon={faPhone} className="h-6 w-6 ml-1" />
        </a>
      </div>
    </div>

  );
}

export default TopNav;