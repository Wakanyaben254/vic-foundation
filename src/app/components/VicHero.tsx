"use client";
import React from 'react';
import Image from 'next/image';


const VicHero: React.FC  = () => {
  return (
    <section className="relative w-full min-h-[60vh] flex items-center justify-center text-white">
      <Image
        src="/lap.jpg"
        alt="Children smiling"
        fill
        className="object-cover z-0"
        priority
      />
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-left px-4">
        <h1 className=" text-5xl font-extrabold max-w-4xl leading-tight text-left">
        <span className="text-red-500">Empowering</span> Communities, <span className="text-blue-600">Transforming</span> Lives

        </h1>
        <p className="mt-6 max-w-xl mx-auto text-lg font-medium text-black-500 ">
         Victor&#39;s Foundation is dedicated to uplifting youths, women, and children in informal settlements through education, skills development, and community support programs
        </p>
      
        <div className=" flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-red-600 px-6 py-3 rounded text-white font-semibold hover:bg-blue-700 w-full sm:w-auto">
            Apply For Support
          </button>
          
        </div>
      </div>
    </section>
  );
}
export default VicHero;    