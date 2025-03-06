import React from 'react';
import { Code, Smartphone, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { AndroidIcon, FlutterIcon, KotlinIcon, AppleIcon } from './TechIcons';
import dinithImage from '../asset/dinithchanuka.png';

const About = () => {
  const { darkMode } = useTheme();

  return (
    <section id="about" className={`py-20 pt-32 ${darkMode ? 'bg-dark-100' : 'bg-white'
      }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-2 ${darkMode ? 'text-white' : 'text-gray-800'
            }`}>About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <div className={`rounded-full overflow-hidden border-4 ${darkMode ? 'border-dark-200' : 'border-blue-100'
                } shadow-lg relative group`}>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <img
                  src={dinithImage}
                  alt="Dinith Chanuka Kulasinghe"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="md:w-2/3">
              <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-700'
                }`}>Software Engineer</h3>
              <p className={`mb-6 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                Experienced Software Engineer with 4+ years of expertise in mobile app development using Kotlin, Java, Flutter, and AR/VR technologies. Passionate about creating scalable and optimized applications that deliver exceptional user experiences.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-start">
                  <div className={`p-3 rounded-lg mr-3 ${darkMode ? 'bg-dark-200' : 'bg-blue-100'
                    }`}>
                    <Smartphone className={darkMode ? 'text-blue-400' : 'text-blue-600'} size={20} />
                  </div>
                  <div>
                    <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'
                      }`}>Mobile Development</h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>Native & Cross-platform</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className={`p-3 rounded-lg mr-3 ${darkMode ? 'bg-dark-200' : 'bg-blue-100'
                    }`}>
                    <Code className={darkMode ? 'text-blue-400' : 'text-blue-600'} size={20} />
                  </div>
                  <div>
                    <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'
                      }`}>Clean Code</h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>Maintainable & Scalable</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className={`p-3 rounded-lg mr-3 ${darkMode ? 'bg-dark-200' : 'bg-blue-100'
                    }`}>
                    <Zap className={darkMode ? 'text-blue-400' : 'text-blue-600'} size={20} />
                  </div>
                  <div>
                    <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'
                      }`}>Performance</h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>Optimized Solutions</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${darkMode ? 'bg-dark-200' : 'bg-blue-50'
                  }`}>
                  <AndroidIcon className={`w-5 h-5 ${darkMode ? 'text-green-400' : 'text-green-600'
                    }`} />
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Android</span>
                </div>
                <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${darkMode ? 'bg-dark-200' : 'bg-blue-50'
                  }`}>
                  <FlutterIcon className={`w-5 h-5 ${darkMode ? 'text-blue-400' : 'text-blue-600'
                    }`} />
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Flutter</span>
                </div>
                <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${darkMode ? 'bg-dark-200' : 'bg-blue-50'
                  }`}>
                  <KotlinIcon className={`w-5 h-5 ${darkMode ? 'text-purple-400' : 'text-purple-600'
                    }`} />
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Kotlin</span>
                </div>
                <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${darkMode ? 'bg-dark-200' : 'bg-blue-50'
                  }`}>
                  <AppleIcon className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`} />
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>iOS</span>
                </div>
              </div>

              <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                Dedicated to continuous learning and staying updated with the latest technologies and best practices in software development. Skilled in developing robust applications with a focus on performance, user experience, and code quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;