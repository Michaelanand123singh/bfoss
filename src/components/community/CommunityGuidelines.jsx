import React from 'react';
import { Shield, Heart, Users, Code, MessageCircle, AlertTriangle } from 'lucide-react';

const CommunityGuidelines = () => {
  const coreValues = [
    {
      icon: Heart,
      title: "Respect & Inclusion",
      description: "We welcome developers from all backgrounds, experience levels, and regions of India. Every voice matters in building our tech future.",
      guidelines: [
        "Use inclusive language in all communications",
        "Respect different perspectives and approaches",
        "Help newcomers feel welcomed and supported",
        "Celebrate diversity in our community"
      ]
    },
    {
      icon: Code,
      title: "Quality & Excellence", 
      description: "We're building technology that serves millions. Quality isn't optional—it's our responsibility to India.",
      guidelines: [
        "Test your code on real Indian networks and devices",
        "Document everything in clear, simple language",
        "Follow established coding standards and practices",
        "Prioritize security and privacy in all solutions"
      ]
    },
    {
      icon: Users,
      title: "Collaboration & Growth",
      description: "Great technology is built by great teams. We grow stronger together through sharing knowledge and experiences.",
      guidelines: [
        "Share knowledge freely and openly",
        "Provide constructive feedback on code reviews",
        "Mentor newcomers and share your expertise",
        "Ask questions without fear of judgment"
      ]
    },
    {
      icon: Shield,
      title: "Integrity & Trust",
      description: "Trust is the foundation of open source. We build it through transparency, honesty, and consistent actions.",
      guidelines: [
        "Be transparent about your contributions and limitations",
        "Give credit where credit is due",
        "Admit mistakes and learn from them openly",
        "Respect intellectual property and licenses"
      ]
    }
  ];

  const codeOfConduct = [
    {
      title: "Be Respectful",
      description: "Treat all community members with dignity and respect, regardless of their background or experience level."
    },
    {
      title: "Stay On Topic",
      description: "Keep discussions relevant to BharatFOSS projects and the broader goal of building Indian technology solutions."
    },
    {
      title: "Help Others Learn",
      description: "Remember that everyone is learning. Share knowledge patiently and encourage questions from newcomers."
    },
    {
      title: "Give Constructive Feedback",
      description: "When reviewing code or providing feedback, focus on the work, not the person. Be specific and helpful."
    },
    {
      title: "Respect Privacy",
      description: "Don't share personal information about other community members without their explicit consent."
    },
    {
      title: "Report Issues",
      description: "If you see behavior that violates our guidelines, report it to moderators immediately."
    }
  ];

  const reportingProcess = [
    {
      step: "1",
      title: "Identify the Issue",
      description: "Document what happened with screenshots or links if possible"
    },
    {
      step: "2", 
      title: "Report to Moderators",
      description: "Send details to community@bharatfoss.org or use the report button"
    },
    {
      step: "3",
      title: "Investigation",
      description: "Our team will investigate within 24-48 hours"
    },
    {
      step: "4",
      title: "Resolution",
      description: "Appropriate action taken and all parties notified"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Community <span className="text-blue-600">Guidelines</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our shared values and principles that make BharatFOSS a welcoming, 
            productive space for every contributor to thrive and build amazing things.
          </p>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-10 text-center">Our Core Values</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">{value.description}</p>
                    
                    <div className="space-y-2">
                      {value.guidelines.map((guideline, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{guideline}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Code of Conduct */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Code of Conduct</h3>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {codeOfConduct.map((rule, index) => (
                <div key={index} className="p-6 bg-gray-50 rounded-xl">
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                    <MessageCircle className="w-5 h-5 text-blue-600 mr-2" />
                    {rule.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{rule.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reporting Process */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Reporting Process</h3>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center justify-center mb-8">
              <AlertTriangle className="w-8 h-8 text-orange-600 mr-3" />
              <p className="text-gray-600 text-center">
                If you experience or witness behavior that violates our guidelines, please report it. 
                We're committed to creating a safe space for everyone.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {reportingProcess.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {step.step}
                  </div>
                  <h4 className="font-bold text-gray-800 mb-3">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                  {index < reportingProcess.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-gray-200 transform -translate-y-1/2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact & Support */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-orange-600 rounded-2xl p-10 text-white">
            <h3 className="text-3xl font-bold mb-4">Questions About Guidelines?</h3>
            <p className="text-xl mb-8 opacity-90">
              Our community team is here to help. Reach out anytime for clarification or support.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white bg-opacity-20 rounded-xl p-6">
                <MessageCircle className="w-8 h-8 mx-auto mb-3 opacity-80" />
                <div className="font-semibold mb-2">General Questions</div>
                <div className="text-sm opacity-90">community@bharatfoss.org</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-xl p-6">
                <Shield className="w-8 h-8 mx-auto mb-3 opacity-80" />
                <div className="font-semibold mb-2">Report Issues</div>
                <div className="text-sm opacity-90">report@bharatfoss.org</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-xl p-6">
                <Users className="w-8 h-8 mx-auto mb-3 opacity-80" />
                <div className="font-semibold mb-2">Discord Support</div>
                <div className="text-sm opacity-90">#community-help</div>
              </div>
            </div>
            
            <div className="text-sm opacity-90">
              <strong>Response Time:</strong> We aim to respond to all community inquiries within 24 hours.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityGuidelines;