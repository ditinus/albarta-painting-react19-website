"use client";
import { useState } from "react";
import openArr from "../../../../public/assets/OpenArrow.png";
import closeArr from "../../../../public/assets/CloseArrow.png";
import arrow from '../../../../public/assets/HoeAboutArrow.png';
import interior from "../../../../public/assets/interior.png";
import exterior from "../../../../public/assets/exterior.png";
import commercial from "../../../../public/assets/commercial.png";
import popcorn from "../../../../public/assets/popcorn.png";
import drywall from "../../../../public/assets/drywall.png";
import ceiling from "../../../../public/assets/ceiling.png";
import Image from 'next/image';
import './HomeServices.css'; 
import TestimonialHeader from "../TestimonialHeader/page";

const services = [
  {   
    title: "INTERIOR PAINTING CALGARY", 
    content: "Quality Calgary Interior Painting for Your Needs", 
    text: "Interior painting in Calgary can be a daunting task for many homeowners. It requires a significant amount of time, effort, and attention to detail to achieve a professional finish.", 
    image: interior,
  },
  { 
    title: "EXTERIOR PAINTING CALGARY", 
    content: "Expert Exterior Painting Services", 
    text: "Exterior painting is a crucial step in maintaining and enhancing the appearance of your property. In Calgary, the harsh weather conditions can take a toll on your exteriors, making it essential to choose a durable and high-quality paint.",
    image: exterior,
  },
  { 
    title: "COMMERCIAL PAINTING CALGARY", 
    content: "Top-notch Commercial Painting Solutions", 
    text: "Interior Painting can be a very stressful and frustrating experience. Alberta Colour Painting in Calgary focuses on making the whole process of house painting as easy as possible for you.",
    image: commercial, 
  },
  { 
    title: "POPCORN CEILING REMOVAL CALGARY", 
    content: "Safe and Efficient Ceiling Removal", 
    text: "Popcorn ceilings were a popular trend in the 70's and can often give your home an outdated and old look. Not only do they lack aesthetic appeal, but they can also create a breeding ground for dust and allergens.",
    image: popcorn,
  },
  { 
    title: "DRYWALL MUD & TAPE CALGARY", 
    content: "Flawless Drywall Finishing", 
    text: "Drywall repair and installation are critical aspects of maintaining and enhancing your property.",
    image: drywall, 
  },
  { 
    title: "CEILING TEXTURING CALGARY", 
    content: "Enhance Your Ceilings with Texture", 
    text: "Calgary ceiling texturing is a popular way to add visual interest and texture to a room. In Calgary, there are several options available, including knockdown texturing Calgary",
    image: ceiling,
  },
];

const HomeServices = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div >
      {/* Heading Section */}


      <TestimonialHeader
        title="Our Services"
        subtitle="Bringing Colour to Every Corner of Your Home and Business"
        buttonText="Explore Our Services"
        buttonUrl="/testimonials"
        bgColor="#0D378D"
        textColor="#0D378D"
        buttonStyle={{ fontSize: "1rem" }}
        />


      <section className="service-menu-container" style={{ backgroundColor: "#111111" }}>
        <div className="container">
          <div className="row service-content align-items-center justify-content-between">
            {/* Service List Column */}
            <div className="col-12 col-md-7 service-list mb-4 mb-md-0">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`service-item ${activeIndex === index ? "active" : ""}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <span>{service.title}</span>
                  <Image src={activeIndex === index ? openArr : closeArr} alt="toggle arrow" width={24} />
                </div>
              ))}
            </div>

            {/* Service Details Column */}
            <div className="col-12 col-md-4 service-details">
              <Image 
                src={services[activeIndex].image} 
                alt="Service" 
                className="img-fluid mb-3 custom-img"
              />
              <h3 className="text-white">{services[activeIndex].content}</h3>
              <p className="text-white mb-4">{services[activeIndex].text}</p>
              <a href="#" className="d-inline-flex align-items-center service-btns">
                <span>Learn More</span>
                <Image className="ms-2 arrow" src={arrow} alt="arrow" width={20} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeServices;
