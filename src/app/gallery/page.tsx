"use client";
import React from "react";
import Top from "../components/top/Top";
import HomeNavbar from "../components/Home/HomeNavbar";
import HomeHero from "../components/Home/HomeHero";
import HomeBadges from "../components/Home/HomeBadges";
import Carousel from "../components/OurGallery/page";
import ContactForm from "../components/ContactForm";
import Footer from "../Layout/Footer";
import { Container } from "react-bootstrap";
import HomeBanner from "../components/Home/HomeBanner";
export default function page() {
    return (
      <div>
        <Top />
        <HomeNavbar />
        <HomeHero />
        <HomeBadges />
        {/* <TransparentSection/> */}
       
         <Carousel />
         <Container> 
          <HomeBanner/>
          </Container>
          <ContactForm />
          <Footer/>
      </div>
    );
  }
  
