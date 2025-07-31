// Updated AboutPage.jsx (remove pt-16 since App.jsx handles it)
import React from 'react';
import AboutHeroSection from '../components/about/AboutHeroSection';
import VisionMissionSection from '../components/about/VisionMissionSection';
import ValuesPrinciplesSection from '../components/about/ValuesPrinciplesSection';
import TeamIntroductionSection from '../components/about/TeamIntroductionSection';
import TimelineMilestonesSection from '../components/about/TimelineMilestonesSection';
import PressRecognitionSection from '../components/about/PressRecognitionSection';

const AboutPage = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      <AboutHeroSection />
      <VisionMissionSection />
      <ValuesPrinciplesSection />
      <TeamIntroductionSection />
      <TimelineMilestonesSection />
      <PressRecognitionSection />
    </div>
  );
};

export default AboutPage;