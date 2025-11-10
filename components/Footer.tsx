"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Facebook, Youtube, Instagram, Linkedin, LucideIcon } from 'lucide-react';

// Social Icon Component
interface SocialIconProps {
  Icon: LucideIcon;
  href: string;
  label: string;
}

const SocialIcon = ({ Icon, href, label }: SocialIconProps) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors duration-300 mx-2"
    aria-label={label}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <Icon className="w-5 h-5" />
  </motion.a>
);

export default function Footer() {
    const [email, setEmail] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setIsSubscribed(true);
            setTimeout(() => setIsSubscribed(false), 3000);
            setEmail("");
        }
    };

    const quickLinks = ["About Us", "Products", "Deals", "Blog"];
    const customerService = ["Contact Us", "Shipping Info", "Returns", "FAQ"];

    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <h3 className="text-xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                TechHub
                            </span>
                        </h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Your trusted partner for premium technology products and innovative solutions.
                        </p>
                        
                        <div className="flex flex-col">
                            <h4 className="text-lg font-semibold mb-4">Connect with us</h4>
                            <div className="flex items-center space-x-3">
                                <SocialIcon Icon={Facebook} href="https://www.facebook.com/boisafsoftware" label="Facebook" />
                                <SocialIcon Icon={Youtube} href="https://youtube.com" label="YouTube" />
                                <SocialIcon Icon={Instagram} href="https://www.instagram.com/boisafsoftware" label="Instagram" />
                                <SocialIcon Icon={Linkedin} href="https://linkedin.com/company/boisaf" label="LinkedIn" />
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((item) => (
                                <li key={item}>
                                    <motion.a 
                                        href="#" 
                                        className="text-gray-400 hover:text-white transition-colors duration-300 block py-1"
                                        whileHover={{ x: 5 }}
                                    >
                                        {item}
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Customer Service</h4>
                        <ul className="space-y-3">
                            {customerService.map((item) => (
                                <li key={item}>
                                    <motion.a 
                                        href="#" 
                                        className="text-gray-400 hover:text-white transition-colors duration-300 block py-1"
                                        whileHover={{ x: 5 }}
                                    >
                                        {item}
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
                        <p className="text-gray-400 mb-4 leading-relaxed">
                            Get updates on new products, exclusive deals, and special promotions.
                        </p>
                        <form onSubmit={handleSubscribe} className="space-y-3">
                            <motion.div whileFocus={{ scale: 1.02 }}>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                                    required
                                />
                            </motion.div>
                            <motion.button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium"
                                whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)" }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Subscribe
                            </motion.button>
                        </form>
                        {isSubscribed && (
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="text-green-400 mt-3 font-medium"
                            >
                                ✅ Thank you for subscribing!
                            </motion.p>
                        )}
                    </div>
                </div>

                {/* Bottom Section */}
                <motion.div 
                    className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
                        &copy; 2024 TechHub. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <motion.a 
                            href="#" 
                            className="text-gray-400 hover:text-white transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                        >
                            Privacy Policy
                        </motion.a>
                        <motion.a 
                            href="#" 
                            className="text-gray-400 hover:text-white transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                        >
                            Terms of Service
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}