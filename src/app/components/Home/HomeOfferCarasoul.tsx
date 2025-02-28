
import { useState } from "react";
import HomeOfferCard from "./HomeOfferCard";
import prev from '../../../../public/assets/prev.svg';
import next from '../../../../public/assets/next.svg';
import offer1 from '../../../../public/assets/banner.png';
import offer2 from '../../../../public/assets/hero.png';
import offer3 from '../../../../public/assets/decorGallery.png';
import offer4 from '../../../../public/assets/decorRoom.png';
import arrow from '../../../../public/assets/arrow.svg';

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
    <div className="container special-offer-wrap">
      <div className="special-offer-top text-center col-lg-10">
        <h3>Special Offer</h3>
        <h1>Top Calgary House Painting Offers and Discounts</h1>
      </div>
      
      <div className="offers-wrap position-relative d-flex flex-column flex-lg-row">
        <div className="carousel col-10 col-lg-12">
          <div className="carousel-images d-flex overflow-hidden">
            {offers.slice(currentIndex, currentIndex + 2).map((offer) => (
              <HomeOfferCard key={offer.id} offer={offer} isActive={true} />
            ))}
          </div>
        </div>
        
        <div className="carousel-arrows position-absolute top-50 w-100 transform-translate-y-50 d-flex justify-content-between">
          <button className="prev-arrow btn" onClick={prevSlide}>
            <Image src={prev} alt="Previous" />
          </button>
          <button className="next-arrow btn" onClick={nextSlide}>
            <Image src={next} alt="Next" />
          </button>
        </div>

        <div className="details-wrap col-12 col-lg-4 mt-4 mt-lg-0 d-flex flex-column align-items-lg-start ">
          <div className="details text-white">
            <h2>
              For a limited time, Alberta Colour Painting is offering exclusive discounts to help you refresh your space at an unbeatable price!
            </h2>
            <p>
              Discover a variety of discounts and special deals at Alberta Colour Painting, tailored to help you save on your Calgary house painting projects throughout the year. Explore ongoing promotions for both standard and specialty wall painting services, and ensure you get the best value by visiting our offers page.
            </p>
          </div>
          <a href="#" className="carasoul-btns btn d-flex align-items-center">
            <span>Explore Discounts</span>
            <Image className="arrow " src={arrow} alt="arrow" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeOfferCarasoul;
