import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserCircle, Menu } from 'lucide-react';

export function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const isLoggedIn = location.pathname !== '/' && 
                     location.pathname !== '/login' && 
                     location.pathname !== '/signup';

  return (
    <header className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">SkillBridge AI</Link>
          </div>
          
          {isLoggedIn && (
            <>
              <nav className="hidden md:flex space-x-8">
                <Link to="/dashboard" className="text-white hover:text-indigo-100">Dashboard</Link>
                <Link to="/assessment" className="text-white hover:text-indigo-100">Assessment</Link>
                <Link to="/courses" className="text-white hover:text-indigo-100">Courses</Link>
                <Link to="/career" className="text-white hover:text-indigo-100">Career</Link>
                <Link to="/community" className="text-white hover:text-indigo-100">Community</Link>
              </nav>

              <div className="flex items-center space-x-4">
                <button className="p-2 rounded-full hover:bg-indigo-700">
                  <UserCircle className="h-6 w-6" />
                </button>
                <button 
                  className="p-2 rounded-full hover:bg-indigo-700 md:hidden"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <Menu className="h-6 w-6" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && isLoggedIn && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/dashboard" className="block px-3 py-2 text-white hover:bg-indigo-700">Dashboard</Link>
            <Link to="/assessment" className="block px-3 py-2 text-white hover:bg-indigo-700">Assessment</Link>
            <Link to="/courses" className="block px-3 py-2 text-white hover:bg-indigo-700">Courses</Link>
            <Link to="/career" className="block px-3 py-2 text-white hover:bg-indigo-700">Career</Link>
            <Link to="/community" className="block px-3 py-2 text-white hover:bg-indigo-700">Community</Link>
          </div>
        </div>
      )}
    </header>
  );
}