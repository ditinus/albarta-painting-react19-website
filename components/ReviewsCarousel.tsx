
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Reviews1 from "@/public/Reviews1.png";
import Reviews2 from "@/public/Reviews2.png";
import Reviews3 from "@/public/Reviews3.png";
import Image from "next/image";
import "./ReviewsCarousel.css";
import GoogleLogo from "@/public/google-logo.svg";
import ServiceSection from "./service-section";

const reviews = [
  {
    name: "John Doe",
    review:
      "We were looking for local Calgary painters to paint our interior in our new house upon possession. Frank and his team worked tirelessly to get the job done in time for us to move in. They did excellent work and even put up with my last minute changes. I highly recommend Alberta Colour Painting to anyone who needs their interior painted.",
    rating: 5,
    date: "January 2025",
  },
  {
    name: "Jane Smith",
    review:
      "We were looking for local Calgary painters to paint our interior in our new house upon possession. Frank and his team worked tirelessly to get the job done in time for us to move in. They did excellent work and even put up with my last minute changes. I highly recommend Alberta Colour Painting to anyone who needs their interior painted.",
    rating: 4,
    date: "December 2024",
  },
  {
    name: "Alex Brown",
    review:
      "We were looking for local Calgary painters to paint our interior in our new house upon possession. Frank and his team worked tirelessly to get the job done in time for us to move in. They did excellent work and even put up with my last minute changes. I highly recommend Alberta Colour Painting to anyone who needs their interior painted.",
    rating: 3,
    date: "November 2024",
  },
  {
    name: "Emily Davis",
    review:
      "We were looking for local Calgary painters to paint our interior in our new house upon possession. Frank and his team worked tirelessly to get the job done in time for us to move in. They did excellent work and even put up with my last minute changes. I highly recommend Alberta Colour Painting to anyone who needs their interior painted.",
    rating: 5,
    date: "October 2024",
  },
];

const ReviewsCarousel = () => {
  return (
    <div className=" mb-20  ">
      <ServiceSection
        title="What Our Clients Say"
        description="Real Reviews from Satisfied <br /> Customers"
        buttonText="Read More Reviews"
      />

      <div className="flex lg:justify-center  sm:justify-start   mb-20 mt-10 ">
        <Image src={GoogleLogo} className=" lg:w-64  w-40 " alt="google-logo" />
      </div>
      <div className="relative  px-10 mx-auto  rounded-0">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index} className="flex flex-col justify-between  ml-5 mr-5">
              <div className="bg-[#E2E7F1] shadow-lg   relative rounded-xl lg:p-4  pl-10   p-0   flex flex-col justify-center review_card">
                {/* Adjusted the images to be inside the flex container without absolute positioning */}
                <div className="">
                  <Image src={Reviews1} alt="Review Image"  className="mx-auto  absolute top-4 left-[-20px] " />
                  <Image src={Reviews2} alt="Review Image"  className="mx-auto absolute bottom-[20px] left-[28px] h-[150px]" />
                  <Image src={Reviews3} alt="Review Image"  className="mx-auto absolute bottom-[20px] right-[-10px]" />
                </div>
                <div className="p-[25px]">
                  <p className="review-text text-base  font-normal text-black mb-4  pt-[40px] lg:pl-[30px] sm:pl-[20px] sm:pr-[-40px] pb-0 ">{review.review}</p>
                  <span className=" font-bold text-sm sm:text-lg text-[#202020] lg:pl-[22px]  md:pl-[12px] sm:pl-[-20px]">{review.name}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewsCarousel;
