import React from 'react';
import { MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <img 
              src="https://storage.googleapis.com/hostinger-horizons-assets-prod/e5d9ad94-c6ea-472f-b0b7-b86187dfa73d/128a6aaf7225fe55be22e578ecf5f436.png" 
              alt="GM Hostels Logo"
              className="h-16 w-auto mb-6"
            />
            <p className="text-gray-300 leading-relaxed mb-6">
              Your trusted partner for premium hostel accommodation in Dehradun. 
              Where comfort meets care, and dreams take flight.
            </p>
            <div className="flex space-x-4">
              <div className="bg-blue-600 p-2 rounded-full">
                <Phone className="h-5 w-5" />
              </div>
              <div className="bg-blue-600 p-2 rounded-full">
                <MapPin className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div>
            <span className="text-xl font-bold mb-6 block">Contact Information</span>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3" />
                <span>+917466900605</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-1" />
                <div>
                  <p>Dehradun Township</p>
                  <p>Bidholi - Majhaun Road</p>
                  <p>Misraspatti, Uttarakhand – 248197</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="text-xl font-bold mb-6 block">Quick Links</span>
            <div className="space-y-3">
              <p className="text-gray-300 hover:text-white cursor-pointer transition-colors">About Us</p>
              <p className="text-gray-300 hover:text-white cursor-pointer transition-colors">Accommodation</p>
              <p className="text-gray-300 hover:text-white cursor-pointer transition-colors">Amenities</p>
              <p className="text-gray-300 hover:text-white cursor-pointer transition-colors">Location</p>
              <p className="text-gray-300 hover:text-white cursor-pointer transition-colors">Contact</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 GM Hostels. All rights reserved. | A Space to Grow, A Place to Belong
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;