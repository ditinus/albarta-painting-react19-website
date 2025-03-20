"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Reviews1 from "@/public/Reviews1.png";
import Reviews2 from "@/public/Reviews2.png";
import Reviews3 from "@/public/Reviews3.png";
import Image from "next/image";
import "./ReviewsCarousel.css";
import GoogleLogo from "@/public/google-logo.svg";
import ServiceSection from "./service-section";
import { Crown, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";
import GoogleLogo2 from "@/public/google-icon-download.svg";
import homeStars from "@/public/home-stars.svg";
import Best2025 from "@/public//Best2025.svg";
import Awards2025 from "@/public/Awards2025.svg";
import IconVerified from "@/public/icon-verified.svg"

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
  const [activeTab, setActiveTab] = useState<"google" | "homestars">("google");
  return (
    <div className="lg:mb-20 lg:mt-20 mb-10">
      <ServiceSection
        title="What Our Clients Say"
        description="Real Reviews from Satisfied <br /> Customers"
        buttonText="Read More Reviews"
        isButton={false}
      />

      <div className="w-full max-w-3xl mx-auto px-4">
        {/* Tab Navigation */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab("google")}
            className={cn(
              "flex items-center gap-2  cursor-pointer py-3 px-6 rounded-[20px] transition-colors w-full justify-center",
              activeTab === "google"
                ? "bg-[#0D378D] text-white"
                : "bg-white text-[#0D378D] border-2 border-[#CADBFF]"
            )}
          >
            <div className="h-10 w-10 relative">
              <Image src={GoogleLogo2} alt="gooleLogo" />
            </div>
            <span className="text-[19px] font-medium">Google Reviews</span>
          </button>

          <button
            onClick={() => setActiveTab("homestars")}
            className={cn(
              "flex items-center gap-2 py-3 px-6 cursor-pointer rounded-[20px] transition-colors w-full justify-center",
             activeTab === "homestars"
                ? "bg-[#0D378D] text-white"
                : "bg-white text-[#0D378D] border-2 border-[#CADBFF]"
            )}
          >
            <div className="flex justify-center items-center relative">
      
              <Image src={homeStars} alt="gooleLogo" />

            </div>
            <span className="text-[19px] text-left font-medium">HomeStars Reviews</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="mt-8">
          {activeTab === "google" && (
            <div className="flex flex-col items-center">
              <div className="container flex lg:justify-center lg:mb-20 lg:mx-auto mb-10 mt-10 px-4 sm:justify-start">
                <Image
                  src={GoogleLogo}
                  className="w-40 lg:w-64"
                  alt="google-logo"
                />
              </div>
            </div>
          )}

          {activeTab === "homestars" && (
            <div className="flex flex-col items-center">
              <h2 className="text-blue-800 text-xl font-bold mb-8 uppercase">
                Awards Earned
              </h2>

              <div className="grid grid-cols-1 w-full gap-4 md:grid-cols-3">
                <div className="flex flex-col bg-[#F3F3F3] border-1 border-black/20 p-5 rounded-[14px] items-start">
                <Image src={Best2025} alt="homeStars" />
                  <h3 className="text-blue-800 text-lg font-bold">
                    Best of the Best 2025
                  </h3>
                  <p className="text-gray-600">Winner 4 times</p>
                </div>

                <div className="flex justify-center items-center">
                  <div className="relative">
                  <Image src={IconVerified} alt="homeStars" />
                  </div>
                </div>

                <div className="flex flex-col bg-[#F3F3F3] border-1 border-black/20 p-5 rounded-[14px] items-start">
                  <Image src={Awards2025} alt="homeStars" />
                  <h3 className="text-blue-800 text-lg font-bold">
                    Best of Awards 2025
                  </h3>
                  <p className="text-gray-600">Winner 6 times</p>
                </div>
              </div>

              <div className="flex items-center mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="h-6 text-orange-400 w-6 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
                <span className="text-2xl text-black font-bold ml-2">5.5</span>
                <span className="text-gray-600 ml-2">117 reviews</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="rounded-0 lg:px-10 md:px-9 mx-auto px-1 relative">
        <Swiper
          spaceBetween={30}
          // autoplay={{
          //   delay: 3500,
          //   disableOnInteraction: false,
          // }}
          slidesPerView={1}
          loop={true}
          modules={[Autoplay]}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col justify-between lg:ml-5 md:ml-5 ml-1 mr-5"
            >
              <div className="flex flex-col bg-[#E2E7F1] justify-center p-0 shadow-lg lg:p-4 pl-10 relative review_card">
                {/* Adjusted the images to be inside the flex container without absolute positioning */}
                <div className="">
                  <Image
                    src={Reviews1}
                    alt="Review Image"
                    className="absolute left-[-20px] mx-auto top-4"
                  />
                  <Image
                    src={Reviews2}
                    alt="Review Image"
                    className="h-[150px] absolute bottom-[20px] left-[28px] mx-auto"
                  />
                  <Image
                    src={Reviews3}
                    alt="Review Image"
                    className="absolute bottom-[20px] mx-auto right-[-10px]"
                  />
                </div>
                <div className="p-[20px] lg:p-[25px] md:p-[21px]">
                  <p className="text-[11px] text-base text-black font-normal lg:pl-[30px] lg:text-[15px] mb-4 pb-0 pt-[40px] review-text sm:pl-[20px] sm:pr-[-40px]">
                    {review.review}
                  </p>
                  <span className="text-[#202020] text-sm font-bold lg:pl-[22px] md:pl-[12px] sm:pl-[-20px] sm:text-lg">
                    {review.name}
                  </span>
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
