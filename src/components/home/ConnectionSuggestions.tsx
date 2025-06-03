import React from 'react';
import { UserPlus } from 'lucide-react';
import Card, { CardContent } from '../ui/Card';
import Button from '../ui/Button';
import Avatar from '../ui/Avatar';
import Badge from '../ui/Badge';
import { users, connectionSuggestions } from '../../data/mockData';

const ConnectionSuggestions: React.FC = () => {
  // Using the first user as the current user for demo purposes
  const currentUser = users[0];
  
  // Get connection suggestions for the current user
  const userSuggestions = connectionSuggestions.find(
    suggestion => suggestion.userId === currentUser.id
  )?.suggestions || [];
  
  // Get the full user objects for the suggested connections
  const suggestedUsers = users.filter(user => 
    userSuggestions.includes(user.id)
  );

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">People You May Know</h2>
        <Button variant="ghost" size="sm">
          View All
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {suggestedUsers.map((user) => (
          <Card key={user.id} hoverable className="flex flex-col h-full">
            <CardContent className="flex space-x-4">
              <Avatar 
                src={user.avatar} 
                alt={user.name} 
                size="lg" 
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white">{user.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{user.major} • {user.year}</p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {user.skills.slice(0, 2).map((skill, index) => (
                    <Badge key={index} variant="primary" className="mr-1 mb-1">
                      {skill}
                    </Badge>
                  ))}
                  {user.interests.slice(0, 1).map((interest, index) => (
                    <Badge key={index} variant="secondary" className="mr-1 mb-1">
                      {interest}
                    </Badge>
                  ))}
                </div>
                <div className="mt-3 flex justify-between items-center">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {Math.floor(Math.random() * 5) + 1} mutual connections
                  </span>
                  <Button size="sm" variant="primary" className="flex items-center">
                    <UserPlus size={16} className="mr-1" />
                    Connect
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ConnectionSuggestions;