import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAsia } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithubSquare, faInstagramSquare, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

const Introduction = () => {

    return (
        <section id="introduction" className="bg-gradient-to-t from-gray-100 to-gray-300 text-gray-900">
  <div className="flex flex-col justify-center min-h-screen p-6">
    <p className="text-4xl text-center font-bold text-gray-800 mt-16 mb-4">
      Hello World
      <FontAwesomeIcon
        className="ml-3 h-8 w-8 inline-block align-middle text-green-500 animate-bounce"
        icon={faGlobeAsia}
      />
    </p>
    <p className="text-center text-xl md:text-2xl mb-2">
      People know me as{" "}
      <span className="text-blue-600 font-semibold">Venkata Seshaiah</span>
    </p>
    <p className="text-center text-lg md:text-xl mb-6">
      and friends like to call me{" "}
      <span className="text-blue-500 font-semibold">Venkat</span>
    </p>
    
    <div className="flex justify-center my-8">
      <p className="text-lg md:text-xl text-center leading-relaxed md:w-3/5 text-gray-700">
      An innovative software engineer with excellent problem-solving skills and a passion for learning new technologies. Self-motivated and detail-oriented, I excel at converting theoretical challenges into practical solutions while maintaining a keen focus on continuous improvement and growth.
      </p>
    </div>

    <div className="flex justify-center my-8 space-x-4">
      <a href="https://www.linkedin.com/in/nvseshaiah2013" target="_blank" rel="noreferrer" className="text-gray-800 hover:text-blue-700 transition duration-300 text-4xl">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a href="https://github.com/nvseshaiah2013" target="_blank" rel="noreferrer" className="text-gray-800 hover:text-gray-900 transition duration-300 text-4xl">
        <FontAwesomeIcon icon={faGithubSquare} />
      </a>
      <a href="https://www.instagram.com/_venkata_87" target="_blank" rel="noreferrer" className="text-gray-800 hover:text-pink-500 transition duration-300 text-4xl">
        <FontAwesomeIcon icon={faInstagramSquare} />
      </a>
      <a href="https://www.facebook.com/venkata.seshaiah.77" target="_blank" rel="noreferrer" className="text-gray-800 hover:text-blue-600 transition duration-300 text-4xl">
        <FontAwesomeIcon icon={faFacebookSquare} />
      </a>
    </div>

    <div className="flex justify-center">
      <a href="#about" className="py-3 px-6 bg-indigo-600 text-white font-medium rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        More About Me
      </a>
    </div>
  </div>
</section>

    );
}

export default Introduction;