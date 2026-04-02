import React from 'react';
import { Button } from './ui/button';
import { Clock, Calendar } from 'lucide-react';
import { cafeInfo } from '../mockData';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1774228296846-14fd638af680"
          alt="No61 Cafe"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
            <span className="text-white text-sm font-medium">Ashford, Kent · UK</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            No<span className="text-amber-500">61</span> Cafe
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-4 font-light">
            {cafeInfo.tagline}
          </p>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            {cafeInfo.description}
          </p>

          {/* Rating Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-12">
            <div className="flex items-center space-x-1">
              <span className="text-2xl">⭐</span>
              <span className="text-white font-bold text-lg">{cafeInfo.rating}</span>
            </div>
            <span className="text-gray-300">·</span>
            <span className="text-white text-sm">{cafeInfo.reviews} Google Reviews</span>
          </div>

          {/* Time Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
              <Clock className="w-8 h-8 text-amber-500 mx-auto mb-3" />
              <h3 className="text-white font-semibold text-lg mb-2">Weekdays</h3>
              <p className="text-gray-300 text-sm mb-1">Tuesday - Friday</p>
              <p className="text-amber-400 font-medium">{cafeInfo.hours.cafe}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
              <Calendar className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold text-lg mb-2">Weekends</h3>
              <p className="text-gray-300 text-sm mb-1">Saturday - Sunday</p>
              <p className="text-blue-300 font-medium">{cafeInfo.hours.weekend}</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              onClick={() => scrollToSection('events')}
              size="lg"
              className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Book Event
            </Button>
            <Button 
              onClick={() => scrollToSection('menu')}
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
            >
              View Menu
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
