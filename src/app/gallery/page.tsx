"use client";
import React from "react";
import Top from "../components/top/Top";
import HomeNavbar from "../components/Home/HomeNavbar";
import HomeHero from "../components/Home/HomeHero";
import HomeBadges from "../components/Home/HomeBadges";
import Carousel from "../components/OurGallery/page";
import ContactForm from "../components/ContactForm";
import Footer from "../Layout/Footer";

import HomeBanner from "../components/Home/HomeBanner";
import Layout from "../Layout/index";
export default function page() {
    return (
      <div>
     <Layout >
        <HomeHero />
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
          </Layout>
      </div>
    );
  }
  
