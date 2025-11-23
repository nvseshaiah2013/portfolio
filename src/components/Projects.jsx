import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPlus } from '@fortawesome/free-solid-svg-icons'

const Projects = () => {
    const projects = [
        {
            title: "Covid Dashboard",
            icon: "virus.png",
            description: "This is a dynamic dashboard to view the Covid cases being reported in India. Built using React, Material UI.",
            link: "https://nvipsumlorem2013.github.io/covid-dashboard/"
        },
        {
            title: "Hisaab Kitaab",
            icon: "notebook.gif",
            description: "It is a tool to track your expenses on your friends while on trips, or track the items you lent to them.",
            link: "https://github.com/nvipsumlorem2013/hisaab_react/"
        },
        {
            title: "Colors - Event Manager",
            icon: "confetti.png",
            description: "A one-stop shop for your event management needs, from organizing participants to distributing certificates.",
            link: "https://github.com/nvipsumlorem2013/Capstone-Project/"
        }
    ];

    return (
        <section id="projects" className="py-20 relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500 mb-4">Personal Projects</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
                    {projects.map((project, index) => (
                        <div key={index} className="group perspective h-80 w-full cursor-pointer">
                            <div className="style-flip relative w-full h-full duration-500">
                                {/* Front Side */}
                                <div className="front project-card-face rounded-xl p-6 flex flex-col items-center justify-center border border-white/5 shadow-lg">
                                    <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <img src={project.icon} alt={`${project.title} Icon`} className="w-12 h-12 object-contain" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-gray-400 text-sm">Hover to see details</p>
                                </div>

                                {/* Back Side */}
                                <div className="back project-card-face rounded-xl p-6 flex flex-col items-center justify-center border border-white/5 shadow-lg bg-slate-800/90">
                                    <h3 className="text-xl font-bold text-emerald-400 mb-4">{project.title}</h3>
                                    <p className="text-gray-300 text-center mb-6 text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="px-6 py-2 rounded-full bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-semibold text-sm shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-1"
                                    >
                                        View Project <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <a
                        href="https://github.com/nvipsumlorem2013?tab=repositories"
                        className="inline-flex items-center px-8 py-3 border border-emerald-500/30 rounded-full text-emerald-400 hover:text-white hover:bg-emerald-600/20 transition-all duration-300"
                        target="_blank"
                        rel="noreferrer"
                    >
                        View More on GitHub <FontAwesomeIcon icon={faPlus} className="ml-2" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Projects;