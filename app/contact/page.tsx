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
import { Navbar } from "@/components/navbar";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
     
  <Navbar />

  

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