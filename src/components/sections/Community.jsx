import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaGraduationCap, FaBuilding, FaUsers } from 'react-icons/fa';
import Card from '../ui/Card';
import Button from '../ui/Button';

const Community = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const pathways = [
    {
      icon: FaCode,
      title: 'Developers',
      description: 'Contribute code, mentor others, and lead innovative projects that shape India\'s tech landscape',
      color: 'from-blue-500 to-blue-700',
      stats: '500+ Active'
    },
    {
      icon: FaGraduationCap,
      title: 'Students',
      description: 'Join programs, access resources, and build your portfolio with real-world experience',
      color: 'from-slate-600 to-slate-800',
      stats: '1.2K+ Learning'
    },
    {
      icon: FaBuilding,
      title: 'Companies',
      description: 'Sponsor projects, provide internships, and adopt open source solutions for growth',
      color: 'from-blue-600 to-slate-700',
      stats: '50+ Partners'
    },
    {
      icon: FaUsers,
      title: 'Institutions',
      description: 'Partnership opportunities, curriculum integration, and collaborative research initiatives',
      color: 'from-slate-700 to-blue-600',
      stats: '25+ Colleges'
    }
  ];
  
  return (
    <section id="community" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-32 right-20 w-80 h-80 bg-gradient-to-br from-blue-100/20 to-slate-200/20 rounded-full blur-3xl"
          animate={{ x: [0, -60, 0], y: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_70%_70%,_#334155_2px,_transparent_2px)] bg-[length:60px_60px]" />
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 mb-8 text-sm font-semibold text-blue-700 bg-blue-50 border border-blue-200 rounded-full">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse" />
            Growing Together
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
            Join Our{' '}
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-slate-900 bg-clip-text text-transparent">
              Community
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Multiple pathways to contribute and make a meaningful impact in India's open source ecosystem
          </p>
        </motion.div>
        
        {/* Pathways Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pathways.map((pathway, index) => (
            <motion.div
              key={pathway.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Card className="h-full bg-white border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 text-center relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${pathway.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${pathway.color} rounded-2xl shadow-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <pathway.icon className="text-white text-2xl" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                    {pathway.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {pathway.description}
                  </p>
                  
                  <div className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">
                    {pathway.stats}
                  </div>
                </div>
                
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${pathway.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
              </Card>
            </motion.div>
          ))}
        </div>
        
        
      </div>
    </section>
  );
};

export default Community;