import React from 'react';
import { Home, Users, Calendar, BookOpen, Award, Briefcase, MessageCircle } from 'lucide-react';
import { useRouter } from '@tanstack/react-router';

interface SidebarProps {
  isOpen: boolean;
  isDesktop: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, isDesktop }) => {
  const router = useRouter();
  const currentPath = router.state.location.pathname;

  const navItems = [
    { icon: <Home size={20} />, label: 'Home', href: '/' },
    { icon: <Users size={20} />, label: 'My Network', href: '/network' },
    { icon: <Calendar size={20} />, label: 'Events', href: '/events' },
    { icon: <BookOpen size={20} />, label: 'Study Groups', href: '/study-groups' },
    { icon: <Award size={20} />, label: 'Skill Sharing', href: '/skills' },
    { icon: <Briefcase size={20} />, label: 'Career', href: '/career' },
    { icon: <MessageCircle size={20} />, label: 'Messages', href: '/messages' },
  ];

  return (
    <div className={`
      flex flex-col h-full bg-white dark:bg-gray-900 shadow-lg
      ${isDesktop ? '' : 'w-64'}
    `}>
      <div className="h-16 flex items-center justify-center border-b border-gray-200 dark:border-gray-800">
        <a href="/" className={`
          flex-shrink-0 flex items-center
          transition-opacity duration-200
          ${isDesktop && !isOpen ? 'opacity-0' : 'opacity-100'}
        `}>
          <span className="text-blue-800 dark:text-blue-400 text-xl font-bold">
            Campus<span className="text-teal-600 dark:text-teal-400">Connect</span>
          </span>
        </a>
      </div>
      <nav className="mt-5 px-2 space-y-1 flex-1">
        {navItems.map((item) => {
          const isActive = currentPath === item.href;
          return (
            <a
              key={item.href}
              href={item.href}
              className={`
                group flex items-center px-2 py-2 text-base font-medium rounded-md transition-all duration-200
                ${isActive 
                  ? 'bg-blue-50 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white'}
              `}
            >
              <div className={`
                flex-shrink-0
                ${isActive 
                  ? 'text-blue-700 dark:text-blue-400' 
                  : 'text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-white'}
              `}>
                {item.icon}
              </div>
              <span className={`
                ml-3 transition-opacity duration-200
                ${isDesktop && !isOpen ? 'opacity-0 hidden' : 'opacity-100'}
              `}>
                {item.label}
              </span>
            </a>
          );
        })}
      </nav>
      <div className="absolute bottom-0 w-full border-t border-gray-200 dark:border-gray-800 p-4">
        <div className={`
          flex items-center space-x-3
          transition-opacity duration-200
          ${isDesktop && !isOpen ? 'opacity-0' : 'opacity-100'}
        `}>
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Online</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;