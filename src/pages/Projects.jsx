import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      id: 1,
      title: "MediMate - AI-Powered Medication App",
      type: "Full Stack Mobile Development",
      period: "July 2024 – November 2024",
      description: "An innovative SwiftUI iOS application enabling users to search for medications using text input or AI-driven image recognition with OpenAI's CLIP model.",
      keyFeatures: [
        "AI-powered image recognition for medication identification",
        "Product comparison for up to 5 medications side-by-side",
        "99% accuracy rate in medication identification",
        "Real-time notifications with RabbitMQ",
        "Spring Boot backend with Redis caching"
      ],
      technologies: ["SwiftUI", "OpenAI CLIP", "Spring Boot", "Redis", "RabbitMQ", "iOS"],
      thumbnail: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDAwIDI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgZmlsbD0iIzRmNDZlNSIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMTM1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMzIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TWVkaU1hdGU8L3RleHQ+Cjwvc3ZnPg==",
      category: "Mobile Development",
      achievement: "99% accuracy rate"
    },
    {
      id: 2,
      title: "Music Streaming & Social Platform",
      type: "Full Stack Web Development", 
      period: "February 2024 – July 2024",
      description: "A comprehensive MERN stack music streaming and social application with Spotify integration, real-time features, and AI-powered recommendations.",
      keyFeatures: [
        "Spotify Web API integration for seamless music playback",
        "Real-time social features with Socket.IO",
        "AI chatbot with OpenAI API for music recommendations",
        "Centralized state management with Redux",
        "Responsive design with Tailwind CSS"
      ],
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "Socket.IO", "OpenAI API", "Redux", "Tailwind CSS"],
      thumbnail: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDAwIDI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgZmlsbD0iIzFkYjk1NCIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMTI1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjgiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TXVzaWMgU3RyZWFtaW5nPC90ZXh0PgogIDx0ZXh0IHg9IjIwMCIgeT0iMTU1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjgiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+UGxhdGZvcm08L3RleHQ+Cjwvc3ZnPg==",
      category: "Web Development",
      achievement: "Full social music platform"
    },
    {
      id: 3,
      title: "Big Data Analytics Project",
      type: "Data Mining & Analytics",
      period: "March 2024 – June 2024", 
      description: "Advanced big data analytics project using IBM SPSS and Python, transforming complex datasets into actionable business insights.",
      keyFeatures: [
        "Complex dataset transformation and analysis",
        "Advanced statistical modeling techniques",
        "Team collaboration using Microsoft Teams",
        "Automation and workflow optimization",
        "Real-world impact delivery"
      ],
      technologies: ["IBM SPSS", "Python", "Statistical Analysis", "Data Mining", "Microsoft Teams"],
      thumbnail: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDAwIDI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgZmlsbD0iIzdjM2FlZCIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMTI1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjgiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QmlnIERhdGE8L3RleHQ+CiAgPHRleHQgeD0iMjAwIiB5PSIxNTUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyOCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5BbmFseXRpY3M8L3RleHQ+Cjwvc3ZnPg==",
      category: "Data Science",
      achievement: "A+ Grade Achievement"
    },
    {
      id: 4,
      title: "Enterprise Backend System",
      type: "Backend Development",
      period: "January 2023 – July 2023",
      description: "Robust enterprise backend using ASP.NET Core 8.0 with layered architecture, secure authentication, and advanced project management features.",
      keyFeatures: [
        "Layered architecture for enhanced maintainability",
        "JWT token-based authentication system",
        "Role-based access control implementation",
        "Entity Framework Core optimization",
        "Real-time notifications and collaboration tools"
      ],
      technologies: ["ASP.NET Core 8.0", "Entity Framework", "JWT", "ASP.NET Identity", "C#"],
      thumbnail: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDAwIDI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgZmlsbD0iI2RjMjYyNiIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMTI1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjgiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+RW50ZXJwcmlzZTwvdGV4dD4KICA8dGV4dCB4PSIyMDAiIHk9IjE1NSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI4IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkJhY2tlbmQ8L3RleHQ+Cjwvc3ZnPg==",
      category: "Backend Development",
      achievement: "Enterprise-grade architecture"
    },
    {
      id: 5,
      title: "Retail Data Analytics Engine",
      type: "Data Analysis & SQL Development",
      period: "Personal Project",
      description: "Comprehensive retail database analysis of 8,000+ records using advanced SQL techniques to extract actionable business insights.",
      keyFeatures: [
        "Advanced SQL with window functions and CTEs",
        "RFM customer segmentation analysis",
        "Automated inventory management system",
        "Revenue forecasting with moving averages",
        "Sales velocity tracking across 321 products"
      ],
      technologies: ["Advanced SQL", "Window Functions", "CTEs", "Statistical Analysis", "Business Intelligence"],
      thumbnail: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDAwIDI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgZmlsbD0iIzA1OTY2OSIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMTI1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjgiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+UmV0YWlsIERhdGE8L3RleHQ+CiAgPHRleHQgeD0iMjAwIiB5PSIxNTUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyOCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5BbmFseXRpY3M8L3RleHQ+Cjwvc3ZnPg==",
      category: "Data Science",
      achievement: "Gain Expert Knowledge on Business Analyst and Advanced SQL Level"
    },
    {
      id: 6,
      title: "Cloud-Native Restaurant Menu System",
      type: "Full Stack Cloud Development",
      period: "April 2025",
      description: "Modern digital menu system with cloud-native architecture, multilingual support, and real-time data synchronization.",
      keyFeatures: [
        "React frontend with responsive design",
        "Firebase backend-as-a-service",
        "CI/CD deployment pipeline on Vercel",
        "Multilingual and multi-currency support",
        "Real-time data synchronization"
      ],
      technologies: ["React", "Firebase", "Vercel", "CI/CD", "Responsive Design"],
      thumbnail: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDAwIDI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgZmlsbD0iI2VhNTgwYyIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMTI1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjgiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+UmVzdGF1cmFudDwvdGV4dD4KICA8dGV4dCB4PSIyMDAiIHk9IjE1NSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI4IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk1lbnUgU3lzdGVtPC90ZXh0Pgo8L3N2Zz4=",
      category: "Web Development",
      achievement: "End-to-end product lifecycle"
    }
  ];

  const categories = ["All", "Web Development", "Mobile Development", "Data Science", "Backend Development"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      <div className="w-full px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className={`text-center mb-12 transition-all duration-800 ${
            isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              My{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              A showcase of my technical projects spanning full-stack development, data science, and AI integration.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          {/* Category Filter */}
          <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-800 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '200ms' }}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-800 hover:shadow-2xl hover:scale-105 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Thumbnail */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white bg-opacity-90 text-gray-800 text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{project.title}</h3>
                    <p className="text-sm text-blue-600 font-medium">{project.type}</p>
                    <p className="text-xs text-gray-500">{project.period}</p>
                  </div>

                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Achievement Badge */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                      🏆 {project.achievement}
                    </span>
                  </div>

                  {/* Key Features */}
                  <div className={`transition-all duration-300 ${
                    hoveredProject === project.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-xs text-gray-600 space-y-1 mb-4">
                      {project.keyFeatures.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Projects;