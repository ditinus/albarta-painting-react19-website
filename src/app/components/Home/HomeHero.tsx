"use client"
import "./homehero.css";
import Image from "next/image";
import arrow from "../../../../public/assets/HoeAboutArrow.png";

const HomeHero = () => {
  return (
    <section className="hero">
      {/* <div className="overlay"></div> */}
      <div className="hero-content">
        <h1>
          EXPERT <span className="highlight">CALGARY PAINTERS</span>
        </h1>
        <p>for Interior and Exterior House Painting Services</p>
        <div className="buttons1">
          <div className="btn-with-arrow">
            <a href="#" className="btn1 primary">
              Get a Free Quote
              <Image className="card-btn-arrows" src={arrow} alt="arrow" />
            </a>
          </div>
          <a href="#" className="btn1 secondary">
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
