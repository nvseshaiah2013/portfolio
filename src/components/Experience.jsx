import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Experience = () => {
    return (
        <section id="experience">
            <div className="flex flex-col min-h-screen">
                <p className="mx-auto p-9 text-lg md:text-3xl text-blue-900">
                    Experience
                </p>
                <div className="flex justify-center">
                    <div className="text-right hidden md:block">
                        <div className="flex flex-col">
                            <p className="font-semi-bold text-indigo-900 leading-loose">
                                Backend Engineer / Senior Software Engineer
                            </p>
                            <p className="font-medium text-gray-900"> September 2022 - Present </p>
                        </div>
                        <div className="flex flex-col pt-60">
                            <p className="font-semi-bold text-indigo-900 leading-loose">
                                Associate Consultant / Software Engineer
                            </p>
                            <p className="font-medium text-gray-900"> August 2020 - September 2022 </p>
                        </div>
                        <div className="flex flex-col pt-60">
                            <p className="font-semi-bold text-indigo-900 leading-loose">
                                JEE Full Stack Intern
                            </p>
                            <p className="font-medium text-gray-900"> January 2020 - April 2020 </p>
                        </div>
                    </div>
                    <div className="pl-4 flex flex-col">

                    <div className="flex relative pb-10">
                            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                            </div>
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                <FontAwesomeIcon icon={faBriefcase} />
                            </div>
                            <div className="flex flex-col space-y-1 flex-grow pl-4">
                                <div className="font-medium text-indigo-500 leading-relaxed text-lg">
                                    Rakuten Symphony, Bengaluru
                            </div>
                                <div className="flex flex-col md:hidden">
                                    <p className="font-semi-bold text-indigo-900 leading-loose">
                                        Backend Engineer / Senior Software Engineer
                                    </p>
                                    <p className="font-medium text-gray-900"> September 2022 - Present </p>
                                </div>
                                <div className="flex flex-col space-y-0.5">
                                    <div className="leading-loose"> <FontAwesomeIcon icon={faArrowRight} /> Building scalable APIs for B2B MNO BSS services</div>
                                    <div className="leading-loose"> <FontAwesomeIcon icon={faArrowRight} /> Building resilient and reliable systems </div>
                                    <div className="leading-loose"><FontAwesomeIcon icon={faArrowRight} /> Build REST APIs in Springboot.</div>
                                    <div className="leading-loose"><FontAwesomeIcon icon={faArrowRight} /> Consumed the REST APIs built in Springboot</div>
                                    <div className="leading-loose"> <FontAwesomeIcon icon={faArrowRight} /> Backend : Spring, Springboot, MySQL, Hibernate ORM</div>
                                    <div className="leading-loose"> <FontAwesomeIcon icon={faArrowRight} /> Tools : IntelliJ, Jira, Confluence, Git</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex relative pb-10">
                            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                            </div>
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                <FontAwesomeIcon icon={faBriefcase} />
                            </div>
                            <div className="flex flex-col space-y-1 flex-grow pl-4">
                                <div className="font-medium text-indigo-500 leading-relaxed text-lg">
                                    Capgemini IN, Bengaluru
                            </div>
                                <div className="flex flex-col md:hidden">
                                    <p className="font-semi-bold text-indigo-900 leading-loose">
                                        Associate Consultant / Software Engineer
                                    </p>
                                    <p className="font-medium text-gray-900"> August 2020 - September 2022 </p>
                                </div>
                                <div className="flex flex-col space-y-0.5">
                                    <div className="leading-loose"> <FontAwesomeIcon icon={faArrowRight} /> Currently, applying my skills as Backend Developer</div>
                                    <div className="leading-loose"> <FontAwesomeIcon icon={faArrowRight} /> Learnt to convert user requirements to efficient code</div>
                                    <div className="leading-loose"><FontAwesomeIcon icon={faArrowRight} /> Build REST APIs in Springboot.</div>
                                    <div className="leading-loose"><FontAwesomeIcon icon={faArrowRight} /> Consumed the REST APIs built in Springboot</div>
                                    <div className="leading-loose"> <FontAwesomeIcon icon={faArrowRight} /> Worked in an Agile (Scrum) environment.</div>
                                    <div className="leading-loose"> <FontAwesomeIcon icon={faArrowRight} /> Backend : Spring, Springboot, MySQL, Hibernate ORM</div>
                                    <div className="leading-loose"> <FontAwesomeIcon icon={faArrowRight} /> Tools : IntelliJ, Jira, Confluence, Git</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex relative pb-10">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                <FontAwesomeIcon icon={faBriefcase} />
                            </div>
                            <div className="flex flex-col space-y-1 flex-grow pl-4">
                                <div className="font-medium text-indigo-500 leading-relaxed text-lg">
                                    Capgemini IN, Pune
                            </div>
                                <div className="flex flex-col md:hidden">
                                    <p className="font-semi-bold text-indigo-900 leading-loose">
                                        JEE Full Stack Intern
                            </p>
                                    <p className="font-medium text-gray-900"> January 2020 - April 2020 </p>
                                </div>
                                <div className="flex flex-col space-y-0.5">
                                    <div className="leading-10"> <FontAwesomeIcon icon={faArrowRight} /> Building the reusable, efficient and reliable Java code.</div>
                                    <div className="leading-loose"> <FontAwesomeIcon icon={faArrowRight} /> Frontend : HTML, CSS, Angular 6+, Typescript</div>
                                    <div className="leading-loose"> <FontAwesomeIcon icon={faArrowRight} /> Worked in an Agile (Scrum) environment.</div>
                                    <div className="leading-loose"> <FontAwesomeIcon icon={faArrowRight} /> Backend : Springboot, MySQL, Hibernate ORM</div>
                                    <div className="leading-loose"> <FontAwesomeIcon icon={faArrowRight} /> Tools : Git, Eclipse, VS Code</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;