import React from 'react';
import { Users, Code, Globe, Heart } from 'lucide-react';

const CommunityOverview = () => {
  const stats = [
    { icon: Users, number: "1,200+", label: "Active Developers" },
    { icon: Code, number: "45+", label: "Projects Built" },
    { icon: Globe, number: "22", label: "Languages Supported" },
    { icon: Heart, number: "89%", label: "Retention Rate" }
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50 to-orange-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-blue-600">Community</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            1,200+ developers building India's future. From IIT graduates to self-taught coders,
            united by one vision: <span className="text-orange-600 font-semibold">Tech that serves India</span>
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Community Vision */}
        <div className="bg-white rounded-2xl p-10 shadow-lg">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Building the Foundation for India's <span className="text-orange-600">Next Tech Revolution</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Every Indian developer should have tools that speak their language. 
                Technology that works on village internet, understands regional needs, 
                and creates real impact in local communities.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-orange-600 rounded-xl p-8 text-white">
                <div className="text-2xl font-bold mb-2">🚀 This Month</div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>New Contributors</span>
                    <span className="font-bold">127</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Code Commits</span>
                    <span className="font-bold">2,845</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Issues Resolved</span>
                    <span className="font-bold">189</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityOverview;