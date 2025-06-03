import React from 'react';
import { BookOpen, Clock, MapPin, Users } from 'lucide-react';
import Card, { CardContent, CardFooter } from '../ui/Card';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { studyGroups } from '../../data/mockData';

const StudyGroupsList: React.FC = () => {
  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Study Groups</h2>
        <Button variant="ghost" size="sm">
          View All
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {studyGroups.map((group) => (
          <Card 
            key={group.id} 
            hoverable
            className="transition-all duration-300"
          >
            <CardContent>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <div className="flex items-center">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
                      <BookOpen size={24} className="text-blue-800 dark:text-blue-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{group.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{group.course}</p>
                    </div>
                  </div>
                </div>
                <Badge variant="primary">
                  {group.members.length}/{group.capacity} Members
                </Badge>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm my-3">{group.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Clock size={16} className="mr-2 flex-shrink-0" />
                  <span>{group.meetingTime}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <MapPin size={16} className="mr-2 flex-shrink-0" />
                  <span>{group.location}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex -space-x-2">
                {group.members.slice(0, 3).map((memberId, index) => {
                  const memberAvatar = `https://images.pexels.com/photos/${1000000 + parseInt(memberId)}/pexels-photo-${1000000 + parseInt(memberId)}.jpeg?auto=compress&cs=tinysrgb&w=100`;
                  return (
                    <img
                      key={index}
                      className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800"
                      src={memberAvatar}
                      alt={`Member ${memberId}`}
                    />
                  );
                })}
                {group.members.length > 3 && (
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-gray-800 text-xs font-medium text-gray-800 dark:text-gray-200">
                    +{group.members.length - 3}
                  </div>
                )}
              </div>
              <Button>Join Group</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default StudyGroupsList;