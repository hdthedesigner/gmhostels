import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Features from '@/components/sections/Features';
import Accommodation from '@/components/sections/Accommodation';
import Location from '@/components/sections/Location';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/layout/Footer';

function App() {
  const handleContactClick = () => {
    toast({
      title: "📞 Ready to Connect!",
      description: "Call us at +917466900605 or visit us in Dehradun!",
      duration: 4000,
    });
  };

  const handleBookingClick = () => {
    toast({
      title: "🚧 Booking System Coming Soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      duration: 4000,
    });
  };

  return (
    <>
      <Helmet>
        <title>GM Hostels - Premium Student Accommodation in Dehradun | Where Comfort Meets Care</title>
        <meta name="description" content="Experience premium hostel living at GM Hostels Dehradun. Separate wings for boys & girls, 4-course meals, rooftop gym, top security. Your home away from home in the heart of Dehradun." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <main>
          <Hero onBookingClick={handleBookingClick} onContactClick={handleContactClick} />
          <About />
          <Features />
          <Accommodation />
          <Location />
          <CTA onBookingClick={handleBookingClick} onContactClick={handleContactClick} />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;