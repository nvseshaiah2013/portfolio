import React from 'react';
import { faJava, faGit, faDocker, faJs, faReact, faAws } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faDharmachakra, faStream, faLeaf, faCubes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => {
    const skills = [
        { name: "Java", icon: faJava, color: "text-red-500" },
        { name: "Spring Boot", icon: faLeaf, color: "text-emerald-500" },
        { name: "Microservices", icon: faCubes, color: "text-indigo-400" },
        { name: "Kubernetes", icon: faDharmachakra, color: "text-blue-500" },
        { name: "Kafka", icon: faStream, color: "text-slate-400" },
        { name: "Couchbase", icon: faDatabase, color: "text-red-500" },
        { name: "MySQL", icon: faDatabase, color: "text-blue-400" },
        { name: "MongoDB", icon: faDatabase, color: "text-green-500" },
        { name: "Docker", icon: faDocker, color: "text-blue-500" },
        { name: "AWS", icon: faAws, color: "text-orange-400" },
        { name: "React", icon: faReact, color: "text-cyan-400" },
        { name: "JavaScript", icon: faJs, color: "text-yellow-400" },
        { name: "Git", icon: faGit, color: "text-orange-500" },
    ];

    return (
        <section id="about" className="py-20 relative">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500 mb-4">About Me</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Personal Details */}
                    <div className="glass p-8 rounded-xl border border-white/5 shadow-lg hover:bg-white/5 transition-colors duration-300">
                        <h3 className="text-2xl font-bold text-white mb-6">Personal Details</h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            I am a dedicated developer with a strong foundation in computer science. I love creating efficient and scalable solutions.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center text-gray-300 group">
                                <span className="w-24 font-semibold text-emerald-400">Name:</span>
                                <span className="group-hover:text-white transition-colors">Venkata Seshaiah</span>
                            </div>
                            <div className="flex items-center text-gray-300 group">
                                <span className="w-24 font-semibold text-emerald-400">Age:</span>
                                <span className="group-hover:text-white transition-colors">24 Years</span>
                            </div>
                            <div className="flex items-center text-gray-300 group">
                                <span className="w-24 font-semibold text-emerald-400">Location:</span>
                                <span className="group-hover:text-white transition-colors">Bangalore, Karnataka</span>
                            </div>
                            <div className="flex items-center text-gray-300 group">
                                <span className="w-24 font-semibold text-emerald-400">Email:</span>
                                <a href="mailto:nvseshaiah2013@gmail.com" className="hover:text-cyan-400 transition-colors">nvseshaiah2013@gmail.com</a>
                            </div>
                        </div>
                        <div className="mt-8">
                            <a href="/resume.pdf" target="_blank" className="inline-flex items-center px-6 py-2 rounded-lg bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-600 hover:text-white transition-all duration-300">
                                Download Resume
                            </a>
                        </div>
                    </div>

                    {/* Skills */}
                    <div className="glass p-8 rounded-xl border border-white/5 shadow-lg hover:bg-white/5 transition-colors duration-300">
                        <h3 className="text-2xl font-bold text-white mb-6">My Skills</h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill, index) => (
                                <div key={index} className="flex items-center px-4 py-2 rounded-full bg-slate-800 border border-slate-700 hover:border-emerald-500/50 hover:bg-slate-700 transition-all duration-300 group">
                                    <FontAwesomeIcon icon={skill.icon} className={`mr-2 ${skill.color} group-hover:scale-110 transition-transform`} />
                                    <span className="text-gray-300 group-hover:text-white">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;