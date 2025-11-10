"use client";

import React, { useState } from 'react';
import Head from 'next/head';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSubmitMessage('Thank you for your message! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'support@techcommerce.com',
      description: 'Send us an email anytime'
    },
    {
      icon: '📞',
      title: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 6pm'
    },
    {
      icon: '🏢',
      title: 'Office',
      value: '123 Commerce Street, Tech City, TC 10001',
      description: 'Visit our headquarters'
    }
  ];

  const socialLinks = [
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'Facebook', icon: '📘', url: '#' },
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'Instagram', icon: '📷', url: '#' }
  ];

  return (
    <>
      <Head>
        <title>Contact Us - TechCommerce</title>
        <meta name="description" content="Get in touch with TechCommerce support team" />
      </Head>

      <div className="min-h-screen bg-gray-900 text-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-800 to-violet-900 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-gray-300 mb-8">
                We're here to help. Get in touch with our support team.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-gray-700 p-8 rounded-lg">
                  <h2 className="text-2xl font-bold mb-6 text-violet-400">Send us a Message</h2>
                  
                  {submitMessage && (
                    <div className="bg-green-600 text-white p-4 rounded-lg mb-6">
                      {submitMessage}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent text-white"
                        placeholder="Enter your full name"
                        aria-required="true"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent text-white"
                        placeholder="Enter your email address"
                        aria-required="true"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent text-white"
                        aria-required="true"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="technical">Technical Support</option>
                        <option value="billing">Billing Issue</option>
                        <option value="partnership">Partnership</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent text-white resize-vertical"
                        placeholder="Enter your message"
                        aria-required="true"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-violet-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-violet-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label={isSubmitting ? 'Submitting form' : 'Submit contact form'}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </div>

                {/* Contact Information */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-6 text-violet-400">Get in Touch</h2>
                    <p className="text-gray-300 mb-8">
                      Have questions about our platform? Need assistance with your account? 
                      Our support team is ready to help you with any inquiries.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="text-2xl mt-1">{info.icon}</div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">{info.title}</h3>
                          <p className="text-violet-400">{info.value}</p>
                          <p className="text-gray-400 text-sm">{info.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
                    <div className="flex space-x-4">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.url}
                          className="bg-gray-700 w-12 h-12 rounded-lg flex items-center justify-center hover:bg-violet-600 transition-colors duration-300"
                          aria-label={`Follow us on ${social.name}`}
                        >
                          <span className="text-xl">{social.icon}</span>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="bg-gray-700 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-white">Business Hours</h3>
                    <div className="space-y-2 text-gray-300">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span>9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span>10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-violet-400">Visit Our Office</h2>
            <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg overflow-hidden">
              <div className="bg-gray-600 h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-4">🗺️</div>
                  <p className="text-gray-300">Interactive Map Integration</p>
                  <p className="text-sm text-gray-400 mt-2">
                    [Map would be integrated here using Google Maps or similar service]
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">TechCommerce Headquarters</h3>
                <p className="text-gray-300">123 Commerce Street, Tech City, TC 10001</p>
                <p className="text-gray-400 text-sm mt-2">
                  Free parking available • Wheelchair accessible • Public transport nearby
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;