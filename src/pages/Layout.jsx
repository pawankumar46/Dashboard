import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  HomeIcon,
  ChartBarIcon,
  UserGroupIcon,
  Cog6ToothIcon,
  BellIcon,
  ArrowLeftOnRectangleIcon,
  CurrencyDollarIcon,
  ShoppingCartIcon,
  CubeIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

const Layout = ({ children, onLogout }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
    { name: 'Sales', href: '/sales', icon: CurrencyDollarIcon },
    { name: 'Purchases', href: '/purchases', icon: ShoppingCartIcon },
    { name: 'Inventory', href: '/inventory', icon: CubeIcon },
    { name: 'Analytics', href: '/analytics', icon: ChartBarIcon },
    { name: 'Team', href: '/team', icon: UserGroupIcon },
    { name: 'Settings', href: '/settings', icon: Cog6ToothIcon },
  ];

  const handleLogout = () => {
    // onLogout();
    navigate('/login');
  };

  const handleNavigation = (href) => {
    if (isMobile) {
      setIsSidebarOpen(false);
    }
    navigate(href);
  };

  return (
    <div className="min-h-screen bg-[#f0f4f8]">
      {/* Mobile Overlay */}
      {isMobile && isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-white bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#124e66] shadow-lg transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex flex-col h-full">
          {/* Logo and Close Button */}
          <div className="flex items-center justify-between h-16 px-4 bg-gradient-to-r from-[#124e66] to-[#748d92]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-lg"></div>
              </div>
              <span className="text-xl font-bold text-white">Report</span>
            </div>
            {isMobile && (
              <button 
                onClick={() => setIsSidebarOpen(false)}
                className="p-2 mb-3 text-white rounded-full bg-gradient-to-r from-[#124e66] to-[#748d92]"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            )}
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
            {navigation.map((item) => (
              <Link 
                key={item.name} 
                to={item.href} 
                onClick={() => handleNavigation(item.href)}
                className="flex items-center px-4 py-3 text-gray-200 rounded-lg hover:bg-[#748d92] group transition-colors duration-200"
              >
                <item.icon className="w-6 h-6 mr-3 text-gray-300 group-hover:text-white" />
                <span className="group-hover:text-white transition-colors duration-200">{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* User Profile & Logout */}
          <div className="p-4 border-t border-[#748d92]">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#124e66] to-[#748d92] flex items-center justify-center">
                  <span className="text-white font-medium">JD</span>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-200">John Doe</p>
                  <p className="text-xs text-gray-400">Admin</p>
                </div>
              </div>
              <button 
                onClick={handleLogout} 
                className="mb-3 bg-gradient-to-r from-[#124e66] to-[#748d92] p-2 rounded-lg text-white hover:from-[#748d92] hover:to-[#124e66] transition-all duration-300"
              >
                <ArrowLeftOnRectangleIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${isSidebarOpen ? 'md:ml-64' : 'ml-0'}`}>
        <header className="bg-white shadow-sm sticky top-0 z-30">
          <div className="flex items-center justify-between px-4 md:px-6 py-4">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
              className="p-2 bg-gradient-to-r from-[#124e66] to-[#748d92] rounded-xl font-medium hover:from-[#748d92] hover:to-[#124e66] transition-all duration-300 shadow-sm text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <div className="flex items-center space-x-4">
              <button className="p-2 bg-gradient-to-r from-[#124e66] to-[#748d92] text-white rounded-xl font-medium hover:from-[#748d92] hover:to-[#124e66] transition-all duration-300 shadow-sm relative">
                <BellIcon className="w-6 h-6" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="w-10 h-10 mt-5 rounded-full bg-gradient-to-r from-[#124e66] to-[#748d92] flex items-center justify-center">
                <span className="text-white font-medium">JD</span>
              </div>
            </div>
          </div>
        </header>

        {/* Render children components */}
        <main className="p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
