import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(''), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'tainglykheang0306@gmail.com',
      link: 'mailto:tainglykheang0306@gmail.com',
      description: 'Send me an email anytime'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '0272789046',
      link: 'tel:0272789046',
      description: 'Call me during business hours'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'taing-lykheang-0860442',
      link: 'https://www.linkedin.com/in/taing-lykheang-0860442',
      description: 'Connect with me professionally'
    },
    {
      icon: '🔗',
      title: 'GitHub',
      value: 'ltai457',
      link: 'https://github.com/ltai457',
      description: 'Check out my code'
    },
    {
      icon: '🌐',
      title: 'Portfolio',
      value: 'lykheangtaingportfolio.com',
      link: 'https://www.lykheangtaingportfolio.com/',
      description: 'Visit my online portfolio'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Auckland, New Zealand',
      link: null,
      description: 'Based in Auckland'
    }
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      <div className="w-full px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className={`text-center mb-12 transition-all duration-800 ${
            isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Get In{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className={`transition-all duration-800 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`} style={{ transitionDelay: '200ms' }}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div 
                    key={info.title}
                    className={`bg-white rounded-lg shadow-lg p-6 transition-all duration-600 hover:shadow-xl hover:scale-105 ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-2xl">{info.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h3>
                        {info.link ? (
                          <a 
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-700 font-medium break-all"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-gray-700 font-medium">{info.value}</span>
                        )}
                        <p className="text-sm text-gray-500 mt-1">{info.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className={`mt-8 transition-all duration-800 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`} style={{ transitionDelay: '900ms' }}>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="mailto:tainglykheang0306@gmail.com"
                    className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 text-center"
                  >
                    📧 Send Email
                  </a>
                  <a 
                    href="/LykheangTaing.pdf"
                    download
                    className="flex-1 px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200 text-center"
                  >
                    📄 Download Resume
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`transition-all duration-800 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`} style={{ transitionDelay: '400ms' }}>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
                
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    <div className="flex items-center">
                      <span className="text-lg mr-2">✅</span>
                      <span>Message sent successfully! I'll get back to you soon.</span>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-vertical"
                      placeholder="Tell me about your project, opportunity, or just say hello!"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium transition-all duration-200 ${
                      isSubmitting 
                        ? 'opacity-70 cursor-not-allowed' 
                        : 'hover:shadow-lg hover:scale-105'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </span>
                    ) : (
                      '📤 Send Message'
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className={`mt-16 text-center transition-all duration-800 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '1000ms' }}>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                I'm actively seeking opportunities in <span className="font-semibold text-blue-600">full-stack development</span>, 
                <span className="font-semibold text-purple-600"> data engineering</span>, and 
                <span className="font-semibold text-green-600"> AI integration</span>. 
                Whether you have a project in mind, want to discuss collaboration opportunities, 
                or just want to connect with a fellow developer, I'd love to hear from you!
              </p>
              
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  Full-Time Opportunities
                </span>
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  Contract Projects
                </span>
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  Consulting
                </span>
                <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                  Collaboration
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;