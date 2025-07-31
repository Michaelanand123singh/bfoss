import React from 'react';
import { ExternalLink, Award, Calendar, Quote } from 'lucide-react';

const PressRecognitionSection = () => {
  const pressArticles = [
    {
      publication: "The Hindu",
      title: "Indian Developers Building Solutions for Local Challenges",
      date: "December 2024",
      excerpt: "BharatFOSS Foundation is pioneering a movement where Indian developers create technology that truly understands Indian contexts...",
      link: "#",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=250&fit=crop"
    },
    {
      publication: "Economic Times",
      title: "Open Source Movement Gains Momentum in India",
      date: "November 2024",
      excerpt: "From rural healthcare to digital governance, BharatFOSS projects are making real impact across the country...",
      link: "#",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop"
    },
    {
      publication: "YourStory",
      title: "How Three Developers Started India's Digital Independence Movement",
      date: "October 2024",
      excerpt: "The inspiring journey of BharatFOSS Foundation and their mission to democratize technology across India...",
      link: "#",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=250&fit=crop"
    }
  ];

  const recognitions = [
    {
      title: "Open Source Excellence Award",
      organization: "India Open Source Foundation",
      year: "2024",
      description: "Recognized for outstanding contribution to Indian open source ecosystem"
    },
    {
      title: "Digital India Innovation Award",
      organization: "Ministry of Electronics & IT",
      year: "2024",
      description: "Acknowledged for innovative solutions in digital governance"
    },
    {
      title: "Community Impact Recognition",
      organization: "GitHub India",
      year: "2024",
      description: "Honored for building one of India's fastest-growing developer communities"
    }
  ];

  const testimonials = [
    {
      quote: "BharatFOSS is doing what we've needed for years - building technology that actually works for India.",
      author: "Dr. Rajesh Kumar",
      designation: "Former CTO, Government of Karnataka",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "Finally, a platform where Indian developers can solve Indian problems. This is the future of our tech ecosystem.",
      author: "Meera Srivastava",
      designation: "Tech Lead, Flipkart",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Press & Recognition
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our work is being recognized by media, government, and industry leaders across India
          </p>
        </div>

        {/* Press Articles */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Featured in Media</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {pressArticles.map((article, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-bold text-blue-600">{article.publication}</span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {article.date}
                    </div>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-3 leading-tight">{article.title}</h4>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{article.excerpt}</p>
                  <a
                    href={article.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                  >
                    Read Full Article
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Awards & Recognition</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {recognitions.map((recognition, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">{recognition.title}</h4>
                <p className="text-orange-600 font-medium text-sm mb-2">{recognition.organization}</p>
                <span className="inline-block bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-600 mb-3">
                  {recognition.year}
                </span>
                <p className="text-gray-600 text-sm">{recognition.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">What Leaders Say</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <Quote className="w-8 h-8 text-blue-200 mb-4" />
                <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-bold text-gray-800">{testimonial.author}</div>
                    <div className="text-gray-600 text-sm">{testimonial.designation}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Press Contact */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-orange-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Media Inquiries</h3>
            <p className="mb-6 text-blue-100">
              Want to cover our story or speak with our founders? We'd love to connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:press@bharatfoss.org"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Contact Press Team
              </a>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
                Download Media Kit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PressRecognitionSection;