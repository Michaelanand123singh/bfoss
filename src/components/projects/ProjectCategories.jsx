import React, { useState } from 'react';
import { Building2, Wheat, BookOpen, Shield, Globe, Heart } from 'lucide-react';

const ProjectCategories = ({ onCategoryChange, activeCategory }) => {
  const categories = [
    {
      id: 'all',
      name: 'All Projects',
      icon: Globe,
      description: 'View all projects',
      count: 24
    },
    {
      id: 'government',
      name: 'Government Tech',
      icon: Building2,
      description: 'Tools for digital governance',
      count: 6,
      emoji: '🏛️'
    },
    {
      id: 'agritech',
      name: 'AgriTech',
      icon: Wheat,
      description: 'Technology for farmers',
      count: 4,
      emoji: '🌾'
    },
    {
      id: 'education',
      name: 'Education',
      icon: BookOpen,
      description: 'Learning without barriers',
      count: 5,
      emoji: '📚'
    },
    {
      id: 'security',
      name: 'Security & Privacy',
      icon: Shield,
      description: 'Digital rights protection',
      count: 3,
      emoji: '🔐'
    },
    {
      id: 'language',
      name: 'Language & Accessibility',
      icon: Globe,
      description: 'Tech in every Indian language',
      count: 4,
      emoji: '🌐'
    },
    {
      id: 'health',
      name: 'HealthTech',
      icon: Heart,
      description: 'Healthcare for everyone',
      count: 2,
      emoji: '🏥'
    }
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Project Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore projects by domain and find where you can make the biggest impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {categories.map((category) => {
            const IconComponent = category.icon;
            const isActive = activeCategory === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`p-6 rounded-xl text-left transition-all duration-200 hover:scale-105 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-800 hover:bg-blue-50 hover:border-blue-200 shadow-sm border border-gray-200'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  {category.emoji && (
                    <span className="text-2xl">{category.emoji}</span>
                  )}
                  <IconComponent className={`w-6 h-6 ${isActive ? 'text-orange-300' : 'text-blue-600'}`} />
                </div>
                
                <h3 className={`font-semibold text-lg mb-2 ${isActive ? 'text-white' : 'text-gray-800'}`}>
                  {category.name}
                </h3>
                
                <p className={`text-sm mb-3 ${isActive ? 'text-blue-100' : 'text-gray-600'}`}>
                  {category.description}
                </p>
                
                <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                  isActive 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {category.count} projects
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectCategories;