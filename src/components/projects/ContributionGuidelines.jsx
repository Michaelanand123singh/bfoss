import React from 'react';
import { CheckCircle, Clock, Users, BookOpen, GitPullRequest, MessageSquare } from 'lucide-react';

const ContributionGuidelines = () => {
  const steps = [
    {
      step: 1,
      title: 'Pick Your First Issue',
      description: 'Browse good-first-issue labels across our projects',
      icon: BookOpen,
      time: '5 minutes',
      action: 'Browse Issues'
    },
    {
      step: 2,
      title: 'Set Up Development',
      description: 'Clone repository and follow setup instructions',
      icon: GitPullRequest,
      time: '15-30 minutes',
      action: 'Setup Guide'
    },
    {
      step: 3,
      title: 'Join Community Chat',
      description: 'Get help from mentors and fellow contributors',
      icon: MessageSquare,
      time: '2 minutes',
      action: 'Join Discord'
    },
    {
      step: 4,
      title: 'Make Your Contribution',
      description: 'Code, test, and submit your pull request',
      icon: CheckCircle,
      time: '1-4 hours',
      action: 'Start Coding'
    }
  ];

  const guidelines = [
    {
      title: 'Code in Any Language',
      description: 'We welcome contributions in any programming language you\'re comfortable with',
      icon: '💻'
    },
    {
      title: 'Documentation Welcome',
      description: 'Documentation improvements in Hindi/English are equally valuable',
      icon: '📝'
    },
    {
      title: 'Test on Real Networks',
      description: 'Test your changes on 2G networks and basic smartphones when possible',
      icon: '📱'
    },
    {
      title: 'Mentorship Provided',
      description: 'No experience required - our mentors will guide you through your first contribution',
      icon: '🎓'
    }
  ];

  const standards = [
    {
      title: 'Built for 2G Networks',
      description: 'Optimize for low bandwidth and intermittent connectivity',
      priority: 'High'
    },
    {
      title: 'Multi-language Support',
      description: 'All user-facing projects must support Indian languages',
      priority: 'Mandatory'
    },
    {
      title: 'Offline-first Architecture',
      description: 'Applications should work without internet when possible',
      priority: 'Preferred'
    },
    {
      title: 'Accessibility Standards',
      description: 'Follow WCAG guidelines for users with disabilities',
      priority: 'High'
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Start Contributing Today
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your first contribution in 10 minutes. No experience required, mentorship provided.
          </p>
        </div>

        {/* Getting Started Steps */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Your First Contribution in 4 Steps
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={step.step} className="relative">
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-blue-200 transform translate-x-3 z-0"></div>
                  )}
                  
                  <div className="relative bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow z-10">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      
                      <div className="inline-flex items-center justify-center w-6 h-6 bg-orange-500 text-white text-sm font-bold rounded-full mb-3 -mt-2">
                        {step.step}
                      </div>
                      
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {step.title}
                      </h4>
                      
                      <p className="text-sm text-gray-600 mb-4">
                        {step.description}
                      </p>
                      
                      <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mb-4">
                        <Clock className="w-3 h-3" />
                        <span>{step.time}</span>
                      </div>
                      
                      <button className="w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                        {step.action}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Guidelines Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Contribution Guidelines
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guidelines.map((guideline, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{guideline.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      {guideline.title}
                    </h4>
                    <p className="text-gray-600">
                      {guideline.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Standards */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Technical Standards
          </h3>
          
          <div className="space-y-6">
            {standards.map((standard, index) => {
              const getPriorityColor = (priority) => {
                switch (priority) {
                  case 'Mandatory': return 'bg-red-100 text-red-800 border-red-200';
                  case 'High': return 'bg-orange-100 text-orange-800 border-orange-200';
                  case 'Preferred': return 'bg-blue-100 text-blue-800 border-blue-200';
                  default: return 'bg-gray-100 text-gray-800 border-gray-200';
                }
              };

              return (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-1">
                      {standard.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {standard.description}
                    </p>
                  </div>
                  
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getPriorityColor(standard.priority)}`}>
                    {standard.priority}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Build India's Future?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join 1,200+ developers who are solving real problems for real people. Your code can impact millions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
                Browse Good First Issues
              </button>
              <button className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
                Join Our Discord
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributionGuidelines;