// pages/ProjectsPage.jsx
import React from 'react';
import ProjectsHeader from '../components/projects/ProjectsHeader';
import ProjectCategories from '../components/projects/ProjectCategories';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import ContributionGuidelines from '../components/projects/ContributionGuidelines';
import ProjectRoadmap from '../components/projects/ProjectRoadmap';
import IdeasPipeline from '../components/projects/IdeasPipeline';

const ProjectsPage = () => {
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      <ProjectsHeader />
      <ProjectCategories />
      <ProjectsGrid />
      <ContributionGuidelines />
      <ProjectRoadmap />
      <IdeasPipeline />
    </div>
  );
};

export default ProjectsPage;