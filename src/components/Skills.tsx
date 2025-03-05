import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { AndroidIcon, FlutterIcon, KotlinIcon, AppleIcon } from './TechIcons';
import { Code, Database, Cpu, Layers, PenTool as Tool, Palette, Terminal, Server, Zap } from 'lucide-react';

const Skills = () => {
  const { darkMode } = useTheme();
  
  const skillCategories = [
    {
      category: 'Programming Languages',
      icon: <Code size={20} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />,
      skills: ['Kotlin', 'Java', 'Dart']
    },
    {
      category: 'Frameworks & Technologies',
      icon: <Layers size={20} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />,
      skills: ['Flutter', 'Android SDK', 'Firebase', 'REST APIs', 'SQLite', 'Figma', 'Git', 'AR & VR', 'IoT']
    },
    {
      category: 'Tools & Platforms',
      icon: <Tool size={20} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />,
      skills: ['Android Studio', 'VS Code', 'XCode', 'Genymotion', 'Firebase', 'Google Play Console', 'Apple Developer', 'GitHub', 'Bitbucket', 'Jira']
    },
    {
      category: 'Libraries - Android',
      icon: <Cpu size={20} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />,
      skills: ['Retrofit', 'Glide', 'Dagger-Hilt', 'RxJava/RxKotlin', 'OkHttp']
    },
    {
      category: 'Libraries - Flutter',
      icon: <Database size={20} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />,
      skills: ['Provider', 'Riverpod', 'GetX', 'Dio', 'Shared Preferences', 'Flutter Local Notifications', 'Firebase Core', 'Firebase Auth', 'Cloud Firestore', 'Google Maps Flutter']
    }
  ];

  // Function to get icon for specific skills
  const getSkillIcon = (skill) => {
    if (skill === 'Kotlin') return <KotlinIcon className={`w-5 h-5 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />;
    if (skill === 'Android SDK' || skill === 'Android Studio' || skill === 'Java') return <AndroidIcon className={`w-5 h-5 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />;
    if (skill === 'Flutter' || skill.includes('Flutter')) return <FlutterIcon className={`w-5 h-5 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />;
    if (skill === 'XCode' || skill === 'Apple Developer') return <AppleIcon className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />;
    return null;
  };

  return (
    <section id="skills" className={`py-20 ${
      darkMode ? 'bg-gradient-to-b from-dark-200 to-dark-100' : 'bg-gradient-to-b from-gray-50 to-white'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl font-bold text-center mb-2 ${
          darkMode ? 'text-white' : 'text-gray-800'
        }`}>Skills</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
        
        {/* Tech circuit background */}
        <div className="max-w-5xl mx-auto relative">
          <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full">
              <svg width="100%" height="100%" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" stroke={darkMode ? "#4B9FFF" : "#2563EB"} strokeWidth="2">
                  <path d="M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63" />
                  <path d="M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764" />
                  <path d="M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880" />
                  <path d="M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382" />
                  <path d="M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-31 229" />
                </g>
              </svg>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex} 
                className={`rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1 ${
                  darkMode 
                    ? 'bg-dark-200/80 shadow-lg shadow-black/20 border border-dark-100 backdrop-blur-sm' 
                    : 'bg-white/90 shadow-md hover:shadow-blue-100 backdrop-blur-sm'
                }`}
              >
                <div className={`h-1 ${
                  categoryIndex % 5 === 0 
                    ? 'bg-blue-500' 
                    : categoryIndex % 5 === 1 
                      ? 'bg-purple-500' 
                      : categoryIndex % 5 === 2
                        ? 'bg-green-500'
                        : categoryIndex % 5 === 3
                          ? 'bg-yellow-500'
                          : 'bg-red-500'
                }`}></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg mr-3 ${
                      darkMode ? 'bg-dark-300' : 'bg-blue-100'
                    }`}>
                      {category.icon}
                    </div>
                    <h3 className={`text-xl font-bold ${
                      darkMode ? 'text-white' : 'text-gray-800'
                    }`}>{category.category}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex} 
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                          darkMode 
                            ? 'bg-dark-300 hover:bg-blue-900/30 hover:border-blue-500/50 border border-transparent' 
                            : 'bg-gray-50 hover:bg-blue-50 hover:border-blue-200 border border-transparent'
                        }`}
                      >
                        {getSkillIcon(skill) && (
                          <span className="flex-shrink-0">{getSkillIcon(skill)}</span>
                        )}
                        <span className={`${
                          darkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className={`mt-12 p-6 rounded-xl ${
            darkMode 
              ? 'bg-gradient-to-r from-dark-200 to-dark-300 border border-dark-100' 
              : 'bg-gradient-to-r from-blue-50 to-indigo-50'
          }`}>
            <div className="flex items-center mb-6">
              <div className={`p-3 rounded-lg mr-3 ${
                darkMode ? 'bg-dark-300' : 'bg-blue-100'
              }`}>
                <Zap size={20} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
              </div>
              <h3 className={`text-xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-800'
              }`}>Tech Specializations</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className={`p-4 rounded-lg transition-transform hover:scale-105 ${
                darkMode 
                  ? 'bg-gradient-to-br from-dark-300 to-dark-200 border border-dark-100' 
                  : 'bg-white shadow-sm'
              }`}>
                <div className="flex items-center mb-3">
                  <Terminal className={`w-6 h-6 mr-2 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                  <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Mobile Development</h4>
                </div>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                  Expert in native Android and cross-platform Flutter development with a focus on performance optimization.
                </p>
              </div>
              
              <div className={`p-4 rounded-lg transition-transform hover:scale-105 ${
                darkMode 
                  ? 'bg-gradient-to-br from-dark-300 to-dark-200 border border-dark-100' 
                  : 'bg-white shadow-sm'
              }`}>
                <div className="flex items-center mb-3">
                  <Server className={`w-6 h-6 mr-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>AR/VR Integration</h4>
                </div>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                  Specialized in implementing augmented reality features in mobile applications using ARCore.
                </p>
              </div>
              
              <div className={`p-4 rounded-lg transition-transform hover:scale-105 ${
                darkMode 
                  ? 'bg-gradient-to-br from-dark-300 to-dark-200 border border-dark-100' 
                  : 'bg-white shadow-sm'
              }`}>
                <div className="flex items-center mb-3">
                  <Cpu className={`w-6 h-6 mr-2 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                  <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>R&D</h4>
                </div>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                Skilled in R&D, transforming research insights into innovative, scalable solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;