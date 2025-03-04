"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import Footer from "@/components/ui/footer";
import OurServices from "@/components/our-services";
import PaintingCompany from "@/components/painting-company";
import OurGallery from "@/components/gallery/page";
import Hero from "@/components/hero";
import { CalgaryPainting } from "@/components/calgary-painting";
import homeHero from "@/public/home-hero.png";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import { ContactFormSection } from "@/components/ContactFormSection";
import SpecialOffer from "@/components/SpecialOffer/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <Hero />

      <PaintingCompany />
      <OurServices />
      <div className="flex flex-col min-h-screen">
        <CalgaryPainting />
        <OurGallery />
        {/* Google Reviews Section */}
  <ReviewsCarousel />
    <ContactFormSection />
    {/* <SpecialOffer /> */}
      </div>

 
      <Footer />
    </main>
  );
}
