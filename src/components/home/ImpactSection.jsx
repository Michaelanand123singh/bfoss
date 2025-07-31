import React, { useState, useEffect } from 'react';

const ImpactSection = () => {
  const [liveCommits, setLiveCommits] = useState(2847);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.8) {
        setLiveCommits(prev => prev + 1);
      }
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">This Month's Impact</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center bg-white p-8 rounded-xl shadow-sm">
            <div className="text-4xl font-bold text-blue-500 mb-2">{liveCommits.toLocaleString()}</div>
            <div className="text-gray-600 uppercase tracking-wide text-sm">Commits Pushed</div>
          </div>
          <div className="text-center bg-white p-8 rounded-xl shadow-sm">
            <div className="text-4xl font-bold text-blue-700 mb-2">127</div>
            <div className="text-gray-600 uppercase tracking-wide text-sm">Active Contributors</div>
          </div>
          <div className="text-center bg-white p-8 rounded-xl shadow-sm">
            <div className="text-4xl font-bold text-orange-600 mb-2">34</div>
            <div className="text-gray-600 uppercase tracking-wide text-sm">Projects Live</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;