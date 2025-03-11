"use client";

import ContactFormSection from "@/components/ContactFormSection";
import ContactGalleryHero from "@/components/ContactGalleryHero";
import Hero from "@/components/hero";
import HomeBanner from "@/components/HomeBanner/home-banner";
import { Navbar } from "@/components/navbar";
import OurGallery from "@/components/OurGallery";
import OurGalleryMobile from "@/components/OurGalleryMobile";
import TrustBadges from "@/components/trust-badges";
import Footer from "@/components/ui/footer";
import blogsBanner from "@/public/blogs-banner.png";

export default function gallery() {
  return (
    <main className="flex  flex-col ">
         <Navbar />
      <ContactGalleryHero
        title="OUR "
        title2="GALLERY"
        subtitle="Quality Craftsmanship | Beautiful Finishes | Happy Clients"
        imageSrc={blogsBanner}
        quoteLink="/quote"
        bookLink="/book"
        quoteText="Get a Free Quote"
      />
      {/* <TrustBadges/> */}
      <OurGallery />
      <OurGalleryMobile/>
      <HomeBanner />
      <ContactFormSection />
      <Footer />
    </main>
  );
}
