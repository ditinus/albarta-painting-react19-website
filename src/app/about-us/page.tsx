"use client";
import React from "react";
import Top from "../components/top/Top";
import HomeNavbar from "../components/Home/HomeNavbar";
import HomeHero from "../components/Home/HomeHero";
import HomeBadges from "../components/Home/HomeBadges";
import HomeAboutUs from "../components/Home/HomeAboutUs";
import HomeWhyChooseSection from "../components/Home/HomeWhyChooseSection";
import SkilledPainters from "../../../public/assets/Skilled-Painters.png"
import Commitment from "../../../public/assets/Commitment.png"

import FriendlyApproach from "../../../public/assets/Friendly-Approach.png"
import Image from "next/image";
import "./style.css"
import HomeBanner from "../components/Home/HomeBanner";
import HomeOurGallery from "../components/Home/HomeOurGallery";
import HomeCalgaryPainting from "../components/Home/HomeCalgaryPainting";
import ContactForm from "../components/ContactForm";
import BlogGrid from "../components/Blog/BlogGrid";
import { blogPosts } from "../lib/data";
import Footer from "../Layout/Footer";
import Head from "next/head";
import type { Metadata } from 'next'
import galleryHero from '../../../public/assets/galleryHero.png'
import ButtonArrow from '../../../public/assets/HoeAboutArrow.png'; 
import HeroSection from "../components/BannerReusable/Hero";

const page = () => {
  return (
    <div>
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
      <HomeAboutUs />
      <HomeWhyChooseSection />


      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-7 position-relative">
            <h4 className="text-dark mb-2">Our Skilled Painters</h4>
            <h2 className="mb-4 mt-3 title text-uppercase" style={{ color: "#0D378D" }}>
              TRAINED & SKILLED HOUSE <br /> PAINTERS
            </h2>
            <ul className="list-unstyled mb-4">
              <li className="mb-2">• We protect your furniture and surrounding areas before painting.</li>
              <li className="mb-2">• Our painters respect your home as if it were their own.</li>
              <li className="mb-2">• We believe in skill and attention to detail, ensuring your satisfaction.</li>
            </ul>
            <p className="d-title">
              Our commitment to excellence means that every home we <br /> paint is treated with care and precision, leaving
              behind a <br /> space you'll love.
            </p>
          </div>
          <div className="col-md-5">
            <Image src={SkilledPainters} style={{width:"100%"}} alt="Skilled painter working" />
          </div>
        </div>
      </div>


        <HomeBanner />
   

      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-7">
            <Image src={Commitment} style={{width:"100%"}} alt="Skilled painter working" />
          </div>
          <div className="col-md-5 position-relative">
            <h4 className="text-dark mb-2">Our Skilled Painters</h4>
            <h2 className="mb-4 mt-3 title text-uppercase" style={{ color: "#0D378D" }}>
              Premium Materials & <br /> Exceptional Workmanship
            </h2>
            <ul className="list-unstyled mb-4">
              <li className="mb-2">• We protect your furniture and surrounding areas before painting.</li>
              <li className="mb-2">• Our painters respect your home as if it were their own.</li>
              <li className="mb-2">• We believe in skill and attention to detail, ensuring your satisfaction.</li>
            </ul>
            <p className="d-title">
              Our reputation is built on trust, professionalism, and <br /> superior quality—ensuring every project exceeds ,
              <br /> expectations.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-7 position-relative">
            <h4 className="text-dark mb-2">Eco-Friendly Approach</h4>
            <h2 className="mb-4 mt-3 title text-uppercase" style={{ color: "#0D378D" }}>
              Sustainable Painting for a <br /> Healthier Future
            </h2>
            <ul className="list-unstyled mb-4">
              <li className="mb-2">• We protect your furniture and surrounding areas before painting.</li>
              <li className="mb-2">• Our painters respect your home as if it were their own.</li>
              <li className="mb-2">• We believe in skill and attention to detail, ensuring your satisfaction.</li>
            </ul>
            <p className="d-title">
              Our commitment to excellence means that every home we <br /> paint is treated with care and precision, leaving
              behind a <br /> space you'll love.
            </p>
          </div>
          <div className="col-md-5">
            <Image src={FriendlyApproach} style={{width:"100%"}} alt="Skilled painter working" />
          </div>
        </div>
      </div>

      <HomeOurGallery />
      <HomeCalgaryPainting />
      <ContactForm />
      <BlogGrid posts={blogPosts} />
      <Footer />
    </div>
  );
};

export default page;
