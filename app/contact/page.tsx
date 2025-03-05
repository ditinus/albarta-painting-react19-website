"use client";
import MobileMenu from "@/components/mobile-menu";
import ScrollingBanner from "@/components/scrolling-banner";
import TrustBadges from "@/components/trust-badges";
import {  PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import homeHero from "@/public/home-hero.png";
import { motion } from "framer-motion";
import {Highlight } from "@/components/ui/hero-highlight";

import Footer from "@/components/ui/footer";

import ContactForm from "./ContactForm";
import GoogleMap from "./GoogleMap";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <ScrollingBanner />

      <header className="bg-white py-4 px-4 md:px-8">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="Alberta Color Painting"
                width={100}
                height={40}
                className="h-auto"
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-800 hover:text-blue-600 font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-800 hover:text-blue-600 font-medium"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-800 hover:text-blue-600 font-medium"
            >
              Services
            </Link>
            <Link
              href="/gallery"
              className="text-gray-800 hover:text-blue-600 font-medium"
            >
              Gallery
            </Link>
            <Link
              href="/blog"
              className="text-gray-800 hover:text-blue-600 font-medium"
            >
              Blog
            </Link>
            <Link
              href="/contact-us"
              className="text-gray-800 hover:text-blue-600 font-medium"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center">
              <div className="bg-blue-100 rounded-full p-2 mr-2">
                <PhoneCall className="h-4 w-4 text-blue-600" />
              </div>
              <span className="text-gray-800 font-medium">587-466-6647</span>
            </div>
            <Link
              href="/book"
              className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              Book Now
            </Link>
          </div>

          <MobileMenu />
        </div>
      </header>

      <section className="relative h-[500px] md:h-[600px]">
        <div className="absolute inset-0">
          <Image
            src={homeHero}
            alt="Interior painting"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            EXPERT{" "}
            <Highlight className="text-white">CALGARY PAINTERS </Highlight>
          </motion.h1>

          <p className="text-xl md:text-2xl text-white mb-8">
            for Interior and Exterior House Painting Services
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/quote"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              Get a Free Quote
              <span className="ml-2 bg-white rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-600"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </span>
            </Link>
            <Link
              href="/book"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-gray-800 transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>

      <TrustBadges />
    
      <ContactForm/>
      <GoogleMap/>
      <Footer />
    </main>
  );
}