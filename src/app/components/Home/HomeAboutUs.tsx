"use client";

import Image from 'next/image';
import about from '../../../../public/assets/decorGallery.png';
import arrow from '../../../../public/assets/HoeAboutArrow.png';
import './HomeAboutUs.css';

const AboutSection = () => {
  return (
    <section className="about-us">
      <div className="container-fluid about-container">
        <div className="row align-items-center">
      
          <div className="col-12 col-lg-7 about-image">
            <div className="experience-tag">10 Years of Experience</div>
            <Image src={about} alt="Luxury Living Room" layout="responsive" />
          </div>

 
          <div className="col-12 col-lg-5 about-content mt-3">
            <div className="card about-card border-0">
              <div className="card-body">
                <h2 className="card-title">About Us</h2>
                <h3 className="card-subtitle mb-3 title-width">
                  EXPERTS IN COLOURING YOUR WORLD
                </h3>
                <p className='card-text'>
                  Welcome to Alberta Colour Painting, your trusted partner for professional interior and exterior painting services in Calgary.
                  Our team, featuring the finest Calgary painters, ensures every stroke reflects our commitment to beautifying your space
                  with precision and quality. Whether you’re looking for expert Calgary interior painters or need comprehensive services
                  from a top Calgary painting company, we’ve got you covered. Our interior painting services are tailored to transform your
                  living spaces with elegance and style.
                </p>
                <div>
                  <a href="#" className="about-btns">
                    <span>Learn More</span>
                    
                    <Image className="card-btn-arrow" src={arrow} alt="arrow" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;