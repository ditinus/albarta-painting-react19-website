"use client";

import BlogGrid from "../components/Blog/BlogGrid";
import { blogPosts } from "../lib/data";
import Top from "../components/top/Top";
import HomeNavbar from "../components/Home/HomeNavbar";
import HomeHero from "../components/Home/HomeHero";
import HomeBadges from "../components/Home/HomeBadges";
import HomeBanner from "../components/Home/HomeBanner";
import ContactForm from "../components/ContactForm";
import galleryHero from '../../../public/assets/galleryHero.png'
import ButtonArrow from '../../../public/assets/HoeAboutArrow.png'; 
import HeroSection from "../components/BannerReusable/Hero";

export default function Blog() {
  return (
    <>
      <Top />
      <HomeNavbar />
      {/* <HomeHero /> */}
      <HeroSection
        title = "About Alberta Colour Painting"
        subtitle = "Your Trusted, Skilled, and Eco-Friendly Painting Experts"
        backgroundImage = {galleryHero}
        primaryButtonText = "Get a Free Quote"
        primaryButtonUrl = "#"
        primaryButtonArrowImage = {ButtonArrow}
        secondaryButtonText = "Book Now"
        secondaryButtonUrl = "#"
        height= "60vh"
        />
      <HomeBadges />
      <BlogGrid posts={blogPosts} />
      <div className="container">
        <HomeBanner />
      </div>

      <ContactForm />
    </>
  );
}
