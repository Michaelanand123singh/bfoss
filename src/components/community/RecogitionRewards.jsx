import React from 'react';
import { Trophy, Star, Gift, Badge, Zap, Crown } from 'lucide-react';

const RecognitionRewards = () => {
  const achievementLevels = [
    {
      level: "Contributor",
      icon: Star,
      color: "blue",
      requirement: "First 5 commits",
      rewards: ["BharatFOSS stickers", "Community Discord access", "Contributor badge"],
      members: "1,200+"
    },
    {
      level: "Builder", 
      icon: Zap,
      color: "orange",
      requirement: "50+ commits, 1 feature",
      rewards: ["Official t-shirt", "LinkedIn certification", "Project showcase"],
      members: "340+"
    },
    {
      level: "Champion",
      icon: Trophy,
      color: "purple", 
      requirement: "200+ commits, mentor 3 people",
      rewards: ["Annual conference ticket", "Tech talk opportunity", "Advisory role"],
      members: "89"
    },
    {
      level: "Legend",
      icon: Crown,
      color: "gold",
      requirement: "Lead a major project",
      rewards: ["Yearly recognition", "Scholarship fund", "Speaking opportunities"],
      members: "12"
    }
  ];

  const monthlyRecognitions = [
    {
      category: "Most Impactful Contribution",
      winner: "Rahul Gupta",
      project: "Digital Identity System",
      impact: "Secured data for 50,000+ users",
      prize: "₹25,000 + Certificate"
    },
    {
      category: "Best Newcomer",
      winner: "Kavya Sharma", 
      project: "Mobile Accessibility Features",
      impact: "Made apps usable for visually impaired",
      prize: "₹15,000 + Mentorship"
    },
    {
      category: "Community Champion",
      winner: "Amit Patel",
      project: "Documentation & Tutorials",
      impact: "Helped 200+ new contributors",
      prize: "₹20,000 + Conference Ticket"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 bg-blue-100 text-blue-800 border-blue-200",
      orange: "from-orange-500 to-orange-600 bg-orange-100 text-orange-800 border-orange-200",
      purple: "from-purple-500 to-purple-600 bg-purple-100 text-purple-800 border-purple-200",
      gold: "from-yellow-500 to-yellow-600 bg-yellow-100 text-yellow-800 border-yellow-200"
    };
    return colors[color];
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Recognition & <span className="text-orange-600">Rewards</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your contributions matter. We celebrate every commit, every feature, 
            and every moment you help build India's tech future.
          </p>
        </div>

        {/* Achievement Levels */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Achievement Levels</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievementLevels.map((level, index) => (
              <div key={index} className={`bg-white border-2 ${getColorClasses(level.color).split(' ').slice(-1)} rounded-xl p-6 hover:shadow-lg transition-shadow`}>
                <div className="text-center mb-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${getColorClasses(level.color).split(' ')[0]} ${getColorClasses(level.color).split(' ')[1]} rounded-full mb-3`}>
                    <level.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-800">{level.level}</h4>
                  <p className="text-sm text-gray-600">{level.members} members</p>
                </div>
                
                <div className="mb-4">
                  <div className={`text-xs font-semibold px-3 py-1 rounded-full ${getColorClasses(level.color).split(' ')[2]} ${getColorClasses(level.color).split(' ')[3]} mb-3`}>
                    {level.requirement}
                  </div>
                </div>
                
                <div className="space-y-2">
                  {level.rewards.map((reward, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <Gift className="w-3 h-3 mr-2 text-gray-500" />
                      <span>{reward}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Recognition */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">July 2024 Winners</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {monthlyRecognitions.map((recognition, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border-2 border-gray-200 hover:border-blue-300 transition-colors">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-orange-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 text-sm">{recognition.category}</h4>
                </div>
                
                <div className="text-center mb-4">
                  <h5 className="text-lg font-bold text-blue-600">{recognition.winner}</h5>
                  <p className="text-sm text-gray-600 mb-2">{recognition.project}</p>
                  <p className="text-xs text-orange-600 font-medium">{recognition.impact}</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-green-100 text-green-800 text-sm font-semibold px-4 py-2 rounded-lg">
                    🎁 {recognition.prize}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rewards Program Details */}
        <div className="bg-gradient-to-r from-blue-600 to-orange-600 rounded-2xl p-10 text-white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">How Rewards Work</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Badge className="w-5 h-5 mr-3 mt-1 opacity-80" />
                  <div>
                    <div className="font-semibold">Automatic Recognition</div>
                    <div className="text-sm opacity-90">Achievements unlock automatically based on your contributions</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Gift className="w-5 h-5 mr-3 mt-1 opacity-80" />
                  <div>
                    <div className="font-semibold">Physical Rewards</div>
                    <div className="text-sm opacity-90">Stickers, t-shirts, and certificates shipped to your door</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Zap className="w-5 h-5 mr-3 mt-1 opacity-80" />
                  <div>
                    <div className="font-semibold">Career Benefits</div>
                    <div className="text-sm opacity-90">LinkedIn certifications, speaking opportunities, and job referrals</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-xl p-8">
                <h4 className="text-2xl font-bold mb-4">This Month's Pool</h4>
                <div className="text-4xl font-bold mb-2">₹1,50,000</div>
                <div className="text-sm opacity-90 mb-6">In cash prizes & rewards</div>
                <div className="space-y-3">
                  <div className="bg-white bg-opacity-20 rounded-lg p-3">
                    <div className="font-semibold">Next Recognition: Aug 15</div>
                    <div className="text-sm opacity-90">Independence Day Special Awards</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors">
              View My Progress
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecognitionRewards;