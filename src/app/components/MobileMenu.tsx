// components/MobileMenu.tsx
'use client'; // This directive is crucial for client-side hooks like useRouter if you were to use it here

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X } from 'lucide-react'; // Import the 'X' icon for the close button

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } lg:hidden`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        {/* Logo - clicking it also closes the menu */}
        <Link href="/" onClick={onClose}>
          {/* Using the logo from your provided image */}
          <Image src="/logo.jpg" alt="Victor Foundation Logo" width={120} height={40} />
        </Link>
        {/* Close Button (X icon from Lucide) */}
        <button onClick={onClose} className="p-2 text-gray-700 hover:text-gray-900 focus:outline-none">
          <X className="w-6 h-6" /> {/* Lucide X icon */}
        </button>
      </div>

      <nav className="flex flex-col p-4 space-y-4">
        {/* Navigation Links - based on your provided menu */}
        <Link href="/about-us" className="text-xl font-semibold text-gray-800 hover:text-blue-600" onClick={onClose}>
          About Us
        </Link>
        <Link href="/programs" className="text-xl font-semibold text-gray-800 hover:text-blue-600" onClick={onClose}>
          Programs
        </Link>
        <Link href="/our-impact" className="text-xl font-semibold text-gray-800 hover:text-blue-600" onClick={onClose}>
          Our Impact
        </Link>
        <Link href="/contact" className="text-xl font-semibold text-gray-800 hover:text-blue-600" onClick={onClose}>
          Contact
        </Link>
        {/* Donate Button - styled as a full-width button for mobile */}
        <Link href="/donate" className="block text-center mt-6">
          <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300" onClick={onClose}>
            Donate Now
          </button>
        </Link>
      </nav>
    </div>
  );
};

export default MobileMenu;