import React, { useState } from "react";
import HomeOfferCard from "./HomeOfferCard";
import prev from '../../../../public/assets/prev.svg';
import next from '../../../../public/assets/next.svg';
import offer1 from '../../../../public/assets/banner.png';
import offer2 from '../../../../public/assets/hero.png';
import offer3 from '../../../../public/assets/decorGallery.png';
import offer4 from '../../../../public/assets/decorRoom.png';
import arrow from '../../../../public/assets/arrow.svg';
import { Container, Row, Col,  } from 'react-bootstrap';
import './homeoffercarasoul.css';
import Image from "next/image";

const offers = [
  {
    id: 1,
    title: "2 for 1 Deal",
    image: offer2,
    description: "Pay for one bedroom, get the second one half price!",
    startDate: "Oct 27, 2024",
    endDate: "Feb 28, 2025",
  },
  {
    id: 2,
    title: "10% Off on Interior",
    image: offer1,
    description: "10% OFF - Interior Painting",
    startDate: "Oct 27, 2024",
    endDate: "Feb 28, 2025",
  },
  {
    id: 3,
    title: "10% Off on Interior",
    image: offer3,
    description: "10% OFF - Interior Painting",
    startDate: "Oct 27, 2024",
    endDate: "Feb 28, 2025",
  },
  {
    id: 4,
    title: "10% Off on Interior",
    image: offer4,
    description: "10% OFF - Interior Painting",
    startDate: "Oct 27, 2024",
    endDate: "Feb 28, 2025",
  },
];

const HomeOfferCarasoul = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? offers.length - 2 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === offers.length - 2 ? 0 : prev + 1));
  };

  return (
    <div className="special-offer-wrap">
      <div className="special-offer-top">
        <h3>Special Offer</h3>
        <h1></h1>
      </div>
      <div className="offers-wrap">
        <div className="carousel">
          {/* Render only two images at a time */}
          <div className="carousel-images">
            {offers.slice(currentIndex, currentIndex + 2).map((offer) => (
              <HomeOfferCard key={offer.id} offer={offer} isActive={true} />
            ))}
          </div>
        </div>
        {/* Navigation arrows */}
        <div className="carousel-arrows">
          <button className="prev-arrow" onClick={prevSlide}>
            <Image src={prev} alt="Previous" />
          </button>
          <button className="next-arrow" onClick={nextSlide}>
            <Image src={next} alt="Next" />
          </button>
        </div>
        <div className="details-wrap">
          <div className="details">
            <h2>
              For a limited time, Alberta Colour Painting is offering exclusive discounts to help you refresh your space at an unbeatable price!
            </h2>
            <p>
              Discover a variety of discounts and special deals at Alberta Colour Painting, tailored to help you save on your Calgary house painting projects
              throughout the year. Explore ongoing promotions for both standard and specialty wall painting services, and ensure you get the best value by
              visiting our offers page.
            </p>
          </div>
          <div style={{display:"flex"}}>
            <a href="#" className="about-btn">
              <span>Explore Discounts</span>
              <Image className="arrow" src={arrow} alt="arrow" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeOfferCarasoul;
