import React from 'react';

const About = () => {
  const stats = [
    { number: '8+', label: 'Years of Excellence', icon: '☕' },
    { number: '50K+', label: 'Happy Customers', icon: '😊' },
    { number: '100%', label: 'Fresh Roasted', icon: '🔥' },
    { number: '24/7', label: 'Quality Service', icon: '⭐' },
  ];

  const values = [
    {
      title: 'Quality First',
      description: 'We source only the finest beans from sustainable farms worldwide.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Community Focus',
      description: 'Building connections and creating a welcoming space for everyone.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Sustainability',
      description: 'Committed to ethical sourcing and environmental responsibility.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 min-h-screen relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200 dark:bg-amber-900/20 rounded-full blur-3xl opacity-20 -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200 dark:bg-orange-900/20 rounded-full blur-3xl opacity-20 -ml-48 -mb-48"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="text-amber-600 dark:text-amber-400 text-sm font-semibold uppercase tracking-wider">
              Our Story
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="text-amber-600 dark:text-amber-400">Brewed Bliss</span>
          </h2>
          <div className="w-24 h-1 bg-amber-600 dark:bg-amber-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Where passion meets perfection in every cup. Crafting exceptional coffee experiences since 2015.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols gap-12 items-center mb-20">
          {/* Image Section */}
          {/* <div className="relative animate-slide-up"> */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              {/* <img
                src="https://source.unsplash.com/800x600/?coffee-shop,interior"
                alt="Coffee shop interior"
                className="w-full h-full object-cover"
                loading="lazy"
              /> */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div> */}
            </div>
            {/* Decorative element */}
            {/* <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-400 dark:bg-amber-600 rounded-full opacity-20 blur-2xl -z-10"></div> */}
          {/* </div> */}

          {/* Story Content */}
          <div className="space-y-6 text-gray-700 dark:text-gray-300 animate-slide-up">
            <div className="space-y-4">
              <p className="text-lg md:text-xl leading-relaxed">
                Welcome to <span className="font-semibold text-amber-600 dark:text-amber-400">Brewed Bliss</span>, where passion meets perfection in every cup. Founded in 2015, we've been serving our community with handcrafted coffee made from the finest beans sourced from sustainable farms around the world.
              </p>
              <p className="text-lg leading-relaxed">
                Our journey began with a simple belief: that great coffee should be accessible to everyone. We roast our beans in-house daily, ensuring that every sip delivers the rich, complex flavors our customers have come to love.
              </p>
              <p className="text-lg leading-relaxed">
                Beyond coffee, we're committed to creating a warm, welcoming space where friends gather, ideas flow, and memories are made. Whether you're starting your day with an espresso or winding down with a cold brew, we're here to make every moment special.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up border border-gray-100 dark:border-gray-700"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-amber-600 dark:text-amber-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="text-amber-600 dark:text-amber-400 mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-700 dark:to-orange-700 rounded-2xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="relative z-10">
            <div className="flex items-center mb-6">
              <div className="w-12 h-1 bg-white mr-4"></div>
              <h3 className="text-2xl md:text-3xl font-bold">Our Mission</h3>
            </div>
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl">
              To create exceptional coffee experiences that bring people together, 
              while supporting sustainable farming practices and building a stronger 
              community one cup at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
