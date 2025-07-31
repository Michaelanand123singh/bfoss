import React from 'react';

const MissionSection = () => {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <blockquote className="text-3xl md:text-4xl font-light text-gray-700 leading-relaxed mb-8">
          "We think India deserves better than just consuming Western tech."
        </blockquote>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our developers are building tools that actually understand Indian problems — 
          from supporting 22 languages to working smoothly on 2G networks.
        </p>
      </div>
    </section>
  );
};

export default MissionSection;