import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';

const Education = () => {
    return (
        <section id="education">
            <div className="flex flex-col min-h-screen">
                <p className="mx-auto p-9 text-lg md:text-3xl text-blue-900">
                    Education
                </p>
                <div className="flex justify-center md:pl-52">
                    <div className="text-right hidden md:block">
                        <div className="flex flex-col">
                            <p className="font-semi-bold text-indigo-900 leading-loose">
                                Graduation
                            </p>
                            <p className="font-medium text-gray-900"> Passed : 2020 </p>
                        </div>
                        <div className="flex flex-col pt-16">
                            <p className="font-semi-bold text-indigo-900 leading-loose">
                                Intermediate
                            </p>
                            <p className="font-medium text-gray-900"> Passed : 2016 </p>
                        </div>
                        <div className="flex flex-col pt-16">
                            <p className="font-semi-bold text-indigo-900 leading-loose">
                                Matriculation
                            </p>
                            <p className="font-medium text-gray-900"> Passed : 2014 </p>
                        </div>
                    </div>
                    <div className="pl-4 flex flex-col">

                        <div className="flex relative pb-10">
                            <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                            </div>
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                <FontAwesomeIcon icon={faUserGraduate} />
                            </div>
                            <div className="flex flex-col space-y-1 flex-grow pl-4">

                                <div className="font-medium text-indigo-500 leading-relaxed text-lg">
                                    Lovely Professional University, Punjab
                            </div>
                                <div className="font-medium text-gray-500 leading-loose">
                                    Computer Science Engineering
                            </div>
                                <div className="flex flex-col md:hidden">
                                    <p className="font-semi-bold text-indigo-900 leading-loose">
                                        Graduation
                            </p>
                                    <p className="font-medium text-gray-900"> Passed : 2020 </p>
                                </div>
                                <div className="italic text-blue-800">
                                    CGPA : 9.24 / 10.00
                            </div>
                            </div>
                        </div>
                        <div className="flex relative pb-10">
                            <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                            </div>
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                <FontAwesomeIcon icon={faUserGraduate} />
                            </div>
                            <div className="flex flex-col space-y-1 flex-grow pl-4">
                                <div className="font-medium text-indigo-500 leading-relaxed text-lg">
                                    Rashtriya Military School, Banglore
                            </div>
                                <div className="font-medium text-gray-500 leading-loose">
                                    Science Stream of Central Board of Secondary Education
                            </div>
                            <div className="flex flex-col md:hidden">
                            <p className="font-semi-bold text-indigo-900 leading-loose">
                                Intermediate
                            </p>
                            <p className="font-medium text-gray-900"> Passed : 2016 </p>
                        </div>
                                <div className="italic text-blue-800">
                                    Percent : 88 %
                            </div>
                            </div>
                        </div>
                        <div className="flex relative pb-10">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                <FontAwesomeIcon icon={faUserGraduate} />
                            </div>
                            <div className="flex flex-col space-y-1 flex-grow pl-4">
                                <div className="font-medium text-indigo-500 leading-relaxed text-lg">
                                    Kendriya Vidyalaya No.1 AFS Adampur, Punjab
                            </div>
                                <div className="font-medium text-gray-500 leading-loose">
                                    Matriculation of Central Board of Secondary Education
                            </div>
                            <div className="flex flex-col md:hidden">
                            <p className="font-semi-bold text-indigo-900 leading-loose">
                                Matriculation
                            </p>
                            <p className="font-medium text-gray-900"> Passed : 2014 </p>
                        </div>
                                <div className="italic text-blue-800">
                                    CGPA : 9.00 / 10.00
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;