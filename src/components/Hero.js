import React from 'react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20"
    >
      <div className="container mx-auto px-4 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-up">
          Brewed Bliss
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 animate-slide-up">
          Where Every Sip Tells a Story
        </p>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 animate-slide-up">
          Experience the perfect blend of tradition and innovation in every cup.
          Handcrafted with love, served with passion.
        </p>
        <button
          onClick={() => {
            const menuSection = document.getElementById('menu');
            if (menuSection) {
              menuSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Explore Our Menu
        </button>
      </div>
    </section>
  );
};

export default Hero;

