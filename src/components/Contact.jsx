import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <section id="contact" className="flex min-h-screen flex-col bg-gradient-to-t from-gray-100 to-gray-200 py-8">
            <div className="container mx-auto px-4 md:px-8">
                <div className="sm:text-3xl text-2xl mx-auto font-bold capitalize mb-5 text-center">Want to contact me?</div>

                <div className="flex justify-center my-5">
                    <div className="text-center flex items-center bg-gray-100 p-4 rounded-lg shadow-md transition duration-300 hover:shadow-lg">
                        <FontAwesomeIcon icon={faEnvelopeOpen} className="text-4xl mr-3 text-indigo-600" />
                        <a href="mailto:email@gmail.com" className="font-bold capitalize text-2xl text-indigo-600 hover:text-indigo-800 transition duration-200">
                            Email me at
                        </a>
                        <span className="text-indigo-500 mx-2">|</span>
                        <a href="mailto:email@gmail.com" className="text-lg text-indigo-500 hover:font-bold hover:underline transition duration-200 mr-1">
                            email@gmail.com
                        </a> or fill the form below
                    </div>
                </div>

                <div className="mt-8 flex justify-center">
                    <form
                        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg"
                        onSubmit={(e) => {
                            e.preventDefault(); // Prevent the default form submission
                            const name = document.getElementById('name').value;
                            const subject = document.getElementById('subject').value;
                            const description = document.getElementById('description').value;

                            // Create the mailto link with form data
                            const mailtoLink = `mailto:email@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
                                `Name: ${name}\n\nMessage: ${description}`
                            )}`;
                            window.location.href = mailtoLink; // Open the default email client
                        }}
                    >
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">Subject</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="subject"
                                type="text"
                                placeholder="Subject"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">Description</label>
                            <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="description"
                                rows="4"
                                placeholder="Your message..."
                                required
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>


    );
}

export default Contact;