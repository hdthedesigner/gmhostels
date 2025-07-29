import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = ({ onBookingClick, onContactClick }) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section className="relative gradient-bg min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
      
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <img 
            src="https://storage.googleapis.com/hostinger-horizons-assets-prod/e5d9ad94-c6ea-472f-b0b7-b86187dfa73d/128a6aaf7225fe55be22e578ecf5f436.png" 
            alt="GM Hostels - Premium Student Accommodation in Dehradun"
            className="mx-auto h-32 md:h-40 w-auto mb-8"
          />
        </motion.div>

        <motion.h1
          {...fadeInUp}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          Welcome to <span className="text-yellow-300">GM Hostels</span>
        </motion.h1>

        <motion.p
          {...fadeInUp}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Where Comfort Meets Care in the Heart of Dehradun
        </motion.p>

        <motion.p
          {...fadeInUp}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl mb-12 max-w-2xl mx-auto opacity-90"
        >
          Premium accommodation for students and young professionals with dedicated separate wings, world-class amenities, and unmatched security.
        </motion.p>

        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button 
            onClick={onBookingClick}
            size="lg" 
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-4 text-lg rounded-full hover-lift"
          >
            Book Your Stay
          </Button>
          <Button 
            onClick={onContactClick}
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg rounded-full hover-lift"
          >
            <Phone className="mr-2 h-5 w-5" />
            Contact Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;