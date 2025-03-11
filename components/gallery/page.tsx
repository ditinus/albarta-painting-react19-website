"use client";


import offer1 from "@/public/galleryNew-1.png";
import offer2 from '@/public/galleryHome-4.png'
import offer3 from '@/public/galleryNew-2.png'
import offer4 from '@/public/galleryNew-3.png'
import offer5 from '@/public/galleryHome-3.png'

import Image from "next/image";
import "./style.css";
import ServiceSection from "../service-section";
import SmallGallerySection from "./SmallGallerySection";

const OurGallery: React.FC = () => {

  return (
    <div className="gallery-carousel ">

      <div className=" lg:mt-20 lg:mb-16 my-10 ">
      <ServiceSection
        title="Our Gallery"
        description="See the Magic of Transformation  <br />  with Our Painting Work "
        buttonText="View All"
      />
      </div>

      <div className="container-fluid  lg:mt-20 mt-10 mx-8">
        <div className="gallery-slide-start lg:visible md:visible">
          <div className="gallery-slide">
            <Image src={offer1} className="img-fluid" alt={""} />
          </div>
          <div className="gallery-slide">
            <Image src={offer2} className="img-fluid" alt={""} />
          </div>
          <div className="gallery-slide">
            <Image src={offer3} className="img-fluid" alt={""} />
          </div>
          <div className="gallery-slide">
            <Image src={offer4} className="img-fluid" alt={""} />
          </div>
          <div className="gallery-slide">
            <Image src={offer5} className="img-fluid" alt={""} />
          </div>
        
        </div>
      </div>
     <div className="lg:hidden md:hidden">
     <SmallGallerySection/>
     </div>
    </div>
  );
};

export default OurGallery;
