"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, PhoneCall } from "lucide-react"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(true)} className="text-gray-800" aria-label="Open menu">
        <Menu className="h-6 w-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col">
          <div className="flex justify-end p-4">
            <button onClick={() => setIsOpen(false)} className="text-gray-800" aria-label="Close menu">
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-col items-center space-y-6 mt-8">
            <Link href="/" className="text-gray-800 text-xl font-medium" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/about" className="text-gray-800 text-xl font-medium" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/services" className="text-gray-800 text-xl font-medium" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link href="/gallery" className="text-gray-800 text-xl font-medium" onClick={() => setIsOpen(false)}>
              Gallery
            </Link>
            <Link href="/blog" className="text-gray-800 text-xl font-medium" onClick={() => setIsOpen(false)}>
              Blog
            </Link>
            <Link href="/contact" className="text-gray-800 text-xl font-medium" onClick={() => setIsOpen(false)}>
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
  )
}

