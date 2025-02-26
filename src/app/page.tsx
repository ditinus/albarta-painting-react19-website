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
import OurGallery from "./components/OurGallery";
import ReviewsCarousel from "./components/ReviewsCarousel";
import HomeOfferCarasoul from "./components/Home/HomeOfferCarasoul";
import OurService from "./components/OurService";
import ContactForm from "@/app/components/ContactForm";
import Footer from "./Layout/Footer";
import TransparentSection from "./components/Home/TransparentSection";
import HomeServices from "./components/Home/HomeServices";
import HomeOurGallery from "./components/Home/HomeOurGallery";
import HomeCalgaryPainting from "./components/Home/HomeCalgaryPainting";
import HomeBanner from "./components/Home/HomeBanner";
import { Container } from "react-bootstrap";

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

      {/* <OurGallery /> */}
      <Container>

      <HomeBanner/>
      </Container>
      <HomeOfferCarasoul/>
      <HomeOurGallery/>
      <HomeCalgaryPainting/>
      <ReviewsCarousel />
      <OurGallery />
      <div className="my-5 ">
      {/* <ContactForm /> */}
      </div>
  
      <ContactForm />
      <BlogGrid posts={blogPosts} />

 
      
   
    <Footer/>
    </div>
  );
}
