"use client";
import React from "react";
import Top from "../components/top/Top";
import HomeNavbar from "../components/Home/HomeNavbar";
import HomeHero from "../components/Home/HomeHero";
import HomeBadges from "../components/Home/HomeBadges";
import Carousel from "../components/OurGallery/page";
import ContactForm from "../components/ContactForm";
import Footer from "../Layout/Footer";
import galleryHero from '../../../public/assets/galleryHero.png'
import ButtonArrow from '../../../public/assets/HoeAboutArrow.png'; 
import HomeBanner from "../components/Home/HomeBanner";
import HeroSection from "../components/BannerReusable/HeroSection";


export default function page() {
    return (
      <div>
        <Top />
        <HomeNavbar />
        {/* <HomeHero /> */}
        <HeroSection
        title = "OUR GALLERY"
        subtitle = "Quality Craftsmanship | Beautiful Finishes | Happy Clients"
        backgroundImage = {galleryHero}
        primaryButtonText = "Get a Free Quote"
        primaryButtonUrl = "#"
        primaryButtonArrowImage = {ButtonArrow}
        secondaryButtonText = "Book Now"
        secondaryButtonUrl = "#"
        height= "60vh"
        />
        <HomeBadges />
        {/* <TransparentSection/> */}
       <div className=" mt-5">
         <Carousel />
         </div>
         <div className="container"> 
          <HomeBanner/>
          </div>
          <ContactForm />
          <Footer/>
      </div>
    );
  }
  
