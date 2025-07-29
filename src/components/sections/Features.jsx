import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Utensils, Dumbbell, Sparkles, Users, Wifi } from 'lucide-react';

const Features = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const featuresList = [
    {
      icon: Shield,
      title: "Top-Tier Security System",
      description: "Round-the-clock CCTV surveillance, biometric access, and on-site security personnel ensure maximum safety.",
      color: "text-green-600"
    },
    {
      icon: Utensils,
      title: "Nutritious 4-Course Meals",
      description: "Wholesome breakfast, lunch, evening snacks, and dinner—freshly prepared daily to keep you energized.",
      color: "text-orange-600"
    },
    {
      icon: Dumbbell,
      title: "Rooftop Gym",
      description: "Stay fit and refreshed with our well-equipped rooftop gym offering stunning views of the hills.",
      color: "text-purple-600"
    },
    {
      icon: Sparkles,
      title: "Daily Housekeeping & Laundry",
      description: "We take care of cleanliness and your laundry needs, so you can focus on what really matters.",
      color: "text-blue-600"
    },
    {
      icon: Users,
      title: "Professional Management",
      description: "Our experienced team is always available to help with anything you need—just like home, only more efficient.",
      color: "text-red-600"
    },
    {
      icon: Wifi,
      title: "High-Speed Internet",
      description: "Stay connected with reliable high-speed WiFi throughout the hostel for all your academic and personal needs.",
      color: "text-indigo-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Why Choose GM Hostels?</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience premium living with world-class amenities designed for your comfort and success
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuresList.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="feature-card p-8 rounded-2xl hover-lift"
            >
              <div className={`${feature.color} mb-4`}>
                <feature.icon className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;