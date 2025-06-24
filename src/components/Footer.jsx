import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Quote */}
        <div className="text-center mb-6">
          <blockquote className="text-lg text-gray-300 italic">
            "Transforming complex data into actionable insights, one algorithm at a time."
          </blockquote>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a 
            href="https://www.linkedin.com/in/taing-lykheang-0860442"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/ltai457"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            GitHub
          </a>
          <a 
            href="mailto:tainglykheang0306@gmail.com"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            Email
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          © {currentYear} Lykheang Taing. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;