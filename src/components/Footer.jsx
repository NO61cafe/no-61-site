import React from 'react';
import { Instagram, Phone, Mail, Heart } from 'lucide-react';
import { cafeInfo } from '../mockData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-700 to-blue-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">61</span>
              </div>
              <span className="text-2xl font-bold">No61 Cafe</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Mediterranean & British cafe in Ashford. Specialty coffee, hearty breakfasts, and fresh baked goods.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/no61cafe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={`tel:${cafeInfo.phone}`}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a 
                href={`mailto:${cafeInfo.email}`}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('menu')}
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Menu
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('events')}
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Events
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
            <ul className="space-y-3">
              <li>
                <div className="text-gray-400">
                  <span className="block font-medium text-white mb-1">Weekdays</span>
                  <span className="text-sm">Tuesday - Friday</span>
                  <span className="block text-amber-500">{cafeInfo.hours.cafe}</span>
                </div>
              </li>
              <li className="pt-3">
                <div className="text-gray-400">
                  <span className="block font-medium text-white mb-1">Weekends</span>
                  <span className="text-sm">Saturday - Sunday</span>
                  <span className="block text-blue-400">{cafeInfo.hours.weekend}</span>
                </div>
              </li>
              <li className="pt-3">
                <div className="text-gray-400">
                  <span className="block font-medium text-red-400 mb-1">Closed Monday</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">
                <span className="block text-sm text-gray-500 mb-1">Address</span>
                <span className="text-white">{cafeInfo.address}</span>
              </li>
              <li className="text-gray-400">
                <span className="block text-sm text-gray-500 mb-1">Phone</span>
                <a 
                  href={`tel:${cafeInfo.phone}`}
                  className="text-white hover:text-amber-500 transition-colors block"
                >
                  {cafeInfo.phone}
                </a>
                <a 
                  href={`tel:${cafeInfo.mobile}`}
                  className="text-white hover:text-amber-500 transition-colors"
                >
                  {cafeInfo.mobile}
                </a>
              </li>
              <li className="text-gray-400">
                <span className="block text-sm text-gray-500 mb-1">Email</span>
                <a 
                  href={`mailto:${cafeInfo.email}`}
                  className="text-white hover:text-amber-500 transition-colors"
                >
                  {cafeInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} No61 Cafe. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500" fill="currentColor" /> in Ashford, UK
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
