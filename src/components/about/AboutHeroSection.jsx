import React from 'react';
import { MapPin, Calendar, Users } from 'lucide-react';

const AboutHeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-orange-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
                <MapPin className="w-4 h-4 text-orange-600 mr-2" />
                <span className="text-sm font-medium text-gray-700">Delhi, India</span>
                <Calendar className="w-4 h-4 text-gray-400 ml-4 mr-2" />
                <span className="text-sm text-gray-600">Est. 2024</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                Building India's
                <span className="text-blue-600 block">Digital Future</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Started in a Delhi co-working space by three developers frustrated with adapting foreign solutions to Indian problems.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <blockquote className="text-lg text-gray-700 italic mb-4">
                "What if we built from scratch, for India?"
              </blockquote>
              <p className="text-gray-600">
                This simple question sparked a movement that now connects over 1,200 developers across the country, all working towards one vision: technology that truly serves India.
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Users className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-sm font-medium text-gray-700">1,200+ Contributors</span>
              </div>
              <div className="text-sm text-gray-500">•</div>
              <div className="text-sm font-medium text-gray-700">15+ Active Projects</div>
              <div className="text-sm text-gray-500">•</div>
              <div className="text-sm font-medium text-gray-700">8 States</div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">The Problem</h3>
                    <p className="text-gray-600 text-sm">Foreign tech solutions don't understand Indian contexts - from language barriers to network constraints.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">The Vision</h3>
                    <p className="text-gray-600 text-sm">Technology built by Indians, for Indians - understanding our unique challenges and opportunities.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">The Movement</h3>
                    <p className="text-gray-600 text-sm">A growing community of developers creating open-source solutions for India's digital independence.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-50 -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-100 rounded-full opacity-30 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;