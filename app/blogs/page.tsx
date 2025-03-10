"use client";
import BlogGrid from "@/components/blog-grid";
import { getBlogPosts } from "@/lib/blog-data";
import BlogHeros from "@/components/blogs-hero";
import blogsBanner from "@/public/blogs-banner.png";
import BgBackground2 from '@/public/above-gallery-bg-line.svg'
import Footer from "@/components/ui/footer";
import ContactFormSection from "@/components/ContactFormSection";
import { Navbar } from "@/components/navbar";
import HomeBanner from "@/components/HomeBanner/home-banner";
import Image from "next/image";
export default function blogs() {
  const posts = getBlogPosts();

  return (
    <>
      <Navbar />{" "}
      <BlogHeros
        title="Our "
        title2="BLOG"
        subtitle="Painting Tips, Trends & Expert Advice"
        imageSrc={blogsBanner}
        quoteLink="/quote"
        bookLink="/book"
        quoteText="Get a Free Quote"
        bookText="Read More"
      />
      <main className="container mx-auto px-4 py-8 lg:mt-20 mt-10">

      <div className="absolute top-[1200px] z-[-2]">
        <Image src={BgBackground2} alt="bg-Image"/>
      </div>
        <BlogGrid posts={posts} />

        <div className=" lg:mt-30 mt-10">
          <HomeBanner />
        </div>

        <ContactFormSection />
      </main>
      <Footer />
    </>
  );
}
