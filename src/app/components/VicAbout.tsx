"use client";
import React from 'react';
import Image from 'next/image';

import { Heart, Users, HandHeart } from "lucide-react";

const VicAbout: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Victors Foundation</h2>
          <div className="w-20 h-1 bg-vf-orange mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Founded with a mission to create lasting change in underserved communities, we believe in the power of education, opportunity, and community support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 mb-6">
              Victors Foundation is dedicated to empowering youths, women, and children in informal settlements to reach their full potential through sustainable programs that focus on education, skills development, and community support.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-700 mb-6">
              We envision thriving communities where all individuals have access to quality education, dignified livelihoods, and the opportunity to shape their own futures.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="bg-vf-earth-light p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="text-vf-orange" size={24} />
                </div>
                <h4 className="font-semibold">Community Focus</h4>
              </div>
              
              <div className="bg-vf-blue-light p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="text-vf-blue" size={24} />
                </div>
                <h4 className="font-semibold">Compassion</h4>
              </div>
              
              <div className="bg-vf-orange-light p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                  <HandHeart className="text-vf-orange" size={24} />
                </div>
                <h4 className="font-semibold">Empowerment</h4>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 h-full flex items-center">
            <div className="relative w-full h-full min-h-[250px]">
              <Image
                src="/str.jpg"
                alt="Victor's Foundation community work"
                width={200}
                height={200}
                className="rounded-lg shadow-xl w-full h-auto hover:scale-105 transition-transform duration-300 ease-in-out"
                priority
              />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VicAbout;