import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const AboutPage: React.FC = () => {
  const features = [
    {
      icon: '🚀',
      title: 'Lightning Fast',
      description: 'Optimized performance with instant page loads and seamless navigation using Next.js and edge computing'
    },
    {
      icon: '🛡️',
      title: 'Secure Transactions',
      description: 'Bank-level 256-bit encryption and PCI DSS compliant payment processing for all transactions'
    },
    {
      icon: '🌍',
      title: 'Global Reach',
      description: 'Worldwide shipping across 120+ countries with multi-currency and multi-language support'
    },
    {
      icon: '📱',
      title: 'Mobile First',
      description: 'Progressive Web App with responsive design optimized for all devices and screen sizes'
    },
    {
      icon: '🤖',
      title: 'AI Powered',
      description: 'Smart recommendations and personalized shopping experiences using machine learning'
    },
    {
      icon: '🌱',
      title: 'Sustainable',
      description: 'Carbon-neutral shipping and eco-friendly packaging options available'
    },
    {
      icon: '💬',
      title: '24/7 Support',
      description: 'Round-the-clock customer service with live chat, email, and phone support'
    },
    {
      icon: '🔒',
      title: 'Privacy First',
      description: 'GDPR compliant with strict data protection and privacy policies'
    }
  ];

  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Founder',
      image: '/team/sarah-chen.jpg',
      bio: 'Former tech lead at Amazon with 15+ years in e-commerce'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO',
      image: '/team/marcus-rodriguez.jpg',
      bio: 'Ex-Google engineer specializing in scalable architecture'
    },
    {
      name: 'Priya Patel',
      role: 'Head of Product',
      image: '/team/priya-patel.jpg',
      bio: 'Product management expert from Shopify'
    },
    {
      name: 'David Kim',
      role: 'Head of Operations',
      image: '/team/david-kim.jpg',
      bio: 'Supply chain specialist with global logistics experience'
    }
  ];

  const milestones = [
    { year: '2018', event: 'Company Founded', description: 'Started with a vision to revolutionize e-commerce' },
    { year: '2019', event: 'Series A Funding', description: 'Raised $10M to expand platform capabilities' },
    { year: '2020', event: 'Global Expansion', description: 'Launched in 50+ new countries' },
    { year: '2021', event: 'Mobile App Launch', description: 'Released award-winning mobile application' },
    { year: '2022', event: 'AI Integration', description: 'Implemented machine learning for personalization' },
    { year: '2023', event: 'Sustainability Initiative', description: 'Achieved carbon-neutral operations' }
  ];

  return (
    <>
      <Head>
        <title>About Us - TechCommerce | Our Story & Mission</title>
        <meta name="description" content="Discover TechCommerce's journey, mission, and commitment to revolutionizing online shopping through innovative technology and exceptional customer experiences." />
        <meta name="keywords" content="e-commerce, technology, online shopping, about us, company story" />
      </Head>

      <div className="min-h-screen bg-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-gray-800 to-violet-900 py-24 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-violet-200">
                About TechCommerce
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Revolutionizing online shopping through cutting-edge technology, 
                exceptional customer experiences, and sustainable business practices
              </p>
            </div>
          </div>
        </section>

        {/* History & Story Section */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-4xl font-bold mb-8 text-violet-400">Our Story</h2>
                  <div className="space-y-6 text-gray-300">
                    <p className="text-lg leading-relaxed">
                      Founded in 2018 by a team of tech industry veterans, TechCommerce emerged 
                      from a simple observation: e-commerce platforms were becoming increasingly 
                      complex while losing sight of what matters most - the customer experience.
                    </p>
                    <p className="text-lg leading-relaxed">
                      Our founders, Sarah Chen and Marcus Rodriguez, envisioned a platform that 
                      combines the power of modern technology with intuitive design. What started 
                      as a small startup in a San Francisco garage has grown into a global platform 
                      serving millions of customers across 120+ countries.
                    </p>
                    <p className="text-lg leading-relaxed">
                      Today, we're proud to be at the forefront of e-commerce innovation, 
                      continuously pushing boundaries with AI-driven personalization, 
                      sustainable business practices, and unparalleled customer service.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-violet-600 to-gray-700 p-1 rounded-2xl">
                    <div className="bg-gray-900 p-8 rounded-xl h-80 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-4">🚀</div>
                        <h3 className="text-2xl font-bold text-violet-400 mb-2">From Garage to Global</h3>
                        <p className="text-gray-400">Serving 2M+ customers worldwide</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-gray-800 p-8 rounded-2xl">
                  <div className="text-violet-400 text-4xl mb-4">🎯</div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    To democratize e-commerce by providing businesses of all sizes with 
                    enterprise-grade technology and insights, while delivering exceptional, 
                    personalized shopping experiences to consumers worldwide.
                  </p>
                </div>
                <div className="bg-gray-800 p-8 rounded-2xl">
                  <div className="text-violet-400 text-4xl mb-4">🔭</div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    We envision a future where technology seamlessly connects businesses 
                    and consumers, creating meaningful relationships and driving sustainable 
                    economic growth across global communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-violet-400">Our Journey</h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-violet-600 h-full"></div>
                
                {milestones.map((milestone, index) => (
                  <div key={index} className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}>
                    <div className="w-1/2 pr-8 pl-8">
                      <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors">
                        <div className="text-violet-400 font-bold text-lg mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-semibold text-white mb-2">{milestone.event}</h3>
                        <p className="text-gray-300">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-violet-400 rounded-full border-4 border-gray-800"></div>
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4 text-violet-400">
              Why Choose TechCommerce?
            </h2>
            <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              We combine cutting-edge technology with customer-centric design to deliver 
              the best e-commerce experience in the industry
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:transform hover:-translate-y-2 border border-gray-700"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4 text-violet-400">Meet Our Leadership</h2>
            <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Driven by a passionate team of industry experts committed to innovation and excellence
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-gray-700 rounded-2xl p-6 group-hover:bg-gray-600 transition-colors duration-300">
                    <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-violet-500 to-gray-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                    <p className="text-violet-400 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-300 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16 text-violet-400">Our Values</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-5xl mb-4">💡</div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Innovation</h3>
                  <p className="text-gray-300">
                    We constantly push boundaries and embrace new technologies to stay ahead 
                    of industry trends and deliver exceptional solutions.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-5xl mb-4">🤝</div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Customer First</h3>
                  <p className="text-gray-300">
                    Every decision we make is guided by what's best for our customers. 
                    Their success is our success.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-5xl mb-4">🌱</div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Sustainability</h3>
                  <p className="text-gray-300">
                    We're committed to building a sustainable future through eco-friendly 
                    practices and responsible business operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-violet-900 to-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="bg-white bg-opacity-10 p-8 rounded-2xl backdrop-blur-sm">
                <div className="text-4xl font-bold text-violet-300 mb-2">2M+</div>
                <p className="text-gray-200 font-medium">Happy Customers</p>
              </div>
              <div className="bg-white bg-opacity-10 p-8 rounded-2xl backdrop-blur-sm">
                <div className="text-4xl font-bold text-violet-300 mb-2">50K+</div>
                <p className="text-gray-200 font-medium">Products Available</p>
              </div>
              <div className="bg-white bg-opacity-10 p-8 rounded-2xl backdrop-blur-sm">
                <div className="text-4xl font-bold text-violet-300 mb-2">120+</div>
                <p className="text-gray-200 font-medium">Countries Served</p>
              </div>
              <div className="bg-white bg-opacity-10 p-8 rounded-2xl backdrop-blur-sm">
                <div className="text-4xl font-bold text-violet-300 mb-2">99.9%</div>
                <p className="text-gray-200 font-medium">Uptime Reliability</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6 text-white">Join Our Journey</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Be part of the e-commerce revolution. Experience the difference that 
                technology and customer-centric design can make.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Start Shopping
                </button>
                <button className="border border-gray-500 hover:border-violet-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;