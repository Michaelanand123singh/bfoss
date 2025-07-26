import { motion } from 'framer-motion';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-2 sm:left-10 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-br from-blue-500/10 to-slate-900/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -25, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 right-2 sm:right-10 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-tl from-blue-600/8 to-slate-800/8 rounded-full blur-2xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Code-like Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] hidden sm:block">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute font-mono text-slate-600"
              style={{
                left: `${5 + (i % 4) * 25}%`,
                top: `${10 + Math.floor(i / 4) * 30}%`,
                fontSize: '12px',
              }}
              animate={{
                opacity: [0.03, 0.08, 0.03],
              }}
              transition={{
                duration: 4 + (i % 3),
                repeat: Infinity,
                delay: i * 0.5,
              }}
            >
              {i % 3 === 0 && "function openSource() {"}
              {i % 3 === 1 && "  return innovation.map("}
              {i % 3 === 2 && "    idea => future"}
            </motion.div>
          ))}
        </div>
        
        {/* Subtle Tech Grid */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(90deg,_#1e293b_1px,_transparent_1px),linear-gradient(180deg,_#1e293b_1px,_transparent_1px)] bg-[size:30px_30px] sm:bg-[size:60px_60px]" />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 flex items-center min-h-screen px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          
          {/* Left Content */}
          <motion.div
            className="text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Status Badge */}
            <motion.div
              className="inline-flex items-center px-3 sm:px-4 py-2 mb-6 sm:mb-8 text-xs sm:text-sm font-semibold text-blue-700 bg-blue-50 border border-blue-200 rounded-full shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 sm:mr-3 animate-pulse" />
              Leading Innovation Since 2024
            </motion.div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
              Empowering{' '}
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-slate-900 bg-clip-text text-transparent">
                India's Future
              </span>
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-slate-700">
                Through Open Source
              </span>
            </h1>
            
            <motion.p
              className="text-base sm:text-lg text-slate-600 mb-8 sm:mb-10 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Building tomorrow's technology ecosystem through collaborative innovation, enterprise-grade solutions, and accessible open source development.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button 
                size="lg" 
                href="#projects"
                className="bg-gradient-to-r from-blue-600 to-slate-800 hover:from-blue-700 hover:to-slate-900 text-white border-0 px-6 sm:px-8 py-3 sm:py-4 font-semibold shadow-xl shadow-blue-500/20 hover:shadow-2xl hover:shadow-blue-600/30 transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base"
              >
                Explore Projects
              </Button>
              <Button 
                variant="secondary" 
                size="lg" 
                href="#community"
                className="bg-white hover:bg-slate-50 text-slate-800 border-2 border-slate-200 hover:border-blue-300 px-6 sm:px-8 py-3 sm:py-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
              >
                Join Community
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Right Visual Element */}
          <motion.div
            className="relative h-64 sm:h-80 md:h-96 lg:h-[600px] flex items-center justify-center order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Central Tech Hub */}
            <div className="relative">
              <motion.div
                className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-gradient-to-br from-white via-blue-50 to-slate-100 rounded-2xl shadow-2xl border border-slate-200/50 backdrop-blur-sm"
                animate={{
                  y: [0, -10, 0],
                  rotateY: [0, 5, 0, -5, 0],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute inset-3 sm:inset-4 bg-gradient-to-br from-blue-500/5 to-slate-900/5 rounded-xl" />
                <div className="absolute inset-6 sm:inset-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-600 to-slate-800 rounded-2xl mb-3 sm:mb-4 mx-auto shadow-lg" />
                    <div className="space-y-1.5 sm:space-y-2">
                      <div className="h-1.5 sm:h-2 bg-slate-200 rounded-full" />
                      <div className="h-1.5 sm:h-2 bg-blue-200 rounded-full w-3/4 mx-auto" />
                      <div className="h-1.5 sm:h-2 bg-slate-200 rounded-full w-1/2 mx-auto" />
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Orbiting Elements */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white border-2 border-blue-200 rounded-xl shadow-lg flex items-center justify-center"
                  style={{
                    top: '50%',
                    left: '50%',
                    transformOrigin: '0 0',
                  }}
                  animate={{
                    rotate: [0 + i * 60, 360 + i * 60],
                    x: [-4, -4],
                    y: [-4, -4],
                  }}
                  transition={{
                    duration: 20 + i * 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div 
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-lg"
                    style={{
                      background: `linear-gradient(135deg, ${i % 2 === 0 ? '#3b82f6' : '#1e293b'}, ${i % 2 === 0 ? '#1e40af' : '#0f172a'})`,
                      transform: `translateX(${80 + i * 6}px) rotate(${-i * 60}deg)`,
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-slate-300 to-blue-500" />
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-slate-400 rounded-full flex justify-center bg-white/50 backdrop-blur-sm">
          <motion.div 
            className="w-1 h-2 sm:h-3 bg-blue-600 rounded-full mt-1.5 sm:mt-2"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;