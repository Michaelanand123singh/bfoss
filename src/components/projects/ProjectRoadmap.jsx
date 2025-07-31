import React, { useState } from 'react';
import { Calendar, CheckCircle, Clock, Target, Zap, ArrowRight } from 'lucide-react';

const ProjectRoadmap = () => {
  const [activeQuarter, setActiveQuarter] = useState('Q3-2025');

  const roadmapData = {
    'Q2-2025': {
      status: 'completed',
      title: 'Q2 2025 - Foundation Building',
      items: [
        { title: 'BharatOS Core v1.0 Release', status: 'completed', impact: '5 government departments adopted' },
        { title: 'KisanConnect Beta Launch', status: 'completed', impact: '1,000+ farmers onboarded' },
        { title: 'Developer Community Platform', status: 'completed', impact: '500+ active contributors' },
        { title: 'First Regional Language Support', status: 'completed', impact: 'Hindi and Bengali supported' }
      ]
    },
    'Q3-2025': {
      status: 'active',
      title: 'Q3 2025 - Scale & Reach',
      items: [
        { title: 'DigiLocker Plus Security Audit', status: 'in-progress', impact: 'Enterprise-ready security' },
        { title: 'VidyaPath Mobile App', status: 'in-progress', impact: 'Offline learning for rural students' },
        { title: 'Multi-state Government Pilot', status: 'planning', impact: '3 states, 50+ departments' },
        { title: 'Open Source Fellowship Program', status: 'planning', impact: '100 student developers mentored' }
      ]
    },
    'Q4-2025': {
      status: 'planned',
      title: 'Q4 2025 - Innovation Push',
      items: [
        { title: 'AI-Powered SwasthyaBot Launch', status: 'planned', impact: 'Healthcare access in 100+ villages' },
        { title: 'BhashaWeb Browser Public Beta', status: 'planned', impact: 'Internet in 10 Indian languages' },
        { title: 'Corporate Partnership Program', status: 'planned', impact: 'Sustainable funding model' },
        { title: 'International Open Source Summit', status: 'planned', impact: 'Global recognition for Indian FOSS' }
      ]
    },
    'Q1-2026': {
      status: 'future',
      title: 'Q1 2026 - National Impact',
      items: [
        { title: 'National Digital Infrastructure', status: 'future', impact: 'Government-wide adoption' },
        { title: 'Rural Technology Centers', status: 'future', impact: '500+ centers across India' },
        { title: 'Advanced AI Localization', status: 'future', impact: 'AI that truly understands India' },
        { title: 'Global FOSS Leadership', status: 'future', impact: 'India leading open source innovation' }
      ]
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'in-progress': return <Clock className="w-5 h-5 text-blue-600" />;
      case 'planning': return <Target className="w-5 h-5 text-orange-600" />;
      case 'planned': return <Calendar className="w-5 h-5 text-purple-600" />;
      case 'future': return <Zap className="w-5 h-5 text-gray-400" />;
      default: return <Clock className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-50 border-green-200';
      case 'active': return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'planned': return 'text-purple-600 bg-purple-50 border-purple-200';
      case 'future': return 'text-gray-600 bg-gray-50 border-gray-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Project Roadmap
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our journey to build India's digital independence, one project at a time
          </p>
        </div>

        {/* Quarter Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(roadmapData).map(([quarter, data]) => (
            <button
              key={quarter}
              onClick={() => setActiveQuarter(quarter)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 border ${
                activeQuarter === quarter
                  ? getStatusColor(data.status)
                  : 'text-gray-600 bg-white border-gray-200 hover:bg-gray-50'
              }`}
            >
              {quarter}
            </button>
          ))}
        </div>

        {/* Active Quarter Details */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {roadmapData[activeQuarter].title}
            </h3>
            <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border ${getStatusColor(roadmapData[activeQuarter].status)}`}>
              {roadmapData[activeQuarter].status === 'completed' && 'Completed'}
              {roadmapData[activeQuarter].status === 'active' && 'In Progress'}
              {roadmapData[activeQuarter].status === 'planned' && 'Planned'}
              {roadmapData[activeQuarter].status === 'future' && 'Future'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roadmapData[activeQuarter].items.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    {getStatusIcon(item.status)}
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      {item.title}
                    </h4>
                    
                    <p className="text-sm text-gray-600 mb-3">
                      <span className="font-medium text-orange-600">Expected Impact: </span>
                      {item.impact}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.status === 'completed' ? 'bg-green-100 text-green-800' :
                        item.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                        item.status === 'planning' ? 'bg-orange-100 text-orange-800' :
                        item.status === 'planned' ? 'bg-purple-100 text-purple-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {item.status === 'completed' && '✓ Completed'}
                        {item.status === 'in-progress' && '⏳ In Progress'}
                        {item.status === 'planning' && '📋 Planning'}
                        {item.status === 'planned' && '📅 Planned'}
                        {item.status === 'future' && '🔮 Future'}
                      </span>
                      
                      {item.status !== 'future' && (
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1">
                          Learn More
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Timeline */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-gray-800 mb-8 text-center">
            Overall Progress Timeline
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
            
            <div className="space-y-8">
              {Object.entries(roadmapData).map(([quarter, data], index) => (
                <div key={quarter} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="flex-1 px-8">
                    <div className={`p-6 rounded-xl shadow-sm ${
                      data.status === 'completed' ? 'bg-green-50 border border-green-200' :
                      data.status === 'active' ? 'bg-blue-50 border border-blue-200' :
                      data.status === 'planned' ? 'bg-purple-50 border border-purple-200' :
                      'bg-gray-50 border border-gray-200'
                    }`}>
                      <h4 className="font-bold text-gray-800 mb-2">{quarter}</h4>
                      <p className="text-sm text-gray-600 mb-3">{data.title}</p>
                      <div className="text-xs text-gray-500">
                        {data.items.length} major initiatives
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className={`w-6 h-6 rounded-full border-4 bg-white z-10 ${
                    data.status === 'completed' ? 'border-green-500' :
                    data.status === 'active' ? 'border-blue-500' :
                    data.status === 'planned' ? 'border-purple-500' :
                    'border-gray-300'
                  }`}>
                    {data.status === 'completed' && (
                      <CheckCircle className="w-4 h-4 text-green-500 -m-2" />
                    )}
                  </div>
                  
                  <div className="flex-1 px-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Projected Impact by 2026
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-300 mb-2">10M+</div>
              <p className="text-blue-100">Indians using our tools</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-300 mb-2">500+</div>
              <p className="text-blue-100">Rural tech centers</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-300 mb-2">50+</div>
              <p className="text-blue-100">Government departments</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-300 mb-2">5,000+</div>
              <p className="text-blue-100">Active contributors</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectRoadmap;