import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Articles = () => {
    const articles = [
        {
            title: "Callbacks and Promises",
            description: "Is it possible to convert a callback to promise in NodeJS? Not sure, follow the link below to know more about it.",
            link: "https://www.geeksforgeeks.org/how-to-convert-an-existing-callback-to-a-promise-in-node-js/",
            source: "GeeksForGeeks"
        },
        {
            title: "CSS and Bootstrap",
            description: "Do you want know how to place a Image in a box without using bootstrap. Click below link to know more.",
            link: "https://www.geeksforgeeks.org/how-to-put-images-in-a-box-without-space-using-bootstrap/",
            source: "GeeksForGeeks"
        }
    ];

    return (
        <section id="articles" className="py-20 relative">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500 mb-4">Articles</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {articles.map((article, index) => (
                        <div key={index} className="glass p-8 rounded-xl hover:bg-white/5 transition-all duration-300 border border-white/5 shadow-lg group hover:-translate-y-1">
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">{article.title}</h3>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                {article.description}
                            </p>
                            <a
                                href={article.link}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center text-emerald-400 hover:text-white font-medium transition-colors"
                            >
                                Read on {article.source} <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2 w-3" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Articles;