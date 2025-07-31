import React from 'react';
import { Github, Linkedin, Twitter, MapPin } from 'lucide-react';

const TeamIntroductionSection = () => {
  const founders = [
    {
      name: "Ayush Anand",
      role: "Founder & Technical Lead",
      location: "New Delhi",
      bio: "Former Microsoft engineer who left Silicon Valley to build solutions for India. Passionate about making technology accessible to every Indian developer.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      skills: ["Full Stack Development", "System Architecture", "Open Source Strategy"]
    },
    {
      name: "Anand SIngh",
      role: "Co-founder & Community Lead",
      location: "New Delhi",
      bio: "Built developer communities across India for 8 years. Believes in the power of grassroots innovation and inclusive technology.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      skills: ["Community Building", "Developer Relations", "Product Strategy"]
    },
  ];

  const stats = [
    { number: "1,200+", label: "Active Contributors" },
    { number: "15+", label: "Core Team Members" },
    { number: "8", label: "States Represented" },
    { number: "50+", label: "Mentors & Advisors" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Passionate developers, community builders, and policy experts united by a shared vision of India's digital independence
          </p>
        </div>

        {/* Founders */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {founders.map((founder, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center group hover:shadow-lg transition-all duration-300">
              <div className="relative mb-6">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-md group-hover:scale-105 transition-transform"
                />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Founder
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-1">{founder.name}</h3>
              <p className="text-orange-600 font-medium mb-2">{founder.role}</p>
              
              <div className="flex items-center justify-center mb-4">
                <MapPin className="w-4 h-4 text-gray-500 mr-1" />
                <span className="text-sm text-gray-600">{founder.location}</span>
              </div>
              
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{founder.bio}</p>
              
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 justify-center">
                  {founder.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-white text-gray-700 px-3 py-1 rounded-full text-xs border border-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-center space-x-4">
                <Github className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors" />
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-blue-600 cursor-pointer transition-colors" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="bg-gradient-to-r from-blue-600 to-orange-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Our Growing Community</h3>
            <p className="text-blue-100">
              Developers, designers, and advocates from across India working together
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Join Team CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Want to join our core team?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're always looking for passionate individuals who want to dedicate their time to building India's digital future. From technical roles to community management, there are many ways to contribute.
            </p>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              View Open Positions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamIntroductionSection;