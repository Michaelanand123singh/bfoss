import React from 'react';
import HeroSection from '../components/home/HeroSection';
import MissionSection from '../components/home/MissonSection';
import ProjectsSection from '../components/home/ProjectsSection';
import ImpactSection from '../components/home/ImpactSection';
import CommunityCTASection from '../components/home/CommunityCTASection';
import TerminalFooterSection from '../components/home/TerminalFooterSection';

const HomePage = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      <HeroSection />
      <MissionSection />
      <ProjectsSection />
      <ImpactSection />
      <CommunityCTASection />
      <TerminalFooterSection />
    </div>
  );
};

export default HomePage;