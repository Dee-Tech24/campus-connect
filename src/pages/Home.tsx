import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import WelcomeHero from '../components/home/WelcomeHero';
import ConnectionSuggestions from '../components/home/ConnectionSuggestions';
import FeaturedEvents from '../components/home/FeaturedEvents';
import StudyGroupsList from '../components/home/StudyGroupsList';
import SkillShareSection from '../components/home/SkillShareSection';

const Home: React.FC = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <WelcomeHero />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <FeaturedEvents />
            <StudyGroupsList />
          </div>
          <div className="space-y-6">
            <ConnectionSuggestions />
            <SkillShareSection />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;