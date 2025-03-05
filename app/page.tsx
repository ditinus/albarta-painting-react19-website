"use client";

import { Button } from "@/components/ui/button";

import Footer from "@/components/ui/footer";
import OurServices from "@/components/our-services";
import PaintingCompany from "@/components/painting-company";
import OurGallery from "@/components/gallery/page";
import Hero from "@/components/hero";
import { CalgaryPainting } from "@/components/calgary-painting";
import ContactFormSection from "@/components/ContactFormSection";

import { getBlogPosts } from "@/lib/blog-data";
import BlogGrid from "@/components/blog-grid";
import HomeBanner from "@/components/HomeBanner/home-banner";
import Link from "next/link";
import { Navbar } from "@/components/navbar";

import ReviewsCarousel from "@/components/ReviewsCarousel";

import PromotionalSlider from "@/components/promotional-slider";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import SpecialOffer from "@/components/SpecialOffer/page";


const posts = getBlogPosts();
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
    <Navbar />
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
        <SpecialOffer />
    
        {/* <SpecialOffer /> */}
        <main className="container mx-auto px-4 py-8 ">
          <div className="text-center  mb-10">
            <h4 className=" text-[22px] font-semibold text-black ont-medium">Our Blog</h4>
            <h2 className="text-[#0D378D] lg:text-[36px]  text-[26px] font-medium">
              Expert Advice, Trends & DIY Tips
            </h2>
          </div>

          <BlogGrid posts={posts?.slice(0, 3)} />

          <div className="flex justify-center my-7">
            <Button className="bg-[#0D378D] px-4 py-5 w-30 rounded-3xl cursor-pointer">
              {" "}
              <Link href="/blogs">View All</Link>
            </Button>
          </div>
        </main>
      </div>

      <Footer />
    </main>
  );
}
