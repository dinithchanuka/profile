import React from 'react';
import { Smartphone, Globe, Lightbulb, ShoppingCart, UtensilsCrossed, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { AndroidIcon, FlutterIcon, KotlinIcon } from './TechIcons';

const Projects = () => {
  const { darkMode } = useTheme();

  const projectsList = [
    {
      title: 'AirGrab - Catch & Throw',
      description: 'A next-gen social media platform integrating AR & VR technology for immersive content sharing. Users can post and interact with location-specific content featuring 3D objects anchored to real-world locations. The platform includes image and video editing, draft saving, and live updates via Socket.io. Google Maps and Google Earth enhance the geolocation experience, making shared content a part of the real-world environment.',
      technologies: ['Kotlin', 'ARCore', 'Android SDK', 'Firebase', 'FFMPEG', 'Dagger-Hilt', 'Socket.io', 'GPS', 'Retrofit', 'Google Services', 'Image Editor', 'Push Notifications', 'Video Editor'],
      icon: <Smartphone size={24} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />,
      techIcon: <KotlinIcon className={`w-5 h-5 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
    },
    {
      title: 'AirGrab (Prototype)',
      description: 'A prototype developed to showcase the AR & VR experience of AirGrab to investors. It includes all core features without API integration, focusing on demonstrating functionality. Additional features such as event creation, invitation management, games, branding tools, and a digital wallet for saved content provide an expanded vision of the platform’s potential.',
      technologies: ['Flutter', 'GetX', 'AR Sceneform', 'Google Geospatial API', 'Video Editor', 'Video Editor', 'GPS', 'HTML5 Games', 'Google Services', 'Local Storage',],
      icon: <Smartphone size={24} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />,
      techIcon: <FlutterIcon className={`w-5 h-5 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
    },
    {
      title: 'Plurbo',
      description: 'A multi-tenant mobile app designed for companies with large employee bases. It enables event publishing, session and workshop management, and Q&A interactions within the app. Users can register for events, participate in training sessions (via video and PDF modules), and purchase tickets for special events. Additionally, Plurbo functions as a social media platform, allowing users to share their thoughts through text, images, and videos.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'RiverPod', 'Dio', 'Multiple Tenet', 'Crashlytics', 'Chat', 'Vimeo Player'],
      icon: <Globe size={24} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />,
      techIcon: <FlutterIcon className={`w-5 h-5 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
    },
    {
      title: 'IDEAHub',
      description: 'A collaborative platform for entrepreneurs and innovators to share and develop ideas. Implemented user authentication, real-time collaboration features, and data synchronization.',
      technologies: ['Flutter', 'AR-Flutter', 'QR Scan', 'Player', 'Game'],
      icon: <Lightbulb size={24} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />,
      techIcon: <FlutterIcon className={`w-5 h-5 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
    },
    {
      title: 'CloudPOS',
      description: 'A cloud-based point of sale system for retail businesses. Developed the mobile application with offline capabilities, inventory management, and sales analytics.',
      technologies: ['Java', 'Retrofit', 'Crashlytics', 'RESTful APIs', 'Analytics', 'SDK-Printers', 'Customize SDKs'],
      icon: <ShoppingCart size={24} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />,
      techIcon: <AndroidIcon className={`w-5 h-5 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
    },
    {
      title: 'Restaurant POS',
      description: 'A comprehensive point of sale system specifically designed for restaurants. Implemented order management, table reservations, and kitchen display features.',
      technologies: ['Java', 'MVVM', 'RESTApis', 'Glide', 'Hilt-Dagger'],
      icon: <UtensilsCrossed size={24} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />,
      techIcon: <AndroidIcon className={`w-5 h-5 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
    },
    {
      title: 'MVMMS',
      description: 'A motor vehicle maintenance management system that helps users track vehicle maintenance schedules, expenses, and performance metrics for Ceylon Electricity Board.',
      technologies: ['Java', 'GPS', 'REST APIs', 'Map', 'Spring'],
      icon: <Zap size={24} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />,
      techIcon: <AndroidIcon className={`w-5 h-5 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
    }
  ];

  return (
    <section id="projects" className={`py-20 ${darkMode ? 'bg-dark-200' : 'bg-gray-50'
      }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl font-bold text-center mb-2 ${darkMode ? 'text-white' : 'text-gray-800'
          }`}>Projects</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${darkMode
                ? 'bg-dark-100 shadow-lg shadow-black/20 border border-dark-100'
                : 'bg-white shadow-md hover:shadow-blue-100'
                }`}
            >
              <div className={`h-2 ${index % 3 === 0
                ? 'bg-blue-500'
                : index % 3 === 1
                  ? 'bg-purple-500'
                  : 'bg-green-500'
                }`}></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`p-3 rounded-lg mr-3 ${darkMode ? 'bg-dark-200' : 'bg-blue-100'
                      }`}>
                      {project.icon}
                    </div>
                    <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'
                      }`}>{project.title}</h3>
                  </div>
                  <div>{project.techIcon}</div>
                </div>
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>{project.description}</p>

                <div>
                  <h4 className={`text-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`text-xs px-2 py-1 rounded-full ${darkMode
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