import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <section id="contact">
            <div className="flex min-h-screen flex-col">

                <p className="mx-auto p-9 text-lg md:text-3xl text-blue-900">
                    Contact Me
            </p>
                <div className="sm:text-3xl text-2xl mx-auto font-bold capitalize mb-5">Want to contact me ?</div>
                <div className="sm:text-2xl text-xl mx-auto capitalize text-indigo-300 mt-3 mb-5">Reach me @ the following</div>
                <div className="flex justify-center">
                    <div className="text-center">
                        <FontAwesomeIcon icon={faEnvelopeOpen} className="text-5xl my-5" />
                        <div className="font-bold capitalize sm:text-2xl text-xl my-5"> <a href="mailto:nvseshaiah2013@gmail.com"> Email me </a> </div>
                        <div className="text-indigo-500 hover:font-bold my-5"><a href="mailto:nvseshaiah2013@gmail.com">nvseshaiah2013@gmail.com</a></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;