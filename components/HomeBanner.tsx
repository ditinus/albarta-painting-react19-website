"use client";
import arrow from "../public/arrow.svg";
import Image from "next/image";
import "./homebanner.css";

const HomeBanner = () => {
  return (
    <div className=" back-img container mx-auto pt-10 pb-10 relative">
      {/* <div className="banner-overlay absolute top-0 left-0 w-full h-full z-10"></div> */}

      <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6 px-6 sm:px-12 z-20 relative">
     
        <div className="text-white">
          <h1 className="text-3xl lg:text-[36px] sm:text-[16px] font-medium mb-4 uppercase">
            Ready to Transform Your Space?
          </h1>
          <p className="text-base lg:text-[16px] sm:text-[12px]">
            Whether it’s a fresh coat of paint for your home or business, we’re
            here to make it happen. Let us bring your vision to life with
            precision and care.
          </p>
        </div>

        <div className="flex items-center lg:justify-end justify-start">
          <a
            href="#"
            className="flex items-center bg-[#0D378D] text-white px-6 py-3 rounded-full text-base font-medium border-2 border-[#cadbff]"
          >
            <span className="mr-2">Schedule a Consultation</span>
            <Image
              className="arrow"
              src={arrow}
              alt="arrow"
              width={20}
              height={20}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
