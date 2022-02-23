import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPlus } from '@fortawesome/free-solid-svg-icons'

const Projects = () => {
    return (
        <section id="projects">
            <div className="flex flex-col min-h-screen">
                <p className="mx-auto p-9 text-lg md:text-3xl text-blue-900">
                    Personal Projects
                </p>
                <div className="flex flex-row pt-3">
                    <div className="flex justify-around basis-4">
                        <div className="text-center">
                            <img src="virus.png" alt="Covid Icon" className="h-20 w-20 mx-auto" />
                            <h2 className="leading-loose font-bold text-xl text-blue-900"> Covid Dashboard</h2>
                            <p className="leading-relaxed mb-3 mx-1">This is a dynamic dashboard to view the Covid cases being
                        reported in India. Built using React, Material UI.</p>
                            <a href="https://nvseshaiah2013.github.io/covid-dashboard/" className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                target={'_blank'} rel="noreferrer"
                            > See Project <FontAwesomeIcon icon={faArrowRight} /></a>
                        </div>
                    </div>
                    <div className="flex justify-center basis-4">
                        <div className="text-center">
                            <img src="notebook.gif" alt="Covid Icon" className="h-20 w-20 mx-auto" />
                            <h2 className="leading-loose font-bold text-xl text-blue-900"> Hisaab Kitaab</h2>
                            <p className="leading-relaxed mb-3 mx-1">It is a tool to track your expenses on your friends while on trips, or you track the items you have lended to them.</p>
                            <a href="https://nvseshaiah2013.github.io/covid-dashboard/" className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                target={'_blank'} rel="noreferrer"
                            > See Project <FontAwesomeIcon icon={faArrowRight} /></a>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="text-center">
                            <img src="confetti.png" alt="Covid Icon" className="h-20 w-20 mx-auto" />
                            <h2 className="leading-loose font-bold text-xl text-blue-900"> Colors - Event Manager</h2>
                            <p className="leading-relaxed mb-3 mx-1">A one stop shop for your event management needs, from organizing and onboarding participants, to distributing certificates. </p>
                            <a href="https://nvseshaiah2013.github.io/covid-dashboard/" className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                target={'_blank'} rel="noreferrer"
                            > See Project <FontAwesomeIcon icon={faArrowRight} /></a>
                        </div>
                    </div>
                </div>
                <a href="https://github.com/nvseshaiah2013?tab=repositories" className="my-8 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 mx-auto"> View More <FontAwesomeIcon icon={faPlus} /></a>
            </div>
        </section>
    );
}

export default Projects;