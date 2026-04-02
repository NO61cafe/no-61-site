import React, { useState } from 'react';
import { menuCategories } from '../mockData';
import { Badge } from './ui/badge';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState(menuCategories[0].id);

  const currentCategory = menuCategories.find(cat => cat.id === selectedCategory);

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-amber-700 font-semibold text-sm uppercase tracking-wider mb-4 block">
            Our Menu
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Delicious <span className="text-amber-700">Selections</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Special recipes and quality beverages prepared with fresh ingredients
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-amber-700 to-amber-800 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentCategory?.items.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-amber-700 transition-colors">
                    {item.name}
                  </h3>
                  <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 font-semibold">
                    {item.price}
                  </Badge>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-amber-50 to-blue-50 rounded-2xl p-8 max-w-2xl">
            <p className="text-gray-700 text-lg mb-2">
              🕐 Open Tuesday - Friday <span className="font-semibold text-amber-700">08:00 - 17:00</span> | Weekends <span className="font-semibold text-blue-700">09:00 - 17:00</span>
            </p>
            <p className="text-gray-600 text-sm mb-1">
              Vegetarian, vegan & gluten-free options available
            </p>
            <p className="text-gray-500 text-xs">
              12.5% service charge applies for groups of 6 or more
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
