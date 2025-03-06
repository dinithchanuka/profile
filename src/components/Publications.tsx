import React from 'react';
import { Book, ExternalLink, Github } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Publications = () => {
    const { darkMode } = useTheme();

    const publications = [
        {
            title: 'Connectivity Checker',
            type: 'GitHub Release • JitPack',
            description: 'This is a Java-based reusable library for checking Bluetooth and network connectivity on Android devices. It offers robust functionality to determine connectivity status effectively.',
            link: 'https://github.com/dinithchanuka/connectivity-checker',
            jitpackLink: 'https://jitpack.io/#dinithchanuka/connectivity-checker'
        }
    ];

    return (
        <section id="publications" className={`py-20 ${darkMode ? 'bg-dark-100' : 'bg-white'
            }`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className={`text-3xl font-bold text-center mb-2 ${darkMode ? 'text-white' : 'text-gray-800'
                    }`}>Publications</h2>
                <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

                <div className="max-w-4xl mx-auto">
                    <div className="grid gap-8">
                        {publications.map((pub, index) => (
                            <div
                                key={index}
                                className={`p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02] ${darkMode
                                        ? 'bg-dark-200 shadow-black/20 border border-dark-100'
                                        : 'bg-white shadow-lg hover:shadow-blue-100'
                                    }`}
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center">
                                        <div className={`p-3 rounded-lg mr-3 ${darkMode ? 'bg-dark-300' : 'bg-blue-100'
                                            }`}>
                                            <Book className={darkMode ? 'text-blue-400' : 'text-blue-600'} size={24} />
                                        </div>
                                        <div>
                                            <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'
                                                }`}>{pub.title}</h3>
                                            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'
                                                }`}>{pub.type}</p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-2">
                                        <a
                                            href={pub.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`p-2 rounded-lg transition-colors ${darkMode
                                                    ? 'hover:bg-dark-100 text-gray-400 hover:text-white'
                                                    : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                                                }`}
                                        >
                                            <Github size={20} />
                                        </a>
                                        <a
                                            href={pub.jitpackLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`p-2 rounded-lg transition-colors ${darkMode
                                                    ? 'hover:bg-dark-100 text-gray-400 hover:text-white'
                                                    : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                                                }`}
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>

                                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'
                                    }`}>{pub.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Publications;