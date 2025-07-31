import React from 'react';
import { Flag, Unlock, Users, Leaf } from 'lucide-react';

const ValuesPrinciplesSection = () => {
  const values = [
    {
      icon: Flag,
      title: "India First",
      subtitle: "Solutions designed for Indian contexts",
      description: "Every line of code we write considers India's unique challenges - from diverse languages to varying internet speeds. We build for the reality of Indian infrastructure, not Silicon Valley assumptions.",
      color: "bg-orange-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    },
    {
      icon: Unlock,
      title: "Open Always",
      subtitle: "Transparent development, accessible code",
      description: "Complete transparency in our development process. All code is open source, all decisions are documented, and all contributors have a voice in shaping our direction.",
      color: "bg-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: Users,
      title: "Community Driven",
      subtitle: "Built by Indians, for Indians",
      description: "Our strength comes from our community. From students in tier-3 cities to senior engineers in Bangalore, every contribution matters and every voice is heard.",
      color: "bg-green-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      icon: Leaf,
      title: "Sustainable Impact",
      subtitle: "Long-term thinking over quick wins",
      description: "We're building for the next decade, not the next quarter. Every project is designed for long-term sustainability, community maintenance, and lasting impact.",
      color: "bg-purple-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            These principles guide every decision we make and every line of code we write
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                className={`${value.bgColor} ${value.borderColor} border-2 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group`}
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 ${value.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm font-medium text-gray-600 mb-4">
                      {value.subtitle}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to join our mission?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Whether you're a student learning to code or a senior engineer with decades of experience, there's a place for you in building India's digital future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Start Contributing
              </button>
              <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-lg font-medium transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesPrinciplesSection;