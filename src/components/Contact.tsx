import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, Code, Phone, MessageCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
  const { darkMode } = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className={`py-20 relative overflow-hidden ${darkMode ? 'bg-gradient-to-br from-dark-100 via-dark-200 to-dark-300' : 'bg-gradient-to-br from-white via-blue-50 to-indigo-50'
      }`}>
      {/* Tech pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.344 0L13.858 8.485 15.272 9.9l9.9-9.9h-2.828zM32 0l-9.9 9.9 1.414 1.414L33.414 0H32zM0 0c0 3.323 2.677 6 6 6 3.323 0 6-2.677 6-6h2.832c0 4.885-3.747 8.632-8.632 8.632C1.185 8.632-2.562 4.885-2.562 0H0zm0 18.384l2.828-2.828 3.586 3.586 1.414-1.414-2.172-2.172L8.586 12H0v6.384zm0 12.88l2.828 2.83 3.586-3.587 1.414 1.415-2.172 2.172 2.172 2.172H0v-5.002zm0 13.662L2.828 42.1l3.586 3.586 1.414-1.414-2.172-2.172L8.586 38H0v6.93zm0 12.88l2.828 2.828 3.586-3.586 1.414 1.414-2.172 2.172 2.172 2.172H0v-5z' fill='%234B9FFF' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className={`text-3xl font-bold text-center mb-2 ${darkMode ? 'text-white' : 'text-gray-800'
          }`}>Contact Me</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-blue-400' : 'text-blue-700'
                }`}>Get In Touch</h3>
              <p className={`mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
              </p>

              <div>
                <form onSubmit={handleSubmit} className={`p-6 rounded-lg shadow-md backdrop-blur-sm ${darkMode ? 'bg-dark-200/90 shadow-black/20 border border-dark-100' : 'bg-white/90 shadow-lg'
                  }`}>
                  <div className="mb-4">
                    <label htmlFor="name" className={`block font-medium mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-700'
                      }`}>
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${darkMode
                        ? 'bg-dark-300 border-dark-100 text-white hover:bg-dark-200'
                        : 'border border-gray-300 text-gray-900 hover:border-blue-300'
                        }`}
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className={`block font-medium mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-700'
                      }`}>
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${darkMode
                        ? 'bg-dark-300 border-dark-100 text-white hover:bg-dark-200'
                        : 'border border-gray-300 text-gray-900 hover:border-blue-300'
                        }`}
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className={`block font-medium mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-700'
                      }`}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className={`w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${darkMode
                        ? 'bg-dark-300 border-dark-100 text-white hover:bg-dark-200'
                        : 'border border-gray-300 text-gray-900 hover:border-blue-300'
                        }`}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-6 py-3 rounded-md font-medium flex items-center justify-center transition-all duration-300 ${darkMode
                      ? 'bg-blue-600 hover:bg-blue-700 text-white disabled:bg-blue-800 disabled:opacity-70 transform hover:scale-[1.02]'
                      : 'bg-blue-600 hover:bg-blue-700 text-white disabled:bg-blue-400 transform hover:scale-[1.02]'
                      }`}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send size={16} className="ml-2" />
                      </>
                    )}
                  </button>

                  {submitMessage && (
                    <div className={`mt-4 p-3 rounded-md ${darkMode ? 'bg-green-900/50 text-green-300 backdrop-blur-sm' : 'bg-green-100 text-green-700'
                      }`}>
                      {submitMessage}
                    </div>
                  )}
                </form>
              </div>

            </div>

            <div className="space-y-6">
              <div className={`flex items-center p-4 rounded-lg transform transition-all duration-300 hover:scale-[1.02] ${darkMode ? 'bg-dark-200 hover:bg-dark-300 hover:shadow-lg hover:shadow-black/20' : 'bg-white hover:bg-blue-50 hover:shadow-lg hover:shadow-blue-100/50'
                }`}>
                <div className={`p-3 rounded-full mr-4 ${darkMode ? 'bg-dark-300' : 'bg-blue-100'
                  }`}>
                  <Phone className={darkMode ? 'text-blue-400' : 'text-blue-600'} size={20} />
                </div>
                <div>
                  <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'
                    }`}>Phone</h4>
                  <a
                    href="tel:+94771234567"
                    className={`hover:underline ${darkMode ? 'text-blue-400' : 'text-blue-600'
                      }`}
                  >
                    +94 71 57 47 150
                  </a>
                </div>
              </div>

              <div className={`flex items-center p-4 rounded-lg transform transition-all duration-300 hover:scale-[1.02] ${darkMode ? 'bg-dark-200 hover:bg-dark-300 hover:shadow-lg hover:shadow-black/20' : 'bg-white hover:bg-blue-50 hover:shadow-lg hover:shadow-blue-100/50'
                }`}>
                <div className={`p-3 rounded-full mr-4 ${darkMode ? 'bg-dark-300' : 'bg-blue-100'
                  }`}>
                  <MessageCircle className={darkMode ? 'text-blue-400' : 'text-blue-600'} size={20} />
                </div>
                <div>
                  <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'
                    }`}>WhatsApp</h4>
                  <a
                    href="tel:+94771234567"
                    className={`hover:underline ${darkMode ? 'text-blue-400' : 'text-blue-600'
                      }`}
                  >
                    +94 76 88 434 88
                  </a>
                </div>
              </div>

              <div className={`flex items-center p-4 rounded-lg transform transition-all duration-300 hover:scale-[1.02] ${darkMode ? 'bg-dark-200 hover:bg-dark-300 hover:shadow-lg hover:shadow-black/20' : 'bg-white hover:bg-blue-50 hover:shadow-lg hover:shadow-blue-100/50'
                }`}>
                <div className={`p-3 rounded-full mr-4 ${darkMode ? 'bg-dark-300' : 'bg-blue-100'
                  }`}>
                  <Mail className={darkMode ? 'text-blue-400' : 'text-blue-600'} size={20} />
                </div>
                <div>
                  <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'
                    }`}>Email</h4>
                  <a
                    href="mailto:dinithcdev@gmail.com"
                    className={`hover:underline ${darkMode ? 'text-blue-400' : 'text-blue-600'
                      }`}
                  >
                    dinithcdev@gmail.com
                  </a>
                </div>
              </div>

              <div className={`flex items-center p-4 rounded-lg transform transition-all duration-300 hover:scale-[1.02] ${darkMode ? 'bg-dark-200 hover:bg-dark-300 hover:shadow-lg hover:shadow-black/20' : 'bg-white hover:bg-blue-50 hover:shadow-lg hover:shadow-blue-100/50'
                }`}>
                <div className={`p-3 rounded-full mr-4 ${darkMode ? 'bg-dark-300' : 'bg-blue-100'
                  }`}>
                  <Linkedin className={darkMode ? 'text-blue-400' : 'text-blue-600'} size={20} />
                </div>
                <div>
                  <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'
                    }`}>LinkedIn</h4>
                  <a
                    href="https://linkedin.com/in/dinithchanuka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`hover:underline ${darkMode ? 'text-blue-400' : 'text-blue-600'
                      }`}
                  >
                    linkedin.com/in/dinithchanuka
                  </a>
                </div>
              </div>

              <div className={`flex items-center p-4 rounded-lg transform transition-all duration-300 hover:scale-[1.02] ${darkMode ? 'bg-dark-200 hover:bg-dark-300 hover:shadow-lg hover:shadow-black/20' : 'bg-white hover:bg-blue-50 hover:shadow-lg hover:shadow-blue-100/50'
                }`}>
                <div className={`p-3 rounded-full mr-4 ${darkMode ? 'bg-dark-300' : 'bg-blue-100'
                  }`}>
                  <Github className={darkMode ? 'text-blue-400' : 'text-blue-600'} size={20} />
                </div>
                <div>
                  <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'
                    }`}>GitHub</h4>
                  <a
                    href="https://github.com/dinithchanuka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`hover:underline ${darkMode ? 'text-blue-400' : 'text-blue-600'
                      }`}
                  >
                    github.com/dinithchanuka
                  </a>
                </div>
              </div>

              <div className={`flex items-center p-4 rounded-lg transform transition-all duration-300 hover:scale-[1.02] ${darkMode ? 'bg-dark-200 hover:bg-dark-300 hover:shadow-lg hover:shadow-black/20' : 'bg-white hover:bg-blue-50 hover:shadow-lg hover:shadow-blue-100/50'
                }`}>
                <div className={`p-3 rounded-full mr-4 ${darkMode ? 'bg-dark-300' : 'bg-blue-100'
                  }`}>
                  <Code className={darkMode ? 'text-blue-400' : 'text-blue-600'} size={20} />
                </div>
                <div>
                  <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'
                    }`}>Stack Overflow</h4>
                  <a
                    href="https://stackoverflow.com/users/9519872/dinith"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`hover:underline ${darkMode ? 'text-blue-400' : 'text-blue-600'
                      }`}
                  >
                    stackoverflow.com/users/dinithchanuka
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;