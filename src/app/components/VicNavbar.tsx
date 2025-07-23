// components/Navbar.tsx
'use client'; // This directive is crucial for client-side hooks like useState, useEffect, useRef

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react'; // Import the 'Menu' (hamburger) icon
import MobileMenu from './MobileMenu'; // Import the MobileMenu component

const VicNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null); // Ref for the MobileMenu's outermost div to detect outside clicks

  // Function to close the menu
  const closeMenu = () => setIsMenuOpen(false);

  // Effect to handle clicks outside the menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // If the menu is open AND the click is NOT inside the menu
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu(); // Close the menu
      }
    };

    // Add event listener when the menu is open
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Cleanup: remove event listener when component unmounts or menu closes
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Optional: Close menu when screen size changes (e.g., from mobile to desktop view)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMenuOpen) { // Tailwind's 'lg' breakpoint is 1024px
        closeMenu();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo - visible on all screen sizes */}
        <Link href="/">
          <Image
            src="/logo.jpg"
            alt="Victors Foundation Logo"
            width={150} // Adjust width as needed
            height={100} // Adjust height as needed
            priority
            className="full object-cover"
          />
        </Link>

        {/* Desktop Navigation - hidden on small screens */}
        <nav className="hidden lg:flex space-x-8">
          <Link href="/about-us" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors">
            About Us
          </Link>
          <Link href="/programs" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors">
            Programs
          </Link>
          <Link href="/our-impact" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors">
            Our Impact
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors">
            Contact
          </Link>
          <Link href="/donate"> {/* Modern Link syntax, no <a> tag child needed */}
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-5 rounded-lg shadow-md transition duration-300">
              Donate Now
            </button>
          </Link>
        </nav>

        {/* Mobile Menu Button (hamburger icon from Lucide) - hidden on large screens */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-700 hover:text-gray-900 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <Menu className="w-7 h-7" /> {/* Lucide Menu (hamburger) icon */}
          </button>
        </div>
      </div>

      {/* Render the MobileMenu component, passing state and the ref */}
      {isMenuOpen && (
        <div ref={menuRef}> {/* Attach the ref to this container that holds the MobileMenu */}
          <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
        </div>
      )}
    </header>
  );
};

export default VicNavbar;