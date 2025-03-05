"use client";

import ContactFormSection from "@/components/ContactFormSection";
import Hero from "@/components/hero";
import HomeBanner from "@/components/HomeBanner/home-banner";
import { Navbar } from "@/components/navbar";
import OurGallery from "@/components/OurGallery";
import TrustBadges from "@/components/trust-badges";
import Footer from "@/components/ui/footer";

export default function gallery() {
  return (
    
    <main className="flex min-h-screen flex-col">
      <Navbar/>
      <Hero/>
      {/* <TrustBadges/> */}
 <OurGallery/>
      <HomeBanner/>
 <ContactFormSection/>
    <Footer/>
    </main>
    
  );
}