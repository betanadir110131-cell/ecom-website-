"use client";

import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactClient: React.FC = () => {
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
      <div className="min-h-screen bg-white text-gray-800">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#31694E] to-[#658C58] py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-[#F0E491] mb-8">
                We're here to help. Get in touch with our support team.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                  <h2 className="text-2xl font-bold mb-6 text-[#31694E]">Send us a Message</h2>
                  
                  {submitMessage && (
                    <div className="bg-[#658C58] text-white p-4 rounded-lg mb-6">
                      {submitMessage}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#31694E] focus:border-transparent text-gray-800 transition-colors"
                        placeholder="Enter your full name"
                        aria-required="true"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#31694E] focus:border-transparent text-gray-800 transition-colors"
                        placeholder="Enter your email address"
                        aria-required="true"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#31694E] focus:border-transparent text-gray-800 transition-colors"
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
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#31694E] focus:border-transparent text-gray-800 resize-vertical transition-colors"
                        placeholder="Enter your message"
                        aria-required="true"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#31694E] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#658C58] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02]"
                      aria-label={isSubmitting ? 'Submitting form' : 'Submit contact form'}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : 'Send Message'}
                    </button>
                  </form>
                </div>

                {/* Contact Information */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-6 text-[#31694E]">Get in Touch</h2>
                    <p className="text-gray-600 mb-8">
                      Have questions about our platform? Need assistance with your account? 
                      Our support team is ready to help you with any inquiries.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                        <div className="text-2xl text-[#658C58] mt-1">{info.icon}</div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800">{info.title}</h3>
                          <p className="text-[#31694E] font-medium">{info.value}</p>
                          <p className="text-gray-600 text-sm">{info.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-4 text-gray-800">Follow Us</h3>
                    <div className="flex space-x-4">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.url}
                          className="bg-[#F0E491] w-12 h-12 rounded-lg flex items-center justify-center hover:bg-[#BBC863] transition-colors duration-300 transform hover:scale-110"
                          aria-label={`Follow us on ${social.name}`}
                        >
                          <span className="text-xl">{social.icon}</span>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">Business Hours</h3>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span>Monday - Friday</span>
                        <span className="font-semibold text-[#31694E]">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span>Saturday</span>
                        <span className="font-semibold text-[#31694E]">10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span>Sunday</span>
                        <span className="font-semibold text-[#31694E]">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#31694E]">Visit Our Office</h2>
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-gradient-to-br from-[#F0E491] to-[#BBC863] h-64 flex items-center justify-center">
                <div className="text-center text-gray-800">
                  <div className="text-4xl mb-4">🗺️</div>
                  <p className="text-lg font-semibold">Interactive Map Integration</p>
                  <p className="text-sm mt-2">
                    [Map would be integrated here using Google Maps or similar service]
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">TechCommerce Headquarters</h3>
                <p className="text-[#31694E]">123 Commerce Street, Tech City, TC 10001</p>
                <p className="text-gray-600 text-sm mt-2">
                  Free parking available • Wheelchair accessible • Public transport nearby
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#31694E]">Frequently Asked Questions</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                  <span className="text-[#658C58] mr-2">❓</span>
                  How quickly do you respond?
                </h3>
                <p className="text-gray-600">We typically respond to all inquiries within 24 hours during business days.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                  <span className="text-[#658C58] mr-2">❓</span>
                  Do you offer technical support?
                </h3>
                <p className="text-gray-600">Yes, we provide comprehensive technical support for all our products and services.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
};

export default ContactClient;