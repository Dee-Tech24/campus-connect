import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { Star, Clock, Filter, Plus } from 'lucide-react';
import Card, { CardContent } from '../components/ui/Card';
import Avatar from '../components/ui/Avatar';
import Button from '../components/ui/Button';
import { skillOffers, users } from '../data/mockData';

const SkillSharing: React.FC = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Skill Sharing</h1>
          <div className="flex space-x-2">
            <Button variant="outline" className="flex items-center">
              <Filter size={16} className="mr-2" />
              Filter
            </Button>
            <Button className="flex items-center">
              <Plus size={16} className="mr-2" />
              Offer Skill
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
    </MainLayout>
  );
};

export default SkillSharing;