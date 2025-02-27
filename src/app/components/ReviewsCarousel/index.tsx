import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Reviews1 from "../../../../public/assets/Reviews1.png";
import Reviews2 from "../../../../public/assets/Reviews2.png";
import Reviews3 from "../../../../public/assets/Reviews3.png";
import "./style.css";
import Image from "next/image";
import TestimonialHeader from "../TestimonialHeader/page";


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
    <div className="reviews-carousel-container  pt-0">
            <TestimonialHeader
              title="Our Happy Clients"
              subtitle="See how we’ve helped people achieve their goals."
              buttonText="View All"
              buttonUrl="/testimonials"
              bgColor="#0D378D"
              textColor="#0D378D"
              buttonStyle={{ fontSize: "1rem" }}
              
            />
      <div style={{ marginBottom: "20px" }} className="mb-50">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
          }}
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
          {reviews?.map((review, index) => (
            <SwiperSlide key={index} className="">
              <div className=" review-card container ">
                <Image
                  style={{
                    position: "absolute",
                    zIndex: 9999,
                    top: "-48px",
                  }}
                  src={Reviews1}
                  alt="Review Image"
                />

                <Image
                  style={{
                    position: "absolute",
                    zIndex: 9999,
                    height: "163px",
                    bottom: "11px",
                
                  }}
                  src={Reviews2}
                  alt="Review Image"
                />
                <Image
                  style={{
                    position: "absolute",
                    zIndex: 9999,
                    bottom: "14px",
                    right: "-15px",
                  }}
                  src={Reviews3}
                  alt="Review Image"
                />
                <div className="review-content">
                  <p className="review-text left-0 top-0">{review.review}</p>
                  <span className="review-name d-flex">{review.name}</span>
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
