"use client";
import React, { useEffect } from "react";
import Swiper from "swiper";
import "./style.css";
import 'swiper/css';
import Image from "next/image";
import slider1 from "@/public/slider-image-1.png";

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
          slidesPerView: 1,
          spaceBetween: 20,
        },
        810:{
          slidesPerView: 1,
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
    <section className="py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <h6 className="text-center text-black text-xl font-semibold mb-2">Special Offer</h6>
        <h2 className="text-center text-3xl  font-semibold text-[#0D378D] uppercase mb-8">
          Top Calgary House Painting Offers and Discounts
        </h2>
        <div className="offer_bg">
          {/* Grid layout for content */}
          <div className="  flex flex-col md:flex-row gap-6 md:gap-10">
            {/* Swiper slider section */}
            <div className="lg:w-[60%] w-full">
              <div className="swiper mySwiper offer_slider">
                <div className="swiper-wrapper">
                  {/* Slide 1 */}
                  <div className="swiper-slide">
                    <div className="offer-card relative">
                      <Image src={slider1} className="w-full h-auto" alt="Offer 1" />
                      <div className="ribbon absolute  bg-red-500 text-white p-2">
                        <p>10% Off on Interior</p>
                      </div>
                      <div className="offer-card-content absolute bottom-0 left-0 right-0 ">
                        <h6 className="text-white bg-[rgba(13,55,141,0.24)] backdrop-blur-[7.85px] p-4">
                          Offer starts Oct 27, 2024 and ends Feb 28, 2025. You must call for this offer.
                        </h6>
                        <p className="text-white">10% OFF - Interior Painting</p>
                      </div>
                    </div>
                  </div>
                  {/* Slide 2 */}
                  <div className="swiper-slide">
                    <div className="offer-card relative">
                      <Image src={slider1} className="w-full h-auto" alt="Offer 2" />
                      <div className="ribbon absolute  bg-red-500 text-white p-2">
                        <p>2 for 1 Deal</p>
                      </div>
                      <div className="offer-card-content absolute bottom-0 left-0 right-0  ">
                        <h6 className="text-white bg-[rgba(13,55,141,0.24)] backdrop-blur-[7.85px] p-4">
                          Offer starts Oct 27, 2024 and ends Feb 28, 2025. You must call for this offer.
                        </h6>
                        <p className="text-white">Pay for one bedroom, get the second one half price!</p>
                      </div>
                    </div>
                  </div>
                  {/* Slide 3 */}
                  <div className="swiper-slide">
                    <div className="offer-card relative">
                      <Image src={slider1} className="w-full h-auto" alt="Offer 3" />
                      <div className="ribbon absolute  bg-red-500 text-white p-2">
                        <p>2 for 1 Deal</p>
                      </div>
                      <div className="offer-card-content absolute bottom-0 left-0 right-0 ">
                        <h6 className="text-white bg-[rgba(13,55,141,0.24)] backdrop-blur-[7.85px] p-4">
                          Offer starts Oct 27, 2024 and ends Feb 28, 2025. You must call for this offer.
                        </h6>
                        <p className="text-white">Pay for one bedroom, get the second one half price!</p>
                      </div>
                    </div>
                  </div>
                  {/* Slide 4 */}
                  <div className="swiper-slide">
                    <div className="offer-card relative">
                      <Image src={slider1} className="w-full h-auto" alt="Offer 4" />
                      <div className="ribbon absolute  bg-red-500 text-white p-2">
                        <p>2 for 1 Deal</p>
                      </div>
                      <div className="offer-card-content absolute bottom-0 left-0 right-0 ">
                        <h6 className="text-white bg-[rgba(13,55,141,0.24)] backdrop-blur-[7.85px] p-4">
                          Offer starts Oct 27, 2024 and ends Feb 28, 2025. You must call for this offer.
                        </h6>
                        <p className="text-white">Pay for one bedroom, get the second one half price!</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Navigation Buttons */}
                <div className="swiper-button-prev image3 offer_slider_prev"></div>
                <div className="swiper-button-next image4 offer_slider_next"></div>
              </div>
            </div>
            {/* Text content section */}
            <div className="w-full pr-5 flex flex-col justify-center ">
              <h5 className=" lg:text-xl  text-[20px]  mb-5">
                For a limited time, Alberta Colour Painting is offering exclusive discounts to help you refresh your space at an unbeatable price!
              </h5>
              <p className="text-[14px] lg:text-[16px] font-light">
                Discover a variety of discounts and special deals at Alberta Colour Painting, tailored to help you save on your Calgary house painting projects throughout the year. Explore ongoing promotions for both standard and specialty wall painting services, and ensure you get the best value by visiting our offers page.
              </p>

              <button className="flex items-center w-40 mt-3.5 gap-2 border-2 border-white rounded-full pl-5 pr-1.5  py-1 text-sm md:text-base font-medium bg-[#0D378D]  cursor-pointer transition-colors">
                  Learn More
                  <svg
                    width="32"
                    height="30"
                    viewBox="0 0 32 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="0.5" width="31" height="30" rx="15" fill="white" />
                    <path
                      d="M23 9C23 8.44771 22.5523 8 22 8L13 8C12.4477 8 12 8.44771 12 9C12 9.55228 12.4477 10 13 10L21 10L21 18C21 18.5523 21.4477 19 22 19C22.5523 19 23 18.5523 23 18L23 9ZM10.7071 21.7071L22.7071 9.70711L21.2929 8.29289L9.29289 20.2929L10.7071 21.7071Z"
                      fill="#0D378D"
                    />
                  </svg>
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
