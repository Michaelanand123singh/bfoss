import React from 'react';
import { Target, Compass, Heart } from 'lucide-react';

const VisionMissionSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Our Vision & Mission
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Guided by the belief that India deserves technology built for Indians, by Indians
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Vision */}
          <div className="text-center group">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
              <Compass className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Vision</h3>
            <div className="space-y-3 text-gray-600">
              <p className="font-medium">Every Indian developer should have tools that speak their language</p>
              <p>Technology that works on village internet, understands regional needs</p>
              <p>Building the foundation for India's next tech revolution</p>
            </div>
          </div>

          {/* Mission */}
          <div className="text-center group">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
              <Target className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Mission</h3>
            <div className="space-y-3 text-gray-600">
              <p className="font-medium">Democratize technology through open source</p>
              <p>Bridge the digital divide between urban and rural India</p>
              <p>Create sustainable tech solutions for Indian challenges</p>
            </div>
          </div>

          {/* Impact */}
          <div className="text-center group">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
              <Heart className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Impact</h3>
            <div className="space-y-3 text-gray-600">
              <p className="font-medium">Technology for every Indian, not just metro cities</p>
              <p>Solutions that work on 2G networks and basic smartphones</p>
              <p>Building digital infrastructure that truly includes everyone</p>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center max-w-4xl mx-auto">
            <div className="text-6xl text-blue-200 mb-4">"</div>
            <blockquote className="text-2xl lg:text-3xl font-medium text-gray-800 mb-6 leading-relaxed">
              We're not just building software. We're building the digital backbone of a nation that deserves technology as diverse and resilient as its people.
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-0.5 bg-gradient-to-r from-blue-600 to-orange-600"></div>
              <span className="text-gray-600 font-medium">BharatFOSS Foundation</span>
              <div className="w-12 h-0.5 bg-gradient-to-r from-orange-600 to-blue-600"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;