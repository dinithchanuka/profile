import React from 'react';
import { Smartphone, Globe, Lightbulb, ShoppingCart, UtensilsCrossed, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { AndroidIcon, FlutterIcon, KotlinIcon } from './TechIcons';

const Projects = () => {
  const { darkMode } = useTheme();
  
  const projectsList = [
    {
      title: 'AirGrab',
      description: 'An augmented reality application that allows users to interact with virtual objects in real-world environments. Implemented advanced AR features and optimized performance for various device capabilities.',
      technologies: ['Kotlin', 'ARCore', 'Android SDK', 'Firebase'],
      icon: <Smartphone size={24} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />,
      techIcon: <KotlinIcon className={`w-5 h-5 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
    },
    {
      title: 'Plurbo',
      description: 'A social media platform focused on location-based content sharing. Developed the mobile application with real-time updates, geolocation features, and an intuitive user interface.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Google Maps API'],
      icon: <Globe size={24} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />,
      techIcon: <FlutterIcon className={`w-5 h-5 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
    },
    {
      title: 'IDEAHub',
      description: 'A collaborative platform for entrepreneurs and innovators to share and develop ideas. Implemented user authentication, real-time collaboration features, and data synchronization.',
      technologies: ['Java', 'Spring Boot', 'React', 'MongoDB'],
      icon: <Lightbulb size={24} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />,
      techIcon: <FlutterIcon className={`w-5 h-5 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
    },
    {
      title: 'CloudPOS',
      description: 'A cloud-based point of sale system for retail businesses. Developed the mobile application with offline capabilities, inventory management, and sales analytics.',
      technologies: ['Kotlin', 'Android Architecture Components', 'Room Database', 'Retrofit'],
      icon: <ShoppingCart size={24} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />,
      techIcon: <KotlinIcon className={`w-5 h-5 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
    },
    {
      title: 'Restaurant POS',
      description: 'A comprehensive point of sale system specifically designed for restaurants. Implemented order management, table reservations, and kitchen display features.',
      technologies: ['Flutter', 'Firebase', 'Node.js', 'Express'],
      icon: <UtensilsCrossed size={24} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />,
      techIcon: <FlutterIcon className={`w-5 h-5 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
    },
    {
      title: 'MVMMS',
      description: 'A motor vehicle maintenance management system that helps users track vehicle maintenance schedules, expenses, and performance metrics for Ceylon Electricity Board.',
      technologies: ['Java', 'Android', 'SQLite', 'RESTful APIs'],
      icon: <Zap size={24} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />,
      techIcon: <AndroidIcon className={`w-5 h-5 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
    }
  ];

  return (
    <section id="projects" className={`py-20 ${
      darkMode ? 'bg-dark-200' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl font-bold text-center mb-2 ${
          darkMode ? 'text-white' : 'text-gray-800'
        }`}>Projects</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project, index) => (
            <div 
              key={index} 
              className={`rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                darkMode 
                  ? 'bg-dark-100 shadow-lg shadow-black/20 border border-dark-100' 
                  : 'bg-white shadow-md hover:shadow-blue-100'
              }`}
            >
              <div className={`h-2 ${
                index % 3 === 0 
                  ? 'bg-blue-500' 
                  : index % 3 === 1 
                    ? 'bg-purple-500' 
                    : 'bg-green-500'
              }`}></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`p-3 rounded-lg mr-3 ${
                      darkMode ? 'bg-dark-200' : 'bg-blue-100'
                    }`}>
                      {project.icon}
                    </div>
                    <h3 className={`text-xl font-bold ${
                      darkMode ? 'text-white' : 'text-gray-800'
                    }`}>{project.title}</h3>
                  </div>
                  <div>{project.techIcon}</div>
                </div>
                <p className={`mb-4 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>{project.description}</p>
                
                <div>
                  <h4 className={`text-sm font-semibold mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className={`text-xs px-2 py-1 rounded-full ${
                          darkMode 
                            ? 'bg-dark-200 text-blue-400' 
                            : 'bg-blue-100 text-blue-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;