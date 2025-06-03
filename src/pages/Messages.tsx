import React, { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import { Search, Phone, Video, MoreVertical, Send } from 'lucide-react';
import Avatar from '../components/ui/Avatar';
import Button from '../components/ui/Button';
import { users } from '../data/mockData';

const Messages: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState(users[1]);

  const mockMessages = [
    {
      id: '1',
      senderId: users[0].id,
      receiverId: users[1].id,
      content: "Hey, how's the study group preparation going?",
      timestamp: '10:30 AM'
    },
    {
      id: '2',
      senderId: users[1].id,
      receiverId: users[0].id,
      content: "It's going well! I've prepared the materials for our next session.",
      timestamp: '10:32 AM'
    },
    {
      id: '3',
      senderId: users[0].id,
      receiverId: users[1].id,
      content: 'Great! Should we review them before the meeting?',
      timestamp: '10:33 AM'
    },
    {
      id: '4',
      senderId: users[1].id,
      receiverId: users[0].id,
      content: 'Yes, that would be helpful. I can share my screen if you want.',
      timestamp: '10:35 AM'
    }
  ];

  return (
    <MainLayout>
      <div className="flex h-[calc(100vh-5rem)] bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
        {/* Sidebar */}
        <div className="w-80 border-r border-gray-200 dark:border-gray-700">
          <div className="p-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search messages..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            </div>
          </div>

          <div className="overflow-y-auto h-full">
            {users.slice(1).map((user) => (
              <div
                key={user.id}
                className={`
                  p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors
                  ${selectedChat.id === user.id ? 'bg-gray-100 dark:bg-gray-700' : ''}
                `}
                onClick={() => setSelectedChat(user)}
              >
                <div className="flex items-center space-x-3">
                  <Avatar src={user.avatar} alt={user.name} size="md" />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 dark:text-white">{user.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Online</p>
                  </div>
                  <span className="text-xs text-gray-400">12m</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Avatar src={selectedChat.avatar} alt={selectedChat.name} size="md" />
              <div>
                <h2 className="font-medium text-gray-900 dark:text-white">{selectedChat.name}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">{selectedChat.major}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <Phone size={20} />
              </Button>
              <Button variant="ghost" size="sm">
                <Video size={20} />
              </Button>
              <Button variant="ghost" size="sm">
                <MoreVertical size={20} />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {mockMessages.map((message) => {
              const isCurrentUser = message.senderId === users[0].id;
              const sender = users.find(u => u.id === message.senderId);

              return (
                <div
                  key={message.id}
                  className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-end space-x-2 max-w-[70%] ${isCurrentUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    {!isCurrentUser && <Avatar src={sender?.avatar || ''} alt={sender?.name || ''} size="sm" />}
                    <div
                      className={`
                        rounded-lg p-3
                        ${isCurrentUser 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'}
                      `}
                    >
                      <p className="text-sm">{message.content}</p>
                      <span className={`
                        text-xs mt-1 block
                        ${isCurrentUser ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'}
                      `}>
                        {message.timestamp}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              />
              <Button className="flex items-center">
                <Send size={20} className="mr-1" />
                Send
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Messages;