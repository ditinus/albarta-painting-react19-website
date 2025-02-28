"use client";
import arrow from '../../../../public/assets/arrow.svg';
import './Homebanner.css';
import Image from 'next/image';

const HomeBanner = () => {
  return (
    <div className="banner-wrap">
      <div className="banner">
        <div className=" banner-container">
          <div className="row align-items-center">
            {/* Banner Text Section */}
            <div className="col-12 col-md-8 banner-text">
              <h1>Ready to Transform Your Space?</h1>
              <p>Whether it’s a fresh coat of paint for your home or business, we’re here to make it happen. Let us bring your vision to life with precision and care.</p>
            </div>

            {/* Button Section */}
            <div className="col-12 col-md-4 banner-btn d-flex align-items-center justify-content-center">
              <a href="#" className="about-btn">
                <span>Schedule a Consultation</span>
                <Image className="arrow" src={arrow} alt="arrow" width={20} height={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
