import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import ConnectionSuggestions from '../components/home/ConnectionSuggestions';
import { users } from '../data/mockData';
import Avatar from '../components/ui/Avatar';
import Card, { CardContent } from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { UserMinus, UserPlus } from 'lucide-react';

const Network: React.FC = () => {
  const currentUser = users[0];
  const connections = users.filter(user => 
    currentUser.connections.includes(user.id)
  );

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">My Network</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Connections</h3>
              <p className="text-3xl font-bold text-blue-800 dark:text-blue-400">{connections.length}</p>
            </div>
            <div className="p-4 bg-teal-50 dark:bg-teal-900/30 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Profile Views</h3>
              <p className="text-3xl font-bold text-teal-800 dark:text-teal-400">24</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Current Connections</h2>
            <div className="space-y-4">
              {connections.map((connection) => (
                <Card key={connection.id} hoverable>
                  <CardContent className="flex items-start space-x-4">
                    <Avatar 
                      src={connection.avatar} 
                      alt={connection.name}
                      size="lg"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">{connection.name}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{connection.major} • {connection.year}</p>
                        </div>
                        <Button 
                          variant="outline"
                          size="sm"
                          className="flex items-center"
                        >
                          <UserMinus size={16} className="mr-1" />
                          Remove
                        </Button>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{connection.bio}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {connection.skills.map((skill, index) => (
                          <Badge key={index} variant="primary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <div className="mt-4 flex justify-between items-center">
                        <div className="flex space-x-2">
                          <Button size="sm" variant="ghost">Message</Button>
                          <Button size="sm" variant="ghost">View Profile</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <ConnectionSuggestions />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Network;