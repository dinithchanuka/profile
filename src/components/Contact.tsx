import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, Code } from 'lucide-react';
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
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className={`py-20 ${
      darkMode ? 'bg-dark-100' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl font-bold text-center mb-2 ${
          darkMode ? 'text-white' : 'text-gray-800'
        }`}>Contact Me</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className={`text-xl font-semibold mb-6 ${
                darkMode ? 'text-blue-400' : 'text-blue-700'
              }`}>Get In Touch</h3>
              <p className={`mb-8 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
              </p>
              
              <div className="space-y-6">
                <div className={`flex items-center p-4 rounded-lg ${
                  darkMode ? 'bg-dark-200 hover:bg-dark-300 transition-colors' : 'bg-gray-50 hover:bg-blue-50 transition-colors'
                }`}>
                  <div className={`p-3 rounded-full mr-4 ${
                    darkMode ? 'bg-dark-300' : 'bg-blue-100'
                  }`}>
                    <Mail className={darkMode ? 'text-blue-400' : 'text-blue-600'} size={20} />
                  </div>
                  <div>
                    <h4 className={`font-medium ${
                      darkMode ? 'text-white' : 'text-gray-800'
                    }`}>Email</h4>
                    <a 
                      href="mailto:dinithcdev@gmail.com" 
                      className={`hover:underline ${
                        darkMode ? 'text-blue-400' : 'text-blue-600'
                      }`}
                    >
                      dinithcdev@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className={`flex items-center p-4 rounded-lg ${
                  darkMode ? 'bg-dark-200 hover:bg-dark-300 transition-colors' : 'bg-gray-50 hover:bg-blue-50 transition-colors'
                }`}>
                  <div className={`p-3 rounded-full mr-4 ${
                    darkMode ? 'bg-dark-300' : 'bg-blue-100'
                  }`}>
                    <Linkedin className={darkMode ? 'text-blue-400' : 'text-blue-600'} size={20} />
                  </div>
                  <div>
                    <h4 className={`font-medium ${
                      darkMode ? 'text-white' : 'text-gray-800'
                    }`}>LinkedIn</h4>
                    <a 
                      href="https://linkedin.com/in/dinithchanuka" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`hover:underline ${
                        darkMode ? 'text-blue-400' : 'text-blue-600'
                      }`}
                    >
                      linkedin.com/in/dinithchanuka
                    </a>
                  </div>
                </div>
                
                <div className={`flex items-center p-4 rounded-lg ${
                  darkMode ? 'bg-dark-200 hover:bg-dark-300 transition-colors' : 'bg-gray-50 hover:bg-blue-50 transition-colors'
                }`}>
                  <div className={`p-3 rounded-full mr-4 ${
                    darkMode ? 'bg-dark-300' : 'bg-blue-100'
                  }`}>
                    <Github className={darkMode ? 'text-blue-400' : 'text-blue-600'} size={20} />
                  </div>
                  <div>
                    <h4 className={`font-medium ${
                      darkMode ? 'text-white' : 'text-gray-800'
                    }`}>GitHub</h4>
                    <a 
                      href="https://github.com/dinithchanuka" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`hover:underline ${
                        darkMode ? 'text-blue-400' : 'text-blue-600'
                      }`}
                    >
                      github.com/dinithchanuka
                    </a>
                  </div>
                </div>
                
                <div className={`flex items-center p-4 rounded-lg ${
                  darkMode ? 'bg-dark-200 hover:bg-dark-300 transition-colors' : 'bg-gray-50 hover:bg-blue-50 transition-colors'
                }`}>
                  <div className={`p-3 rounded-full mr-4 ${
                    darkMode ? 'bg-dark-300' : 'bg-blue-100'
                  }`}>
                    <Code className={darkMode ? 'text-blue-400' : 'text-blue-600'} size={20} />
                  </div>
                  <div>
                    <h4 className={`font-medium ${
                      darkMode ? 'text-white' : 'text-gray-800'
                    }`}>Stack Overflow</h4>
                    <a 
                      href="https://stackoverflow.com/users/dinithchanuka" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`hover:underline ${
                        darkMode ? 'text-blue-400' : 'text-blue-600'
                      }`}
                    >
                      stackoverflow.com/users/dinithchanuka
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <form onSubmit={handleSubmit} className={`p-6 rounded-lg shadow-md ${
                darkMode ? 'bg-dark-200 shadow-black/20' : 'bg-white'
              }`}>
                <div className="mb-4">
                  <label htmlFor="name" className={`block font-medium mb-2 ${
                    darkMode ? 'text-gray-200' : 'text-gray-700'
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
                    className={`w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      darkMode 
                        ? 'bg-dark-300 border-dark-100 text-white' 
                        : 'border border-gray-300 text-gray-900'
                    }`}
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className={`block font-medium mb-2 ${
                    darkMode ? 'text-gray-200' : 'text-gray-700'
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
                    className={`w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      darkMode 
                        ? 'bg-dark-300 border-dark-100 text-white' 
                        : 'border border-gray-300 text-gray-900'
                    }`}
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className={`block font-medium mb-2 ${
                    darkMode ? 'text-gray-200' : 'text-gray-700'
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
                    className={`w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      darkMode 
                        ? 'bg-dark-300 border-dark-100 text-white' 
                        : 'border border-gray-300 text-gray-900'
                    }`}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 rounded-md font-medium flex items-center justify-center transition-colors ${
                    darkMode 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white disabled:bg-blue-800 disabled:opacity-70' 
                      : 'bg-blue-600 hover:bg-blue-700 text-white disabled:bg-blue-400'
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
                  <div className={`mt-4 p-3 rounded-md ${
                    darkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-700'
                  }`}>
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;