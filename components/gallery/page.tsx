"use client";


import offer1 from "@/public/galleryHome-5.png";
import offer2 from '@/public/galleryHome-3.png'
import offer3 from '@/public/galleryHome-4.png'
import offer4 from '@/public/galleryHome-3.png'
import offer5 from '@/public/galleryHome-4.png'
import offer6 from '@/public/galleryHome-5.png'
import Image from "next/image";
import "./style.css";
import ServiceSection from "../service-section";

const OurGallery: React.FC = () => {
  // const offers = [
  //   { id: 1, imageSrc: offer1 },
  //   { id: 2, imageSrc: offer1 },
  //   { id: 3, imageSrc: offer1 },
  //   { id: 4, imageSrc: offer1 },
  //   { id: 5, imageSrc: offer1 },
  // ];

  return (
    <div className="gallery-carousel ">

      <div className="mt-3">
      <ServiceSection
        title="Our Gallery"
        description="See the Magic of Transformation  <br />  with Our Painting Work "
        buttonText="View All"
      />
      </div>

      <div className="container-fluid lg:mt-20 mt-10">
        <div className="gallery-slide-start">
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
          <div className="gallery-slide">
            <Image src={offer6} className="img-fluid" alt={""} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurGallery;
