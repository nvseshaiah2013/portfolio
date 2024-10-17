import React from 'react';

const Articles = () => {
    return (
        <section id="articles" className="bg-gradient-to-t from-gray-100 to-gray-200">
            <div className="flex flex-col min-h-screen">
                <p className="mx-auto p-9 text-lg md:text-3xl text-blue-900">
                    Articles
                </p>
                <div className="flex justify-center align-middle">
                    <div className="flex justify-center">
                        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                            <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">Callbacks and Promises</h5>
                            <p className="text-gray-700 text-base mb-4">
                                Is it possible to convert a callback to promise in NodeJS ? 
                                Not sure, follow the link below to know more about it</p>
                            <a href="https://www.geeksforgeeks.org/how-to-convert-an-existing-callback-to-a-promise-in-node-js/" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Visit Geeks For Geeks</a>
                        </div>
                    </div>
                    <div className="p-3"/>
                    <div className="flex justify-center">
                        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                            <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">CSS and Bootstrap</h5>
                            <p className="text-gray-700 text-base mb-4">
                                Do you want know how to place a Image in a box without using bootstrap. Click below link to know more.
                                </p>
                            <a href="https://www.geeksforgeeks.org/how-to-put-images-in-a-box-without-space-using-bootstrap/" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Visit Geeks For Geeks</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Articles;