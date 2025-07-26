import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaStar, FaUsers, FaRocket, FaCode, FaLightbulb } from 'react-icons/fa';
import Card from '../ui/Card';
import Button from '../ui/Button';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  // Sample projects for a starting foundation
  const featuredProjects = [
    {
      id: 1,
      title: 'BharatOS Core',
      category: 'Operating System',
      description: 'A lightweight, secure Linux distribution designed for Indian government and educational institutions with native language support.',
      tech: ['Linux', 'C++', 'Python', 'Shell'],
      stars: '2.3k',
      contributors: '45',
      github: '#',
      status: 'Active Development',
      icon: '🖥️'
    },
    {
      id: 2,
      title: 'Digital Identity Toolkit',
      category: 'Security & Privacy',
      description: 'Open source identity management system with privacy-first approach, designed for Indian digital infrastructure needs.',
      tech: ['Node.js', 'React', 'MongoDB', 'Docker'],
      stars: '1.8k',
      contributors: '32',
      github: '#',
      status: 'Beta Release',
      icon: '🔐'
    },
    {
      id: 3,
      title: 'AgriTech Analytics',
      category: 'Agriculture Technology',
      description: 'AI-powered crop monitoring and yield prediction system helping Indian farmers optimize their agricultural practices.',
      tech: ['Python', 'TensorFlow', 'FastAPI', 'PostgreSQL'],
      stars: '1.5k',
      contributors: '28',
      github: '#',
      status: 'Research Phase',
      icon: '🌾'
    },
    {
      id: 4,
      title: 'EduConnect Platform',
      category: 'Educational Technology',
      description: 'Collaborative learning platform connecting students and educators across rural and urban India with offline-first capabilities.',
      tech: ['Vue.js', 'Laravel', 'MySQL', 'WebRTC'],
      stars: '990',
      contributors: '18',
      github: '#',
      status: 'Prototype',
      icon: '📚'
    }
  ];
  
  const stats = [
    { label: 'Active Projects', value: '12+', icon: FaRocket },
    { label: 'Contributors', value: '150+', icon: FaUsers },
    { label: 'Lines of Code', value: '500K+', icon: FaCode },
    { label: 'Ideas in Pipeline', value: '25+', icon: FaLightbulb }
  ];
  
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-blue-100/30 to-slate-200/30 rounded-full blur-3xl"
          animate={{
            x: [0, 80, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-slate-200/20 to-blue-100/20 rounded-full blur-2xl"
          animate={{
            x: [0, -60, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Code Pattern */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(90deg,_#334155_1px,_transparent_1px),linear-gradient(180deg,_#334155_1px,_transparent_1px)] bg-[size:50px_50px]" />
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 mb-8 text-sm font-semibold text-blue-700 bg-blue-50 border border-blue-200 rounded-full shadow-sm">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse" />
            Innovation in Progress
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Our{' '}
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-slate-900 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Discover the open source projects we're building to solve India's unique technological challenges. 
            Each project represents our commitment to accessible, innovative solutions.
          </p>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-slate-700 rounded-xl mb-3 mx-auto">
                  <stat.icon className="text-white text-lg" />
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="group"
            >
              <Card className="h-full bg-white border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 p-8 relative overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-slate-700 rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-700 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <div className="flex items-center space-x-3">
                          <span className="text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
                            {project.category}
                          </span>
                          <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">
                            {project.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    <a
                      href={project.github}
                      className="p-3 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all duration-300"
                    >
                      <FaGithub size={20} />
                    </a>
                  </div>
                  
                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center space-x-6 text-sm text-slate-500">
                      <div className="flex items-center space-x-2">
                        <FaStar className="text-yellow-500" size={14} />
                        <span className="font-medium">{project.stars}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FaUsers className="text-blue-500" size={14} />
                        <span className="font-medium">{project.contributors}</span>
                      </div>
                    </div>
                    <button className="text-sm text-blue-600 hover:text-blue-800 font-semibold hover:underline transition-colors duration-200">
                      Learn More →
                    </button>
                  </div>
                </div>
                
                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 rounded-2xl transition-colors duration-500" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;