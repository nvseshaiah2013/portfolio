import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faFacebookSquare, faInstagramSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-center bg-gray-100 text-gray-700 py-6 relative">
            <div className="text-center mb-4">
                <p className="text-xs md:text-lg mb-2">
                    
                    Venkata Seshaiah <FontAwesomeIcon icon={faCopyright} /> {new Date().getFullYear()}
                </p>
            </div>

            <div className="flex justify-center space-x-4 mb-4">
                <a href="https://www.linkedin.com/in/nvipsumlorem2013" target="_blank" rel="noreferrer" className="text-2xl md:text-4xl text-gray-700 hover:text-blue-700 transition duration-300">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a href="https://github.com/nvipsumlorem2013" target="_blank" rel="noreferrer" className="text-2xl md:text-4xl text-gray-700 hover:text-black transition duration-300">
                    <FontAwesomeIcon icon={faGithubSquare} />
                </a>
                <a href="https://www.instagram.com/_loremipsuma_87" target="_blank" rel="noreferrer" className="text-2xl md:text-4xl text-gray-700 hover:text-pink-600 transition duration-300">
                    <FontAwesomeIcon icon={faInstagramSquare} />
                </a>
                <a href="https://www.facebook.com/loremipsuma.ipsumlorem.77" target="_blank" rel="noreferrer" className="text-2xl md:text-4xl text-gray-700 hover:text-blue-600 transition duration-300">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                </a>
            </div>

            <div className="absolute bottom-2 right-2 text-xs text-gray-400">
                <p>
                    <a href="https://www.flaticon.com/free-icons/book" title="book animated icons" className="hover:underline">
                        Book animated icons created by Freepik - Flaticon
                    </a>
                </p>
                <p>
                    <a href="https://www.flaticon.com/free-icons/virus" title="virus icons" className="hover:underline">
                        Virus icons created by Freepik - Flaticon
                    </a>
                </p>
                <p>
                    <a href="https://www.flaticon.com/free-icons/event" title="event icons" className="hover:underline">
                        Event icons created by Freepik - Flaticon
                    </a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;