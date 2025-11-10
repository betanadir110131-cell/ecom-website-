"use client";

import Hero from "@/app/home/HeroSection";
import Categories from "@/app/home/Categories";
import Testimonials from "@/app/home/TestimonialCard";
import { ProductGrid } from './home/ProductGrid';


export default function EcommerceHomepage() {
  
  return (
    <main className="min-h-screen bg-gray-900">
     
      <Hero />
       <main className="min-h-screen bg-gray-900 py-8">
      <ProductGrid 
        itemsPerPage={8}
        showFilters={true}
      />
    </main>
      
      <Categories />
      <Testimonials/>
      
    </main>
  );
}