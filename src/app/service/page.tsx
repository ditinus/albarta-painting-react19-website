"use client";
import React from 'react';
import Top from '../components/top/Top';
import HomeNavbar from '../components/Home/HomeNavbar';
import HomeHero from '../components/Home/HomeHero';
import HomeBadges from '../components/Home/HomeBadges';
import HomeWhyChooseSection from '../components/Home/HomeWhyChooseSection';
import OurService from '../components/OurService';
import ContactForm from '../components/ContactForm';
import HomeBanner from '../components/Home/HomeBanner';
import Footer from '../Layout/Footer';
import Layout from '../Layout/index';
import galleryHero from '../../../public/assets/galleryHero.png'
import ButtonArrow from '../../../public/assets/HoeAboutArrow.png'; 
import HeroSection from '../components/BannerReusable/Hero';

const page = () => {
  return (
    <Layout>
      {/* <HomeHero /> */}
      <HeroSection
        title = "Our Painting Services"
        subtitle = "Transforming Homes & Businesses with Quality Painting"
        backgroundImage = {galleryHero}
        primaryButtonText = "Get a Free Quote"
        primaryButtonUrl = "#"
        primaryButtonArrowImage = {ButtonArrow}
        secondaryButtonText = "Book Now"
        secondaryButtonUrl = "#"
        height= "60vh"
        />
      <HomeBadges />
      <OurService />
      <div className="container">
        <HomeBanner />
      </div>
      <ContactForm />
   
    </Layout>
  );
};

export default page;
