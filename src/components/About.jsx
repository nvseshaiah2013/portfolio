import React from 'react';

const About = () => {
    return (
        <section id="about">
            <div className="flex flex-col min-h-screen">
                <p className="mx-auto pt-9 pb-3 text-lg md:text-3xl text-blue-900"> About Me </p>
                <p className="mx-auto pb-3 text-lg md:text-2xl text-indigo-500 font-semibold"> My Small Intro </p>
                <p className="mx-auto pb-3 text-md font-medium md:w-1/2 text-center">
                    I am a keen observer, passionate towards problem solving. 
                    I am a Web Developer with knack to learn new technologies. 
                    I love to experiment with new technologies.
                </p>
                <p className="text-center mx-auto pb-3 text-lg font-semibold text-indigo-900">
                    Name
                </p>
                <p className="text-center mx-auto pb-3 text-md font-medium"> Nagasuri Venkata Seshaiah</p>
                <p className="text-center mx-auto pb-3 text-lg font-semibold text-indigo-900">
                    Current Company
                </p>
                <p className="text-center mx-auto pb-3 text-md font-medium"> Capgemini, IN</p>
                <p className="text-center mx-auto pb-3 text-lg font-semibold text-indigo-900">
                    Current Company - Date Joined
                </p>
                <p className="text-center mx-auto pb-3 text-md font-medium"> August 2020 </p>
                <p className="text-center mx-auto pb-3 text-lg font-semibold text-indigo-900">
                    Current Profile
                </p>
                <p className="text-center mx-auto pb-3 text-md font-medium"> Backend Developer</p>
                <p className="text-center mx-auto pb-3 text-lg font-semibold text-indigo-900">
                    Designation
                </p>
                <p className="text-center mx-auto pb-3 text-md font-medium"> Sr Analyst/ Software Developer</p>
                <p className="text-center mx-auto pb-3 text-lg font-semibold text-indigo-900">
                    Email
                </p>
                <p className="text-center mx-auto pb-3 text-md font-medium"> nvseshaiah2013@gmail.com</p>
                <p className="text-center mx-auto pb-3 text-lg font-semibold text-indigo-900">
                    Core Technologies
                </p>
                <p className="text-center mx-auto pb-3 text-md font-medium"> Java 11, Springboot</p>
            
            </div>
        </section>
    );
}

export default About;