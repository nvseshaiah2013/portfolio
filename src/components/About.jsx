import React from 'react';
import { faJava, faGit, faDocker } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => {
    return (
        <section id="about" className="bg-gradient-to-b from-gray-100 to-gray-200 py-16">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <h2 className="text-4xl text-center font-bold text-gray-800 mb-6">About Me</h2>
                <p className="text-2xl text-center text-gray-700 font-semibold mb-8">My Small Intro</p>
                <p className="text-center text-lg font-semibold md:w-3/4 mx-auto text-gray-600 leading-relaxed mb-12">
                    I'm a keen observer and passionate about problem-solving. As a web developer, I am always eager to learn new technologies and experiment with innovative tools to deliver optimized solutions.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="col-span-1 sm:col-span-2 lg:col-span-3 bg-white shadow-lg rounded-lg p-6 text-center transition transform hover:scale-105 duration-300">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Name</h3>
                        <p className="text-lg font-medium text-gray-600">Venkata Seshaiah</p>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-6 text-center transition transform hover:scale-105 duration-300">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Current Company</h3>
                        <p className="text-md font-medium text-gray-600">Rakuten India</p>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-6 text-center transition transform hover:scale-105 duration-300">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Current Profile</h3>
                        <p className="text-md font-medium text-gray-600">Backend Engineer</p>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-6 text-center transition transform hover:scale-105 duration-300">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Designation</h3>
                        <p className="text-md font-medium text-gray-600">Senior Software Engineer II</p>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-6 text-center transition transform hover:scale-105 duration-300">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
                        <p className="text-md font-medium text-blue-600 hover:text-blue-800 transition duration-300">nvseshaiah2013@gmail.com</p>
                    </div>
                </div>
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold text-blue-800 mb-12">My Skills</h1>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            { name: "Java (Spring)", icon: faJava },
                            { name: "MySQL", icon: faDatabase },
                            { name: "MongoDB", icon: faDatabase },
                            { name: "Git", icon: faGit },
                            { name: "Docker", icon: faDocker },
                        ].map((skill, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-md rounded-md p-4 flex items-center transition-transform transform hover:scale-105 hover:shadow-lg"
                            >
                                <FontAwesomeIcon icon={skill.icon} className="text-xl text-blue-500 mr-2" />
                                <span className="text-md text-gray-700">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;