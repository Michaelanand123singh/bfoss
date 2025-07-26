import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TESTIMONIALS } from '../../data/testimonials';
import Card from '../ui/Card';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our <span className="gradient-text">Community</span> Says
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Hear from developers, entrepreneurs, and educators who are part of our journey
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="text-center" hover={false}>
              <div className="flex flex-col items-center">
                <img
                  src={TESTIMONIALS[currentIndex].avatar}
                  alt={TESTIMONIALS[currentIndex].name}
                  className="w-20 h-20 rounded-full mb-6 object-cover"
                />
                <blockquote className="text-lg md:text-xl text-gray-300 mb-6 italic">
                  "{TESTIMONIALS[currentIndex].content}"
                </blockquote>
                <div>
                  <h4 className="text-white font-semibold text-lg">
                    {TESTIMONIALS[currentIndex].name}
                  </h4>
                  <p className="text-accent-teal">
                    {TESTIMONIALS[currentIndex].role}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
          
          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-accent-teal' : 'bg-white/30'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;