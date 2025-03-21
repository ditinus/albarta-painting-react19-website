"use client";
import React, { useEffect, useState } from "react";
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
import IconVerified from "@/public/icon-verified.svg";

import axios from "axios";
// const reviews = [
//   {
//     name: "John Doe",
//     review:
//       "We were looking for local Calgary painters to paint our interior in our new house upon possession. Frank and his team worked tirelessly to get the job done in time for us to move in. They did excellent work and even put up with my last minute changes. I highly recommend Alberta Colour Painting to anyone who needs their interior painted.",
//     rating: 5,
//     date: "January 2025",
//   },
//   {
//     name: "Jane Smith",
//     review:
//       "We were looking for local Calgary painters to paint our interior in our new house upon possession. Frank and his team worked tirelessly to get the job done in time for us to move in. They did excellent work and even put up with my last minute changes. I highly recommend Alberta Colour Painting to anyone who needs their interior painted.",
//     rating: 4,
//     date: "December 2024",
//   },
//   {
//     name: "Alex Brown",
//     review:
//       "We were looking for local Calgary painters to paint our interior in our new house upon possession. Frank and his team worked tirelessly to get the job done in time for us to move in. They did excellent work and even put up with my last minute changes. I highly recommend Alberta Colour Painting to anyone who needs their interior painted.",
//     rating: 3,
//     date: "November 2024",
//   },
//   {
//     name: "Emily Davis",
//     review:
//       "We were looking for local Calgary painters to paint our interior in our new house upon possession. Frank and his team worked tirelessly to get the job done in time for us to move in. They did excellent work and even put up with my last minute changes. I highly recommend Alberta Colour Painting to anyone who needs their interior painted.",
//     rating: 5,
//     date: "October 2024",
//   },
// ];



const ReviewsCarousel = () => {
  const [activeTab, setActiveTab] = useState<"google" | "homestars">("google");
  const [placeDetails, setPlaceDetails] = useState(null);


  console.log(placeDetails , 'placeDetails');
  

  const handleReviewsRequest = async () => {
    try {
      await axios.get('/api/getReviews').then((response: any) => {
       if(response?.data){
        const placeDetail = response?.data?.result;

        setPlaceDetails(placeDetail?.reviews)
       }
      }).catch((error: any) => {
        console.log("Erro: ", error)
      })
    } catch (error) {
      console.log("Error: ", error)
    }
  }
  
  useEffect(() => {
    handleReviewsRequest()
  },[])



  const reviews: any = [
    {
        "author_name": "Matt C",
        "author_url": "https://www.google.com/maps/contrib/114892732674687710363/reviews",
        "language": "en",
        "original_language": "en",
        "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocJ04_RStSfkM_pgBd7ENYPG-xXKWN-M0SG3A4dKPGQmQVcoyw=s128-c0x00000000-cc-rp-mo-ba2",
        "rating": 5,
        "relative_time_description": "2 weeks ago",
        "text": "Frank did a fantastic job on our bungalow, painting over 2000 sq feet upstairs and downstairs while we were away on vacation. He has a delightful personality and energy to spare. I would recommend Frank to my friends and family as he is honest, hard working and also came back to do a few minor touchups. Thankyou Frank!",
        "time": 1741205558,
        "translated": false
    },
    {
        "author_name": "Kari V",
        "author_url": "https://www.google.com/maps/contrib/116148661941457828435/reviews",
        "language": "en",
        "original_language": "en",
        "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocJVBvCYYL-MGtv7djxEDHV1086ObhkTqivshRd-6thNPHfEQg=s128-c0x00000000-cc-rp-mo-ba4",
        "rating": 5,
        "relative_time_description": "a year ago",
        "text": "Frank came out on quick notice and provided us a reasonably priced quote. His team of painters did a fantastic job colour matching and painting the entire unit which included removing the old popcorn ceiling to create a new modern flat look! He personally came out to inspect the finished project and see if any touch ups were needed. Highly recommend Frank and his team!",
        "time": 1691502030,
        "translated": false
    },
    {
        "author_name": "Josh Inhaber",
        "author_url": "https://www.google.com/maps/contrib/110360353559980073620/reviews",
        "language": "en",
        "original_language": "en",
        "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocLHLeknTB9tQh9Rd9IuJ7JJSy-Y70rzKR-vz1qvsALN9oExLA=s128-c0x00000000-cc-rp-mo",
        "rating": 5,
        "relative_time_description": "4 months ago",
        "text": "Frank and team did an amazing interior painting job of our townhouse.\nHe was very professional, very responsive from beginning to end, and completed the job on time as discussed.\nThe place looks brand new!\n\nWould highly recommend Frank at Alberta Colour Painting!",
        "time": 1732117453,
        "translated": false
    },
    {
        "author_name": "Wendy Farrell",
        "author_url": "https://www.google.com/maps/contrib/105622066103500118013/reviews",
        "language": "en",
        "original_language": "en",
        "profile_photo_url": "https://lh3.googleusercontent.com/a-/ALV-UjUMIiACoBv0_xrjdr9k08cbLoq0Qlx3ct5uFxdMVg7uvKmCTtI=s128-c0x00000000-cc-rp-mo",
        "rating": 5,
        "relative_time_description": "5 months ago",
        "text": "Before moving into my townhome, I wanted to refresh the paint in the bedrooms. I reached out to Alberta Colour Painting and they were able to book me in on very short notice.\nFrank always kept me updated throughout the process, and I really appreciate his attention to details - he did an amazing job fixing things I hadn’t even noticed!\nI can’t express just how happy I am with the end results, and I will definitely be reaching out again shortly to do the other floors of my home! Highly recommend!!!",
        "time": 1727797208,
        "translated": false
    },
    {
        "author_name": "Jalyn Graham",
        "author_url": "https://www.google.com/maps/contrib/107275523962679434721/reviews",
        "language": "en",
        "original_language": "en",
        "profile_photo_url": "https://lh3.googleusercontent.com/a-/ALV-UjXkt8B7nsep9RAvxqZz2gqEtKIWTnUHVae-W3aA0dn-iOsE_lWj=s128-c0x00000000-cc-rp-mo",
        "rating": 5,
        "relative_time_description": "a year ago",
        "text": "We were looking for local Calgary painters to paint our interior in our new house upon possession. Frank and his team worked tirelessly to get the job done in time for us to move in. They did excellent work and even put up with my last minute changes. I highly recommend Alberta Colour Painting to anyone who needs their interior painted.",
        "time": 1709396516,
        "translated": false
    }
]
  
  useEffect(() => {
    handleReviewsRequest()


// setPlaceDetails(reviews)
  },[])


  return (
    <div className="lg:mb-20 lg:mt-20 mb-10">
      <ServiceSection
        title="What Our Clients Say"
        description="Real Reviews from Satisfied <br /> Customers"
        buttonText="Read More Reviews"
        isButton={true}
      />

      <div className="w-full max-w-3xl mx-auto px-4">
        {/* Tab Navigation */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab("google")}
            className={cn(
              "flex items-center gap-1  cursor-pointer  px-2 rounded-[20px] transition-colors w-full justify-center",
              activeTab === "google"
                ? "bg-[#0D378D] text-white"
                : "bg-white text-[#0D378D] border-2 border-[#CADBFF]"
            )}
          >
            <div className="h-10 w-10 relative">
              <Image src={GoogleLogo2} alt="gooleLogo" />
            </div>
            <span className="text-[10px] md:text-[15px]  text-left font-medium lg:text-[19px]">
              Google Reviews
            </span>
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
            <span className="text-[10px] md:text-[15px] text-left font-medium lg:text-[19px]">
              HomeStars Reviews
            </span>
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
              <h2 className="text-[#0D378D] text-[26px] font-bold mb-8 uppercase">
                Awards Earned
              </h2>

              <div className="grid grid-cols-1 w-full gap-4 md:grid-cols-3">
                <div className="flex flex-col bg-[#F3F3F3] border-1 border-black/20 p-5 rounded-[14px] items-start">
                  <Image src={Best2025} alt="homeStars" />
                  <h3 className="text-[#0D378D] font-bold lg:text-lg">
                    Best of the Best 2025
                  </h3>
                  <p className="text-black">Winner 4 times</p>
                </div>

                <div className="flex justify-center items-center">
                  <div className="relative">
                    <Image
                      className="w-40 lg:w-50"
                      src={IconVerified}
                      alt="homeStars"
                    />
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
                <span className="text-[18px] text-black ml-2">117 reviews</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="rounded-0 lg:px-10 mx-auto px-2 relative">
        <Swiper
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            360: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            657: {
              slidesPerView: 1,
              spaceBetween: 2,
            },
            601: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {reviews?.map((review :any, index : any) => (
            <SwiperSlide key={index} >
              <div >
                <div className="flex flex-col bg-[#E2E7F1] justify-center p-0 shadow-lg lg:p-4 pl-10 relative review_card lg:min-h-80 h-auto mx-auto">
                  {/* Adjusted the images to be inside the flex container without absolute positioning */}
                  <div className="">
                    <Image
                      src={Reviews1}
                      alt="Review Image"
                      className="w-15 absolute left-1 lg:left-[-20px] lg:mt-0 lg:top-4 lg:w-20 mt-6 mx-auto top-[-20px]"
                    />
                    <Image
                      src={Reviews2}
                      alt="Review Image"
                      className="h-[120px] absolute bottom-[20px] left-[28px] mx-auto"
                    />
                    <Image
                      src={Reviews3}
                      alt="Review Image"
                      className="absolute h-[10px] w-[120px]  bottom-[20px] lg:right-[-28px] mx-auto right-[-20]"
                    />
                  </div>
                  <div className="p-[20px] lg:p-[25px] md:p-[10px]">
                    <p className="text-[11px] text-base text-black font-normal lg:pl-[30px] lg:text-[15px] mb-4 pb-0 pt-[40px] review-text sm:pl-[20px] sm:pr-[-40px]">
                    {review?.text?.length > 200 ? review?.text.slice(0, 300) + '...' : review.text}
                    </p>
                    <span className="text-[#202020] text-sm font-bold lg:pl-[22px] md:pl-[12px] sm:pl-[-20px] sm:text-lg">
                      {review?.author_name}
                    </span>
                  </div>
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
