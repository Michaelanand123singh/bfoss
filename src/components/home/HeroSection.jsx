import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [particles, setParticles] = useState([]);
  const [networkNodes, setNetworkNodes] = useState([]);
  const [codeStream, setCodeStream] = useState([]);

  // Initialize network nodes
  useEffect(() => {
    const nodes = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 2,
      opacity: Math.random() * 0.3 + 0.1,
      pulse: Math.random() * 3 + 2
    }));
    setNetworkNodes(nodes);

    // Create floating particles
    const particleArray = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      speed: Math.random() * 0.5 + 0.2,
      direction: Math.random() * 360
    }));
    setParticles(particleArray);
  }, []);

  // Animate particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: (particle.x + particle.speed * Math.cos(particle.direction * Math.PI / 180) + 100) % 100,
        y: (particle.y + particle.speed * Math.sin(particle.direction * Math.PI / 180) + 100) % 100
      })));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Code stream effect
  useEffect(() => {
    const codeLines = [
      "function buildFuture() {",
      "  const india = {",
      "    innovation: true,",
      "    openSource: 'always',",
      "    languages: 22,",
      "    developers: '1M+'",
      "  };",
      "  return india.transform();",
      "}"
    ];

    let lineIndex = 0;
    const interval = setInterval(() => {
      if (lineIndex < codeLines.length) {
        setCodeStream(prev => [...prev, {
          id: Date.now(),
          text: codeLines[lineIndex],
          opacity: 1
        }]);
        lineIndex++;
      } else {
        setCodeStream([]);
        lineIndex = 0;
      }
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-blue-100"></div>
      
      {/* Sophisticated grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Network connections */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {networkNodes.map((node, i) => 
          networkNodes.slice(i + 1).map((otherNode, j) => {
            const distance = Math.sqrt(
              Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2)
            );
            if (distance < 25) {
              return (
                <line
                  key={`${i}-${j}`}
                  x1={`${node.x}%`}
                  y1={`${node.y}%`}
                  x2={`${otherNode.x}%`}
                  y2={`${otherNode.y}%`}
                  stroke="rgba(59, 130, 246, 0.4)"
                  strokeWidth="1"
                  className="animate-pulse"
                />
              );
            }
            return null;
          })
        )}
        
        {/* Network nodes */}
        {networkNodes.map(node => (
          <circle
            key={node.id}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r={node.size}
            fill="rgba(59, 130, 246, 0.6)"
            className="animate-pulse"
            style={{ animationDuration: `${node.pulse}s` }}
          />
        ))}
      </svg>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute bg-blue-500 rounded-full opacity-40"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              filter: 'blur(0.5px)'
            }}
          />
        ))}
      </div>

      {/* Code stream terminal */}
      <div className="absolute top-8 left-8 bg-white bg-opacity-80 backdrop-blur-sm rounded-lg p-4 font-mono text-xs text-gray-600 border border-gray-200 border-opacity-60 max-w-sm shadow-lg">
        <div className="flex items-center mb-2">
          <div className="w-3 h-3 bg-red-500 rounded-full mr-2 opacity-80"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2 opacity-80"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full opacity-80"></div>
        </div>
        <div className="space-y-1">
          {codeStream.map((line, index) => (
            <div 
              key={line.id} 
              className="text-gray-800 transition-opacity duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {line.text}
            </div>
          ))}
          <div className="flex items-center">
            <span className="text-gray-600">$</span>
            <div className="w-2 h-4 bg-blue-500 ml-1 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Data visualization */}
      <div className="absolute bottom-8 right-8 bg-white bg-opacity-80 backdrop-blur-sm rounded-lg p-4 border border-gray-200 border-opacity-60 shadow-lg">
        <div className="text-gray-600 text-xs font-mono mb-2">NETWORK STATUS</div>
        <div className="flex space-x-4">
          <div className="text-center">
            <div className="w-8 h-16 bg-gradient-to-t from-blue-700 to-blue-500 rounded opacity-80 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 right-0 h-3 bg-blue-300 animate-pulse"></div>
            </div>
            <div className="text-xs text-blue-600 mt-1">CPU</div>
          </div>
          <div className="text-center">
            <div className="w-8 h-16 bg-gradient-to-t from-blue-600 to-blue-400 rounded opacity-80 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 right-0 h-5 bg-blue-300 animate-pulse"></div>
            </div>
            <div className="text-xs text-blue-600 mt-1">MEM</div>
          </div>
          <div className="text-center">
            <div className="w-8 h-16 bg-gradient-to-t from-orange-600 to-orange-500 rounded opacity-80 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 right-0 h-7 bg-orange-300 animate-pulse"></div>
            </div>
            <div className="text-xs text-orange-600 mt-1">NET</div>
          </div>
        </div>
      </div>

      {/* Sophisticated overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-white/5 to-blue-100/20"></div>
      
      <div className="relative z-10 text-center px-6">
        <div className="mb-8">
          <h1 className="text-6xl md:text-[10rem] font-black tracking-tight text-gray-800 mb-4">
            Bharat FOSS
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
            Foundation for India's Digital Independence
          </p>
        </div>
        
        <button className="group inline-flex items-center space-x-3 bg-blue-500 hover:bg-blue-700 px-8 py-4 rounded-full text-white transition-all duration-300 shadow-lg hover:shadow-xl">
          <span className="font-medium">See What We're Building</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;