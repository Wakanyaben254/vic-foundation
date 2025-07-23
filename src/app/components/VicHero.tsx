// components/HeroSectionKenya.tsx
"use client"; // This line is necessary for Next.js 13+ App Router for client-side features

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const VicHero: React.FC = () => {
  return (
    // Outer container matching the card-like structure in the image
    <section className="bg-[#F8FFF8] p-4 sm:p-6 md:p-10 lg:p-12 rounded-2xl shadow-xl mx-auto my-8 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Column: Text Content */}
        <div className="lg:pr-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
            <span className="text-red-500">Empowering</span>{' '}
            <span className="text-white-500">Communities,</span>{' '}
            <span className="text-blue-600">Transforming Lives</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-xl">
           Victors  Foundation is dedicated to uplifting youths, women, and children in informal settlements through education, skills development, and community support programs.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/apply" >
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-md transition duration-300 ease-in-out">
                Apply Funding
              </button>
            </Link>
            <Link href="/learn" >
              <button className="bg-transparent border-2 border-red-600 hover:bg-red-600 hover:text-white text-red-600 font-bold py-3 px-8 rounded-lg text-lg shadow-md transition duration-300 ease-in-out">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="relative h-64 sm:h-80 md:h-96 lg:h-[450px] rounded-2xl overflow-hidden shadow-xl hover:scale-105  active:scale-105 focus:scale-105 transition-transform duration-300 ease-in-out">
          <Image
            src="/lap.jpg" // Placeholder: Replace with your actual image path
            alt="Screens displaying various visuals, symbolizing interconnected communities"
            fill
            
            className="object-cover z-0"   
            quality={80}
            priority // Prioritize loading for LCP
          />
          {/* A subtle dark overlay if the image itself is too bright, though the original is already dark */}
          <div className="absolute inset-0 bg-black opacity-10 z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default VicHero;