"use client";
import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const VicScroll: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return isVisible ? (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition"
      aria-label="Scroll to top"
    >
      <ArrowUp size={24} />
    </button>
  ) : null;
};

export default VicScroll;