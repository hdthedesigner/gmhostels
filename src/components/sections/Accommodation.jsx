import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Heart } from 'lucide-react';

const Accommodation = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Accommodation Details</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            {...fadeInUp}
            className="bg-white rounded-3xl p-8 shadow-xl hover-lift"
          >
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Boys' Wing</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                <span className="text-lg">25 Fully Air-Conditioned Rooms</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                <span className="text-lg">Twin Sharing Occupancy</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                <span className="text-lg">Spacious, ventilated, and thoughtfully designed</span>
              </div>
            </div>

            <img className="w-full h-48 object-cover rounded-xl mt-6" alt="Boys wing accommodation with modern furnishing" src="https://images.unsplash.com/photo-1696540609378-8191f82cff84" />
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-xl hover-lift"
          >
            <div className="flex items-center mb-6">
              <div className="bg-pink-100 p-3 rounded-full mr-4">
                <Heart className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Girls' Wing</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                <span className="text-lg">25 Fully Air-Conditioned Rooms</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                <span className="text-lg">Twin Sharing Occupancy</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                <span className="text-lg">Privacy, safety, and comfort guaranteed</span>
              </div>
            </div>

            <img className="w-full h-48 object-cover rounded-xl mt-6" alt="Girls wing accommodation with elegant design" src="https://images.unsplash.com/photo-1605346576608-92f1346b67d6" />
          </motion.div>
        </div>

        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Ideal For:</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🎓", title: "College Students", desc: "Perfect environment for focused studies" },
              { icon: "🧑‍💼", title: "Young Working Professionals", desc: "Convenient location with modern amenities" },
              { icon: "🎯", title: "Competitive Exam Aspirants", desc: "Quiet spaces for intensive preparation" }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover-lift">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Accommodation;