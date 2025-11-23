import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faFacebookF, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-gray-400 py-10 border-t border-white/5 relative z-10">
            <div className="container mx-auto px-4 flex flex-col items-center">

                <div className="flex justify-center space-x-6 mb-8">
                    <a href="https://www.linkedin.com/in/nvseshaiah2013" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-emerald-600 hover:text-white transition-all duration-300 hover:-translate-y-1">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                    <a href="https://github.com/nvseshaiah2013" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-slate-700 hover:text-white transition-all duration-300 hover:-translate-y-1">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://www.instagram.com/_venkata_87" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-cyan-600 hover:text-white transition-all duration-300 hover:-translate-y-1">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.facebook.com/venkata.seshaiah.77" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:-translate-y-1">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                </div>

                <div className="text-center mb-4">
                    <p className="text-sm md:text-base flex items-center justify-center gap-2">
                        Made with <FontAwesomeIcon icon={faHeart} className="text-red-500 animate-pulse" /> by Venkata Seshaiah
                    </p>
                </div>

                <div className="text-center text-xs text-gray-600">
                    <p>
                        &copy; {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;