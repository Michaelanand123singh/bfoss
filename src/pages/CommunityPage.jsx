// pages/CommunityPage.jsx
import React from 'react';
import CommunityOverview from '../components/community/CommunityOverview';
import GettingStartedGuide from '../components/community/GettingStartedGuide';
import ContributorProfiles from '../components/community/ContributorProfiles';
import EventsMeetups from '../components/community/EventsMeetups';
import MentorshipProgram from '../components/community/MentorshipProgram';
import RecognitionRewards from '../components/community/RecogitionRewards';
import CommunityGuidelines from '../components/community/CommunityGuidelines';

const CommunityPage = () => {
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen py-20">
      <CommunityOverview />
      <GettingStartedGuide />
      <ContributorProfiles />
      <EventsMeetups />
      <MentorshipProgram />
      <RecognitionRewards />
      <CommunityGuidelines />
    </div>
  );
};

export default CommunityPage;