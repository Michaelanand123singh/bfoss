import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaTwitter, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import Card from '../ui/Card';
import Button from '../ui/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', message: ''
  });
  
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };
  
  const socialLinks = [
    { name: 'GitHub', icon: FaGithub, url: '#', color: 'hover:bg-slate-800' },
    { name: 'Twitter', icon: FaTwitter, url: '#', color: 'hover:bg-blue-500' },
    { name: 'LinkedIn', icon: FaLinkedin, url: '#', color: 'hover:bg-blue-600' }
  ];
  
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-32 right-10 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-slate-200/20 rounded-full blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
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
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 mb-8 text-sm font-semibold text-blue-700 bg-blue-50 border border-blue-200 rounded-full">
            <FaPaperPlane className="mr-2 text-blue-500" size={14} />
            Let's Connect & Collaborate
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
            Get In{' '}
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-slate-900 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Have questions, ideas, or want to collaborate? We'd love to hear from you and explore how we can work together.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-white border border-slate-200 shadow-xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange}
                    className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" required
                  />
                  <input
                    type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange}
                    className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" required
                  />
                </div>
                <input
                  type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" required
                />
                <textarea
                  name="message" placeholder="Your Message" rows={5} value={formData.message} onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none" required
                />
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-slate-800 hover:from-blue-700 hover:to-slate-900 text-white py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <FaPaperPlane className="mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <Card className="bg-white border border-slate-200 shadow-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FaEnvelope className="text-blue-600" size={16} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Email</p>
                    <p className="text-slate-900 font-medium">hello@bharatfoss.org</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                    <FaMapMarkerAlt className="text-slate-600" size={16} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Location</p>
                    <p className="text-slate-900 font-medium">New Delhi, India</p>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="bg-white border border-slate-200 shadow-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Follow Us</h3>
              <div className="flex space-x-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name} href={link.url} target="_blank" rel="noopener noreferrer"
                    className={`w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg ${link.color}`}
                  >
                    <link.icon size={18} />
                  </a>
                ))}
              </div>
            </Card>
            
            <Card className="bg-gradient-to-br from-blue-50 to-slate-50 border border-blue-100 shadow-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Join Our Community</h3>
              <p className="text-slate-600 text-sm mb-4">Get updates on new projects and events</p>
              <div className="flex space-x-2">
                <input
                  type="email" placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors">
                  Join
                </button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;