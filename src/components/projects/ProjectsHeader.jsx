import React from 'react';
import { Code2, GitBranch, Users } from 'lucide-react';

const ProjectsHeader = () => {
  return (
    <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center">
          <div className="flex justify-center items-center gap-3 mb-6">
            <Code2 className="w-12 h-12 text-orange-400" />
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
              Projects
            </h1>
          </div>
          
          <p className="text-xl lg:text-2xl text-blue-100 mb-4 max-w-3xl mx-auto">
            Building India's Digital Infrastructure
          </p>
          
          <p className="text-lg text-blue-200 mb-12 max-w-2xl mx-auto">
            Open source projects solving real Indian problems
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <GitBranch className="w-6 h-6 text-orange-400" />
                <span className="text-3xl font-bold">24</span>
              </div>
              <p className="text-blue-200">Active Projects</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-6 h-6 text-orange-400" />
                <span className="text-3xl font-bold">1,200+</span>
              </div>
              <p className="text-blue-200">Contributors</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Code2 className="w-6 h-6 text-orange-400" />
                <span className="text-3xl font-bold">50k+</span>
              </div>
              <p className="text-blue-200">Lines of Code</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsHeader;