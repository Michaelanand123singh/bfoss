import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Community', href: '/community' },
    { name: 'Contact', href: '/contact' }
  ];

  const isActive = (href) => {
    return location.pathname === href;
  };
  
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200/50 z-50 shadow-sm">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <div>
              <span className="text-xl font-bold text-gray-800">BharatFOSS</span>
              <div className="text-xs text-gray-600 -mt-1">Foundation</div>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-colors duration-200 relative group ${
                  isActive(item.href) 
                    ? 'text-blue-600' 
                    : 'text-gray-600 hover:text-blue-500'
                }`}
              >
                {item.name}
                <div className={`absolute -bottom-1 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${
                  isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/community"
              className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-6 py-2 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg inline-block"
            >
              Join Us
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-gray-800 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium transition-colors duration-200 py-2 ${
                    isActive(item.href) 
                      ? 'text-blue-600' 
                      : 'text-gray-600 hover:text-blue-500'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/community"
                className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 font-semibold shadow-lg mt-4 self-start rounded-lg inline-block"
                onClick={() => setIsMenuOpen(false)}
              >
                Join Us
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;