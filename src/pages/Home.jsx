import React, { useState, useEffect } from 'react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // 500ms delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Profile Image Section */}
          <div className={`flex-shrink-0 order-1 lg:order-1 transition-all duration-800 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}>
            <div className="relative">
              {/* Main Profile Image - Simplified styling */}
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl">
                <img 
                  src="/assets/profile.jpg" 
                  alt="Lykheang Taing"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
          
          {/* Text Content Section */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-2">
            {/* Greeting */}
            <h3 className={`flex items-end gap-2 text-xl md:text-2xl mb-3 font-medium justify-center lg:justify-start transition-all duration-600 ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0'
            }`}>
              Hi! I'm Lykheang (Kay) Taing 
              <span className="text-2xl">👋</span>
            </h3>

            {/* Main Title */}
            <h1 className={`text-3xl md:text-5xl lg:text-6xl xl:text-[66px] font-bold text-gray-900 mb-6 leading-tight transition-all duration-800 ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
            }`}>
              Fresh Graduated Software Developer from University of Auckland.
            </h1>

            {/* Description */}
            <p className={`text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto lg:mx-0 leading-relaxed transition-all duration-600 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}>
              I am a fullstack developer graduated from Master of Information Technology with First class honours, 
              Currently seeking for full time in tech industry.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className={`px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 hover:scale-105 transition-all duration-600 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
                Contact me 
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>

              <a 
                href="/LykheangTaing.pdf" 
                download 
                className={`px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white text-black hover:scale-105 transition-all duration-600 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                My resume 
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
