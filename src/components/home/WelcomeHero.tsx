import React from 'react';
import { Sparkles } from 'lucide-react';

const WelcomeHero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-800 to-indigo-900 rounded-xl p-6 shadow-lg transform transition-all duration-500 hover:shadow-xl">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0 md:mr-6">
          <div className="flex items-center mb-2">
            <Sparkles size={24} className="text-yellow-400 mr-2" />
            <h1 className="text-2xl font-bold text-white">Welcome to CampusConnect!</h1>
          </div>
          <p className="text-blue-200 mb-4 max-w-lg">
            Your central hub for academic collaboration, professional networking, and campus engagement. 
            Discover events, join study groups, and connect with peers who share your interests.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="bg-white text-blue-900 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
              Complete Your Profile
            </button>
            <button className="bg-transparent border border-white text-white px-4 py-2 rounded-lg font-medium hover:bg-white/10 transition-colors">
              Explore Events
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex-shrink-0">
          <img 
            src="https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="Students collaborating" 
            className="rounded-lg w-full h-auto object-cover shadow-lg transform transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomeHero;