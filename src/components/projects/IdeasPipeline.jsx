import React, { useState } from 'react';
import { Lightbulb, Users, ThumbsUp, MessageCircle, Plus, Filter, Search, Star, Clock, Target } from 'lucide-react';

const IdeasPipeline = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const ideas = [
    {
      id: 1,
      title: 'IndiaStack for Villages',
      description: 'Simplified digital identity and payment system designed specifically for rural areas with limited internet connectivity.',
      category: 'government',
      difficulty: 'Hard',
      upvotes: 156,
      comments: 23,
      requester: 'Rural Development Ministry',
      skills: ['Blockchain', 'Mobile Development', 'Security'],
      impact: 'High',
      timeline: '6-8 months',
      status: 'Research'
    },
    {
      id: 2,
      title: 'Voice-First Banking',
      description: 'Banking interface that works entirely through voice commands in regional languages, designed for illiterate users.',
      category: 'fintech',
      difficulty: 'Medium',
      upvotes: 134,
      comments: 18,
      requester: 'Community Request',
      skills: ['NLP', 'Voice Recognition', 'Mobile'],
      impact: 'High',
      timeline: '4-6 months',
      status: 'Ideation'
    },
    {
      id: 3,
      title: 'Farmer Weather AI',
      description: 'Hyper-local weather prediction using IoT sensors and AI, specifically trained for Indian agricultural patterns.',
      category: 'agritech',
      difficulty: 'Hard',
      upvotes: 98,
      comments: 31,
      requester: 'Karnataka Farmers Union',
      skills: ['ML/AI', 'IoT', 'Weather APIs'],
      impact: 'Medium',
      timeline: '8-12 months',
      status: 'Research'
    },
    {
      id: 4,
      title: 'Digital Ration Card',
      description: 'Blockchain-based ration distribution system to eliminate corruption and ensure fair distribution.',
      category: 'government',
      difficulty: 'Medium',
      upvotes: 89,
      comments: 15,
      requester: 'PDS Reform Committee',
      skills: ['Blockchain', 'React', 'Government APIs'],
      impact: 'High',
      timeline: '3-4 months',
      status: 'Planning'
    },
    {
      id: 5,
      title: 'Rural Job Matching',
      description: 'Connect rural job seekers with opportunities using SMS and voice interfaces, no smartphone required.',
      category: 'employment',
      difficulty: 'Easy',
      upvotes: 76,
      comments: 12,
      requester: 'NREGA Workers Association',
      skills: ['Backend Development', 'SMS Gateway', 'Database'],
      impact: 'Medium',
      timeline: '2-3 months',
      status: 'Ready to Start'
    },
    {
      id: 6,
      title: 'Maternal Health Tracker',
      description: 'Simple mobile app for tracking pregnancy and child health in areas with limited medical facilities.',
      category: 'health',
      difficulty: 'Easy',
      upvotes: 67,
      comments: 19,
      requester: 'Rural Health Initiative',
      skills: ['Mobile Development', 'Health APIs', 'Offline Storage'],
      impact: 'High',
      timeline: '3-4 months',
      status: 'Ready to Start'
    },
    {
      id: 7,
      title: 'Local Language Code Editor',
      description: 'Code editor that supports programming in Hindi, Tamil, and other Indian languages with syntax highlighting.',
      category: 'language',
      difficulty: 'Hard',
      upvotes: 145,
      comments: 28,
      requester: 'Developer Community',
      skills: ['Compiler Design', 'Language Processing', 'Editor Development'],
      impact: 'Medium',
      timeline: '12+ months',
      status: 'Research'
    },
    {
      id: 8,
      title: 'Water Quality Monitor',
      description: 'Low-cost IoT device with mobile app to monitor and report water quality in rural areas.',
      category: 'environment',
      difficulty: 'Medium',
      upvotes: 54,
      comments: 14,
      requester: 'Water Conservation NGO',
      skills: ['IoT', 'Sensors', 'Mobile Development'],
      impact: 'Medium',
      timeline: '4-5 months',
      status: 'Ideation'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Ideas', count: ideas.length },
    { id: 'government', name: 'Government', count: ideas.filter(i => i.category === 'government').length },
    { id: 'agritech', name: 'AgriTech', count: ideas.filter(i => i.category === 'agritech').length },
    { id: 'health', name: 'Health', count: ideas.filter(i => i.category === 'health').length },
    { id: 'language', name: 'Language', count: ideas.filter(i => i.category === 'language').length },
    { id: 'fintech', name: 'FinTech', count: ideas.filter(i => i.category === 'fintech').length },
    { id: 'environment', name: 'Environment', count: ideas.filter(i => i.category === 'environment').length },
    { id: 'employment', name: 'Employment', count: ideas.filter(i => i.category === 'employment').length }
  ];

  const filteredIdeas = ideas.filter(idea => {
    const matchesFilter = selectedFilter === 'all' || idea.category === selectedFilter;
    const matchesSearch = idea.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         idea.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800 border-green-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Hard': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Ready to Start': return 'bg-green-100 text-green-800 border-green-200';
      case 'Planning': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Research': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Ideation': return 'bg-orange-100 text-orange-800 border-orange-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'High': return 'text-red-600';
      case 'Medium': return 'text-yellow-600';
      case 'Low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  const stats = [
    { label: 'Total Ideas', value: ideas.length, icon: Lightbulb },
    { label: 'Ready to Start', value: ideas.filter(i => i.status === 'Ready to Start').length, icon: Star },
    { label: 'High Impact', value: ideas.filter(i => i.impact === 'High').length, icon: Target },
    { label: 'Contributors', value: 247, icon: Users }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Lightbulb className="w-8 h-8 text-orange-500" />
            <h2 className="text-3xl font-bold text-gray-800">
              Ideas Pipeline
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Community-driven project ideas waiting for passionate developers to bring them to life
          </p>
          
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
            <Plus className="w-5 h-5" />
            Submit Your Idea
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm border border-gray-200">
              <stat.icon className="w-8 h-8 text-orange-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search ideas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="text-gray-500 w-5 h-5" />
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Ideas Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {filteredIdeas.map((idea) => (
            <div key={idea.id} className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow overflow-hidden">
              {/* Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800 flex-1 pr-4">
                    {idea.title}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="w-4 h-4" />
                      <span>{idea.upvotes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>{idea.comments}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {idea.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(idea.difficulty)}`}>
                    {idea.difficulty}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(idea.status)}`}>
                    {idea.status}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getImpactColor(idea.impact)}`}>
                    {idea.impact} Impact
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                {/* Requester */}
                <div className="mb-4">
                  <span className="text-sm font-medium text-gray-800">Requested by: </span>
                  <span className="text-sm text-gray-600">{idea.requester}</span>
                </div>

                {/* Skills Required */}
                <div className="mb-4">
                  <span className="text-sm font-medium text-gray-800 block mb-2">Skills Required:</span>
                  <div className="flex flex-wrap gap-2">
                    {idea.skills.map((skill, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded border border-blue-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div className="mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-sm font-medium text-gray-800">Estimated Timeline: </span>
                    <span className="text-sm text-gray-600">{idea.timeline}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button className="flex-1 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                    I'm Interested
                  </button>
                  <button className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <ThumbsUp className="w-4 h-4" />
                  </button>
                  <button className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredIdeas.length === 0 && (
          <div className="text-center py-12">
            <Lightbulb className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No ideas found</h3>
            <p className="text-gray-500 mb-4">Try adjusting your search or filter criteria</p>
            <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
              Submit the First Idea
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Have an Idea That Could Help India?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Share your vision and connect with developers who can make it reality. From government efficiency to rural innovation, every idea matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
                <Plus className="w-5 h-5" />
                Submit Your Idea
              </button>
              <button className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
                <Users className="w-5 h-5" />
                Join Community
              </button>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Join {stats[3].value}+ developers already contributing to India's digital transformation
          </p>
        </div>
      </div>
    </div>
  );
};

export default IdeasPipeline;