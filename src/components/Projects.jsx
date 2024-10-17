import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPlus } from '@fortawesome/free-solid-svg-icons'

const Projects = () => {
    return (
        <section id="projects" className="bg-gradient-to-b from-gray-100 to-gray-200 py-10">
            <div className="flex flex-col min-h-screen">
                <p className="mx-auto p-9 text-lg md:text-3xl font-bold text-blue-900">
                    Personal Projects
                </p>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                        {/* Project Card 1 */}
                        <div className="relative w-72 h-80 perspective">
                            <div className="absolute w-full h-full transition-transform transform style-flip hover:rotate-y-180">
                                {/* Front of the card */}
                                <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center front">
                                    <img src="virus.png" alt="Covid Icon" className="h-24 w-24 mb-4" />
                                    <h2 className="font-bold text-xl text-blue-900 text-center">Covid Dashboard</h2>
                                </div>
                                {/* Back of the card */}
                                <div className="bg-white shadow-lg rounded-lg p-6 back flex flex-col items-center justify-center transform rotate-y-180">
                                    <p className="leading-relaxed mb-3 mx-1 text-gray-700 text-center">
                                        This is a dynamic dashboard to view the Covid cases being reported in India. Built using React, Material UI.
                                    </p>
                                    <a
                                        href="https://nvipsumlorem2013.github.io/covid-dashboard/"
                                        className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        See Project <FontAwesomeIcon icon={faArrowRight} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Project Card 2 */}
                        <div className="relative w-72 h-80 perspective">
                            <div className="absolute w-full h-full transition-transform transform style-flip hover:rotate-y-180">
                                {/* Front of the card */}
                                <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center front">
                                    <img src="notebook.gif" alt="Hisaab Kitaab Icon" className="h-24 w-24 mb-4" />
                                    <h2 className="font-bold text-xl text-blue-900 text-center">Hisaab Kitaab</h2>
                                </div>
                                {/* Back of the card */}
                                <div className="bg-white shadow-lg rounded-lg p-6 back flex flex-col items-center justify-center transform rotate-y-180">
                                    <p className="leading-relaxed mb-3 mx-1 text-gray-700 text-center">
                                        It is a tool to track your expenses on your friends while on trips, or track the items you lent to them.
                                    </p>
                                    <a
                                        href="https://github.com/nvipsumlorem2013/hisaab_react/"
                                        className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        See Project <FontAwesomeIcon icon={faArrowRight} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Project Card 3 */}
                        <div className="relative w-72 h-80 perspective">
                            <div className="absolute w-full h-full transition-transform transform style-flip hover:rotate-y-180">
                                {/* Front of the card */}
                                <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center front">
                                    <img src="confetti.png" alt="Event Manager Icon" className="h-24 w-24 mb-4" />
                                    <h2 className="font-bold text-xl text-blue-900 text-center">Colors - Event Manager</h2>
                                </div>
                                {/* Back of the card */}
                                <div className="bg-white shadow-lg rounded-lg p-6 back flex flex-col items-center justify-center transform rotate-y-180">
                                    <p className="leading-relaxed mb-3 mx-1 text-gray-700 text-center">
                                        A one-stop shop for your event management needs, from organizing participants to distributing certificates.
                                    </p>
                                    <a
                                        href="https://github.com/nvipsumlorem2013/Capstone-Project/"
                                        className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        See Project <FontAwesomeIcon icon={faArrowRight} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a
                    href="https://github.com/nvipsumlorem2013?tab=repositories"
                    className="my-8 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 mx-auto transition duration-300"
                >
                    View More <FontAwesomeIcon icon={faPlus} />
                </a>
            </div>
        </section>

    );
}

export default Projects;