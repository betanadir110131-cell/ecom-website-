import React from 'react';

export const metadata = {
  title: 'Our Services - TechCommerce',
  description: 'Explore our comprehensive e-commerce services',
};

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: '🛒',
      title: 'Product Marketplace',
      description: 'Extensive catalog featuring electronics, fashion, home goods, and more from trusted sellers worldwide.',
      features: ['Verified Sellers', 'Product Reviews', 'Price Comparison', 'Wishlist Feature']
    },
    {
      icon: '🚚',
      title: 'Shipping Solutions',
      description: 'Flexible shipping options including express delivery, international shipping, and real-time tracking.',
      features: ['Express Delivery', 'Global Shipping', 'Real-time Tracking', 'Free Shipping Options']
    },
    {
      icon: '💳',
      title: 'Secure Payments',
      description: 'Multiple payment methods with bank-level security and fraud protection for safe transactions.',
      features: ['Credit/Debit Cards', 'Digital Wallets', 'Bank Transfers', 'Buy Now Pay Later']
    },
    {
      icon: '🛡️',
      title: 'Buyer Protection',
      description: 'Comprehensive protection program ensuring safe transactions and satisfaction guarantee.',
      features: ['Money Back Guarantee', 'Return Policy', 'Dispute Resolution', 'Quality Assurance']
    },
    {
      icon: '📞',
      title: 'Customer Support',
      description: '24/7 customer service with dedicated support teams for technical and purchase assistance.',
      features: ['24/7 Live Chat', 'Email Support', 'Phone Support', 'Help Center']
    },
    {
      icon: '📊',
      title: 'Business Analytics',
      description: 'Advanced analytics and insights for sellers to optimize their store performance and sales.',
      features: ['Sales Analytics', 'Customer Insights', 'Inventory Management', 'Performance Reports']
    }
  ];

  return (
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-800 to-violet-900 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
              <p className="text-xl text-gray-300 mb-8">
                Comprehensive e-commerce solutions designed to meet all your online shopping needs
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div 
                    key={index}
                    className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-3 text-violet-400">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <span className="w-2 h-2 bg-violet-500 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Additional Services Section */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-violet-400">
                Additional Features
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-800 p-8 rounded-lg">
                  <h3 className="text-2xl font-semibold mb-4 text-white">For Buyers</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <span className="text-violet-400 mr-3">✓</span>
                      Personalized recommendations based on browsing history
                    </li>
                    <li className="flex items-center">
                      <span className="text-violet-400 mr-3">✓</span>
                      Easy returns and refunds process
                    </li>
                    <li className="flex items-center">
                      <span className="text-violet-400 mr-3">✓</span>
                      Loyalty rewards and cashback programs
                    </li>
                    <li className="flex items-center">
                      <span className="text-violet-400 mr-3">✓</span>
                      Multi-language and currency support
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-800 p-8 rounded-lg">
                  <h3 className="text-2xl font-semibold mb-4 text-white">For Sellers</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <span className="text-violet-400 mr-3">✓</span>
                      Easy store setup and management
                    </li>
                    <li className="flex items-center">
                      <span className="text-violet-400 mr-3">✓</span>
                      Marketing and promotional tools
                    </li>
                    <li className="flex items-center">
                      <span className="text-violet-400 mr-3">✓</span>
                      Inventory management system
                    </li>
                    <li className="flex items-center">
                      <span className="text-violet-400 mr-3">✓</span>
                      Seller protection program
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-violet-700 to-violet-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers and experience the future of e-commerce today.
            </p>
            <button className="bg-white text-violet-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Explore Our Platform
            </button>
          </div>
        </section>
      </div>
  );
};

export default ServicesPage;