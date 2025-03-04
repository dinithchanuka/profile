import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { AndroidIcon, FlutterIcon, KotlinIcon, AppleIcon } from './TechIcons';

const Hero = () => {
  const { darkMode } = useTheme();
  
  return (
    <section className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
      darkMode 
        ? 'bg-gradient-to-br from-dark-100 via-dark-200 to-dark-300' 
        : 'bg-gradient-to-br from-blue-50 via-white to-indigo-50'
    }`}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {/* Tech pattern background */}
          <div className="grid grid-cols-12 gap-4 h-full w-full">
            {Array.from({ length: 100 }).map((_, i) => (
              <div 
                key={i} 
                className={`${
                  Math.random() > 0.5 ? 'opacity-20' : 'opacity-10'
                } ${
                  Math.random() > 0.7 ? 'col-span-1' : 'col-span-2'
                } ${
                  Math.random() > 0.6 ? 'row-span-1' : 'row-span-2'
                } flex items-center justify-center`}
              >
                {Math.random() > 0.75 ? (
                  <AndroidIcon className="w-8 h-8" />
                ) : Math.random() > 0.5 ? (
                  <FlutterIcon className="w-8 h-8" />
                ) : Math.random() > 0.25 ? (
                  <KotlinIcon className="w-8 h-8" />
                ) : (
                  <AppleIcon className="w-8 h-8" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="flex justify-center space-x-4 mb-6 animate-float">
            <AndroidIcon className={`w-10 h-10 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
            <FlutterIcon className={`w-10 h-10 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <KotlinIcon className={`w-10 h-10 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
            <AppleIcon className={`w-10 h-10 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
          </div>
          
          <h1 className={`text-5xl md:text-7xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Dinith Chanuka
          </h1>
          
          <div className={`text-xl md:text-2xl font-light mb-8 ${
            darkMode ? 'text-blue-300' : 'text-blue-600'
          }`}>
            <span className="inline-block">
              Mobile & AR/VR Developer
            </span>
            <span className="mx-3 inline-block">•</span>
            <span className="inline-block">
              Software Engineer
            </span>
          </div>
          
          <p className={`max-w-2xl mx-auto text-lg mb-10 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Crafting exceptional mobile experiences with Kotlin, Flutter, and AR/VR technologies.
            Building the future of digital interaction, one app at a time.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#about" 
              className={`px-8 py-3 rounded-full font-medium transition-all ${
                darkMode 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              Explore My Work
            </a>
            <a 
              href="#contact" 
              className={`px-8 py-3 rounded-full font-medium transition-all ${
                darkMode 
                  ? 'bg-transparent border border-blue-500 text-blue-400 hover:bg-blue-900 hover:bg-opacity-20' 
                  : 'bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50'
              }`}
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about" className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;