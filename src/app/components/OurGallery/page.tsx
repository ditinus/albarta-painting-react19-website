
"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import gallery1 from "../../../../public/assets/gallery1.png";
import gallery2 from "../../../../public/assets/gallery2.png";
import gallery3 from "../../../../public/assets/gallery3.png";
import gallery4 from "../../../../public/assets/gallery4.png";
import gallery5 from "../../../../public/assets/gallery5.png";
import { GLightbox } from "glightbox";
import "./style.css";
import Link from "next/link";

const OurGallery = () => {

useEffect(() => {

    const lightbox = new GLightbox({
      touchNavigation: true,
      loop: true,
      width: "90vw",
      height: "90vh",

    });

    return () => {
      lightbox.destroy(); 
    };
  }, []);

  

  return (
    <>
      <section className="section-gallery section-space position-relative margin-bottom-space" id="gallery">
        <div className="container">
          <div className="row g-3">
            <div className="col-6 col-lg-4">
              <div className="gallery-box img-100">
                <Link href={gallery1} className="glightbox gallery-sq-media" data-glightbox="image1">
                  <Image src={gallery1} className="img-fluid" alt="gallery" />
                </Link>
              </div>
            </div>
            <div className="col-6 col-lg-4">
              <div className="gallery-box img-100">
                <Link href={gallery2.blurDataURL} className="glightbox gallery-sq-media" data-glightbox="image2">
                  <Image src={gallery2} className="img-fluid" alt="gallery" />
                </Link>
              </div>
            </div>
            <div className="col-6 col-lg-4">
              <div className="gallery-box img-100">
                <Link href={gallery3} className="glightbox gallery-sq-media" data-glightbox="image3">
                  <Image src={gallery3} className="img-fluid" alt="gallery" />
                </Link>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="gallery-box img-100">
                <Link href={gallery5} className="glightbox gallery-sq-media" data-glightbox="image4">
                  <Image src={gallery5} className="img-fluid" alt="gallery" />
                </Link>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="gallery-box img-50 mb-3">
                <Link href={gallery3} className="glightbox gallery-sq-media" data-glightbox="image5">
                  <Image src={gallery3} className="img-fluid" alt="gallery" />
                </Link>
              </div>
              <div className="gallery-box img-50">
                <Link href={gallery4} className="glightbox gallery-sq-media" data-glightbox="image6">
                  <Image src={gallery4} className="img-fluid" alt="gallery" />
                </Link>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="gallery-box img-100">
                <Link href={gallery5} className="glightbox gallery-sq-media" data-glightbox="image7">
                  <Image src={gallery5} className="img-fluid" alt="gallery" />
                </Link>
              </div>
            </div>
            <div className="col-6 col-lg-4">
              <div className="gallery-box img-100">
                <Link href={gallery1} className="glightbox gallery-sq-media" data-glightbox="image8">
                  <Image src={gallery1} className="img-fluid" alt="gallery" />
                </Link>
              </div>
            </div>
            <div className="col-6 col-lg-4">
              <div className="gallery-box img-100">
                <Link href={gallery2} className="glightbox gallery-sq-media" data-glightbox="image9">
                  <Image src={gallery2} className="img-fluid" alt="gallery" />
                </Link>
              </div>
            </div>
            <div className="col-6 col-lg-4">
              <div className="gallery-box img-100">
                <Link href={gallery1} className="glightbox gallery-sq-media" data-glightbox="image10">
                  <Image src={gallery1} className="img-fluid" alt="gallery" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurGallery;
