import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Partners = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  // Sample partners for a starting foundation
  const partners = [
    { id: 1, name: 'IIT Delhi', logo: '🎓', type: 'Academic' },
    { id: 2, name: 'NASSCOM', logo: '🏢', type: 'Industry' },
    { id: 3, name: 'GitHub India', logo: '🐙', type: 'Platform' },
    { id: 4, name: 'Red Hat', logo: '🎩', type: 'Enterprise' },
    { id: 5, name: 'Infosys Foundation', logo: '💼', type: 'Corporate' },
    { id: 6, name: 'Mozilla India', logo: '🦊', type: 'Community' }
  ];
  
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_50%_50%,_#334155_2px,_transparent_2px)] bg-[length:60px_60px]" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 mb-8 text-sm font-semibold text-blue-700 bg-blue-50 border border-blue-200 rounded-full">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
            Growing Network
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-slate-900 bg-clip-text text-transparent">Partners</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Building India's open source ecosystem with leading academic institutions, enterprises, and communities
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white border border-slate-200 rounded-2xl p-6 h-24 flex flex-col items-center justify-center shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-3xl mb-1 group-hover:scale-110 transition-transform duration-300">
                  {partner.logo}
                </div>
                <div className="text-xs text-slate-500 font-medium">{partner.type}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;