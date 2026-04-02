import React from 'react';
import { Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { cafeInfo } from '../mockData';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-amber-700 font-semibold text-sm uppercase tracking-wider mb-4 block">
            Contact
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get in <span className="text-amber-700">Touch</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            For your questions, reservations, and special event requests
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {/* Instagram */}
                <div className="flex items-start space-x-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Instagram</h4>
                    <a 
                      href="https://instagram.com/no61cafe" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-amber-700 hover:text-amber-800 transition-colors"
                    >
                      {cafeInfo.instagram}
                    </a>
                    <p className="text-sm text-gray-600 mt-1">
                      Follow for latest menu and events
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <a 
                      href={`tel:${cafeInfo.phone}`}
                      className="text-amber-700 hover:text-amber-800 transition-colors block"
                    >
                      {cafeInfo.phone}
                    </a>
                    <a 
                      href={`tel:${cafeInfo.mobile}`}
                      className="text-amber-700 hover:text-amber-800 transition-colors block"
                    >
                      {cafeInfo.mobile}
                    </a>
                    <p className="text-sm text-gray-600 mt-1">
                      Tuesday - Sunday: 08:00 - 17:00
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <a 
                      href={`mailto:${cafeInfo.email}`}
                      className="text-amber-700 hover:text-amber-800 transition-colors"
                    >
                      {cafeInfo.email}
                    </a>
                    <p className="text-sm text-gray-600 mt-1">
                      For special event requests
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-700">{cafeInfo.address}</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Easy access, central location
                    </p>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Opening Hours</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Monday</span>
                    <span className="font-medium text-gray-500">Closed</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Tuesday - Friday</span>
                    <span className="font-medium text-amber-700">{cafeInfo.hours.cafe}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Saturday - Sunday</span>
                    <span className="font-medium text-blue-700">{cafeInfo.hours.weekend}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map or Image */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full border border-gray-100">
              <div className="relative h-full min-h-[500px]">
                <img 
                  src="https://customer-assets.emergentagent.com/job_cafe-events-hub/artifacts/54u2bgiz_ChatGPT%20Image%2031%20Mar%202026%2016_59_30.png"
                  alt="No61 Cafe Interior"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                  <div className="p-8 text-white">
                    <h3 className="text-2xl font-bold mb-2">Find Us in Ashford</h3>
                    <p className="text-gray-200 mb-2">
                      Opposite Waitrose on Cedar Parade, Repton Avenue
                    </p>
                    <p className="text-gray-300 text-sm mb-4">
                      Free off-street parking · WiFi available
                    </p>
                    <a
                      href="https://maps.google.com/?q=Units+3-4+Cedar+Parade+Repton+Ave+Ashford+TN23+3TE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full hover:bg-white/30 transition-all duration-300"
                    >
                      <MapPin className="w-4 h-4" />
                      <span>Open in Maps</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
