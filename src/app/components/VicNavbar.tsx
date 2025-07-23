// components/Navbar.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import MobileMenu from './MobileMenu';

const VicNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null); // Ref for the MobileMenu's outermost div

  // Function to close the menu
  const closeMenu = () => setIsMenuOpen(false);

  // Effect to handle clicks outside the menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Get a reference to the hamburger button to prevent immediate re-closing
      const hamburgerButton = document.getElementById('mobile-menu-toggle');

      if (
        isMenuOpen && // Only run if the menu is actually open
        menuRef.current && // Ensure the menu DOM element exists
        !menuRef.current.contains(event.target as Node) && // Click is NOT inside the menu itself
        (!hamburgerButton || !hamburgerButton.contains(event.target as Node)) // Click is NOT on the hamburger button
      ) {
        closeMenu();
      }
    };

    // Add event listener when the menu is open
    // IMPORTANT: When menu is open, we disable body scrolling so only the menu scrolls if needed.
    // When menu is closed, we re-enable body scrolling.
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Disable scroll on body
    } else {
      document.removeEventListener('mousedown', handleClickOutside); // Ensure it's removed when closed
      document.body.style.overflow = 'unset'; // Re-enable scroll on body
    }

    // Cleanup: remove event listener and reset body overflow when component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]); // Re-run effect only when isMenuOpen changes

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
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.jpg" alt="Victor Foundation Logo" width={150} height={50} />
        </Link>

        {/* Desktop Navigation */}
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
          <Link href="/donate">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-5 rounded-lg shadow-md transition duration-300">
              Donate Now
            </button>
          </Link>
        </nav>

        {/* Mobile Menu Button (hamburger icon) */}
        <div className="lg:hidden">
          <button
            id="mobile-menu-toggle" // ID for the hamburger button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-700 hover:text-gray-900 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </div>

      {/* NO BACKDROP DIV HERE */}
      {/* The content underneath will now be visible */}

      {/* Render the MobileMenu component, passing state and the ref */}
      {isMenuOpen && (
        <MobileMenu
          isOpen={isMenuOpen}
          onClose={closeMenu}
          menuRef={menuRef} // Pass the ref to MobileMenu
        />
      )}
    </header>
  );
};

export default VicNavbar;