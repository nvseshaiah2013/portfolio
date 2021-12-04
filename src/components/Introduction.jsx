import React from 'react';
import Particles from 'react-tsparticles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAsia } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithubSquare, faInstagramSquare, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

const Introduction = () => {

    const particlesInit = (main) => { }

    const particlesLoaded = (container) => { }

    return (
        <section id="introduction">
            <div className="flex flex-col min-h-screen">
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    className="absolute h-full w-full"
                    options={{
                        fullScreen: {
                            enable: false,
                            zIndex: 1
                        },
                        background: {
                            color: {
                                value: "transparent",
                            },
                        },
                        fpsLimit: 60,
                        particles: {
                            color: {
                                value: "#000000",
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outMode: "bounce",
                                random: false,
                                speed: 1,
                                straight: false,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                random: true,
                                value: 3,
                            },
                        }
                    }}
                />

                <p className="mx-auto text-2xl p-4 mt-20"> Hello, World
                <FontAwesomeIcon
                        className="ml-3 h-6 w-6 inline-block align-text-top text-green-500"
                        icon={faGlobeAsia}
                    />
                </p>
                <p className="mx-auto md:text-2xl p-3 text-center">People know me as <span className="text-blue-600">Venkata Seshaiah </span></p>
                <p className="mx-auto md:text-xl p-3 text-center">and Friends like to call me <span className="text-blue-500">Venkat </span></p>
                <div className="flex my-5 pb-10">
                    <p className="mx-auto md:w-3/5 leading-relaxed text-center">
                        Venkata is a Software Engineer with good problem solving skills, innovative mindset. 
                        Venkata is self-motivated and possess the ability to learn/un-learn/re-learn new technologies.
                        Venkata is a keen Observer and loves to convert theoritcal problem 
                        statements to their equivalent working solutions.
                </p>
                </div>

                <div className="inline-flex justify-center my-4 space-x-2 z-10">
                    <a href="https://www.linkedin.com/in/nvseshaiah2013" target={'_blank'} rel="noreferrer" className="text-4xl"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    <a href="https://github.com/nvseshaiah2013" target={'_blank'} rel="noreferrer" className="text-4xl"><FontAwesomeIcon icon={faGithubSquare} /></a>
                    <a href="https://www.instagram.com/_venkata_87" target={'_blank'} rel="noreferrer" className="text-4xl"><FontAwesomeIcon icon={faInstagramSquare} /></a>
                    <a href="https://www.facebook.com/venkata.seshaiah.77" target={'_blank'} rel="noreferrer" className="text-4xl"><FontAwesomeIcon icon={faFacebookSquare} /></a>
                </div>
                <div className="inline-flex justify-center z-10 sm:mb-0 md:mb-4">                    
                        <a href="#about" className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> More About Me </a>       
                </div>
            </div>
        </section>
    );
}

export default Introduction;