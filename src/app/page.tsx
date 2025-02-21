"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Top from "./components/top/Top";
import HomeHero from "./components/Home/HomeHero";
import HomeBadges from "./components/Home/HomeBadges";
import HomeWhyChooseSection from "./components/Home/HomeWhyChooseSection";
import HomeNavbar from "./components/Home/HomeNavbar";

import HomeAboutUs from "./components/Home/HomeAboutUs";
import BlogGrid from "./components/Blog/BlogGrid";
import { blogPosts } from "../app/lib/data"
import OurGallery from "./components/OurGallery";
import ReviewsCarousel from "./components/ReviewsCarousel";

export default function Home() {
  return (
    <div>
      <Top />
      <HomeNavbar />

      <HomeHero />
      <HomeBadges />
      {/* <TransparentSection/> */}
      <HomeAboutUs />
      <HomeWhyChooseSection />
      {/* <HomeServices/> */}
      {/* <OurGallery /> */}
      <ReviewsCarousel />
      <main className="container py-5">
      <BlogGrid posts={blogPosts} />
     
    </main>

    </div>
  );
}
