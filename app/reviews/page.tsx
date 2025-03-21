"use client";
import { Navbar } from "@/components/navbar";
import Image from "next/image";
import React, { useState } from "react";
import imageSrc from "@/public/HomeBannerBG.png";
import { Highlight } from "@/components/ui/hero-highlight";
import Link from "next/link";
import TrustBadges from "@/components/trust-badges";
import { motion } from "framer-motion";
import GoogleLogo2 from "@/public/google-icon-download.svg";
import homeStars from "@/public/home-stars.svg";
import Best2025 from "@/public//Best2025.svg";
import Awards2025 from "@/public/Awards2025.svg";
import IconVerified from "@/public/icon-verified.svg";
import { cn } from "@/lib/utils";
import GoogleLogo from "@/public/google-logo.svg";
import bg3  from "@/public/BG2.png"

import Reviews1 from "@/public/Reviews1.png";
import Reviews2 from "@/public/Reviews2.png";
import Reviews3 from "@/public/Reviews3.png";
import Footer from "@/components/ui/footer";
const page = () => {
  const [activeTab, setActiveTab] = useState<"google" | "homestars">("google");

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
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <section className="h-[400px] md:h-[600px] relative">
        <div className="absolute inset-0">
          <Image
            src={bg3}
            alt="Hero Image"
            fill
            className="brightness-75 object-cover"
            priority
          />
        </div>

        <div className="flex flex-col h-full justify-center text-center items-center px-4 relative">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-4xl text-white font-bold mb-4 md:text-6xl"
          >
     Reviews
          </motion.h1>
        </div>
      </section>
      <div className="container w-full mx-auto px-4">
        <div className="">
          <div className="bg-[#B7CEFF] rounded-2xl shadow-lg -mt-20 lg:max-w-[30%] max-w-3xl mx-auto px-4 py-4 relative z-10">
            <div className="w-full max-w-3xl mx-auto">
              {/* Tab Navigation */}
              <div className="flex gap-4">
                <button
                  onClick={() => setActiveTab("google")}
                  className={cn(
                    "   cursor-pointer py-3 px-6 rounded-[20px] transition-colors w-full",
                    activeTab === "google"
                      ? "bg-[#0D378D] text-white"
                      : "bg-white text-[#0D378D] border-2 border-[#CADBFF]"
                  )}
                >
                  <div className="flex justify-center items-center relative">
                    <Image src={GoogleLogo2} alt="gooleLogo" />
                  </div>
                  <span className="text-[10px] text-left font-medium lg:text-[19px]">
                    Google Reviews
                  </span>
                </button>

                <button
                  onClick={() => setActiveTab("homestars")}
                  className={cn(
                    "gap-2 py-3 px-6 cursor-pointer rounded-[20px] transition-colors w-full ",
                    activeTab === "homestars"
                      ? "bg-[#0D378D] text-white"
                      : "bg-white text-[#0D378D] border-2 border-[#CADBFF]"
                  )}
                >
                  <div className="flex justify-center items-center relative">
                    <Image src={homeStars} alt="gooleLogo" />
                  </div>
                  <span className="text-[10px] text-left font-medium lg:text-[19px]">
                    HomeStars Reviews
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container w-full lg:w-4xl mx-auto">
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
                <h2 className="text-[#0D378D] text-[26px] font-bold mb-8 uppercase">
                  Awards Earned
                </h2>

                <div className="grid grid-cols-1 w-full gap-4 md:grid-cols-3">
                  <div className="flex flex-col bg-[#F3F3F3] border-1 border-black/20 p-5 rounded-[14px] items-start">
                    <Image  src={Best2025} alt="homeStars" />
                    <h3 className="text-[#0D378D] font-bold lg:text-lg">
                      Best of the Best 2025
                    </h3>
                    <p className="text-black">Winner 4 times</p>
                  </div>

                  <div className="flex justify-center items-center">
                    <div className="">
                      <Image className="w-40 lg:w-50" src={IconVerified} alt="homeStars" />
                    </div>
                  </div>

                  <div className="flex flex-col bg-[#F3F3F3] border-1 border-black/20 p-5 rounded-[14px] items-start">
                    <Image src={Awards2025} alt="homeStars" />
                    <h3 className="text-[#0D378D] text-lg font-bold">
                      Best of Awards 2025
                    </h3>
                    <p className="text-black">Winner 6 times</p>
                  </div>
                </div>

                <div className="flex items-center my-10">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="h-6 text-orange-400 w-6 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                  <span className="text-[#0D378D] text-2xl font-bold ml-2">
                    5.5
                  </span>
                  <span className="text-[18px] text-black ml-2">
                    117 reviews
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="container w-full lg:w-5xl mb-24 mx-auto px-4">
          <div className="grid gap-10 lg:gap-20 md:grid-cols-2 mt-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-[#E2E7F1] p-0 shadow-lg relative">
      
                <div>
                  <Image
                    src={Reviews1}
                    alt="Review Image"
                    className="w-15 absolute left-1 lg:left-[-20px] lg:mt-0 lg:top-[-30px] lg:w-20 mt-6 mx-auto top-[-20px]"
                  />
                  <Image
                    src={Reviews2}
                    alt="Review Image"
                    className="h-[150px] absolute bottom-[20px] left-[9px] lg:left-[28px] mx-auto"
                  />
                  <Image
                    src={Reviews3}
                    alt="Review Image"
                    className="absolute bottom-[20px] lg:right-[-28px] mx-auto right-[-20]"
                  />
                </div>
                <div className="p-[20px] lg:p-[25px] md:p-[10px]">
                  <p className="text-[11px] text-base text-black font-normal lg:pl-[30px] lg:text-[15px] mb-4 pb-0 pt-[40px] review-text sm:pl-[20px] sm:pr-[-40px]">
                    {review.review}
                  </p>
                  <span className="text-[#202020] text-sm font-bold lg:pl-[22px] md:pl-[12px] sm:pl-[-20px] sm:text-lg">
                    {review.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
