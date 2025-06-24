import React, { useState, useEffect } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        "React.js", "Next.js", "SwiftUI", "JavaScript", "Tailwind CSS", 
        "Redux", "HTML5", "CSS3"
      ]
    },
    backend: {
      title: "Backend Development", 
      icon: "⚙️",
      skills: [
        "Node.js", "Express.js", "ASP.NET Core", "Spring Boot", 
        "Python", "RESTful APIs", "Socket.IO", "RabbitMQ"
      ]
    },
    database: {
      title: "Database & SQL",
      icon: "🗄️", 
      skills: [
        "Advanced SQL", "MongoDB", "Entity Framework", "Redis",
        "Window Functions", "CTEs", "Database Design", "Query Optimization"
      ]
    },
    dataScience: {
      title: "Data Science & Analytics",
      icon: "📊",
      skills: [
        "Power BI", "Tableau", "IBM SPSS", "Python Analytics",
        "Statistical Analysis", "Data Mining", "ETL Processes", "RFM Analysis"
      ]
    },
    cloud: {
      title: "Cloud & DevOps",
      icon: "☁️",
      skills: [
        "AWS", "Firebase", "Vercel", "Docker", "CI/CD", 
        "Git", "Apache Airflow", "Snowflake"
      ]
    },
    ai: {
      title: "AI & Machine Learning",
      icon: "🤖",
      skills: [
        "OpenAI API", "Computer Vision", "Natural Language Processing",
        "Machine Learning", "AI Integration", "Data Preprocessing"
      ]
    }
  };

  const colors = ['blue', 'green', 'purple', 'orange', 'indigo', 'pink'];

  const getColorClasses = (index) => {
    const colorMap = {
      0: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
      1: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200' },
      2: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
      3: { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200' },
      4: { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200' },
      5: { bg: 'bg-pink-50', text: 'text-pink-700', border: 'border-pink-200' }
    };
    return colorMap[index];
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      <div className="w-full px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className={`text-center mb-12 transition-all duration-800 ${
            isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Technical{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Skills
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skillCategories).map(([key, category], index) => {
              const colorClasses = getColorClasses(index);
              
              return (
                <div 
                  key={key}
                  className={`bg-white rounded-lg shadow-lg p-6 border ${colorClasses.border} transition-all duration-800 hover:shadow-xl ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">{category.icon}</span>
                    <h2 className={`text-xl font-bold ${colorClasses.text}`}>
                      {category.title}
                    </h2>
                  </div>
                  
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skill}
                        className={`px-3 py-2 ${colorClasses.bg} ${colorClasses.text} rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105`}
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;