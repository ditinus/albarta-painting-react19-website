"use client";
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import Reviews1 from '@/public/Reviews1.png'
// // import Reviews1 from '../../public/Reviews1.png'
// import Reviews2 from "@/public/Reviews2.png";
// import Reviews3 from "@/public/Reviews3.png";
// import Image from "next/image";
// import './ReviewsCarousel.css'

// import Googlelogo from "../../../../public/assets/googleLogo.png";

// Review data
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

// const ReviewsCarousel = () => {
//   return (
//     <div className="py-2">

//         {/* <TestimonialHeader
//           title="Our Happy Clients"
//           subtitle="See how we’ve helped people achieve their goals."
//           buttonText="View All"
//           buttonUrl="/testimonials"
//           bgColor="#0D378D"
//           textColor="#0D378D"
//           buttonStyle={{ fontSize: "1rem" }}
//         /> */}

//         {/* <div className=" py-2 d-flex w-full flex-col justify-content-center">
//           <Image className="" src={Googlelogo} alt="" />
//         </div> */}

//   <div  className=" ">
//         <Swiper
//           spaceBetween={100}
//           slidesPerView={1}
//           loop={true}
//           pagination={{
//             clickable: true,
//           }}
//           navigation={true}
//           breakpoints={{
//             640: {
//               slidesPerView: 1,
//               spaceBetween: 20,
//             },
//             768: {
//               slidesPerView: 2,
//               spaceBetween: 30,
//             },
//             1024: {
//               slidesPerView: 3,
//               spaceBetween: 40,
//             },
//           }}
//         >
//           {reviews?.map((review, index) => (
//             <SwiperSlide key={index} className="flex flex-col justify-between">
//               <div className=" bg-[#E2E7F1] shadow-md w-[200px] sm:w-[500px] h-[400px] shadow-lg"  style={{marginLeft:"5em"}}>
//                 <Image

//                   style={{
//                     position: "absolute",
//                     zIndex: 9999,
//                     top: "18px",
//                     left: "4em",
//                   }}
//                   src={Reviews1}
//                   alt="Review Image"
//                 />

//                 <Image
//                   style={{
//                     position: "absolute",
//                     zIndex: 9999,
//                     // height: "291px",
//                     // bottom: "18px",
//                     top:"9em",
//                     left:"104px"
//                   }}
//                   src={Reviews2}
//                   alt="Review Image"
//                 />
//                 <Image
//                   style={{
//                     position: "absolute",
//                     zIndex: 9999,
//                     bottom: "14px",
//                     right: "14px",
//                     // width:"140px"
//                   }}
//                   src={Reviews3}
//                   alt="Review Image"
//                 />
//                 <div className="review-content">
//                   <p className="review-text ">{review.review}</p>
//                   <span className="review-name ">{review.name}</span>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default ReviewsCarousel;

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
        title="Our Gallery"
        description="See the Magic of Transformation <br /> with Our Painting Work"
        buttonText="View All"
      />

      <div className="flex justify-center mb-20 ">
        <Image src={GoogleLogo} className="w-64 " alt="google-logo" />
      </div>
      <div className="relative  px-10 mx-auto">
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
              spaceBetween: 40,
            },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index} className="flex flex-col justify-between ">
              <div className="bg-[#E2E7F1] shadow-lg   relative rounded-xl p-4 flex flex-col justify-center ">
                {/* Adjusted the images to be inside the flex container without absolute positioning */}
                <div className="">
                  <Image
                    src={Reviews1}
                    alt="Review Image"
                    className="mx-auto  absolute top-4 left-[-20px] "
                  />
                  <Image
                    src={Reviews2}
                    alt="Review Image"
                    className="mx-auto absolute bottom-[20px] left-[28px] h-[230px]"
                  />
                  <Image
                    src={Reviews3}
                    alt="Review Image"
                    className="mx-auto absolute bottom-[20px] right-[-10px]"
                  />
                </div>
                <div className="p-[25px]">
                  <p className="review-text  sm:text-lg font-medium text-black mb-4  p-[40px]  pb-0 pr-[-10px]">
                    {review.review}
                  </p>
                  <span className=" font-bold text-sm sm:text-lg text-[#202020] p-[40px]">
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
