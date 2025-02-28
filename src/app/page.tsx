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
import { blogPosts } from "./lib/data"
import OurGallery from "./components/OurGallery/page";
import ReviewsCarousel from "./components/ReviewsCarousel";
import SpecialOffer from "./components/SpecialOffer/page";
import OurService from "./components/OurService";

import Footer from "./Layout/Footer";
import TransparentSection from "./components/Home/TransparentSection";
import HomeServices from "./components/Home/HomeServices";
// import HomeOurGallery from "./components/Home/HomeOurGallery";
import HomeCalgaryPainting from "./components/Home/HomeCalgaryPainting";
import HomeBanner from "./components/Home/HomeBanner";

import HomeOurGallery from "./components/Home/HomeOurGallery";
import Layout from "./Layout/index";
import ContactForm from "./components/ContactUs/ContactForm";
import { useEffect } from "react";
import HeroSection from "./components/BannerReusable/HeroSection";

export default function Home() {


  return (
    <div>


    <Layout>
     
      {/* <HomeHero /> */}
      <HeroSection/>
      <HomeBadges />
      <HomeAboutUs />
      <HomeWhyChooseSection />
      <HomeServices/>

      <div className="container">

      <HomeBanner/>
      </div>
      {/* <HomeOfferCarasoul/> */}
      <SpecialOffer />
      <HomeOurGallery/>
      <HomeCalgaryPainting/>
      <ReviewsCarousel />

      <ContactForm />
      <BlogGrid posts={blogPosts} />
    </Layout>



    </div>
  );
}
