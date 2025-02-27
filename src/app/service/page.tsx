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

const page = () => {
  return (
    <Layout>
      <HomeHero />
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
