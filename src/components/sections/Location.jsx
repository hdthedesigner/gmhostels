import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, CheckCircle } from 'lucide-react';

const Location = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Our Location</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
            <motion.div
              {...fadeInUp}
              className="space-y-6 text-center"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <MapPin className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Dehradun Township</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Bidholi - Majhaun Road, Misraspatti, Uttarakhand – 248197
                  </p>
                  <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
                    A peaceful, green location with excellent connectivity to nearby institutions and urban hubs. 
                    Nestled in the serene environment of Dehradun, our hostel offers the perfect balance of 
                    tranquility and accessibility.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-2xl inline-block">
                <h4 className="text-xl font-bold mb-2">Why This Location?</h4>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Close to major educational institutions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Excellent public transportation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Peaceful and safe neighborhood
                  </li>
                </ul>
              </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;