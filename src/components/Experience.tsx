import { Briefcase, Calendar, Code, Server, Cpu, Circle, CheckCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Experience = () => {
  const { darkMode } = useTheme();

  const experienceList = [
    {
      company: 'SoftcodeIT Solutions',
      position: 'Software Engineer',
      period: 'May 2022 - Present',
      responsibilities: ['Requirement gathering, technical specification development, and full-stack mobile application development.', 'Successfully deployed applications to the App Store and Play Store.'],
      responsibility0: 'Requirement gathering, technical specification development, and full-stack mobile application development.',
      responsibility1: 'Successfully deployed applications to the App Store and Play Store.',
      responsibility2: 'Conducted research and development on AR/VR technologies, implementing ARCore.',
      responsibility3: 'Designed scalable app architectures and optimized performance.',
      projects: 'AirGrab (Kotlin & Flutter), Plurbo (Flutter), IDEAHub (Flutter)',
      highlightIcon: <Code size={20} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
    },
    {
      company: 'ESOFT Technologies',
      position: 'Software Engineer / Associate Software Engineer',
      period: 'July 2020 - May 2022',
      responsibilities: [],
      responsibility0: 'Developed and deployed native Android applications for POS systems.',
      responsibility1: 'Led UI design initiatives and collaborated with cross-functional teams.',
      responsibility2: 'Conducted extensive testing, debugging, and user training.',
      responsibility3: 'Led R&D efforts for a custom SDK for Point-of-Sale (POS) devices.',
      projects: 'CloudPOS (Android - JAVA), Restaurant POS (Android - JAVA), ESOFT Digital Campus (Flutter)',
      technologies: 'Retrofit, Glide, Dagger-Hilt, Eventbus, Firebase Crashlytics/Analytics/Push Notifications, Microsoft Auth',
      highlightIcon: <Server size={20} className={darkMode ? 'text-green-400' : 'text-green-600'} />
    },
    {
      company: 'Ceylon Electricity Board',
      position: 'Intern Software Engineer',
      period: 'August 2019 - February 2020',
      responsibilities: [],
      responsibility0: 'Led project implementations and conducted user training sessions.',
      // responsibility1: '',
      // responsibility2: '',
      // responsibility3: '',
      projects: 'MVMMS (Android - JAVA)',
      technologies: 'RESTful Web Services, Google Maps, GPS',
      highlightIcon: <Cpu size={20} className={darkMode ? 'text-purple-400' : 'text-purple-600'} />
    }
  ];

  return (
    <section id="experience" className={`py-20 ${darkMode ? 'bg-gradient-to-b from-dark-300 to-dark-200' : 'bg-gradient-to-b from-blue-50 to-white'
      }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl font-bold text-center mb-2 ${darkMode ? 'text-white' : 'text-gray-800'
          }`}>Work Experience</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

        {/* Tech circuit lines */}
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full">
              <svg width="100%" height="100%" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" stroke={darkMode ? "#4B9FFF" : "#2563EB"} strokeWidth="2">
                  <path d="M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63" />
                  <path d="M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764" />
                  <path d="M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880" />
                </g>
              </svg>
            </div>
          </div>

          <div className="space-y-12 relative z-10">
            {experienceList.map((experience, index) => (
              <div key={index} className="relative pl-8 md:pl-0">
                <div className="md:flex items-start">
                  <div className="hidden md:block md:w-1/4 pr-8">
                    <div className="flex items-center justify-end">
                      <Calendar size={18} className={darkMode ? 'text-blue-400 mr-2' : 'text-blue-600 mr-2'} />
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{experience.period}</span>
                    </div>
                  </div>

                  <div className="absolute left-0 top-0 md:relative md:left-auto md:top-auto">
                    <div className="md:hidden flex items-center mb-2">
                      <Calendar size={18} className={darkMode ? 'text-blue-400 mr-2' : 'text-blue-600 mr-2'} />
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{experience.period}</span>
                    </div>
                    <div className={`h-full w-0.5 absolute left-0 top-8 md:hidden ${darkMode ? 'bg-blue-900/50' : 'bg-blue-200'
                      }`}></div>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center md:hidden ${darkMode ? 'bg-blue-600' : 'bg-blue-600'
                      }`}>
                      <Briefcase size={14} className="text-white" />
                    </div>
                  </div>

                  <div className={`md:w-3/4 p-6 rounded-lg shadow-md transition-transform hover:scale-[1.01] ${darkMode
                    ? 'bg-dark-100/90 shadow-black/20 border border-dark-100 backdrop-blur-sm'
                    : 'bg-white/90 backdrop-blur-sm'
                    }`}>
                    <div className={`hidden md:flex absolute -left-3 top-6 w-6 h-6 rounded-full items-center justify-center ${darkMode ? 'bg-blue-600' : 'bg-blue-600'
                      }`}>
                      <Briefcase size={14} className="text-white" />
                    </div>

                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <div className={`p-2 rounded-md mr-3 ${darkMode ? 'bg-dark-200' : 'bg-blue-50'
                          }`}>
                          {experience.highlightIcon}
                        </div>
                        <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'
                          }`}>{experience.position}</h3>
                      </div>
                    </div>

                    <h4 className={`text-lg mb-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'
                      }`}>{experience.company}</h4>

                    {experience.responsibilities.map((responsibility, index) => (
                      <p key={index} className={`mb-2 pl-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                        <CheckCircle className="inline-block mr-2 w-4 h-4 -ml-6" />{responsibility}
                      </p>
                    ))}

                    <div className="mb-4">
                      <h5 className={`font-semibold mb-1 ${darkMode ? 'text-gray-200' : 'text-gray-700'
                        }`}>Projects:</h5>
                      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} pl-2 border-l-2 ${darkMode ? 'border-blue-800' : 'border-blue-200'
                        }`}>{experience.projects}</p>
                    </div>
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

export default Experience;