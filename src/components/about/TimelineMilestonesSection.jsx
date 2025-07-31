import React from 'react';
import { Calendar, Users, Code, Award, Rocket, Target } from 'lucide-react';

const TimelineMilestonesSection = () => {
  const milestones = [
    {
      date: "January 2024",
      title: "Foundation Launch",
      description: "Three developers in a Delhi co-working space decide to build solutions for India's unique challenges.",
      icon: Rocket,
      stats: "3 Founders",
      color: "bg-blue-500",
      achieved: true
    },
    {
      date: "March 2024",
      title: "First Open Source Project",
      description: "Released BharatOS Core - a lightweight Linux distribution optimized for Indian hardware and network conditions.",
      icon: Code,
      stats: "1,000+ Downloads",
      color: "bg-green-500",
      achieved: true
    },
    {
      date: "June 2024",
      title: "Community Milestone",
      description: "Reached 500 active contributors across 15 Indian cities, including students from tier-2 and tier-3 colleges.",
      icon: Users,
      stats: "500 Contributors",
      color: "bg-orange-500",
      achieved: true
    },
    {
      date: "September 2024",
      title: "Government Partnership",
      description: "Signed our first government partnership to develop digital governance tools for rural administration.",
      icon: Award,
      stats: "Official Recognition",
      color: "bg-purple-500",
      achieved: true
    },
    {
      date: "December 2024",
      title: "1000+ Contributors",
      description: "Community grows to over 1,200 contributors with projects spanning healthcare, agriculture, and education.",
      icon: Target,
      stats: "1,200+ Contributors",
      color: "bg-blue-600",
      achieved: true
    },
    {
      date: "Q2 2025",
      title: "National Impact Program",
      description: "Launch comprehensive program to deploy solutions in 100 villages across 10 states.",
      icon: Target,
      stats: "100 Villages Target",
      color: "bg-gray-400",
      achieved: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Our Journey So Far
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From a simple idea in a Delhi co-working space to a nationwide movement for digital independence
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 lg:transform lg:-translate-x-0.5"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const IconComponent = milestone.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`relative flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 lg:left-1/2 w-4 h-4 bg-white border-4 border-gray-300 rounded-full lg:transform lg:-translate-x-2 z-10">
                    {milestone.achieved && (
                      <div className={`absolute inset-1 ${milestone.color} rounded-full`}></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className={`ml-12 lg:ml-0 flex-1 ${isEven ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow ${!milestone.achieved ? 'opacity-75' : ''}`}>
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 ${milestone.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-500">{milestone.date}</span>
                            {milestone.achieved ? (
                              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                                Completed
                              </span>
                            ) : (
                              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                                Planned
                              </span>
                            )}
                          </div>
                          
                          <h3 className="text-xl font-bold text-gray-800 mb-2">
                            {milestone.title}
                          </h3>
                          
                          <p className="text-gray-600 mb-3 leading-relaxed">
                            {milestone.description}
                          </p>
                          
                          <div className="inline-flex items-center bg-gray-100 px-3 py-1 rounded-full">
                            <span className="text-sm font-medium text-gray-700">{milestone.stats}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden lg:block flex-1"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Future Goals */}
        <div className="mt-20">
          <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                Looking Ahead: 2025 & Beyond
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our vision extends far beyond code. We're building the foundation for India's digital sovereignty.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">10,000+ Contributors</h4>
                <p className="text-gray-600 text-sm">Growing our community across every state in India</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-orange-600" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">100+ Projects</h4>
                <p className="text-gray-600 text-sm">Solutions for every aspect of Indian digital life</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">National Recognition</h4>
                <p className="text-gray-600 text-sm">Becoming the go-to platform for Indian open source</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineMilestonesSection;