import React, { useState, useEffect } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      <div className="w-full px-6">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-800 ${
            isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              About Me
              
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          {/* Personal Journey */}
          <div className={`bg-white rounded-lg shadow-lg p-8 mb-8 transition-all duration-800 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '200ms' }}>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 flex items-center">
              <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                🚀
              </span>
              My Journey
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              From a curiosity about how technology shapes our world to earning a Master's degree with 
              <span className="font-semibold text-blue-600"> First Class Honours</span>, my path has been driven by a passion for 
              solving complex problems through elegant code and data-driven insights. What started as fascination 
              with computers has evolved into a deep commitment to creating technology that makes a real difference.
            </p>
            <p className="text-gray-700 leading-relaxed">
              My journey through the University of Auckland's rigorous programs taught me not just the technical 
              skills, but the importance of perseverance, continuous learning, and the power of collaboration 
              in achieving breakthrough solutions.
            </p>
          </div>

          {/* What I Do */}
          <div className={`bg-white rounded-lg shadow-lg p-8 mb-8 transition-all duration-800 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '400ms' }}>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 flex items-center">
              <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                💻
              </span>
              What I Do
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              I specialize in bridging the gap between software engineering and data science, creating full-stack 
              applications that not only perform beautifully but also unlock meaningful insights from data. 
              Whether it's building a SwiftUI app with AI-powered image recognition or analyzing 8,000+ records 
              to identify revenue opportunities, I thrive on projects that combine technical excellence with 
              real-world impact.
            </p>
            <p className="text-gray-700 leading-relaxed">
              My expertise spans from crafting intuitive user interfaces to designing robust backend systems, 
              always with a focus on scalability, maintainability, and user experience.
            </p>
          </div>

          {/* Professional Philosophy */}
          <div className={`bg-white rounded-lg shadow-lg p-8 mb-8 transition-all duration-800 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '600ms' }}>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 flex items-center">
              <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                ⚡
              </span>
              My Approach
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`p-4 rounded-lg border-l-4 border-blue-500 bg-blue-50 transition-all duration-600 hover:scale-105 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`} style={{ transitionDelay: '800ms' }}>
                <h3 className="text-lg font-medium text-blue-600 mb-2">Code Quality</h3>
                <p className="text-gray-700 text-sm">I believe in writing clean, maintainable code that stands the test of time. Every line should have purpose, and every function should tell a clear story.</p>
              </div>
              <div className={`p-4 rounded-lg border-l-4 border-green-500 bg-green-50 transition-all duration-600 hover:scale-105 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`} style={{ transitionDelay: '900ms' }}>
                <h3 className="text-lg font-medium text-green-600 mb-2">Collaboration</h3>
                <p className="text-gray-700 text-sm">Great software is built by great teams. I thrive in agile environments where ideas flow freely and peer reviews elevate everyone's work.</p>
              </div>
              <div className={`p-4 rounded-lg border-l-4 border-purple-500 bg-purple-50 transition-all duration-600 hover:scale-105 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`} style={{ transitionDelay: '1000ms' }}>
                <h3 className="text-lg font-medium text-purple-600 mb-2">Continuous Learning</h3>
                <p className="text-gray-700 text-sm">Technology evolves rapidly, and so do I. Whether it's mastering a new framework or diving into emerging AI trends, I stay curious and adaptable.</p>
              </div>
              <div className={`p-4 rounded-lg border-l-4 border-orange-500 bg-orange-50 transition-all duration-600 hover:scale-105 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`} style={{ transitionDelay: '1100ms' }}>
                <h3 className="text-lg font-medium text-orange-600 mb-2">Data-Driven Decisions</h3>
                <p className="text-gray-700 text-sm">Every feature, every optimization should be backed by data. I use analytics to validate assumptions and drive meaningful improvements.</p>
              </div>
            </div>
          </div>

          {/* Education & Achievements */}
          <div className={`bg-white rounded-lg shadow-lg p-8 mb-8 transition-all duration-800 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '800ms' }}>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 flex items-center">
              <span className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                🎓
              </span>
              Education & Achievements
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-medium text-gray-900">Master of Information Technology</h3>
                <p className="text-blue-600 font-medium">First Class Honours • University of Auckland</p>
                <p className="text-gray-600">July 2023 – November 2024</p>
                <p className="text-sm text-gray-700 mt-2">Specialized in data engineering, full-stack development, and AI integration. Achieved A+ grade in Big Data Analytics using IBM SPSS and Python.</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-medium text-gray-900">Bachelor's Degree</h3>
                <p className="text-green-600 font-medium">Computer Science and IT Management • University of Auckland</p>
                <p className="text-gray-600">July 2020 – July 2023</p>
                <p className="text-sm text-gray-700 mt-2">Foundation in software engineering principles, database design, and project management.</p>
              </div>
            </div>
          </div>

          {/* Current Focus */}
          <div className={`bg-white rounded-lg shadow-lg p-8 mb-8 transition-all duration-800 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '1000ms' }}>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 flex items-center">
              <span className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                🎯
              </span>
              Current Focus & Goals
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              I'm currently seeking opportunities in the tech industry where I can contribute to meaningful projects 
              that leverage both my software development skills and data expertise. I'm particularly interested in 
              roles that involve building scalable data products, implementing AI solutions, or creating user-centric 
              applications that solve real-world problems.
            </p>
            <p className="text-gray-700 leading-relaxed">
              My goal is to join a forward-thinking team where I can contribute to innovative projects while 
              continuing to grow as a developer. I'm especially drawn to opportunities in data engineering, 
              full-stack development, or AI/ML implementation.
            </p>
          </div>

          {/* Personal Touch */}
          <div className={`bg-white rounded-lg shadow-lg p-8 transition-all duration-800 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '1200ms' }}>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 flex items-center">
              <span className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mr-3">
                🌟
              </span>
              Beyond Code
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              When I'm not coding, I enjoy staying connected with my cultural roots through my involvement with 
              the Auckland UNI Khmer Society, where I served as Secretary. This experience taught me valuable 
              lessons in event coordination, budget management, and community building.
            </p>
            <p className="text-gray-700 leading-relaxed">
              I'm fluent in multiple languages - Khmer and English, with conversational skills in Mandarin and 
              Cantonese - which helps me connect with diverse teams and understand different perspectives in 
              problem-solving.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;