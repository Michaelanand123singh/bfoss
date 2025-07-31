import React from 'react';
import { Code, Users, Rocket, ArrowRight } from 'lucide-react';

const CommunityCTASection = () => {
  const pathways = [
    {
      icon: Code,
      title: "Developers",
      count: "2.5K+",
      description: "Build solutions that impact millions",
      action: "Start Coding"
    },
    {
      icon: Users,
      title: "Students",
      count: "1.8K+",
      description: "Learn while building real projects",
      action: "Join Learning"
    },
    {
      icon: Rocket,
      title: "Companies",
      count: "120+",
      description: "Partner with India's tech future",
      action: "Get Involved"
    }
  ];

  return (
    <section className="py-32 px-6 bg-gradient-to-br from-blue-50 via-white to-orange-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233B82F6' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
            <span>Join the Movement</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-gray-800 mb-6 leading-tight">
            Build India's
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
              Digital Future
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of developers, students, and companies creating technology 
            that serves 1.4 billion Indians
          </p>
        </div>

        {/* Pathways Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {pathways.map((pathway, index) => {
            const IconComponent = pathway.icon;
            return (
              <div 
                key={index} 
                className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-800">{pathway.count}</div>
                    <div className="text-sm text-gray-600">Active</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{pathway.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{pathway.description}</p>
                
                <button className="w-full bg-gray-50 hover:bg-orange-50 text-gray-800 hover:text-orange-600 py-3 px-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 group-hover:bg-blue-500 group-hover:text-white">
                  <span>{pathway.action}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CommunityCTASection;