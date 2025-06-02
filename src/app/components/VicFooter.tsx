"use client";
// components/Footer.tsx
import React, { useState, FormEvent } from 'react';
import Link from 'next/link';
import { Facebook, X, Instagram, Linkedin, Heart } from 'lucide-react'; // Import icons

const VicFooter: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Here you would typically send the newsletterEmail to your subscription service
    console.log('Newsletter signup email:', newsletterEmail);
    alert('Thank you for subscribing to our newsletter!'); // Simple feedback
    setNewsletterEmail(''); // Clear the input field
  };

  return (
    <footer className="bg-[#1a202c] text-gray-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Brand Info */}
          <div>
            <Link href="/" className="font-bold text-xl text-red-500 mb-4 block">
              Victors <span className="text-blue-600">Foundation</span>
            </Link>
            <p className="text-sm text-gray-400 mb-6">
              Empowering youths, women, and children in informal settlements through education,
              skills development, and community support.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Facebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <X size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Instagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold text-white text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-orange-500 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-400 hover:text-orange-500 text-sm">
                  Our Programs
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-gray-400 hover:text-orange-500 text-sm">
                  Our Impact
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-400 hover:text-orange-500 text-sm">
                  News & Events
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-gray-400 hover:text-orange-500 text-sm">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Get Involved */}
          <div>
            <h3 className="font-semibold text-white text-lg mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/volunteer" className="text-gray-400 hover:text-orange-500 text-sm">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/fundraise" className="text-gray-400 hover:text-orange-500 text-sm">
                  Fundraise
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-gray-400 hover:text-orange-500 text-sm">
                  Corporate Partners
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-orange-500 text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-orange-500 text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="font-semibold text-white text-lg mb-4">Newsletter</h3>
            <p className="text-sm text-gray-400 mb-4">
              Sign up to receive updates on our work and how you can get involved.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex">
              <input
                type="email"
                placeholder="Your email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="w-full p-3 rounded-l-md border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-r-md transition duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
          <p>&copy; {new Date().getFullYear()} Victors Foundation. All rights reserved.</p>
          <p className="flex items-center">
            mBoKa cODE <Heart className="text-red-500 h-4 w-4 mx-1" fill="currentColor" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default VicFooter;