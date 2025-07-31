import React from 'react';
import { MapPin, Calendar, Code, Star } from 'lucide-react';

const ContributorProfiles = () => {
  const contributors = [
    {
      name: "Priya Sharma",
      location: "Jaipur, Rajasthan",
      role: "Full Stack Developer",
      joinDate: "6 months ago",
      avatar: "👩‍💻",
      contribution: "Built AgriTech analytics dashboard",
      impact: "Helping 2,000+ farmers track crop health",
      quote: "From consuming Western tech to creating solutions for my own community. BharatFOSS gave me the platform to make real impact.",
      projects: 8,
      commits: 247,
      specialty: "Frontend & Data Viz"
    },
    {
      name: "Rajesh Kumar",
      location: "Patna, Bihar", 
      role: "Backend Engineer",
      joinDate: "1 year ago",
      avatar: "👨‍💻",
      contribution: "Lead architect for Digital Identity System",
      impact: "Privacy-first ID management for 50,000+ users",
      quote: "Started as a self-taught coder from a small town. Now I'm building systems that protect digital rights for millions of Indians.",
      projects: 12,
      commits: 892,
      specialty: "Security & Privacy"
    },
    {
      name: "Ananya Patel",
      location: "Ahmedabad, Gujarat",
      role: "Mobile Developer",
      joinDate: "8 months ago", 
      avatar: "👩‍🔬",
      contribution: "Offline-first education platform",
      impact: "Learning app works on 2G, used in 200+ villages",
      quote: "Every line of code I write considers the student in a remote village with basic internet. That's real engineering.",
      projects: 6,
      commits: 334,
      specialty: "Mobile & Offline-first"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Meet Our <span className="text-orange-600">Contributors</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories from developers who went from consumers to creators, 
            building technology that transforms India
          </p>
        </div>

        {/* Contributors Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {contributors.map((contributor, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-orange-600 p-6 text-white">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-4xl">{contributor.avatar}</div>
                  <div>
                    <h3 className="text-xl font-bold">{contributor.name}</h3>
                    <p className="opacity-90">{contributor.role}</p>
                  </div>
                </div>
                <div className="flex items-center text-sm opacity-90">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="mr-4">{contributor.location}</span>
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{contributor.joinDate}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{contributor.projects}</div>
                    <div className="text-sm text-gray-600">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">{contributor.commits}</div>
                    <div className="text-sm text-gray-600">Commits</div>
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center mb-1">
                      <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    </div>
                    <div className="text-sm text-gray-600">Top Contributor</div>
                  </div>
                </div>

                {/* Main Contribution */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Latest Impact:</h4>
                  <p className="text-gray-700 text-sm mb-1">{contributor.contribution}</p>
                  <p className="text-blue-600 text-sm font-medium">{contributor.impact}</p>
                </div>

                {/* Specialty */}
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                    {contributor.specialty}
                  </span>
                </div>

                {/* Quote */}
                <blockquote className="text-gray-600 text-sm italic leading-relaxed">
                  "{contributor.quote}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>

        {/* Community Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Your Story Could Be Next
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who are building the future of Indian technology. 
            Start with your first contribution today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Start Contributing
            </button>
            <button className="px-8 py-4 border-2 border-orange-600 text-orange-600 font-semibold rounded-lg hover:bg-orange-600 hover:text-white transition-colors">
              View All Contributors
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContributorProfiles;