import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Card from '../ui/Card';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const values = [
    {
      title: 'Accessibility',
      description: 'Our commitment to making technology available to every corner of India, regardless of economic background',
      icon: '🌐',
      color: 'from-blue-500 to-blue-700'
    },
    {
      title: 'Innovation',
      description: 'Fostering fresh ideas and cutting-edge solutions tailored for India\'s unique challenges',
      icon: '💡',
      color: 'from-slate-600 to-slate-800'
    },
    {
      title: 'Collaboration',
      description: 'Building bridges between aspiring developers, educational institutions, and forward-thinking enterprises',
      icon: '🤝',
      color: 'from-blue-600 to-slate-700'
    },
    {
      title: 'Sustainability',
      description: 'Creating a self-sustaining tech ecosystem that will thrive for generations to come',
      icon: '🌱',
      color: 'from-slate-700 to-blue-600'
    }
  ];
  
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-slate-100 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Shapes */}
        <motion.div
          className="absolute top-16 sm:top-20 md:top-24 lg:top-32 right-4 sm:right-8 md:right-12 lg:right-20 w-32 h-32 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 bg-gradient-to-br from-blue-100/40 to-slate-200/40 rounded-full blur-2xl sm:blur-3xl"
          animate={{
            x: [0, -25, 0],
            y: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-16 sm:bottom-20 md:bottom-24 lg:bottom-32 left-4 sm:left-8 md:left-12 lg:left-20 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-tr from-slate-200/30 to-blue-100/30 rounded-full blur-xl sm:blur-2xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_30%_30%,_#1e293b_2px,_transparent_2px)] bg-[length:40px_40px] sm:bg-[length:60px_60px] lg:bg-[length:80px_80px]" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Header Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            className="text-center mb-6 sm:mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-blue-700 bg-blue-50 border border-blue-200 rounded-full shadow-sm">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mr-2 sm:mr-3 animate-pulse" />
              Building the Foundation
            </div>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
            {/* Left Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
                About{' '}
                <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-slate-900 bg-clip-text text-transparent">
                  BharatFOSS
                </span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
                We're launching BharatFOSS Foundation to democratize technology access across India through 
                open source innovation. Our vision is to build a collaborative ecosystem that bridges the digital divide 
                and empowers the next generation of Indian developers.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600">2024</div>
                  <div className="text-xs sm:text-sm text-slate-500">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-slate-800">Growing</div>
                  <div className="text-xs sm:text-sm text-slate-500">Community</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600">Open</div>
                  <div className="text-xs sm:text-sm text-slate-500">Source First</div>
                </div>
              </div>
            </div>
            
            {/* Right Visual */}
            <motion.div
              className="relative h-64 sm:h-80 md:h-96 flex items-center justify-center order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <div className="relative">
                {/* Central Circle */}
                <motion.div
                  className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-gradient-to-br from-white to-blue-50 rounded-full shadow-2xl border border-slate-200/50 flex items-center justify-center"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-blue-600 to-slate-800 rounded-full shadow-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl">FOSS</span>
                  </div>
                </motion.div>
                
                {/* Orbiting Elements */}
                {['🚀', '⚡', '🔧', '🌟'].map((emoji, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white border-2 border-blue-200 rounded-full shadow-lg flex items-center justify-center text-sm sm:text-base md:text-lg lg:text-2xl"
                    style={{
                      top: '50%',
                      left: '50%',
                      transformOrigin: '0 0',
                    }}
                    animate={{
                      rotate: [0 + i * 90, 360 + i * 90],
                      x: [-5, -5],
                      y: [-5, -5],
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <span 
                      className="block"
                      style={{
                        transform: `translateX(${window.innerWidth < 640 ? 80 : window.innerWidth < 768 ? 100 : window.innerWidth < 1024 ? 120 : 140}px) rotate(${-i * 90}deg)`,
                      }}
                    >
                      {emoji}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
            >
              <div className="group relative">
                <Card className="h-full bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-4 sm:p-6 lg:p-8">
                  {/* Icon Background */}
                  <div className="relative mb-4 sm:mb-6">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${value.color} rounded-2xl shadow-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-lg sm:text-xl lg:text-2xl filter grayscale-0 group-hover:grayscale-0">
                        {value.icon}
                      </span>
                    </div>
                    <div className={`absolute inset-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${value.color} rounded-2xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300`} />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4 group-hover:text-blue-700 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                  
                  {/* Hover Effect Line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${value.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;