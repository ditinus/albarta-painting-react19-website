"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, PhoneCall } from "lucide-react";

export default function MobileMenu() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="text-gray-800"
        aria-label="Open menu"
      >
        <svg
          width="61"
          height="48"
          viewBox="0 0 61 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="1" y="1" width="59" height="46" rx="23" fill="#0D378D" />
          <rect
            x="1"
            y="1"
            width="59"
            height="46"
            rx="23"
            stroke="#CADBFF"
            stroke-width="2"
          />
          <path
            d="M19.5 17H41.5"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
          />
          <path
            d="M19.5 24H41.5"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
          />
          <path
            d="M30.5 31L41.5 31"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-white z-50 flex flex-col transition-all duration-300 ease-in-out transform translate-x-0"
          style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-800"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-col items-center space-y-6 mt-8">
            <Link
              href="/"
              className="text-gray-800 text-xl font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-800 text-xl font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-800 text-xl font-medium"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/gallery"
              className="text-gray-800 text-xl font-medium"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/blogs"
              className="text-gray-800 text-xl font-medium"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-gray-800 text-xl font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </nav>

          <div className="mt-auto p-6 flex flex-col space-y-4">
            <div className="flex items-center justify-center">
              <div className="bg-blue-100 rounded-full p-2 mr-2">
                <PhoneCall className="h-4 w-4 text-blue-600" />
              </div>
              <span className="text-gray-800 font-medium">587-466-6647</span>
            </div>
            <Link
              href="/book"
              className="bg-blue-600 text-white px-4 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
