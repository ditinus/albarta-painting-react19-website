"use client";

import { Button } from "@/components/ui/button";


import Footer from "@/components/ui/footer";
import OurServices from "@/components/our-services";
import PaintingCompany from "@/components/painting-company";
import OurGallery from "@/components/gallery/page";
import Hero from "@/components/hero";
import { CalgaryPainting } from "@/components/calgary-painting";

import ReviewsCarousel from "@/components/ReviewsCarousel";
import { ContactFormSection } from "@/components/ContactFormSection";

import { getBlogPosts } from "@/lib/blog-data";
import BlogGrid from "@/components/blog-grid";
import HomeBanner from "@/components/HomeBanner/home-banner";
const posts = getBlogPosts();
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <Hero />

      <PaintingCompany />
      <OurServices />
      <div className="flex flex-col min-h-screen">
      <HomeBanner />
        <CalgaryPainting />
 
        <OurGallery />
        {/* Google Reviews Section */}
        <ReviewsCarousel />
        <ContactFormSection />
        {/* <SpecialOffer /> */}
        <main className="container mx-auto px-4 py-8 lg:mt-20 mt-10">
          <BlogGrid posts={posts?.slice(0, 3)} />

          <div className="flex justify-center my-7">
          <Button className="bg-[#0D378D] px-4 py-5 w-30 rounded-3xl cursor-pointer">View All</Button>
        </div>

        </main>
      </div>

      <Footer />
    </main>
  );
}
