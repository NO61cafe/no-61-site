import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Clock } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-amber-700 to-blue-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">61</span>
            </div>
            <span className={`text-2xl font-bold transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              No61 Cafe
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className={`font-medium transition-colors hover:text-amber-700 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`font-medium transition-colors hover:text-amber-700 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className={`font-medium transition-colors hover:text-amber-700 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('events')}
              className={`font-medium transition-colors hover:text-amber-700 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Events
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`font-medium transition-colors hover:text-amber-700 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://instagram.com/no61cafe" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`transition-colors hover:text-amber-700 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              <Instagram size={20} />
            </a>
            <Button 
              onClick={() => scrollToSection('events')}
              className="bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 text-white"
            >
              Book Event
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('menu')}
                className="text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors"
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection('events')}
                className="text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors"
              >
                Events
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors"
              >
                Contact
              </button>
              <div className="px-4 pt-2 border-t border-gray-200">
                <Button 
                  onClick={() => scrollToSection('events')}
                  className="w-full bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 text-white"
                >
                  Book Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
