import React from 'react';
import { Star, Clock } from 'lucide-react';
import Card, { CardContent } from '../ui/Card';
import Avatar from '../ui/Avatar';
import Button from '../ui/Button';
import { skillOffers, users } from '../../data/mockData';

const SkillShareSection: React.FC = () => {
  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Skill Sharing</h2>
        <Button variant="ghost" size="sm">
          View All
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillOffers.map((offer) => {
          const user = users.find(u => u.id === offer.userId);
          return (
            <Card key={offer.id} hoverable>
              <CardContent>
                <div className="flex space-x-4">
                  <Avatar 
                    src={user?.avatar || ''} 
                    alt={user?.name || ''} 
                    size="lg" 
                  />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-semibold text-gray-900 dark:text-white">{offer.skill}</h3>
                      <div className="flex items-center">
                        <Star size={16} className="text-yellow-400 mr-1" />
                        <span className="text-gray-700 dark:text-gray-300">{offer.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{user?.name} • {user?.major}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{offer.description}</p>
                    <div className="mt-3 flex justify-between items-center">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Clock size={16} className="mr-1" />
                        <span>{offer.availability}</span>
                      </div>
                      <Button size="sm">Request Help</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default SkillShareSection;