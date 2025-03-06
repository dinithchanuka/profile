import { GraduationCap, Calendar, Award, ExternalLink } from 'lucide-react';
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

  const certificates = [
    {
      name: 'Fundamentals of Digital Marketing',
      issuer: 'Google Digital Garage',
      provider: 'Google',
      link: 'https://drive.google.com/file/d/1afUSrXiyfewb96sHAXixKAyGHOMFGs7H/view?usp=sharing'
    },
    {
      name: 'Java for Android',
      issuer: 'Coursera',
      provider: 'Vanderbilt University',
      link: 'https://coursera.org/share/545d06265dc895c56523234a03ac63e0'
    },
    {
      name: 'Mobile App Marketing',
      issuer: 'Udemy',
      provider: 'Udemy',
      link: 'https://drive.google.com/file/d/1qWxJrRcYJcDnKMth3qmUXYN1bJ7SeI1a/view?usp=drivesdk'
    },
    {
      name: 'Kotlin for Java Developers',
      issuer: 'Coursera',
      provider: 'Vanderbilt University',
      status: 'On Going',
      link: 'https://www.coursera.org/learn/kotlin-for-java-developers'
    }
  ];

  return (
    <section id="education" className={`py-20 ${darkMode ? 'bg-gradient-to-b from-dark-100 to-dark-200' : 'bg-gradient-to-b from-indigo-50 to-white'
      }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl font-bold text-center mb-2 ${darkMode ? 'text-white' : 'text-gray-800'
          }`}>Education</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Education Section */}
            <div className="space-y-8">
              <h3 className={`text-2xl font-semibold mb-6 flex items-center ${darkMode ? 'text-blue-400' : 'text-blue-700'
                }`}>
                <GraduationCap className="mr-2" />
                Academic Education
              </h3>

              {educationList.map((education, index) => (
                <div key={index} className="relative pl-8">
                  <div className={`absolute left-0 top-0 w-6 h-6 rounded-full flex items-center justify-center ${darkMode ? 'bg-blue-600' : 'bg-blue-600'
                    }`}>
                    <GraduationCap size={14} className="text-white" />
                  </div>

                  <div className={`p-6 rounded-lg shadow-md transition-all duration-300 hover:scale-[1.02] ${darkMode
                    ? 'bg-dark-300/80 shadow-black/20 border border-dark-100 backdrop-blur-sm'
                    : 'bg-white/90 shadow-lg backdrop-blur-sm'
                    }`}>
                    <div className="flex items-center mb-2">
                      <Calendar size={18} className={darkMode ? 'text-blue-400 mr-2' : 'text-blue-600 mr-2'} />
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{education.period}</span>
                    </div>

                    <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'
                      }`}>{education.degree}</h3>
                    <h4 className={`text-lg mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'
                      }`}>{education.institution}</h4>

                  </div>
                </div>
              ))}
            </div>

            {/* Certificates Section */}
            <div>
              <h3 className={`text-2xl font-semibold mb-6 flex items-center ${darkMode ? 'text-blue-400' : 'text-blue-700'
                }`}>
                <Award className="mr-2" />
                Certifications
              </h3>

              <div className="grid gap-4">
                {certificates.map((cert, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-lg shadow-md transition-all duration-300 hover:scale-[1.02] ${darkMode
                      ? 'bg-dark-300/80 shadow-black/20 border border-dark-100 backdrop-blur-sm'
                      : 'bg-white/90 shadow-lg backdrop-blur-sm'
                      }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className={`text-lg font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-800'
                          }`}>{cert.name}</h4>
                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                          via {cert.issuer} from {cert.provider}
                        </p>
                      </div>
                      <div className="flex items-center">
                        {cert.status && (
                          <span className={`px-3 py-1 rounded-full text-xs font-medium mr-2 ${darkMode
                            ? 'bg-blue-900/30 text-blue-400 border border-blue-800'
                            : 'bg-blue-100 text-blue-800'
                            }`}>
                            {cert.status}
                          </span>
                        )}
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-1 rounded-lg transition-colors ${darkMode
                            ? 'hover:bg-dark-200 text-gray-400 hover:text-white'
                            : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                            }`}
                        >
                          <ExternalLink size={18} />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;