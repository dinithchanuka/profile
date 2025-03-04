import React from 'react';
import { Heart, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { AndroidIcon, FlutterIcon, KotlinIcon, AppleIcon } from './TechIcons';

const Footer = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`py-8 ${
      darkMode ? 'bg-dark-300 text-white' : 'bg-gray-900 text-white'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold">Dinith Chanuka Kulasinghe</h2>
            <p className="text-gray-400">Software Engineer</p>
            
            <div className="flex space-x-4 mt-4">
              <AndroidIcon className="w-5 h-5 text-green-400" />
              <FlutterIcon className="w-5 h-5 text-blue-400" />
              <KotlinIcon className="w-5 h-5 text-purple-400" />
              <AppleIcon className="w-5 h-5 text-gray-400" />
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full mb-2 text-gray-300 hover:text-white hover:bg-gray-700"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <div className="flex items-center">
                  <Sun size={16} className="mr-2" />
                  <span>Switch to Light Mode</span>
                </div>
              ) : (
                <div className="flex items-center">
                  <Moon size={16} className="mr-2" />
                  <span>Switch to Dark Mode</span>
                </div>
              )}
            </button>
            
            <p className="flex items-center text-gray-400">
              Made with <Heart size={16} className="mx-1 text-red-500" /> in 2025
            </p>
            <p className="text-gray-400">© {currentYear} All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;