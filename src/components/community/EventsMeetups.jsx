import React from 'react';
import { Calendar, MapPin, Users, Clock, ArrowRight } from 'lucide-react';

const EventsMeetups = () => {
  const recurringEvents = [
    {
      title: "BharatFOSS Saturdays",
      type: "Weekly Coding Sessions",
      description: "Join fellow developers every Saturday for collaborative coding, project reviews, and peer learning.",
      schedule: "Every Saturday, 10 AM - 4 PM",
      location: "Online + 12 Cities",
      participants: "50-80 developers",
      icon: "💻",
      color: "blue"
    },
    {
      title: "Village Connect",
      type: "Rural Deployment Drives", 
      description: "Take your code to real users. Deploy solutions in villages and get firsthand feedback from end users.",
      schedule: "Monthly Weekend Trips",
      location: "Various Rural Areas",
      participants: "15-25 volunteers",
      icon: "🌾",
      color: "green"
    },
    {
      title: "Student Hackathons",
      type: "College Competition Series",
      description: "48-hour hackathons focused on solving local problems with open source solutions.",
      schedule: "Quarterly Events",
      location: "Partner Colleges",
      participants: "200-500 students",
      icon: "🎓",
      color: "orange"
    },
    {
      title: "Corporate Open Source Days",
      type: "Enterprise Workshops",
      description: "Help companies adopt open source practices and contribute back to the community.",
      schedule: "On-demand Sessions",
      location: "Corporate Offices",
      participants: "20-50 professionals",
      icon: "🏢",
      color: "purple"
    }
  ];

  const upcomingEvents = [
    {
      date: "15",
      month: "AUG",
      title: "AgriTech Hackathon 2024",
      location: "IIT Delhi",
      time: "9:00 AM - 6:00 PM",
      type: "Hackathon",
      spots: "23 spots left"
    },
    {
      date: "22",
      month: "AUG", 
      title: "Open Source Career Workshop",
      location: "Online",
      time: "7:00 PM - 9:00 PM",
      type: "Workshop",
      spots: "100+ spots"
    },
    {
      date: "05",
      month: "SEP",
      title: "Village Connect: Haryana",
      location: "Karnal District",
      time: "Weekend Trip",
      type: "Field Work",
      spots: "8 spots left"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 bg-blue-100 text-blue-800",
      green: "from-green-500 to-green-600 bg-green-100 text-green-800", 
      orange: "from-orange-500 to-orange-600 bg-orange-100 text-orange-800",
      purple: "from-purple-500 to-purple-600 bg-purple-100 text-purple-800"
    };
    return colors[color];
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Events & <span className="text-blue-600">Meetups</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From weekly coding sessions to rural deployment drives, 
            connect with the community and make real impact
          </p>
        </div>

        {/* Recurring Events */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Regular Programs</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {recurringEvents.map((event, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${getColorClasses(event.color).split(' ')[0]} ${getColorClasses(event.color).split(' ')[1]} text-white text-2xl`}>
                    {event.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-xl font-bold text-gray-800">{event.title}</h4>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getColorClasses(event.color).split(' ').slice(2).join(' ')}`}>
                        {event.type}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>
                    
                    <div className="space-y-2 text-sm text-gray-700">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-gray-500" />
                        <span>{event.schedule}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2 text-gray-500" />
                        <span>{event.participants}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Upcoming Events</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all">
                <div className="flex items-start space-x-4">
                  <div className="text-center">
                    <div className="bg-orange-600 text-white rounded-lg p-3 mb-2">
                      <div className="text-2xl font-bold">{event.date}</div>
                      <div className="text-sm">{event.month}</div>
                    </div>
                    <span className="text-xs text-gray-500 font-medium">{event.type}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 mb-2">{event.title}</h4>
                    <div className="space-y-1 text-sm text-gray-600 mb-3">
                      <div className="flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{event.time}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-green-600 font-semibold">{event.spots}</span>
                      <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
                        Register <ArrowRight className="w-3 h-3 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Event CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-10 text-white">
            <h3 className="text-3xl font-bold mb-4">Want to Host an Event?</h3>
            <p className="text-xl mb-6 opacity-90">
              Bring BharatFOSS to your city, college, or company. We'll help you organize and run impactful tech events.
            </p>
            <button className="px-8 py-4 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition-colors">
              Propose an Event
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsMeetups;