import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Experience = () => {
    const experiences = [
        {
            role: "Senior SDE",
            company: "Delta Airlines",
            location: "Bengaluru",
            duration: "May 2025 - Present",
            description: [
                "Key member of the Financial Document Management team, responsible for the end-to-end processing of non-ticketing flight revenue.",
                "Architecting and developing robust financial systems to handle high-volume revenue data with precision and compliance.",
                "Optimizing document management workflows to streamline financial operations and improve data auditability.",
                "Collaborating with cross-functional teams to enhance the scalability and reliability of revenue management microservices."
            ]
        },
        {
            role: "Senior Software Engineer",
            company: "Rakuten India",
            location: "Bengaluru",
            duration: "June 2024 - May 2025",
            description: [
                "Spearheaded the strategic unification of B2C ISP and B2B MNO platforms, ensuring seamless service integration.",
                "Re-engineered and optimized core APIs to support the unified architecture, significantly improving system interoperability.",
                "Designed and executed a comprehensive integration strategy to merge distinct business units with minimal operational disruption.",
                "Collaborated with cross-functional teams to align technical solutions with unified business objectives."
            ]
        },
        {
            role: "Backend Engineer / Senior Software Engineer",
            company: "Rakuten Symphony",
            location: "Bengaluru",
            duration: "September 2022 - June 2024",
            description: [
                "Architected and developed scalable RESTful APIs for B2B Mobile Network Operator (MNO) Business Support Systems (BSS).",
                "Designed resilient, high-availability microservices ensuring robust system performance and reliability.",
                "Implemented secure endpoints using Spring Boot, facilitating seamless inter-service communication.",
                "Optimized database interactions using Hibernate ORM and MySQL for high-volume data processing.",
                "Collaborated in an Agile environment using Jira, Confluence, and Git for streamlined CI/CD workflows."
            ]
        },
        {
            role: "Associate Consultant / Software Engineer",
            company: "Capgemini IN",
            location: "Bengaluru",
            duration: "August 2020 - September 2022",
            description: [
                "Specialized in the Pricing Domain for a Configure, Price, Quote (CPQ) product, enhancing core pricing logic.",
                "Optimized complex mathematical algorithms for configuration pricing, significantly improving calculation accuracy and speed.",
                "Refactored legacy codebases to improve performance and maintainability of pricing APIs.",
                "Collaborated with cross-functional teams to translate intricate business requirements into efficient backend solutions.",
                "Utilized Java and Spring Boot to deliver high-performance microservices in an Agile environment."
            ]
        }
    ];

    return (
        <section id="experience" className="py-20 relative">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500 mb-4">Work Experience</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full"></div>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-emerald-500 to-cyan-500 rounded-full opacity-20"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center md:items-start`}>

                                {/* Timeline Dot */}
                                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-500 rounded-full border-4 border-slate-900 z-10 mt-6 md:mt-6"></div>

                                {/* Content Card */}
                                <div className="w-full md:w-5/12 ml-12 md:ml-0 glass p-6 rounded-xl border border-white/5 shadow-lg hover:bg-white/5 transition-all duration-300 group hover:-translate-y-1">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">{exp.role}</h3>
                                        <div className="flex items-center text-xs text-cyan-400 font-medium bg-cyan-400/10 px-2 py-1 rounded-full">
                                            <FontAwesomeIcon icon={faCalendarAlt} className="mr-1" />
                                            {exp.duration}
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <div className="flex items-center text-gray-300 mb-1">
                                            <FontAwesomeIcon icon={faBriefcase} className="mr-2 text-emerald-500" />
                                            <span className="font-semibold">{exp.company}</span>
                                        </div>
                                        <div className="flex items-center text-gray-400 text-sm">
                                            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-gray-500" />
                                            {exp.location}
                                        </div>
                                    </div>

                                    <ul className="space-y-2">
                                        {exp.description.map((desc, i) => (
                                            <li key={i} className="flex items-start text-gray-300 text-sm leading-relaxed">
                                                <span className="mr-2 text-cyan-500 mt-1">•</span>
                                                {desc}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;