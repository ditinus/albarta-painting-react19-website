

"use client";
import React, { useState } from "react";
import "./HomeOurGallery.css"; // Add your CSS styles here

// Images (Replace with your actual images or use placeholders)
import offer1 from "../../../../public/assets/banner.png";
import offer2 from "../../../../public/assets/hero.png";
import offer3 from "../../../../public/assets/decorGallery.png";
import offer4 from "../../../../public/assets/decorRoom.png";
import offer5 from "../../../../public/assets/Gallery-First.png";
import Image from "next/image";
import TestimonialHeader from "../TestimonialHeader/page";

const HomeOurGallery: React.FC = () => {
  const offers = [
    { id: 1, imageSrc: offer1 },
    { id: 2, imageSrc: offer2 },
    { id: 3, imageSrc: offer3 },
    { id: 4, imageSrc: offer4 },
    { id: 5, imageSrc: offer5 },
  ];

  const [enlargedIndex, setEnlargedIndex] = useState<number>(2);

  const handleImageClick = (index: number): void => {
    setEnlargedIndex(index);
  };

  return (
    <div className="gallery-carousel">
      <TestimonialHeader
        title="Our Gallery"
        subtitle="See the Magic of Transformation with Our Painting Work"
        buttonText="View All"
        buttonUrl="/testimonials"
        bgColor="#0D378D"
        textColor="#0D378D"
        buttonStyle={{ fontSize: "1rem" }}
      />

       <div className="container-fluid mt-5">
  <div className="gallery-slide-start">
    <div className="gallery-slide">
      <Image src={offer1} className="img-fluid"  alt={""}  />
    </div>
    <div className="gallery-slide">
    <Image src={offer2} className="img-fluid"   alt={""} />
    </div>
    <div className="gallery-slide">
    <Image src={offer3} className="img-fluid"  alt={""}  />
    </div>
    <div className="gallery-slide">
    <Image src={offer4} className="img-fluid"  alt={""}  />
    </div>
    <div className="gallery-slide">
    <Image src={offer5} className="img-fluid" alt={""}  />
    </div>
    <div className="gallery-slide">
    <Image src={offer1} className="img-fluid"   alt={""} />
    </div>
  </div>

</div>

    </div>
  );
};

export default HomeOurGallery;
