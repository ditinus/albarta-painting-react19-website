import Image from "next/image"
import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <div className="bg-black text-white min-h-[400px] p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-sm font-light uppercase tracking-wider">LET'S</h2>
            <h1 className="text-3xl md:text-4xl font-bold">GET IN TOUCH</h1>
          </div>
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-full transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-4"></div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="bg-white p-2 w-48 h-16 flex items-center justify-center rounded">
              <Image
                src="/placeholder.svg?height=60&width=180"
                alt="Alberta Global Painting Logo"
                width={180}
                height={60}
                className="object-contain"
              />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              The Alberta Global Painting logo represents the essence of quality work and exceptional service. Our brand
              features a clean, modern brushstroke aesthetic, showcasing the company's commitment to precision and
              detail.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium mb-4">Quick Links</h3>
            <nav>
              <ul className="space-y-2">
                {["Home", "About", "Services", "Gallery", "Contact", "Blog"].map((item) => (
                  <li key={item}>
                    <Link href={`/${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-medium mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-400">
                <Phone size={16} className="text-blue-500" />
                <span>+1 (587) 998-9547</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Mail size={16} className="text-blue-500" />
                <span>info@albertaglobalpainting.com</span>
              </div>
              <div className="flex items-start gap-2 text-gray-400">
                <MapPin size={16} className="text-blue-500 mt-1" />
                <span>219 Brightmotive Green SE, Calgary, AB T2Z 0H1, Canada</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-500">
          © 2024 Alberta Global Painting. All rights reserved.
        </div>
      </div>
    </div>
  )
}

