"use client";
import React, { useEffect } from "react";
import Swiper from "swiper";
import "./style.css"
import 'swiper/css';
import Image from "next/image";
import slider1  from "../../../../public/assets/slider-image-1.png"
import slider2 from "../../../../public/assets/slider-image-2.png"
const Index = () => {
  useEffect(() => {
    
    const swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        320: { // Small screens (mobile)
          slidesPerView: 1,
          spaceBetween: 22,
        },
        768: { // Medium screens (tablets)
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: { // Large screens (desktops)
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1199: { // Larger screens (desktops)
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1367: { // Larger screens (desktops)
          slidesPerView: 2,
          spaceBetween: 30,
        },
      },
    });
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <section>
      <div className="container">
        <h6 className="text-center title1">Special Offer</h6>
        <h2 style={{color:"#0D378D"}} className="text-center       text-uppercase " >Top Calgary House Painting Offers and Discounts</h2>
        <div className="offer_bg">
          {/* row-start */}
          <div className="row align-items-center">
            {/* column */}
            <div className="col-lg-12 col-xxl-6">
              <div className="swiper mySwiper">
                <div className="swiper-wrapper">
                  {/* slide */}
                  <div className="swiper-slide">
                    <div className="offer-card position-relative">
                      <Image src={slider1} className="img-fluid" alt="Offer 1" />
                      <div className="ribbon">
                        <p>10% Off on Interior</p>
                      </div>
                      <div className="offer-card-content">
                        <div className="offer-card-bg-content">
                          <h6 className="text-white">
                            Offer starts Oct 27, 2024 and ends Feb 28, 2025. You must call for this offer.
                          </h6>
                        </div>
                        <p className="text-white">10% OFF - Interior Painting</p>
                      </div>
                    </div>
                  </div>
                  {/* slide */}
                  <div className="swiper-slide">
                    <div className="offer-card position-relative">
                      <Image src={slider2}  className="img-fluid" alt="Offer 2" />
                      <div className="ribbon">
                        <p>2 for 1 Deal</p>
                      </div>
                      <div className="offer-card-content">
                        <div className="offer-card-bg-content">
                          <h6 className="text-white">
                            Offer starts Oct 27, 2024 and ends Feb 28, 2025. You must call for this offer.
                          </h6>
                        </div>
                        <p className="text-white">Pay for one bedroom, get the second one half price!</p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="offer-card position-relative">
                      <Image src={slider2}  className="img-fluid" alt="Offer 2" />
                      <div className="ribbon">
                        <p>2 for 1 Deal</p>
                      </div>
                      <div className="offer-card-content">
                        <div className="offer-card-bg-content">
                          <h6 className="text-white">
                            Offer starts Oct 27, 2024 and ends Feb 28, 2025. You must call for this offer.
                          </h6>
                        </div>
                        <p className="text-white">Pay for one bedroom, get the second one half price!</p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="offer-card position-relative">
                      <Image src={slider2}  className="img-fluid" alt="Offer 2" />
                      <div className="ribbon">
                        <p>2 for 1 Deal</p>
                      </div>
                      <div className="offer-card-content">
                        <div className="offer-card-bg-content">
                          <h6 className="text-white">
                            Offer starts Oct 27, 2024 and ends Feb 28, 2025. You must call for this offer.
                          </h6>
                        </div>
                        <p className="text-white">Pay for one bedroom, get the second one half price!</p>
                      </div>
                    </div>
                  </div>
                  {/* Repeat similar slides here */}
                </div>
                {/* Navigation Buttons */}
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
              </div>
            </div>
            {/* column */}
            <div className="col-lg-12 col-xxl-6">
              <h5 className="mb-5 titleH5">
                For a limited time, Alberta Colour Painting is offering exclusive discounts to help you refresh your
                space at an unbeatable price!
              </h5>
              <p className="titleHp">
                Discover a variety of discounts and special deals at Alberta Colour Painting, tailored to help you save
                on your Calgary house painting projects throughout the year. Explore ongoing promotions for both standard
                and specialty wall painting services, and ensure you get the best value by visiting our offers page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
