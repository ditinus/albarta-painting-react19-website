


"use client";
import React, { useState } from "react";


import offer1 from "@/public/banner.png";


import Image from "next/image";
import "./style.css"

const OurGallery: React.FC = () => {
  const offers = [
    { id: 1, imageSrc: offer1 },
    { id: 2, imageSrc: offer1 },
    { id: 3, imageSrc: offer1 },
    { id: 4, imageSrc: offer1 },
    { id: 5, imageSrc: offer1 },
  ];



  return (
    <div className="gallery-carousel">
   

       <div className="container-fluid mt-5">
  <div className="gallery-slide-start">
    <div className="gallery-slide">
      <Image src={offer1} className="img-fluid"  alt={""}  />
    </div>
    <div className="gallery-slide">
    <Image src={offer1} className="img-fluid"   alt={""} />
    </div>
    <div className="gallery-slide">
    <Image src={offer1} className="img-fluid"  alt={""}  />
    </div>
    <div className="gallery-slide">
    <Image src={offer1} className="img-fluid"  alt={""}  />
    </div>
    <div className="gallery-slide">
    <Image src={offer1} className="img-fluid" alt={""}  />
    </div>
    <div className="gallery-slide">
    <Image src={offer1} className="img-fluid"   alt={""} />
    </div>
  </div>

</div>

    </div>
  );
};

export default OurGallery;
