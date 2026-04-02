import React from 'react';
import { Coffee, Utensils, Music, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Coffee,
      title: "Specialty Coffee",
      description: "Premium coffee expertly crafted by our skilled baristas"
    },
    {
      icon: Utensils,
      title: "Mediterranean & British",
      description: "Delicious fusion of Mediterranean and British cuisines"
    },
    {
      icon: Music,
      title: "Workshops & Events",
      description: "Regular cooking classes and coffee tasting sessions"
    },
    {
      icon: Users,
      title: "Dietary Options",
      description: "Vegetarian, vegan, and gluten-free options available"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="text-amber-700 font-semibold text-sm uppercase tracking-wider mb-4 block">
              About Us
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Where Mediterranean <br />
              <span className="text-amber-700">Meets British</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              No61 Cafe brings together the best of Mediterranean and British cuisine in the heart of Ashford. 
              Located opposite Waitrose on Cedar Parade, we're your neighborhood spot for exceptional food and coffee.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              From hearty breakfasts and vibrant Mediterranean salads to specialty coffee and freshly baked goods, 
              every dish is prepared with care using quality ingredients. We cater to all dietary preferences with 
              vegetarian, vegan, and gluten-free options.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div>
                <div className="text-3xl font-bold text-amber-700 mb-1">4.7⭐</div>
                <div className="text-gray-600 text-sm">Google Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-700 mb-1">542+</div>
                <div className="text-gray-600 text-sm">Reviews</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-700 mb-1">£10-20</div>
                <div className="text-gray-600 text-sm">Price Range</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden h-64 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src="https://customer-assets.emergentagent.com/job_cafe-events-hub/artifacts/pi8is7oc_no61-cafe-AF1QipMZBDerrvmVlwXQDRsBRGVznU14Xl0YSoXMtm81.jpg"
                    alt="No61 Cafe Interior"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-48 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src="https://customer-assets.emergentagent.com/job_cafe-events-hub/artifacts/3p2l7cbu_images.jpeg"
                    alt="Breakfast Platter"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="rounded-2xl overflow-hidden h-48 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src="https://customer-assets.emergentagent.com/job_cafe-events-hub/artifacts/5jzl5c9a_HQ0DO5Q8SQO13XBHPMR0.jpg"
                    alt="No61 Cafe Exterior"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-64 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src="https://customer-assets.emergentagent.com/job_cafe-events-hub/artifacts/8j2auho1_cafe%2061.jpeg"
                    alt="Full English Breakfast"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-amber-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
