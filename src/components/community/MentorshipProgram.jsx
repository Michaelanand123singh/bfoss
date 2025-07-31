import React from 'react';
import { Users, Target, BookOpen, Award, ArrowRight, CheckCircle } from 'lucide-react';

const MentorshipProgram = () => {
  const mentorshipTracks = [
    {
      title: "Code Mentorship",
      icon: BookOpen,
      duration: "3 months",
      commitment: "4 hours/week",
      description: "Get paired with experienced developers for hands-on coding guidance",
      benefits: [
        "1-on-1 code reviews",
        "Architecture guidance", 
        "Best practices training",
        "Project portfolio building"
      ],
      spots: "15 spots open"
    },
    {
      title: "Career Guidance",
      icon: Target,
      duration: "6 months",
      commitment: "2 hours/week",
      description: "Navigate your tech career with guidance from industry professionals",
      benefits: [
        "Resume & interview prep",
        "Industry insights",
        "Network building",
        "Career path planning"
      ],
      spots: "8 spots open"
    },
    {
      title: "Project Leadership",
      icon: Users,
      duration: "4 months", 
      commitment: "6 hours/week",
      description: "Learn to lead open source projects and manage distributed teams",
      benefits: [
        "Team management skills",
        "Open source best practices",
        "Community building",
        "Technical leadership"
      ],
      spots: "5 spots open"
    }
  ];

  const mentorProfiles = [
    {
      name: "Vikram Singh",
      role: "Senior Architect at Flipkart",
      experience: "12 years",
      specialty: "Backend Systems",
      mentees: 23,
      avatar: "👨‍💼",
      quote: "Helping the next generation build scalable systems for India's unique challenges."
    },
    {
      name: "Sneha Reddy",
      role: "VP Engineering at Zomato", 
      experience: "15 years",
      specialty: "Mobile & Frontend",
      mentees: 31,
      avatar: "👩‍💼",
      quote: "Every great developer started with someone believing in their potential."
    },
    {
      name: "Arjun Malhotra",
      role: "Tech Lead at Microsoft India",
      experience: "10 years", 
      specialty: "Cloud & DevOps",
      mentees: 18,
      avatar: "👨‍🔬",
      quote: "Open source taught me everything. Now it's time to give back to the community."
    }
  ];

  const programBenefits = [
    "Free 1-on-1 mentorship from industry experts",
    "Structured learning paths with milestones",
    "Access to exclusive workshops and resources",
    "Direct connection to job opportunities",
    "Certificate of completion",
    "Lifetime access to mentor network"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Mentorship <span className="text-orange-600">Program</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from industry experts who've built technology at scale. 
            Get personalized guidance to accelerate your open source journey.
          </p>
        </div>

        {/* Mentorship Tracks */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Choose Your Track</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {mentorshipTracks.map((track, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <track.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{track.title}</h4>
                  <div className="flex justify-center space-x-4 text-sm text-gray-600">
                    <span>📅 {track.duration}</span>
                    <span>⏰ {track.commitment}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-center mb-6">{track.description}</p>
                
                <div className="space-y-3 mb-6">
                  {track.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-center">
                  <div className="text-sm text-green-600 font-semibold mb-4">{track.spots}</div>
                  <button className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mentor Profiles */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Meet Your Mentors</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {mentorProfiles.map((mentor, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{mentor.avatar}</div>
                  <h4 className="text-lg font-bold text-gray-800">{mentor.name}</h4>
                  <p className="text-orange-600 font-medium text-sm">{mentor.role}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-center">
                  <div>
                    <div className="text-xl font-bold text-blue-600">{mentor.experience}</div>
                    <div className="text-xs text-gray-600">Experience</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-orange-600">{mentor.mentees}</div>
                    <div className="text-xs text-gray-600">Mentees</div>
                  </div>
                </div>
                
                <div className="text-center mb-4">
                  <span className="inline-block bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                    {mentor.specialty}
                  </span>
                </div>
                
                <blockquote className="text-gray-600 text-sm text-center italic">
                  "{mentor.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>

        {/* Program Benefits */}
        <div className="bg-white rounded-2xl p-10 shadow-lg">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Why Join Our <span className="text-blue-600">Mentorship Program?</span>
              </h3>
              <div className="space-y-4">
                {programBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-orange-600 rounded-xl p-8 text-white">
              <div className="text-center">
                <Award className="w-16 h-16 mx-auto mb-4 opacity-80" />
                <h4 className="text-2xl font-bold mb-4">Ready to Level Up?</h4>
                <p className="mb-6 opacity-90">
                  Join 150+ developers who've accelerated their careers through our mentorship program.
                </p>
                <div className="space-y-3">
                  <button className="w-full px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                    Apply for Mentorship
                  </button>
                  <button className="w-full px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                    Become a Mentor
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorshipProgram;