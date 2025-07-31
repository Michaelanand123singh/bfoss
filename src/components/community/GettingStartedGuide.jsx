import React from 'react';
import { GraduationCap, Briefcase, Building, School } from 'lucide-react';

const GettingStartedGuide = () => {
  const pathways = [
    {
      icon: GraduationCap,
      title: "For Students",
      subtitle: "Learn by building real solutions",
      description: "Start your journey with beginner-friendly projects. Get mentorship, build your portfolio, and solve problems that matter to India.",
      features: ["Free mentorship", "Certificate programs", "Internship opportunities"],
      ctaText: "Start Learning",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Briefcase,
      title: "For Professionals",
      subtitle: "Contribute your expertise to national impact",
      description: "Use your skills to build tools that serve millions. Lead projects, mentor newcomers, and create lasting change.",
      features: ["Leadership roles", "Technical workshops", "Industry recognition"],
      ctaText: "Join Projects",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: Building,
      title: "For Companies",
      subtitle: "Sponsor innovation, build talent pipeline",
      description: "Partner with us to drive open source adoption, sponsor critical projects, and develop the next generation of Indian talent.",
      features: ["CSR opportunities", "Talent acquisition", "Brand visibility"],
      ctaText: "Partner With Us",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      icon: School,
      title: "For Institutions",
      subtitle: "Partner with us for curriculum integration",
      description: "Bring real-world open source experience to your students. Integrate our projects into coursework and research programs.",
      features: ["Curriculum support", "Faculty training", "Research collaboration"],
      ctaText: "Get In Touch",
      gradient: "from-green-500 to-green-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Choose Your <span className="text-blue-600">Path</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're just starting or you're a seasoned professional, 
            there's a place for you in India's open source revolution
          </p>
        </div>

        {/* Pathways Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {pathways.map((pathway, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-6">
                <div className={`p-4 rounded-xl bg-gradient-to-r ${pathway.gradient} text-white`}>
                  <pathway.icon className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{pathway.title}</h3>
                  <p className="text-orange-600 font-semibold mb-4">{pathway.subtitle}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{pathway.description}</p>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {pathway.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <button className={`px-6 py-3 bg-gradient-to-r ${pathway.gradient} text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200`}>
                    {pathway.ctaText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Start CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-orange-600 rounded-2xl p-10 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-xl mb-6 opacity-90">
              Your first contribution in 10 minutes. No experience required, mentorship provided.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                Browse Projects
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                Join Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GettingStartedGuide;