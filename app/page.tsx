"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import Footer from "@/components/ui/footer";
import OurServices from "@/components/our-services";
import PaintingCompany from "@/components/painting-company";
import OurGallery from "@/components/gallery/page";
import Hero from "@/components/hero/page";
import { CalgaryPainting } from "@/components/calgary-painting";
import homeHero from "@/public/home-hero.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
              {/* Hero Section */}
              <Hero

      />

      <PaintingCompany />
      <OurServices />
      <div className="flex flex-col min-h-screen">

      <CalgaryPainting />
        <OurGallery />
        {/* Google Reviews Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <p className="text-black">Our Services</p>
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 ">
                Bringing Colour to Every Corner of Your Home and Business
              </h2>
              <div className="flex items-center mt-4 md:mt-0">
                <Button
                  variant="default"
                  className="ml-4 bg-blue-700 hover:bg-blue-800"
                >
                  Read Reviews
                </Button>
              </div>
            </div>
          </div>
        </section>

   

     
      </div>
      <Footer />
    </main>
  );
}
