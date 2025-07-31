import React from 'react';
import { Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      name: "BharatOS Core",
      desc: "Linux distribution for Indian institutions",
      tech: "C++ • Python",
      commits: "127 commits",
      preview: "$ bharatos-install --lang=hi\n✓ Installing kernel modules...\n✓ Setting up regional keyboards..."
    },
    {
      name: "Identity Toolkit",
      desc: "Privacy-first digital identity",
      tech: "Node.js • React",
      commits: "89 commits",
      preview: "const identity = new BharatID({\n  privacy: 'maximum',\n  languages: ['hi', 'bn', 'ta']\n});"
    },
    {
      name: "AgriTech Platform",
      desc: "AI-powered crop monitoring",
      tech: "Python • ML",
      commits: "156 commits",
      preview: "Monsoon prediction: 94.2% accuracy\nCrop yield forecast: 2.3M farms\nSoil analysis: Real-time updates"
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Active Workshop</h2>
          <p className="text-gray-600 text-lg">Real code, real impact, real progress</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="group">
              <div className="bg-gray-900 rounded-xl p-6 h-full hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-orange-500">{project.name}</h3>
                  <Github className="w-5 h-5 text-gray-500" />
                </div>
                
                <p className="text-gray-400 text-sm mb-4">{project.desc}</p>
                
                <div className="bg-black rounded-lg p-4 mb-4 font-mono text-xs">
                  <pre className="text-blue-400 whitespace-pre-wrap">{project.preview}</pre>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">{project.tech}</span>
                  <span className="text-gray-400">{project.commits}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;