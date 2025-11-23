import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const Education = () => {
    const educationList = [
        {
            level: "Graduation",
            institution: "Lovely Professional University, Punjab",
            stream: "Computer Science Engineering",
            year: "2020",
            score: "CGPA: 9.24 / 10.00"
        },
        {
            level: "Intermediate",
            institution: "Rashtriya Military School, Banglore",
            stream: "Science Stream (CBSE)",
            year: "2016",
            score: "Percent: 88 %"
        },
        {
            level: "Matriculation",
            institution: "Kendriya Vidyalaya No.1 AFS Adampur, Punjab",
            stream: "Matriculation (CBSE)",
            year: "2014",
            score: "CGPA: 9.00 / 10.00"
        }
    ];

    return (
        <section id="education" className="py-20 relative">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500 mb-4">Education</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full"></div>
                </div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {educationList.map((edu, index) => (
                        <div key={index} className="glass p-8 rounded-xl hover:bg-white/5 transition-all duration-300 border border-white/5 shadow-lg flex flex-col md:flex-row items-center md:items-start gap-6 group hover:-translate-y-1">
                            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                                <FontAwesomeIcon icon={faUserGraduate} className="text-2xl" />
                            </div>

                            <div className="flex-grow text-center md:text-left">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                                    <h3 className="text-xl font-bold text-white">{edu.level}</h3>
                                    <span className="inline-flex items-center text-sm text-emerald-400 font-medium mt-1 md:mt-0">
                                        <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                                        Passed: {edu.year}
                                    </span>
                                </div>
                                <h4 className="text-lg text-gray-300 font-medium mb-2">{edu.institution}</h4>
                                <p className="text-gray-400 mb-2">{edu.stream}</p>
                                <p className="text-cyan-500 font-semibold">{edu.score}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Education;