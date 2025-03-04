import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Education = () => {
  const { darkMode } = useTheme();
  
  const educationList = [
    {
      degree: 'Master of Computer Science',
      institution: 'University of Colombo School of Computing',
      period: '2022 - Present',
      description: 'Specializing in advanced mobile application development and augmented reality technologies. Research focus on optimizing AR performance in resource-constrained environments.'
    },
    {
      degree: 'Bachelor of Computer Science',
      institution: 'University of Colombo School of Computing',
      period: '2016 - 2020',
      description: 'Graduated with honors. Specialized in software engineering with a focus on mobile application development. Final year project involved developing an AR-based educational platform.'
    }
  ];

  return (
    <section id="education" className={`py-20 ${
      darkMode ? 'bg-dark-200' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl font-bold text-center mb-2 ${
          darkMode ? 'text-white' : 'text-gray-800'
        }`}>Education</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-12">
            {educationList.map((education, index) => (
              <div key={index} className="relative pl-8 md:pl-0">
                <div className="md:flex items-start">
                  <div className="hidden md:block md:w-1/4 pr-8">
                    <div className="flex items-center justify-end">
                      <Calendar size={18} className={darkMode ? 'text-blue-400 mr-2' : 'text-blue-600 mr-2'} />
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{education.period}</span>
                    </div>
                  </div>
                  
                  <div className="absolute left-0 top-0 md:relative md:left-auto md:top-auto">
                    <div className="md:hidden flex items-center mb-2">
                      <Calendar size={18} className={darkMode ? 'text-blue-400 mr-2' : 'text-blue-600 mr-2'} />
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{education.period}</span>
                    </div>
                    <div className={`h-full w-0.5 absolute left-0 top-8 md:hidden ${
                      darkMode ? 'bg-dark-100' : 'bg-blue-200'
                    }`}></div>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center md:hidden ${
                      darkMode ? 'bg-blue-600' : 'bg-blue-600'
                    }`}>
                      <GraduationCap size={14} className="text-white" />
                    </div>
                  </div>
                  
                  <div className={`md:w-3/4 p-6 rounded-lg shadow-md ${
                    darkMode ? 'bg-dark-100 shadow-black/20' : 'bg-white'
                  }`}>
                    <div className={`hidden md:flex absolute -left-3 top-6 w-6 h-6 rounded-full items-center justify-center ${
                      darkMode ? 'bg-blue-600' : 'bg-blue-600'
                    }`}>
                      <GraduationCap size={14} className="text-white" />
                    </div>
                    <h3 className={`text-xl font-bold ${
                      darkMode ? 'text-white' : 'text-gray-800'
                    }`}>{education.degree}</h3>
                    <h4 className={`text-lg mb-2 ${
                      darkMode ? 'text-blue-400' : 'text-blue-600'
                    }`}>{education.institution}</h4>
                    <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{education.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;