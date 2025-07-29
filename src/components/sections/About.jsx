import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">About GM Hostels</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="space-y-6 text-center"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              At GM Hostels, we don't just provide accommodation—we create a <strong className="text-blue-600">home away from home</strong>. With years of experience in successfully running hostels, we understand the needs of students and young professionals like no one else.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Our commitment to <strong className="text-blue-600">safety, hygiene, nutrition, and convenience</strong> has made us a trusted name in the hostel space. With dedicated separate wings for boys and girls, GM Hostels stands out as a premium and secure living option for those seeking comfort and peace of mind in Dehradun.
            </p>

            <div className="bg-blue-600 text-white p-6 rounded-2xl inline-block">
              <p className="text-lg font-medium">
                Whether you're here to study, work, or grow, GM Hostels is your perfect launchpad.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;