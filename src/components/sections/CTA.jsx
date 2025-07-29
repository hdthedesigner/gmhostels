import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTA = ({ onBookingClick, onContactClick }) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section className="py-20 gradient-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          {...fadeInUp}
          className="text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience the Difference</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            We don't believe in just providing a room—we believe in providing a lifestyle. 
            GM Hostels blends modern amenities with personal attention, creating a nurturing 
            environment for focused living.
          </p>
          <p className="text-2xl md:text-3xl font-bold mb-12 text-yellow-300">
            Let GM Hostels be your second home in Dehradun.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={onBookingClick}
              size="lg" 
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-10 py-4 text-xl rounded-full hover-lift"
            >
              Book Your Room Today
            </Button>
            <Button 
              onClick={onContactClick}
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-blue-600 px-10 py-4 text-xl rounded-full hover-lift"
            >
              <Phone className="mr-2 h-6 w-6" />
              Call Now
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;