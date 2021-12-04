import React from 'react';

const Skills = () => {
    return (
        <section id="skills">
            <div className="flex flex-col min-h-screen">
                <p className="mx-auto p-9 text-lg md:text-3xl text-blue-900">Skills</p>
                <div className="flex justify-around flex-wrap">
                    <div className="flex flex-col text-center">
                        <h2 className="leading-loose font-medium text-xl text-indigo-500">Front end Technologies</h2>
                        <p className="leading-loose text-lg">HTML</p>
                        <p className="leading-loose text-lg">CSS</p>
                        <p className="leading-loose text-lg">Javascript</p>
                        <p className="leading-loose text-lg">Typescript</p>
                        <p className="leading-loose text-lg">Angular</p>
                        <p className="leading-loose text-lg">React</p>
                    </div>
                    <div className="flex flex-col text-center">
                        <h2 className="leading-loose font-medium text-xl text-indigo-500">Back end Technologies</h2>
                        <p className="leading-loose text-lg">Spring</p>
                        <p className="leading-loose text-lg">Springboot</p>
                        <p className="leading-loose text-lg">Node.js</p>
                        <p className="leading-loose text-lg">JPA Hibernate</p>
                        <p className="leading-loose text-lg">MySQL</p>
                        <p className="leading-loose text-lg">MongoDB</p>
                    </div>
                    <div className="flex flex-col text-center">
                        <h2 className="leading-loose font-medium text-xl text-indigo-500">Programming Languages</h2>
                        <p className="leading-loose text-lg">Java 11</p>
                        <p className="leading-loose text-lg">C++</p>
                        <p className="leading-loose text-lg">C</p>
                    </div>
                    <div className="flex flex-col text-center">
                        <h2 className="leading-loose font-medium text-xl text-indigo-500">Miscellaneous</h2>
                        <p className="leading-loose text-lg">REST API</p>
                        <p className="leading-loose text-lg">Jira</p>
                        <p className="leading-loose text-lg">Confluence</p>
                        <p className="leading-loose text-lg">Git</p>
                        <p className="leading-loose text-lg">IntelliJ</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;