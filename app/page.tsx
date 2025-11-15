"use client";

import { motion } from "framer-motion";
import EnhancedHero from "./home/HeroSection";
import TechShowcase from "./home/TechShowcase";
import Testimonials from "./home/TestimonialCard";
import NewsletterSection from "./home/NewsletterSection";
import StatsSection from "./home/StatsSection";
import BlogSection from "./home/BlogSection";
import Partners from "./home/Partners";

export default function EcommerceHomepage() {
  
  return (
    <main className="min-h-screen bg-white/70">
     
      <EnhancedHero /> 
      
      <TechShowcase/>
      <Testimonials/>
      <NewsletterSection/>
      <StatsSection/>
      <BlogSection/>
      <Partners/>
      
      
    </main>
  );
}