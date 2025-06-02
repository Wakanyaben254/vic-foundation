"use client";
import React from 'react';
import Image from 'next/image';
import { Users, Building2, BookOpen } from 'lucide-react';

const VicPrograms:React.FC = () => {
  return (
    <section id ="programs" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Our Programs
          <span className="block w-20 h-1 bg-blue-500 mx-auto mt-2"></span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Through our integrated programs, we address the unique needs of youths, women, and children
          in informal settlements.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Program Card 1: Youth Empowerment */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <div className="relative w-full h-64">
              <Image
                src="/eng.jpg" 
                alt="Youth Empowerment"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex items-center mb-4">
                <Users className="text-blue-500 h-8 w-8 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Youth Empowerment</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Equipping young people with skills, mentorship, and opportunities to become
                self-reliant and impactful community leaders.
              </p>
              <div className="mt-auto text-left"> {/* mt-auto pushes to bottom */}
                <h4 className="font-semibold text-gray-700 mb-2">Key Activities:</h4>
                <ul className="list-none p-0 m-0 text-sm text-gray-600 grid grid-cols-2 gap-2">
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>Leadership Training
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>Digital Skills
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>Entrepreneurship
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>Career Guidance
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Program Card 2: Women's Development */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <div className="relative w-full h-64">
              <Image
                src="/cmr.jpg" // Replace with your actual image path
                alt="Women's Development"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex items-center mb-4">
                <Building2 className="text-blue-500 h-8 w-8 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Womens Development</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Supporting women through skills training, financial literacy, and business
                development to enhance economic independence.
              </p>
              <div className="mt-auto text-left">
                <h4 className="font-semibold text-gray-700 mb-2">Key Activities:</h4>
                <ul className="list-none p-0 m-0 text-sm text-gray-600 grid grid-cols-2 gap-2">
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>Business Skills
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>Literacy Programs
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>Health Education
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>Advocacy Training
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Program Card 3: Children's Education */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <div className="relative w-full h-64">
              <Image
                src="/sch1.jpg" // Replace with your actual image path
                alt="Children's Education"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex items-center mb-4">
                <BookOpen className="text-blue-500 h-8 w-8 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Childrens Education</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Providing educational support, safe spaces for learning, and enrichment activities
                to help children thrive academically and socially.
              </p>
              <div className="mt-auto text-left">
                <h4 className="font-semibold text-gray-700 mb-2">Key Activities:</h4>
                <ul className="list-none p-0 m-0 text-sm text-gray-600 grid grid-cols-2 gap-2">
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>After-school Programs
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>Educational Supplies
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>Mentorship
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>Nutritional Support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VicPrograms;