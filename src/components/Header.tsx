import React from 'react';
import { Menu, X, MessageCircle, GraduationCap } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  onNavigate: (section: string) => void;
  activeSection: string;
}

function Header({ onNavigate, activeSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919828535854', '_blank');
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/20 dark:border-gray-700/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-2xl shadow-neumorphic-inset dark:shadow-neumorphic-dark-inset flex items-center justify-center mr-4 transition-all duration-300">
                <GraduationCap className="w-7 h-7 text-primary-600 dark:text-primary-400" />
              </div>
              <span className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">Omega</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? 'text-primary-600 dark:text-primary-400 bg-white dark:bg-gray-800 shadow-neumorphic-inset dark:shadow-neumorphic-dark-inset'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-white/50 dark:hover:bg-gray-800/50 hover:shadow-neumorphic-soft dark:hover:shadow-neumorphic-dark-soft'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>

          {/* Theme Toggle and WhatsApp Button */}
          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />
            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-800 text-success-600 dark:text-success-500 font-semibold rounded-2xl shadow-neumorphic dark:shadow-neumorphic-dark hover:shadow-neumorphic-deep dark:hover:shadow-neumorphic-dark-deep transition-all duration-200 hover-lift"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-3 rounded-xl text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 shadow-neumorphic dark:shadow-neumorphic-dark hover:shadow-neumorphic-pressed dark:hover:shadow-neumorphic-dark-pressed transition-all duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-2 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-2xl shadow-neumorphic-inset dark:shadow-neumorphic-dark-inset mt-2 mb-4 transition-all duration-300">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-3 rounded-xl text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-white dark:hover:bg-gray-800 hover:shadow-neumorphic-soft dark:hover:shadow-neumorphic-dark-soft transition-all duration-200"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center justify-between pt-2">
                <ThemeToggle />
              <button
                onClick={handleWhatsAppClick}
                className="flex-1 ml-3 inline-flex items-center justify-center px-4 py-3 bg-white dark:bg-gray-800 text-success-600 dark:text-success-500 font-semibold rounded-xl shadow-neumorphic dark:shadow-neumorphic-dark hover:shadow-neumorphic-pressed dark:hover:shadow-neumorphic-dark-pressed transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;