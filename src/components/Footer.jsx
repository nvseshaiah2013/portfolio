import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faFacebookSquare, faInstagramSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="flex flex-row pl-2 md:px-10 md:py-2 md:-mt-8 align-middle justify-center">
            <div className="flex-grow text-xs md:text-xl">
                <FontAwesomeIcon icon={faCopyright} /> Venkata Seshaiah @ {new Date().getFullYear()}
                <p className="sm:text-xs md:text-sm">
                    <a href="https://www.flaticon.com/free-icons/book" title="book animated icons">
                        Book animated icons created by Freepik - Flaticon</a>
                </p>
                <p className="sm:text-xs md:text-sm">
                    <a href="https://www.flaticon.com/free-icons/virus" title="virus icons">Virus icons created by Freepik - Flaticon</a>
                </p>
                <p className="sm:text-xs md:text-sm">
                <a href="https://www.flaticon.com/free-icons/event" title="event icons">Event icons created by Freepik - Flaticon</a>
                </p>
            </div>
            <div className="inline-flex sm:ml-auto justify-center sm:justify-start md:mt-0 mt-4 space-x-2">
                <a href="https://www.linkedin.com/in/nvseshaiah2013" target={'_blank'} rel="noreferrer" className="md:text-4xl"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                <a href="https://github.com/nvseshaiah2013" target={'_blank'} rel="noreferrer" className="md:text-4xl"><FontAwesomeIcon icon={faGithubSquare} /></a>
                <a href="https://www.instagram.com/_venkata_87" target={'_blank'} rel="noreferrer" className="md:text-4xl"><FontAwesomeIcon icon={faInstagramSquare} /></a>
                <a href="https://www.facebook.com/venkata.seshaiah.77" target={'_blank'} rel="noreferrer" className="md:text-4xl"><FontAwesomeIcon icon={faFacebookSquare} /></a>
            </div>
        </footer>
    );
}

export default Footer;