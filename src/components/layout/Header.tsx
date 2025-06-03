import React, { useState } from 'react';
import { Bell, Search, User, Settings, LogOut } from 'lucide-react';
import Avatar from '../ui/Avatar';
import { users } from '../../data/mockData';
import { useRouter } from '@tanstack/react-router';

const currentUser = users[0];

interface HeaderProps {
  onMenuToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const router = useRouter();
  const currentPath = router.state.location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={onMenuToggle}
              className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-700 md:hidden"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a 
                href="/" 
                className={`${isActive('/') 
                  ? 'border-blue-800 text-gray-900 dark:text-white' 
                  : 'border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-200'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Home
              </a>
              <a 
                href="/network" 
                className={`${isActive('/network') 
                  ? 'border-blue-800 text-gray-900 dark:text-white' 
                  : 'border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-200'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Network
              </a>
              <a 
                href="/events" 
                className={`${isActive('/events') 
                  ? 'border-blue-800 text-gray-900 dark:text-white' 
                  : 'border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-200'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Events
              </a>
              <a 
                href="/study-groups" 
                className={`${isActive('/study-groups') 
                  ? 'border-blue-800 text-gray-900 dark:text-white' 
                  : 'border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-200'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Study Groups
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="relative rounded-md shadow-sm md:w-64 w-auto">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={18} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search..."
                  className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-2 bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                />
              </div>
            </div>
            <div className="ml-4 flex items-center md:ml-6">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-700 relative"
              >
                <Bell size={20} />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-gray-900"></span>
              </button>
              {showNotifications && (
                <div className="origin-top-right absolute right-10 mt-64 w-80 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white">Notifications</h3>
                    </div>
                    <a href="/network" className="block px-4 py-2 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                      <p className="text-sm text-gray-700 dark:text-gray-300">Taylor Nguyen wants to connect</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">2 hours ago</p>
                    </a>
                    <a href="/events" className="block px-4 py-2 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                      <p className="text-sm text-gray-700 dark:text-gray-300">New event: Tech Hackathon 2025</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">1 day ago</p>
                    </a>
                    <div className="px-4 py-2 text-center">
                      <a href="/notifications" className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">View all notifications</a>
                    </div>
                  </div>
                </div>
              )}
              <div className="ml-3 relative">
                <div>
                  <button
                    onClick={() => setShowProfileMenu(!showProfileMenu)}
                    className="max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <Avatar 
                      src={currentUser.avatar} 
                      alt={currentUser.name} 
                      size="sm" 
                    />
                  </button>
                </div>
                {showProfileMenu && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <a href="/profile" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div className="flex items-center">
                          <User size={16} className="mr-2" />
                          <span>Profile</span>
                        </div>
                      </a>
                      <a href="/settings" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div className="flex items-center">
                          <Settings size={16} className="mr-2" />
                          <span>Settings</span>
                        </div>
                      </a>
                      <a href="/logout" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div className="flex items-center">
                          <LogOut size={16} className="mr-2" />
                          <span>Sign out</span>
                        </div>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;