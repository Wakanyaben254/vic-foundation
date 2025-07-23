// components/MobileMenu.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  // We're now passing the ref directly to the MobileMenu's outer div
  menuRef: React.RefObject<HTMLDivElement | null>;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, menuRef }) => {
  return (
    <div
      ref={menuRef} // Attach the ref here
      // Key changes: w-3/4 for width, top-0 right-0 for position
      // `translate-x-full` pushes it off-screen to the right
      // `translate-x-0` brings it into view
      // Removed 'inset-0' and replaced with specific top/right/h-full/w-3/4
      className={`fixed top-0 left-0 w-3/4 h-full z-40 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } lg:hidden`} // `lg:hidden` ensures it only appears on small screens
    >
      <div className="flex justify-between items-center p-4 border-b">
        {/* Logo - clicking it also closes the menu */}
        <Link href="/" onClick={onClose}>
          <Image src="/logo.jpg" alt="Victor Foundation Logo" width={120} height={40} />
        </Link>
        {/* Close Button (X icon from Lucide) */}
        <button onClick={onClose} className="p-2 text-gray-700 hover:text-gray-900 focus:outline-none">
          <X className="w-6 h-6" />
        </button>
      </div>

      <nav className="flex flex-col p-4 space-y-4">
        {/* Navigation Links */}
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
        {/* Donate Button */}
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