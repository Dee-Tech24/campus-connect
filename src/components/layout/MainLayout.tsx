import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { ChevronLeft } from 'lucide-react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="h-screen flex overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Desktop Sidebar */}
      <div 
        className={`
          hidden md:flex flex-col fixed inset-y-0 
          transition-all duration-300 ease-in-out
          ${sidebarOpen ? 'w-64' : 'w-20'}
        `}
      >
        <Sidebar isOpen={sidebarOpen} isDesktop={true} />
        <button
          onClick={toggleSidebar}
          className={`
            absolute top-20 -right-3 bg-white dark:bg-gray-800 
            rounded-full p-1 shadow-lg border border-gray-200 dark:border-gray-700
            transition-transform duration-300
            ${sidebarOpen ? 'transform rotate-0' : 'transform rotate-180'}
          `}
        >
          <ChevronLeft size={20} className="text-gray-500 dark:text-gray-400" />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div className={`
        md:hidden fixed inset-y-0 left-0 z-30
        transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <Sidebar isOpen={true} isDesktop={false} />
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-20 bg-gray-600 bg-opacity-75 cursor-pointer"
          onClick={closeMobileMenu}
        ></div>
      )}
      
      <div className={`
        flex flex-col flex-1
        transition-all duration-300 ease-in-out
        ${sidebarOpen ? 'md:ml-64' : 'md:ml-20'}
      `}>
        <Header onMenuToggle={toggleMobileMenu} />
        
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;