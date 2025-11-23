import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <section id="contact" className="py-20 relative">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500 mb-4">Get In Touch</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full"></div>
                </div>

                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div className="glass p-8 rounded-xl border border-white/5 shadow-lg">
                            <h3 className="text-2xl font-bold text-white mb-4">Let's Talk</h3>
                            <p className="text-gray-300 mb-8 leading-relaxed">
                                I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                            </p>

                            <div className="flex items-center space-x-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                                    <FontAwesomeIcon icon={faEnvelopeOpen} className="text-xl" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Email me at</p>
                                    <a href="mailto:nvseshaiah2013@gmail.com" className="text-white font-medium hover:text-cyan-500 transition-colors">
                                        nvseshaiah2013@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="glass p-8 rounded-xl border border-white/5 shadow-lg">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const name = document.getElementById('name').value;
                                const subject = document.getElementById('subject').value;
                                const description = document.getElementById('description').value;

                                const mailtoLink = `mailto:nvseshaiah2013@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
                                    `Name: ${name}\n\nMessage: ${description}`
                                )}`;
                                window.location.href = mailtoLink;
                            }}
                            className="space-y-6"
                        >
                            <div>
                                <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="name">Name</label>
                                <input
                                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                                    id="name"
                                    type="text"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="subject">Subject</label>
                                <input
                                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                                    id="subject"
                                    type="text"
                                    placeholder="Subject"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="description">Message</label>
                                <textarea
                                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                                    id="description"
                                    rows="4"
                                    placeholder="Your message..."
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-bold py-3 px-4 rounded-lg hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
                            >
                                <FontAwesomeIcon icon={faPaperPlane} className="mr-2" /> Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;