import { Github, Twitter, Linkedin, Mail, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/bharatfoss' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/bharatfoss' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/company/bharatfoss' }
  ];
  
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Community', href: '#community' },
    { name: 'Documentation', href: '#docs' }
  ];
  
  const resources = [
    { name: 'Getting Started', href: '#start' },
    { name: 'Contribute', href: '#contribute' },
    { name: 'Blog', href: '#blog' },
    { name: 'Events', href: '#events' }
  ];
  
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-800">BharatFOSS</span>
                <div className="text-sm text-gray-600 -mt-1">Foundation</div>
              </div>
            </div>
            
            <p className="text-gray-600 mb-8 max-w-md leading-relaxed">
              Empowering India's open source future through collaborative innovation, 
              accessible technology solutions, and community-driven development.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    className="group p-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="text-gray-600 group-hover:text-blue-500 transition-colors duration-300" size={20} />
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-gray-800 font-bold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-600 hover:text-blue-500 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 mr-0 group-hover:mr-3 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-gray-800 font-bold mb-6 text-lg">Resources</h3>
            <ul className="space-y-4">
              {resources.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-600 hover:text-blue-500 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 mr-0 group-hover:mr-3 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Contact Info */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center space-x-3 text-gray-600">
                <Mail className="text-blue-500" size={16} />
                <span className="text-sm">hello@bharatfoss.org</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin className="text-blue-500" size={16} />
                <span className="text-sm">Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-600 text-sm">
              <span>&copy; 2024 BharatFOSS Foundation.</span>
              <span>Made with</span>
              <Heart className="text-orange-500" size={12} />
              <span>for India's tech future</span>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-gray-600 hover:text-blue-500 transition-colors">Privacy Policy</a>
              <a href="#terms" className="text-gray-600 hover:text-blue-500 transition-colors">Terms of Service</a>
              <a href="#license" className="text-gray-600 hover:text-blue-500 transition-colors">Open Source License</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;