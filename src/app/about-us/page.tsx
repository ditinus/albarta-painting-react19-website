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
import { Container, Row, Col } from "react-bootstrap"
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
const page = () => {

  
  return (
    <div>
     
      {" "}
      <Top />
      <HomeNavbar />
      <HomeHero />
      <HomeBadges />
      <HomeAboutUs />
      <HomeWhyChooseSection />

      <Container className="py-5">
      <Row className="align-items-center">
        <Col md={7} className="position-relative">
       
          <h4 className="text-dark mb-2">Our Skilled Painters</h4>
          <h2 className=" mb-4 mt-3 title text-uppercase " style={{ color:"#0D378D" }}>
            TRAINED & SKILLED HOUSE  <br/>PAINTERS
          </h2>
          <ul className="list-unstyled mb-4">
            <li className="mb-2 " >• We protect your furniture and surrounding areas before painting.</li>
            <li className="mb-2">• Our painters respect your home as if it were their own.</li>
            <li className="mb-2">• We believe in skill and attention to detail, ensuring your satisfaction.</li>
          </ul>
          <p className=" d-title ">
            Our commitment to excellence means that every home we <br/> paint is treated with care and precision, leaving
            behind a <br/>space you'll love.
          </p>
        </Col>
        <Col md={5}>
          <Image
            src={SkilledPainters}
            alt="Skilled painter working"
          />
        </Col>
      </Row>
    </Container>
    <Container> 
    <HomeBanner/>
    </Container>

       <Container className="py-5">
      <Row className="align-items-center">
      <Col md={7}>
          <Image
            src={Commitment}
            alt="Skilled painter working"
          />
        </Col>
        <Col md={5} className="position-relative">
       
          <h4 className="text-dark mb-2">Our Skilled Painters</h4>
          <h2 className=" mb-4 mt-3 title text-uppercase" style={{ color:"#0D378D" }}>
    Premium Materials &  <br/>Exceptional Workmanship
          </h2>
          <ul className="list-unstyled mb-4">
            <li className="mb-2 " >• We protect your furniture and surrounding areas before painting.</li>
            <li className="mb-2">• Our painters respect your home as if it were their own.</li>
            <li className="mb-2">• We believe in skill and attention to detail, ensuring your satisfaction.</li>
          </ul>
          <p className=" d-title ">
          Our reputation is built on trust, professionalism, and <br /> superior quality—ensuring every project exceeds , <br/> expectations.
          </p>
        </Col>
   
      </Row>
    </Container>

    <Container className="py-5">
      <Row className="align-items-center">
        <Col md={7} className="position-relative">
       
          <h4 className="text-dark mb-2">Eco-Friendly Approach</h4>
          <h2 className="  mb-4 mt-3 title text-uppercase" style={{ color:"#0D378D" }}>
          Sustainable Painting for a  <br/>Healthier Future
          </h2>
          <ul className="list-unstyled mb-4">
            <li className="mb-2 " >• We protect your furniture and surrounding areas before painting.</li>
            <li className="mb-2">• Our painters respect your home as if it were their own.</li>
            <li className="mb-2">• We believe in skill and attention to detail, ensuring your satisfaction.</li>
          </ul>
          <p className=" d-title ">
            Our commitment to excellence means that every home we <br/> paint is treated with care and precision, leaving
            behind a <br/>space you'll love.
          </p>
        </Col>
        <Col md={5}>
          <Image
            src={FriendlyApproach}
            alt="Skilled painter working"
          />
        </Col>
      </Row>
    </Container>
    <HomeOurGallery/>
    <HomeCalgaryPainting/>
          <ContactForm />
           <BlogGrid posts={blogPosts} />

           <Footer/>
    </div>
  );
};

export default page;
