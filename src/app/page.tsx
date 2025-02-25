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
import HomeOfferCarasoul from "./components/Home/HomeOfferCarasoul";
import OurService from "./components/OurService";
import ContactForm from "@/app/components/ContactUs/ContactForm";
import Footer from "./Layout/Footer";
import TransparentSection from "./components/Home/TransparentSection";
import HomeServices from "./components/Home/HomeServices";
import HomeOurGallery from "./components/Home/HomeOurGallery";
import HomeCalgaryPainting from "./components/Home/HomeCalgaryPainting";
import HomeBanner from "./components/Home/HomeBanner";

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
      <HomeServices/>
      <OurGallery />
      <HomeBanner/>
      <HomeOfferCarasoul/>
      <HomeOurGallery/>
      <HomeCalgaryPainting/>
      <ReviewsCarousel />
      <main className="container py-5">
      <BlogGrid posts={blogPosts} />
      <OurService/>
      <ContactForm />
      
    </main>
    <Footer/>
    </div>
  );
}
