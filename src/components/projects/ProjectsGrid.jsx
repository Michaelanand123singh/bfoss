import React from 'react';
import { ExternalLink, GitFork, Star, Users, Activity, Calendar } from 'lucide-react';

const ProjectsGrid = ({ category = 'all' }) => { // Add default value here
  const projects = [
    {
      id: 1,
      name: 'BharatOS Core',
      category: 'government',
      status: 'Active',
      description: 'Lightweight Linux distribution optimized for Indian government systems with multilingual support and low-bandwidth operations.',
      problem: 'Government systems need secure, cost-effective OS that works in rural areas',
      solution: 'Custom Linux distro with Indian language support and offline capabilities',
      techStack: ['Linux Kernel', 'Python', 'C++', 'GTK'],
      contributors: 45,
      stars: 1200,
      forks: 340,
      lastUpdate: '2 days ago',
      impact: '12 districts deployed',
      github: 'https://github.com/bharatfoss/bharatos-core',
      website: 'https://bharatos.org'
    },
    {
      id: 2,
      name: 'KisanConnect',
      category: 'agritech',
      status: 'Beta',
      description: 'Farmer-to-market platform supporting 22 Indian languages with SMS and voice interfaces for basic phones.',
      problem: 'Farmers struggle to get fair prices due to middleman exploitation',
      solution: 'Direct marketplace with price discovery and logistics support',
      techStack: ['Node.js', 'React Native', 'PostgreSQL', 'SMS Gateway'],
      contributors: 28,
      stars: 890,
      forks: 156,
      lastUpdate: '1 day ago',
      impact: '5,000+ farmers connected',
      github: 'https://github.com/bharatfoss/kisan-connect'
    },
    {
      id: 3,
      name: 'DigiLocker Plus',
      category: 'security',
      status: 'Active',
      description: 'Enhanced digital document storage with advanced privacy controls and offline access capabilities.',
      problem: 'Current digital storage lacks proper privacy controls and offline access',
      solution: 'Encrypted, decentralized document storage with biometric security',
      techStack: ['Blockchain', 'React', 'Node.js', 'IPFS'],
      contributors: 32,
      stars: 670,
      forks: 123,
      lastUpdate: '3 days ago',
      impact: '50,000+ documents secured',
      github: 'https://github.com/bharatfoss/digilocker-plus'
    },
    {
      id: 4,
      name: 'VidyaPath',
      category: 'education',
      status: 'Active',
      description: 'Offline-first educational platform with content in regional languages and adaptive learning algorithms.',
      problem: 'Students in rural areas lack access to quality educational content',
      solution: 'Offline-capable learning platform with localized content',
      techStack: ['Flutter', 'SQLite', 'Python', 'TensorFlow'],
      contributors: 56,
      stars: 1450,
      forks: 289,
      lastUpdate: '1 day ago',
      impact: '25,000+ students learning',
      github: 'https://github.com/bharatfoss/vidyapath'
    },
    {
      id: 5,
      name: 'SwasthyaBot',
      category: 'health',
      status: 'Research',
      description: 'AI-powered health assistant providing medical guidance in local languages for rural healthcare.',
      problem: 'Rural areas lack access to basic medical consultation',
      solution: 'AI chatbot trained on Indian medical data with voice interface',
      techStack: ['Python', 'TensorFlow', 'FastAPI', 'WebRTC'],
      contributors: 18,
      stars: 445,
      forks: 67,
      lastUpdate: '5 days ago',
      impact: 'Pilot in 3 villages',
      github: 'https://github.com/bharatfoss/swasthya-bot'
    },
    {
      id: 6,
      name: 'BhashaWeb',
      category: 'language',
      status: 'Active',
      description: 'Web browser engine with built-in translation and regional language rendering optimizations.',
      problem: 'Most web content is in English, creating barriers for non-English speakers',
      solution: 'Browser with real-time translation and Indic script optimization',
      techStack: ['Chromium', 'C++', 'JavaScript', 'WebAssembly'],
      contributors: 41,
      stars: 2100,
      forks: 445,
      lastUpdate: '1 day ago',
      impact: '100k+ downloads',
      github: 'https://github.com/bharatfoss/bhasha-web'
    }
  ];

  const filteredProjects = category === 'all' 
    ? projects 
    : projects.filter(project => project.category === category);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800 border-green-200';
      case 'Beta': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Research': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  // Helper function to capitalize category name safely
  const getCategoryDisplayName = (cat) => {
    if (!cat || cat === 'all') return 'All Active Projects';
    return `${cat.charAt(0).toUpperCase() + cat.slice(1)} Projects`;
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {getCategoryDisplayName(category)}
          </h2>
          <p className="text-lg text-gray-600">
            {filteredProjects.length} projects building India's digital future
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              {/* Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {project.name}
                    </h3>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                      <Activity className="w-3 h-3 mr-1" />
                      {project.status}
                    </span>
                  </div>
                  
                  <div className="flex gap-2">
                    {project.website && (
                      <a 
                        href={project.website}
                        className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    <a 
                      href={project.github}
                      className="p-2 text-gray-500 hover:text-gray-800 hover:bg-gray-50 rounded-lg transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    <span>{project.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="w-4 h-4" />
                    <span>{project.forks}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{project.contributors}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{project.lastUpdate}</span>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                {/* Problem & Solution */}
                <div className="mb-6">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Why this matters</h4>
                    <p className="text-sm text-gray-600 bg-red-50 p-3 rounded-lg border-l-4 border-red-200">
                      {project.problem}
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">How we're solving it</h4>
                    <p className="text-sm text-gray-600 bg-green-50 p-3 rounded-lg border-l-4 border-green-200">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Impact & CTA */}
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <span className="font-semibold text-orange-600">Real Impact: </span>
                    <span className="text-gray-600">{project.impact}</span>
                  </div>
                  
                  <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                    Contribute
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Activity className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No projects found</h3>
            <p className="text-gray-500">Try selecting a different category</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsGrid;