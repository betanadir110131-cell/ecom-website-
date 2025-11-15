import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'About Us - TechCommerce | Our Story & Mission',
  description:
    "Discover TechCommerce's journey, mission, and commitment to revolutionizing online shopping through innovative technology and exceptional customer experiences.",
  keywords: ['e-commerce', 'technology', 'online shopping', 'about us', 'company story'],
};

const AboutPage: React.FC = () => {
  const features = [
    {
      icon: '🚀',
      title: 'Lightning Fast',
      description: 'Optimized performance with instant page loads and seamless navigation using Next.js and edge computing',
    },
    {
      icon: '🛡️',
      title: 'Secure Transactions',
      description: 'Bank-level 256-bit encryption and PCI DSS compliant payment processing for all transactions',
    },
    {
      icon: '🌍',
      title: 'Global Reach',
      description: 'Worldwide shipping across 120+ countries with multi-currency and multi-language support',
    },
    {
      icon: '📱',
      title: 'Mobile First',
      description: 'Progressive Web App with responsive design optimized for all devices and screen sizes',
    },
    {
      icon: '🤖',
      title: 'AI Powered',
      description: 'Smart recommendations and personalized shopping experiences using machine learning',
    },
    {
      icon: '🌱',
      title: 'Sustainable',
      description: 'Carbon-neutral shipping and eco-friendly packaging options available',
    },
    {
      icon: '💬',
      title: '24/7 Support',
      description: 'Round-the-clock customer service with live chat, email, and phone support',
    },
    {
      icon: '🔒',
      title: 'Privacy First',
      description: 'GDPR compliant with strict data protection and privacy policies',
    },
  ];

  const teamMembers = [
    { name: 'Sarah Chen', role: 'CEO & Founder', bio: 'Former tech lead at Amazon with 15+ years in e-commerce' },
    { name: 'Marcus Rodriguez', role: 'CTO', bio: 'Ex-Google engineer specializing in scalable architecture' },
    { name: 'Priya Patel', role: 'Head of Product', bio: 'Product management expert from Shopify' },
    { name: 'David Kim', role: 'Head of Operations', bio: 'Supply chain specialist with global logistics experience' },
  ];

  const milestones = [
    { year: '2018', event: 'Company Founded', description: 'Started with a vision to revolutionize e-commerce' },
    { year: '2019', event: 'Series A Funding', description: 'Raised $10M to expand platform capabilities' },
    { year: '2020', event: 'Global Expansion', description: 'Launched in 50+ new countries' },
    { year: '2021', event: 'Mobile App Launch', description: 'Released award-winning mobile application' },
    { year: '2022', event: 'AI Integration', description: 'Implemented machine learning for personalization' },
    { year: '2023', event: 'Sustainability Initiative', description: 'Achieved carbon-neutral operations' },
  ];

  return (
    <div className="min-h-screen bg-white text-[#31694E]">

      {/* HERO */}
      <section className="py-24 bg-gradient-to-r from-[#31694E] to-[#658C58] text-white text-center">
        <h1 className="text-6xl font-bold mb-6">About TechCommerce</h1>
        <p className="text-xl max-w-3xl mx-auto opacity-90">
          Revolutionizing online shopping through innovation, customer-first design, and sustainable technology.
        </p>
      </section>

      {/* STORY */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-[#31694E]">Our Story</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Founded in 2018, TechCommerce was built on a simple belief: e-commerce should be powerful,
                intuitive, and customer-centered.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                What began as a small garage project has evolved into a global platform serving millions of
                customers worldwide.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, we continue pushing boundaries with AI-driven personalization, eco-conscious initiatives,
                and next-generation technology.
              </p>
            </div>

            <div className="rounded-2xl shadow-xl p-10 border border-[#BBC863] bg-white">
              <div className="text-6xl mb-4 text-center">🚀</div>
              <h3 className="text-2xl font-bold text-center text-[#31694E] mb-2">
                From Garage to Global
              </h3>
              <p className="text-gray-600 text-center">Serving 2M+ customers worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION + VISION */}
      <section className="py-20 bg-[#F0E491]/20">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12">
          <div className="p-8 rounded-xl border border-[#BBC863] bg-white shadow-md">
            <div className="text-4xl mb-2">🎯</div>
            <h3 className="text-2xl font-semibold text-[#31694E] mb-3">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To democratize e-commerce by empowering businesses and elevating the customer experience.
            </p>
          </div>

          <div className="p-8 rounded-xl border border-[#BBC863] bg-white shadow-md">
            <div className="text-4xl mb-2">🔭</div>
            <h3 className="text-2xl font-semibold text-[#31694E] mb-3">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To build a world where technology seamlessly connects people, products, and opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20">
        <h2 className="text-4xl font-bold text-center mb-10 text-[#31694E]">Our Journey</h2>
        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#BBC863]"></div>

          {milestones.map((m, i) => (
            <div className={`flex items-start mb-12 ${i % 2 ? 'flex-row-reverse text-right' : ''}`} key={i}>
              <div className="w-1/2 px-6">
                <div className="bg-white p-6 rounded-lg shadow-md border border-[#BBC863]">
                  <div className="text-[#658C58] font-bold">{m.year}</div>
                  <div className="text-xl font-semibold text-[#31694E]">{m.event}</div>
                  <p className="text-gray-700">{m.description}</p>
                </div>
              </div>

              <div className="w-4 h-4 bg-[#31694E] rounded-full border-4 border-white absolute left-1/2 transform -translate-x-1/2"></div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-[#F0E491]/15">
        <h2 className="text-4xl font-bold text-center text-[#31694E] mb-12">Why Choose Us?</h2>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-8 bg-white rounded-xl shadow-md border border-[#BBC863] text-center hover:shadow-lg transition"
            >
              <div className="text-4xl mb-3">{f.icon}</div>
              <h3 className="text-xl font-semibold text-[#31694E] mb-2">{f.title}</h3>
              <p className="text-gray-700">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="py-20">
        <h2 className="text-4xl font-bold text-center text-[#31694E] mb-12">Meet Our Leadership</h2>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10 px-4">
          {teamMembers.map((m, i) => (
            <div key={i} className="p-8 bg-white border border-[#BBC863] rounded-xl shadow-md text-center">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#BBC863] to-[#658C58] mx-auto flex items-center justify-center text-white text-2xl font-bold mb-4">
                {m.name.split(' ').map((n) => n[0])}
              </div>
              <h3 className="text-xl font-semibold text-[#31694E]">{m.name}</h3>
              <p className="text-[#658C58] font-medium">{m.role}</p>
              <p className="text-gray-700 text-sm mt-2">{m.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#31694E] to-[#658C58] text-center text-white">
        <h2 className="text-4xl font-bold mb-6">Join Our Journey</h2>
        <p className="max-w-2xl mx-auto text-lg opacity-90 mb-8">
          Experience the future of e-commerce—powered by innovation, simplicity, and customer love.
        </p>

        <div className="flex justify-center gap-6">
          <Link href="/shop">
  <button className="px-8 py-3 bg-[#F0E491] text-[#31694E] font-semibold rounded-lg hover:bg-[#BBC863] transition cursor-pointer">
  Start Shopping
</button>
</Link>
          <Link href="/"><button className="px-8 py-3 border-2 border-white font-semibold rounded-lg hover:bg-white hover:text-[#31694E] transition cursor-pointer">
            Learn More
          </button></Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
