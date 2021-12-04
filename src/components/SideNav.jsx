import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBuilding, faFlask, faInfo, faPhone, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

const SideNav = () => {
  return (
    <div className="flex flex-col divide-y mt-20 z-10 fixed rounded">
      <a href="#about" className="py-2 border-gray-500 px-3 bg-gray-200 font-semibold opacity-40 hover:opacity-100">
        <span className="sm:hidden md:inline-block">
         About
        </span>
        <FontAwesomeIcon icon={faInfo} className="h-6 w-6 inline-block ml-4 align-top float-right" />
      </a>
      <a href="#experience" className="py-2 border-gray-500 px-3 bg-gray-200 font-semibold opacity-40 hover:opacity-100">
        Work Experience
      <FontAwesomeIcon icon={faBuilding} className="h-6 w-6 inline-block  ml-4 align-top float-right" />
      </a>
      <a href="#projects" className="py-2 border-gray-500 px-3 bg-gray-200 font-semibold opacity-40 hover:opacity-100 pointer-events-auto">
        Projects
      <FontAwesomeIcon icon={faProjectDiagram} className="h-6 w-6 inline-block ml-4 align-top float-right" />
      </a>
      <a href="#skills" className="py-2 border-gray-500 px-3 bg-gray-200 font-semibold opacity-40 hover:opacity-100">
        Skills
      <FontAwesomeIcon icon={faFlask} className="h-6 w-6 inline-block  ml-4 align-top float-right" />
      </a>
      <a href="#education" className="py-2 border-gray-500 px-3 bg-gray-200 font-semibold opacity-40 hover:opacity-100">
        Education
      <FontAwesomeIcon icon={faBook} className="h-6 w-6 inline-block  ml-4 align-top float-right" />
      </a>
      <a href="#contact" className="py-2 border-gray-500 px-3 bg-gray-200 font-semibold opacity-40 hover:opacity-100">
        Contact Me
      <FontAwesomeIcon icon={faPhone} className="h-6 w-6 inline-block  ml-4 align-top float-right" />
      </a>
    </div>
  );
}

export default SideNav;