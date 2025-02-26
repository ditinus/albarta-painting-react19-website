"use client";
import React from 'react'
import Top from '../components/top/Top'
import HomeNavbar from '../components/Home/HomeNavbar'
import HomeHero from '../components/Home/HomeHero'
import HomeBadges from '../components/Home/HomeBadges'
import HomeWhyChooseSection from '../components/Home/HomeWhyChooseSection'
import OurService from '../components/OurService'
import ContactForm from '../components/ContactForm';
import HomeBanner from '../components/Home/HomeBanner';
import Footer from '../Layout/Footer';
import { Container } from 'react-bootstrap';
const page = () => {
  return (
    <div>   <Top />
    <HomeNavbar />
    <HomeHero />
    <HomeBadges />
          <OurService/>
          <Container> 
          <HomeBanner/>
          </Container>
      <ContactForm />
      <Footer/>
</div>
  )
}

export default page