import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/public/logo.svg";
import { Button } from "./button";
export default function Footer() {
  return (
    <div className="bg-black text-white min-h-[400px] p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-[44px] font-light uppercase tracking-wider">
              LET'S
            </h2>
            <h1 className="text-3xl md:text-[77px] font-bold">GET IN TOUCH</h1>
          </div>
          <Link
            href="/contact"
            className=""
          >
            <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm  rounded-full transition-colors ">
              Contact Us{" "}
              <svg
                width="40"
                height="40"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="0.40918" width="31" height="30" rx="15" fill="white" />
                <path
                  d="M22.5 9.40918C22.5 8.85689 22.0523 8.40918 21.5 8.40918L12.5 8.40918C11.9477 8.40918 11.5 8.85689 11.5 9.40918C11.5 9.96146 11.9477 10.4092 12.5 10.4092L20.5 10.4092L20.5 18.4092C20.5 18.9615 20.9477 19.4092 21.5 19.4092C22.0523 19.4092 22.5 18.9615 22.5 18.4092L22.5 9.40918ZM10.2071 22.1163L22.2071 10.1163L20.7929 8.70207L8.79289 20.7021L10.2071 22.1163Z"
                  fill="#0D378D"
                />
              </svg>
            </Button>
          </Link>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-4"></div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-0.5 ">
          {/* Logo and Description */}
          <div className="space-y-6 my-5">
            <div className=" p-2 w-48 h-16 flex items-center justify-center rounded">
              <Image
                src={logo}
                alt="Alberta Global Painting Logo"
                width={180}
                height={60}
                className="object-contain"
              />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              The Alberta Global Painting logo represents the essence of quality
              work and exceptional service. Our brand features a clean, modern
              brushstroke aesthetic, showcasing the company's commitment to
              precision and detail.
            </p>
          </div>

          {/* Quick Links */}
          <div className=" md:place-self-center ">
            <h3 className="font-medium mb-4">Quick Links</h3>
            <nav>
              <ul className="space-y-2">
                {[
                  "Home",
                  "About",
                  "Services",
                  "Gallery",
                  "Contact",
                  "Blog",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="place-self-start">
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
                <span>
                  219 Brightmotive Green SE, Calgary, AB T2Z 0H1, Canada
                </span>
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
  );
}
